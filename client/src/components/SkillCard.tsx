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
        <div className="absolute inset-0 backface-hidden skill-card-enhanced rounded-lg p-6 flex flex-col items-center justify-center hover-glow">
          <motion.div 
            className="text-5xl mb-4"
            animate={{ rotateY: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {emoji}
          </motion.div>
          <h3 className="font-orbitron font-bold text-xl text-white mb-2 text-center drop-shadow-lg">
            {title}
          </h3>
          <p className="text-sm text-electric-blue text-center font-medium">{subtitle}</p>
          <div className="absolute bottom-2 right-2 text-xs text-electric-blue/60 font-mono">
            HOVER TO VIEW
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 skill-card-enhanced rounded-lg p-6 flex flex-col justify-center">
          <div className="space-y-3 text-sm">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex justify-between items-center bg-black/20 rounded p-2 border border-electric-blue/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-white font-medium">{skill.name}</span>
                <span className={`${getLevelColor(skill.level)} font-bold text-xs px-2 py-1 rounded border border-current`}>
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
