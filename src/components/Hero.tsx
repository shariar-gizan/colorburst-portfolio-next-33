
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple/10 via-portfolio-blue/5 to-transparent dark:from-portfolio-purple/5 dark:via-portfolio-blue/5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-portfolio-soft-purple rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-portfolio-soft-blue rounded-full blur-[120px] opacity-20 translate-y-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          className="flex justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 bg-portfolio-soft-purple text-portfolio-purple rounded-full text-sm font-medium">Mobile App Engineer</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Creating <span className="bg-clip-text text-transparent bg-gradient-hero">delightful</span> mobile experiences
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I design and build native mobile applications that are beautiful, 
          functional, and deliver exceptional user experiences.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-8 py-6 text-lg group">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="border-2 px-8 py-6 text-lg">Get in Touch</Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a 
            href="#" 
            className="p-3 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="#" 
            className="p-3 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
