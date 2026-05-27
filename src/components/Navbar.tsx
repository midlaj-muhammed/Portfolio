"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      
      // If we are at the very top, set Home as active
      if (window.scrollY < 300) {
        setActive("Home");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Setup Intersection Observer for scrollspy
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.scrollY >= 300) {
          // Find the nav item matching the ID (case insensitive)
          const matchedItem = navItems.find(
            (item) => item.toLowerCase() === entry.target.id
          );
          if (matchedItem) {
            setActive(matchedItem);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when element is roughly in the middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe sections
    const ids = ["about", "skills", "projects", "contact"];
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileMenuOpen(false);
    
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ 
          y: 0, 
          x: "-50%",
          scale: scrolled ? 0.95 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-6 left-1/2 z-[9999] hidden md:flex items-center gap-2",
          "bg-white/10 dark:bg-[#0a0a0a]/35",
          "backdrop-blur-[24px] saturate-[180%]",
          "border border-white/25 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.3)]",
          scrolled ? "py-2 px-4" : "py-3 px-6"
        )}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="relative px-4 py-2 text-sm font-medium text-white mix-blend-difference hover:opacity-80 transition-opacity"
          >
            {active === item && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/20 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </button>
        ))}
      </motion.nav>

      {/* Mobile Bottom Dock */}
      <motion.nav
        initial={{ y: 100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed bottom-6 w-[92vw] max-w-[400px] left-1/2 z-[9999] md:hidden flex items-center justify-between px-2 py-2",
          "bg-[#0a0a0a]/60 backdrop-blur-[24px] saturate-[180%]",
          "border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        )}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={cn(
              "relative px-3 py-2.5 text-[10px] sm:text-xs font-medium tracking-wide transition-colors",
              active === item ? "text-white" : "text-white/50 hover:text-white/80"
            )}
          >
            {active === item && (
              <motion.div
                layoutId="mobile-active-pill"
                className="absolute inset-0 bg-white/20 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </button>
        ))}
      </motion.nav>
    </>
  );
}
