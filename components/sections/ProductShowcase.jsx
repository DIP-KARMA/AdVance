import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../animations/TextReveal';
import GlassCard from '../ui/GlassCard';
import PremiumButton from '../ui/PremiumButton';

// Sample showcase items
const showcaseItems = [
  {
    title: 'AI-Generated Visuals',
    description: 'Create stunning visuals for your ads with our advanced AI generation tools',
    image: '/showcase/ai-visuals.jpg',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Smart Copy Generation',
    description: 'Generate compelling ad copy that resonates with your target audience',
    image: '/showcase/copy-generation.jpg',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Cross-Platform Deployment',
    description: 'Deploy your campaigns across multiple platforms with a single click',
    image: '/showcase/cross-platform.jpg',
    gradient: 'from-indigo-600 to-purple-600',
  },
];

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <TextReveal 
            text="Product Showcase"
            className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-3"
            as="p"
          />
          <TextReveal 
            text="See AdVance in Action"
            className="text-4xl font-bold mb-4"
            gradient={true}
            as="h2"
          />
          <TextReveal 
            text="Experience how our premium platform transforms your advertising workflow with these powerful features"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            as="p"
            delay={0.3}
          />
        </div>
        
        {/* Showcase display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Feature selector */}
          <div>
            {showcaseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <GlassCard 
                  className={`cursor-pointer transition-all duration-300 ${
                    activeIndex === index 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                      : 'border-white/10'
                  }`}
                  hoverEffect={activeIndex !== index}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-start">
                    {/* Indicator */}
                    <div className="mr-4 mt-1">
                      <motion.div 
                        className={`w-4 h-4 rounded-full ${
                          activeIndex === index 
                            ? `bg-gradient-to-r ${item.gradient}` 
                            : 'bg-white/20'
                        }`}
                        animate={activeIndex === index ? {
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 0 rgba(138, 43, 226, 0.4)',
                            '0 0 20px rgba(138, 43, 226, 0.6)',
                            '0 0 0 rgba(138, 43, 226, 0.4)'
                          ]
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <PremiumButton 
                variant="primary" 
                size="lg"
                onClick={() => console.log('Try it now clicked')}
              >
                Try It Now
              </PremiumButton>
            </motion.div>
          </div>
          
          {/* Right side: Visual showcase */}
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden aspect-video shadow-2xl shadow-purple-900/30"
            >
              {/* Placeholder for actual image - in production, use next/image */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${showcaseItems[activeIndex].gradient} flex items-center justify-center`}
              >
                <div className="text-center text-white">
                  <div className="text-3xl mb-4 font-bold">{showcaseItems[activeIndex].title}</div>
                  <div className="text-xl">Premium Feature Showcase</div>
                </div>
              </div>
              
              {/* Laser frame effect */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top laser line */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${showcaseItems[activeIndex].gradient}`}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      '0 0 5px rgba(138, 43, 226, 0.5)',
                      '0 0 15px rgba(138, 43, 226, 0.8)',
                      '0 0 5px rgba(138, 43, 226, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Right laser line */}
                <motion.div 
                  className={`absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b ${showcaseItems[activeIndex].gradient}`}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      '0 0 5px rgba(138, 43, 226, 0.5)',
                      '0 0 15px rgba(138, 43, 226, 0.8)',
                      '0 0 5px rgba(138, 43, 226, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                />
                
                {/* Bottom laser line */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${showcaseItems[activeIndex].gradient}`}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      '0 0 5px rgba(138, 43, 226, 0.5)',
                      '0 0 15px rgba(138, 43, 226, 0.8)',
                      '0 0 5px rgba(138, 43, 226, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
                
                {/* Left laser line */}
                <motion.div 
                  className={`absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b ${showcaseItems[activeIndex].gradient}`}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      '0 0 5px rgba(138, 43, 226, 0.5)',
                      '0 0 15px rgba(138, 43, 226, 0.8)',
                      '0 0 5px rgba(138, 43, 226, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5
                  }}
                />
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-purple-600/30 blur-3xl -z-10"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
