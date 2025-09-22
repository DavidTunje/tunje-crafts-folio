import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'david.tunje@example.com',
      href: 'mailto:david.tunje@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-accent-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <Input 
                placeholder="Subject" 
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
              
              <Textarea 
                placeholder="Your Message" 
                rows={5}
                className="bg-background/50 border-primary/20 focus:border-primary resize-none"
              />
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
              >
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, value, href }) => (
                  <a
                    key={title}
                    href={href}
                    className="flex items-center p-4 bg-card/50 border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group"
                  >
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{title}</p>
                      <p className="text-foreground/70 group-hover:text-primary transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 bg-card/50 border border-primary/20 rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-glow-primary"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="p-6 bg-card-gradient border-primary/20">
              <h4 className="font-semibold mb-2 text-foreground">Let's Collaborate</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;