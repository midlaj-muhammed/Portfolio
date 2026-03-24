"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 192; // 000 to 191

function getFrameUrl(index: number) {
  let basePath = "";
  if (typeof window !== "undefined") {
    basePath = window.location.pathname.startsWith("/Portfolio") ? "/Portfolio" : "";
  }
  const paddedIndex = index.toString().padStart(3, "0");
  return `${basePath}/sequence/frame_${paddedIndex}_delay-0.041s.webp`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Use Framer Motion to get scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images on mount
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      const handleProgress = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setTimeout(() => setLoaded(true), 400);
        }
      };
      
      img.onload = handleProgress;
      img.onerror = () => {
        console.warn(`Frame failed to load: ${img.src}`);
        handleProgress(); 
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Function to draw image with object-fit: cover logic
  const drawImageProp = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const canvas = ctx.canvas;
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image (landscape canvas, portrait image)
      // Fit width, let height overflow
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image (portrait canvas, landscape image)
      // Fit height, let width overflow
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Sync canvas render with scroll progress
  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to parent resolution for sharpness
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-draw current frame on resize
      const currentProgress = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(currentProgress * FRAME_COUNT)
      );
      drawImageProp(ctx, images[frameIndex]);
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Initial size

    // Subscribe to scroll changes
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      requestAnimationFrame(() => {
        drawImageProp(ctx, images[frameIndex]);
      });
    });

    return () => {
      window.removeEventListener("resize", updateSize);
      unsubscribe();
    };
  }, [loaded, images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Sticky container that stays in viewport while scrolling through the 500vh parent */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay Component taking the shared scroll progress */}
      <Overlay progress={scrollYProgress} />

      {/* Epic Cinematic Preloader (Moved outside sticky container to guarantee apex z-index over Overlay) */}
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
