import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ logoUrl, onServiceInquiry }) => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="hero-glow absolute inset-0"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <img 
            src={logoUrl} 
            alt="SISOTECH IT SOLUTIONS - Complete Technology Solutions Provider" 
            className="h-24 w-auto mx-auto mb-6 float-animation"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gradient">SISOTECH</span>
          <br />
          <span className="text-white">IT SOLUTIONS</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Your Complete Technology Partner for Hardware, Software, Network, Cloud, Security & Automation Solutions
        </motion.p>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg pulse-glow"
            onClick={() => onServiceInquiry("General Services")}
          >
            Explore Services <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 text-lg"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;