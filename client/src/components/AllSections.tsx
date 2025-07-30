import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/AllHooks";

// Full Stack Section
export function FullStackSection() {
  const { ref, isVisible } = useScrollAnimation();

  const fullStackSkills = [
    { name: "React", level: "Expert", percentage: 95 },
    { name: "Tailwind CSS", level: "Expert", percentage: 92 },
    { name: "Node.js", level: "Advanced", percentage: 85 },
    { name: "JavaScript", level: "Expert", percentage: 98 },
    { name: "Python", level: "Expert", percentage: 90 },
    { name: "SQL", level: "Advanced", percentage: 80 },
    { name: "HTML/CSS", level: "Expert", percentage: 95 },
  ];

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
    <section id="fullstack" className="py-20 relative" ref={ref}>
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
            🧱
          </motion.div>
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FULL STACK & WEB DEVELOPMENT
          </motion.h2>
          <motion.p
            className="text-xl text-electric-blue mb-6 cyber-text-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend & Backend Mastery
          </motion.p>
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullStackSkills.map((skill, index) => (
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
                SYSTEM_ID: FST-{(Math.random() * 1000).toFixed(0)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="font-mono text-sm text-electric-blue/60">
            [ FULL STACK SYSTEMS OPERATIONAL ] • [ FRONTEND/BACKEND SYNCED ] • [ DEPLOYMENT READY ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Data Science Section
export function DataScienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const dataScienceSkills = [
    { name: "Python", level: "Expert", percentage: 98 },
    { name: "Pandas", level: "Expert", percentage: 95 },
    { name: "NumPy", level: "Advanced", percentage: 88 },
    { name: "Power BI", level: "Advanced", percentage: 85 },
    { name: "Excel", level: "Expert", percentage: 92 },
    { name: "EDA", level: "Advanced", percentage: 87 },
  ];

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
    <section id="datascience" className="py-20 relative" ref={ref}>
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
            📊
          </motion.div>
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DATA SCIENCE & ANALYSIS
          </motion.h2>
          <motion.p
            className="text-xl text-electric-blue mb-6 cyber-text-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Insights from Data
          </motion.p>
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataScienceSkills.map((skill, index) => (
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
                DATA_ID: DSA-{(Math.random() * 1000).toFixed(0)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="font-mono text-sm text-electric-blue/60">
            [ DATA PIPELINES ACTIVE ] • [ ANALYTICS ENGINE ONLINE ] • [ INSIGHTS GENERATED ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// AI Section
export function AISection() {
  const { ref, isVisible } = useScrollAnimation();

  const aiSkills = [
    { name: "OpenAI APIs", level: "Expert", percentage: 95 },
    { name: "LangChain", level: "Advanced", percentage: 88 },
    { name: "LLM Tuning", level: "Advanced", percentage: 82 },
    { name: "Generative AI", level: "Expert", percentage: 90 },
    { name: "Automation", level: "Expert", percentage: 93 },
    { name: "Prompt Engineering", level: "Expert", percentage: 96 },
  ];

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
    <section id="ai" className="py-20 relative" ref={ref}>
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
            🧠
          </motion.div>
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI & PROMPT ENGINEERING
          </motion.h2>
          <motion.p
            className="text-xl text-electric-blue mb-6 cyber-text-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Intelligence Automation
          </motion.p>
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiSkills.map((skill, index) => (
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
                AI_ID: APE-{(Math.random() * 1000).toFixed(0)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="font-mono text-sm text-electric-blue/60">
            [ AI MODELS DEPLOYED ] • [ NEURAL NETWORKS ACTIVE ] • [ INTELLIGENCE AMPLIFIED ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Trading Section
export function TradingSection() {
  const { ref, isVisible } = useScrollAnimation();

  const tradingSkills = [
    { name: "ICT Methodology", level: "Expert", percentage: 94 },
    { name: "Risk Management", level: "Expert", percentage: 96 },
    { name: "Strategy Design", level: "Advanced", percentage: 89 },
    { name: "Market Psychology", level: "Advanced", percentage: 85 },
    { name: "Technical Analysis", level: "Expert", percentage: 92 },
    { name: "Position Sizing", level: "Advanced", percentage: 87 },
  ];

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
    <section id="trading" className="py-20 relative" ref={ref}>
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
            📈
          </motion.div>
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TRADING & MARKET MASTERY
          </motion.h2>
          <motion.p
            className="text-xl text-electric-blue mb-6 cyber-text-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Financial Strategy
          </motion.p>
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tradingSkills.map((skill, index) => (
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
                TRADE_ID: TMM-{(Math.random() * 1000).toFixed(0)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="font-mono text-sm text-electric-blue/60">
            [ MARKET ANALYSIS ACTIVE ] • [ RISK PROTOCOLS ENABLED ] • [ PROFIT SYSTEMS READY ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Tech Support Section
export function TechSupportSection() {
  const { ref, isVisible } = useScrollAnimation();

  const techSupportSkills = [
    { name: "Troubleshooting", level: "Expert", percentage: 96 },
    { name: "Hardware Diagnostics", level: "Advanced", percentage: 88 },
    { name: "Linux Administration", level: "Advanced", percentage: 85 },
    { name: "Networking", level: "Advanced", percentage: 82 },
    { name: "System Optimization", level: "Expert", percentage: 90 },
    { name: "Security Protocols", level: "Advanced", percentage: 87 },
  ];

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
    <section id="techsupport" className="py-20 relative" ref={ref}>
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
            🛠
          </motion.div>
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TECH & SUPPORT
          </motion.h2>
          <motion.p
            className="text-xl text-electric-blue mb-6 cyber-text-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            System Administration
          </motion.p>
          <motion.div
            className="w-48 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techSupportSkills.map((skill, index) => (
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
                SYS_ID: TSP-{(Math.random() * 1000).toFixed(0)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="font-mono text-sm text-electric-blue/60">
            [ SUPPORT SYSTEMS ONLINE ] • [ DIAGNOSTICS ACTIVE ] • [ MAINTENANCE PROTOCOLS READY ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Gaming Section
export function GamingSection() {
  const { ref, isVisible } = useScrollAnimation();

  const gamingSkills = [
    { name: "FPS/RTS Leadership", level: "Expert", percentage: 94 },
    { name: "Tactical Operations", level: "Advanced", percentage: 89 },
    { name: "Decision Systems", level: "Advanced", percentage: 87 },
    { name: "Strategy Loops", level: "Expert", percentage: 92 },
    { name: "Team Coordination", level: "Expert", percentage: 95 },
    { name: "Pressure Management", level: "Advanced", percentage: 88 },
  ];

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