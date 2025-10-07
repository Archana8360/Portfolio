import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4">
            <Code2 className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Archana Chauhan</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Software Developer
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proactive Software Developer with 2+ years of experience in building scalable,
            high-performance systems. Focused on improving efficiency and user experience through
            collaborative problem-solving.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button size="lg" className="bg-gradient-primary shadow-glow transition-smooth hover:scale-105">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 hover:bg-accent/10 transition-smooth"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:shadow-glow transition-smooth hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
            <a
              href="https://github.com/Archana8360"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:shadow-glow transition-smooth hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-accent" />
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:shadow-glow transition-smooth hover:scale-110"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-5 h-5 text-accent" />
            </a>
            <a
              href="mailto:aachauhan98@gmail.com"
              className="p-3 rounded-full glass-effect hover:shadow-glow transition-smooth hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
