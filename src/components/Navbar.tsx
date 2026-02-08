"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = ["Home", "Projects", "About", "Contact"];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-6 left-6 right-6 md:left-20 md:right-20 z-50 flex items-center justify-between px-8 py-4 glass rounded-3xl border border-white/10"
                suppressHydrationWarning
            >
                <Link href="/" className="text-2xl font-black tracking-tighter text-gradient italic z-50 relative">
                    MIDLAJ_
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 items-center">
                    {menuItems.map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-all relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Desktop Button */}
                <Link
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex px-6 py-2 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(13,127,242,0.4)]"
                >
                    Launch CV
                </Link>

                {/* Mobile Toggle Button */}
                <div className="md:hidden z-50 relative">
                    <button onClick={toggleMenu} className="text-white p-2">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-28 left-6 right-6 z-40 p-8 glass rounded-[2.5rem] border border-white/10 flex flex-col gap-6 items-center md:hidden shadow-2xl bg-black/80 backdrop-blur-xl"
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-lg font-black uppercase tracking-widest hover:text-primary transition-all w-full text-center py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="w-full h-px bg-white/10 my-2" />
                        <Link
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-xl bg-primary text-white text-sm font-black uppercase tracking-widest w-full text-center hover:shadow-[0_0_20px_rgba(13,127,242,0.4)] transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Launch CV
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
