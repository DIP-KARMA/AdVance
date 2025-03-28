import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Globe({ position = [0, 0, 0], scale = 2 }) {
  const globeRef = useRef();
  const gridRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    globeRef.current.rotation.y = t * 0.1;
    gridRef.current.rotation.y = t * 0.05;
  });

  return (
    <group position={position}>
      {/* Grid sphere */}
      <mesh ref={gridRef} scale={scale * 1.01}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          color="#8A2BE2"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Main globe */}
      <mesh ref={globeRef} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          color="#14001f"
          emissive="#8A2BE2"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Atmosphere glow */}
      <Sphere args={[1.02 * scale, 32, 32]} position={position}>
        <meshPhongMaterial
          color="#FF00FF"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}
