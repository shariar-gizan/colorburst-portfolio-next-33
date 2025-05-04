
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-portfolio-purple/30 via-portfolio-blue/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-portfolio-soft-purple rounded-full blur-3xl opacity-20 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-portfolio-soft-blue rounded-full blur-3xl opacity-20 translate-y-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-6">
          <span className="px-4 py-2 bg-portfolio-soft-purple text-portfolio-purple rounded-full text-sm font-medium">Mobile App Engineer</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Creating <span className="bg-clip-text text-transparent bg-gradient-hero">delightful</span> mobile experiences
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          I design and build native mobile applications that are beautiful, 
          functional, and deliver exceptional user experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-8 py-6 text-lg">
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-2 px-8 py-6 text-lg">Get in Touch</Button>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="p-3 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="p-3 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
