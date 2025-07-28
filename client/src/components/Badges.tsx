import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const badgesData = [
  {
    emoji: "🏅",
    title: "Certified Software Engineer",
    subtitle: "Aptech Learning",
  },
  {
    emoji: "🎖️",
    title: "100+ Tools Built",
    subtitle: "Automation, AI, Analytics",
  },
  {
    emoji: "💹",
    title: "High ROI Trading",
    subtitle: "ICT Methodology Success",
  },
  {
    emoji: "🧠",
    title: "LLM Frameworks",
    subtitle: "Prompt Engineering Expert",
  },
];

export default function Badges() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-orbitron font-bold text-3xl md:text-5xl mb-16 text-center text-electric-blue"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          BADGES & ACCOLADES
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badgesData.map((badge, index) => (
            <motion.div
              key={index}
              className="glass-card neon-border p-6 text-center hover-glow cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">{badge.emoji}</div>
              <h3 className="font-semibold text-electric-blue mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-400">{badge.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
