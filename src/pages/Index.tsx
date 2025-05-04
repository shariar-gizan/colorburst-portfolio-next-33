
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Fitness Tracker Pro",
      description: "Health & fitness tracking app with personalized workout plans and progress analytics",
      imageUrl: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdG5lc3MlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["Swift", "HealthKit", "CoreML"],
      appStoreLink: "#",
      googlePlayLink: "#"
    },
    {
      id: 2,
      title: "Finance Manager",
      description: "Personal finance app with expense tracking, budgeting, and investment portfolio management",
      imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFua2luZyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["React Native", "Firebase", "Redux"],
      appStoreLink: "#",
      googlePlayLink: "#"
    },
    {
      id: 3,
      title: "Social Connect",
      description: "Community platform with real-time messaging, event discovery and profile customization",
      imageUrl: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2lhbCUyMG1lZGlhJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      tags: ["Kotlin", "Jetpack Compose", "Socket.io"],
      appStoreLink: "#",
      googlePlayLink: "#"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of mobile applications I've designed and developed, showcasing my expertise in creating exceptional user experiences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  appStoreLink={project.appStoreLink}
                  googlePlayLink={project.googlePlayLink}
                />
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="group dark:border-slate-700 dark:hover:bg-slate-800">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <Skills />
        
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                    alt="Developer Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-900/50 rounded-2xl p-4 max-w-xs"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-2 items-center mb-2">
                    <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                    <span className="text-sm font-medium">Currently Available for Work</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate mobile app engineer with over 5 years of experience in creating elegant, 
                  user-centered applications for iOS and Android platforms.
                </p>
                <p className="text-muted-foreground mb-6">
                  My journey in mobile development began when I built my first app during college, 
                  and since then, I've worked with startups and established companies to bring innovative 
                  ideas to life. I specialize in creating performance-optimized, beautiful apps that users love.
                </p>
                
                <motion.div 
                  className="grid grid-cols-2 gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50"
                  >
                    <p className="text-4xl font-bold text-portfolio-purple">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50"
                  >
                    <p className="text-4xl font-bold text-portfolio-blue">20+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50"
                  >
                    <p className="text-4xl font-bold text-portfolio-pink">15+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50"
                  >
                    <p className="text-4xl font-bold text-portfolio-orange">10+</p>
                    <p className="text-sm text-muted-foreground">Awards Received</p>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
