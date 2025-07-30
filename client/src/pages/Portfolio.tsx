import { Navigation, Hero, About, Badges, SoftSkills, Contact } from "@/components/AllComponents";
import { FullStackSection, DataScienceSection, AISection, TradingSection, TechSupportSection, GamingSection } from "@/components/AllSections";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <FullStackSection />
      <DataScienceSection />
      <AISection />
      <TradingSection />
      <TechSupportSection />
      <GamingSection />
      <Badges />
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
