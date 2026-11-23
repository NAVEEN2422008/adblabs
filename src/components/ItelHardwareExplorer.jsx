import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Battery, 
  Zap, 
  Sun, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Gauge,
  Activity,
  Cpu
} from 'lucide-react';

export default function ItelHardwareExplorer() {
  const [activePillar, setActivePillar] = useState('chemistry');

  const pillars = [
    {
      id: 'chemistry',
      tabLabel: 'LiFePO₄ Chemistry',
      icon: Battery,
      badge: 'Automotive Prismatic LFP',
      title: 'Automotive LiFePO₄ Prismatic Core',
      tagline: '3,500+ Full Cycles with Active Microsecond CAN-Bus Balancing',
      desc: 'Engineered with premium lithium iron phosphate prismatic cells designed for tropical ambient temperatures up to 55°C. Features active CAN-bus BMS telematics, continuous thermal monitoring, and zero thermal runaway risk compared to ternary lithium.',
      image: '/images/sol_ps1.png',
      statPrimary: '3,500+',
      statLabel: 'Full Discharge Cycles (>10 Year Lifespan)',
      specs: [
        { label: 'Nominal Chemistry', value: 'LiFePO₄ Prismatic Core' },
        { label: 'Core Usable Energy', value: '6.144 kWh @ 90% DoD' },
        { label: 'Thermal Safety', value: 'Zero Runaway Up to 55°C' },
        { label: 'BMS Protection', value: 'Over-volt, Short & Thermal Interlock' }
      ],
      points: [
        'Zero toxic heavy metals, non-combustible chemical formulation',
        'Active per-cell microsecond voltage balancing via CAN bus',
        'Automotive-grade compression busbars with silicone vibration dampers'
      ]
    },
    {
      id: 'inverter',
      tabLabel: 'Pure Sine Inverter',
      icon: Zap,
      badge: '3.0 kW Continuous / 6 kW Surge',
      title: '3.0 kW Pure Sine Inverter & UPS Transfer',
      tagline: '< 1.4% THD Clean Waveform with Sub-15ms Transfer Time',
      desc: 'Commercial-grade bidirectional inverter engineered to absorb heavy inductive motor inrush spikes from deep freezers, waffle irons, pumps, and lab equipment without voltage drop or harmonic distortion.',
      image: '/images/ps1_titan_studio.jpg',
      statPrimary: '< 15 ms',
      statLabel: 'Automatic Seamless Transfer Switch',
      specs: [
        { label: 'Continuous Rating', value: '3,000 W Pure Sine Wave' },
        { label: 'Surge Tolerance', value: '6,000 W Peak Inrush Absorption' },
        { label: 'Harmonic Distortion', value: '< 1.4% THD (Cleaner than Grid)' },
        { label: 'Output Ports', value: 'Dual 16A Industrial AC Sockets' }
      ],
      points: [
        'Safe for sensitive medical, lab, and computing electronics',
        'Sub-15ms auto-transfer keeps chillers and servers powered during grid cuts',
        'Galvanically isolated high-frequency toroidal magnetic architecture'
      ]
    },
    {
      id: 'solar',
      tabLabel: 'Dual MPPT Solar',
      icon: Sun,
      badge: 'Dual 12V-150V MPPT Tracking',
      title: 'High-Yield Dual MPPT Solar Harvesting',
      tagline: 'Supports up to 2.88 kWp Solar Generation with 99.2% MPPT Efficiency',
      desc: 'Independent dual solar tracking controllers maximize solar harvest across varying roof orientations and partial shading. Direct high-voltage inputs enable fast 2.5-hour complete off-grid recharging from solar panels alone.',
      image: '/images/besant_wide.png',
      statPrimary: '2.88 kWp',
      statLabel: 'Maximum Solar PV Ingress Capacity',
      specs: [
        { label: 'MPPT Tracking Channels', value: 'Dual Independent Channels' },
        { label: 'Voltage Window', value: '12V - 150V Wide VOC Range' },
        { label: 'Recharge Time', value: '~2.5 Hours Under Direct Sun' },
        { label: 'Bifacial Harvest', value: 'Up to +25% Ground Albedo Yield' }
      ],
      points: [
        'Autonomous morning cold-start solar MPPT lock algorithm',
        'Compatible with residential and industrial bifacial solar arrays',
        'Dual Anderson SB50 high-amperage quick-connect inputs'
      ]
    },
    {
      id: 'modular',
      tabLabel: 'Modular Expansion',
      icon: Layers,
      badge: 'Direct DC Quick-Connect Bus',
      title: 'Direct DC Hot-Expansion Architecture',
      tagline: 'Scale Seamlessly from 6.144 kWh to 12.288 kWh Without External Wiring',
      desc: 'Double your stored runtime in seconds. A precision-engineered direct DC latching bus connects an auxiliary 6.144 kWh storage module directly to the master unit, auto-synchronizing battery management and current sharing.',
      image: '/images/ps1_dual_stack_titan.jpg',
      statPrimary: '12.288 kWh',
      statLabel: 'Expanded Dual-Module Storage Capacity',
      specs: [
        { label: 'Expansion Mechanism', value: 'Heavy-Duty Mechanical Locking Latch' },
        { label: 'Inter-Pack Bus', value: 'Gold-Plated Solid Copper DC Busbars' },
        { label: 'Communication Link', value: 'Auto-Synchronizing Dual CAN BMS' },
        { label: 'Mobility Chassis', value: '360° Industrial Heavy-Load Casters' }
      ],
      points: [
        'Zero messy external umbilical cables or terminal crimping required',
        'Full load balancing ensures equal cycle aging across cell groups',
        'IP65 marine coastal air seals protect internal electronics from salt fog'
      ]
    }
  ];

  const currentPillar = pillars.find(p => p.id === activePillar) || pillars[0];
  const IconComponent = currentPillar.icon;

  return (
    <div className="w-full">
      {/* Pillar Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {pillars.map((pil) => {
          const PilIcon = pil.icon;
          const isActive = pil.id === activePillar;
          return (
            <button
              key={pil.id}
              onClick={() => setActivePillar(pil.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-[#101C17] border border-[#A3FF35] text-[#A3FF35] shadow-[0_0_25px_rgba(163,255,55,0.2)] font-bold'
                  : 'bg-[#101C17]/60 border border-white/10 text-[#A3ADA5] hover:text-white hover:bg-[#101C17]'
              }`}
            >
              <PilIcon className={`w-4 h-4 ${isActive ? 'text-[#A3FF35]' : 'text-[#68776D]'}`} />
              <span>{pil.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage - Clean 2-Column Bento (No scroll trapping!) */}
      <div className="rounded-3xl bg-[#101C17] border border-white/10 p-6 sm:p-10 lg:p-12 text-left relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#A3FF35]/5 rounded-full blur-[140px] pointer-events-none"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Spec Highlights & Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3FF35] bg-[#A3FF35]/10 px-3.5 py-1.5 rounded-full font-bold border border-[#A3FF35]/30 inline-flex items-center gap-2">
                  <IconComponent className="w-3.5 h-3.5 text-[#A3FF35]" />
                  <span>{currentPillar.badge}</span>
                </span>
                <span className="text-[11px] font-mono text-[#68776D]">
                  ENGINEERING SPECIFICATION // REV 3.2
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-black font-heading text-white leading-tight">
                  {currentPillar.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#A3FF35] mt-2">
                  {currentPillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#A3ADA5] mt-3 leading-relaxed">
                  {currentPillar.desc}
                </p>
              </div>

              {/* Big Stat Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-black text-[#A3FF35]">
                    {currentPillar.statPrimary}
                  </div>
                  <div className="text-xs text-[#A3ADA5] mt-0.5">
                    {currentPillar.statLabel}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#101C17] border border-white/10 flex items-center justify-center text-[#A3FF35]">
                  <Activity className="w-5 h-5" />
                </div>
              </div>

              {/* Technical Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {currentPillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#A3ADA5]">
                    <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/power-stations/adb-ps1"
                  className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-6 py-3 rounded-full transition flex items-center gap-2 font-heading shadow"
                >
                  <span>Full PS1 Technical Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/get-a-quote"
                  className="bg-[#050B0A] hover:bg-white/10 text-white border border-white/15 font-semibold text-xs px-5 py-3 rounded-full transition"
                >
                  <span>Consult Engineering Team</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Visual Frame with Specs Matrix */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#050B0A] border border-white/10 p-6 flex items-center justify-center group shadow-xl">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#101C17]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#A3FF35] border border-white/10">
                  VERIFIED HARDWARE
                </div>
              </div>

              {/* Telemetry Matrix */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#050B0A] border border-white/10 space-y-2 font-mono text-[11px]">
                <div className="text-[10px] text-[#68776D] font-bold uppercase tracking-wider mb-2">
                  Bench Tested Specs
                </div>
                {currentPillar.specs.map((sp, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-[#68776D]">{sp.label}</span>
                    <span className="text-white font-sans font-semibold text-right">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
