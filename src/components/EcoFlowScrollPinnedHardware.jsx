import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Battery, Zap, Sun, Layers, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function EcoFlowScrollPinnedHardware() {
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  // Scroll Progress across the 300vh pinned track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const stages = [
    {
      id: 'chassis',
      step: '01',
      title: 'Automotive Unibody Architecture',
      tagline: 'High-Strength Coastal Marine Chassis',
      icon: ShieldCheck,
      badge: 'Unibody Construction',
      image: '/images/ps1_titan_studio.jpg',
      stat: '350 KG',
      statLabel: 'Heavy-Duty Caster Load Rating',
      desc: 'Engineered for extreme coastal mobility. Reinforced aluminum alloy frame with 360° locking industrial casters and salt-spray corrosion resistant seals designed for seaside operations.',
      bullets: [
        'IP65 water & dust resistant seals for marine air',
        'Flush ergonomic aluminum recessed transport handles',
        'Vibration-damped structural cage protecting cell clusters'
      ]
    },
    {
      id: 'cells',
      step: '02',
      title: 'Automotive LiFePO₄ Prismatic Core',
      tagline: '3,500+ Cycles to 80% DoD with Active CAN BMS',
      icon: Battery,
      badge: '6.144 kWh Nominal Core',
      image: '/images/sol_ps1.png',
      stat: '3,500+',
      statLabel: 'Rated Full Cycles (>10 Year Lifespan)',
      desc: 'High-density lithium iron phosphate prismatic cells safe for tropical operating temperatures up to 55°C. Features multi-point thermal monitoring and active micro-second cell balancing.',
      bullets: [
        'Zero thermal runaway risk compared to ternary lithium',
        'CAN-bus linked active BMS with per-cell voltage telemetry',
        '90% safe continuous depth of discharge'
      ]
    },
    {
      id: 'inverter',
      step: '03',
      title: '3.0 kW Pure Sine Inverter & Dual MPPT',
      tagline: '6 kW Peak Surge with Dual 12V-150V Solar Tracking',
      icon: Zap,
      badge: '3000W Continuous Output',
      image: '/images/ps1_studio_render.jpg',
      stat: '6.0 kW',
      statLabel: 'Instant Inrush Surge Absorption',
      desc: 'Heavy-duty bidirectional inverter engineered to absorb sudden inductive inrush surges from commercial waffle irons, deep freezer compressors, and heavy blenders without brownouts.',
      bullets: [
        'Dual independent MPPT controllers accepting up to 2.88 kWp solar',
        '< 1.4% THD pure sine wave safe for sensitive electronics',
        'Sub-15ms automatic transfer for uninterrupted backup'
      ]
    },
    {
      id: 'modular',
      step: '04',
      title: 'Modular Quick-Connect Expansion Bus',
      tagline: 'Direct DC Coupling to 12.288 kWh Capacity',
      icon: Layers,
      badge: 'Scalable Energy Architecture',
      image: '/images/ps1_dual_stack_titan.jpg',
      stat: '12.288 kWh',
      statLabel: 'Total Dual-Stack Expanded Capacity',
      desc: 'Double your runtime in seconds. A high-amperage direct DC bus port allows an additional 6.144 kWh secondary module to latch securely onto the master unit without external cabling.',
      bullets: [
        'Quick-latch heavy-duty mechanical locking mechanism',
        'Auto-synchronizing dual BMS parallel communication',
        'Continuous 39.5 hours runtime for 280W commercial chillers'
      ]
    }
  ];

  // Listen to scroll progress to update active stage
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (val) => {
      if (val < 0.28) {
        setActiveStage(0);
      } else if (val < 0.55) {
        setActiveStage(1);
      } else if (val < 0.82) {
        setActiveStage(2);
      } else {
        setActiveStage(3);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Jump to stage on user click
  const scrollToStage = (index) => {
    setActiveStage(index);
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const targetScroll = containerTop + (containerHeight / 4) * index;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative w-full h-[320vh] bg-black">
      
      {/* Sticky Viewport Stage (EcoFlow Titan / Apple Pro Signature) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-20">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#38bdf8]/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        {/* Top Stage Header */}
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between z-10 pt-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping"></span>
              <span className="text-[11px] font-mono tracking-widest text-[#38bdf8] uppercase font-bold">
                Scroll-Driven Hardware Anatomy // Titan-C8
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white mt-1 tracking-tight">
              Modular Subsystem Architecture.
            </h3>
          </div>

          {/* Interactive Step Scrubber */}
          <div className="hidden md:flex items-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-xl">
            {stages.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollToStage(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
                  activeStage === idx 
                    ? 'bg-white text-black font-bold shadow-md' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{s.step}</span>
                <span className="hidden lg:inline">{s.badge}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Center Stage: Split Screen Hardware Render & Animated Feature Dossier */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-grow py-6">
          
          {/* Left Column: Photorealistic Hardware Studio Render */}
          <div className="lg:col-span-7 relative flex items-center justify-center h-[340px] sm:h-[420px] lg:h-[480px]">
            {/* Atmospheric Stage Halo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#38bdf8]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex items-center justify-center p-4"
              >
                <img
                  src={stages[activeStage].image}
                  alt={stages[activeStage].title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)]"
                />

                {/* Telemetry Pill Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">{stages[activeStage].statLabel}</div>
                    <div className="text-sm font-black text-white">{stages[activeStage].stat}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Narrative Dossier */}
          <div className="lg:col-span-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 rounded-[32px] bg-[#090b10] border border-white/[0.08] shadow-2xl relative overflow-hidden backdrop-blur-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] bg-[#38bdf8]/10 px-3 py-1 rounded-full font-bold border border-[#38bdf8]/20">
                    {stages[activeStage].step} // {stages[activeStage].badge}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    0{activeStage + 1} / 04
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {stages[activeStage].title}
                </h4>

                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {stages[activeStage].desc}
                </p>

                {/* Key Spec Bullets */}
                <div className="space-y-2.5 mt-6 pt-6 border-t border-white/[0.08]">
                  {stages[activeStage].bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Stage Progress Bar */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Scroll down to explore next module
                  </span>
                  <div className="flex items-center gap-1.5">
                    {stages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all ${
                          activeStage === idx ? 'w-6 bg-[#38bdf8]' : 'w-1.5 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Mobile Scrub Indicator */}
        <div className="md:hidden flex items-center justify-center gap-2 pt-2 z-10">
          {stages.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => scrollToStage(idx)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${
                activeStage === idx 
                  ? 'bg-white text-black' 
                  : 'bg-white/10 text-neutral-400'
              }`}
            >
              {s.step}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}
