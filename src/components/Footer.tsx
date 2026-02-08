import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 md:py-20 px-4 md:px-20 border-t border-white/5 relative bg-background overflow-hidden" suppressHydrationWarning>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 relative z-10">
                <div className="text-center md:text-left">
                    <span className="text-2xl md:text-3xl font-black tracking-tighter text-gradient italic">MIDLAJ_</span>
                    <p className="text-secondary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mt-3 md:mt-4">
                        Neural_Architectures & Full_Stack_Systems
                    </p>
                </div>
                <div className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 text-center">
                    © {new Date().getFullYear()} Muhammed Midlaj // SYSTEM_ACTIVE
                </div>
                <div className="flex gap-6 md:gap-8">
                    {[
                        { icon: <Github size={20} />, link: "https://github.com/midlaj-muhammed" },
                        { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/midlajvalappil" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.link}
                            className="text-secondary hover:text-primary transition-all hover:scale-125"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
