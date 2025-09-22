import { Card } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Creative approach to complex challenges with innovative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication and leadership skills.'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and evolving project requirements.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-accent-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a difference. My journey began with a curiosity for 
              technology and has evolved into a career dedicated to crafting exceptional user experiences.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I believe in the power of clean, efficient code and collaborative development. 
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-card border border-primary/20 rounded-full text-sm text-foreground/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{title}</h3>
                  <p className="text-sm text-foreground/70">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;