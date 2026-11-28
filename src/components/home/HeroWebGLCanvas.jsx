import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { ScrollTrigger } from '../../lib/gsapSetup';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import WebGLErrorBoundary from '../global/WebGLErrorBoundary';

const PARTICLE_COUNT = 1200;

function EnergyCloud({ progressRef, mouseRef }) {
  const pointsRef = useRef();
  const materialRef = useRef();
  const timeRef = useRef(0);

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const sz = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      pos[i * 3 + 2] = r * Math.cos(phi);
      sz[i] = Math.random() * 2 + 0.5;
    }
    return { positions: pos, sizes: sz };
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: 0 },
    uColor: { value: new THREE.Color('#A3FF35') },
  }), []);

  useFrame((_, delta) => {
    timeRef.current += delta;
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = timeRef.current;
      materialRef.current.uniforms.uProgress.value = progressRef.current;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = mouseRef.current.x * 0.14;
      pointsRef.current.rotation.x = mouseRef.current.y * 0.14;
    }
  });

  const vertexShader = `
    uniform float uTime;
    uniform float uProgress;
    attribute float aSize;
    varying float vAlpha;
    void main() {
      vec3 p = position;
      // float -> scatter based on progress
      float scatter = uProgress;
      p += normalize(position) * scatter * 4.0;
      p.y += sin(uTime + position.x) * 0.15 * (1.0 - scatter);
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = aSize * (300.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
      vAlpha = 1.0 - smoothstep(0.6, 1.0, uProgress);
    }
  `;
  const fragmentShader = `
    uniform vec3 uColor;
    varying float vAlpha;
    void main() {
      float d = length(gl_PointCoord - vec2(0.5));
      if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.0, d) * vAlpha;
      gl_FragColor = vec4(uColor, a);
    }
  `;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function PS1Box({ progressRef }) {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      const p = progressRef.current;
      meshRef.current.position.y = Math.sin(p * Math.PI) * 0.6;
      meshRef.current.rotation.y += 0.003;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.6, 1.1, 1.0]} />
      <meshStandardMaterial color="#1a2e22" metalness={0.7} roughness={0.3} emissive="#A3FF35" emissiveIntensity={0.05} />
    </mesh>
  );
}

function MouseParallax({ mouseRef }) {
  const { camera } = useThree();
  useFrame(() => {
    // eslint-disable-next-line react/immutability
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouseRef.current.x * 0.14, 0.05);
    // eslint-disable-next-line react/immutability
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, -mouseRef.current.y * 0.14, 0.05);
  });
  return null;
}

export default function HeroWebGLCanvas() {
  const mobile = useIsMobile();
  const reduced = useReducedMotion();
  const progressRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    if (mobile || reduced) return;
    const section = sectionRef.current;
    if (!section) return;
    const realUpdate = (self) => { progressRef.current = Math.min(1, self.progress / 0.6); };
    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=60%',
      scrub: true,
      onUpdate: realUpdate,
    });
    return () => { st.kill(); };
  }, [mobile, reduced]);

  useEffect(() => {
    if (mobile || reduced) return;
    const onMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mobile, reduced]);

  if (mobile || reduced) {
    return <div className="absolute inset-0 bg-gradient-to-b from-[#050B0A] via-[#091310] to-[#050B0A]" />;
  }

  return (
    <div ref={sectionRef} className="absolute inset-0">
      <WebGLErrorBoundary>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}>
        <color attach="background" args={['#050B0A']} />
        <hemisphereLight args={['#A3FF35', '#050B0A', 0.4]} />
        <directionalLight position={[5, 5, 4]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-4, 2, -3]} intensity={0.8} color="#38bdf8" />
        <PS1Box progressRef={progressRef} />
        <EnergyCloud progressRef={progressRef} mouseRef={mouseRef} />
        <MouseParallax mouseRef={mouseRef} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} intensity={0.9} mipmapBlur />
          <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={[0.0015, 0.0015]} />
          <Vignette eskil={false} offset={0.2} darkness={0.7} />
        </EffectComposer>
      </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}