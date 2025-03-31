import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../animations/TextReveal';
import PremiumButton from '../ui/PremiumButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Content container */}
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Premium subtitle with glow */}
          <motion.div 
            className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-purple-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-purple-300">
              Premium AI-Powered Advertising
            </span>
          </motion.div>
          
          {/* Main heading with text reveal animation */}
          <TextReveal 
            text="Transform Your Advertising with Advanced AI Technology"
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            gradient={true}
            as="h1"
          />
          
          {/* Subheading with text reveal */}
          <TextReveal 
            text="Create stunning, high-converting advertisements with our cutting-edge AI platform"
            className="text-xl text-gray-300 mb-10"
            delay={0.4}
            as="p"
          />
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Get started clicked')}
            >
              Get Started Now
            </PremiumButton>
            
            <PremiumButton 
              variant="outline" 
              size="lg"
              onClick={() => console.log('Learn more clicked')}
            >
              View Demo
            </PremiumButton>
          </div>
          
          {/* Stats counter */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">500+</h3>
              <p className="text-gray-400 mt-1">Global Brands</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10M+</h3>
              <p className="text-gray-400 mt-1">Generated Ads</p>
            </div>
            <div className="text-center md:col-span-1 col-span-2">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">98%</h3>
              <p className="text-gray-400 mt-1">Satisfaction Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right glowing orb */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Bottom left glowing orb */}
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
