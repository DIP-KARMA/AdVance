import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = "", 
  hoverEffect = true,
  glowColor = "purple-500",
  borderColor = "white/20"
}) => {
  const baseClasses = `
    relative p-6 rounded-xl
    bg-white/10 backdrop-blur-lg
    border border-${borderColor}
    shadow-xl shadow-${glowColor}/10
    ${className}
  `;

  return hoverEffect ? (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: `0 20px 25px -5px rgb(139 92 246 / 0.2)` }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={baseClasses}
    >
      {children}
    </motion.div>
  ) : (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default GlassCard;
