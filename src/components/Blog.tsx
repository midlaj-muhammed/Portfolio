"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  slug: string;
  date: string;
  relatedLink: string;
}

const posts: BlogPost[] = [
  {
    title: "Building Explainable AI: Why SHAP Matters in Credit Scoring",
    excerpt: "How SHAP (SHapley Additive exPlanations) brings transparency to black-box ML models in financial decision-making, and why regulators are demanding it.",
    category: "Explainable AI",
    readTime: "8 min",
    slug: "explainable-ai-shap-credit-scoring",
    date: "2025-11-15",
    relatedLink: "https://explainable-ai-credit-scoring.streamlit.app/",
  },
  {
    title: "Computer Vision for Agriculture: Detecting Plant Diseases with Deep Learning",
    excerpt: "A practical walkthrough of building a plant disease detection system using PyTorch, transfer learning, and image classification techniques.",
    category: "Computer Vision",
    readTime: "12 min",
    slug: "computer-vision-plant-disease-detection",
    date: "2025-10-22",
    relatedLink: "https://leaf-lens-one.vercel.app/",
  },
  {
    title: "Real-Time Sign Language Recognition with MediaPipe and LSTMs",
    excerpt: "Combining Google MediaPipe hand tracking with LSTM networks to build a real-time ASL gesture recognition pipeline from webcam video.",
    category: "Deep Learning",
    readTime: "10 min",
    slug: "sign-language-recognition-mediapipe-lstm",
    date: "2025-09-18",
    relatedLink: "https://huggingface.co/spaces/midlajvalappil/Sign-Language-Detector-Pro",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Blog() {
  return (
    <section id="blog" aria-labelledby="blog-heading" className="relative z-20 bg-[#121212] py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <motion.h2
            id="blog-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
          >
            Insights &amp; <span className="font-semibold italic font-serif opacity-80">Research</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg"
          >
            Thoughts on AI, machine learning, and building intelligent systems.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={post.relatedLink}
              target="_blank"
              rel="noreferrer"
              variants={fadeUpVariant}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.25] hover:-translate-y-2 p-6 sm:p-8 block"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs tracking-widest text-white/50 uppercase border border-white/10 px-3 py-1 rounded-full bg-white/5">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/30">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-medium mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-white/80 transition-colors">
                Read more <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
