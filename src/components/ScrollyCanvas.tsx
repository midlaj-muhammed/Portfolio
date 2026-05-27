"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 192;
const INITIAL_FRAMES = 25;
const SCROLL_BUFFER = 8; // Load ±8 frames around current position

function getFrameUrl(index: number) {
  const paddedIndex = index.toString().padStart(3, "0");
  return `./sequence/frame_${paddedIndex}_delay-0.041s.webp`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const lastDrawnRef = useRef(-1);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Load a single frame into cache
  const loadFrame = useCallback((index: number): Promise<HTMLImageElement> => {
    const cached = imageCache.current.get(index);
    if (cached && cached.complete) return Promise.resolve(cached);

    return new Promise((resolve) => {
      const img = new Image();
      img.src = getFrameUrl(index);
      img.onload = () => {
        imageCache.current.set(index, img);
        resolve(img);
      };
      img.onerror = () => {
        imageCache.current.set(index, img);
        resolve(img);
      };
    });
  }, []);

  // Detect mobile and reduced motion
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsMobile(mobile);

    if (reducedMotion) {
      // Reduced motion: load just the first frame statically
      loadFrame(0).then(() => setLoaded(true));
    }
  }, [loadFrame]);

  // Preload initial frames on mount
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;

    // Skip initial preload if reduced-motion already handled it
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const loadInitial = async () => {
      for (let i = 0; i < INITIAL_FRAMES; i++) {
        if (cancelled) return;
        await loadFrame(i);
        if (cancelled) return;
        loadedCount++;
        const progress = Math.round((loadedCount / INITIAL_FRAMES) * 100);
        setLoadProgress(progress);
      }
      if (!cancelled) {
        setTimeout(() => setLoaded(true), 200);
      }
    };

    loadInitial();
    return () => { cancelled = true; };
  }, [loadFrame]);

  // Ensure frames around current scroll position are loaded
  const ensureFramesLoaded = useCallback((centerIndex: number) => {
    const start = Math.max(0, centerIndex - SCROLL_BUFFER);
    const end = Math.min(FRAME_COUNT - 1, centerIndex + SCROLL_BUFFER);
    for (let i = start; i <= end; i++) {
      if (!imageCache.current.has(i)) {
        loadFrame(i);
      }
    }
  }, [loadFrame]);

  // Draw image with object-fit: cover logic
  const drawImageProp = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const canvas = ctx.canvas;
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Sync canvas render with scroll progress
  useEffect(() => {
    if (!loaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const currentProgress = scrollYProgress.get();
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(currentProgress * FRAME_COUNT));
      const img = imageCache.current.get(frameIndex);
      if (img) drawImageProp(ctx, img);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));

      if (frameIndex !== lastDrawnRef.current) {
        lastDrawnRef.current = frameIndex;

        // Trigger lazy loading of nearby frames
        ensureFramesLoaded(frameIndex);

        // Draw current frame if available
        const img = imageCache.current.get(frameIndex);
        if (img) {
          requestAnimationFrame(() => {
            drawImageProp(ctx, img);
          });
        }
      }
    });

    return () => {
      window.removeEventListener("resize", updateSize);
      unsubscribe();
    };
  }, [loaded, scrollYProgress, ensureFramesLoaded]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#121212]" style={{ height: isMobile ? "300vh" : "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover"
        />
      </div>

      <Overlay progress={scrollYProgress} />

      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center w-[80vw] max-w-sm">
              <div className="text-7xl sm:text-8xl md:text-[10rem] font-light text-white mb-6 tabular-nums flex items-baseline">
                {loadProgress}
                <span className="text-3xl sm:text-4xl md:text-6xl text-white/50 ml-2">%</span>
              </div>

              <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>

              <div className="mt-6 text-[10px] sm:text-xs tracking-[0.3em] font-mono text-white/40 uppercase">
                Initializing Experience_
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
