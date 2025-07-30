import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const softSkillsData = [
  {
    emoji: "🧭",
    title: "Strategic Commander",
    description: "Leads teams to execute under chaos",
  },
  {
    emoji: "🧠",
    title: "Rational Combatant",
    description: "Calm, data-backed decision making",
  },
  {
    emoji: "🗣",
    title: "Communication Catalyst",
    description: "Game-winning coordination across teams",
  },
  {
    emoji: "⚙️",
    title: "Systems Thinker",
    description: "Sees systems, not silos",
  },
];

export default function SoftSkills() {
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
          TECHNICAL LEADERSHIP ZONE
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card-enhanced rounded-lg p-6 text-center hover-glow cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="text-4xl mb-4">{skill.emoji}</div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-3 drop-shadow-lg">
                {skill.title}
              </h3>
              <p className="text-sm text-electric-blue font-medium">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
