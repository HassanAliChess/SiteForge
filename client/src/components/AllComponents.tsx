import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation, useTypewriter } from "@/hooks/AllHooks";

// Navigation Component
export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-electric-blue/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-orbitron font-bold text-xl text-electric-blue">MHA</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1 text-xs">
                <button onClick={() => scrollToSection("hero")} className="hover:text-electric-blue transition-colors px-2 py-2">Home</button>
                <button onClick={() => scrollToSection("about")} className="hover:text-electric-blue transition-colors px-2 py-2">About</button>
                <button onClick={() => scrollToSection("fullstack")} className="hover:text-electric-blue transition-colors px-2 py-2">FullStack</button>
                <button onClick={() => scrollToSection("datascience")} className="hover:text-electric-blue transition-colors px-2 py-2">DataSci</button>
                <button onClick={() => scrollToSection("ai")} className="hover:text-electric-blue transition-colors px-2 py-2">AI</button>
                <button onClick={() => scrollToSection("trading")} className="hover:text-electric-blue transition-colors px-2 py-2">Trading</button>
                <button onClick={() => scrollToSection("techsupport")} className="hover:text-electric-blue transition-colors px-2 py-2">TechSupport</button>
                <button onClick={() => scrollToSection("gaming")} className="hover:text-electric-blue transition-colors px-2 py-2">Gaming</button>
                <button onClick={() => scrollToSection("contact")} className="hover:text-electric-blue transition-colors px-2 py-2">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Component
export function Hero() {
  const { ref, isVisible } = useScrollAnimation();
  const typewriterText = useTypewriter("DIGITAL TITAN", 150);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 holographic-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-electric-blue to-neon-cyan p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl">
              🚀
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-white pulse-ring"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          MUHAMMAD HASSAN ALI
        </motion.h1>

        <motion.div
          className="font-orbitron font-bold text-2xl md:text-4xl mb-8 text-electric-blue cyber-text-glow h-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {typewriterText}
        </motion.div>

        <motion.p
          className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Multidisciplinary Expert • Web Development • AI Engineering • Trading • Data Science
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <button 
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-electric-blue to-neon-cyan text-background font-semibold rounded-lg hover:scale-105 transition-transform cyber-transform"
          >
            EXPLORE CAPABILITIES
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-electric-blue text-electric-blue font-semibold rounded-lg hover:bg-electric-blue hover:text-background transition-colors cyber-transform"
          >
            INITIATE CONTACT
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// About Component
export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 holographic-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            SYSTEM OVERVIEW
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glassmorphism p-8 rounded-xl border border-electric-blue/30">
              <h3 className="font-orbitron font-bold text-xl text-electric-blue mb-4 cyber-text-glow">
                CORE IDENTITY
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Muhammad Hassan Ali - A multidisciplinary digital architect operating at the intersection 
                of technology, finance, and artificial intelligence. Specialized in creating scalable 
                solutions that bridge complex technical challenges with real-world applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From full-stack web development to advanced AI implementations, trading systems, 
                and data analytics - every project is approached with precision, innovation, and 
                a commitment to excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { icon: "🧱", title: "FULL STACK", desc: "Complete web solutions" },
              { icon: "📊", title: "DATA SCI", desc: "Analytics & insights" },
              { icon: "🧠", title: "AI SYSTEMS", desc: "Intelligence automation" },
              { icon: "📈", title: "TRADING", desc: "Market mastery" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-lg text-center tech-scan cyber-transform"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-orbitron font-bold text-sm text-electric-blue mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Badges Component
export function Badges() {
  const { ref, isVisible } = useScrollAnimation();

  const badges = [
    { name: "Web Development Expert", icon: "🌐", level: "MASTER" },
    { name: "AI Implementation", icon: "🤖", level: "EXPERT" },
    { name: "Trading Systems", icon: "💹", level: "ADVANCED" },
    { name: "Data Analytics", icon: "📈", level: "EXPERT" },
    { name: "System Architecture", icon: "🏗️", level: "EXPERT" },
    { name: "Problem Solver", icon: "🧩", level: "MASTER" }
  ];

  return (
    <section id="badges" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 holographic-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            ACHIEVEMENT MATRIX
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 rounded-xl text-center tech-scan cyber-transform"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{badge.icon}</div>
              <h3 className="font-orbitron font-bold text-lg text-white mb-2">
                {badge.name}
              </h3>
              <span className="inline-block px-3 py-1 bg-electric-blue/20 text-electric-blue text-sm rounded-full border border-electric-blue/30">
                {badge.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Soft Skills Component
export function SoftSkills() {
  const { ref, isVisible } = useScrollAnimation();

  const softSkills = [
    { name: "Strategic Thinking", level: 95 },
    { name: "Problem Solving", level: 98 },
    { name: "Leadership", level: 90 },
    { name: "Communication", level: 88 },
    { name: "Adaptability", level: 92 },
    { name: "Innovation", level: 96 }
  ];

  return (
    <section id="softskills" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 holographic-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            LEADERSHIP PROTOCOLS
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 rounded-xl tech-scan"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <h3 className="font-orbitron font-bold text-lg text-white mb-4 cyber-text-glow">
                {skill.name}
              </h3>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Mastery Level</span>
                  <span className="text-electric-blue">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Component
export function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 holographic-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white pulse-ring"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            INITIATE CONTACT
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="glassmorphism p-8 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-electric-blue mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-electric-blue/30 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-electric-blue mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-electric-blue/30 rounded-lg text-white focus:border-electric-blue focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-electric-blue mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-electric-blue/30 rounded-lg text-white focus:border-electric-blue focus:outline-none resize-none"
                placeholder="Your message..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-electric-blue to-neon-cyan text-background font-semibold rounded-lg hover:scale-105 transition-transform cyber-transform"
              >
                TRANSMIT MESSAGE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}