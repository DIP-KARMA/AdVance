import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBlob = ({ 
  position = [0, 0, 0], 
  scale = 3, 
  color = "#5000ca", 
  speed = 1.5, 
  distort = 0.6,
  opacity = 0.8
}) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    mesh.current.rotation.y = Math.sin(time * 0.2) * 0.3;
    // Subtle position animation
    mesh.current.position.y = position[1] + Math.sin(time * 0.4) * 0.3;
  });
  
  return (
    <Sphere ref={mesh} args={[1, 100, 100]} position={position} scale={scale}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={distort} 
        speed={speed} 
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={opacity}
      />
    </Sphere>
  );
};

function Scene() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 15);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF00FF" />
      
      {/* Main center blob */}
      <AnimatedBlob 
        position={[0, 0, 0]} 
        scale={[5, 5, 5]} 
        color="#5000ca" 
        distort={0.6} 
        speed={1.2}
        opacity={0.7}
      />
      
      {/* Secondary blobs */}
      <AnimatedBlob 
        position={[-8, 3, -5]} 
        scale={[2.5, 2.5, 2.5]} 
        color="#8A2BE2" 
        distort={0.4} 
        speed={1.5}
        opacity={0.6}
      />
      <AnimatedBlob 
        position={[8, -4, -10]} 
        scale={[3, 3, 3]} 
        color="#9370DB" 
        distort={0.5} 
        speed={0.8}
        opacity={0.5}
      />
      <AnimatedBlob 
        position={[4, 6, -8]} 
        scale={[1.5, 1.5, 1.5]} 
        color="#FF00FF" 
        distort={0.7} 
        speed={1.0}
        opacity={0.4}
      />
      <AnimatedBlob 
        position={[-5, -6, -12]} 
        scale={[2, 2, 2]} 
        color="#800080" 
        distort={0.3} 
        speed={1.3}
        opacity={0.3}
      />
      
      {/* Dark gradient background */}
      <mesh position={[0, 0, -20]} rotation={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial
          color="#14001f"
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

export default function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
