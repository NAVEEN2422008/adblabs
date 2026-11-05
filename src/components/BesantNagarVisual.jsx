import React, { useState, useEffect } from 'react';
import { Sun, Moon, Zap, MapPin, BatteryCharging, ShieldCheck, Thermometer } from 'lucide-react';

export default function BesantNagarVisual({ className = "" }) {
  const [timeMode, setTimeMode] = useState('day'); // 'day' or 'night'
  const [liveWatts, setLiveWatts] = useState(2180);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeMode === 'day') {
        // Dynamic coastal sun fluctuation (2,120W - 2,240W)
        setLiveWatts(Math.floor(2120 + Math.random() * 120));
      } else {
        // Nighttime deep freezer compressor pulse (390W - 440W)
        setLiveWatts(Math.floor(390 + Math.random() * 50));
      }
    }, 800);
    return () => clearInterval(interval);
  }, [timeMode]);

  return (
    <div className={`border-b border-[#1e2638] ${className}`}>
      
      {/* Interactive Day/Night Mode Switcher Header */}
      <div className="bg-[#080c16] px-6 py-3 border-b border-[#1b2336] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono">
          <MapPin className="w-3.5 h-3.5 text-green-400" />
          <span className="text-white font-bold">BESANT NAGAR PILOT FIELD SIMULATOR</span>
          <span className="text-slate-500 hidden sm:inline">// 100% OFF-GRID COMMERCIAL BENCHMARK</span>
        </div>

        <div className="flex items-center bg-black/60 p-1 rounded-full border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setTimeMode('day')}
            className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
              timeMode === 'day'
                ? 'bg-amber-500 text-black font-bold shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sun className="w-3 h-3" />
            <span>DAY: 2.88 kWp SOLAR</span>
          </button>
          <button
            onClick={() => setTimeMode('night')}
            className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
              timeMode === 'night'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Moon className="w-3 h-3" />
            <span>NIGHT: 12.288 kWh DOCK</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: 2.88 kWp Solar Array overlooking Chennai Coastal Promenade */}
        <div className={`lg:col-span-7 p-6 sm:p-8 relative min-h-[320px] flex flex-col justify-between overflow-hidden transition-all duration-700 ${
          timeMode === 'day'
            ? 'bg-gradient-to-b from-[#0a1a38] via-[#071329] to-[#040914]'
            : 'bg-gradient-to-b from-[#070b14] via-[#04070e] to-[#020408]'
        }`}>
          {/* Coastal Ocean Line Vector */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg viewBox="0 0 500 250" className="w-full h-full" preserveAspectRatio="none">
              <path d="M 0 100 Q 150 80 300 110 T 500 90 L 500 250 L 0 250 Z" fill="#0284c7" />
              <path d="M 0 130 Q 180 120 350 140 T 500 120 L 500 250 L 0 250 Z" fill="#0369a1" />
            </svg>
          </div>

          {/* Sunbeams or Starfield overlay */}
          {timeMode === 'day' ? (
            <div className="absolute top-0 right-10 w-48 h-48 bg-amber-400/10 rounded-full blur-[70px] pointer-events-none"></div>
          ) : (
            <div className="absolute top-4 right-10 text-[10px] font-mono text-cyan-300/40">
              [OVERNIGHT COASTAL MONITORING ACTIVE]
            </div>
          )}

          {/* 4x 720W Monocrystalline Solar Array Graphic */}
          <div className="relative z-10 my-auto py-2">
            <div className="grid grid-cols-4 gap-2.5 max-w-lg mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-32 sm:h-40 rounded-xl border p-1.5 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-500 ${
                    timeMode === 'day'
                      ? 'bg-gradient-to-b from-[#0d2650] via-[#071733] to-[#020a17] border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                      : 'bg-gradient-to-b from-[#080f1e] via-[#050914] to-[#02040a] border-slate-800 opacity-60'
                  }`}
                >
                  {/* Photovoltaic Cell Grid Lines */}
                  <div className="grid grid-cols-2 grid-rows-4 gap-1 h-full opacity-60">
                    {[...Array(8)].map((_, j) => (
                      <div key={j} className="border border-cyan-400/20 bg-blue-950/30 rounded-sm"></div>
                    ))}
                  </div>
                  {/* Silver Busbars */}
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-cyan-200/50"></div>
                  <div className="text-[9px] font-mono text-cyan-300 text-center font-bold tracking-wider pt-1">
                    720W #{i}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center font-mono text-xs text-slate-300 mt-4 flex items-center justify-center gap-2">
              {timeMode === 'day' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="text-white font-bold">HARVESTING: <span className="text-green-400 font-mono text-sm">{liveWatts}W</span> PEAK MPPT</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-400">Solar Array Inactive // System operating on 12.288 kWh Reserve</span>
                </>
              )}
            </div>
          </div>

          {/* Bottom Location Indicator */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5 text-green-400 font-bold">
              <MapPin className="w-3.5 h-3.5" /> Besant Nagar Beach Promenade
            </span>
            <span className="text-slate-300">
              {timeMode === 'day' ? 'Solar Irradiance: 5.8 kWh/m²/day' : 'Ambient Temp: 28°C Coastal'}
            </span>
          </div>
        </div>

        {/* Right: Commercial Night Food & Fish Stall Warm-Lit Atmosphere */}
        <div className={`lg:col-span-5 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-[#1e2638] flex flex-col justify-between min-h-[320px] transition-all duration-700 ${
          timeMode === 'night'
            ? 'bg-gradient-to-b from-[#190e24] via-[#0d0714] to-[#06030a]'
            : 'bg-gradient-to-b from-[#110c17] via-[#08060d] to-[#040306]'
        }`}>
          
          {/* Hanging Warm Amber Lightbulbs Illustration */}
          <div className="flex justify-around items-start pt-2">
            {[1, 2, 3].map((bulb) => (
              <div key={bulb} className="flex flex-col items-center">
                <div className="w-0.5 h-10 bg-slate-700"></div>
                <div className={`w-5 h-6 rounded-b-full border flex items-center justify-center transition-all duration-500 ${
                  timeMode === 'night'
                    ? 'bg-amber-400 shadow-[0_0_25px_#f59e0b] border-amber-300 animate-pulse'
                    : 'bg-amber-600/40 border-amber-800'
                }`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Commercial Stall Description Box */}
          <div className="my-auto py-4 text-center space-y-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto transition-all ${
              timeMode === 'night'
                ? 'bg-amber-500/20 border border-amber-500/60 text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)]'
                : 'bg-slate-900 border border-slate-800 text-slate-500'
            }`}>
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight">Commercial Fish & Seafood Stall</h4>
            <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
              {timeMode === 'night' 
                ? 'Powering deep chillers, bright prep festoon lamps, and digital POS scales at 0 dB whisper-quiet with zero exhaust fumes on the beach promenade.'
                : 'Daytime chiller prep while monocrystalline panels direct-charge the dual LiFePO₄ battery modules to 100% capacity.'}
            </p>
            <div className="inline-block px-3 py-1 rounded-full bg-green-950 text-green-400 border border-green-700 text-xs font-mono font-bold">
              {timeMode === 'night' ? `DISCHARGING: ${liveWatts}W CONTINUOUS` : 'NET SOLAR BALANCE: +1,760W SURPLUS'}
            </div>
          </div>

          {/* Bottom Operating Tag */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
            <span>OPERATING AUTONOMY:</span>
            <span className="text-green-400 font-bold">29+ HOURS CONTINUOUS</span>
          </div>
        </div>

      </div>

    </div>
  );
}
