"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Brain, Code2, Cpu, Globe, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

const projects = [
    {
        title: "Leaf Lens",
        description: "An AI-powered plant health diagnostic system using computer vision to detect diseases and provide treatment recommendations.",
        category: "Machine Learning",
        tags: ["PyTorch", "FastAPI", "React Native"],
        icon: <Brain size={24} className="text-primary" />,
        image: "/leaf-lens.png",
        github: "https://github.com/midlaj-muhammed/LeafLens",
        live: "https://leaf-lens-one.vercel.app/"
    },
    {
        title: "Write Genuine",
        description: "Advanced AI-driven plagiarism detection system that ensures content authenticity and original authorship through neural linguistic analysis.",
        category: "Full Stack",
        tags: ["Next.js", "OpenAI", "NLP", "Tailwind"],
        icon: <Globe size={24} className="text-primary" />,
        image: "/write-genuine-new.png",
        github: "https://github.com/midlaj-muhammed/WriteGenuine",
        live: "https://writegenuine.netlify.app/"
    },
    {
        title: "Explainable AI Credit Scoring System",
        description: "A machine learning application designed to predict loan defaults while providing complex SHAP-based explanations for decisions.",
        category: "Machine Learning",
        tags: ["Python", "XGBoost", "SHAP", "React"],
        icon: <Brain size={24} className="text-primary" />,
        image: "/credit-scoring.png",
        github: "https://github.com/midlaj-muhammed/Explainable-AI-Credit-Scoring-System",
        live: "https://explainable-ai-credit-scoring.streamlit.app/"
    },
    {
        title: "AI-Based Data Cleaner",
        description: "Web application utilizing AI for comprehensive data cleaning and validation, detecting logical inconsistencies automatically.",
        category: "Machine Learning",
        tags: ["Python", "Pandas", "NLP", "FastAPI"],
        icon: <Search size={24} className="text-primary" />,
        image: "/data-cleaner.png",
        github: "https://github.com/midlaj-muhammed/AI-Based-Data-Cleaner",
        live: "https://ai-based-data-cleaner.streamlit.app/"
    },
    {
        title: "Sign Language Detector Pro",
        description: "AI-powered web application identifying ASL gestures from video leveraging MediaPipe and LSTM networks.",
        category: "Machine Learning",
        tags: ["TensorFlow", "MediaPipe", "React"],
        icon: <Code2 size={24} className="text-primary" />,
        image: "/sign-language.png",
        github: "https://github.com/midlaj-muhammed/Sign-Language-Detector-Pro",
        live: "https://huggingface.co/spaces/midlajvalappil/Sign-Language-Detector-Pro"
    },
    {
        title: "AI-Powered YouTube Transcript Tutor",
        description: "Streamlit app transforming YouTube videos into interactive learning experiences using LLMs.",
        category: "Full Stack",
        tags: ["Python", "Gemini AI", "Streamlit"],
        icon: <Globe size={24} className="text-primary" />,
        image: "/transcript-tutor.png",
        github: "https://github.com/midlaj-muhammed/AI-Powered-YouTube-Transcript-Tutor",
        live: "https://huggingface.co/spaces/midlajvalappil/AI-Powered-YouTube-Transcript-Tutor"
    },
    {
        title: "YOLO v5 Target Detection Web",
        description: "Real-time web-based object detection system featuring interactive ROI selection and live camera processing.",
        category: "Machine Learning",
        tags: ["PyTorch", "YOLOv5", "Flask"],
        icon: <Cpu size={24} className="text-primary" />,
        image: "/yolo-detection.png",
        github: "https://github.com/midlaj-muhammed/YOLO-v5-Target-Detection-Web",
        live: null
    },
    {
        title: "AI-Note-Summarizer",
        description: "Advanced AI model converting lengthy documents into concise bullet-point summaries, supports PDF uploads.",
        category: "Full Stack",
        tags: ["Node.js", "GPT-4", "Next.js"],
        icon: <Search size={24} className="text-primary" />,
        image: "/note-summarizer.png",
        github: "https://github.com/midlaj-muhammed/AI-Note-Summarizer",
        live: "https://huggingface.co/spaces/midlajvalappil/AI-Note-Summarizer"
    },
    {
        title: "Multilingual Sentiment Analysis Tool",
        description: "AI-powered tool that analyzes emotional tone across multiple languages, leveraging BERT and LSTM models for cross-lingual understanding.",
        category: "Machine Learning",
        tags: ["Python", "Transformers", "BERT", "FastAPI"],
        icon: <Brain size={24} className="text-primary" />,
        image: "/sentiment-analysis.png",
        github: "https://github.com/midlaj-muhammed/Multilingual-Sentiment-Analysis-Tool",
        live: "https://multilingual-sentiment-analysis.streamlit.app/"
    }
];

const categories = ["All", "Machine Learning", "Full Stack"];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-background relative" suppressHydrationWarning>
            <div className="glow-mesh" />
            <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
            <Navbar />

            <main className="pt-40 pb-20 px-6 md:px-20 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
                        >
                            Intelligent <br /><span className="text-gradient italic">Showcase_</span>
                        </motion.h1>
                        <p className="text-secondary text-xl max-w-2xl font-medium leading-relaxed italic">
                            A curated collection of neural systems and algorithmic architectures.
                        </p>
                    </header>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === cat
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(13,127,242,0.4)]"
                                    : "glass text-secondary hover:bg-white/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col group"
                            >
                                {project.image && (
                                    <div className="aspect-video relative overflow-hidden">
                                        <Image
                                            src={getImagePath(project.image)}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                    </div>
                                )}

                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                                        {project.icon}
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors italic leading-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow font-medium italic">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded bg-white/5 text-primary border border-primary/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-8 mt-auto pt-6 border-t border-white/5">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-white hover:text-primary transition-all">
                                            <Github size={16} /> Source_
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-white hover:text-primary transition-all">
                                                <ExternalLink size={16} /> Live_
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
