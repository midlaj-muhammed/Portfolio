import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/30">
      {/* The ScrollyCanvas takes up 500vh and handles the scroll-based sequence animations */}
      <ScrollyCanvas />
      
      {/* Bio, Experience, and Skills */}
      <About />
      
      {/* Horizontal GSAP slider for scraped projects */}
      <Projects />
      
      {/* Contact Form mapped to Google Apps Script */}
      <Contact />
      
      {/* Interactive Footer */}
      <Footer />
    </main>
  );
}
