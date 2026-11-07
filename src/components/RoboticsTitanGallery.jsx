import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Eye, Navigation, Layers, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function RoboticsTitanGallery() {
  const [activePlatform, setActivePlatform] = useState(0);

  const platforms = [
    {
      id: 'amr',
      name: '3D LiDAR Autonomous Mobile Robot',
      tagline: 'Heavy-Payload Autonomous Base with Sub-Centimeter SLAM',
      category: 'Autonomous Mobile Robotics',
      badge: 'ROS 2 Jazzy Nav2 Stack',
      image: '/images/amr_lidar_robot_titan.jpg',
      specs: [
        { label: 'Perception', value: '360° 3D LiDAR' },
        { label: 'Navigation', value: 'ROS 2 Nav2 SLAM' },
        { label: 'Vision Depth', value: 'RealSense D435i' },
        { label: 'Payload', value: '150 kg Base' }
      ],
      description: 'Engineered for commercial facility logistics and outdoor inspection. Combines real-time 3D LiDAR point cloud mapping with Nav2 costmaps to navigate complex human-dense corridors with zero collisions.',
      capabilities: [
        'Real-time Cartographer 3D SLAM mapping',
        'Dynamic collision avoidance with local DWB planner',
        'CAN-bus interface to ADB Labs PS1 energy telemetry',
        'Multi-sensor odometry fusion (IMU + Hall + Optical)'
      ]
    },
    {
      id: 'quadruped',
      name: 'Quadruped Dynamic Locomotion Robot',
      tagline: 'Multi-Terrain Dynamic Balance & Kinematic Trot Stabilization',
      category: 'Bio-Inspired Quadruped Robotics',
      badge: 'Dynamic Gait Physics',
      image: '/images/robot_dog_titan.jpg',
      specs: [
        { label: 'Actuation', value: '12-DoF High-Torque' },
        { label: 'Gait Frequency', value: '1.8 Hz Trotting' },
        { label: 'Firmware', value: 'STM32 CAN Bus' },
        { label: 'Simulation', value: 'Gazebo Physics' }
      ],
      description: 'Four-legged robotic research platform designed for rugged terrain traversal and stair climbing. Features custom inverse kinematics, reactive compliance controllers, and real-time center-of-mass stabilization.',
      capabilities: [
        '12-axis synchronized high-torque brushless joint actuators',
        'Inverse kinematics and balance posture controller',
        'Sub-millisecond low-latency CAN communication bus',
        'Simulation-first URDF model verified in Gazebo and Isaac Sim'
      ]
    },
    {
      id: 'manipulator',
      name: '6-Axis High-Precision Manipulator',
      tagline: 'Sub-Millimeter Articulation with Edge AI Computer Vision',
      category: 'Industrial Automation & Manipulation',
      badge: '±0.05 mm Repeatability',
      image: '/images/robotic_arm_titan.jpg',
      specs: [
        { label: 'Precision', value: '±0.05 mm' },
        { label: 'Perception', value: 'YOLOv8 Edge Vision' },
        { label: 'Kinematics', value: '6-Axis Articulated' },
        { label: 'Control', value: 'MoveIt 2 Trajectory' }
      ],
      description: 'High-precision robotic arm integrating real-time neural edge perception. Automates delicate sorting, pick-and-place, and tool manipulation with automated trajectory smoothing and collision envelopes.',
      capabilities: [
        'MoveIt 2 kinematics and collision-free path planning',
        'Edge neural vision for real-time object detection and 6D pose',
        'End-effector exchange with pneumatic and servo grippers',
        'Integrated safety force-torque limit monitoring'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* 3 Showcase Hero Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {platforms.map((platform, idx) => {
          const isSelected = activePlatform === idx;
          return (
            <motion.div
              key={platform.id}
              onClick={() => setActivePlatform(idx)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-[32px] p-6 sm:p-8 cursor-pointer text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-[#38bdf8]/50 shadow-[0_20px_50px_rgba(56,189,248,0.15)] ring-1 ring-[#38bdf8]/30'
                  : 'bg-white/[0.02] border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {/* Subtle accent glow */}
              {isSelected && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"></div>
              )}

              <div>
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] bg-[#38bdf8]/10 px-3 py-1 rounded-full font-bold border border-[#38bdf8]/20">
                    {platform.badge}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    0{idx + 1} // PLATFORM
                  </span>
                </div>

                {/* Platform Name */}
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {platform.name}
                </h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  {platform.tagline}
                </p>

                {/* Product Imagery Frame */}
                <div className="relative aspect-[16/10] my-6 rounded-2xl overflow-hidden bg-black/60 border border-white/[0.06] flex items-center justify-center p-3 group">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                  />
                  {isSelected && (
                    <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono text-[#38bdf8] border border-[#38bdf8]/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping"></span>
                      ACTIVE TELEMETRY
                    </div>
                  )}
                </div>

                {/* Quick 2x2 Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.06] text-xs">
                  {platform.specs.slice(0, 4).map((spec, sIdx) => (
                    <div key={sIdx} className="bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                      <div className="text-[10px] text-neutral-500 font-mono">{spec.label}</div>
                      <div className="text-white font-bold text-xs mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Call to Action */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
                <span className={isSelected ? 'text-[#38bdf8]' : 'text-neutral-400'}>
                  {isSelected ? 'Viewing System Architecture' : 'Inspect Platform'}
                </span>
                <ArrowRight className={`w-4 h-4 transition ${isSelected ? 'text-[#38bdf8] translate-x-1' : 'text-neutral-500'}`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Platform Detailed Architecture Deck */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlatform}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 p-8 sm:p-12 rounded-[32px] bg-[#090b10] border border-white/[0.08] shadow-2xl relative overflow-hidden backdrop-blur-2xl text-left"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-bold">
                  Architecture Dossier // {platforms[activePlatform].category}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                {platforms[activePlatform].name}
              </h4>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {platforms[activePlatform].description}
              </p>

              {/* Core System Capabilities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {platforms[activePlatform].capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Specs Highlight Box */}
            <div className="lg:col-span-5 bg-white/[0.02] p-6 rounded-2xl border border-white/[0.08] space-y-4">
              <span className="text-[11px] font-mono uppercase text-neutral-400 block font-semibold">
                Integrated Hardware Telemetry
              </span>

              <div className="space-y-3">
                {platforms[activePlatform].specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between py-2 border-b border-white/[0.06] text-xs">
                    <span className="text-neutral-400 font-mono">{spec.label}</span>
                    <span className="text-white font-bold font-sans">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#38bdf8]">
                <span className="font-mono text-[10px] text-neutral-500">SIMULATION READY</span>
                <span className="font-semibold">Gazebo &amp; ROS 2 Compatible</span>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* 4 R&D Capability Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
          <Navigation className="w-5 h-5 text-[#38bdf8] mb-2" />
          <div className="text-sm font-bold text-white">ROS 2 Jazzy &amp; Nav2</div>
          <div className="text-[11px] text-neutral-400 mt-1">Autonomous 2D/3D SLAM, dynamic costmaps &amp; waypoint navigation</div>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
          <Eye className="w-5 h-5 text-[#38bdf8] mb-2" />
          <div className="text-sm font-bold text-white">Edge Computer Vision</div>
          <div className="text-[11px] text-neutral-400 mt-1">Real-time YOLOv8 neural detection, depth estimation &amp; tracking</div>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
          <Cpu className="w-5 h-5 text-[#38bdf8] mb-2" />
          <div className="text-sm font-bold text-white">STM32 CAN-Bus Firmware</div>
          <div className="text-[11px] text-neutral-400 mt-1">Sub-millisecond joint motor control &amp; active BMS telemetry link</div>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
          <Layers className="w-5 h-5 text-[#38bdf8] mb-2" />
          <div className="text-sm font-bold text-white">Carbon-Fiber Rapid R&amp;D</div>
          <div className="text-[11px] text-neutral-400 mt-1">Direct digital manufacturing, CNC aluminum joints &amp; field testing</div>
        </div>
      </div>
    </div>
  );
}
