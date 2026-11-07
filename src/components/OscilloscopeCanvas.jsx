import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function OscilloscopeCanvas() {
  const [source, setSource] = useState('ps1'); // 'ps1' | 'generator' | 'split'
  const [loadSurge, setLoadSurge] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    const render = () => {
      t += 0.04;
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Dark oscilloscope CRT phosphor screen backdrop
      ctx.fillStyle = '#06080d';
      ctx.fillRect(0, 0, width, height);

      // CRT Grid Reticle
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      const gridSize = 30;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center crosshair axis
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Render Waveform based on selected source
      const drawWave = (isPs1, color, glowColor, yOffset = 0, scale = 1) => {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = color;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 12;

        const amplitude = (height * 0.32) * scale;
        const freq = 0.035;

        for (let x = 0; x < width; x++) {
          let y = 0;
          if (isPs1) {
            // Pure Sine Wave: Ultra-clean 50Hz sine with zero harmonic distortion
            const surgeDip = loadSurge ? Math.sin(t * 3) * 2 : 0;
            y = Math.sin((x * freq) - t) * amplitude + surgeDip;
          } else {
            // Dirty Diesel Generator: 3rd & 5th harmonics, alternator rotor noise, and clipping
            const fundamental = Math.sin((x * freq) - t);
            const thirdHarmonic = 0.28 * Math.sin(3 * ((x * freq) - t));
            const fifthHarmonic = 0.14 * Math.sin(5 * ((x * freq) - t));
            const rotorJitter = (Math.random() - 0.5) * (loadSurge ? 16 : 8);
            const rawWave = fundamental + thirdHarmonic + fifthHarmonic;
            // Clipping & distortion
            const clipped = Math.max(-0.85, Math.min(0.85, rawWave));
            const sag = loadSurge ? Math.sin(t * 8) * 18 : 0;
            y = (clipped * amplitude) + rotorJitter + sag;
          }

          const targetY = centerY + yOffset + y;
          if (x === 0) {
            ctx.moveTo(x, targetY);
          } else {
            ctx.lineTo(x, targetY);
          }
        }
        ctx.stroke();
        ctx.restore();
      };

      if (source === 'ps1') {
        drawWave(true, '#38bdf8', 'rgba(56, 189, 248, 0.85)');
      } else if (source === 'generator') {
        drawWave(false, '#ef4444', 'rgba(239, 68, 68, 0.85)');
      } else {
        // Split view: compare both simultaneously
        drawWave(true, '#38bdf8', 'rgba(56, 189, 248, 0.7)', -height * 0.18, 0.65);
        drawWave(false, '#ef4444', 'rgba(239, 68, 68, 0.7)', height * 0.18, 0.65);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [source, loadSurge]);

  return (
    <div className="rounded-[32px] bg-gradient-to-b from-[#0e121a] to-[#07090e] border border-white/[0.1] p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
      
      {/* Top Header & Telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#38bdf8] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#adceff] font-mono font-bold">
              LABORATORY OSCILLOSCOPE // AC 230V 50Hz THD ANALYZER
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Pure Sine Wave vs. Generator Distortion
          </h3>
        </div>

        {/* Source Switcher Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 self-start sm:self-center">
          <button
            onClick={() => setSource('ps1')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition ${
              source === 'ps1' ? 'bg-[#38bdf8] text-black font-extrabold shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            ADB Labs PS1
          </button>
          <button
            onClick={() => setSource('generator')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition ${
              source === 'generator' ? 'bg-red-500 text-white font-extrabold shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            5kVA Diesel
          </button>
          <button
            onClick={() => setSource('split')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition ${
              source === 'split' ? 'bg-white text-black font-extrabold shadow' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Split Compare
          </button>
        </div>
      </div>

      {/* CRT Screen Frame */}
      <div className="relative mt-6 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#06080d] shadow-inner">
        
        {/* On-Screen Screen HUD Watermark */}
        <div className="absolute top-3 left-4 z-10 flex items-center gap-3 text-[10px] font-mono pointer-events-none">
          <span className="text-white/60">CH1: 100V/DIV</span>
          <span className="text-white/40">|</span>
          <span className="text-white/60">TIME: 2.0ms/DIV</span>
          <span className="text-white/40">|</span>
          <span className="text-[#38bdf8]">TRIGGER: AC 230V @ 50.0Hz</span>
        </div>

        <div className="absolute top-3 right-4 z-10 flex items-center gap-2 text-[10px] font-mono pointer-events-none">
          <span className={`w-2 h-2 rounded-full ${source === 'ps1' ? 'bg-[#38bdf8]' : source === 'generator' ? 'bg-red-400' : 'bg-amber-400'} animate-ping`}></span>
          <span className={source === 'ps1' ? 'text-[#38bdf8] font-bold' : source === 'generator' ? 'text-red-400 font-bold' : 'text-white font-bold'}>
            {source === 'ps1' ? 'PURE SINE [THD < 1.5%]' : source === 'generator' ? 'DIRTY HARMONICS [THD > 18%]' : 'DUAL TRACE COMPARISON'}
          </span>
        </div>

        {/* Canvas Display */}
        <canvas
          ref={canvasRef}
          width={800}
          height={320}
          className="w-full h-[260px] sm:h-[300px] block"
        />

        {/* High-Surge Load Injection Button */}
        <div className="absolute bottom-3 right-4 z-10">
          <button
            onClick={() => setLoadSurge(!loadSurge)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition flex items-center gap-1.5 backdrop-blur-md border ${
              loadSurge 
                ? 'bg-amber-400 text-black border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)]' 
                : 'bg-black/60 text-neutral-300 border-white/20 hover:text-white hover:bg-black/80'
            }`}
          >
            <Zap className={`w-3 h-3 ${loadSurge ? 'fill-current' : ''}`} />
            <span>{loadSurge ? 'SURGE LOAD ACTIVE (1.6 kW INJECTED)' : 'SIMULATE 1.6kW COMPRESSOR SURGE'}</span>
          </button>
        </div>
      </div>

      {/* Telemetry Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 font-mono text-xs text-left">
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-[#83868a] text-[10px] uppercase block">RMS Voltage</span>
          <div className="text-xl font-bold text-white mt-1">
            {source === 'ps1' ? '230.1 V' : source === 'generator' ? (loadSurge ? '208.4 V (SAG)' : '218 ~ 246 V') : '230V vs 218V'}
          </div>
          <span className="text-[10px] text-emerald-400 mt-0.5 block">
            {source === 'ps1' ? '±1% Solid Regulation' : '±12% Unstable Drift'}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-[#83868a] text-[10px] uppercase block">Total Harmonic Distortion</span>
          <div className={`text-xl font-bold mt-1 ${source === 'ps1' ? 'text-[#38bdf8]' : 'text-red-400'}`}>
            {source === 'ps1' ? '1.4% THD' : '18.6% THD'}
          </div>
          <span className="text-[10px] text-neutral-400 mt-0.5 block">
            {source === 'ps1' ? 'Audio / Lab Grade' : 'Motor Burn Risk'}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-[#83868a] text-[10px] uppercase block">Line Frequency</span>
          <div className="text-xl font-bold text-white mt-1">
            {source === 'ps1' ? '50.00 Hz' : (loadSurge ? '46.8 Hz (DROP)' : '48.2 ~ 52.8 Hz')}
          </div>
          <span className="text-[10px] text-emerald-400 mt-0.5 block">
            {source === 'ps1' ? 'Crystal Synchronized' : 'Mechanical Governor'}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-[#83868a] text-[10px] uppercase block">Equipment Safety</span>
          <div className="text-sm font-bold text-white mt-1 flex items-center gap-1.5">
            {source === 'ps1' ? (
              <>
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-400">100% Zero-Harm</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-red-400">High Failure Rate</span>
              </>
            )}
          </div>
          <span className="text-[10px] text-neutral-400 mt-0.5 block">
            {source === 'ps1' ? 'Medical/Chiller Safe' : 'Destroys Microcontrollers'}
          </span>
        </div>
      </div>

    </div>
  );
}
