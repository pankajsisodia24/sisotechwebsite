import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import { supabase } from '@/lib/supabaseClient';
import { 
  Monitor, 
  Network, 
  Code, 
  Cloud, 
  Camera, 
  Home,
  Star,
  Users,
  Award,
  Zap
} from 'lucide-react';

const servicesData = [
  {
    icon: Monitor,
    title: "Hardware Solutions",
    description: "Complete hardware setup, maintenance, and optimization for your business infrastructure.",
    features: ["Server Installation", "Workstation Setup", "Hardware Maintenance", "System Maintenance"]
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "Robust networking infrastructure design, implementation, and management services.",
    features: ["Network Design", "WiFi Setup", "Security Configuration", "Firewall Setups"]
  },
  {
    icon: Code,
    title: "Software Solutions",
    description: "Custom software development and enterprise application solutions tailored to your needs.",
    features: ["Website Development", "System Securities", "Software Maintenance", "Technical Support"]
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Comprehensive cloud migration, management, and optimization services for modern businesses.",
    features: ["Server", "Data Backup", "Cloud Space", "Virtual Machines", "Microsoft 365"]
  },
  {
    icon: Camera,
    title: "Commercial CCTV Projects",
    description: "Advanced surveillance systems installation and monitoring for enhanced security.",
    features: ["System Design", "Installation", "Remote Monitoring", "Maintenance Support"]
  },
  {
    icon: Home,
    title: "Automations (Smart Home/Office)",
    description: "Intelligent automation solutions for homes and offices to enhance efficiency and comfort.",
    features: ["Smart Controls", "IoT Integration", "Energy Management", "Remote Access"]
  }
];

const statsData = [
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Star, value: "5.0", label: "Client Rating" },
  { icon: Zap, value: "24/7", label: "Support Available" }
];

const contactInfo = {
  phone: "+91 7733929102",
  email: "info@sisotechit.com",
  address: "K-12, Acrops Arched, 206, Phoebusin, Malviya Marg, C-Scheme, Jaipur, 302001",
  logoUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2a5e8755-c13d-4a14-8c87-10532497aeec/94ff86264005f7463c3b15db863f4f83.png"
};

const salesEmail = "info@sisotechit.com";

function App() {
  const { toast } = useToast();

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
       const { data: emailData, error: emailError } = await supabase.functions.invoke('send-quote-request', {
        body: { 
          formData: data,
          recipientEmail: salesEmail,
          subject: 'New Contact Form Submission' 
        }
      });

      if (emailError) throw emailError;

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      event.target.reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error Sending Message",
        description: "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleServiceInquiry = (serviceName) => {
    toast({
      title: "Service Inquiry",
      description: `Thank you for your interest in ${serviceName}. We'll contact you soon!`,
    });
  };

  const handleGetQuote = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('send-quote-request', {
        body: { 
          recipientEmail: salesEmail,
          subject: 'New Quote Request',
          messageBody: 'A user has requested a quote from the website.'
        }
      });

      if (error) throw error;

      toast({
        title: "Quote Request Sent!",
        description: "Our team will contact you shortly with a quote.",
      });
    } catch (error) {
      console.error("Error sending quote request:", error);
      toast({
        title: "Error Sending Quote Request",
        description: "Could not send your request. Please try again later.",
        variant: "destructive",
      });
    }
  };


  return (
    <div className="min-h-screen gradient-bg tech-pattern">
      <Header logoUrl={contactInfo.logoUrl} onGetQuote={handleGetQuote} />
      <main>
        <HeroSection logoUrl={contactInfo.logoUrl} onServiceInquiry={handleServiceInquiry} />
        <StatsSection stats={statsData} />
        <ServicesSection services={servicesData} onServiceInquiry={handleServiceInquiry} />
        <AboutSection />
        <ContactSection 
          contactInfo={contactInfo} 
          onSubmit={handleContactSubmit} 
          services={servicesData} 
        />
      </main>
      <Footer logoUrl={contactInfo.logoUrl} />
      <Toaster />
    </div>
  );
}

export default App;