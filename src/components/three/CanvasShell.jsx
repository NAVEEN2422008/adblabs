import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function CanvasShell({ children, camera, fov = 45, className = 'w-full h-full', fallback = null }) {
  const mobile = useIsMobile();
  return (
    <div className={className}>
      <Canvas
        camera={camera || { position: [0, 0, 5], fov }}
        dpr={mobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={fallback}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
