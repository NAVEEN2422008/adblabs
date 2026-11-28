import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import OrzoQuadruped from './OrzoQuadruped';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import WebGLErrorBoundary from '../global/WebGLErrorBoundary';

export default function OrzoViewer() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className="aspect-square w-full rounded-3xl bg-[#101C17] border border-white/10 flex items-center justify-center text-[#A3ADA5] text-sm">
        3D preview disabled (reduced motion)
      </div>
    );
  }
  return (
    <div className="aspect-square w-full rounded-3xl bg-[#050B0A] border border-white/10 overflow-hidden">
      <WebGLErrorBoundary>
      <Canvas camera={{ position: [3, 1.5, 3], fov: 40 }} dpr={mobile ? [1, 1.25] : [1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} color="#A3FF35" />
        <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#38bdf8" />
        <Suspense fallback={null}>
          <OrzoQuadruped gait={!mobile} />
        </Suspense>
        <OrbitControls enablePan={false} minDistance={2.5} maxDistance={6} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
