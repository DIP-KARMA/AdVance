import React from 'react';
import { motion } from 'framer-motion';

const PremiumButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = "primary", // primary, secondary, outline
  size = "md", // sm, md, lg
  fullWidth = false,
  icon = null,
  iconPosition = "left", // left, right
  disabled = false
}) => {
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
      hover:from-violet-700 hover:to-purple-800
      text-white
      shadow-lg shadow-purple-500/30
      hover:shadow-purple-500/50
    `,
    secondary: `
      bg-gradient-to-r from-indigo-500 to-blue-600
      hover:from-indigo-600 hover:to-blue-700
      text-white
      shadow-lg shadow-blue-500/30
      hover:shadow-blue-500/50
    `,
    outline: `
      bg-transparent
      border border-purple-500
      text-purple-500
      hover:bg-purple-500/10
    `
  };
  
  // Width classes
  const widthClass = fullWidth ? "w-full" : "";
  
  // Disabled classes
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`
        relative overflow-hidden
        rounded-full font-medium
        transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${widthClass}
        ${disabledClasses}
        ${className}
      `}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center justify-center">
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </span>
      
      {!disabled && variant !== "outline" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-800"
          initial={{ x: "100%" }}
          whileHover={{ x: 0 }}
          transition={{ type: "tween", ease: "easeOut" }}
        />
      )}
    </motion.button>
  );
};

export default PremiumButton;
