import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-foreground">Hi, I'm </span>
          <span className="bg-accent-gradient bg-clip-text text-transparent">
            David Tunje
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in-delay">
          Full-Stack Developer crafting exceptional digital experiences
        </p>
        
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          I specialize in building modern web applications with React, Node.js, and cutting-edge technologies.
          Passionate about clean code, user experience, and bringing ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
          <Button 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Let's Connect
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-delay-4">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:david@example.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 border border-foreground/20 rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-glow-primary"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:text-primary transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;