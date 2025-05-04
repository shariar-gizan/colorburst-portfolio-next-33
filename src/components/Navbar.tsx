
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  console.log("Rendering Navbar");
  
  try {
    const { theme, toggleTheme } = useTheme();
    console.log("Theme context available:", theme);
    
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

    const menuVariants = {
      closed: {
        opacity: 0,
        y: "-100%",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      },
      open: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };

    const menuItemVariants = {
      closed: { opacity: 0, y: -20 },
      open: { opacity: 1, y: 0 }
    };

    return (
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 md:px-8",
        scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.a 
            href="#" 
            className="font-bold text-xl md:text-2xl text-foreground relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-hero">
              Dev<span className="font-extrabold">Folio</span>
            </span>
          </motion.a>

          <div className="flex items-center gap-2">
            {/* Theme toggle button */}
            <motion.button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400 animate-fade-in" />
              ) : (
                <Moon size={20} className="text-slate-700 animate-fade-in" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button 
              className="p-2 md:hidden rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X size={24} className="animate-fade-in" /> 
              ) : (
                <Menu size={24} className="animate-fade-in" />
              )}
            </motion.button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <motion.a 
              href="#projects" 
              className="font-medium hover:text-portfolio-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              className="font-medium hover:text-portfolio-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full"
              whileHover={{ scale: 1.05 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#about" 
              className="font-medium hover:text-portfolio-purple transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="default" className="bg-portfolio-purple hover:bg-portfolio-purple/90 transition-all duration-300">Contact</Button>
            </motion.a>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center gap-8 md:hidden z-50"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.a 
                  href="#projects" 
                  onClick={toggleMenu} 
                  className="text-2xl font-medium hover:text-portfolio-purple transition-all duration-300"
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  Projects
                </motion.a>
                <motion.a 
                  href="#skills" 
                  onClick={toggleMenu} 
                  className="text-2xl font-medium hover:text-portfolio-purple transition-all duration-300"
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  Skills
                </motion.a>
                <motion.a 
                  href="#about" 
                  onClick={toggleMenu} 
                  className="text-2xl font-medium hover:text-portfolio-purple transition-all duration-300"
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  About
                </motion.a>
                <motion.a 
                  href="#contact" 
                  onClick={toggleMenu}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="default" className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-xl px-8 py-6 transition-all duration-300">Contact</Button>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    );
  } catch (error) {
    console.error("Error in Navbar:", error);
    // Fallback UI when theme context is not available
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm px-4 py-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl md:text-2xl">DevFolio</span>
        </div>
      </nav>
    );
  }
};

export default Navbar;
