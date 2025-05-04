
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="font-bold text-xl text-foreground">
              <span className="bg-clip-text text-transparent bg-gradient-hero">
                Dev<span className="font-extrabold">Folio</span>
              </span>
            </a>
            <p className="text-muted-foreground mt-2">Creating exceptional mobile experiences</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#projects" 
              className="text-sm hover:text-portfolio-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full"
              whileHover={{ scale: 1.1 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              className="text-sm hover:text-portfolio-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full"
              whileHover={{ scale: 1.1 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-sm hover:text-portfolio-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full"
              whileHover={{ scale: 1.1 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-sm hover:text-portfolio-purple transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-portfolio-purple after:transition-all hover:after:w-full"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#" 
              className="p-2 text-muted-foreground hover:text-portfolio-purple transition-all duration-300"
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-2 text-muted-foreground hover:text-portfolio-purple transition-all duration-300"
              whileHover={{ scale: 1.3, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-2 text-muted-foreground hover:text-portfolio-purple transition-all duration-300"
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Mobile App Engineer. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
