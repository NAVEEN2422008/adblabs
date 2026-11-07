import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, Eye, Box, Sliders, ShieldCheck, Zap, Battery, Layers } from 'lucide-react';
import * as THREE from 'three';

export default function PS1ProductViewer() {
  const [viewMode, setViewMode] = useState('angle'); // 'angle' or '3d'
  const [activeAngle, setActiveAngle] = useState('front');
  const [isRotating, setIsRotating] = useState(false);
  const mountRef = useRef(null);

  const angles = [
    { id: 'front', label: 'Front View', image: '/images/thumb_front.jpg', desc: 'Active display screen, 230V AC output sockets, DC switches, and quick-access breaker panel.' },
    { id: 'left', label: 'Left Side', image: '/images/thumb_left.jpg', desc: 'Dual MPPT solar PV inputs (12V–150V) and filtered intake cooling louvers with marine salt seals.' },
    { id: 'rear', label: 'Rear View', image: '/images/thumb_rear.jpg', desc: 'Heavy-duty high-amp DC expansion bus for secondary 6.144 kWh pack coupling.' },
    { id: 'right', label: 'Right Side', image: '/images/thumb_right.jpg', desc: 'High-speed forced exhaust ventilation ports with thermal automatic variable-speed fans.' },
    { id: 'top', label: 'Top View', image: '/images/thumb_top.jpg', desc: 'Flush-recessed reinforced aluminum carrying handles and modular stacking lock guides.' }
  ];

  // Auto rotation interval for angle mode
  useEffect(() => {
    if (!isRotating || viewMode !== 'angle') return;
    const interval = setInterval(() => {
      setActiveAngle((current) => {
        const idx = angles.findIndex((a) => a.id === current);
        return angles[(idx + 1) % angles.length].id;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isRotating, viewMode]);

  // Three.js 3D WebGL Canvas implementation
  useEffect(() => {
    if (viewMode !== '3d' || !mountRef.current) return;

    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050b0a);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(4, 2.5, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Group for the PS1 Chassis
    const ps1Group = new THREE.Group();
    scene.add(ps1Group);

    // Main Chassis Body (Industrial Obsidian Graphite)
    const bodyGeometry = new THREE.BoxGeometry(2.4, 1.8, 1.6);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x132019,
      roughness: 0.35,
      metalness: 0.85,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.castShadow = true;
    body.receiveShadow = true;
    ps1Group.add(body);

    // Front Display Bezel & Screen
    const screenGeo = new THREE.PlaneGeometry(1.2, 0.6);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x07110c });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.3, 0.81);
    ps1Group.add(screenMesh);

    // Acid Lime Glowing LED Display Telemetry
    const limeGlowGeo = new THREE.PlaneGeometry(1.1, 0.5);
    const limeGlowMat = new THREE.MeshBasicMaterial({
      color: 0xa3ff35,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const limeMesh = new THREE.Mesh(limeGlowGeo, limeGlowMat);
    limeMesh.position.set(0, 0.3, 0.815);
    ps1Group.add(limeMesh);

    // Front Output Socket Bank
    const socketBankGeo = new THREE.BoxGeometry(1.8, 0.5, 0.05);
    const socketBankMat = new THREE.MeshStandardMaterial({ color: 0x101c17, metalness: 0.6, roughness: 0.4 });
    const socketBank = new THREE.Mesh(socketBankGeo, socketBankMat);
    socketBank.position.set(0, -0.4, 0.81);
    ps1Group.add(socketBank);

    // Corner Bumper Armor (Heavy-duty Marine Protection)
    const bumperMat = new THREE.MeshStandardMaterial({ color: 0x091310, roughness: 0.8 });
    const cornerOffsets = [
      [-1.22, 0, -0.82],
      [1.22, 0, -0.82],
      [-1.22, 0, 0.82],
      [1.22, 0, 0.82],
    ];
    cornerOffsets.forEach(([x, y, z]) => {
      const bumperGeo = new THREE.BoxGeometry(0.12, 1.85, 0.12);
      const bumper = new THREE.Mesh(bumperGeo, bumperMat);
      bumper.position.set(x, y, z);
      ps1Group.add(bumper);
    });

    // 4 Heavy-duty Caster Wheels at base
    const wheelGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 24);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x222625, roughness: 0.5, metalness: 0.6 });
    const wheelPositions = [
      [-0.9, -1.05, -0.6],
      [0.9, -1.05, -0.6],
      [-0.9, -1.05, 0.6],
      [0.9, -1.05, 0.6],
    ];
    wheelPositions.forEach(([x, y, z]) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, y, z);
      wheel.castShadow = true;
      ps1Group.add(wheel);
    });

    // Recessed Top Aluminum Carry Handles
    const handleGeo = new THREE.BoxGeometry(0.8, 0.08, 0.2);
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x8a9b90, metalness: 0.9, roughness: 0.2 });
    const handleFront = new THREE.Mesh(handleGeo, handleMat);
    handleFront.position.set(0, 0.93, 0.4);
    ps1Group.add(handleFront);

    const handleRear = new THREE.Mesh(handleGeo, handleMat);
    handleRear.position.set(0, 0.93, -0.4);
    ps1Group.add(handleRear);

    // Floor Reflection Grid
    const gridHelper = new THREE.GridHelper(8, 20, 0xa3ff35, 0x132019);
    gridHelper.position.y = -1.25;
    scene.add(gridHelper);

    // Lighting (Studio Cinematic Industrial)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xa3ff35, 2.2);
    keyLight.position.set(5, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x6deb38, 1.2);
    fillLight.position.set(-5, 3, -4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xa3ff35, 2, 10);
    rimLight.position.set(0, 3, 2);
    scene.add(rimLight);

    // Mouse Drag Rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      ps1Group.rotation.y += deltaX * 0.008;
      ps1Group.rotation.x += deltaY * 0.005;
      ps1Group.rotation.x = Math.max(-0.4, Math.min(0.4, ps1Group.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch Support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      ps1Group.rotation.y += deltaX * 0.008;
      ps1Group.rotation.x += deltaY * 0.005;
      ps1Group.rotation.x = Math.max(-0.4, Math.min(0.4, ps1Group.rotation.x));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

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
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isDragging) {
        ps1Group.rotation.y += 0.004;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [viewMode]);

  const currentAngleObj = angles.find((a) => a.id === activeAngle) || angles[0];

  return (
    <div className="w-full bg-[#091310] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Viewer Mode Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#A3FF35] animate-pulse"></div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              CAD Interactive Hardware Explorer
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
              ADB Labs PS1 Platform
            </h4>
          </div>
        </div>

        {/* View Mode Toggle: 5-Angle CAD vs 3D WebGL */}
        <div className="flex items-center gap-2 bg-[#101C17] p-1 rounded-full border border-white/10">
          <button
            onClick={() => setViewMode('angle')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-2 ${
              viewMode === 'angle'
                ? 'bg-[#A3FF35] text-black shadow-md font-bold'
                : 'text-[#A3ADA5] hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>5-Angle CAD</span>
          </button>
          <button
            onClick={() => setViewMode('3d')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-2 ${
              viewMode === '3d'
                ? 'bg-[#A3FF35] text-black shadow-md font-bold'
                : 'text-[#A3ADA5] hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D WebGL Canvas</span>
          </button>
        </div>
      </div>

      {/* Main Stage */}
      <div className="relative mt-6 aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl bg-[#050B0A] border border-white/10 overflow-hidden flex items-center justify-center">
        
        {viewMode === 'angle' ? (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-10">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#A3FF35]/5 rounded-full blur-3xl pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeAngle}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-h-full max-w-full flex items-center justify-center"
              >
                <img
                  src={currentAngleObj.image}
                  alt={`ADB Labs PS1 ${currentAngleObj.label}`}
                  className="max-h-[340px] sm:max-h-[440px] w-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] rounded-xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Technical Subsystem HUD overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#101C17]/90 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div>
                <span className="text-[10px] font-mono text-[#A3FF35] uppercase font-bold tracking-wider">
                  Active View: {currentAngleObj.label}
                </span>
                <p className="text-xs text-[#A3ADA5] mt-0.5 max-w-xl">
                  {currentAngleObj.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono border transition flex items-center gap-1.5 ${
                    isRotating
                      ? 'bg-[#A3FF35]/15 border-[#A3FF35] text-[#A3FF35]'
                      : 'border-white/15 text-[#A3ADA5] hover:text-white'
                  }`}
                >
                  <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} />
                  <span>{isRotating ? 'Rotating 360°' : 'Auto Rotate'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            
            {/* 3D Canvas Controls Prompt */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#101C17]/85 border border-white/10 backdrop-blur-md text-left text-xs pointer-events-none">
              <span className="text-[10px] font-mono text-[#A3FF35] uppercase font-bold block">
                Three.js WebGL Interactive View
              </span>
              <span className="text-[#A3ADA5] text-[11px] mt-0.5 block">
                Click & drag mouse or swipe to rotate 3D chassis 360°
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Angle Selector Tabs */}
      {viewMode === 'angle' && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
          {angles.map((ang) => {
            const isSelected = activeAngle === ang.id;
            return (
              <button
                key={ang.id}
                onClick={() => {
                  setActiveAngle(ang.id);
                  setIsRotating(false);
                }}
                className={`p-3 rounded-2xl border text-left transition flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#101C17] border-[#A3FF35] text-white shadow-[0_0_15px_rgba(163,255,55,0.15)]'
                    : 'bg-[#050B0A]/60 border-white/10 text-[#A3ADA5] hover:border-white/25 hover:text-white'
                }`}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-black/60 border border-white/10 flex-shrink-0 flex items-center justify-center p-1">
                  <img src={ang.image} alt={ang.label} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">{ang.label}</div>
                  <div className="text-[9px] font-mono text-[#68776D] uppercase">Selected CAD</div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Quick Specs Badges Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10 text-left">
        <div className="p-3.5 rounded-xl bg-[#101C17] border border-white/10">
          <div className="text-[10px] font-mono text-[#68776D] uppercase">Continuous Rating</div>
          <div className="text-lg font-bold font-heading text-white mt-0.5">3.0 kW Pure Sine</div>
          <div className="text-[11px] text-[#A3FF35]">6 kW Inrush Surge</div>
        </div>
        <div className="p-3.5 rounded-xl bg-[#101C17] border border-white/10">
          <div className="text-[10px] font-mono text-[#68776D] uppercase">Core Capacity</div>
          <div className="text-lg font-bold font-heading text-white mt-0.5">6.144 kWh LFP</div>
          <div className="text-[11px] text-[#A3ADA5]">Expandable to 12.288 kWh</div>
        </div>
        <div className="p-3.5 rounded-xl bg-[#101C17] border border-white/10">
          <div className="text-[10px] font-mono text-[#68776D] uppercase">Solar Absorption</div>
          <div className="text-lg font-bold font-heading text-white mt-0.5">2,880 Wp Max</div>
          <div className="text-[11px] text-[#A3FF35]">Dual 12V–150V MPPT</div>
        </div>
        <div className="p-3.5 rounded-xl bg-[#101C17] border border-white/10">
          <div className="text-[10px] font-mono text-[#68776D] uppercase">Cell Longevity</div>
          <div className="text-lg font-bold font-heading text-white mt-0.5">3,500+ Cycles</div>
          <div className="text-[11px] text-[#A3ADA5]">To 80% Initial Capacity</div>
        </div>
      </div>

    </div>
  );
}
