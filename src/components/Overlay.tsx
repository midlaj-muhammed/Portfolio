"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { FileText } from "lucide-react";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // We use the scroll progress [0, 1] across the 500vh to map opacities and parallax depths

  // Section 1: 0% to 20% scroll
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  // Mid depth parallax (0.5x speed)
  const y1 = useTransform(progress, [0, 0.25], [0, -250]); 

  // Section 2: 25% to 50% scroll
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  // Foreground depth parallax (1.0x speed relative to itself)
  const y2 = useTransform(progress, [0.2, 0.55], [300, -300]);

  // Section 3: 50% to 80% scroll
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  // Back depth parallax (0.2x speed) - moves very little natively
  const y3 = useTransform(progress, [0.5, 0.85], [100, -100]);

  return (
    <div id="home" className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8">

        {/* Section 1 - Name & Tagline */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left pl-8 md:pl-24"
        >
          {/* Mobile gradient backdrop for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#121212]/90 via-[#121212]/50 to-transparent md:hidden pointer-events-none" />
          <h1 className="relative text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] md:mix-blend-difference md:drop-shadow-none">
            Muhammed <br/> Midlaj
          </h1>
          <p className="relative text-xl sm:text-2xl md:text-4xl text-gray-300 font-light mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] md:mix-blend-difference md:drop-shadow-none">
            AI Specialist & Full Stack Developer.
          </p>
          <motion.a
            href="./resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-sm font-medium transition-all text-white w-max"
          >
            <FileText size={18} />
            <span className="relative z-10 tracking-widest uppercase">View Resume</span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1 shadow-[0_0_10px_#4ade80]" />
          </motion.a>
        </motion.div>

        {/* Section 2 - Core Philosophy */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right pr-8 md:pr-24"
        >
          <h2 className="text-3xl md:text-5xl max-w-2xl font-light leading-tight mix-blend-difference">
            <span className="font-semibold italic font-serif">Architecting</span> intelligent systems with deep learning & high-performance engineering.
          </h2>
        </motion.div>

        {/* Section 3 - Bio snip */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-32 text-center px-4"
        >
          <h2 className="text-3xl md:text-5xl max-w-2xl font-medium leading-tight mix-blend-difference">
            Teaching machines to <span className="font-mono text-white/60">"see", "understand"</span> <br/> and explain decisions.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
