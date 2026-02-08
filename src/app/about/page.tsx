"use client";
import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function AboutPage() {
    const experiences = [
        {
            role: "Machine Learning Specialist",
            company: "Freelance / Research",
            period: "2023 - Present",
            desc: "Focusing on Explainable AI (XAI) and Computer Vision applications. Built robust ML pipelines for credit risk and real-time detection."
        },
        {
            role: "Full Stack Engineer",
            company: "Various Projects",
            period: "2021 - 2023",
            desc: "Developed scalable web architectures using React, Node.js, and Java. Built 'Locus', a comprehensive microservices suite."
        },
        {
            role: "Software Developer",
            company: "Early Contributions",
            period: "2020 - 2021",
            desc: "Focused on core programming principles and building functional web applications for small businesses."
        }
    ];

    return (
        <div className="min-h-screen bg-background relative" suppressHydrationWarning>
            <div className="glow-mesh" />
            <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
            <Navbar />

            <main className="pt-40 pb-20 px-6 md:px-20 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Intro Section */}
                    <section className="flex flex-col md:flex-row gap-20 items-center mb-40">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full md:w-[450px] aspect-square relative"
                        >
                            <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full animate-pulse" />
                            <div className="relative w-full h-full glass rounded-[4rem] overflow-hidden border-4 border-white/10 shadow-2xl group">
                                <Image
                                    src={getImagePath("/midlaj-avatar.png")}
                                    alt="Muhammed Midlaj"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    quality={100}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                    <div className="w-full h-[2px] bg-primary/50 absolute top-0 left-0 animate-scan shadow-[0_0_15px_rgba(13,127,242,0.8)]" />
                                </div>
                            </div>
                        </motion.div>
                        <div className="flex-1 space-y-8">
                            <motion.h1
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-8xl font-black tracking-tighter"
                            >
                                Deciphering <br /><span className="text-gradient italic">Complexity_</span>
                            </motion.h1>
                            <p className="text-secondary text-xl font-medium leading-relaxed italic">
                                I am a developer who believes that AI should be more than just a black box—it should be a transparent and powerful tool for solving real-world challenges.
                            </p>
                            <p className="text-secondary text-xl font-medium leading-relaxed italic">
                                As I delved deeper into Machine Learning, I became fascinated by how we can teach machines to "see", "understand", and "explain" their decisions.
                            </p>
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="mb-40">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl font-black italic tracking-tight mb-6 flex items-center justify-center gap-6">
                                <Trophy className="text-primary" size={48} /> The Journey_
                            </h2>
                            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                        </div>
                        <div className="max-w-4xl mx-auto space-y-10">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-10 rounded-[2.5rem] relative group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                                        <div>
                                            <h3 className="text-3xl font-black italic group-hover:text-primary transition-colors">{exp.role}</h3>
                                            <p className="text-primary font-bold uppercase tracking-widest text-sm mt-1">{exp.company}</p>
                                        </div>
                                        <span className="px-6 py-2 rounded-xl glass text-xs text-secondary font-black uppercase tracking-widest border border-white/10 shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-secondary text-lg leading-relaxed font-medium italic">{exp.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Grid: Education & Achievements */}
                    <div className="grid md:grid-cols-2 gap-10">
                        <motion.section
                            whileHover={{ y: -10 }}
                            className="glass-card p-12 rounded-[3.5rem]"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                                <GraduationCap className="text-primary" size={32} />
                            </div>
                            <h2 className="text-3xl font-black italic mb-8">Academic_ <span className="text-gradient">Roots</span></h2>
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold italic">Computer Science Specialist</h3>
                                <p className="text-secondary text-lg font-medium italic leading-relaxed">
                                    Dedicated to mastering the fundamentals of computing while specializing in modern AI/ML frameworks and high-performance system designs.
                                </p>
                            </div>
                        </motion.section>

                        <motion.section
                            whileHover={{ y: -10 }}
                            className="glass-card p-12 rounded-[3.5rem]"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                                <Trophy className="text-primary" size={32} />
                            </div>
                            <h2 className="text-3xl font-black italic mb-8">System_ <span className="text-gradient">Impact</span></h2>
                            <ul className="space-y-6">
                                {[
                                    "GitHub Developer Program Member",
                                    "30+ Deployed Intelligent Systems",
                                    "Active XAI Research Contributor"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-secondary text-lg font-medium italic">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
