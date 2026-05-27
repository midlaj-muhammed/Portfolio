"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Project {
  title: string;
  category: string;
  description: string;
  sourceLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Leaf Lens",
    category: "Computer Vision / AI",
    description: "An AI-powered plant health diagnostic system using computer vision to detect diseases and provide treatment recommendations.",
    sourceLink: "https://github.com/midlaj-muhammed/LeafLens",
    liveLink: "https://leaf-lens-one.vercel.app/"
  },
  {
    title: "Write Genuine",
    category: "NLP / AI",
    description: "Advanced AI-driven plagiarism detection system ensuring content authenticity and original authorship through neural linguistic analysis.",
    sourceLink: "https://github.com/midlaj-muhammed/WriteGenuine",
    liveLink: "https://writegenuine.netlify.app/"
  },
  {
    title: "XAI Credit Scoring",
    category: "Explainable AI",
    description: "A machine learning application predicting loan defaults while providing complex SHAP-based explanations for decisions.",
    sourceLink: "https://github.com/midlaj-muhammed/Explainable-AI-Credit-Scoring-System",
    liveLink: "https://explainable-ai-credit-scoring.streamlit.app/"
  },
  {
    title: "AI Data Cleaner",
    category: "Automation / Data",
    description: "Web application utilizing AI for comprehensive data cleaning and validation, detecting logical inconsistencies automatically.",
    sourceLink: "https://github.com/midlaj-muhammed/AI-Based-Data-Cleaner",
    liveLink: "https://ai-based-data-cleaner.streamlit.app/"
  },
  {
    title: "Sign Language Detector Pro",
    category: "Computer Vision / LSTM",
    description: "AI-powered web application identifying ASL gestures from video leveraging MediaPipe and LSTM networks.",
    sourceLink: "https://github.com/midlaj-muhammed/Sign-Language-Detector-Pro",
    liveLink: "https://huggingface.co/spaces/midlajvalappil/Sign-Language-Detector-Pro"
  },
  {
    title: "YT Transcript Tutor",
    category: "LLM / EdTech",
    description: "Streamlit app transforming YouTube videos into interactive learning experiences using Large Language Models.",
    sourceLink: "https://github.com/midlaj-muhammed/AI-Powered-YouTube-Transcript-Tutor",
    liveLink: "https://huggingface.co/spaces/midlajvalappil/AI-Powered-YouTube-Transcript-Tutor"
  },
  {
    title: "YOLO v5 Target Detection Web",
    category: "Computer Vision",
    description: "Real-time web-based object detection system featuring interactive ROI selection and live camera processing.",
    sourceLink: "https://github.com/midlaj-muhammed/YOLO-v5-Target-Detection-Web",
  },
  {
    title: "AI-Note-Summarizer",
    category: "NLP / Digestion",
    description: "Advanced AI model converting lengthy documents into concise bullet-point summaries, supporting PDF uploads.",
    sourceLink: "https://github.com/midlaj-muhammed/AI-Note-Summarizer",
    liveLink: "https://huggingface.co/spaces/midlajvalappil/AI-Note-Summarizer"
  },
  {
    title: "Multilingual Sentiment Tool",
    category: "NLP / BERT",
    description: "AI-powered tool analyzing emotional tone across languages, leveraging BERT and LSTM models for cross-lingual understanding.",
    sourceLink: "https://github.com/midlaj-muhammed/Multilingual-Sentiment-Analysis-Tool",
    liveLink: "https://multilingual-sentiment-analysis.streamlit.app/"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRailRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !scrollRailRef.current) return;
    
    // Check if desktop; on mobile vertical stack might be better, but prompt asked for horizontal scroll
    // The prompt says: "Horizontal scroll for the Projects section"
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      // Calculate how far to move left
      const railWidth = scrollRailRef.current!.offsetWidth;
      const windowWidth = window.innerWidth;
      const moveDistance = railWidth - windowWidth + 100; // plus padding

      gsap.to(scrollRailRef.current, {
        x: -moveDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Smooth scrub using lenis
          end: () => `+=${moveDistance}`,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    });
    
    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative z-20 bg-[#0a0a0a] border-t border-white/5 overflow-x-clip md:overflow-hidden min-h-screen flex flex-col md:flex-row md:items-center py-24 md:py-0"
    >
      <div className="relative md:absolute md:top-20 md:left-12 lg:left-24 z-30 px-6 sm:px-8 md:px-0 mb-8 md:mb-0">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
        >
          Intelligence <br className="block sm:hidden" /> <span className="font-semibold italic font-serif opacity-80">Showcase</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[1px] bg-white/30 hidden md:block"
        />
      </div>

      <div 
        ref={scrollRailRef} 
        className="flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-24 gap-32 md:gap-12 md:w-max overflow-visible pb-32 md:pb-0 scrollbar-hide"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="sticky md:static flex-shrink-0 w-full md:w-[450px] group relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/[0.15] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.25] p-6 sm:p-8 md:p-10 md:hover:-translate-y-2 shadow-2xl md:shadow-[0_8px_32px_rgba(255,255,255,0.02)]"
            style={{ 
               willChange: "transform, opacity",
               top: `calc(8rem + ${index * 16}px)` 
            }}
          >
            {/* Subtle hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="flex justify-between items-start mb-8 relative z-10 flex-col gap-4">
              <span className="text-xs tracking-widest text-white/50 uppercase border border-white/10 px-3 py-1 rounded-full bg-white/5">
                {project.category}
              </span>
            </div>

            <div className="relative z-10 min-h-[140px] flex flex-col justify-start">
              <h3 className="text-2xl font-medium mb-3 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm hidden sm:block">
                {project.description}
              </p>
            </div>
            
            {/* Action Links */}
            <div className="relative z-10 flex gap-4 mt-8 border-t border-white/10 pt-6">
              {project.liveLink && (
                 <a 
                   href={project.liveLink}
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                 >
                   <ExternalLink size={16} /> Live Demo
                 </a>
              )}
              {project.sourceLink && (
                 <a 
                   href={project.sourceLink}
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                 >
                   <Code size={16} /> Source
                 </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
