import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: i * 0.1 }
  })
};

// Animation variants for each word
const wordVariants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

// Animation variants for each character
const charVariants = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const TextReveal = ({ 
  text, 
  className = "", 
  animateByWord = true, 
  delay = 0,
  once = true,
  gradient = false,
  as = "h2"
}) => {
  // Split text into words and characters
  const words = text.split(' ');
  
  // Determine which HTML tag to use
  const Tag = as;
  
  // Apply gradient text if requested
  const gradientClass = gradient ? 'bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent' : '';
  
  return (
    <Tag className={`${className} ${gradientClass}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        custom={delay}
        className="inline-block"
      >
        {animateByWord ? (
          // Animate by word
          words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block"
              style={{ marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))
        ) : (
          // Animate by character
          words.map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  variants={charVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <span style={{ marginRight: '0.25em' }}>&nbsp;</span>
            </React.Fragment>
          ))
        )}
      </motion.span>
    </Tag>
  );
};

export default TextReveal;
