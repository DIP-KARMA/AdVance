import { useState } from 'react';
import { motion } from 'framer-motion';
import Background3D from '../components/Background3D';
import Image from 'next/image';
import ImageSlideshow from '../components/ImageSlideshow';
import ShowcaseSection from '../components/ShowcaseSection';

// Image slideshow data - reduce the number of images to improve performance
const slideshowImages = [
  'GnDbp5sWMAAtctx.jpg',
  'GnDbp5sWcAAblkZ.jpg',
  'GnDbp6MXIAE9VA7.jpg',
  'Gm_lG8GWsAEadAN.jpg'
];

// Slideshow captions
const slideshowCaptions = [
  "Transform your brand with AdVance AI",
  "Create eye-catching ads in seconds",
  "Boost engagement with professional designs",
  "Tailored to your brand's unique style"
];

// Sample reviews data
const reviews = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content: "AdVance has revolutionized our marketing campaigns. The quality and speed are unmatched!",
    avatar: "/avatars/avatar1.png",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Creative Lead",
    content: "Incredible tool that saves hours of work. The AI understands exactly what we need every time.",
    avatar: "/avatars/avatar2.png",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Brand Manager",
    content: "The best investment we've made for our advertising needs. Simply outstanding results!",
    avatar: "/avatars/avatar3.png",
    rating: 4
  }
];

// Features data
const features = [
  {
    title: "AI-Powered Creation",
    description: "Generate stunning ads in seconds with our advanced AI technology",
    icon: "✨"
  },
  {
    title: "Smart Templates",
    description: "Access a library of premium templates designed for conversion",
    icon: "🎯"
  },
  {
    title: "Brand Integration",
    description: "Seamlessly incorporate your brand identity into every design",
    icon: "🎨"
  },
  {
    title: "Multi-Format Export",
    description: "Download your ads in any format you need - social media, print, web",
    icon: "📱"
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance and optimize your ad campaigns",
    icon: "📊"
  },
  {
    title: "Collaboration Tools",
    description: "Work together with your team in real-time",
    icon: "👥"
  }
];

// Benefits data
const benefits = [
  {
    title: "Track Ad Performance",
    description: "See which ads perform best across all your campaigns",
    icon: "📈"
  },
  {
    title: "One Platform Solution",
    description: "Create, manage, and analyze all your ads in one place",
    icon: "🔄"
  },
  {
    title: "Quick Setup",
    description: "Get started in just 1 day with our intuitive interface",
    icon: "⚡"
  }
];

