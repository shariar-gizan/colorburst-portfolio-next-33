
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 -translate-y-1/2 w-72 h-72 bg-portfolio-soft-blue rounded-full blur-3xl opacity-30"></div>
      <div className="absolute left-0 bottom-1/4 translate-y-1/2 w-72 h-72 bg-portfolio-soft-purple rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-portfolio-soft-purple flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-portfolio-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-2">The fastest way to get in touch</p>
              <a href="mailto:hello@example.com" className="text-portfolio-purple font-medium hover:underline">
                hello@example.com
              </a>
            </div>
            
            <div className="bg-gradient-hero text-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Looking to hire?</h3>
              <p className="text-white/80 mb-4">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <Button variant="outline" className="bg-white text-portfolio-purple hover:bg-white/90">
                Download Resume
              </Button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-white rounded-xl p-6 shadow-sm border">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
