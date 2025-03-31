import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ShowcaseSection = () => {
  // Sample showcase data
  const showcaseItems = [
    {
      title: "AI-Powered Dashboard",
      description: "Track your ad performance in real-time with comprehensive analytics",
      metrics: [
        { label: "Conversion Rate", value: "+42%", color: "bg-purple-600/50" },
        { label: "CTR", value: "3.8%", color: "bg-indigo-600/50" },
        { label: "ROI", value: "320%", color: "bg-violet-600/50" },
        { label: "Engagement", value: "+65%", color: "bg-fuchsia-600/50" }
      ]
    },
    {
      title: "Multi-Platform Integration",
      description: "Seamlessly connect with all your favorite platforms",
      platforms: [
        { name: "Facebook", users: "2.8B", growth: "+12%" },
        { name: "Instagram", users: "1.4B", growth: "+18%" },
        { name: "TikTok", users: "1.2B", growth: "+32%" },
        { name: "LinkedIn", users: "740M", growth: "+9%" },
        { name: "Twitter", users: "330M", growth: "+5%" },
        { name: "Pinterest", users: "450M", growth: "+11%" }
      ]
    },
    {
      title: "Advanced AI Generation",
      description: "Create stunning visuals with our state-of-the-art AI models",
      features: [
        "Photorealistic imagery",
        "Brand-aware design",
        "Style matching",
        "Text-to-image generation"
      ],
      specs: [
        { label: "Resolution", value: "Up to 4K" },
        { label: "Processing Time", value: "<2s" },
        { label: "Model Version", value: "v3.5" }
      ]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level protection for all your creative assets",
      securityFeatures: [
        { icon: "", label: "End-to-end encryption" },
        { icon: "", label: "SOC 2 Type II compliant" },
        { icon: "", label: "Role-based access control" },
        { icon: "", label: "Audit logging" }
      ],
      certifications: ["ISO 27001", "GDPR Compliant", "CCPA Ready"]
    }
  ];

  return (
    <section id="showcase" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel-premium rounded-2xl p-12 platform-shadow border border-[#BB86FC]/20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">Success Metrics Dashboard</h2>
              <p className="text-gray-400 mt-2 max-w-xl">Real-world results from our premium clients</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-3">
              <div className="text-xs bg-[#BB86FC]/20 text-[#BB86FC] px-3 py-1 rounded-full">Live Data</div>
              <div className="text-xs bg-[#03DAC5]/20 text-[#03DAC5] px-3 py-1 rounded-full">Updated Hourly</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enhanced AI Dashboard with animated elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel-premium rounded-xl overflow-hidden relative border border-[#BB86FC]/20"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{showcaseItems[0].title}</h3>
                <p className="text-gray-300 mb-6">{showcaseItems[0].description}</p>
                
                {/* Enhanced metrics with animations */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {showcaseItems[0].metrics.map((metric, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`${metric.color} rounded-lg p-3 transform transition-all duration-300 hover:scale-105`}
                    >
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <span className="text-xs text-gray-200">{metric.label}</span>
                      <div className="h-1 w-full bg-white/20 rounded-full mt-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${70 + idx * 10}%` }}
                          transition={{ delay: 0.5, duration: 1 }}
                          className="h-full bg-white/50 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Enhanced chart with animation and more believable data */}
                <div className="h-40 relative mb-4">
                  <div className="absolute top-0 left-0 right-0 h-full flex items-end">
                    {[35, 42, 38, 65, 78, 72, 85, 92, 88, 95, 89, 98].map((height, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ delay: idx * 0.05, duration: 1, type: "spring", stiffness: 100 }}
                        className={`w-1/12 ${idx % 2 === 0 ? 'bg-gradient-to-t from-purple-600 to-fuchsia-400' : 'bg-gradient-to-t from-[#BB86FC] to-[#03DAC5]'} rounded-t-md mx-0.5 relative group`}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {height}% ({['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]})
                        </div>
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 bg-white/30 h-1"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ delay: idx * 0.05 + 0.5, duration: 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Chart grid lines with more detail */}
                  <div className="absolute top-0 left-0 right-0 h-full flex flex-col justify-between pointer-events-none">
                    {[0, 1, 2, 3, 4].map((_, idx) => (
                      <div key={idx} className="w-full border-b border-gray-700/50 border-dashed flex justify-between">
                        <span className="text-xs text-gray-500">{(100 - idx * 20)}%</span>
                        <span className="text-xs text-gray-500">|</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Time labels with full year */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
                
                {/* Happy client indicator */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((_, idx) => (
                        <div key={idx} className={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-white`}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                      ))}
                    </div>
                    <span className="ml-3 text-sm text-gray-400">+18 happy clients</span>
                  </div>
                  <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                    ↑ 24% growth
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Platform Integration with interactive elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel-premium rounded-xl overflow-hidden relative border border-[#BB86FC]/20"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{showcaseItems[1].title}</h3>
                <p className="text-gray-300 mb-6">{showcaseItems[1].description}</p>
                
                {/* Platform grid with hover effects */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {showcaseItems[1].platforms.map((platform, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gradient-to-br from-[#BB86FC]/20 to-[#03DAC5]/10 rounded-lg p-3 hover:from-[#BB86FC]/30 hover:to-[#03DAC5]/20 transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-lg font-bold text-white">{platform.name}</div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-400">{platform.users}</span>
                        <span className="text-xs text-green-400">{platform.growth}</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full mt-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${parseInt(platform.growth) * 2}%` }}
                          transition={{ delay: 0.5, duration: 1 }}
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Integration success metrics */}
                <div className="bg-gradient-to-r from-[#BB86FC]/10 to-[#03DAC5]/10 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-white">Integration Success Rate</span>
                    <span className="text-lg font-bold text-[#03DAC5]">99.8%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[99.8%] bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]"></div>
                  </div>
                </div>
                
                {/* Happy client testimonial */}
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-[#BB86FC]">
                  <div className="flex items-start">
                    <div className="text-2xl text-[#BB86FC] mr-3">❝</div>
                    <div>
                      <p className="text-sm italic text-gray-300">The multi-platform integration saved us countless hours and boosted our engagement by 47% in just two weeks!</p>
                      <div className="flex items-center mt-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2 flex items-center justify-center text-xs font-bold">M</div>
                        <span className="text-xs text-white">Marketing Director, Fortune 500 Company</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced AI Generation with visual examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-panel-premium rounded-xl overflow-hidden relative border border-[#BB86FC]/20"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{showcaseItems[2].title}</h3>
                <p className="text-gray-300 mb-6">{showcaseItems[2].description}</p>
                
                {/* AI generation examples */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative rounded-lg overflow-hidden h-32 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">Before AI</span>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-32 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#BB86FC]/30 to-[#03DAC5]/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">After AI</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      +320% engagement
                    </div>
                  </div>
                </div>
                
                {/* AI features with animated indicators */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {showcaseItems[2].features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.2, type: "spring" }}
                        className="w-3 h-3 bg-gradient-to-r from-[#BB86FC] to-[#03DAC5] rounded-full mr-2"
                      />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Technical specs with visual indicators */}
                <div className="flex flex-wrap gap-3">
                  {showcaseItems[2].specs.map((spec, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gradient-to-r from-[#BB86FC]/10 to-[#03DAC5]/10 px-3 py-2 rounded-lg"
                    >
                      <span className="text-xs text-gray-400">{spec.label}</span>
                      <div className="text-sm font-medium text-white">{spec.value}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* AI success indicator */}
                <div className="mt-6 bg-gradient-to-r from-[#BB86FC]/10 to-[#03DAC5]/10 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white">AI Satisfaction Rating</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-400">Based on 4,328 client reviews</div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Security with animated elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-panel-premium rounded-xl overflow-hidden relative border border-[#BB86FC]/20"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{showcaseItems[3].title}</h3>
                <p className="text-gray-300 mb-6">{showcaseItems[3].description}</p>
                
                {/* Security features with animated icons and believable data */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {showcaseItems[3].securityFeatures.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center"
                    >
                      <motion.div 
                        initial={{ rotate: 0, scale: 1 }}
                        whileInView={{ rotate: 360, scale: [1, 1.2, 1] }}
                        transition={{ delay: idx * 0.1, duration: 1, type: "spring" }}
                        className="text-xl mr-2 text-[#BB86FC]"
                      >
                        {feature.icon}
                      </motion.div>
                      <span className="text-gray-200 text-sm">{feature.label}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Security certifications with premium styling */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {showcaseItems[3].certifications.map((cert, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(187, 134, 252, 0.5)" }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gradient-to-r from-[#BB86FC]/20 to-[#03DAC5]/10 px-3 py-1 rounded-full text-xs text-white border border-[#BB86FC]/30"
                    >
                      {cert}
                    </motion.div>
                  ))}
                </div>
                
                {/* Security metrics with animated progress and believable data */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Uptime Guarantee</span>
                      <span className="text-xs text-[#03DAC5]">99.99%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "99.99%" }}
                        transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Data Protection</span>
                      <span className="text-xs text-[#03DAC5]">100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Threat Detection</span>
                      <span className="text-xs text-[#03DAC5]">Real-time</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
