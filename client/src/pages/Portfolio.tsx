import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SkillProgress from "@/components/SkillProgress";
import Badges from "@/components/Badges";
import SoftSkills from "@/components/SoftSkills";
import Contact from "@/components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Badges />
      <SkillProgress />
      <SoftSkills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-electric-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-mono text-sm text-gray-400">
            © 2024 Muhammad Hassan Ali - Digital Titan. All systems operational.
          </p>
        </div>
      </footer>
    </div>
  );
}
