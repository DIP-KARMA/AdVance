import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import Globe from './Globe';

function FloatingOrb({ position, scale, speed = 1, distort = 0.3 }) {
  const orbRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    orbRef.current.position.y = position[1] + Math.sin(time * speed) * 0.3;
    orbRef.current.rotation.z = time * 0.2;
  });

  return (
    <Sphere ref={orbRef} position={position} scale={scale} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#8A2BE2"
        attach="material"
        distort={distort}
        speed={0.5}
        roughness={0}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
}

function Scene() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 10);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF00FF" />
      
      <Globe position={[-8, 0, -15]} scale={3} />
      
      <FloatingOrb position={[-4, 2, -5]} scale={1.5} speed={0.8} />
      <FloatingOrb position={[4, -2, -3]} scale={1} speed={1.2} />
      <FloatingOrb position={[0, 3, -4]} scale={0.8} speed={1} />
      <FloatingOrb position={[-3, -3, -6]} scale={1.2} speed={0.9} />
      
      <mesh position={[0, 0, -10]} rotation={[0, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshPhongMaterial
          color="#14001f"
          opacity={0.8}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
