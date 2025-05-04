
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="animate-fade-in">
            <a href="#" className="font-bold text-xl text-foreground">
              <span className="bg-clip-text text-transparent bg-gradient-hero">
                Dev<span className="font-extrabold">Folio</span>
              </span>
            </a>
            <p className="text-muted-foreground mt-2">Creating exceptional mobile experiences</p>
          </div>
          
          <div className="flex flex-wrap gap-8 animate-fade-in">
            <a href="#projects" className="text-sm hover:text-portfolio-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full">Projects</a>
            <a href="#skills" className="text-sm hover:text-portfolio-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full">Skills</a>
            <a href="#about" className="text-sm hover:text-portfolio-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full">About</a>
            <a href="#contact" className="text-sm hover:text-portfolio-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full">Contact</a>
          </div>
          
          <div className="flex gap-4 animate-fade-in">
            <a href="#" className="p-2 text-muted-foreground hover:text-portfolio-purple transition-all duration-300 hover:scale-125">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 text-muted-foreground hover:text-portfolio-purple transition-all duration-300 hover:scale-125">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 text-muted-foreground hover:text-portfolio-purple transition-all duration-300 hover:scale-125">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mobile App Engineer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
