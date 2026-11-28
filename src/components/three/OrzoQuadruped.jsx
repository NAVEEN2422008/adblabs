import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BODY = new THREE.MeshStandardMaterial({ color: '#1a2233', metalness: 0.7, roughness: 0.35 });
const JOINT = new THREE.MeshStandardMaterial({ color: '#A3FF35', emissive: '#A3FF35', emissiveIntensity: 0.25, metalness: 0.5, roughness: 0.3 });
const DARK = new THREE.MeshStandardMaterial({ color: '#0a0f18', metalness: 0.6, roughness: 0.5 });

const LEGS = [
  { x: 0.7, z: 0.45, phase: 0 },
  { x: 0.7, z: -0.45, phase: Math.PI },
  { x: -0.7, z: 0.45, phase: Math.PI },
  { x: -0.7, z: -0.45, phase: 0 },
];

export default function OrzoQuadruped({ gait = true }) {
  const root = useRef();
  const legRefs = useRef([]);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta;
    if (root.current) root.current.rotation.y += delta * 0.15;
    const t = timeRef.current;
    legRefs.current.forEach((leg, i) => {
      if (!leg) return;
      const phase = LEGS[i].phase;
      leg.rotation.x = gait ? Math.sin(t * 3 + phase) * 0.35 : 0;
    });
  });

  return (
    <group ref={root}>
      {/* Body */}
      <mesh material={BODY} castShadow>
        <boxGeometry args={[1.6, 0.45, 0.7]} />
      </mesh>
      {/* Head */}
      <mesh position={[0.95, 0.25, 0]} material={BODY} castShadow>
        <boxGeometry args={[0.5, 0.35, 0.4]} />
      </mesh>
      {/* Sensor eye */}
      <mesh position={[1.2, 0.3, 0]} material={JOINT}>
        <sphereGeometry args={[0.08, 12, 12]} />
      </mesh>
      {/* Tail */}
      <mesh position={[-0.9, 0.15, 0]} rotation={[0, 0, -0.4]} material={DARK}>
        <cylinderGeometry args={[0.04, 0.02, 0.5, 8]} />
      </mesh>
      {/* Legs */}
      {LEGS.map((l, i) => (
        <group key={i} position={[l.x, -0.2, l.z]} ref={(el) => (legRefs.current[i] = el)}>
          <mesh position={[0, -0.25, 0]} material={JOINT} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.5, 8]} />
          </mesh>
          <mesh position={[0, -0.55, 0.08]} material={DARK} castShadow>
            <cylinderGeometry args={[0.05, 0.04, 0.25, 8]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
