
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 md:px-8",
      scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
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

        <div className="flex items-center gap-2">
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400 animate-fade-in" />
            ) : (
              <Moon size={20} className="text-slate-700 animate-fade-in" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 md:hidden rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="animate-fade-in" /> 
            ) : (
              <Menu size={24} className="animate-fade-in" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#projects" className="font-medium hover:text-portfolio-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full">Projects</a>
          <a href="#skills" className="font-medium hover:text-portfolio-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full">Skills</a>
          <a href="#about" className="font-medium hover:text-portfolio-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full">About</a>
          <a href="#contact">
            <Button variant="default" className="bg-portfolio-purple hover:bg-portfolio-purple/90 transition-all duration-300 hover:scale-105">Contact</Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ease-in-out z-50",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}>
          <a href="#projects" onClick={toggleMenu} className="text-2xl font-medium hover:text-portfolio-purple transition-all duration-300 hover:scale-110">Projects</a>
          <a href="#skills" onClick={toggleMenu} className="text-2xl font-medium hover:text-portfolio-purple transition-all duration-300 hover:scale-110">Skills</a>
          <a href="#about" onClick={toggleMenu} className="text-2xl font-medium hover:text-portfolio-purple transition-all duration-300 hover:scale-110">About</a>
          <a href="#contact" onClick={toggleMenu}>
            <Button variant="default" className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-xl px-8 py-6 transition-all duration-300 hover:scale-110">Contact</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
