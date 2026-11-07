import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Home, Sun, Bot, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function OurSolutionsBento({ onSelectSolution }) {
  const solutions = [
    {
      id: 'portable-power',
      anchor: 'hardware',
      title: 'Portable Power Stations',
      tagline: 'Flagship ADB Labs PS1 Hardware',
      desc: 'All-in-one, portable and expandable LiFePO₄ power stations engineered for demanding commercial workloads.',
      image: '/images/ps1_titan_studio.jpg',
      badge: 'Flagship Hardware',
      stats: '3.0 kW / 6.1 ~ 12.3 kWh',
      features: ['Automotive LiFePO₄ prismatic cells', '3.0 kW pure sine wave inverter', 'Modular expansion quick-connect bus']
    },
    {
      id: 'home-backup',
      anchor: 'packages',
      title: 'Home Backup Systems',
      tagline: 'Seamless Residential Power Continuity',
      desc: 'Keep your home essentials running quietly and smoothly through extended grid outages with zero fumes and zero noise.',
      image: '/images/waffle_stall_titan.jpg',
      badge: 'Residential & Essential',
      stats: '< 15ms Transfer Time',
      features: ['Sub-15ms automatic transfer switch', 'Zero toxic fumes — safe indoors', 'Silent < 30 dB nighttime operation']
    },
    {
      id: 'off-grid',
      anchor: 'besant',
      title: 'Off-Grid Power Systems',
      tagline: 'Commercial Solar Microgrids',
      desc: 'Complete high-yield solar power systems tailored for retail stalls, coastal fish kiosks, and remote commercial locations.',
      image: '/images/besant_wide.png',
      badge: 'Commercial Field Pilot',
      stats: '2.88 kWp Bifacial Solar',
      features: ['Custom rooftop and stall solar racking', 'Dual MPPT high-efficiency controllers', '100% solar self-sufficiency']
    },
    {
      id: 'robotics-rd',
      anchor: 'robotics',
      title: 'Robotics & AI R&D',
      tagline: 'Autonomous Mobile & Quadruped Systems',
      desc: 'Research, simulation and rapid prototyping in autonomous mobile robotics, 3D LiDAR SLAM, and embedded firmware.',
      image: '/images/robot_dog_titan.jpg',
      badge: 'Autonomous Systems',
      stats: 'ROS 2 & Nav2 Stack',
      features: ['Gazebo & Isaac Sim physics modeling', '360° 3D LiDAR SLAM navigation', 'Low-latency STM32 CAN-bus controllers']
    }
  ];

  const handleScroll = (anchor) => {
    const el = document.getElementById(anchor);
    if (el) {
      const offset = 70;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            onClick={() => handleScroll(item.anchor)}
            className="group rounded-[32px] p-8 sm:p-10 bg-[#090b10] border border-white/[0.08] hover:border-[#38bdf8]/40 transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer shadow-2xl"
          >
            {/* Top ambient corner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#38bdf8]/5 rounded-full blur-3xl group-hover:bg-[#38bdf8]/15 transition pointer-events-none"></div>

            <div>
              {/* Header Badge & Stat */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] bg-[#38bdf8]/10 px-3 py-1 rounded-full font-bold border border-[#38bdf8]/20">
                  {item.badge}
                </span>
                <span className="text-xs font-mono font-bold text-white bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/10">
                  {item.stats}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#38bdf8] transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* Visual Hardware Showcase Frame */}
              <div className="relative aspect-[16/10] my-6 rounded-2xl overflow-hidden bg-black/60 border border-white/[0.06] flex items-center justify-center p-3 group-hover:border-white/20 transition">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Features List */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                {item.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Explore Button */}
            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-bold text-white group-hover:text-[#38bdf8] transition flex items-center gap-1.5">
                <span>Explore Solution</span>
              </span>
              <div className="w-9 h-9 rounded-full bg-white/[0.06] group-hover:bg-[#38bdf8] group-hover:text-black text-white flex items-center justify-center transition shadow">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
