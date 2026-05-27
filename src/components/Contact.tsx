"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/*
  Direct Google Form Submission
  Form: https://docs.google.com/forms/d/e/1FAIpQLScNmHCwc6ONebE1ETrYxVSjwWabosJCm-eQPZrIR7SttXJgqw/viewform
  Entry fields:
  Name -> entry.1092147975
  Email -> entry.409463752
  Project Type -> entry.776412979
  Message -> entry.2061825251
*/

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScNmHCwc6ONebE1ETrYxVSjwWabosJCm-eQPZrIR7SttXJgqw/formResponse";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    const formBody = new URLSearchParams();
    formBody.append("entry.1092147975", formData.name);
    formBody.append("entry.409463752", formData.email);
    formBody.append("entry.776412979", formData.projectType);
    formBody.append("entry.2061825251", formData.message);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      // no-cors means we can't read response.ok reliably, so assume success if no massive error
      setStatus("success");
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
       console.error("Form submission error", error);
       setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-20 bg-[#121212] py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
          >
            Start a <br className="block sm:hidden" /> <span className="font-semibold italic font-serif opacity-80">Conversation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-400"
          >
            "The best way to predict the future is to build it."
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden"
        >
          {/* Status Toast Simulation */}
          {status === "success" && (
            <div className="absolute top-0 left-0 w-full p-4 bg-green-500/20 text-green-200 text-center text-sm font-medium border-b border-green-500/30">
              Message sent! I'll reply soon.
            </div>
          )}
          {status === "error" && (
            <div className="absolute top-0 left-0 w-full p-4 bg-red-500/20 text-red-200 text-center text-sm font-medium border-b border-red-500/30">
              Something went wrong. Please check the URL or try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-gray-400 uppercase tracking-wider">Name</label>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-transparent border-b border-white/20 focus:border-white/60 outline-none pb-2 transition-colors placeholder:text-gray-600 text-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-gray-400 uppercase tracking-wider">Email</label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-transparent border-b border-white/20 focus:border-white/60 outline-none pb-2 transition-colors placeholder:text-gray-600 text-white"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-sm font-mono text-gray-400 uppercase tracking-wider">Project Type *</label>
              <select 
                required
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="bg-transparent border-b border-white/20 focus:border-white/60 outline-none pb-2 transition-colors text-white appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-black">Select Project Type</option>
                <option value="Machine Learning" className="text-black">Machine Learning</option>
                <option value="Full stack development" className="text-black">Full stack development</option>
                <option value="UI/UX Design" className="text-black">UI/UX Design</option>
                <option value="Others" className="text-black">Others</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-sm font-mono text-gray-400 uppercase tracking-wider">Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-transparent border-b border-white/20 focus:border-white/60 outline-none pb-2 transition-colors placeholder:text-gray-600 text-white resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-8 self-start flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
