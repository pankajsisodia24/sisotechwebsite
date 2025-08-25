import React from 'react';

const Footer = ({ logoUrl }) => {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoUrl} 
                alt="SISOTECH IT SOLUTIONS" 
                className="h-10 w-auto"
              />
              <div>
                <span className="text-lg font-bold text-gradient">SISOTECH</span>
                <p className="text-xs text-gray-400">IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted technology partner providing comprehensive IT solutions for businesses of all sizes. Innovation, reliability, and excellence in every project.
            </p>
          </div>
          
          <div>
            <span className="text-white font-semibold mb-4 block">Services</span>
            <ul className="space-y-2 text-gray-300">
              <li>Hardware Solutions</li>
              <li>Network Solutions</li>
              <li>Software Solutions</li>
              <li>Cloud Services</li>
              <li>CCTV Projects</li>
              <li>Smart Automation</li>
            </ul>
          </div>
          
          <div>
            <span className="text-white font-semibold mb-4 block">Company</span>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} SISOTECH IT SOLUTIONS. All rights reserved. | Designed with ❤️ for technology excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;