import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Activity, Award, Bot, CheckCircle2, ArrowRight, Sparkles, BookOpen, Clock } from 'lucide-react';

export default function InternshipRoadmapInteractive({ onApplyClick }) {
  const [activeWeek, setActiveWeek] = useState(0);

  const stats = [
    { label: 'Program Duration', value: '6 Weeks', icon: Calendar, sub: 'Structured Cohort' },
    { label: 'Live Masterclasses', value: '18 Sessions', icon: Activity, sub: 'Live Mentor-Led' },
    { label: 'Milestone Capstone', value: '1 Demonstration', icon: Award, sub: 'Simulated Autonomous Mission' },
    { label: 'Target Disciplines', value: 'All Engineering', icon: Bot, sub: 'CSE, AI/ML, ECE, EEE, Mech' }
  ];

  const weeks = [
    {
      week: 'Week 01',
      title: 'Robotics Foundations & Architecture',
      tagline: 'Linux Environment, Coordinate Frames & Kinematic Reference',
      icon: '01',
      description: 'Establish rigorous foundations in robot anatomy, degree-of-freedom kinematics, sensor topology, and Linux shell workflows essential for professional robotics development.',
      topics: [
        'Linux command-line, Bash scripting & development toolchains',
        'Coordinate frames, transformation matrices & Euler angles',
        'Actuator types, encoder feedback & motor control theory',
        'Python 3 programming patterns for robotics data processing'
      ],
      deliverable: 'Linux robotics workstation configured with virtual environment and URDF syntax checkers.'
    },
    {
      week: 'Week 02',
      title: 'ROS 2 Architecture & Robot Modeling',
      tagline: 'Nodes, Topics, Services, Actions & URDF Setup',
      icon: '02',
      description: 'Master ROS 2 Humble/Jazzy architecture. Create modular computational graphs, author XML robot descriptions (URDF/Xacro), and simulate physical bodies inside Gazebo.',
      topics: [
        'ROS 2 computation graphs: publisher, subscriber & service nodes',
        'Custom interface definitions (.msg & .srv) and parameters',
        'Authoring URDF/Xacro models with visual and collision geometry',
        'Gazebo physics engine setup with gravity, friction & mass inertia'
      ],
      deliverable: 'Fully modeled 4-wheel mobile robot spawning and driving inside custom Gazebo simulation worlds.'
    },
    {
      week: 'Week 03',
      title: 'Kinematics, Odometry & Motion Control',
      tagline: 'Differential Drive Models, Wheel Odometry & PID Tuning',
      icon: '03',
      description: 'Implement mathematical kinematic models converting velocity commands (cmd_vel) into individual wheel speeds, with real-time dead reckoning and PID feedback.',
      topics: [
        'Differential drive forward & inverse kinematics formulation',
        'Wheel encoder tick integration & dead-reckoning odometry',
        'IMU sensor fusion for heading drift compensation',
        'Closed-loop velocity PID controllers with anti-windup'
      ],
      deliverable: 'Custom ROS 2 controller publishing accurate odometry transforms (odom -> base_link).'
    },
    {
      week: 'Week 04',
      title: 'Computer Vision & Edge Perception',
      tagline: 'OpenCV Pipelines, Depth Streaming & Neural Detection',
      icon: '04',
      description: 'Integrate stereo camera streams and 2D/3D visual perception. Process RGB-D data streams, apply color filtering, and deploy edge neural models for real-time detection.',
      topics: [
        'Camera calibration, projection matrices & stereo vision basics',
        'OpenCV image preprocessing, color thresholding & contour tracking',
        'RGB-D depth image slicing and 3D point cloud generation',
        'Deploying YOLOv8 neural networks for real-time obstacle inference'
      ],
      deliverable: 'Vision pipeline identifying objects and publishing 3D spatial target coordinates.'
    },
    {
      week: 'Week 05',
      title: 'Autonomous Navigation (Nav2 Stack)',
      tagline: '2D/3D SLAM Mapping, Costmaps & Waypoint Following',
      icon: '05',
      description: 'Deploy the complete ROS 2 Nav2 navigation framework. Generate 2D occupancy grids with Cartographer SLAM, configure local/global costmaps, and track autonomous trajectories.',
      topics: [
        'Simultaneous Localization and Mapping (SLAM) with LiDAR',
        'Global path planning using A* and Dijkstra graph search',
        'Local path execution with Dynamic Window Approach (DWB)',
        'Behavior Trees for recovery actions and waypoint sequencing'
      ],
      deliverable: 'Autonomous mobile robot navigating dynamic warehouse environments with zero collisions.'
    },
    {
      week: 'Week 06',
      title: 'Industrial Capstone Demonstration',
      tagline: 'Full-Mission Autonomous Delivery & Docking Simulation',
      icon: '06',
      description: 'Synthesize all 6 weeks into a mission-grade simulated capstone. Your robot independently maps an unknown facility, locates cargo, avoids dynamic obstacles, and docks safely.',
      topics: [
        'Full mission lifecycle automation with ROS 2 Behavior Trees',
        'Multi-sensor failover handling and telemetry monitoring',
        'Technical report compilation and architecture diagramming',
        'Live demonstration and code defense before ADB Labs mentors'
      ],
      deliverable: 'End-to-end verified autonomous robot capstone project portfolio ready for industry recruitment.'
    }
  ];

  return (
    <div className="w-full">
      {/* 4 Program Matrix Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-[#090b10] border border-white/[0.08] text-center backdrop-blur-xl shadow-xl flex flex-col items-center justify-between"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38bdf8] mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white">{item.value}</div>
              <div className="text-xs font-semibold text-neutral-400 mt-1">{item.label}</div>
              <div className="text-[10px] text-neutral-500 font-mono mt-0.5">{item.sub}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive 6-Week Progress Roadmap */}
      <div className="p-8 sm:p-12 rounded-[32px] bg-[#090b10] border border-white/[0.08] shadow-2xl relative overflow-hidden backdrop-blur-2xl text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Roadmap Top Header & Scrubber */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#38bdf8] uppercase font-bold">
              Progressive Curriculum Roadmap
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              6-Week Learning Journey
            </h3>
          </div>

          {/* Week Selector Chips */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] p-1.5 rounded-full border border-white/10">
            {weeks.map((w, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWeek(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition flex items-center gap-1.5 ${
                  activeWeek === idx
                    ? 'bg-white text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>W{idx + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Week Interactive Deep Dive */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Weekly Focus & Description */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-3 py-1 rounded-full border border-[#38bdf8]/20">
                    {weeks[activeWeek].week}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    Module 0{activeWeek + 1} of 06
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {weeks[activeWeek].title}
                </h4>

                <p className="text-sm text-[#38bdf8] font-medium">
                  {weeks[activeWeek].tagline}
                </p>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {weeks[activeWeek].description}
                </p>

                {/* Practical Milestone Box */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mt-4">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                    Week {activeWeek + 1} Verified Milestone Deliverable:
                  </span>
                  <span className="text-xs font-semibold text-neutral-200">
                    {weeks[activeWeek].deliverable}
                  </span>
                </div>
              </div>

              {/* Right Column: Weekly Curriculum Checklist */}
              <div className="lg:col-span-5 bg-white/[0.02] p-6 sm:p-7 rounded-2xl border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-xs font-mono uppercase text-[#38bdf8] font-bold">
                    Key Competencies Acquired
                  </span>
                  <Clock className="w-4 h-4 text-neutral-500" />
                </div>

                <div className="space-y-3">
                  {weeks[activeWeek].topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-3 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Simulation First Guarantee */}
                <div className="pt-3 border-t border-white/[0.06] text-[11px] text-neutral-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Simulation-first learning: zero physical hardware purchase required.</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA Deck */}
        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            Applications opening soon for upcoming cohort. Selected candidates receive syllabus and mentor timetable.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onApplyClick}
              className="w-full sm:w-auto bg-white hover:bg-neutral-200 text-black font-extrabold text-xs px-8 py-3.5 rounded-full transition shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Apply (Opening Soon)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
