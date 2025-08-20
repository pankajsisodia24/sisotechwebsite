import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">SISOTECH</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With years of experience in the technology industry, SISOTECH IT SOLUTIONS has established itself as a trusted partner for businesses seeking comprehensive IT solutions. We combine technical expertise with innovative approaches to deliver results that exceed expectations.
            </p>
            
            <div className="space-y-4">
              {[
                "Expert team with industry certifications",
                "24/7 technical support and maintenance",
                "Customized solutions for every business size",
                "Competitive pricing with transparent costs",
                "Latest technology and best practices"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="service-card p-8 rounded-2xl">
              <img  
                className="w-full h-64 object-cover rounded-xl mb-6" 
                alt="Modern IT office with advanced technology setup"
                src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Excellence</h3>
                <p className="text-gray-300">
                  Our commitment to delivering exceptional service and innovative solutions has made us the preferred choice for businesses across various industries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;