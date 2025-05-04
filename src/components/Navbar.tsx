
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:px-8",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="font-bold text-xl md:text-2xl text-foreground relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-hero">
            Dev<span className="font-extrabold">Folio</span>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 md:hidden rounded-full hover:bg-slate-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#projects" className="font-medium hover:text-portfolio-purple transition-colors">Projects</a>
          <a href="#skills" className="font-medium hover:text-portfolio-purple transition-colors">Skills</a>
          <a href="#about" className="font-medium hover:text-portfolio-purple transition-colors">About</a>
          <a href="#contact">
            <Button variant="default" className="bg-portfolio-purple hover:bg-portfolio-purple/90">Contact</Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <a href="#projects" onClick={toggleMenu} className="text-xl font-medium">Projects</a>
          <a href="#skills" onClick={toggleMenu} className="text-xl font-medium">Skills</a>
          <a href="#about" onClick={toggleMenu} className="text-xl font-medium">About</a>
          <a href="#contact" onClick={toggleMenu}>
            <Button variant="default" className="bg-portfolio-purple hover:bg-portfolio-purple/90">Contact</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
