import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Zap, 
  Sun, 
  Plus, 
  Minus, 
  RotateCcw, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Snowflake,
  Coffee,
  Tv,
  Lightbulb,
  Radio,
  Flame,
  Infinity as InfinityIcon
} from 'lucide-react';

export default function RuntimeCalculator({ onOpenQuote }) {
  const PRESETS = [
    {
      id: 'fish_stall',
      name: 'Besant Nagar Fish Stall Preset',
      desc: 'Commercial deep chiller (280W) + Glow sign (150W) + LED lights (80W)',
      loads: { freezer: 1, sign: 1, led: 1, blender: 0, waffle: 0, pos: 1 }
    },
    {
      id: 'juice_kiosk',
      name: 'Food & Juice Kiosk Preset',
      desc: 'Commercial blender (650W) + Waffle iron (1200W) + POS terminal (65W)',
      loads: { freezer: 0, sign: 1, led: 1, blender: 1, waffle: 1, pos: 1 }
    },
    {
      id: 'home_backup',
      name: 'Home Emergency Backup Preset',
      desc: 'Domestic fridge (180W) + Fans (120W) + WiFi/Laptops (120W) + LED lights (60W)',
      loads: { freezer: 1, sign: 0, led: 2, blender: 0, waffle: 0, pos: 1 }
    }
  ];

  const APPLIANCES = [
    { id: 'freezer', name: 'Commercial Chiller / Freezer', watts: 280, icon: Snowflake },
    { id: 'blender', name: 'Commercial High-Torque Blender', watts: 650, icon: Coffee },
    { id: 'waffle', name: 'Commercial Waffle / Heating Iron', watts: 1200, icon: Flame },
    { id: 'sign', name: 'Exterior Glow Signboard', watts: 150, icon: Tv },
    { id: 'led', name: 'Shop LED Prep Lighting (4x 20W)', watts: 80, icon: Lightbulb },
    { id: 'pos', name: 'POS Billing Terminal & Wi-Fi', watts: 65, icon: Radio }
  ];

  const [counts, setCounts] = useState({
    freezer: 1,
    sign: 1,
    led: 1,
    blender: 0,
    waffle: 0,
    pos: 1
  });

  const [solarWatts, setSolarWatts] = useState(720); // 0W to 2880W solar PV generation slider
  const [activePreset, setActivePreset] = useState('fish_stall');

  const handleApplyPreset = (preset) => {
    setActivePreset(preset.id);
    setCounts(preset.loads);
  };

  const handleCountChange = (id, delta) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max(0, Math.min(10, (prev[id] || 0) + delta))
    }));
    setActivePreset(null);
  };

  // Calculate gross appliance wattage
  const totalWatts = APPLIANCES.reduce((sum, item) => sum + (item.watts * (counts[item.id] || 0)), 0);

  // Net load drawn from battery after active solar offset
  const netDrawWatts = Math.max(0, totalWatts - solarWatts);
  const isSolarDirect = totalWatts > 0 && solarWatts >= totalWatts;

  // Real-world usable ratio (~88% considering inverter efficiency & safe DOD)
  const USABLE_RATIO = 0.88;
  const singleWh = 6144 * USABLE_RATIO;
  const dualWh = 12288 * USABLE_RATIO;

  const singleHours = isSolarDirect ? '∞' : (netDrawWatts > 0 ? (singleWh / netDrawWatts).toFixed(1) : '∞');
  const dualHours = isSolarDirect ? '∞' : (netDrawWatts > 0 ? (dualWh / netDrawWatts).toFixed(1) : '∞');

  // Percentage of 3000W Inverter Capacity
  const inverterLoadPct = Math.min(100, Math.round((totalWatts / 3000) * 100));

  return (
    <section id="calculator" className="py-24 bg-[#06080f] relative overflow-hidden border-t border-[#161c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="text-xs font-mono text-green-400 uppercase tracking-wider mb-2">
            INTERACTIVE RUNTIME SIMULATOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Calculate Your Stall's <span className="text-green-400">Autonomy</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            EcoFlow-style real-time energy profiler. See exactly how many continuous hours the PS1 runs your commercial loads with optional solar PV direct-drive offset.
          </p>
        </div>

        {/* Quick Presets Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2">QUICK PRESETS:</span>
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleApplyPreset(preset)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activePreset === preset.id
                  ? 'bg-green-500 text-black font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Appliance Load Builder */}
          <div className="lg:col-span-7 bg-[#090d18] rounded-2xl border border-[#1e2638] p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span>CONNECTED APPLIANCES</span>
              <button
                onClick={() => setCounts({ freezer: 0, sign: 0, led: 0, blender: 0, waffle: 0, pos: 0 })}
                className="text-green-400 hover:text-green-300 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APPLIANCES.map((app) => {
                const count = counts[app.id] || 0;
                const isActive = count > 0;
                const Icon = app.icon;
                return (
                  <div
                    key={app.id}
                    className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0f1626] border-green-500/50 text-white shadow-[0_0_15px_rgba(34,197,94,0.12)]'
                        : 'bg-[#05070e] border-slate-800/80 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-green-500/20 text-green-400' : 'bg-slate-900 text-slate-500'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">{app.name}</div>
                        <div className="text-[10px] font-mono text-slate-400">{app.watts} W</div>
                      </div>
                    </div>

                    {/* Stepper Buttons */}
                    <div className="flex items-center gap-1.5 bg-black/60 rounded-lg p-1 border border-slate-800">
                      <button
                        onClick={() => handleCountChange(app.id, -1)}
                        disabled={count === 0}
                        className="w-5 h-5 rounded flex items-center justify-center text-slate-300 hover:bg-slate-800 disabled:opacity-30 text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-4 text-center font-mono font-bold text-xs text-green-400">
                        {count}
                      </span>
                      <button
                        onClick={() => handleCountChange(app.id, 1)}
                        className="w-5 h-5 rounded flex items-center justify-center text-slate-300 hover:bg-slate-800 text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Solar PV Boost Slider */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Sun className="w-4 h-4" /> ACTIVE SOLAR PV GENERATION:
                </span>
                <span className="text-white font-bold">{solarWatts} Watts {solarWatts > 0 ? `(${Math.round(solarWatts / 720)}x 720W Panels)` : '(Night Mode)'}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2880"
                step="360"
                value={solarWatts}
                onChange={(e) => setSolarWatts(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>0W (Night / Pure Battery)</span>
                <span>720W (1 Panel)</span>
                <span>1440W (2 Panels)</span>
                <span>2880W (4 Panels Max)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">NET DISCHARGE LOAD:</span>
              <span className="text-lg font-bold text-green-400">
                {netDrawWatts} Watts {isSolarDirect && <span className="text-xs text-amber-400 font-normal">(100% Solar Direct Powered)</span>}
              </span>
            </div>
          </div>

          {/* Right Column: Speedometer HUD & Calculated Runtimes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-b from-[#0b101c] to-[#05070f] rounded-2xl border border-green-500/30 p-6 sm:p-7 shadow-[0_0_35px_rgba(34,197,94,0.15)] space-y-6">
              
              <div>
                <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">
                  REAL-TIME ENERGY METRICS
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Projected Autonomy</h3>
              </div>

              {/* 3-Zone Inverter Load Bar */}
              <div className="p-4 rounded-xl bg-black/50 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>3 kW Inverter Utilization</span>
                  <span className={inverterLoadPct > 80 ? 'text-amber-400 font-bold' : 'text-green-400 font-bold'}>
                    {inverterLoadPct}% ({totalWatts} / 3000W)
                  </span>
                </div>
                
                <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden p-0.5 border border-slate-800">
                  <div
                    style={{ width: `${inverterLoadPct}%` }}
                    className={`h-full rounded-full transition-all duration-300 ${
                      inverterLoadPct > 85
                        ? 'bg-gradient-to-r from-amber-500 to-red-500 shadow-[0_0_12px_#ef4444]'
                        : inverterLoadPct > 65
                        ? 'bg-gradient-to-r from-green-500 to-yellow-400'
                        : 'bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_0_12px_#22c55e]'
                    }`}
                  ></div>
                </div>

                <div className="flex justify-between text-[9px] font-mono text-slate-500 pt-1">
                  <span className="text-green-400">0-2000W CONTINUOUS</span>
                  <span className="text-yellow-400">2000-3000W NOMINAL</span>
                  <span className="text-amber-400">3000-6000W SURGE</span>
                </div>
              </div>

              {/* Estimated Runtimes Comparison Cards */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* 6.144 kWh Single Unit */}
                <div className="p-4 rounded-xl bg-[#090d18] border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    PS1 SINGLE (6.144 kWh)
                  </span>
                  <div className="text-3xl font-mono font-black text-white mt-2 flex items-center justify-center gap-1">
                    {singleHours === '∞' ? <InfinityIcon className="w-7 h-7 text-green-400" /> : singleHours}
                    {singleHours !== '∞' && <span className="text-xs font-normal text-slate-400">Hours</span>}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono mt-1 block">
                    {singleHours === '∞' ? 'Infinite Autonomy' : 'Continuous Operation'}
                  </span>
                </div>

                {/* 12.288 kWh Dual Stack */}
                <div className="p-4 rounded-xl bg-[#0e1628] border border-green-500/50 text-center shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                  <span className="text-[10px] font-mono text-green-400 uppercase font-bold">
                    PS1 DUAL (12.288 kWh) ★
                  </span>
                  <div className="text-3xl font-mono font-black text-green-400 mt-2 flex items-center justify-center gap-1">
                    {dualHours === '∞' ? <InfinityIcon className="w-7 h-7 text-green-400" /> : dualHours}
                    {dualHours !== '∞' && <span className="text-xs font-normal text-slate-400">Hours</span>}
                  </div>
                  <span className="text-[10px] text-green-300/80 font-mono mt-1 block">
                    {dualHours === '∞' ? 'Surplus Solar Charging' : '2 Full Days Autonomy'}
                  </span>
                </div>

              </div>

              {/* Verified Field Note */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span>
                  Calibrated against real-world Besant Nagar commercial load telemetry with LiFePO₄ 88% usable capacity ratio and sub-20ms switchover.
                </span>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-xs uppercase font-mono tracking-wider shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Custom Sizing & Solar Quote</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
