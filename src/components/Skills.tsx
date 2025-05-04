
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Laptop, Smartphone, Code } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: { name: string; level: number }[];
  className?: string;
}

const SkillCard = ({ icon, title, description, skills, className }: SkillCardProps) => {
  return (
    <Card className={`h-full ${className}`}>
      <CardContent className="pt-6">
        <div className="h-12 w-12 rounded-full bg-portfolio-soft-purple flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" indicatorClassName="bg-portfolio-purple" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in creating high-performance mobile applications across various platforms and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            icon={<Smartphone className="h-6 w-6 text-portfolio-purple" />}
            title="Mobile Development"
            description="Building native applications for iOS and Android platforms"
            skills={[
              { name: "Swift/SwiftUI", level: 90 },
              { name: "Kotlin", level: 85 },
              { name: "React Native", level: 92 },
              { name: "Flutter", level: 80 }
            ]}
          />
          
          <SkillCard 
            icon={<Code className="h-6 w-6 text-portfolio-blue" />}
            title="Programming"
            description="Strong foundation in programming languages and paradigms"
            skills={[
              { name: "TypeScript", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "Python", level: 75 },
              { name: "C/C++", level: 70 }
            ]}
            className="lg:translate-y-8"
          />
          
          <SkillCard 
            icon={<Laptop className="h-6 w-6 text-portfolio-pink" />}
            title="Tools & Infrastructure"
            description="Proficient with development tools and deployment practices"
            skills={[
              { name: "Git/GitHub", level: 95 },
              { name: "CI/CD", level: 85 },
              { name: "Firebase", level: 90 },
              { name: "App Store Connect", level: 88 }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
