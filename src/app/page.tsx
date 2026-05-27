import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/30">
      {/* Crawlable content for search engines (visually hidden) */}
      <div className="sr-only">
        <h1>Muhammed Midlaj — AI Specialist &amp; Full Stack Developer</h1>
        <p>
          Portfolio of Muhammed Midlaj, an AI/ML engineer specializing in
          Computer Vision, Explainable AI, NLP, and full-stack web development
          with React, Next.js, PyTorch, and TensorFlow. Projects include plant
          disease detection, AI-powered plagiarism detection, credit scoring
          with SHAP explanations, sign language recognition, and multilingual
          sentiment analysis.
        </p>
      </div>

      {/* The ScrollyCanvas takes up 500vh and handles the scroll-based sequence animations */}
      <ScrollyCanvas />

      {/* Bio, Experience, and Skills */}
      <About />

      {/* Horizontal GSAP slider for scraped projects */}
      <Projects />

      {/* Blog / Insights */}
      <Blog />

      {/* Contact Form mapped to Google Apps Script */}
      <Contact />

      {/* Interactive Footer */}
      <Footer />
    </main>
  );
}
