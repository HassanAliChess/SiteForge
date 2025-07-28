import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="font-orbitron font-bold text-3xl md:text-5xl mb-8 text-electric-blue"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          THE LEGEND
        </motion.h2>
        
        <motion.div
          className="glass-card p-8 mb-12 neon-border"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            "I'm not your average dev. I engineer logic, decode financial markets, automate decisions with AI, and dominate digital environments — all before your coffee brews."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
