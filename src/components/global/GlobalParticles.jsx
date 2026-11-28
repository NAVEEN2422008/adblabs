import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import WebGLErrorBoundary from './WebGLErrorBoundary';

function Points() {
  const ref = useRef();
  const timeRef = useRef(0);
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    timeRef.current += delta;
    ref.current.rotation.y = timeRef.current * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#A3FF35" transparent opacity={0.35} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function GlobalParticles() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  if (mobile || reduced) return null;
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-60">
      <WebGLErrorBoundary>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]} frameloop={hidden ? 'never' : 'always'} gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}>
          <Points />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}