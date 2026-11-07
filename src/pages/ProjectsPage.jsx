import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck, Zap, Bot, Sun, Cpu } from 'lucide-react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Energy', 'Solar', 'Robotics', 'Engineering', 'Research'];

  const projects = [
    {
      id: 'besant-nagar',
      slug: '/projects/besant-nagar-off-grid-system',
      title: 'Besant Nagar Beach Off-Grid Solar System',
      category: 'Energy',
      subCategory: 'Solar',
      featured: true,
      location: 'Besant Nagar Coast, Chennai, Tamil Nadu',
      status: 'Live Field Pilot · Validated',
      image: '/images/besant_wide.png',
      desc: 'Commercial off-grid solar and LiFePO₄ storage installation powering a retail coastal fish stall with 12.288 kWh battery and 2.88 kWp bifacial solar, completely eliminating diesel emissions and noise.',
      specs: [
        { label: 'Storage', val: '12.288 kWh LFP' },
        { label: 'Solar Array', val: '2.88 kWp Bifacial' },
        { label: 'Fuel Saved', val: '100% (₹14,000/mo)' }
      ]
    },
    {
      id: 'amr-warehouse',
      slug: '/robotics-rd',
      title: '3D LiDAR Autonomous Mobile Robot Platform',
      category: 'Robotics',
      subCategory: 'Research',
      featured: false,
      location: 'ADB Labs Robotics Facility, Chennai',
      status: 'Active R&D · Prototype Rev 2.1',
      image: '/images/amr_lidar_robot_titan.jpg',
      desc: 'Heavy-payload 150kg mobile robotics base equipped with 360° 3D LiDAR SLAM, ROS 2 Nav2 autonomous path planning, and dual RealSense depth vision for indoor/outdoor navigation.',
      specs: [
        { label: 'Payload', val: '150 kg base' },
        { label: 'Navigation', val: 'ROS 2 Nav2 SLAM' },
        { label: 'Perception', val: '3D LiDAR + Depth' }
      ]
    },
    {
      id: 'quadruped-gait',
      slug: '/robotics-rd',
      title: 'Quadruped Dynamic Locomotion & Gait Stabilization',
      category: 'Robotics',
      subCategory: 'Engineering',
      featured: false,
      location: 'Kinematics & Simulation Lab, Chennai',
      status: 'Simulation & Kinematic Testing',
      image: '/images/robot_dog_titan.jpg',
      desc: '12-DoF high-torque brushless quadruped platform featuring real-time STM32 CAN-bus motor control, IMU-assisted balance stabilization, and Gazebo/Isaac Sim physical validation.',
      specs: [
        { label: 'Actuation', val: '12-DoF Brushless' },
        { label: 'Controller', val: 'STM32 CAN-Bus' },
        { label: 'Simulation', val: 'Isaac Sim / Gazebo' }
      ]
    },
    {
      id: 'robotic-manipulator',
      slug: '/robotics-rd',
      title: '6-Axis Industrial Robotic Manipulator & Vision',
      category: 'Engineering',
      subCategory: 'Research',
      featured: false,
      location: 'Automation Testbench, Chennai',
      status: 'Vision Guided Assembly Prototype',
      image: '/images/robotic_arm_titan.jpg',
      desc: 'High-precision 6-axis articulated arm featuring MoveIt 2 trajectory planning and edge YOLOv8 computer vision sorting for industrial assembly and pick-and-place automation.',
      specs: [
        { label: 'Payload', val: '5 kg Payload' },
        { label: 'Accuracy', val: '±0.05 mm Repeatability' },
        { label: 'Vision', val: 'YOLOv8 Edge AI' }
      ]
    },
    {
      id: 'ps1-hardware-eval',
      slug: '/power-stations/adb-ps1',
      title: 'PS1 Commercial Energy Storage Architecture',
      category: 'Energy',
      subCategory: 'Engineering',
      featured: false,
      location: 'Power Systems Testbench, Chennai',
      status: 'Field Hardware Pre-Production',
      image: '/images/ps1_titan_studio.jpg',
      desc: 'Design and validation of a 3kW pure sine bidirectional inverter integrated with 6.144 kWh LiFePO₄ prismatic cells and dual 12V–150V MPPT solar tracking for commercial kiosk electrification.',
      specs: [
        { label: 'Continuous', val: '3,000 W Output' },
        { label: 'Inrush Peak', val: '6,000 W Surge' },
        { label: 'Cell Life', val: '3,500+ Cycles' }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter || p.subCategory === activeFilter);

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A3FF35]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
            PORTFOLIO // FIELD DEPLOYMENTS & R&D
          </span>
          <h1 className="text-5xl sm:text-7xl font-black font-heading text-white tracking-tight">
            Engineering Projects.
          </h1>
          <p className="text-[#A3ADA5] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Real-world off-grid energy installations and autonomous robotics prototypes moving from CAD models and simulation to physical field deployment.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filters.map((fil) => (
              <button
                key={fil}
                onClick={() => setActiveFilter(fil)}
                className={`px-5 py-2 rounded-full text-xs font-heading font-bold transition ${
                  activeFilter === fil
                    ? 'bg-[#A3FF35] text-black shadow-[0_0_15px_rgba(163,255,55,0.3)]'
                    : 'bg-[#101C17] text-[#A3ADA5] hover:text-white border border-white/10'
                }`}
              >
                {fil}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 sm:p-8 rounded-3xl bg-[#091310] border border-white/10 hover:border-[#A3FF35]/40 transition flex flex-col justify-between group shadow-xl ${
                    proj.featured ? 'md:col-span-2 lg:col-span-2 bg-[#101C17]' : ''
                  }`}
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3FF35] bg-[#A3FF35]/15 px-3 py-1 rounded-full border border-[#A3FF35]/30 font-bold">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#68776D]">
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#A3FF35] transition">
                      {proj.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-[#68776D] mt-2 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#A3FF35]" />
                      <span>{proj.location}</span>
                    </div>

                    {/* Image */}
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#050B0A] border border-white/10 my-4 flex items-center justify-center p-2 relative">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500 rounded-xl"
                      />
                    </div>

                    <p className="text-[#A3ADA5] text-xs sm:text-sm leading-relaxed mb-6">
                      {proj.desc}
                    </p>

                    {/* Specs Pill Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-white/10 font-mono text-[11px]">
                      {proj.specs.map((s, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-[#050B0A] border border-white/[0.06] text-center">
                          <div className="text-[9px] text-[#68776D]">{s.label}</div>
                          <div className="font-bold text-white mt-0.5">{s.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to={proj.slug}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#A3FF35] hover:text-white transition font-heading"
                    >
                      <span>Explore Project Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Engineering Challenge Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#091310] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Have a custom engineering challenge?
          </h2>
          <p className="text-[#A3ADA5] text-base max-w-xl mx-auto">
            From specialized off-grid deployments to bespoke robotics research — collaborate directly with our engineers.
          </p>
          <div className="pt-4">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition font-heading shadow"
            >
              <span>Submit Project Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
