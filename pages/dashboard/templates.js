import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';

// Template categories
const categories = [
  { id: 'all', name: 'All Templates' },
  { id: 'social', name: 'Social Media' },
  { id: 'video', name: 'Video Ads' },
  { id: 'display', name: 'Display Ads' },
  { id: 'ecommerce', name: 'E-Commerce' },
  { id: 'branding', name: 'Branding' }
];

// Template data
const templateData = [
  {
    id: 1,
    name: 'Product Showcase',
    category: 'ecommerce',
    description: 'Highlight your product features with this elegant template',
    premium: true,
    thumbnail: '/template-1.jpg',
    dimensions: '1080 x 1080px',
    formats: ['JPG', 'PNG', 'PSD'],
    popularity: 98
  },
  {
    id: 2,
    name: 'Brand Story',
    category: 'branding',
    description: 'Tell your brand story with this narrative-focused template',
    premium: true,
    thumbnail: '/template-2.jpg',
    dimensions: '1200 x 628px',
    formats: ['JPG', 'PNG', 'AI'],
    popularity: 95
  },
  {
    id: 3,
    name: 'Social Media Post',
    category: 'social',
    description: 'Engage your audience with this attention-grabbing social template',
    premium: false,
    thumbnail: '/template-3.jpg',
    dimensions: '1080 x 1080px',
    formats: ['JPG', 'PNG'],
    popularity: 92
  },
  {
    id: 4,
    name: 'Video Advertisement',
    category: 'video',
    description: 'Dynamic video template with animated elements',
    premium: true,
    thumbnail: '/template-4.jpg',
    dimensions: '1920 x 1080px',
    formats: ['MP4', 'MOV', 'AEP'],
    popularity: 96
  },
  {
    id: 5,
    name: 'Display Banner Set',
    category: 'display',
    description: 'Complete set of display banners in standard sizes',
    premium: false,
    thumbnail: '/template-5.jpg',
    dimensions: 'Multiple sizes',
    formats: ['JPG', 'PNG', 'HTML5'],
    popularity: 88
  },
  {
    id: 6,
    name: 'E-commerce Carousel',
    category: 'ecommerce',
    description: 'Showcase multiple products in an elegant carousel',
    premium: true,
    thumbnail: '/template-6.jpg',
    dimensions: '1080 x 1920px',
    formats: ['JPG', 'PNG', 'PSD'],
    popularity: 94
  },
  {
    id: 7,
    name: 'Brand Identity Package',
    category: 'branding',
    description: 'Complete brand identity package with logo variations',
    premium: true,
    thumbnail: '/template-7.jpg',
    dimensions: 'Various',
    formats: ['AI', 'EPS', 'PDF'],
    popularity: 97
  },
  {
    id: 8,
    name: 'Social Story Template',
    category: 'social',
    description: 'Vertical story template optimized for Instagram and Facebook',
    premium: false,
    thumbnail: '/template-8.jpg',
    dimensions: '1080 x 1920px',
    formats: ['JPG', 'PNG'],
    popularity: 91
  },
  {
    id: 9,
    name: 'Product Demo Video',
    category: 'video',
    description: 'Showcase your product features with this demo video template',
    premium: true,
    thumbnail: '/template-9.jpg',
    dimensions: '1920 x 1080px',
    formats: ['MP4', 'MOV', 'AEP'],
    popularity: 93
  }
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Filter templates based on category and search query
  const filteredTemplates = templateData.filter(template => {
    const matchesCategory = activeCategory === 'all' || template.category === activeCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <DashboardLayout>
      <Head>
        <title>Templates | AdVance</title>
      </Head>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#BB86FC]/20 to-[#03DAC5]/10 rounded-full filter blur-3xl -mr-32 -mt-32 opacity-60"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Premium Templates</h1>
                <p className="text-gray-300 mt-2">Browse our collection of professionally designed templates</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#BB86FC]/20 text-[#BB86FC]' : 'text-gray-400'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#BB86FC]/20 text-[#BB86FC]' : 'text-gray-400'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="mb-6 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm rounded-lg ${
                  activeCategory === category.id
                    ? 'bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30'
                    : 'bg-black/20 text-gray-400 border border-gray-800 hover:border-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Templates - Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: template.id * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(187, 134, 252, 0.2)" }}
                className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedTemplate(template)}
              >
                <div className="h-48 bg-gradient-to-r from-purple-900/40 to-blue-900/40 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-16 w-16 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8.5 7.5c0-1.1-.9-2-2-2H10v6h1.5v-2h1c1.1 0 2-.9 2-2zm-2 0h-1v-2h1v2z" />
                    </svg>
                  </div>
                  
                  {template.premium && (
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#BB86FC]/70 text-white">
                        Premium
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-2 right-2">
                    <div className="flex items-center bg-black/50 px-2 py-1 rounded-full">
                      <svg className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs text-white">{template.popularity}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white">{template.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{template.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {template.formats.map((format) => (
                      <span key={format} className="px-2 py-1 text-xs rounded-full bg-black/40 text-gray-300 border border-gray-700">
                        {format}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-400">{template.dimensions}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-xs rounded-lg bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30"
                    >
                      Use Template
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Templates - List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: template.id * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(187, 134, 252, 0.05)' }}
                className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-4 cursor-pointer"
                onClick={() => setSelectedTemplate(template)}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-40 h-24 bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-lg relative flex-shrink-0 mb-4 sm:mb-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="h-10 w-10 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8.5 7.5c0-1.1-.9-2-2-2H10v6h1.5v-2h1c1.1 0 2-.9 2-2zm-2 0h-1v-2h1v2z" />
                      </svg>
                    </div>
                    
                    {template.premium && (
                      <div className="absolute top-1 left-1">
                        <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-[#BB86FC]/70 text-white">
                          Premium
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="sm:ml-4 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-medium text-white">{template.name}</h3>
                      <div className="flex items-center mt-2 sm:mt-0">
                        <div className="flex items-center mr-4">
                          <svg className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs text-white">{template.popularity}%</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1 text-xs rounded-lg bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30"
                        >
                          Use Template
                        </motion.button>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mt-1">{template.description}</p>
                    
                    <div className="mt-3 flex flex-wrap items-center gap-x-4">
                      <div className="flex items-center text-xs text-gray-400">
                        <span className="mr-1">Formats:</span>
                        <div className="flex gap-1">
                          {template.formats.map((format) => (
                            <span key={format} className="px-1.5 py-0.5 rounded-sm bg-black/40 text-gray-300 border border-gray-700">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <span className="text-xs text-gray-400">Dimensions: {template.dimensions}</span>
                      
                      <span className="text-xs text-gray-400 capitalize">
                        Category: {template.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-300">No templates found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredTemplates.length > 0 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-2 py-2 rounded-md bg-black/30 text-gray-400 border border-gray-800">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="px-3 py-2 rounded-md bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30">1</button>
              <button className="px-3 py-2 rounded-md bg-black/30 text-gray-400 border border-gray-800">2</button>
              <button className="px-3 py-2 rounded-md bg-black/30 text-gray-400 border border-gray-800">3</button>
              
              <span className="px-2 py-2 text-gray-500">...</span>
              
              <button className="px-3 py-2 rounded-md bg-black/30 text-gray-400 border border-gray-800">8</button>
              
              <button className="px-2 py-2 rounded-md bg-black/30 text-gray-400 border border-gray-800">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
