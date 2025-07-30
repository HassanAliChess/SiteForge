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
    <motion.div
      className="cursor-pointer cyber-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
      initial={{ height: "auto" }}
      animate={{ 
        height: isHovered ? "auto" : "320px"
      }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <div className="relative w-full skill-card-enhanced rounded-lg overflow-hidden">
        {/* Data Stream Effect */}
        <div className="data-stream" />
        
        {/* Hologram Effect */}
        <div className="hologram-effect absolute inset-0" />
        
        {/* Main Content */}
        <div className="relative z-10 p-6">
          {/* Header Section */}
          <div className="text-center mb-6">
            <motion.div 
              className="text-5xl mb-4"
              animate={{ 
                rotateY: isHovered ? [0, 360] : [0, 15, -15, 0],
                scale: isHovered ? 1.2 : 1,
                filter: isHovered ? "drop-shadow(0 0 20px currentColor)" : "drop-shadow(0 0 5px currentColor)"
              }}
              transition={{ 
                duration: isHovered ? 1 : 6, 
                repeat: isHovered ? 0 : Infinity, 
                ease: "easeInOut" 
              }}
            >
              {emoji}
            </motion.div>
            <h3 className="font-orbitron font-bold text-xl text-white mb-2 text-center cyber-text-glow">
              {title}
            </h3>
            <p className="text-sm text-electric-blue text-center font-medium cyber-text-glow">
              {subtitle}
            </p>
            
            {/* Tech Header Bar */}
            <div className="flex justify-center items-center mt-4 space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent flex-1" />
              <div className="font-mono text-xs text-electric-blue/80">
                {isHovered ? "FULL SPEC ANALYSIS" : "BASIC SCAN MODE"}
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent flex-1" />
            </div>
          </div>

          {/* Skills Matrix */}
          <motion.div 
            className="space-y-3"
            layout
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: isHovered ? 1.02 : 1
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring"
                }}
                layout
              >
                {/* Skill Name & Level */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium text-sm group-hover:text-electric-blue transition-colors">
                    {skill.name}
                  </span>
                  <motion.span 
                    className={`${getLevelColor(skill.level)} font-bold text-sm cyber-text-glow px-2 py-1 rounded border border-current/30`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.level}
                  </motion.span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-blue via-neon-cyan to-electric-blue rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: isHovered ? getLevelWidth(skill.level) : "30%"
                    }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.15,
                      ease: "easeOut"
                    }}
                  >
                    {/* Animated scanner line */}
                    <motion.div
                      className="absolute inset-y-0 right-0 w-1 bg-white/80 rounded-full"
                      animate={{
                        opacity: isHovered ? [0, 1, 0] : 0
                      }}
                      transition={{
                        duration: 2,
                        repeat: isHovered ? Infinity : 0,
                        delay: index * 0.2
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Status Footer */}
          <motion.div 
            className="mt-6 text-center"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            <div className="font-mono text-xs text-electric-blue/80 mb-3">
              {isHovered ? `[ ${skills.length} CAPABILITIES ANALYZED ]` : `[ ${skills.length} MODULES DETECTED ]`}
            </div>
            
            {/* Pulse Indicators */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-electric-blue rounded-full"
                  animate={{
                    opacity: isHovered ? [0.3, 1, 0.3] : [0.5, 0.8, 0.5],
                    scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1]
                  }}
                  transition={{
                    duration: isHovered ? 1 : 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Corner Tech Details */}
        <motion.div 
          className="absolute top-3 right-3 font-mono text-xs text-electric-blue/60"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        >
          SYS-{(Math.random() * 1000).toFixed(0)}
        </motion.div>
        <motion.div 
          className="absolute bottom-3 left-3 font-mono text-xs text-electric-blue/60"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        >
          {skills.length}/{skills.length} ONLINE
        </motion.div>
      </div>
    </motion.div>
  );
}
