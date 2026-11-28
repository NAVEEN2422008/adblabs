import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const METAL = new THREE.MeshStandardMaterial({ color: '#1b2433', metalness: 0.85, roughness: 0.32 });
const DARK = new THREE.MeshStandardMaterial({ color: '#0a0f18', metalness: 0.6, roughness: 0.5 });
const SCREEN = new THREE.MeshStandardMaterial({ color: '#050B0A', emissive: '#A3FF35', emissiveIntensity: 0.6, metalness: 0.2, roughness: 0.4 });
const ACCENT = new THREE.MeshStandardMaterial({ color: '#A3FF35', emissive: '#A3FF35', emissiveIntensity: 0.4, metalness: 0.4, roughness: 0.3 });

// Reuse materials (module scope) to avoid recreation.

export default function PS1ProceduralModel({ progressRef, autoRotate = true }) {
  const root = useRef();
  const chassis = useRef();
  const top = useRef();
  const screen = useRef();
  const leftPanel = useRef();
  const rightPanel = useRef();

  useFrame((state, delta) => {
    if (!root.current) return;
    const p = progressRef ? progressRef.current : 0;
    if (autoRotate) root.current.rotation.y += delta * 0.12;
    // exploded spread driven by scroll progress
    const spread = p * 0.6;
    if (top.current) top.current.position.y = 0.7 + spread * 0.5;
    if (leftPanel.current) leftPanel.current.position.x = -1.35 - spread * 0.4;
    if (rightPanel.current) rightPanel.current.position.x = 1.35 + spread * 0.4;
    if (screen.current) screen.current.position.z = 0.72 + spread * 0.2;
  });

  return (
    <group ref={root} position={[0, 0, 0]}>
      {/* Main chassis */}
      <mesh ref={chassis} material={METAL} castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.2, 1.4]} />
      </mesh>
      {/* Top cap */}
      <mesh ref={top} position={[0, 0.7, 0]} material={DARK} castShadow>
        <boxGeometry args={[2.5, 0.18, 1.3]} />
      </mesh>
      {/* Left side panel (explodes) */}
      <mesh ref={leftPanel} position={[-1.35, 0, 0]} material={METAL} castShadow>
        <boxGeometry args={[0.12, 1.0, 1.3]} />
      </mesh>
      {/* Right side panel */}
      <mesh ref={rightPanel} position={[1.35, 0, 0]} material={METAL} castShadow>
        <boxGeometry args={[0.12, 1.0, 1.3]} />
      </mesh>
      {/* Front screen */}
      <mesh ref={screen} position={[0, 0.1, 0.72]} material={SCREEN}>
        <planeGeometry args={[1.6, 0.7]} />
      </mesh>
      {/* Ports row */}
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <mesh key={i} position={[x, -0.25, 0.72]} material={ACCENT}>
          <cylinderGeometry args={[0.05, 0.05, 0.06, 12]} />
        </mesh>
      ))}
      {/* Handle */}
      <mesh position={[0, 0.85, 0]} material={DARK} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.06, 8, 24, Math.PI]} />
      </mesh>
      {/* Base feet */}
      {[
        [-1.1, -0.65, 0.55],
        [1.1, -0.65, 0.55],
        [-1.1, -0.65, -0.55],
        [1.1, -0.65, -0.55],
      ].map((pos, i) => (
        <mesh key={i} position={pos} material={DARK}>
          <cylinderGeometry args={[0.06, 0.08, 0.1, 12]} />
        </mesh>
      ))}
    </group>
  );
}
