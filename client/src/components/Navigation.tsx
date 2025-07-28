import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent"
    } border-b border-electric-blue/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-orbitron font-bold text-xl text-electric-blue">MHA</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-electric-blue transition-colors px-3 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-electric-blue transition-colors px-3 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-electric-blue transition-colors px-3 py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-electric-blue transition-colors px-3 py-2"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
