"use client";

import { motion, Variants } from "framer-motion";
import { BrainCircuit, AppWindow, Database } from "lucide-react";

const skills = [
  "PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP",
  "React", "Next.js", "Tailwind CSS", "TypeScript",
  "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS",
  "Framer Motion", "GSAP", "LangChain", "OpenAI"
];

const services = [
  {
    icon: <BrainCircuit size={32} strokeWidth={1} />,
    title: "AI & ML Architecture",
    desc: "Designing scalable deep learning models, computer vision pipelines, and explainable AI systems for complex data structures."
  },
  {
    icon: <AppWindow size={32} strokeWidth={1} />,
    title: "Full-Stack Engineering",
    desc: "Building highly responsive, interactive web applications using React, Next.js, and modern, resilient structural patterns."
  },
  {
    icon: <Database size={32} strokeWidth={1} />,
    title: "Intelligent Systems",
    desc: "Automating massive-scale data workflows, robust validation processes, and generating unique insights using LLMs."
  }
];

const experience = [
  {
    role: "AI Specialist",
    company: "Freelance / Research",
    desc: "Focusing on Explainable AI (XAI) and Computer Vision applications. Built robust ML pipelines for credit risk and real-time detection."
  },
  {
    role: "Full Stack Engineer",
    company: "Various Projects",
    desc: "Developed scalable web architectures using React, Node.js, and Java. Built 'Locus', a comprehensive microservices suite."
  },
  {
    role: "Software Developer",
    company: "Early Contributions",
    desc: "Focused on core programming principles and building functional web applications for small businesses."
  }
];

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#121212] pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        
        {/* Left Column - Bio & Philosophy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col gap-8"
        >
          <motion.h2 variants={fadeUpVariant} className="text-xs md:text-sm font-mono tracking-widest text-white/50 uppercase">
            // Deciphering Complexity
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
            I build apps that aren't just functional, but <br className="hidden md:block"/> <span className="italic font-serif">intelligent</span>.
          </motion.p>
          <motion.p variants={fadeUpVariant} className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
            My background in ML research allows me to integrate cutting-edge models into seamless architectures. I am a developer who believes that AI should be more than just a black box—it should be a transparent and powerful tool for solving real-world challenges. 
          </motion.p>
        </motion.div>

        {/* Services Grid (Spans full grid length) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
          }}
          className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {services.map((svc, i) => (
            <motion.div 
              key={i} 
              variants={fadeUpVariant} 
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-white/60 mb-8">{svc.icon}</div>
              <h4 className="text-xl font-medium mb-3 tracking-wide">{svc.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column - Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
          }}
          id="skills"
          className="flex flex-col gap-8 md:gap-12 lg:pl-12 mt-8 lg:mt-0 lg:border-l border-white/10"
        >
          <motion.h3 variants={fadeUpVariant} className="text-xl md:text-2xl font-medium mb-2 md:mb-4">
            The Journey
          </motion.h3>
          
          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="relative pl-6 border-l border-white/20">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <h4 className="text-xl font-medium">{exp.role}</h4>
                <p className="text-sm font-mono text-white/50 mt-1 mb-3">{exp.company}</p>
                <p className="text-gray-400 font-light leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
            
            <motion.div variants={fadeUpVariant} className="relative pl-6 border-l border-white/20">
              <div className="absolute w-3 h-3 bg-white/50 rounded-full -left-[6.5px] top-2" />
              <h4 className="text-xl font-medium">Computer Science Specialist</h4>
              <p className="text-sm font-mono text-white/50 mt-1 mb-3">Academic Roots</p>
              <p className="text-gray-400 font-light leading-relaxed">
                Dedicated to mastering the fundamentals of computing while specializing in modern AI/ML frameworks and high-performance system designs.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* NEW FULL-WIDTH SKILLS SECTION MOVED TO THE BOTTOM */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="max-w-[100vw] mt-16 md:mt-24 mb-8 md:mb-12 overflow-hidden relative"
      >
        <motion.h3 variants={fadeUpVariant} className="text-xs md:text-sm font-mono tracking-widest text-center text-white/50 uppercase mb-8">
          Technical Arsenal
        </motion.h3>
        
        {/* Fading Edge Mask */}
        <div className="relative flex flex-col overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] pb-4">
          {/* Single Row - Left to Right */}
          <motion.div variants={fadeUpVariant} className="flex gap-4 animate-marquee group cursor-default">
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-200 backdrop-blur-md whitespace-nowrap hover:bg-white/15 hover:border-white/30 transition-colors hover:scale-105 transform duration-300">
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
