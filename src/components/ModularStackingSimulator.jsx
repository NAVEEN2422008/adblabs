import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Plus, Minus, Check, Lock, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

export default function ModularStackingSimulator({ onSelectPackage }) {
  const [bays, setBays] = useState(2); // 1 = Single Module (6.144 kWh) | 2 = Dual-Stack (12.288 kWh)

  const capacityKwh = bays === 1 ? 6.144 : 12.288;
  const usableWh = capacityKwh * 1000 * 0.90; // 90% usable DoD
  const chillerHours = (usableWh / 280).toFixed(1);
  const monthlySavings = bays === 1 ? '₹7,500 – ₹9,000' : '₹12,000 – ₹15,000';
  const solarRecommendation = bays === 1 ? '1.44 kWp (2x 720W Bifacial)' : '2.88 kWp (4x 720W Bifacial)';

  return (
    <div className="rounded-[32px] bg-gradient-to-b from-[#0e121a] to-[#07090e] border border-white/[0.1] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden text-left">
      
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/[0.08] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-xs uppercase tracking-widest text-[#adceff] font-mono font-bold">
              MODULAR HARDWARE CONFIGURATOR // QUICK-CONNECT DC BUS
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Build Your Commercial Energy Stack
          </h3>
          <p className="text-[#83868a] text-xs sm:text-sm mt-1">
            Seamlessly scale from a single 6.144 kWh unit up to a dual-stacked 12.288 kWh power plant using quick-latch CAN-bus coupling.
          </p>
        </div>

        {/* Stack Control Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10 self-start lg:self-center">
          <button
            onClick={() => setBays(1)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition flex items-center gap-1.5 ${
              bays === 1 ? 'bg-white text-black shadow-lg' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Battery className="w-3.5 h-3.5" />
            <span>Single (6.144 kWh)</span>
          </button>
          <button
            onClick={() => setBays(2)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition flex items-center gap-1.5 ${
              bays === 2 ? 'bg-[#38bdf8] text-black shadow-lg font-extrabold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Dual Stack (12.288 kWh) ★</span>
          </button>
        </div>
      </div>

      {/* Visual Stacking Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
        
        {/* Left: Interactive Assembly Rig */}
        <div className="lg:col-span-6 bg-black/60 rounded-3xl border border-white/[0.06] p-6 sm:p-8 flex flex-col items-center justify-center relative min-h-[420px] bg-cad-grid cad-corner-tl">
          
          <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#83868a] pb-4 mb-4 border-b border-white/[0.06]">
            <span>STAGING BAY: {bays === 1 ? 'SINGLE 1U' : 'DUAL STACK 2U'}</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>{bays === 1 ? 'SINGLE CORE ACTIVE' : 'PARALLEL BUS COUPLED'}</span>
            </span>
          </div>

          {/* Stacking Graphics Container */}
          <div className="relative w-full max-w-sm flex flex-col items-center justify-center gap-3 py-4">
            
            {/* Top Module: PS1 Main Unit */}
            <motion.div 
              layout
              className="w-full p-4 rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 border border-white/20 shadow-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] font-mono font-bold text-xs">
                  01
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">PS1 Master Power Station</span>
                  <span className="text-[10px] text-neutral-400 font-mono">3kW Pure Sine · Dual MPPT · 6.144 kWh Core</span>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </motion.div>

            {/* Quick-Connect Coupler Visual */}
            <AnimatePresence>
              {bays === 2 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2 py-1 text-[9px] font-mono text-[#38bdf8]"
                >
                  <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#38bdf8]"></div>
                  <span>HIGH-AMP DC BUS LINK ACTIVE</span>
                  <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#38bdf8]"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Module: Secondary Battery Pack */}
            <AnimatePresence>
              {bays === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#0e1626] to-neutral-800 border border-[#38bdf8]/50 shadow-[0_0_35px_rgba(56,189,248,0.15)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] font-mono font-bold text-xs">
                      02
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">PS1 Secondary Expansion Pack</span>
                      <span className="text-[10px] text-neutral-300 font-mono">+6.144 kWh Automotive LiFePO₄ · Auto-Balance</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#38bdf8] font-bold">+6.144 kWh</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Base: Heavy-Duty Industrial Caster Base */}
            <div className="w-full p-3 rounded-xl bg-neutral-950 border border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>HEAVY-DUTY CASTER BASE // 360° LOCKING MOBILITY</span>
              <span className="text-neutral-400">RATED 350 KG</span>
            </div>

          </div>

          {/* Quick-action configuration toggle */}
          <div className="mt-4 pt-4 border-t border-white/[0.06] w-full flex items-center justify-between text-xs font-mono">
            <span className="text-[#83868a]">PHYSICAL FORM FACTOR:</span>
            <span className="text-white font-bold">{bays === 1 ? 'Single Portable Unit' : 'Stacked Dual Modular Tower'}</span>
          </div>
        </div>

        {/* Right: Technical Output & Payback Metrics */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <div className="text-xs font-mono uppercase text-[#38bdf8] font-bold mb-1">
              Configuration Specification
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              {capacityKwh} kWh Capacity
            </div>
            <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
              {bays === 1 
                ? 'Standard configuration designed for light retail, daytime food stalls, and emergency residential circuits.'
                : 'Heavy-duty expanded configuration built for continuous 24/7 coastal seafood stalls, high-surge waffle irons, and severe power cut regions.'}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/[0.08] text-left">
              <div>
                <span className="text-[10px] font-mono text-[#83868a] uppercase block">Deep Chiller (280W) Runtime</span>
                <div className="text-2xl font-black text-[#adceff] font-mono mt-0.5">{chillerHours} Hours</div>
                <span className="text-[10px] text-neutral-500">Battery-only continuous run</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#83868a] uppercase block">Monthly Diesel Sinking Saved</span>
                <div className="text-2xl font-black text-emerald-400 font-mono mt-0.5">{monthlySavings}</div>
                <span className="text-[10px] text-neutral-500">Zero fuel burnt per month</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-[#83868a]">RECOMMENDED SOLAR ARRAY:</span>
              <span className="text-white font-bold">{solarRecommendation}</span>
            </div>
          </div>

          {/* Direct CTA for Configured Package */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <div>
              <span className="text-xs font-bold text-white block">Ready for On-Site Energy Audit?</span>
              <span className="text-[10px] text-neutral-400 font-mono">Chennai & Tamil Nadu commercial installation queue</span>
            </div>
            <button
              onClick={() => onSelectPackage && onSelectPackage(bays === 1 ? 'Shop 1 Standard System (6.144 kWh)' : 'Shop 2 Expanded Heavy-Duty (12.288 kWh)')}
              className="w-full sm:w-auto bg-white hover:bg-neutral-200 text-black font-extrabold text-xs px-6 py-3 rounded-full transition shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Enquire {bays === 1 ? 'Shop 1' : 'Shop 2'} Stack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
