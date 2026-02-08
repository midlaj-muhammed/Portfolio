"use client";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, Cpu } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function Home() {
  const skills = [
    {
      title: "Machine Learning",
      icon: <Brain className="text-primary" />,
      items: ["PyTorch & TensorFlow", "Scikit-learn", "Computer Vision", "NLP"]
    },
    {
      title: "Frontend Development",
      icon: <Code2 className="text-primary" />,
      items: ["React & Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
      title: "Backend & Cloud",
      icon: <Cpu className="text-primary" />,
      items: ["FastAPI & Node.js", "PostgreSQL & MongoDB", "Docker", "AWS"]
    }
  ];

  const featuredProjects = [
    {
      title: "Leaf Lens",
      description: "An AI-powered plant health diagnostic system using computer vision to detect diseases and provide treatment recommendations.",
      tags: ["PyTorch", "FastAPI", "React Native"],
      image: "/leaf-lens.png",
      link: "https://leaf-lens-one.vercel.app/"
    },
    {
      title: "Write Genuine",
      description: "Advanced AI-driven plagiarism detection system that ensures content authenticity and original authorship through neural linguistic analysis.",
      tags: ["Next.js", "OpenAI", "NLP", "Tailwind"],
      image: "/write-genuine-new.png",
      link: "https://writegenuine.netlify.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative" suppressHydrationWarning>
      <div className="glow-mesh" />
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            <div className="inline-block">
              <span className="px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                Bridging AI & Engineering
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              Muhammed <br />
              <span className="text-gradient">Midlaj</span>
            </h1>
            <p className="max-w-xl text-xl text-secondary leading-relaxed font-medium">
              Architecting intelligent systems by combining deep learning expertise with high-performance full-stack engineering.
            </p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <Link href="/projects" className="px-10 py-4 rounded-xl bg-primary text-white font-bold hover:shadow-[0_0_30px_rgba(13,127,242,0.5)] transition-all flex items-center gap-3">
                Explore Projects <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="px-10 py-4 rounded-xl glass font-bold hover:bg-white/10 transition-all">
                Let's Talk
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] relative animate-float">
              <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full animate-pulse" />
              <div className="relative w-full h-full rounded-[4rem] overflow-hidden border-4 border-white/10 shadow-2xl group">
                <Image
                  src={getImagePath("/midlaj-avatar.png")}
                  alt="Muhammed Midlaj"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-full h-[2px] bg-primary/50 absolute top-0 left-0 animate-scan shadow-[0_0_15px_rgba(13,127,242,0.8)]" />
                </div>
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

                {/* System Readouts */}
                <div className="absolute top-8 right-8 text-right hidden md:block">
                  <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1"></div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest"></div>
                </div>

                <div className="absolute bottom-8 left-8 hidden md:block">
                  <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1"></div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">ID: ft.midlaaj</div>
                </div>
              </div>

              {/* Floating Data Points */}
              <div className="absolute -top-10 -right-10 w-32 p-4 glass rounded-2xl border border-primary/20 hidden lg:block animate-float">
                <div className="text-[10px] font-black text-primary uppercase mb-2">Neural_Core</div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-primary animate-pulse" />
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 w-40 p-4 glass rounded-2xl border border-primary/20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-[10px] font-black text-primary uppercase mb-1">Logic_Gate</div>
                <div className="text-[10px] font-medium text-secondary">Latency: 0.12ms</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 px-6 md:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-12 md:p-20 rounded-[4rem] flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tight">Full Stack <br /><span className="text-primary underline underline-offset-8">Precision.</span></h2>
              <p className="text-secondary leading-relaxed text-xl font-medium">
                I build apps that aren't just functional, but intelligent. My background in ML research allows me to integrate cutting-edge models into seamless architectures.
              </p>
              <Link href="/about" className="text-primary font-bold text-lg inline-flex items-center gap-3 hover:translate-x-2 transition-all">
                Learn My Story <ArrowRight size={22} />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              {[
                { label: "Research Focus", val: "XAI / CV" },
                { label: "Stack", val: "T3 / ML" },
                { label: "Projects", val: "30+" },
                { label: "Experience", val: "3+ Yrs" }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl text-center">
                  <h3 className="text-2xl font-black text-primary mb-1">{stat.val}</h3>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 md:px-20 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6">Expert <br /><span className="text-gradient">Capabilities</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-3xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-black mb-6">{skill.title}</h3>
                <ul className="space-y-4">
                  {skill.items.map((item, j) => (
                    <li key={j} className="text-secondary font-medium flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-32 px-6 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <h2 className="text-5xl font-black">Latest <br /><span className="text-primary underline underline-offset-8">Innovations.</span></h2>
              <p className="text-secondary text-lg max-w-md">Deploying intelligence into production codebases.</p>
            </div>
            <Link href="/projects" className="px-8 py-3 rounded-full glass font-bold text-primary hover:bg-primary/10 transition-all flex items-center gap-2">
              All Projects <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group glass-card rounded-[3rem] overflow-hidden"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={getImagePath(project.image)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="p-10 relative">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors italic">{project.title}</h3>
                  <p className="text-secondary font-medium leading-relaxed mb-8 italic">
                    {project.description}
                  </p>
                  <Link href={project.link} className="inline-flex items-center gap-3 text-white font-black group-hover:gap-5 transition-all">
                    Launch Project <ArrowRight size={20} className="text-primary" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 md:px-20 relative">
        <div className="max-w-5xl mx-auto glass p-16 md:p-32 rounded-[5rem] text-center border-2 border-primary/20 shadow-[0_0_100px_rgba(13,127,242,0.15)]">
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none">Ready to Build <br /><span className="text-gradient italic">Next-Gen?</span></h2>
          <p className="text-secondary text-xl font-medium mb-12 max-w-2xl mx-auto italic">
            "The best way to predict the future is to build it."
          </p>
          <Link href="/contact" className="px-16 py-5 rounded-2xl bg-primary text-white font-black text-xl hover:shadow-[0_0_50px_rgba(13,127,242,0.6)] hover:scale-105 transition-all inline-block shadow-2xl">
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
