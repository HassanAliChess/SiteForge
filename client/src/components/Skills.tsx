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
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.h2
          className="font-orbitron font-bold text-3xl md:text-5xl mb-16 text-center text-electric-blue"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          CORE COMPETENCIES
        </motion.h2>
        
        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
