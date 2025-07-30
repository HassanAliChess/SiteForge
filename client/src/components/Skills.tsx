import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SkillCard from "./SkillCard";

const skillsData = [
  {
    emoji: "🧱",
    title: "Full Stack & Web Development",
    subtitle: "Frontend & Backend Mastery",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Tailwind", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    emoji: "📊",
    title: "Data Science & Analysis",
    subtitle: "Insights from Data",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Pandas", level: "Expert" },
      { name: "NumPy", level: "Advanced" },
      { name: "Power BI", level: "Advanced" },
      { name: "Excel", level: "Expert" },
      { name: "EDA", level: "Advanced" },
    ],
  },
  {
    emoji: "🧠",
    title: "AI & Prompt Engineering",
    subtitle: "Intelligence Automation",
    skills: [
      { name: "OpenAI APIs", level: "Expert" },
      { name: "LangChain", level: "Advanced" },
      { name: "LLM Tuning", level: "Advanced" },
      { name: "Generative AI", level: "Expert" },
      { name: "Automation", level: "Expert" },
    ],
  },
  {
    emoji: "📈",
    title: "Trading & Market Mastery",
    subtitle: "Financial Strategy",
    skills: [
      { name: "ICT Methodology", level: "Expert" },
      { name: "Risk Management", level: "Expert" },
      { name: "Strategy Design", level: "Advanced" },
      { name: "Market Psychology", level: "Advanced" },
    ],
  },
  {
    emoji: "🛠",
    title: "Tech & Support",
    subtitle: "System Administration",
    skills: [
      { name: "Troubleshooting", level: "Expert" },
      { name: "Hardware Diagnostics", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
      { name: "Networking", level: "Advanced" },
    ],
  },
  {
    emoji: "🎮",
    title: "Gaming & Competitive Strategy",
    subtitle: "Tactical Leadership",
    skills: [
      { name: "FPS/RTS Leader", level: "Expert" },
      { name: "Tactical Ops", level: "Advanced" },
      { name: "Decision Systems", level: "Advanced" },
      { name: "Strategy Loops", level: "Expert" },
    ],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 holographic-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-black/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-electric-blue pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            CORE COMPETENCIES
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="tech-scan"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
        
        {/* Tech Grid Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="font-mono text-xs text-electric-blue/60">
            [ SYSTEMS ONLINE ] • [ CAPABILITIES VERIFIED ] • [ READY FOR DEPLOYMENT ]
          </div>
        </motion.div>
      </div>
    </section>
  );
}
