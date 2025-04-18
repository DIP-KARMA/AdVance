import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    }
  })
};

const ImageSlideshow = ({ images, interval = 5000, height = 500, captions = [], objectFit = 'cover' }) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slides when not hovered
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex([nextIndex, 1]);
    }, interval);
    
    return () => clearTimeout(timer);
  }, [currentIndex, images.length, interval, isHovered]);

  // Manual navigation
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex([nextIndex, 1]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex([prevIndex, -1]);
  };

  return (
    <div 
      className="relative overflow-hidden rounded-xl glass-panel group"
      style={{ 
        height,
        background: 'rgba(0, 0, 0, 0.05)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(138, 43, 226, 0.15)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Slideshow */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            {/* Clean presentation without dark overlays */}
            <Image
              src={`/images/${images[currentIndex]}`}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className={`object-${objectFit} z-0`}
              priority={currentIndex === 0}
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ 
                filter: 'none',
                transition: 'transform 0.5s ease-in-out'
              }}
            />
            
            {/* Subtle highlight effect - not darkening the image */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Caption */}
            {captions[currentIndex] && (
              <div className="absolute bottom-8 left-0 right-0 text-center px-4 z-40">
                <div className="inline-block bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                  <p className="text-white font-medium">{captions[currentIndex]}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-6 bg-white' 
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
