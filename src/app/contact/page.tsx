"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background relative" suppressHydrationWarning>
            <div className="glow-mesh" />
            <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
            <Navbar />

            <main className="pt-28 md:pt-40 pb-16 md:pb-20 px-4 md:px-20 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-16 md:mb-32 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-8xl font-black mb-4 md:mb-8 tracking-tighter"
                        >
                            Open_ <span className="text-gradient italic">Connection_</span>
                        </motion.h1>
                        <p className="text-secondary text-base md:text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                            Deploying the next intelligent solution begins with a single conversation. Reach out to discuss research, architecture, or collaboration.
                        </p>
                    </header>

                    <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
                        {/* Contact Info */}
                        <div className="space-y-4 md:space-y-8">
                            {[
                                { icon: <Mail size={24} />, label: "Direct_Email", val: "midlajvalappil@gmail.com" },
                                { icon: <MapPin size={24} />, label: "Location_Node", val: "Bangalore, India" }
                            ].map((info, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center gap-4 md:gap-8"
                                >
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shrink-0">
                                        {info.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{info.label}</p>
                                        <p className="text-base md:text-xl font-black italic truncate">{info.val}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="flex gap-3 md:gap-6">
                                <a href="https://github.com/midlaj-muhammed" className="flex-1 glass-card p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center gap-2 md:gap-3 hover:bg-white/5 transition-all">
                                    <Github size={24} className="text-primary" />
                                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Source_Code</span>
                                </a>
                                <a href="https://linkedin.com/in/midlajvalappil" className="flex-1 glass-card p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center gap-2 md:gap-3 hover:bg-white/5 transition-all">
                                    <Linkedin size={24} className="text-primary" />
                                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Network_Link</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[4rem] border-2 border-white/5 shadow-2xl"
                        >
                            <form
                                action="https://docs.google.com/forms/d/e/1FAIpQLScNmHCwc6ONebE1ETrYxVSjwWabosJCm-eQPZrIR7SttXJgqw/formResponse"
                                method="POST"
                                target="_hidden_iframe"
                                className="space-y-6 md:space-y-8"
                                onSubmit={(e) => {
                                    const form = e.currentTarget;
                                    setTimeout(() => {
                                        form.reset();
                                    }, 100);
                                    alert("Thank you! Your message has been sent.");
                                }}
                            >
                                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    <div className="space-y-2 md:space-y-3">
                                        <label className="text-[10px] md:text-xs font-black text-secondary uppercase tracking-[0.15em] md:tracking-[0.2em] ml-2">Name_</label>
                                        <input
                                            type="text"
                                            name="entry.1092147975"
                                            placeholder="IDENTIFIER"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-4 md:py-5 focus:outline-none focus:border-primary/50 transition-all font-bold text-sm md:text-base placeholder:text-white/10"
                                        />
                                    </div>
                                    <div className="space-y-2 md:space-y-3">
                                        <label className="text-[10px] md:text-xs font-black text-secondary uppercase tracking-[0.15em] md:tracking-[0.2em] ml-2">Email_</label>
                                        <input
                                            type="email"
                                            name="entry.409463752"
                                            placeholder="NETWORK_ADDRESS"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-4 md:py-5 focus:outline-none focus:border-primary/50 transition-all font-bold text-sm md:text-base placeholder:text-white/10"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <label className="text-[10px] md:text-xs font-black text-secondary uppercase tracking-[0.15em] md:tracking-[0.2em] ml-2">Architecture_Type_</label>
                                    <div className="relative">
                                        <select
                                            name="entry.776412979"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-4 md:py-5 focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer font-bold text-sm md:text-base"
                                        >
                                            <option value="Machine Learning" className="bg-slate-900">Machine Learning</option>
                                            <option value="Full stack development" className="bg-slate-900">Full Stack Development</option>
                                            <option value="UI/UX Design" className="bg-slate-900">UI/UX Design</option>
                                            <option value="Others" className="bg-slate-900">Other Systems</option>
                                        </select>
                                        <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 italic text-sm">▼</div>
                                    </div>
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <label className="text-[10px] md:text-xs font-black text-secondary uppercase tracking-[0.15em] md:tracking-[0.2em] ml-2">Data_Payload_</label>
                                    <textarea
                                        name="entry.2061825251"
                                        rows={4}
                                        placeholder="TRANSMIT MESSAGE..."
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-8 py-4 md:py-5 focus:outline-none focus:border-primary/50 transition-all resize-none font-bold text-sm md:text-base placeholder:text-white/10"
                                    />
                                </div>
                                <button type="submit" className="w-full py-4 md:py-6 rounded-xl md:rounded-2xl bg-primary text-white font-black text-base md:text-lg flex items-center justify-center gap-3 md:gap-4 hover:shadow-[0_0_40px_rgba(13,127,242,0.5)] transition-all group overflow-hidden relative">
                                    <span className="relative z-10 flex items-center gap-3 md:gap-4">
                                        EXECUTE TRANSMISSION <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                            <iframe name="_hidden_iframe" id="_hidden_iframe" className="hidden"></iframe>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