export default function Home() {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Background3D />
      
      {/* Navigation */}
      <nav className="fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="glass-panel-premium rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo-minimal.svg" alt="AdVance Logo" width={48} height={48} className="rounded-lg" />
              <span className="premium-brand-text text-2xl font-bold tracking-tight">AdVance</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="nav-link text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="nav-link text-gray-300 hover:text-white transition-colors">Benefits</a>
              <a href="#pricing" className="nav-link text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#reviews" className="nav-link text-gray-300 hover:text-white transition-colors">Reviews</a>
              <a href="#login" className="nav-link text-white font-medium">Login</a>
              <a href="#demo" className="button-3d px-6 py-2 rounded-xl text-white">Experience Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Slideshow - Moved to a more prominent position spanning 7 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative group lg:col-span-7 order-2 lg:order-1"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass-panel-premium rounded-xl p-6 platform-shadow">
                <div className="absolute -top-10 -right-10 bg-[#FF00FF]/10 backdrop-blur-sm text-white text-sm py-2 px-4 rounded-full">
                  <span className="text-[#FF00FF] font-semibold">New:</span> AI integration v2.0
                </div>
                
                <div className="mb-6 relative">
                  {/* Professional highlight effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#8A2BE2]/10 to-[#FF00FF]/10 rounded-xl blur-xl opacity-30 z-0"></div>
                  
                  {/* Clean, professional slideshow container */}
                  <div className="relative z-20 rounded-xl overflow-hidden" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), 0 0 15px rgba(138, 43, 226, 0.1)' }}>
                    <ImageSlideshow 
                      images={slideshowImages} 
                      captions={slideshowCaptions} 
                      interval={4000} 
                      height={350} 
                      objectFit="contain" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Content - Reduced to 5 columns with smaller heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 lg:col-span-5 order-1 lg:order-2"
            >
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
              >
                Ad<span className="holographic-text">Vance</span> your marketing
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300"
              >
                Transform your vision into stunning advertisements with our cutting-edge AI technology
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-[#8A2BE2]">✓</div>
                    <p className="text-gray-300 text-sm">{benefit.title}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="button-3d px-6 py-3 rounded-xl text-white font-semibold"
                >
                  CREATE YOUR AD NOW
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-panel-premium px-6 py-3 rounded-xl text-white font-semibold"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2"
              >
                <div className="flex -space-x-2">
                  {reviews.map((review, index) => (
                    <div key={index} className="w-8 h-8 premium-gradient rounded-full mx-auto flex items-center justify-center text-white text-xs font-semibold border-2 border-[#14001f]">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-gray-300 text-sm">5.0 from 200+ reviews</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Create Ad Form - Enhanced with sophisticated design */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-[#14001f]/30">
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel-premium rounded-xl p-8 platform-shadow relative overflow-hidden border border-[#BB86FC]/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8A2BE2]/20 to-[#FF00FF]/20 rounded-full filter blur-2xl opacity-70 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#8A2BE2]/20 to-[#03DAC5]/20 rounded-full filter blur-2xl opacity-70 -ml-20 -mb-20"></div>
            
            {/* Sophisticated header with eye-catching phrase */}
            <div className="relative z-10 mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 text-center">Transform Vision into Impact</h2>
              <p className="text-gray-300 text-center max-w-xl mx-auto">Use our AI to create stunning ads that get real results. Simple, fast, and powerful.</p>
            </div>
            
            {/* Image upload section with enhanced styling */}
            <div className="space-y-4">
              <div className="relative">
                <div 
                  className="glass-panel-premium rounded-xl p-8 text-center cursor-pointer hover-glow border border-[#BB86FC]/30 transition-all duration-300"
                  onClick={() => document.getElementById('image-upload').click()}
                >
                  {preview ? (
                    <Image
                      src={preview}
                      alt="Preview"
                      width={400}
                      height={300}
                      className="rounded-lg mx-auto"
                    />
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 premium-gradient rounded-full mx-auto flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-400">Import visual assets or utilize drag-and-drop functionality</p>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                
                {/* Image format specifications with increased max size */}
                <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
                  <span>Supported: PNG, JPG, WebP</span>
                  <span>Max size: 500MB</span>
                </div>
              </div>
            </div>
            
            {/* Prompt input with enhanced styling */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-300">Creative Direction Parameters</label>
                <span className="text-xs text-[#BB86FC]">AI-Enhanced</span>
              </div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-32 glass-panel-premium rounded-xl p-4 text-white resize-none focus:ring-2 focus:ring-purple-500 outline-none border border-[#BB86FC]/30"
                placeholder="Articulate your creative vision with specificity regarding tone, aesthetic, and thematic elements..."
              />
              
              {/* Prompt suggestions */}
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="text-xs bg-[#BB86FC]/20 text-[#BB86FC] px-2 py-1 rounded-full cursor-pointer hover:bg-[#BB86FC]/30 transition-colors">Minimalist</div>
                <div className="text-xs bg-[#BB86FC]/20 text-[#BB86FC] px-2 py-1 rounded-full cursor-pointer hover:bg-[#BB86FC]/30 transition-colors">Corporate</div>
                <div className="text-xs bg-[#BB86FC]/20 text-[#BB86FC] px-2 py-1 rounded-full cursor-pointer hover:bg-[#BB86FC]/30 transition-colors">Vibrant</div>
                <div className="text-xs bg-[#BB86FC]/20 text-[#BB86FC] px-2 py-1 rounded-full cursor-pointer hover:bg-[#BB86FC]/30 transition-colors">Luxury</div>
              </div>
            </div>
            
            {/* Advanced options */}
            <div className="glass-panel-premium rounded-xl p-4 border border-[#BB86FC]/30">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-sm font-semibold text-white">Advanced Configuration</h4>
                <div className="text-xs text-[#03DAC5] bg-[#03DAC5]/10 px-3 py-1 rounded-full">Enterprise</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Aspect Ratio</label>
                  <select className="w-full glass-panel-premium rounded-lg p-2 text-sm text-white border border-[#BB86FC]/30 outline-none">
                    <option>16:9 - Standard</option>
                    <option>1:1 - Square</option>
                    <option>4:5 - Portrait</option>
                    <option>9:16 - Story</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Style Intensity</label>
                  <select className="w-full glass-panel-premium rounded-lg p-2 text-sm text-white border border-[#BB86FC]/30 outline-none">
                    <option>Balanced</option>
                    <option>Subtle</option>
                    <option>Pronounced</option>
                    <option>Dramatic</option>
                  </select>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="button-3d w-full py-4 rounded-xl text-white font-semibold"
              type="submit"
            >
              UNLEASH YOUR CREATIVE MASTERPIECE
            </motion.button>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Enterprise-grade security & IP protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section - Using the new professional component */}
      <ShowcaseSection />

      {/* Features Section - More sophisticated and detailed */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel-premium rounded-2xl p-12 platform-shadow border border-[#BB86FC]/20">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white">Enterprise-Grade Capabilities</h2>
                <p className="text-gray-400 mt-2 max-w-xl">Sophisticated AI-driven solutions engineered for optimal marketing efficacy</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="text-xs bg-[#BB86FC]/20 text-[#BB86FC] px-3 py-1 rounded-full mr-2">ISO 27001</div>
                <div className="text-xs bg-[#03DAC5]/20 text-[#03DAC5] px-3 py-1 rounded-full">GDPR Compliant</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="feature-card glass-panel-premium rounded-xl p-6 border border-[#BB86FC]/20"
                >
                  <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  
                  {/* Unique technical specifications for each feature */}
                  {index === 0 && (
                    <div className="pt-4 border-t border-gray-800 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-[#BB86FC]">Performance Metrics</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#BB86FC]">99.8%</div>
                          <div className="text-[10px] text-gray-500">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#03DAC5]">0.2s</div>
                          <div className="text-[10px] text-gray-500">Response</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="pt-4 border-t border-gray-800 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-[#BB86FC]">Template Library</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <div className="bg-black/30 rounded px-2 py-1 text-xs text-white">Social</div>
                        <div className="bg-black/30 rounded px-2 py-1 text-xs text-white">Print</div>
                        <div className="bg-black/30 rounded px-2 py-1 text-xs text-white">Video</div>
                        <div className="bg-black/30 rounded px-2 py-1 text-xs text-white">+25 more</div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="pt-4 border-t border-gray-800 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-[#BB86FC]">Brand Compatibility</span>
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-[95%] bg-gradient-to-r from-[#BB86FC] to-[#03DAC5]"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-gray-500">Brand Match</span>
                        <span className="text-[10px] text-gray-500">95%</span>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="pt-4 border-t border-gray-800 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-[#BB86FC]">Export Options</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        <div className="bg-black/30 rounded p-1 flex flex-col items-center">
                          <span className="text-[10px] text-white">JPG</span>
                          <span className="text-[8px] text-gray-500">✓</span>
                        </div>
                        <div className="bg-black/30 rounded p-1 flex flex-col items-center">
                          <span className="text-[10px] text-white">PNG</span>
                          <span className="text-[8px] text-gray-500">✓</span>
                        </div>
                        <div className="bg-black/30 rounded p-1 flex flex-col items-center">
                          <span className="text-[10px] text-white">SVG</span>
                          <span className="text-[8px] text-gray-500">✓</span>
                        </div>
                        <div className="bg-black/30 rounded p-1 flex flex-col items-center">
                          <span className="text-[10px] text-white">MP4</span>
                          <span className="text-[8px] text-gray-500">✓</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 4 && (
                    <div className="pt-4 border-t border-gray-800 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-[#BB86FC]">Client Success</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-white ml-2">4.9/5.0</span>
                      </div>
                    </div>
                  )}
                  
                  {index === 5 && (
                    <div className="pt-4 border-t border-gray-800 mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-[#BB86FC]">API Throughput</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-white">10K+</div>
                        <div className="text-xs text-white">req/min</div>
                      </div>
                      <div className="h-1 w-full bg-gray-800 rounded-full mt-1">
                        <div className="h-full w-[80%] bg-[#03DAC5]"></div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Replace implementation timeline with premium client showcase */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Premium Client Portfolio</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {['Fortune 500', 'Global Media', 'Tech Giants', 'Luxury Brands', 'Entertainment', 'Finance Leaders'].map((client, index) => (
                  <div key={index} className="glass-panel-premium rounded-lg p-4 text-center border border-[#BB86FC]/20">
                    <div className="w-12 h-12 premium-gradient rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{client.charAt(0)}</span>
                    </div>
                    <div className="text-sm text-white">{client}</div>
                    <div className="text-xs text-gray-400 mt-1">Enterprise</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - More sophisticated */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel-premium rounded-2xl p-12 platform-shadow border border-[#BB86FC]/20">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white">Elite Membership Tiers</h2>
                <p className="text-gray-400 mt-2">Tailored solutions for visionaries and industry leaders</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-400 mr-3">Monthly</span>
                  <div className="relative w-12 h-6 bg-gray-800 rounded-full">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-[#BB86FC] rounded-full"></div>
                  </div>
                  <span className="text-sm text-white ml-3">Annual</span>
                </div>
                <div className="text-xs bg-[#03DAC5]/20 text-[#03DAC5] px-3 py-1 rounded-full">Save 20%</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Starter",
                  price: "$29",
                  period: "/month",
                  features: [
                    "5 ads per month",
                    "Basic templates",
                    "Email support",
                    "Export in 2 formats"
                  ],
                  cta: "Start Free Trial",
                  popular: false
                },
                {
                  title: "Pro",
                  price: "$79",
                  period: "/month",
                  features: [
                    "50 ads per month",
                    "Premium templates",
                    "Priority support",
                    "Brand kit integration",
                    "Export in all formats",
                    "Analytics dashboard"
                  ],
                  cta: "Start Free Trial",
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  period: "",
                  features: [
                    "Unlimited ads",
                    "Custom templates",
                    "24/7 support",
                    "API access",
                    "Dedicated account manager",
                    "Advanced analytics"
                  ],
                  cta: "Contact Sales",
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-panel-premium rounded-xl p-8 hover-glow relative ${plan.popular ? 'border border-[#FF00FF]' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF00FF] text-white text-xs py-1 px-4 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                  <div className="flex items-baseline mb-6">
                    <div className="text-3xl font-bold text-white">{plan.price}</div>
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-[#8A2BE2] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular ? 'button-3d' : 'glass-panel-premium'}`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel-premium rounded-2xl p-12 platform-shadow">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Users Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel-premium rounded-xl p-6 hover-glow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] flex items-center justify-center text-white font-semibold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{review.name}</div>
                      <div className="text-sm text-gray-400">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-500' : 'text-gray-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300">{review.content}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel-premium px-8 py-4 rounded-xl text-white font-semibold"
              >
                Read All Reviews
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Made to POP a lot more */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(187, 134, 252, 0.4), 0 0 60px rgba(3, 218, 197, 0.2)"
            }}
            transition={{ 
              duration: 0.5,
              boxShadow: { duration: 0.8 }
            }}
            className="glass-panel-premium rounded-2xl p-12 platform-shadow relative overflow-hidden border-2 border-[#BB86FC]/30"
          >
            <motion.div 
              initial={{ opacity: 0.2, scale: 1 }}
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] rounded-full filter blur-3xl -mr-32 -mt-32"
            />
            
            <motion.div 
              initial={{ opacity: 0.2, scale: 1 }}
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0, 5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#03DAC5] to-[#BB86FC] rounded-full filter blur-3xl -ml-32 -mb-32"
            />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BB86FC] to-[#03DAC5] mb-6">
                  Ready to Transform Your Ad Creation?
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                className="text-xl text-gray-300 mb-8"
              >
                Join thousands of marketers who are saving time and creating better ads with AdVance.
              </motion.p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(187, 134, 252, 0.7)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="button-3d px-8 py-4 rounded-xl text-white font-semibold hover-glow relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#BB86FC] to-[#03DAC5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(3, 218, 197, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="glass-panel-premium px-8 py-4 rounded-xl text-white font-semibold border border-[#03DAC5]/30"
                >
                  Schedule Demo
                </motion.button>
              </div>
              
              {/* Added floating badges */}
              <div className="flex justify-center mt-8 gap-4">
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-[#BB86FC]/30 flex items-center"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-xs text-white">14-day free trial</span>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-[#03DAC5]/30 flex items-center"
                >
                  <span className="w-2 h-2 bg-[#03DAC5] rounded-full mr-2"></span>
                  <span className="text-xs text-white">No credit card required</span>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-[#BB86FC]/30 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span className="text-xs text-white">Cancel anytime</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/logo-minimal.svg" alt="AdVance Logo" width={40} height={40} className="rounded-lg" />
                <span className="premium-brand-text text-2xl font-bold tracking-tight">AdVance</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transform your advertising with the power of AI.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AdVance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
