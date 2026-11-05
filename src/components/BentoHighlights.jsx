import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, TrendingUp, ShieldCheck, Sun, ArrowUpRight } from 'lucide-react';

export default function BentoHighlights({ onOpenQuote }) {
  return (
    <section id="highlights" className="py-24 bg-[#060709] relative overflow-hidden border-t border-[#141824]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (EcoFlow Titan "Get the Highlights" style) */}
        <div className="text-left mb-12">
          <div className="text-xs font-mono text-green-400 uppercase tracking-wider mb-2">
            ADB LABS PS1 // BENCHMARK CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get the <span className="text-green-400">Highlights</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Engineered from real-world Chennai field pilots. High-current pure sine power, modular LiFePO₄ expansion, and zero operating expenses.
          </p>
        </div>

        {/* 4 Asymmetrical Bento Grid Cards (EcoFlow Titan Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1 (Double Width Hero Bento - 8 cols) with Real Hardware Imagery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, borderColor: 'rgba(34, 197, 94, 0.5)' }}
            className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-[#0c121e] via-[#090d16] to-[#05070e] border border-[#1b2336] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            {/* Background Hardware Photographic Texture with Scrim */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
              <img
                src="/images/ps1_hero.jpg"
                alt="ADB Labs PS1 Hardware"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/90 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-green-950 text-green-400 border border-green-800 font-bold uppercase tracking-wider">
                  CORE PLATFORM
                </span>
                <span className="text-xs font-mono text-slate-400">
                  FLAGSHIP SPECIFICATION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white max-w-md">
                Commercial Off-Grid Power for Everyday Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg leading-relaxed">
                Run heavy commercial freezers, blenders, prep lighting, and heating elements concurrently without voltage dips or circuit trips.
              </p>
            </div>

            {/* 4-Metric Strip (Direct from EcoFlow Titan Card 1) */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-slate-800/80 mt-6 font-mono">
              <div className="p-3 rounded-xl bg-black/60 border border-slate-800 backdrop-blur-sm">
                <div className="text-[10px] text-slate-400 uppercase">OUTPUT TARGET</div>
                <div className="text-lg sm:text-xl font-bold text-green-400 mt-0.5">3.0~6.0 kW</div>
                <div className="text-[9px] text-slate-500">Pure Sine Surge</div>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-slate-800 backdrop-blur-sm">
                <div className="text-[10px] text-slate-400 uppercase">CAPACITY</div>
                <div className="text-lg sm:text-xl font-bold text-white mt-0.5">6.1~12.3 kWh</div>
                <div className="text-[9px] text-slate-500">Modular Stack</div>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-slate-800 backdrop-blur-sm">
                <div className="text-[10px] text-slate-400 uppercase">SOLAR INTAKE</div>
                <div className="text-lg sm:text-xl font-bold text-amber-400 mt-0.5">1.4~2.9 kWp</div>
                <div className="text-[9px] text-slate-500">Dual MPPT Arrays</div>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-slate-800 backdrop-blur-sm">
                <div className="text-[10px] text-slate-400 uppercase">CHEMISTRY</div>
                <div className="text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">LiFePO₄</div>
                <div className="text-[9px] text-slate-500">4,000+ Cycles</div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Spend Less From Day One (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, borderColor: 'rgba(34, 197, 94, 0.5)' }}
            className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#0c121e] via-[#090d16] to-[#05070e] border border-[#1b2336] p-6 sm:p-8 flex flex-col justify-between shadow-2xl group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Spend ₹0 on Fuel from Day One
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                By eliminating daily generator diesel purchases (₹300~₹500/day), commercial food kiosks and fish stalls recover their entire investment in under 24 months.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">PAYBACK TIMELINE:</span>
              <span className="text-green-400 font-bold">18-24 MONTHS</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Smarter Active BMS (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, borderColor: 'rgba(34, 197, 94, 0.5)' }}
            className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#0c121e] via-[#090d16] to-[#05070e] border border-[#1b2336] p-6 sm:p-8 flex flex-col justify-between shadow-2xl group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-green-400" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Microcontroller BMS Telemetry
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Active cell-level balancing, multi-point NTC temperature monitoring, and CAN-bus telemetry integration for external robotics and cloud dashboards.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">TELEMETRY BUS:</span>
              <span className="text-green-400 font-bold">CAN 2.0B / RS485</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Coastal & Tropical Climate Resilience (8 cols) with Solar Imagery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, borderColor: 'rgba(34, 197, 94, 0.5)' }}
            className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-[#0c121e] via-[#090d16] to-[#05070e] border border-[#1b2336] p-6 sm:p-8 flex flex-col justify-between shadow-2xl group relative overflow-hidden"
          >
            {/* Background Solar Array Texture with Scrim */}
            <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none">
              <img
                src="/images/commercial_solar.jpg"
                alt="Chennai Coastal Solar Installation"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/85 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
                  CHENNAI COASTAL VALIDATION
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Engineered for High-Ambient Marine Air & Tropical Climates
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Anodized anti-corrosion aluminum framing, thermally isolated inverter and cell compartments, and washable dust filtration mesh built to withstand salty coastal humidity.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
              <span>THERMAL WINDOW: -10°C TO +55°C</span>
              <button
                onClick={onOpenQuote}
                className="text-green-400 hover:text-green-300 font-bold flex items-center gap-1"
              >
                Request Lab Verification Report <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
