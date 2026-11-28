import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import PS1ProceduralModel from './PS1ProceduralModel';
import ParticleField from './ParticleField';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ScrollTrigger } from '../../lib/gsapSetup';
import WebGLErrorBoundary from '../global/WebGLErrorBoundary';

export default function PS1CinematicScroll() {
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const overlay1 = useRef(null);
  const overlay2 = useRef(null);
  const overlay3 = useRef(null);
  const mobile = useIsMobile();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (mobile || reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => { if (t.trigger === section) t.kill(); });
    };
  }, [mobile, reduced]);

  if (mobile || reduced) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">ADB PS1 — Cinematic View</h2>
          <p className="text-[#A3ADA5] mt-4">Interactive 3D view available on desktop.</p>
          <div className="mt-8 aspect-video rounded-3xl bg-[#101C17] border border-white/10 flex items-center justify-center">
            <span className="text-[#68776D] text-sm font-mono">PS1 STUDIO RENDER</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <WebGLErrorBoundary>
        <Canvas camera={{ position: [4, 1.8, 4], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}>
          <color attach="background" args={['#050B0A']} />
          <ambientLight intensity={0.35} />
          <directionalLight position={[6, 6, 4]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-5, 2, -4]} intensity={0.7} color="#38bdf8" />
          <pointLight position={[0, 0, 0]} intensity={0.4} color="#A3FF35" />
          <PS1ProceduralModel progressRef={progressRef} />
          <ParticleField count={150} color="#A3FF35" spread={12} />
        </Canvas>
        </WebGLErrorBoundary>

        {/* Overlays */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div ref={overlay1} className="absolute top-[18%] left-1/2 -translate-x-1/2 text-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#A3FF35] mb-2">CINEMATIC SCROLL</div>
            <h3 className="text-3xl sm:text-5xl font-black font-heading text-white" data-split>ADB PS1 Power Station</h3>
            <p className="text-[#A3ADA5] mt-3 max-w-md mx-auto text-sm">Scroll to disassemble the architecture.</p>
          </div>
          <div ref={overlay2} className="absolute top-[18%] left-1/2 -translate-x-1/2 text-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] mb-2">EXPLODED VIEW</div>
            <h3 className="text-3xl sm:text-5xl font-black font-heading text-white">Modular Subsystems</h3>
            <p className="text-[#A3ADA5] mt-3 max-w-md mx-auto text-sm">Every component engineered for field serviceability.</p>
          </div>
          <div ref={overlay3} className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#A3FF35] mb-2">READY</div>
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">Built for Real-World Demands</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
