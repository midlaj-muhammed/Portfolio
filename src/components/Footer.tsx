"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [time, setTime] = useState<string>("Loading...");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata', // Based on GMT+05:30
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(formatter.format(new Date()) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/midlajvalappil/' },
    { label: 'GitHub', href: 'https://github.com/midlaj-muhammed/' },
    { label: 'Instagram', href: 'https://instagram.com/ft.midlaaj/' }
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden px-6 lg:px-24">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white/[0.02] blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10 w-full">
        
        {/* Massive Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-white/10 pb-16 w-full">
          <div className="mb-12 md:mb-0">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-5xl sm:text-7xl md:text-[6rem] font-bold tracking-tighter mb-6 leading-none"
             >
               Have an idea?
             </motion.h2>
             <motion.a 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               href="mailto:midlajvalappil@gmail.com" 
               className="text-2xl md:text-4xl font-light text-gray-400 hover:text-white transition-colors flex items-center gap-6 group w-max"
             >
                Let's build it together 
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                   <ArrowUpRight strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8" />
                </div>
             </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end gap-3"
          >
             <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
               <span className="text-xs text-white tracking-widest uppercase font-medium">Available for work</span>
             </div>
             <p className="text-sm font-mono text-gray-500 mt-2 px-2">Local Time: {time}</p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
           
           <div className="flex flex-wrap justify-center gap-4 order-2 md:order-1">
             {socialLinks.map((link, idx) => (
               <a
                 key={idx}
                 href={link.href}
                 target="_blank"
                 rel="noreferrer"
                 className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
               >
                 {link.label}
               </a>
             ))}
           </div>
           
           <p className="text-xs text-gray-600 font-mono order-3 md:order-2">
             © {new Date().getFullYear()} Muhammed Midlaj.
           </p>

           <button
             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
             className="order-1 md:order-3 group flex items-center gap-3 text-xs font-mono text-gray-400 hover:text-white transition-colors"
           >
             BACK TO TOP
             <div className="bg-white/10 p-3 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:-translate-y-2">
               <ArrowUp size={16} />
             </div>
           </button>
           
        </div>
      </div>
    </footer>
  );
}
