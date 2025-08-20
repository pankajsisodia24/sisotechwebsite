import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServicesSection = ({ services, onServiceInquiry }) => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations and drive growth
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card p-8 rounded-2xl group cursor-pointer"
              onClick={() => onServiceInquiry(service.title)}
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-red-400 group-hover:text-red-300 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <CheckCircle className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full border-red-600 text-red-400 hover:bg-red-600 hover:text-white group-hover:glow-effect transition-all"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;