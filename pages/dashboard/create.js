import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function CreateAd() {
  const [adInput, setAdInput] = useState({
    name: '',
    prompt: '',
    style: 'modern',
    resolution: '1080x1080', // Default resolution (square)
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [generatedAd, setGeneratedAd] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRewriting, setIsRewriting] = useState(false);

  // Available resolutions
  const resolutions = [
    { value: '1080x1080', label: 'Square (1080x1080) - Instagram, Facebook' },
    { value: '1200x628', label: 'Landscape (1200x628) - Facebook, Twitter' },
    { value: '1080x1920', label: 'Story (1080x1920) - Instagram, Facebook' },
    { value: '1280x720', label: 'Video (1280x720) - YouTube, TikTok' },
    { value: '800x1200', label: 'Portrait (800x1200) - Pinterest' },
    { value: 'custom', label: 'Custom Resolution' },
  ];

  // Handle file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage({
          file,
          preview: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdInput({ ...adInput, [name]: value });
  };

  // Handle style selection
  const handleStyleChange = (style) => {
    setAdInput({ ...adInput, style });
  };

  // Handle resolution selection
  const handleResolutionChange = (resolution) => {
    setAdInput({ ...adInput, resolution });
  };

  // Generate ad based on inputs
  const generateAd = () => {
    setIsGenerating(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      setGeneratedAd({
        id: Math.random().toString(36).substr(2, 9),
        name: adInput.name || 'Untitled Ad',
        preview: uploadedImage ? uploadedImage.preview : '/ad-preview.jpg',
        createdAt: new Date().toISOString(),
        prompt: adInput.prompt,
        style: adInput.style,
        resolution: adInput.resolution
      });
      setIsGenerating(false);
    }, 2000);
  };

  // Rewrite the prompt and regenerate
  const rewritePrompt = () => {
    if (!adInput.prompt) return;
    
    setIsRewriting(true);
    
    // Simulate AI rewriting the prompt
    setTimeout(() => {
      const enhancedPrompt = `Enhanced: ${adInput.prompt} with professional tone and compelling messaging for better conversion rates.`;
      setAdInput({
        ...adInput,
        prompt: enhancedPrompt
      });
      setIsRewriting(false);
      
      // Auto-generate after rewriting
      setIsGenerating(true);
      setTimeout(() => {
        setGeneratedAd({
          id: Math.random().toString(36).substr(2, 9),
          name: adInput.name || 'Untitled Ad',
          preview: uploadedImage ? uploadedImage.preview : '/ad-preview.jpg',
          createdAt: new Date().toISOString(),
          prompt: enhancedPrompt,
          style: adInput.style,
          resolution: adInput.resolution
        });
        setIsGenerating(false);
      }, 1500);
    }, 1500);
  };

  // Reset the form
  const resetForm = () => {
    setAdInput({
      name: '',
      prompt: '',
      style: 'modern',
      resolution: '1080x1080'
    });
    setUploadedImage(null);
    setGeneratedAd(null);
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Create Ad | AdVance</title>
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
            
            <div className="relative z-10">
              <h1 className="text-2xl font-bold text-white">Create New Ad</h1>
              <p className="text-gray-300 mt-2">Design a high-performance ad with our AI-powered tools</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
          >
            <h2 className="text-xl font-medium text-white mb-6">Ad Input</h2>
            
            <div className="space-y-6">
              {/* Ad Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Ad Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={adInput.name}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                  placeholder="Enter a name for your ad"
                />
              </div>
              
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Upload Image (Optional)
                </label>
                <div className={`border-2 border-dashed rounded-lg p-6 text-center ${uploadedImage ? 'border-[#03DAC5]/30' : 'border-gray-700'}`}>
                  {uploadedImage ? (
                    <div className="relative">
                      <img 
                        src={uploadedImage.preview} 
                        alt="Uploaded preview" 
                        className="mx-auto max-h-48 rounded-lg"
                      />
                      <button 
                        onClick={() => setUploadedImage(null)}
                        className="absolute top-2 right-2 bg-black/60 rounded-full p-1 text-white hover:bg-black"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div className="mt-4 flex text-sm text-gray-400 justify-center">
                        <label htmlFor="image-upload" className="relative cursor-pointer bg-black/30 rounded-md font-medium text-[#BB86FC] hover:text-[#03DAC5] px-3 py-2">
                          <span>Upload image</span>
                          <input id="image-upload" name="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageUpload} />
                        </label>
                        <p className="pl-1 pt-2">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
              
              {/* Prompt Input with Rewrite Button */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="prompt" className="block text-sm font-medium text-gray-300">
                    Prompt
                  </label>
                  {adInput.prompt && (
                    <button
                      onClick={rewritePrompt}
                      disabled={isRewriting}
                      className="text-xs px-2 py-1 rounded bg-[#03DAC5]/20 text-[#03DAC5] hover:bg-[#03DAC5]/30 flex items-center"
                    >
                      {isRewriting ? (
                        <>
                          <svg className="animate-spin -ml-0.5 mr-1.5 h-3 w-3 text-[#03DAC5]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Rewriting...
                        </>
                      ) : (
                        <>
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                          Rewrite & Enhance
                        </>
                      )}
                    </button>
                  )}
                </div>
                <textarea
                  id="prompt"
                  name="prompt"
                  rows="4"
                  value={adInput.prompt}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                  placeholder="Describe what you want in your ad. E.g., 'A modern fitness ad with energetic visuals and bold text highlighting a summer promotion'"
                ></textarea>
                <p className="mt-1 text-xs text-gray-500">Our AI will enhance your prompt for optimal results.</p>
              </div>
              
              {/* Resolution Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Resolution
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {resolutions.map((res) => (
                    <button
                      key={res.value}
                      type="button"
                      onClick={() => handleResolutionChange(res.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        adInput.resolution === res.value
                          ? 'bg-[#03DAC5]/20 text-[#03DAC5] border border-[#03DAC5]/30'
                          : 'bg-black/30 text-gray-400 border border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      {res.label}
                    </button>
                  ))}
                </div>
                {adInput.resolution === 'custom' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      name="customResolution"
                      placeholder="Width x Height (e.g., 1200x800)"
                      className="block w-full px-3 py-2 border border-gray-800 rounded-md bg-black/30 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#BB86FC] focus:border-[#BB86FC]"
                      onChange={(e) => setAdInput({ ...adInput, resolution: e.target.value })}
                    />
                  </div>
                )}
              </div>
              
              {/* Style Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['modern', 'minimalist', 'bold', 'elegant', 'retro', 'futuristic'].map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => handleStyleChange(style)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        adInput.style === style
                          ? 'bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30'
                          : 'bg-black/30 text-gray-400 border border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      {style.charAt(0).toUpperCase() + style.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Generate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateAd}
                disabled={isGenerating || isRewriting || (!uploadedImage && !adInput.prompt)}
                className={`w-full py-3 rounded-lg font-medium relative overflow-hidden ${
                  isGenerating || isRewriting || (!uploadedImage && !adInput.prompt)
                    ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                    : 'button-3d text-white'
                }`}
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Ad...
                  </div>
                ) : (
                  'Generate Ad'
                )}
              </motion.button>
            </div>
          </motion.div>
          
          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-premium border border-[#BB86FC]/30 rounded-xl p-6"
          >
            <h2 className="text-xl font-medium text-white mb-6">Ad Preview</h2>
            
            {generatedAd ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src={generatedAd.preview} 
                    alt="Generated ad preview" 
                    className="max-h-80 rounded-lg border border-[#03DAC5]/30"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Ad Name</h3>
                    <p className="text-white">{generatedAd.name}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Resolution</h3>
                    <p className="text-white">{generatedAd.resolution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Style</h3>
                    <p className="text-white capitalize">{generatedAd.style}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Prompt</h3>
                    <p className="text-white text-sm">{generatedAd.prompt}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Created</h3>
                    <p className="text-white">{new Date(generatedAd.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 rounded-lg font-medium bg-[#03DAC5]/20 text-[#03DAC5] border border-[#03DAC5]/30"
                  >
                    Download
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 rounded-lg font-medium bg-[#BB86FC]/20 text-[#BB86FC] border border-[#BB86FC]/30"
                  >
                    Save to Campaigns
                  </motion.button>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetForm}
                  className="w-full py-2 rounded-lg font-medium bg-black/30 text-white border border-gray-700"
                >
                  Create New Ad
                </motion.button>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="bg-gradient-to-r from-[#BB86FC]/20 to-[#03DAC5]/20 rounded-full p-6 mb-4">
                  <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">No Ad Generated Yet</h3>
                <p className="text-gray-400 mt-2 max-w-md">
                  Upload an image or enter a prompt to generate your ad. Our AI will create a professional ad based on your inputs.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
