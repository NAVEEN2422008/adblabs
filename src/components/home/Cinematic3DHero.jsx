import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Zap, ShieldCheck, Battery, Sun, RotateCw, Play } from 'lucide-react';
import * as THREE from 'three';

export default function Cinematic3DHero() {
  const mountRef = useRef(null);
  const [activeCallout, setActiveCallout] = useState(0);

  const callouts = [
    { title: '6.144 kWh Core', subtitle: 'Automotive LiFePO₄ Prismatic Cells (3,500+ Cycles)', pos: 'top-left' },
    { title: '3.0 kW Continuous', subtitle: '6.0 kW Peak Inrush Surge Absorption (Pure Sine)', pos: 'top-right' },
    { title: 'Dual MPPT Controllers', subtitle: 'Wide 12V–150V Solar Tracking up to 2.88 kWp', pos: 'bottom-left' },
    { title: 'Modular DC Bus', subtitle: 'Quick-Coupling Expansion to 12.288 kWh', pos: 'bottom-right' }
  ];

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050b0a);

    // Fog for cinematic industrial depth
    scene.fog = new THREE.FogExp2(0x050b0a, 0.12);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    currentMount.appendChild(renderer.domElement);

    // Main Hardware Group
    const productGroup = new THREE.Group();
    scene.add(productGroup);

    // 1. Main Obsidian Chassis Unibody
    const chassisGeo = new THREE.BoxGeometry(2.3, 1.7, 1.5);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x101c17,
      roughness: 0.35,
      metalness: 0.85,
    });
    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    productGroup.add(chassis);

    // 2. Corner Armor Bumpers (Marine coastal reinforced rubber)
    const bumperMat = new THREE.MeshStandardMaterial({ color: 0x091310, roughness: 0.8, metalness: 0.2 });
    const bumperPositions = [
      [-1.17, 0, -0.77],
      [1.17, 0, -0.77],
      [-1.17, 0, 0.77],
      [1.17, 0, 0.77],
    ];
    bumperPositions.forEach(([x, y, z]) => {
      const bumperGeo = new THREE.BoxGeometry(0.14, 1.76, 0.14);
      const bumper = new THREE.Mesh(bumperGeo, bumperMat);
      bumper.position.set(x, y, z);
      productGroup.add(bumper);
    });

    // 3. Front Display Screen Panel & Bezel
    const screenGeo = new THREE.PlaneGeometry(1.25, 0.65);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x030806 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.28, 0.755);
    productGroup.add(screen);

    // 4. Acid Lime Telemetry Screen Wireframe / HUD
    const hudGeo = new THREE.PlaneGeometry(1.15, 0.55);
    const hudMat = new THREE.MeshBasicMaterial({
      color: 0xa3ff35,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const hud = new THREE.Mesh(hudGeo, hudMat);
    hud.position.set(0, 0.28, 0.76);
    productGroup.add(hud);

    // 5. Front Output Socket Bank (230V AC Outlets & DC Breakers)
    const socketGeo = new THREE.BoxGeometry(1.9, 0.45, 0.06);
    const socketMat = new THREE.MeshStandardMaterial({ color: 0x132019, roughness: 0.4, metalness: 0.5 });
    const socketBank = new THREE.Mesh(socketGeo, socketMat);
    socketBank.position.set(0, -0.42, 0.755);
    productGroup.add(socketBank);

    // 6. Recessed Aluminum Top Carry Handles
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.2 });
    const handleGeo = new THREE.BoxGeometry(0.85, 0.08, 0.2);
    const handle1 = new THREE.Mesh(handleGeo, handleMat);
    handle1.position.set(0, 0.89, 0.35);
    productGroup.add(handle1);

    const handle2 = new THREE.Mesh(handleGeo, handleMat);
    handle2.position.set(0, 0.89, -0.35);
    productGroup.add(handle2);

    // 7. Base Industrial Caster Wheels (Rated 350kg)
    const wheelGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.14, 24);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x232d27, roughness: 0.5, metalness: 0.7 });
    const wheelOffsets = [
      [-0.85, -0.98, -0.55],
      [0.85, -0.98, -0.55],
      [-0.85, -0.98, 0.55],
      [0.85, -0.98, 0.55],
    ];
    wheelOffsets.forEach(([x, y, z]) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, y, z);
      wheel.castShadow = true;
      productGroup.add(wheel);
    });

    // 8. Ground Reflection Grid
    const grid = new THREE.GridHelper(10, 24, 0xa3ff35, 0x101c17);
    grid.position.y = -1.16;
    scene.add(grid);

    // 9. Lighting Setup (Cinematic Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Signature Acid Lime Key Rim Light
    const limeRim = new THREE.DirectionalLight(0xa3ff35, 2.8);
    limeRim.position.set(4, 4, 3);
    limeRim.castShadow = true;
    scene.add(limeRim);

    // Cyan/Green Subtle Fill
    const fillLight = new THREE.DirectionalLight(0x6deb38, 1.4);
    fillLight.position.set(-4, 2, -3);
    scene.add(fillLight);

    // Top Studio Overhead Light
    const topLight = new THREE.PointLight(0xffffff, 1.2, 10);
    topLight.position.set(0, 3, 2);
    scene.add(topLight);

    // Subtly position group for hero presentation
    productGroup.rotation.y = -0.35;
    productGroup.rotation.x = 0.08;

    // Mouse Parallax Interaction
    let targetRotationY = -0.35;
    let targetRotationX = 0.08;
    let targetCameraY = 1.2;

    const onMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      targetRotationY = -0.35 + mouseX * 0.45;
      targetRotationX = 0.08 - mouseY * 0.2;
      targetCameraY = 1.2 + mouseY * 0.15;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp Mouse Parallax
      productGroup.rotation.y += (targetRotationY - productGroup.rotation.y) * 0.05;
      productGroup.rotation.x += (targetRotationX - productGroup.rotation.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;

      // Subtle breathing levitation
      productGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full min-h-[95vh] flex flex-col justify-between overflow-hidden bg-[#050B0A] pt-12 pb-16">
      
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#A3FF35]/12 via-[#101C17]/40 to-transparent rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse [animation-duration:8s]"></div>

      {/* Hero Copy (Top Section) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#101C17] border border-white/12 text-xs font-mono text-[#A3FF35] tracking-widest uppercase mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#A3FF35] animate-ping"></span>
          <span>ENERGY | ROBOTICS | ENGINEERING | R&D</span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.02] text-white max-w-5xl mx-auto"
        >
          Engineering <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#A3FF35] via-[#6DEB38] to-[#47bfff] bg-clip-text text-transparent">
            Real-World
          </span> Solutions.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#A3ADA5] text-lg sm:text-2xl max-w-3xl mx-auto mt-5 font-normal leading-relaxed"
        >
          Portable power, off-grid systems, custom battery solutions and robotics R&D — from concept to real-world deployment.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <Link
            to="/energy-solutions"
            className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.3)] flex items-center gap-2 group font-heading"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </Link>
          <Link
            to="/power-stations/adb-ps1"
            className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition flex items-center gap-2"
          >
            <span>Our Capabilities</span>
            <ArrowUpRight className="w-4 h-4 text-[#A3FF35]" />
          </Link>
        </motion.div>

      </div>

      {/* 3D WebGL Canvas Stage Container with Floating Technical Labels */}
      <div className="relative w-full max-w-6xl mx-auto h-[440px] sm:h-[500px] mt-6 flex items-center justify-center">
        
        {/* Three.js Mount Container */}
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" />

        {/* Floating Technical HUD Callouts (EcoFlow Titan / Apple Pro Style) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block z-20">
          
          {/* Top-Left Callout */}
          <div className="absolute top-12 left-6 p-3.5 rounded-2xl bg-[#101C17]/90 border border-white/10 backdrop-blur-md text-left max-w-xs shadow-xl">
            <div className="text-[10px] font-mono text-[#A3FF35] uppercase font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35]"></span>
              <span>BATTERY CORE // 6.144 kWh</span>
            </div>
            <div className="text-xs text-white font-bold mt-1">Automotive LiFePO₄ Prismatic</div>
            <div className="text-[11px] text-[#A3ADA5] mt-0.5">3,500+ full cycles to 80% DoD with active CAN BMS</div>
          </div>

          {/* Top-Right Callout */}
          <div className="absolute top-12 right-6 p-3.5 rounded-2xl bg-[#101C17]/90 border border-white/10 backdrop-blur-md text-left max-w-xs shadow-xl">
            <div className="text-[10px] font-mono text-[#A3FF35] uppercase font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35]"></span>
              <span>PURE SINE INVERTER // 3.0 kW</span>
            </div>
            <div className="text-xs text-white font-bold mt-1">6.0 kW Inrush Surge Buffer</div>
            <div className="text-[11px] text-[#A3ADA5] mt-0.5">Zero brownouts on commercial waffle irons & chillers</div>
          </div>

          {/* Bottom-Left Callout */}
          <div className="absolute bottom-10 left-8 p-3.5 rounded-2xl bg-[#101C17]/90 border border-white/10 backdrop-blur-md text-left max-w-xs shadow-xl">
            <div className="text-[10px] font-mono text-[#A3FF35] uppercase font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35]"></span>
              <span>DUAL MPPT SOLAR // 2.88 kWp</span>
            </div>
            <div className="text-xs text-white font-bold mt-1">12V–150V Wide Tracking</div>
            <div className="text-[11px] text-[#A3ADA5] mt-0.5">Powers live cooling & recharges battery in daylight</div>
          </div>

          {/* Bottom-Right Callout */}
          <div className="absolute bottom-10 right-8 p-3.5 rounded-2xl bg-[#101C17]/90 border border-white/10 backdrop-blur-md text-left max-w-xs shadow-xl">
            <div className="text-[10px] font-mono text-[#A3FF35] uppercase font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35]"></span>
              <span>EXPANSION BUS // 12.288 kWh</span>
            </div>
            <div className="text-xs text-white font-bold mt-1">Direct DC Quick-Coupling</div>
            <div className="text-[11px] text-[#A3ADA5] mt-0.5">Double runtime seamlessly without rewiring</div>
          </div>

        </div>

        {/* 3D Drag Prompt for Mobile / Desktop */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#68776D] uppercase tracking-wider bg-[#050B0A]/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm z-20 pointer-events-none">
          Move Cursor to Inspect 3D Hardware
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="flex flex-col items-center gap-2 mt-4 text-[#68776D] text-[10px] font-mono tracking-widest uppercase relative z-20">
        <span>Scroll to Explore</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#A3FF35] animate-bounce"></div>
        </div>
      </div>

    </div>
  );
}
