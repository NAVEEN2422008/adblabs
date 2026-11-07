import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Scan, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  Sparkles, 
  Activity, 
  Terminal 
} from 'lucide-react';
import RoboticsTitanGallery from '../components/RoboticsTitanGallery';

export default function RoboticsPage() {
  const focusAreas = [
    {
      title: 'Robotic Systems & Kinematics',
      tagline: 'Autonomous Mobile Robots, Quadruped Walkers & 6-Axis Arms',
      icon: Bot,
      desc: 'Mechanical kinematics design, payload balancing, and dynamic gait stabilization. We build custom wheeled AMRs, 12-DoF quadruped robots, and articulating robotic arms engineered for high-duty cycles.',
      bullets: ['Rigid aluminum and carbon-fiber unibody structural frames', 'Dynamic torque-vectoring brushless motor drives', 'Precision harmonic gearboxes with sub-millimeter backlash']
    },
    {
      title: 'AI & Edge Vision Perception',
      tagline: 'Real-Time 3D LiDAR SLAM, Depth Fusion & YOLOv8 Detection',
      icon: Eye,
      desc: 'Integrating low-latency edge neural compute with stereo depth cameras and multi-channel 3D LiDAR sensors to allow robots to autonomously map, navigate, and interact with unstructured dynamic environments.',
      bullets: ['ROS 2 Nav2 costmap-based obstacle avoidance', 'Sub-centimeter 2D/3D Cartographer & SLAM Toolbox mapping', 'TensorRT-accelerated edge inference on NVIDIA Jetson']
    },
    {
      title: 'Embedded Hardware & CAN Firmware',
      tagline: 'Low-Latency STM32 Real-Time Control & Micro-ROS Bus',
      icon: Cpu,
      desc: 'Industrial-grade microcontroller architectures running FreeRTOS with high-reliability CAN-FD and RS-485 serial communication buses for synchronized joint actuation and fail-safe safety interlocks.',
      bullets: ['Deterministic microsecond motor loop execution (STM32H7 / G4)', 'Galvanically isolated CAN transceiver bus topologies', 'Active power telemetry and thermal fault state machines']
    },
    {
      title: 'Physics Simulation & Rapid Prototyping',
      tagline: 'Gazebo & Isaac Sim Digital Twins Before Physical Machining',
      icon: Layers,
      desc: 'Simulation-first development pipeline. We construct high-fidelity URDF/SDF kinematic models and validate locomotion policies, obstacle clearance, and sensor pipelines inside virtual physics environments before metal is cut.',
      bullets: ['Photorealistic synthetic data generation and sensor noise models', 'Full kinematic and dynamic collision matrix verification', 'Seamless bridge from simulated ROS 2 nodes to physical hardware']
    }
  ];

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#A3FF35]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C17] border border-white/15 text-xs font-mono text-[#A3FF35] uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5 text-[#A3FF35]" />
            <span>AUTONOMOUS SYSTEMS & INTELLIGENCE // ADB LABS</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black font-heading text-white tracking-tight">
            Building Intelligent <br />
            <span className="text-[#A3FF35]">Machines.</span>
          </h1>

          <p className="text-[#A3ADA5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Advancing practical autonomous mobile robots, computer vision perception, embedded STM32/CAN firmware, and kinematic physics simulation — from CAD blueprints to deployed field hardware.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.25)] flex items-center gap-2 font-heading"
            >
              <span>Discuss an R&D Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/internship"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition"
            >
              <span>Explore Robotics Internship</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Platform Hardware Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              PLATFORM PROTOTYPES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Autonomous Hardware Fleet.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-3">
              Explore our core mobile robotics platforms spanning 3D LiDAR AMRs, dynamic quadruped locomotion, and 6-axis manipulation.
            </p>
          </div>

          <RoboticsTitanGallery />
        </div>
      </section>

      {/* 4 Core Focus Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
        <div className="max-w-7xl mx-auto text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              TECHNICAL COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Four Pillars of Robotics R&D.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-[#101C17] border border-white/10 space-y-4 hover:border-[#A3FF35]/40 transition group shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-center text-[#A3FF35] group-hover:scale-105 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {area.title}
                  </h3>
                  <div className="text-xs font-mono text-[#A3FF35]">
                    {area.tagline}
                  </div>
                  <p className="text-sm text-[#A3ADA5] leading-relaxed">
                    {area.desc}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-[#A3ADA5]">
                    {area.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#A3FF35] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* R&D Workflow */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-left space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              RESEARCH METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              From Kinematics to Real World.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Problem Discovery', desc: 'Define operating domain, payload dynamics, and environmental terrain hazards.' },
              { step: '02', title: 'URDF & Physics Sim', desc: 'Model mass properties, joints, and collision bounds in Gazebo/Isaac Sim.' },
              { step: '03', title: 'Embedded Electronics', desc: 'Design STM32 motor controllers, isolated CAN buses, and sensor arrays.' },
              { step: '04', title: 'Autonomous Stack', desc: 'Deploy ROS 2 Nav2, SLAM Cartographer, and real-time YOLO perception.' },
              { step: '05', title: 'Field Stress Testing', desc: 'Subject physical prototypes to extreme outdoor terrain and thermal tests.' }
            ].map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#091310] border border-white/10 space-y-2">
                <span className="text-xl font-heading font-black text-[#A3FF35]">{st.step}</span>
                <div className="font-heading font-bold text-white text-sm">{st.title}</div>
                <p className="text-xs text-[#A3ADA5] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#091310] text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Discuss an R&D Project.
          </h2>
          <p className="text-[#A3ADA5] text-base max-w-xl mx-auto">
            Partner with ADB Labs for autonomous mobile robotics development, computer vision integration, or embedded firmware consulting.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition font-heading shadow"
            >
              <span>Submit Project Brief</span>
            </Link>
            <Link
              to="/contact"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition"
            >
              <span>Contact Lab Team</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
