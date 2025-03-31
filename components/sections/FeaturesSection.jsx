import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import TextReveal from '../animations/TextReveal';

const features = [
  {
    title: 'Advanced Targeting',
    description: 'Reach your ideal audience with precision using our AI-powered targeting system',
    icon: '🎯',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions with comprehensive real-time performance metrics',
    icon: '📊',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Multi-platform Integration',
    description: 'Seamlessly deploy campaigns across all major digital platforms from one dashboard',
    icon: '🔄',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'A/B Testing',
    description: 'Optimize your campaigns with automated A/B testing and performance insights',
    icon: '⚖️',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Budget Optimization',
    description: 'Maximize ROI with intelligent budget allocation based on performance data',
    icon: '💰',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Creative Assistant',
    description: 'Generate high-converting ad creative with our AI-powered design tools',
    icon: '🎨',
    gradient: 'from-blue-500 to-indigo-500',
  },
];

// Animation variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <TextReveal 
            text="Premium Features"
            className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-3"
            as="p"
          />
          <TextReveal 
            text="What you get with AdVance"
            className="text-4xl font-bold mb-4"
            gradient={true}
            as="h2"
          />
          <TextReveal 
            text="One of the most comprehensive advertising platforms currently on the market. Top-rated by marketing professionals worldwide."
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            as="p"
            delay={0.3}
          />
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlassCard className="h-full">
                {/* Feature icon with gradient background */}
                <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br ${feature.gradient}`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* Feature title */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                
                {/* Feature description */}
                <p className="text-gray-300">{feature.description}</p>
                
                {/* Animated laser line */}
                <motion.div 
                  className={`h-1 w-16 mt-6 rounded-full bg-gradient-to-r ${feature.gradient}`}
                  animate={{
                    width: ["30%", "60%", "30%"],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    filter: "blur(1px) brightness(1.2)",
                    boxShadow: "0 0 10px rgba(138, 43, 226, 0.5)"
                  }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default FeaturesSection;
