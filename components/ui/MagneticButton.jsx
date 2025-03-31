import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ 
  children, 
  className = "", 
  onClick, 
  strength = 30, // Magnetic pull strength
  radius = 150,  // Activation radius in pixels
  variant = "primary", // primary, secondary, outline
  size = "md", // sm, md, lg
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  // Variant classes
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-violet-600 to-purple-700
      text-white
      shadow-lg shadow-purple-500/30
    `,
    secondary: `
      bg-gradient-to-r from-indigo-500 to-blue-600
      text-white
      shadow-lg shadow-blue-500/30
    `,
    outline: `
      bg-transparent
      border border-purple-500
      text-purple-500
    `
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;
      
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Only apply magnetic effect within the activation radius
      if (distance < radius) {
        // Calculate magnetic pull (stronger when closer)
        const pull = 1 - Math.min(distance / radius, 1);
        const moveX = distanceX * pull * (strength / 10);
        const moveY = distanceY * pull * (strength / 10);
        
        setPosition({ x: moveX, y: moveY });
        setIsHovered(true);
      } else if (isHovered) {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }
    };
    
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [radius, strength, isHovered]);

  return (
    <motion.button
      ref={buttonRef}
      className={`
        rounded-full font-medium
        transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    >
      <span className="relative z-10">{children}</span>
      
      {isHovered && variant !== "outline" && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-700 to-indigo-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.button>
  );
};

export default MagneticButton;
