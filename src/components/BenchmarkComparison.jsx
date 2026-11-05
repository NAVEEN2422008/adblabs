import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Zap, Volume2, VolumeX, ShieldCheck, Flame } from 'lucide-react';

export default function BenchmarkComparison() {
  const [isSimulatingAudio, setIsSimulatingAudio] = useState(true);
  const [dieselWaveforms, setDieselWaveforms] = useState([35, 72, 85, 45, 90, 65, 80, 50, 95, 70, 60, 88]);

  useEffect(() => {
    if (!isSimulatingAudio) return;
    const interval = setInterval(() => {
      setDieselWaveforms(prev => prev.map(() => Math.floor(40 + Math.random() * 55)));
    }, 150);
    return () => clearInterval(interval);
  }, [isSimulatingAudio]);

  return (
    <section id="benchmark" className="py-20 bg-[#060709] relative overflow-hidden border-t border-[#141824]">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-green-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (EcoFlow Titan "Why Now" style) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-green-400 text-xs font-mono uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>THE OFF-GRID REVOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Power Everything. <span className="text-green-400">Ditch the Diesel.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Traditional generators bring high fuel bills, toxic exhaust smoke, and deafening noise. ADB Labs PS1 delivers pure, silent, modular LiFePO₄ energy that pays for itself.
          </p>
        </div>

        {/* Interactive Decibel Acoustic Meter & Spectrum Strip */}
        <div className="mb-10 p-5 rounded-2xl bg-[#0a0d16] border border-[#1b2336] max-w-3xl mx-auto shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSimulatingAudio(!isSimulatingAudio)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-green-400 hover:text-white transition-colors"
              title="Toggle Live Audio Visualizer"
            >
              {isSimulatingAudio ? <Volume2 className="w-5 h-5 text-green-400" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
            </button>
            <div className="text-left font-mono">
              <span className="text-xs text-slate-300 font-bold block">ACOUSTIC NOISE & EMISSIONS SENSOR</span>
              <span className="text-[10px] text-slate-500">Live Decibel (dB) Sound Pressure Comparison</span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-red-400 font-bold">78 dB (DIESEL)</span>
            </div>
            <span className="text-slate-600">VS</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span className="text-green-400 font-bold">0 dB (PS1 SILENT)</span>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid (Direct EcoFlow Titan Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Traditional Diesel Generators (Muted Grey Box) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[#0c0e14] border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold">
                  CONVENTIONAL OPTION
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-red-950/60 text-red-400 border border-red-800/60">
                  OBSOLETE & COSTLY
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-200 mt-4">
                Traditional Diesel Generators
              </h3>
              <p className="text-xs text-slate-400 mt-1 mb-6">
                Noisy, toxic, continuous operating expense with high mechanical maintenance.
              </p>

              {/* Animated Diesel Soundwave Bar */}
              <div className="p-4 rounded-xl bg-black/60 border border-red-950/50 mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-red-400 font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" /> ACOUSTIC SPECTRUM: 78 dB
                  </span>
                  <span className="text-slate-500 text-[10px]">DEAFENING MOTOR CLATTER</span>
                </div>
                <div className="flex items-end gap-1 h-10 pt-2">
                  {dieselWaveforms.map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-red-500/80 rounded-t-sm transition-all duration-150"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Benchmark Metrics */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-black/40 border border-slate-900 flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">OPERATING COST</div>
                    <div className="text-sm font-bold text-slate-300">Continuous Fuel Drain (₹10,000+/Month)</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-slate-900 flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">NOISE & POLLUTION</div>
                    <div className="text-sm font-bold text-slate-300">Deafening 78dB+ Noise & Black Diesel Fumes</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-slate-900 flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">MAINTENANCE & RELIABILITY</div>
                    <div className="text-sm font-bold text-slate-300">Engine Oil Changes, Spark Plugs & Filter Breakdowns</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-slate-900 flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">INTELLIGENCE</div>
                    <div className="text-sm font-bold text-slate-300">Zero Telemetry, No Solar MPPT Integration</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              AVERAGE LIFESPAN: 2-3 YEARS BEFORE REBUILD
            </div>
          </motion.div>

          {/* Card 2: ADB Labs PS1 Off-Grid System (Vibrant Glowing Titan Highlight) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-b from-[#0e1626] via-[#090f1d] to-[#070b16] border-2 border-green-500/50 p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(34,197,94,0.15)] relative overflow-hidden"
          >
            {/* Top Glow Edge */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400"></div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-green-400 font-bold">
                  ADB LABS PS1 ARCHITECTURE
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-green-950 text-green-400 border border-green-700 font-bold">
                  100% CLEAN & SILENT
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mt-4">
                ADB Labs PS1 Modular System
              </h3>
              <p className="text-xs text-green-300/80 mt-1 mb-6">
                Plug-and-play LiFePO₄ energy storage with modular expansion and instant solar payback.
              </p>

              {/* Silent Flatline Waveform Bar */}
              <div className="p-4 rounded-xl bg-black/60 border border-green-500/30 mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-green-400 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> ACOUSTIC SPECTRUM: 0 dB
                  </span>
                  <span className="text-green-300/70 text-[10px]">SOLID-STATE WHISPER SILENT</span>
                </div>
                <div className="flex items-center h-10 px-2">
                  <div className="w-full h-1 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]"></div>
                </div>
              </div>

              {/* Benchmark Metrics */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-green-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-green-400 font-bold">OPERATING COST</div>
                    <div className="text-sm font-bold text-white">₹0 Fuel Cost (100% Free Solar Energy)</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-green-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-green-400 font-bold">SILENT OPERATION</div>
                    <div className="text-sm font-bold text-white">Zero Noise (0 dB) & Zero Harmful Emissions</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-green-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-green-400 font-bold">LONGEVITY & SAFETY</div>
                    <div className="text-sm font-bold text-white">4,000+ Deep Cycles (10+ Year Lifespan LFP Cells)</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-green-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-green-400 font-bold">MODULAR EXPANSION</div>
                    <div className="text-sm font-bold text-white">Expand from 6.144 kWh to 12.288 kWh Instantly</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-green-400">
              <span>FINANCIAL PAYBACK: UNDER 2 YEARS</span>
              <span className="font-bold">VERIFIED FIELD RESULTS →</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
