import React, { useEffect, useRef } from 'react';

const FluidCursor = ({ color = '#8A2BE2' }) => {
  const canvasRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef([]);
  const targetRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isActive = false;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize points for the fluid effect
    const initPoints = () => {
      pointsRef.current = [];
      const numberOfPoints = 15;
      
      for (let i = 0; i < numberOfPoints; i++) {
        pointsRef.current.push({
          x: cursorRef.current.x,
          y: cursorRef.current.y,
          dx: 0,
          dy: 0,
          vx: 0,
          vy: 0,
          size: 2 + (numberOfPoints - i) * 0.4,
          color: color,
          alpha: 1 - (i / numberOfPoints) * 0.6
        });
      }
    };
    
    // Handle mouse movement
    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      
      if (!isActive) {
        isActive = true;
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;
        initPoints();
        animateFluidCursor();
      }
    };
    
    // Handle mouse leave
    const handleMouseLeave = () => {
      isActive = false;
      cancelAnimationFrame(animationFrameId);
    };
    
    // Animation loop
    const animateFluidCursor = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update cursor position with smooth lerp
      cursorRef.current.x += (targetRef.current.x - cursorRef.current.x) * 0.1;
      cursorRef.current.y += (targetRef.current.y - cursorRef.current.y) * 0.1;
      
      // Update the first point to cursor position
      if (pointsRef.current.length > 0) {
        pointsRef.current[0].x = cursorRef.current.x;
        pointsRef.current[0].y = cursorRef.current.y;
      }
      
      // Update all points
      for (let i = 1; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        const prevPoint = pointsRef.current[i - 1];
        
        // Calculate direction and distance
        point.dx = prevPoint.x - point.x;
        point.dy = prevPoint.y - point.y;
        const distance = Math.sqrt(point.dx * point.dx + point.dy * point.dy);
        
        // Apply velocity based on distance
        const strength = Math.min(distance * 0.03, 1);
        point.vx += point.dx * strength;
        point.vy += point.dy * strength;
        
        // Apply damping
        point.vx *= 0.7;
        point.vy *= 0.7;
        
        // Update position
        point.x += point.vx;
        point.y += point.vy;
      }
      
      // Draw connecting lines
      ctx.beginPath();
      ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
      
      for (let i = 1; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        const prevPoint = pointsRef.current[i - 1];
        
        // Draw curved line
        const midX = (prevPoint.x + point.x) / 2;
        const midY = (prevPoint.y + point.y) / 2;
        ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, midX, midY);
      }
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw points
      for (let i = 0; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 43, 226, ${point.alpha})`;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animateFluidCursor);
    };
    
    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'lighten' }}
    />
  );
};

export default FluidCursor;
