import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const gamingSkills = [
  { name: "FPS/RTS Leadership", level: "Expert", percentage: 94 },
  { name: "Tactical Operations", level: "Advanced", percentage: 89 },
  { name: "Decision Systems", level: "Advanced", percentage: 87 },
  { name: "Strategy Loops", level: "Expert", percentage: 92 },
  { name: "Team Coordination", level: "Expert", percentage: 95 },
  { name: "Pressure Management", level: "Advanced", percentage: 88 },
];

export default function GamingSection() {
  const { ref, isVisible } = useScrollAnimation();

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
    <section id="gaming" className="py-20 relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 holographic-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/30 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.div
            className="text-6xl mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            🎮
          </motion.div>
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GAMING & COMPETITIVE STRATEGY
          </motion.h2>
          <motion.p
            className="text-xl text-electric-blue mb-6 cyber-text-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tactical Leadership
          </motion.p>
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gamingSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card-enhanced rounded-lg p-6 tech-scan"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-orbitron font-bold text-lg text-white cyber-text-glow">
                  {skill.name}
                </h3>
                <span className={`${getLevelColor(skill.level)} font-bold text-sm px-3 py-1 rounded border border-current/30`}>
                  {skill.level}
                </span>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Proficiency</span>
                  <span className="text-electric-blue">{skill.percentage}%</span>
                </div>
                <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-blue via-neon-cyan to-electric-blue rounded-full relative"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.percentage}%` } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      className="absolute inset-y-0 right-0 w-1 bg-white/80 rounded-full"
                      animate={{
                        opacity: isVisible ? [0, 1, 0] : 0
                      }}
                      transition={{
                        duration: 2,
                        repeat: isVisible ? Infinity : 0,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              
              <div className="font-mono text-xs text-electric-blue/60">
                GAME_ID: GCS-{(Math.random() * 1000).toFixed(0)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="font-mono text-sm text-electric-blue/60">
            [ TACTICAL SYSTEMS ENGAGED ] • [ STRATEGY PROTOCOLS ACTIVE ] • [ VICTORY CONDITIONS MET ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}