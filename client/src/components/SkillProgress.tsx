import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillsData = [
  { name: "React Development", percentage: 95 },
  { name: "Python & Data Science", percentage: 98 },
  { name: "Technical Analysis & Trading", percentage: 92 },
  { name: "AI & Prompt Engineering", percentage: 90 },
  { name: "Risk Management", percentage: 88 },
  { name: "Gaming Strategy & Leadership", percentage: 85 },
];

export default function SkillProgress() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="font-orbitron font-bold text-3xl md:text-5xl mb-16 text-center text-electric-blue"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          SKILL POWER LEVELS
        </motion.h2>
        
        <div className="space-y-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-electric-blue">{skill.percentage}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="skill-progress h-full rounded-full animate-pulse-neon"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.percentage}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
