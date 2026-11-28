import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Battery, 
  Sun, 
  Bot, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Activity,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ItelProductMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'portable', label: 'Portable Power (PS1)' },
    { id: 'commercial', label: 'Commercial Off-Grid' },
    { id: 'robotics', label: 'Robotics & Autonomous R&D' },
    { id: 'battery', label: 'Modular Battery Storage' }
  ];

  const products = [
    {
      id: 'adb-ps1-core',
      category: 'portable',
      title: 'ADB PS1 Power Station',
      badge: 'Flagship Core Hardware',
      capacity: '3.0 kW Pure Sine | 6.144 kWh',
      tagline: 'Automotive LiFePO₄ all-in-one mobile power station with pure sine inverter and active BMS.',
      image: '/images/ps1_titan_studio.jpg',
      specs: [
        { label: 'Continuous Output', value: '3,000 W Pure Sine (< 1.4% THD)' },
        { label: 'Battery Chemistry', value: 'LiFePO₄ Prismatic (3,500+ Cycles)' },
        { label: 'Transfer Speed', value: '< 15ms Seamless UPS Switching' },
        { label: 'Solar Harvest', value: 'Dual MPPT (Up to 2.88 kWp Solar)' }
      ],
      link: '/power-stations/adb-ps1',
      actionText: 'Explore PS1 Architecture',
      secondaryAction: '/get-a-quote',
      secondaryText: 'Request Quote'
    },
    {
      id: 'adb-ps1-dual',
      category: 'portable',
      title: 'ADB PS1 Dual-Stack Expansion',
      badge: 'Expanded High-Capacity System',
      capacity: '6.0 kW Surge | 12.288 kWh',
      tagline: 'Direct DC quick-connect bus expands capacity to 12.288 kWh for extended commercial runtimes.',
      image: '/images/ps1_dual_stack_titan.jpg',
      specs: [
        { label: 'Combined Storage', value: '12.288 kWh Automotive LiFePO₄' },
        { label: 'Peak Surge Absorption', value: '6,000 W Heavy Inductive Load' },
        { label: 'Expansion Bus', value: 'Direct DC Latch Coupling' },
        { label: 'Runtime at 1kW', value: '~11.5 Continuous Hours' }
      ],
      link: '/power-stations/adb-ps1',
      actionText: 'View Dual-Stack Specs',
      secondaryAction: '/get-a-quote',
      secondaryText: 'Inquire Capacity'
    },
    {
      id: 'besant-commercial',
      category: 'commercial',
      title: 'Commercial Off-Grid Microgrid',
      badge: 'Turnkey Commercial Pilot',
      capacity: '2.88 kWp Bifacial Solar | 100% Diesel-Free',
      tagline: 'Field-deployed off-grid power replacement for commercial retail stalls, saving ₹14,000/month.',
      image: '/images/commercial_solar.jpg',
      specs: [
        { label: 'Solar Generation', value: '4x 720W Bifacial Panels (2.88 kWp)' },
        { label: 'Storage Cluster', value: '12.288 kWh LiFePO₄ Pack' },
        { label: 'Diesel Elimination', value: '100% Silent, Zero Toxic Exhaust' },
        { label: 'Application', value: 'Besant Nagar Coastal Seafood Stall' }
      ],
      link: '/projects/besant-nagar-off-grid-system',
      actionText: 'Read Field Case Study',
      secondaryAction: '/get-a-quote',
      secondaryText: 'Design Off-Grid System'
    },
    {
      id: 'orzo-robotics',
      category: 'robotics',
      title: 'ORZO Quadruped Locomotion Platform',
      badge: 'Dynamic Autonomous Robotics',
      capacity: '12-DoF Brushless Actuation | STM32 CAN-FD',
      tagline: 'Bio-inspired quadruped dynamic walking robot engineered for harsh terrain traversal and inspection.',
      image: '/images/orzo_robot_dog.jpg',
      specs: [
        { label: 'Actuation', value: '12-Axis High-Torque Brushless Motors' },
        { label: 'Gait Engine', value: '1.8 Hz Trotting with Active Compliance' },
        { label: 'Perception Stack', value: 'Stereo Depth IR + NVIDIA Edge AI' },
        { label: 'Firmware & Bus', value: 'Sub-millisecond STM32 CAN-FD' }
      ],
      link: '/robotics-rd',
      actionText: 'Explore Robotics R&D',
      secondaryAction: '/about',
      secondaryText: 'Research Division'
    },
    {
      id: 'custom-lifepo4',
      category: 'battery',
      title: 'Custom LiFePO₄ Battery Storage Packs',
      badge: 'Modular Engineering',
      capacity: '12V - 96V Architectures | Up to 30 kWh',
      tagline: 'Custom engineered lithium iron phosphate battery packs with laser-welded busbars and active BMS.',
      image: '/images/sol_ps1.png',
      specs: [
        { label: 'Cell Type', value: 'Grade-A Prismatic LFP Cells' },
        { label: 'Thermal Safety', value: 'Zero Runaway Risk Up to 55°C' },
        { label: 'BMS Protection', value: 'CAN / RS485 Active Balancing' },
        { label: 'Enclosure', value: 'IP65 Marine Coastal Corrosion Proof' }
      ],
      link: '/energy-solutions',
      actionText: 'Custom Battery Specs',
      secondaryAction: '/get-a-quote',
      secondaryText: 'Request Pack Spec'
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tab Filter Strip (Inspired by energy.itel-life.com product tabs) */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 scrollbar-none">
        <div className="inline-flex items-center p-1.5 rounded-full bg-[#101C17] border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#A3FF35] text-black shadow-[0_0_20px_rgba(163,255,55,0.35)] font-bold'
                  : 'text-[#A3ADA5] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid - Clean, Static & Responsive (No slide traps) */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10"
      >
        <AnimatePresence>
          {filteredProducts.map((prod) => (
            <motion.div
              layout
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group tilt-card rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between text-left relative overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(163,255,55,0.25)] noise-card"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3FF35]/5 rounded-full blur-3xl group-hover:bg-[#A3FF35]/10 transition pointer-events-none"></div>
              {/* Rotating conic border */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{ padding: 1 }}>
                <div className="absolute inset-0 rounded-3xl animate-spin-slow" style={{ background: 'conic-gradient(from 0deg, transparent, #A3FF35, transparent 30%)' }} />
              </div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3FF35] bg-[#A3FF35]/10 px-3 py-1 rounded-full font-bold border border-[#A3FF35]/25">
                    {prod.badge}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white group-hover:text-[#A3FF35] transition-colors leading-tight">
                  {prod.title}
                </h3>
                
                {/* Power / Capacity Stat Pill */}
                <div className="mt-2 text-xs font-mono font-semibold text-[#A3ADA5] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#A3FF35]" />
                  <span>{prod.capacity}</span>
                </div>

                {/* Product Image Frame */}
                <div className="relative aspect-[16/11] my-5 rounded-2xl overflow-hidden bg-[#050B0A] border border-white/10 flex items-center justify-center p-4 group-hover:border-white/20 transition">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <p className="text-xs sm:text-sm text-[#A3ADA5] leading-relaxed line-clamp-2">
                  {prod.tagline}
                </p>

                {/* Tech Specs Matrix */}
                <div className="mt-5 space-y-2 pt-4 border-t border-white/10 font-mono text-[11px]">
                  {prod.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-[#68776D]">{sp.label}</span>
                      <span className="text-white font-sans font-semibold text-right">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <Link
                  to={prod.link}
                  className="flex-1 bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs py-3 px-4 rounded-xl transition text-center flex items-center justify-center gap-1.5 font-heading shadow"
                >
                  <span>{prod.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={prod.secondaryAction}
                  className="bg-[#050B0A] hover:bg-white/10 text-white border border-white/15 font-semibold text-xs py-3 px-3.5 rounded-xl transition text-center"
                >
                  {prod.secondaryText}
                </Link>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
