import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Download, Mail, Github } from "lucide-react";

export default function Hero() {
  const typewriterText = useTypewriter("Architecting Code. Dominating Markets. Engineering Intelligence.", 50);

  const handleDownloadCV = () => {
    // In a real implementation, this would trigger a CV download
    console.log("CV download triggered");
  };

  const handleContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 matrix-bg opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/50 to-deep-black"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <motion.div
          className="particle"
          style={{ left: "10%", top: "20%" }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="particle"
          style={{ left: "80%", top: "30%" }}
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="particle"
          style={{ left: "60%", top: "70%" }}
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="particle"
          style={{ left: "30%", top: "80%" }}
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Name with glitch effect */}
        <motion.h1
          className="glitch-text font-orbitron font-black text-4xl md:text-6xl lg:text-8xl mb-6"
          data-text="MUHAMMAD HASSAN ALI"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          MUHAMMAD HASSAN ALI
        </motion.h1>
        
        {/* Tagline with typing effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="typing-cursor font-mono text-lg md:text-xl lg:text-2xl text-neon-cyan inline-block">
            {typewriterText}
          </p>
        </motion.div>
        
        {/* Terminal-style bio */}
        <motion.div
          className="glass-card p-6 mb-8 text-left max-w-2xl mx-auto neon-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="font-mono text-sm text-neon-green mb-2">
            <span className="text-hot-pink">hassan@digital-titan:~$</span> cat profile.txt
          </div>
          <div className="font-mono text-sm">
            <span className="text-electric-blue">&gt;&gt;</span> Certified Engineer. AI Tactician. Market Strategist. Elite Technologist.
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <button
            onClick={handleDownloadCV}
            className="neon-border glass-card px-8 py-3 font-semibold hover-glow transition-all duration-300 group"
          >
            <Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
            Download CV
          </button>
          <button
            onClick={handleContact}
            className="neon-border glass-card px-8 py-3 font-semibold hover-glow transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 inline mr-2 group-hover:animate-pulse" />
            Contact Me
          </button>
          <button
            onClick={() => window.open("https://github.com", "_blank")}
            className="neon-border glass-card px-8 py-3 font-semibold hover-glow transition-all duration-300 group"
          >
            <Github className="w-5 h-5 inline mr-2 group-hover:animate-spin" />
            GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
}
