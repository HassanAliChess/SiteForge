import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "MESSAGE TRANSMITTED ✓",
        description: "Your message has been sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="font-orbitron font-bold text-3xl md:text-5xl mb-16 text-electric-blue"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          INITIATE CONNECTION
        </motion.h2>
        
        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card-enhanced rounded-lg p-4 hover-glow transition-all duration-300"
            whileHover={{ scale: 1.1, rotateZ: 5 }}
          >
            <Github className="w-8 h-8 text-white" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card-enhanced rounded-lg p-4 hover-glow transition-all duration-300"
            whileHover={{ scale: 1.1, rotateZ: -5 }}
          >
            <Linkedin className="w-8 h-8 text-white" />
          </motion.a>
          <motion.a
            href="mailto:hassan@example.com"
            className="skill-card-enhanced rounded-lg p-4 hover-glow transition-all duration-300"
            whileHover={{ scale: 1.1, rotateZ: 5 }}
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.a>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          className="skill-card-enhanced rounded-lg p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border-b-2 border-electric-blue/50 pb-2 focus:border-electric-blue focus:outline-none transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b-2 border-electric-blue/50 pb-2 focus:border-electric-blue focus:outline-none transition-colors text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Message"
                required
                className="w-full bg-transparent border-2 border-electric-blue/50 p-4 rounded focus:border-electric-blue focus:outline-none transition-colors resize-none text-white placeholder-gray-400"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full skill-card-enhanced rounded-lg py-3 font-semibold hover-glow transition-all duration-300 disabled:opacity-50 text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
