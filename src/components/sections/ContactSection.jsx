import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = ({ contactInfo, onSubmit, services }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? Contact us today for a free consultation.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="service-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-red-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300 whitespace-pre-line">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
                <div className="text-gray-300 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency Support Only</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="service-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-semibold mb-2">First Name</label>
                    <input 
                      id="firstName"
                      name="firstName"
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-semibold mb-2">Last Name</label>
                    <input 
                      id="lastName"
                      name="lastName"
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="serviceInterest" className="block text-white font-semibold mb-2">Service Interest</label>
                  <select 
                    id="serviceInterest" 
                    name="serviceInterest"
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-red-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service.title} value={service.title.toLowerCase().replace(/\s+/g, '-')}>{service.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4" 
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg glow-effect"
                >
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;