import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Sun, 
  Cpu, 
  Wind, 
  Layers, 
  ArrowRight, 
  Check, 
  Sliders,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import PS1HardwareGraphic from './PS1HardwareGraphic';

export default function PS1ExplodedView({ onOpenQuote }) {
  const [activeModuleMode, setActiveModuleMode] = useState('single'); // 'single' (6.144 kWh) or 'expanded' (12.288 kWh)
  const [selectedSubsystem, setSelectedSubsystem] = useState('inverter');

  const subsystems = [
    {
      id: 'inverter',
      label: '3000W Pure Sine Inverter',
      icon: Zap,
      spec: '3,000 W Continuous / 6,000 W Surge Target',
      desc: 'Engineered for high startup surge loads including commercial refrigeration compressors, blenders, and power tools with <3% THD.',
      details: [
        'Pure sine wave AC waveform protecting sensitive logic boards',
        'Sub-20ms uninterruptible switchover behavior',
        'Over-current and high-temperature hardware latch protection'
      ]
    },
    {
      id: 'battery',
      label: 'LiFePO₄ Storage Core',
      icon: Battery,
      spec: '6.144 kWh Base (Scalable to 12.288 kWh)',
      desc: 'Premium Lithium Iron Phosphate cells providing superior thermal stability in tropical Indian climates compared to standard lithium chemistries.',
      details: [
        '4,000+ deep discharge cycles to 80% remaining capacity',
        'Non-combustible cathode material with zero fire hazard',
        'Active cell-level balancing for maximum capacity retention'
      ]
    },
    {
      id: 'mppt',
      label: 'Solar MPPT Charge Controller',
      icon: Sun,
      spec: 'High-Efficiency MPPT Tracker',
      desc: 'Extracts peak energy from high-output commercial monocrystalline panels even during overcast or early morning hours.',
      details: [
        'Fast dynamic tracking algorithm with >98% tracking efficiency',
        'Compatible with 2x 720W (Shop 1) or 4x 720W (Shop 2) panel configurations',
        'Simultaneous solar + AC dual charging support'
      ]
    },
    {
      id: 'bms',
      label: 'Smart Microcontroller BMS',
      icon: Cpu,
      spec: 'Microcontroller Protection & Telemetry Stack',
      desc: 'Real-time telemetry monitoring individual cell voltages, pack temperatures, current draw, and state-of-charge calculation.',
      details: [
        'Integrated diagnostic LCD with circular gauge readings',
        'CAN / RS485 digital communication bus for external robotics logging',
        'Multi-point NTC temperature sensing across FETs and battery core'
      ]
    },
    {
      id: 'cooling',
      label: 'Dual Forced Air & Dust Filtration',
      icon: Wind,
      spec: 'Variable-Speed Smart Fans & Removable Mesh',
      desc: 'Acoustically tuned, temperature-activated cooling channels designed to reject heat and filter airborne coastal sand and humidity.',
      details: [
        'Twin PWM controlled variable-speed intake fans',
        'Washable dust-filter mesh protecting sensitive electronics',
        'Thermally isolated battery and inverter compartments'
      ]
    }
  ];

  const currentSub = subsystems.find(s => s.id === selectedSubsystem) || subsystems[0];
  const isExpanded = activeModuleMode === 'expanded';

  return (
    <section id="architecture" className="py-24 bg-[#060709] relative overflow-hidden border-t border-[#141824]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] ambient-glow-green rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-green-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>MODULAR ENERGY ARCHITECTURE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Scale From <span className="text-green-400">6.144 kWh</span> to <span className="text-emerald-400">12.288 kWh</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            EcoFlow Titan-style modular scalability. Dock an additional LiFePO₄ expansion battery without purchasing a second inverter or altering building wiring.
          </p>
        </motion.div>

        {/* EcoFlow Titan Modular Stacking Control Bar */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#0b0e16] border border-[#1b2234] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-green-400 uppercase tracking-wider block font-bold">
              MODULAR DOCKING CONTROL
            </span>
            <div className="text-2xl font-black text-white mt-1">
              {isExpanded ? '12.288 kWh Dual Battery Stack' : '6.144 kWh Single Unit'}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {isExpanded 
                ? 'High-current DC bus synchronized. Provides 2 full days of commercial autonomous refrigeration.'
                : 'Compact all-in-one portable power station with integrated 3kW pure sine inverter.'}
            </p>
          </div>

          {/* Toggle Pills */}
          <div className="flex items-center bg-black/60 p-1.5 rounded-full border border-slate-800">
            <button
              onClick={() => setActiveModuleMode('single')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
                !isExpanded
                  ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Single Unit: 6.144 kWh
            </button>
            <button
              onClick={() => setActiveModuleMode('expanded')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
                isExpanded
                  ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Dual Stack: 12.288 kWh
            </button>
          </div>
        </div>

        {/* Interactive Architecture Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Pixel-Perfect Dynamic Docking Graphic with Active Subsystem Highlighting */}
          <div className="lg:col-span-7 bg-[#080a10] rounded-3xl p-6 sm:p-8 border border-[#1b2234] flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
            {/* Active Subsystem Identifier Pin */}
            <div className="absolute top-4 left-6 z-10 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
              <span className="text-slate-300">ACTIVE INSPECTION: <strong className="text-green-400 uppercase">{selectedSubsystem}</strong></span>
            </div>

            <PS1HardwareGraphic 
              isExpanded={isExpanded} 
              highlightSubsystem={selectedSubsystem} 
              className="w-full max-w-lg mt-4" 
            />
            
            <div className="mt-4 flex items-center justify-between w-full text-xs font-mono text-slate-400 pt-4 border-t border-slate-800/80">
              <span>STATUS: <strong className="text-green-400">{isExpanded ? 'DUAL DOCKED (12.288 kWh)' : 'SINGLE MASTER (6.144 kWh)'}</strong></span>
              <span className="text-slate-400">DC BUS EFFICIENCY: <strong className="text-white">&gt;99%</strong></span>
            </div>
          </div>

          {/* Right Column: Interactive Subsystem Navigator & Specs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              INTERNAL SUBSYSTEM BREAKDOWN
            </span>

            {subsystems.map((sub) => {
              const Icon = sub.icon;
              const isSelected = sub.id === selectedSubsystem;
              return (
                <div
                  key={sub.id}
                  onClick={() => setSelectedSubsystem(sub.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-green-950/40 via-[#0e1424] to-[#090d16] border-green-500/60 shadow-[0_0_20px_rgba(34,197,94,0.15)] text-white'
                      : 'bg-[#0b0e16] border-[#1b2234] text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-green-500 text-black' : 'bg-slate-900 text-green-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">{sub.label}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{sub.spec}</div>
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-green-400 animate-ping' : 'bg-transparent'}`}></div>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-2 animate-fadeIn font-normal">
                      <p className="leading-relaxed">{sub.desc}</p>
                      <div className="space-y-1">
                        {sub.details.map((d, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                            <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="w-full py-3 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all"
              >
                <span>Request Custom Configuration Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
