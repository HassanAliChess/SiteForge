import { useState } from "react";
import { motion } from "framer-motion";

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
  const [isHovered, setIsHovered] = useState(false);

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

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Expert":
        return "95%";
      case "Advanced":
        return "80%";
      default:
        return "65%";
    }
  };

  return (
    <div
      className="h-64 cursor-pointer cyber-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full skill-card-enhanced rounded-lg overflow-hidden">
        {/* Data Stream Effect */}
        <div className="data-stream" />
        
        {/* Hologram Effect */}
        <div className="hologram-effect absolute inset-0" />
        
        {/* Main Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header Section */}
          <div className="flex-shrink-0 text-center mb-4">
            <motion.div 
              className="text-4xl mb-3"
              animate={{ 
                rotateY: isHovered ? [0, 360] : [0, 10, -10, 0],
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ 
                duration: isHovered ? 1 : 4, 
                repeat: isHovered ? 0 : Infinity, 
                ease: "easeInOut" 
              }}
            >
              {emoji}
            </motion.div>
            <h3 className="font-orbitron font-bold text-lg text-white mb-1 text-center cyber-text-glow">
              {title}
            </h3>
            <p className="text-xs text-electric-blue text-center font-medium cyber-text-glow">
              {subtitle}
            </p>
          </div>

          {/* Skills Display */}
          <motion.div 
            className="flex-1 space-y-2 text-xs"
            initial={{ opacity: 0.3, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.6, 
              y: isHovered ? 0 : 10 
            }}
            transition={{ duration: 0.3 }}
          >
            {skills.slice(0, 4).map((skill, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white font-medium text-xs">{skill.name}</span>
                  <span className={`${getLevelColor(skill.level)} font-bold text-xs cyber-text-glow`}>
                    {skill.level}
                  </span>
                </div>
                <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-blue via-neon-cyan to-electric-blue rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: isHovered ? getLevelWidth(skill.level) : "20%" 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Status Indicator */}
          <motion.div 
            className="flex-shrink-0 mt-4 text-center"
            animate={{ opacity: isHovered ? 1 : 0.5 }}
          >
            <div className="font-mono text-xs text-electric-blue/80">
              {isHovered ? "[ ANALYZING CAPABILITIES ]" : "[ HOVER TO SCAN ]"}
            </div>
            <div className="flex justify-center mt-2 space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-electric-blue rounded-full"
                  animate={{
                    opacity: isHovered ? [0.3, 1, 0.3] : 0.3,
                    scale: isHovered ? [1, 1.5, 1] : 1
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Corner Tech Details */}
        <div className="absolute top-2 right-2 font-mono text-xs text-electric-blue/40">
          v2.1
        </div>
        <div className="absolute bottom-2 left-2 font-mono text-xs text-electric-blue/40">
          {skills.length} MODS
        </div>
      </div>
    </div>
  );
}
