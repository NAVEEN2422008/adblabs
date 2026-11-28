import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Eye, Navigation, Layers, ShieldCheck, ArrowRight, Zap, CheckCircle2, Activity, Radio, Sparkles } from 'lucide-react';

export default function RoboticsTitanGallery() {
  const [activeTab, setActiveTab] = useState('overview');

  const orzoSubsystems = [
    {
      id: 'locomotion',
      title: '12-DoF Dynamic Gait Engine',
      badge: 'Gait Kinematics',
      icon: Activity,
      desc: '12-axis synchronized high-torque brushless joint actuators with high-frequency inverse kinematics, trotting compliance, and dynamic center-of-mass balancing.',
      specs: [
        { label: 'Actuation', value: '12-DoF High-Torque Brushless' },
        { label: 'Gait Frequency', value: '1.8 Hz Dynamic Trotting' },
        { label: 'Joint Response', value: '< 2.5ms Bus Latency' },
        { label: 'Payload Capacity', value: '12 kg Dynamic Load' }
      ]
    },
    {
      id: 'perception',
      title: 'Real-Time Edge AI Vision',
      badge: 'Neural Perception',
      icon: Eye,
      desc: 'High-speed stereo depth vision paired with onboard neural inferencing to classify obstacles, map step terrain, and calculate foot placement trajectories in real time.',
      specs: [
        { label: 'Vision Depth', value: 'Stereo Depth IR Sensor' },
        { label: 'AI Compute', value: 'NVIDIA Jetson Edge AI' },
        { label: 'Terrain Mapping', value: '3D Elevation Costmaps' },
        { label: 'Inference Rate', value: '30+ FPS YOLOv8 & Depth' }
      ]
    },
    {
      id: 'firmware',
      title: 'Low-Latency CAN-Bus Architecture',
      badge: 'STM32 Micro-ROS',
      icon: Cpu,
      desc: 'Dual-line galvanically isolated CAN-FD bus linking distributed STM32 joint controllers to the central compute node for deterministic millisecond closed-loop feedback.',
      specs: [
        { label: 'Bus Architecture', value: 'High-Speed CAN-FD 1Mbps' },
        { label: 'Firmware OS', value: 'FreeRTOS & Micro-ROS' },
        { label: 'Telemetry Rate', value: '1000 Hz Joint Telemetry' },
        { label: 'Safety Cutoff', value: 'Autonomous Torque Limit Interlock' }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Flagship Hero Card for ORZO */}
      <div className="rounded-[32px] p-8 sm:p-12 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-[#38bdf8]/40 shadow-[0_25px_60px_rgba(56,189,248,0.12)] relative overflow-hidden text-left">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#A3FF35]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: ORZO Identity & Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A3FF35] bg-[#A3FF35]/10 px-3.5 py-1.5 rounded-full font-bold border border-[#A3FF35]/30 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A3FF35] animate-ping"></span>
                FLAGSHIP ROBOTICS PLATFORM
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                REV 2.4 // QUADRUPED RESEARCH
              </span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
                ORZO <span className="text-[#A3FF35]">Quadruped</span> Robot.
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
                Bio-inspired dynamic quadruped locomotion platform engineered by ADB Labs. Designed for rugged terrain traversal, stair negotiation, and autonomous inspection with active compliance controllers, 12-axis torque vectoring, and real-time center-of-mass stabilization.
              </p>
            </div>

            {/* Quick Spec Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Kinematics', val: '12-DoF Actuation' },
                { label: 'Gait Engine', val: '1.8 Hz Trot Cycle' },
                { label: 'Controller', val: 'STM32 CAN-FD' },
                { label: 'Simulation', val: 'Gazebo & Isaac Sim' }
              ].map((spec, i) => (
                <div key={i} className="bg-white/[0.03] p-3 rounded-2xl border border-white/[0.06]">
                  <div className="text-[10px] text-neutral-400 font-mono">{spec.label}</div>
                  <div className="text-white font-bold text-xs sm:text-sm mt-0.5">{spec.val}</div>
                </div>
              ))}
            </div>

            {/* Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {[
                '12-axis synchronized high-torque brushless joint actuators',
                'Inverse kinematics and balance posture controller',
                'Sub-millisecond low-latency CAN communication bus',
                'Simulation-first URDF model verified in Gazebo and Isaac Sim',
                'Dynamic terrain obstacle clearance and trotting gait',
                'Integrated lithium pack with autonomous telemetry logging'
              ].map((cap, cIdx) => (
                <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Imagery Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-black/70 border border-white/[0.1] flex items-center justify-center p-4 group shadow-2xl">
              <img
                src="/images/orzo_robot_dog.jpg"
                alt="ORZO Quadruped Dynamic Locomotion Robot"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono text-[#A3FF35] border border-[#A3FF35]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35] animate-pulse"></span>
                ACTIVE TELEMETRY: NOMINAL
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-neutral-300 border border-white/10">
                ORZO // GREEN PROTOTYPE
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Architecture Dossier: Subsystem Tabs for ORZO */}
      <div className="mt-10 p-8 sm:p-12 rounded-[32px] bg-[#090b10] border border-white/[0.08] shadow-2xl relative overflow-hidden backdrop-blur-2xl text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-1">
              ARCHITECTURE DOSSIER // BIO-INSPIRED QUADRUPED ROBOTICS
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              ORZO System Breakdown &amp; Subsystems
            </h4>
          </div>

          {/* Subsystem Navigation Pills */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 bg-white/[0.04] p-1.5 rounded-2xl border border-white/[0.06] w-full sm:w-auto">
            {orzoSubsystems.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveTab(sub.id)}
                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-medium transition whitespace-nowrap ${
                  activeTab === sub.id
                    ? 'bg-[#A3FF35] text-black font-bold shadow-[0_0_15px_rgba(163,255,55,0.3)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {sub.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Subsystem Detail Card */}
        <AnimatePresence mode="wait">
          {orzoSubsystems
            .filter((sub) => sub.id === activeTab || (activeTab === 'overview' && sub.id === 'locomotion'))
            .map((activeSub) => {
              const Icon = activeSub.icon;
              return (
                <motion.div
                  key={activeSub.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8"
                >
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#A3FF35]/10 border border-[#A3FF35]/30 flex items-center justify-center text-[#A3FF35]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="text-xl sm:text-2xl font-bold text-white">
                        {activeSub.title}
                      </h5>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {activeSub.desc}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-[#38bdf8] font-mono">
                      <Sparkles className="w-4 h-4" />
                      <span>Custom designed and validated in the ADB Labs Robotics R&amp;D Workshop.</span>
                    </div>
                  </div>

                  {/* Telemetry Box */}
                  <div className="lg:col-span-5 bg-white/[0.02] p-6 rounded-2xl border border-white/[0.08] space-y-3">
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block font-semibold">
                      Subsystem Technical Telemetry
                    </span>
                    <div className="space-y-2.5">
                      {activeSub.specs.map((sp, idx) => (
                        <div key={idx} className="flex items-center justify-between py-1.5 border-b border-white/[0.05] text-xs">
                          <span className="text-neutral-400 font-mono">{sp.label}</span>
                          <span className="text-white font-bold">{sp.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      {/* 4 R&D Capability Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
          <Navigation className="w-5 h-5 text-[#38bdf8] mb-2" />
          <div className="text-sm font-bold text-white">Dynamic Locomotion</div>
          <div className="text-[11px] text-neutral-400 mt-1">12-DoF trotting gait, balance recovery &amp; terrain footstep planning</div>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
          <Eye className="w-5 h-5 text-[#38bdf8] mb-2" />
          <div className="text-sm font-bold text-white">Edge Computer Vision</div>
          <div className="text-[11px] text-neutral-400 mt-1">Real-time stereo depth estimation, obstacle clearance &amp; tracking</div>
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
