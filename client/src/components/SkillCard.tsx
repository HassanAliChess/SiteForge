import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  level: string;
}

interface SkillCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  skills: Skill[];
}

export default function SkillCard({ emoji, title, subtitle, skills }: SkillCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-neon-green";
      case "Advanced":
        return "text-electric-blue";
      default:
        return "text-neon-cyan";
    }
  };

  return (
    <div
      className="h-64 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden glass-card neon-border p-6 flex flex-col items-center justify-center hover-glow">
          <div className="text-4xl mb-4">{emoji}</div>
          <h3 className="font-orbitron font-bold text-xl text-electric-blue mb-2 text-center">
            {title}
          </h3>
          <p className="text-sm text-gray-400 text-center">{subtitle}</p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card neon-border p-6 flex flex-col justify-center">
          <div className="space-y-2 text-sm">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span>{skill.name}</span>
                <span className={getLevelColor(skill.level)}>{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
