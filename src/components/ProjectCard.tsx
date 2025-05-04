
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  appStoreLink?: string;
  googlePlayLink?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  appStoreLink,
  googlePlayLink,
  className,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className={`overflow-hidden group transition-all duration-300 hover:shadow-xl border dark:border-slate-800 ${className}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-black">
          <motion.div 
            className="device-frame w-[80%] h-[80%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 opacity-80"></div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex gap-2 flex-wrap mb-3">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-portfolio-soft-purple text-portfolio-purple dark:bg-portfolio-purple/20">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {appStoreLink && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="flex items-center gap-1 dark:border-slate-700 dark:hover:bg-slate-800">
                  App Store <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </motion.div>
            )}
            {googlePlayLink && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="flex items-center gap-1 dark:border-slate-700 dark:hover:bg-slate-800">
                  Google Play <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
