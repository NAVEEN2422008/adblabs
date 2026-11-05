import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Eye, Cpu, Layers, Terminal, ArrowRight, Play, Pause, Radio } from 'lucide-react';
import { ROBOTICS_CAPABILITIES } from '../data/websiteData';
import QuadrupedGraphic from './QuadrupedGraphic';

export default function RoboticsRnD({ isSubView = false, onOpenInternship }) {
  const [isPatrolling, setIsPatrolling] = useState(true);
  const [logIndex, setLogIndex] = useState(0);

  const rosLogs = [
    "[INFO] [nav2_controller]: Executing path plan (Goal #04: Beach Promenade Inspection)",
    "[INFO] [lidar_cartographer]: 360° laser odometry synced (scan rate: 30.2 Hz, 0.02m error)",
    "[INFO] [jetson_vision_ai]: Stereo depth inference: Obstacle cleared (confidence: 98.4%)",
    "[INFO] [can_bms_telemetry]: PS1 Mobile Dock synced. Battery reserve: 82% [Nominal]",
    "[INFO] [nav2_bt_navigator]: Waypoint #04 reached. Yaw stabilized at +34.2°"
  ];

  useEffect(() => {
    if (!isPatrolling) return;
    const interval = setInterval(() => {
      setLogIndex(prev => (prev + 1) % rosLogs.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isPatrolling, rosLogs.length]);

  const iconMap = {
    Bot: Bot,
    Eye: Eye,
    Cpu: Cpu,
    Layers: Layers
  };

  return (
    <section id="robotics" className="py-24 bg-[#060709] relative overflow-hidden border-t border-[#141824]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] ambient-glow-green rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb if in subview */}
        {isSubView && (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
            <span>R&D</span>
            <span>&gt;</span>
            <span className="text-green-400 font-semibold">Robotics & Intelligent Systems</span>
          </div>
        )}

        {/* Section Header matching Mockup */}
        <div className="mb-10">
          <div className="text-xs font-mono text-green-400 uppercase tracking-wider mb-2">
            INTELLIGENT MACHINES & SIMULATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Robotics & <span className="text-green-400">R&D</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            Research, prototyping and experimentation in robotics, automation and intelligent systems.
          </p>
        </div>

        {/* Hero Banner with Precision Quadruped Robot Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-[#0c121e] via-[#090d18] to-[#05070e] border border-[#1b2336] p-6 sm:p-10 mb-10 overflow-hidden relative shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-green-400 font-bold uppercase tracking-wider">
                AUTONOMOUS GROUND ROBOTICS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Quadruped & Mobile Robot Platforms
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Engineering intelligent mobile machines for rough-terrain navigation, inspection, and cargo transport using ROS 2, LiDAR-inertial odometry, and edge perception models.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-3 py-1 rounded-lg bg-black/70 text-green-400 border border-green-500/30">ROS 2 Humble</span>
                <span className="px-3 py-1 rounded-lg bg-black/70 text-slate-300 border border-slate-800">LiDAR SLAM (Cartographer)</span>
                <span className="px-3 py-1 rounded-lg bg-black/70 text-slate-300 border border-slate-800">NVIDIA Jetson Vision</span>
              </div>

              {/* Simulated ROS 2 Telemetry Terminal Console */}
              <div className="mt-4 p-4 rounded-xl bg-black/80 border border-slate-800 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-green-400">
                    <Radio className="w-3 h-3 animate-pulse" /> ROS 2 HUMBLE LIVE NODE TELEMETRY
                  </span>
                  <button
                    onClick={() => setIsPatrolling(!isPatrolling)}
                    className="flex items-center gap-1 text-slate-400 hover:text-white"
                  >
                    {isPatrolling ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                    <span>{isPatrolling ? 'PAUSE' : 'RESUME'}</span>
                  </button>
                </div>

                <div className="text-slate-300 text-[11px] font-mono h-6 overflow-hidden flex items-center">
                  <span className="text-green-400 mr-2">$</span>
                  <span className="text-slate-200">{rosLogs[logIndex]}</span>
                </div>
              </div>
            </div>

            {/* Precision Quadruped Vector Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <QuadrupedGraphic className="w-full max-w-md" />
            </div>

          </div>
        </motion.div>

        {/* 4 Capability Cards (Exact from Mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROBOTICS_CAPABILITIES.map((cap, idx) => {
            const Icon = iconMap[cap.icon] || Bot;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: 'rgba(34, 197, 94, 0.4)' }}
                className="p-5 rounded-2xl bg-[#0b0e16] border border-[#1b2234] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#121624] border border-[#222c42] text-green-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-green-400 transition-colors">
                    {cap.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-green-400">
                  <span>DISCOVER</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
