import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Battery, Cpu, Snowflake, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export default function PowerFlowDiagram() {
  const [timeOfDay, setTimeOfDay] = useState('noon'); // 'noon' | 'evening' | 'night'

  // Dynamic values based on time of day
  const configs = {
    noon: {
      label: '12:30 PM · Peak Tropical Solar Harvest',
      solarW: 2450,
      loadW: 520,
      batteryNetW: 1930, // Charging at +1930W
      batteryFlow: 'charging',
      status: 'Daytime Solar Direct Feed + Battery Fast Replenishment',
      sunIntensity: 'text-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.5)]'
    },
    evening: {
      label: '07:00 PM · Beach Evening Peak Retail Rush',
      solarW: 180,
      loadW: 1680, // Heavy load: waffle iron + blender + chiller
      batteryNetW: -1500, // Discharging at 1500W
      batteryFlow: 'discharging',
      status: 'Battery Discharge Powers High-Surge Commercial Cooking',
      sunIntensity: 'text-orange-400'
    },
    night: {
      label: '02:00 AM · Silent Deep-Chiller Preservation Mode',
      solarW: 0,
      loadW: 280, // Chiller cycling
      batteryNetW: -280,
      batteryFlow: 'discharging',
      status: 'Whisper-Quiet LiFePO₄ Cooling with Zero Generator Noise',
      sunIntensity: 'text-neutral-600'
    }
  };

  const current = configs[timeOfDay];

  return (
    <div className="rounded-[32px] bg-gradient-to-b from-[#0c0f16] to-[#06080d] border border-white/[0.1] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden text-left">
      
      {/* Background CAD Ambient Grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/[0.08] gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#adceff] font-bold">
              REAL-TIME POWER DISPATCH // BESANT NAGAR COASTAL GRID
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Dynamic Day / Night Energy Routing
          </h3>
          <p className="text-[#83868a] text-xs sm:text-sm mt-1">
            Simulate how the 2.88 kWp bifacial solar array, 12.3 kWh LiFePO₄ bus, and 3kW pure sine inverter interact across a 24-hour cycle.
          </p>
        </div>

        {/* Time of Day Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/10 self-start lg:self-center">
          <button
            onClick={() => setTimeOfDay('noon')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition flex items-center gap-1.5 ${
              timeOfDay === 'noon' ? 'bg-amber-300 text-black shadow-lg' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>12:00 PM [Sun]</span>
          </button>

          <button
            onClick={() => setTimeOfDay('evening')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition flex items-center gap-1.5 ${
              timeOfDay === 'evening' ? 'bg-orange-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>07:00 PM [Peak]</span>
          </button>

          <button
            onClick={() => setTimeOfDay('night')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition flex items-center gap-1.5 ${
              timeOfDay === 'night' ? 'bg-[#38bdf8] text-black shadow-lg' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>02:00 AM [Night]</span>
          </button>
        </div>
      </div>

      {/* Schematic Energy Flow Layout */}
      <div className="relative py-10 z-10">
        
        {/* Node Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          
          {/* Node 1: Solar Generation */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-amber-300 font-bold">Generation</span>
              <Sun className={`w-5 h-5 ${current.sunIntensity} transition-colors duration-500`} />
            </div>
            <div className="text-2xl font-black text-white font-mono">{current.solarW} W</div>
            <span className="text-xs text-neutral-400 block mt-1">2.88 kWp Bifacial Array</span>
            <div className="text-[10px] font-mono text-emerald-400 mt-2">
              {timeOfDay === 'noon' ? 'Direct Solar Absorption' : timeOfDay === 'evening' ? 'Low Twilight Harvest' : 'Zero Solar Irradiation'}
            </div>
          </div>

          {/* Node 2: Dual MPPT Core */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-[#38bdf8] font-bold">DC Bus Core</span>
              <Cpu className="w-5 h-5 text-[#38bdf8]" />
            </div>
            <div className="text-2xl font-black text-white font-mono">98.4%</div>
            <span className="text-xs text-neutral-400 block mt-1">Dual MPPT Tracking</span>
            <div className="text-[10px] font-mono text-[#38bdf8] mt-2">
              CAN-Bus Active Sync
            </div>
          </div>

          {/* Node 3: LiFePO4 Battery Stack */}
          <div className={`p-5 rounded-2xl border transition-all duration-500 relative group ${
            current.batteryFlow === 'charging' 
              ? 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]' 
              : 'bg-blue-950/20 border-[#38bdf8]/40 shadow-[0_0_30px_rgba(56,189,248,0.15)]'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">Storage Bus</span>
              <Battery className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">12.288 kWh</div>
            <span className="text-xs text-neutral-300 block mt-1">Dual LiFePO₄ Stack</span>
            <div className="text-[10px] font-mono font-bold mt-2 flex items-center gap-1 text-emerald-400">
              {current.batteryFlow === 'charging' ? `▲ CHARGING (+${current.batteryNetW}W)` : `▼ SUPPLYING (${current.batteryNetW}W)`}
            </div>
          </div>

          {/* Node 4: Commercial Retail Load */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] relative group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold">Live Demand</span>
              <Snowflake className="w-5 h-5 text-[#adceff]" />
            </div>
            <div className="text-2xl font-black text-white font-mono">{current.loadW} W</div>
            <span className="text-xs text-neutral-400 block mt-1">Continuous 230V Load</span>
            <div className="text-[10px] font-mono text-[#adceff] mt-2">
              {timeOfDay === 'evening' ? 'High Surge Food Equipment' : 'Commercial Deep Chiller'}
            </div>
          </div>

        </div>

        {/* Dynamic Energy Status Readout */}
        <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <RefreshCw className="w-4 h-4 text-[#38bdf8] animate-spin [animation-duration:8s]" />
            <span className="text-white font-bold">{current.label}</span>
          </div>
          <div className="text-[#83868a]">
            STATUS: <span className="text-neutral-200">{current.status}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
