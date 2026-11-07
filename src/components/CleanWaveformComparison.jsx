import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Activity, Zap, CheckCircle2, RefreshCw } from 'lucide-react';

export default function CleanWaveformComparison() {
  const [activeMode, setActiveMode] = useState('compare'); // 'compare' | 'ps1' | 'diesel'
  const [isCompressorSurge, setIsCompressorSurge] = useState(false);
  const [animTime, setAnimTime] = useState(0);

  // Smooth frame loop for animating the wave scanline
  useEffect(() => {
    let animId;
    const animate = () => {
      setAnimTime((prev) => (prev + 0.05) % (Math.PI * 2));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Compute smooth sine points for pure wave (PS1)
  const width = 800;
  const height = 180;
  const centerY = height / 2;
  const amplitude = isCompressorSurge ? 58 : 64; // Slight dip absorption under heavy surge

  // Generate SVG path for Pure Sine Wave
  const pureSinePoints = [];
  for (let x = 0; x <= width; x += 4) {
    const angle = (x / width) * Math.PI * 6 + animTime;
    const y = centerY - Math.sin(angle) * amplitude;
    pureSinePoints.push(`${x},${y.toFixed(2)}`);
  }
  const pureSinePath = `M ${pureSinePoints.join(' L ')}`;

  // Generate SVG path for Distorted Diesel Generator Wave (harmonics + noise spikes)
  const dieselPoints = [];
  for (let x = 0; x <= width; x += 4) {
    const angle = (x / width) * Math.PI * 6 + animTime;
    // Base fundamental + 3rd harmonic + 5th harmonic + jitter
    const fundamental = Math.sin(angle);
    const h3 = 0.28 * Math.sin(angle * 3);
    const h5 = 0.15 * Math.sin(angle * 5);
    const surgeSag = isCompressorSurge ? (Math.sin(angle) > 0 ? -18 : 18) : 0;
    const jitter = (Math.sin(x * 12.3 + animTime * 4) * 4);
    
    // Clipped flattened tops
    let waveVal = fundamental + h3 + h5;
    if (waveVal > 0.85) waveVal = 0.85;
    if (waveVal < -0.85) waveVal = -0.85;

    const y = centerY - (waveVal * amplitude) + surgeSag + jitter;
    dieselPoints.push(`${x},${y.toFixed(2)}`);
  }
  const dieselPath = `M ${dieselPoints.join(' L ')}`;

  return (
    <div className="w-full rounded-[32px] bg-[#090b10] border border-white/[0.08] p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#38bdf8]/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
            <span className="text-[11px] font-mono tracking-widest text-[#38bdf8] uppercase font-bold">
              AC Waveform Purity & Harmonics
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            Pure Sine Wave vs. Generator Distortion
          </h3>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/10">
          <button
            onClick={() => setActiveMode('compare')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              activeMode === 'compare' ? 'bg-white text-black font-bold shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Split Compare
          </button>
          <button
            onClick={() => setActiveMode('ps1')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
              activeMode === 'ps1' ? 'bg-[#38bdf8] text-black font-bold shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-900"></span>
            ADB Labs PS1
          </button>
          <button
            onClick={() => setActiveMode('diesel')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
              activeMode === 'diesel' ? 'bg-red-500 text-white font-bold shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            5kVA Diesel
          </button>
        </div>
      </div>

      {/* Interactive Waveform SVG Canvas */}
      <div className="relative mt-8 bg-black/60 rounded-2xl border border-white/[0.06] p-4 sm:p-6 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Zero Axis Reference Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 pointer-events-none"></div>

        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full h-44 sm:h-52 overflow-visible relative z-10"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ps1Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#adceff" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="dieselGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f87171" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f87171" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Diesel Waveform (when mode is 'compare' or 'diesel') */}
          {(activeMode === 'compare' || activeMode === 'diesel') && (
            <path
              d={dieselPath}
              fill="none"
              stroke="url(#dieselGradient)"
              strokeWidth={activeMode === 'diesel' ? "3" : "2"}
              strokeDasharray={activeMode === 'compare' ? "4 3" : "none"}
              filter="url(#glow-red)"
              opacity={activeMode === 'compare' ? 0.75 : 1}
            />
          )}

          {/* ADB Labs PS1 Pure Sine Wave (when mode is 'compare' or 'ps1') */}
          {(activeMode === 'compare' || activeMode === 'ps1') && (
            <path
              d={pureSinePath}
              fill="none"
              stroke="url(#ps1Gradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#glow-cyan)"
            />
          )}
        </svg>

        {/* Legend Overlay & Compressor Inrush Trigger */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-white/[0.06] text-xs">
          <div className="flex items-center gap-6">
            {(activeMode === 'compare' || activeMode === 'ps1') && (
              <div className="flex items-center gap-2">
                <span className="w-3 h-1 bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]"></span>
                <span className="text-white font-medium">ADB Labs PS1 (Pure Sine, THD &lt; 1.5%)</span>
              </div>
            )}
            {(activeMode === 'compare' || activeMode === 'diesel') && (
              <div className="flex items-center gap-2">
                <span className="w-3 h-1 bg-red-400 rounded-full border border-red-500"></span>
                <span className="text-neutral-400 font-medium">Commercial Generator (Distorted, THD &gt; 18%)</span>
              </div>
            )}
          </div>

          {/* Interactive Surge Test */}
          <button
            onClick={() => setIsCompressorSurge(!isCompressorSurge)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition flex items-center gap-2 ${
              isCompressorSurge 
                ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 shadow-[0_0_15px_rgba(251,191,36,0.3)]' 
                : 'bg-white/[0.04] text-neutral-300 border-white/10 hover:border-white/30'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>{isCompressorSurge ? 'Surge Load Active (1.6kW Compressor)' : 'Simulate 1.6kW Compressor Surge'}</span>
          </button>
        </div>
      </div>

      {/* Side-by-side Telemetry Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        
        {/* PS1 Technical Telemetry */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-[#38bdf8]/30 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
              ADB Labs PS1 Inverter
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-semibold border border-emerald-500/20">
              Clean Medical Grade
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
            <div>
              <div className="text-[10px] text-neutral-400">RMS Voltage</div>
              <div className="text-lg font-black text-white mt-0.5">230.1 V</div>
              <div className="text-[10px] text-emerald-400">±1% Regulation</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">THD Purity</div>
              <div className="text-lg font-black text-[#38bdf8] mt-0.5">&lt; 1.4%</div>
              <div className="text-[10px] text-neutral-400">Audio/Lab Grade</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">Frequency</div>
              <div className="text-lg font-black text-white mt-0.5">50.00 Hz</div>
              <div className="text-[10px] text-emerald-400">Crystal Locked</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">Chiller Life</div>
              <div className="text-lg font-black text-white mt-0.5">100% Safe</div>
              <div className="text-[10px] text-emerald-400">Zero Overheating</div>
            </div>
          </div>
        </div>

        {/* Traditional Generator Telemetry */}
        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              5kVA Diesel Generator
            </span>
            <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded font-semibold border border-red-500/20">
              High Wear &amp; Sag
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
            <div>
              <div className="text-[10px] text-neutral-500">RMS Voltage</div>
              <div className="text-lg font-bold text-neutral-300 mt-0.5">204 – 248 V</div>
              <div className="text-[10px] text-red-400">±10% Fluctuation</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500">THD Distortion</div>
              <div className="text-lg font-bold text-red-400 mt-0.5">18 – 24%</div>
              <div className="text-[10px] text-neutral-500">Severe Harmonics</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500">Frequency</div>
              <div className="text-lg font-bold text-neutral-300 mt-0.5">46 – 54 Hz</div>
              <div className="text-[10px] text-red-400">Governor Hunting</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500">Chiller Life</div>
              <div className="text-lg font-bold text-neutral-300 mt-0.5">High Burnout</div>
              <div className="text-[10px] text-red-400">Motor Overheating</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
