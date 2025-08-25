import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';



const Header = ({ logoUrl, onGetQuote }) => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={logoUrl} 
            alt="components/Images/sisotech.png" 
            className="h-12 w-auto"
          />
          <div>
            <span className="text-xl font-bold text-gradient">SISOTECH</span>
            <p className="text-xs text-gray-400">IT Solutions</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-red-400 transition-colors">Services</a>
          <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors">About</a>
          <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact</a>
          <Button 
            className="bg-red-600 hover:bg-red-700 glow-effect"
            onClick={onGetQuote}
          >
            Get Quote
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;