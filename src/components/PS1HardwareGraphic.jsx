import React, { useState, useEffect } from 'react';

export default function PS1HardwareGraphic({ 
  isExpanded = false, 
  angle = 'front', 
  highlightSubsystem = null,
  className = "" 
}) {
  // Dynamic MPPT solar jitter simulating real laboratory telemetry (418W - 425W)
  const [solarInput, setSolarInput] = useState(420);

  useEffect(() => {
    const interval = setInterval(() => {
      setSolarInput(Math.floor(418 + Math.random() * 8));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 640 420"
        className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Chassis Metallic Gradient - Brushed Titanium & Obsidian */}
          <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#252d3d" />
            <stop offset="25%" stopColor="#171c28" />
            <stop offset="70%" stopColor="#0d1017" />
            <stop offset="100%" stopColor="#06070a" />
          </linearGradient>

          {/* Top Edge Razor Specular Highlight */}
          <linearGradient id="topBevel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2a354a" />
            <stop offset="20%" stopColor="#4c5d7e" />
            <stop offset="50%" stopColor="#94a9cf" />
            <stop offset="80%" stopColor="#4c5d7e" />
            <stop offset="100%" stopColor="#2a354a" />
          </linearGradient>

          {/* OLED Screen Bezel Gradient */}
          <linearGradient id="screenBezel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f141f" />
            <stop offset="100%" stopColor="#030407" />
          </linearGradient>

          {/* Metal Heatsink / Socket Gradient */}
          <linearGradient id="metalSocket" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e2433" />
            <stop offset="50%" stopColor="#0f131c" />
            <stop offset="100%" stopColor="#07090e" />
          </linearGradient>

          {/* Neon Green Glow Filter */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="intenseGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="recessShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse 
          cx="320" 
          cy={angle === 'top' ? "380" : (isExpanded ? "405" : "375")} 
          rx="270" 
          ry="18" 
          fill="#000000" 
          fillOpacity="0.85" 
        />

        {/* ========================================================
            VIEW 1: FRONT VIEW (OLED Display & Subsystems)
            ======================================================== */}
        {angle === 'front' && (
          <g className="transition-all duration-300">
            {/* Outer Rounded Body */}
            <rect 
              x="70" 
              y="30" 
              width="500" 
              height="280" 
              rx="24" 
              fill="url(#chassisGrad)" 
              stroke={highlightSubsystem ? '#384860' : '#2a3244'} 
              strokeWidth="1.5" 
            />
            
            {/* Top Metallic Specular Gleam */}
            <rect x="74" y="32" width="492" height="3.5" rx="1.75" fill="url(#topBevel)" fillOpacity="0.95" />

            {/* Heavy Duty Side Carry Handles */}
            <rect x="42" y="90" width="30" height="120" rx="8" fill="#141720" stroke="#2c3447" strokeWidth="2" />
            <rect x="568" y="90" width="30" height="120" rx="8" fill="#141720" stroke="#2c3447" strokeWidth="2" />
            <line x1="56" y1="105" x2="56" y2="195" stroke="#4a5875" strokeWidth="3" strokeLinecap="round" />
            <line x1="584" y1="105" x2="584" y2="195" stroke="#4a5875" strokeWidth="3" strokeLinecap="round" />

            {/* Corner Rubberized Shock Bumpers */}
            <path d="M 72 54 Q 72 32 94 32" stroke="#10131a" strokeWidth="6" strokeLinecap="round" />
            <path d="M 568 54 Q 568 32 546 32" stroke="#10131a" strokeWidth="6" strokeLinecap="round" />
            <path d="M 72 286 Q 72 308 94 308" stroke="#10131a" strokeWidth="6" strokeLinecap="round" />
            <path d="M 568 286 Q 568 308 546 308" stroke="#10131a" strokeWidth="6" strokeLinecap="round" />

            {/* FRONT CONTROL PANEL (OLED CONSOLE) */}
            <rect 
              x="105" 
              y="60" 
              width="430" 
              height="195" 
              rx="16" 
              fill="url(#screenBezel)" 
              stroke={highlightSubsystem === 'bms' ? '#22c55e' : '#1a202c'} 
              strokeWidth={highlightSubsystem === 'bms' ? '2.5' : '1.5'} 
            />
            <rect x="115" y="68" width="410" height="175" rx="12" fill="#020306" />

            {/* Subsystem Highlight Zone - Inverter (Top Electronic Bay) */}
            {highlightSubsystem === 'inverter' && (
              <rect x="110" y="64" width="420" height="60" rx="10" stroke="#22c55e" strokeWidth="2" fill="#22c55e" fillOpacity="0.1" filter="url(#intenseGlow)" />
            )}

            {/* Subsystem Highlight Zone - MPPT (Left Input Sector) */}
            {highlightSubsystem === 'mppt' && (
              <rect x="125" y="112" width="115" height="85" rx="8" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.12" filter="url(#intenseGlow)" />
            )}

            {/* Subsystem Highlight Zone - Battery (Center Battery Gauge & Bottom Core) */}
            {highlightSubsystem === 'battery' && (
              <circle cx="320" cy="150" r="62" stroke="#22c55e" strokeWidth="2.5" fill="#22c55e" fillOpacity="0.14" filter="url(#intenseGlow)" />
            )}

            {/* Subsystem Highlight Zone - Cooling (Side Fan Vents) */}
            {highlightSubsystem === 'cooling' && (
              <g>
                <rect x="42" y="90" width="30" height="120" rx="8" stroke="#06b6d4" strokeWidth="2.5" fill="#06b6d4" fillOpacity="0.25" filter="url(#neonGlow)" />
                <rect x="568" y="90" width="30" height="120" rx="8" stroke="#06b6d4" strokeWidth="2.5" fill="#06b6d4" fillOpacity="0.25" filter="url(#neonGlow)" />
              </g>
            )}

            {/* Status Header inside OLED */}
            <text x="135" y="92" fill="#ffffff" fontFamily="sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.05em">ADB LABS</text>
            <text x="210" y="92" fill="#22c55e" fontFamily="monospace" fontSize="10" fontWeight="bold">PS1</text>
            <text x="238" y="92" fill="#64748b" fontFamily="monospace" fontSize="9">POWER STATION</text>

            {/* Live Status Indicators */}
            <circle cx="490" cy="88" r="4" fill="#22c55e" filter="url(#neonGlow)" />
            <text x="442" y="91" fill="#94a3b8" fontFamily="monospace" fontSize="9">ONLINE</text>
            
            {/* Live Oscillating Pure Sine Wave Graphic */}
            <g transform="translate(350, 84)">
              <text x="-4" y="7" fill="#38bdf8" fontFamily="monospace" fontSize="8" textAnchor="end">230V SINE</text>
              <path 
                d="M 5 3 Q 10 -4 15 3 T 25 3 T 35 3 T 45 3" 
                stroke="#22c55e" 
                strokeWidth="1.5" 
                fill="none" 
                filter="url(#neonGlow)"
              />
            </g>

            {/* Left Stat: Solar Input (Dynamic Jitter) */}
            <text x="145" y="130" fill="#94a3b8" fontFamily="monospace" fontSize="9" letterSpacing="0.08em">INPUT</text>
            <text x="145" y="160" fill="#ffffff" fontFamily="monospace" fontSize="24" fontWeight="bold">
              {solarInput}<tspan fontSize="13" fill="#22c55e">W</tspan>
            </text>
            <text x="145" y="178" fill="#64748b" fontFamily="monospace" fontSize="8">Solar MPPT Dynamic</text>

            {/* Center Circular Battery Gauge (82%) */}
            <g transform="translate(320, 150)">
              <circle cx="0" cy="0" r="46" stroke="#121722" strokeWidth="8" fill="none" />
              <circle
                cx="0"
                cy="0"
                r="46"
                stroke="#22c55e"
                strokeWidth="8"
                strokeDasharray="289"
                strokeDashoffset="52"
                strokeLinecap="round"
                fill="none"
                transform="rotate(-90)"
                filter="url(#neonGlow)"
              />
              <text x="0" y="8" fill="#ffffff" fontFamily="monospace" fontSize="30" fontWeight="900" textAnchor="middle">
                82<tspan fontSize="16" fill="#22c55e" fontWeight="bold">%</tspan>
              </text>
              <text x="0" y="24" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="600" textAnchor="middle">
                {isExpanded ? '12.288 kWh DUAL' : '6.144 kWh NOMINAL'}
              </text>
            </g>

            {/* Right Stat: AC Output Load */}
            <text x="495" y="130" fill="#94a3b8" fontFamily="monospace" fontSize="9" letterSpacing="0.08em" textAnchor="end">OUTPUT</text>
            <text x="495" y="160" fill="#ffffff" fontFamily="monospace" fontSize="24" fontWeight="bold" textAnchor="end">310<tspan fontSize="13" fill="#22c55e">W</tspan></text>
            <text x="495" y="178" fill="#64748b" fontFamily="monospace" fontSize="8" textAnchor="end">AC Load Active</text>

            {/* Illuminated Neon Green Accent Line */}
            <rect x="115" y="222" width="410" height="2.5" rx="1.25" fill="#22c55e" filter="url(#neonGlow)" />

            {/* Lower Front Panel Receptacles */}
            <rect x="105" y="268" width="430" height="28" rx="6" fill="#0d1017" stroke="#1e2535" strokeWidth="1" />
            <rect x="130" y="277" width="16" height="10" rx="3" fill="#05070a" stroke="#22c55e" strokeWidth="1" />
            <rect x="155" y="277" width="16" height="10" rx="3" fill="#05070a" stroke="#22c55e" strokeWidth="1" />
            <text x="180" y="285" fill="#64748b" fontFamily="monospace" fontSize="7">100W PD</text>

            <circle cx="250" cy="282" r="6" fill="#161c28" stroke="#334155" strokeWidth="1" />
            <text x="265" y="285" fill="#64748b" fontFamily="monospace" fontSize="7">12V / 30A DC</text>

            <line x1="360" y1="276" x2="440" y2="276" stroke="#1e2535" strokeWidth="2" strokeLinecap="round" />
            <line x1="360" y1="282" x2="440" y2="282" stroke="#1e2535" strokeWidth="2" strokeLinecap="round" />
            <line x1="360" y1="288" x2="440" y2="288" stroke="#1e2535" strokeWidth="2" strokeLinecap="round" />

            <circle cx="495" cy="282" r="8" fill="#141824" stroke="#22c55e" strokeWidth="1.5" filter="url(#neonGlow)" />
            <line x1="495" y1="278" x2="495" y2="283" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="495" cy="282" r="3.5" stroke="#ffffff" strokeWidth="1" fill="none" />
          </g>
        )}

        {/* ========================================================
            VIEW 2: REAR VIEW (Pure Sine AC Sockets, Breaker & Grid In)
            ======================================================== */}
        {angle === 'rear' && (
          <g className="transition-all duration-300">
            {/* Outer Chassis */}
            <rect x="70" y="30" width="500" height="280" rx="24" fill="url(#chassisGrad)" stroke="#2a3244" strokeWidth="1.5" />
            <rect x="74" y="32" width="492" height="4" rx="2" fill="url(#topBevel)" fillOpacity="0.7" />

            {/* Side Handles */}
            <rect x="42" y="90" width="30" height="120" rx="8" fill="#141720" stroke="#2c3447" strokeWidth="2" />
            <rect x="568" y="90" width="30" height="120" rx="8" fill="#141720" stroke="#2c3447" strokeWidth="2" />

            {/* Rear Main Panel Inset */}
            <rect x="105" y="55" width="430" height="225" rx="14" fill="#090c13" stroke="#1c2333" strokeWidth="1.5" />

            {/* Rear Panel Header */}
            <text x="125" y="80" fill="#94a3b8" fontFamily="monospace" fontSize="11" fontWeight="bold">REAR AC POWER & RECHARGING TERMINALS</text>
            <text x="440" y="80" fill="#22c55e" fontFamily="monospace" fontSize="10" fontWeight="bold">230V ~ 50Hz</text>
            <line x1="125" y1="90" x2="515" y2="90" stroke="#1f283d" strokeWidth="1" />

            {/* 4x Heavy-Duty Pure Sine AC Sockets with Indian 3-Pin Receptacles */}
            <g transform="translate(125, 105)">
              {[0, 1, 2, 3].map((idx) => {
                const xPos = idx * 62;
                return (
                  <g key={idx} transform={`translate(${xPos}, 0)`}>
                    <rect x="0" y="0" width="52" height="52" rx="8" fill="#0d111a" stroke="#2a3449" strokeWidth="1.5" />
                    <circle cx="26" cy="26" r="21" fill="#06080d" stroke="#19202f" strokeWidth="1" />
                    <circle cx="26" cy="15" r="4.5" fill="#1a202c" stroke="#475569" strokeWidth="1" />
                    <circle cx="17" cy="29" r="3.2" fill="#1a202c" stroke="#475569" strokeWidth="1" />
                    <circle cx="35" cy="29" r="3.2" fill="#1a202c" stroke="#475569" strokeWidth="1" />
                    <text x="26" y="44" fill="#22c55e" fontFamily="monospace" fontSize="7" textAnchor="middle" fontWeight="bold">16A PURE SINE</text>
                  </g>
                );
              })}
            </g>

            {/* Solar MPPT High Current Terminals */}
            <g transform="translate(390, 105)">
              <rect x="0" y="0" width="125" height="52" rx="8" fill="#0b0e15" stroke="#2a3449" strokeWidth="1.5" />
              <text x="10" y="16" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold">SOLAR MPPT IN (MC4)</text>
              <circle cx="30" cy="34" r="8" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5" />
              <text x="30" y="37" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">+</text>
              <circle cx="65" cy="34" r="8" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              <text x="65" y="37" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">-</text>
              <text x="95" y="37" fill="#38bdf8" fontFamily="monospace" fontSize="8">150V Max</text>
            </g>

            {/* Lower Recharging & Breaker Section */}
            <g transform="translate(125, 180)">
              <rect x="0" y="0" width="110" height="70" rx="8" fill="#0d111a" stroke="#2a3449" strokeWidth="1.5" />
              <text x="12" y="18" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold">AC GRID INPUT</text>
              <rect x="25" y="26" width="36" height="24" rx="4" fill="#05070a" stroke="#475569" strokeWidth="1" />
              <text x="12" y="60" fill="#22c55e" fontFamily="monospace" fontSize="7">15A AUTO-BYPASS</text>

              <g transform="translate(130, 0)">
                <rect x="0" y="0" width="110" height="70" rx="8" fill="#0d111a" stroke="#2a3449" strokeWidth="1.5" />
                <text x="12" y="18" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold">OVERLOAD BREAKER</text>
                <circle cx="55" cy="38" r="12" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
                <circle cx="55" cy="38" r="6" fill="#ef4444" />
                <text x="12" y="60" fill="#94a3b8" fontFamily="monospace" fontSize="7">30A PUSH TO RESET</text>
              </g>

              <g transform="translate(260, 0)">
                <rect x="0" y="0" width="130" height="70" rx="8" fill="#0d111a" stroke="#2a3449" strokeWidth="1.5" />
                <text x="12" y="18" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold">EARTH & DOCK BUS</text>
                <circle cx="30" cy="38" r="8" fill="#b45309" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="30" y="42" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">⏚</text>
                <rect x="65" y="26" width="45" height="24" rx="4" fill="#05070a" stroke="#22c55e" strokeWidth="1" />
                <text x="65" y="60" fill="#22c55e" fontFamily="monospace" fontSize="7">CAN SYNC</text>
              </g>
            </g>
          </g>
        )}

        {/* ========================================================
            VIEW 3: LEFT SIDE VIEW (Dual Forced-Air Intake & Washable Dust Filter)
            ======================================================== */}
        {angle === 'left' && (
          <g className="transition-all duration-300">
            <rect x="150" y="30" width="340" height="280" rx="24" fill="url(#chassisGrad)" stroke="#2a3244" strokeWidth="1.5" />
            <rect x="154" y="32" width="332" height="4" rx="2" fill="url(#topBevel)" fillOpacity="0.7" />

            <rect x="135" y="90" width="22" height="120" rx="6" fill="#141720" stroke="#2c3447" strokeWidth="2" />
            <line x1="146" y1="105" x2="146" y2="195" stroke="#3d4963" strokeWidth="3" strokeLinecap="round" />

            <rect x="180" y="55" width="280" height="225" rx="14" fill="#080b11" stroke="#1e273a" strokeWidth="1.5" />

            <text x="200" y="80" fill="#94a3b8" fontFamily="monospace" fontSize="9" fontWeight="bold">AIR INTAKE // REMOVABLE MESH</text>
            <text x="400" y="80" fill="#38bdf8" fontFamily="monospace" fontSize="8">PWM TUNED</text>
            <line x1="200" y1="88" x2="440" y2="88" stroke="#192233" strokeWidth="1" />

            <g transform="translate(210, 105)">
              <circle cx="50" cy="50" r="44" fill="#05070c" stroke="#2a364d" strokeWidth="2" />
              <circle cx="50" cy="50" r="16" fill="#141a26" stroke="#38bdf8" strokeWidth="1.5" />
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1="50"
                  y1="50"
                  x2={50 + 38 * Math.cos((deg * Math.PI) / 180)}
                  y2={50 + 38 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#334155"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              ))}
              <circle cx="50" cy="50" r="6" fill="#38bdf8" filter="url(#neonGlow)" />
              <text x="50" y="112" fill="#64748b" fontFamily="monospace" fontSize="8" textAnchor="middle">INVERTER FAN</text>

              <g transform="translate(120, 0)">
                <circle cx="50" cy="50" r="44" fill="#05070c" stroke="#2a364d" strokeWidth="2" />
                <circle cx="50" cy="50" r="16" fill="#141a26" stroke="#22c55e" strokeWidth="1.5" />
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <line
                    key={deg}
                    x1="50"
                    y1="50"
                    x2={50 + 38 * Math.cos(((deg + 30) * Math.PI) / 180)}
                    y2={50 + 38 * Math.sin(((deg + 30) * Math.PI) / 180)}
                    stroke="#334155"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                ))}
                <circle cx="50" cy="50" r="6" fill="#22c55e" filter="url(#neonGlow)" />
                <text x="50" y="112" fill="#64748b" fontFamily="monospace" fontSize="8" textAnchor="middle">BATTERY FAN</text>
              </g>
            </g>

            <rect x="200" y="235" width="240" height="28" rx="6" fill="#0d121c" stroke="#1f2a3f" strokeWidth="1" />
            <circle cx="215" cy="249" r="4" fill="#22c55e" />
            <text x="228" y="252" fill="#94a3b8" fontFamily="monospace" fontSize="8">
              IP54 DUST & COASTAL SALTSPRAY RESISTANT
            </text>
          </g>
        )}

        {/* ========================================================
            VIEW 4: RIGHT SIDE VIEW (Thermal Exhaust Louvers & CAN Bus Port)
            ======================================================== */}
        {angle === 'right' && (
          <g className="transition-all duration-300">
            <rect x="150" y="30" width="340" height="280" rx="24" fill="url(#chassisGrad)" stroke="#2a3244" strokeWidth="1.5" />
            <rect x="154" y="32" width="332" height="4" rx="2" fill="url(#topBevel)" fillOpacity="0.7" />

            <rect x="483" y="90" width="22" height="120" rx="6" fill="#141720" stroke="#2c3447" strokeWidth="2" />
            <line x1="494" y1="105" x2="494" y2="195" stroke="#3d4963" strokeWidth="3" strokeLinecap="round" />

            <g transform="translate(180, 60)">
              <rect x="0" y="0" width="280" height="155" rx="12" fill="#070a10" stroke="#1e283d" strokeWidth="1.5" />
              <text x="20" y="20" fill="#94a3b8" fontFamily="monospace" fontSize="9" fontWeight="bold">HEAT EXHAUST LOUVERS</text>
              {[...Array(9)].map((_, i) => (
                <rect 
                  key={i} 
                  x="20" 
                  y={24 + i * 11} 
                  width="240" 
                  height="6" 
                  rx="3" 
                  fill="#0e131d" 
                  stroke="#263145" 
                  strokeWidth="1" 
                />
              ))}
            </g>

            <g transform="translate(180, 230)">
              <rect x="0" y="0" width="280" height="55" rx="10" fill="#0b0f17" stroke="#1e283d" strokeWidth="1.5" />
              <text x="20" y="20" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold">ROBOTICS & BMS TELEMETRY</text>
              
              <rect x="20" y="27" width="24" height="20" rx="3" fill="#06080d" stroke="#38bdf8" strokeWidth="1" />
              <text x="50" y="40" fill="#cbd5e1" fontFamily="monospace" fontSize="7">CAN Bus</text>

              <rect x="110" y="27" width="24" height="20" rx="3" fill="#06080d" stroke="#22c55e" strokeWidth="1" />
              <text x="140" y="40" fill="#cbd5e1" fontFamily="monospace" fontSize="7">RS485 Modbus</text>

              <rect x="200" y="30" width="16" height="12" rx="2" fill="#06080d" stroke="#94a3b8" strokeWidth="1" />
              <text x="222" y="40" fill="#cbd5e1" fontFamily="monospace" fontSize="7">DIAG</text>
            </g>
          </g>
        )}

        {/* ========================================================
            VIEW 5: TOP VIEW (Wireless Charging Pads & Stacking Rails)
            ======================================================== */}
        {angle === 'top' && (
          <g className="transition-all duration-300">
            <rect x="70" y="50" width="500" height="260" rx="20" fill="url(#chassisGrad)" stroke="#2a3244" strokeWidth="1.5" />
            <rect x="74" y="52" width="492" height="4" rx="2" fill="url(#topBevel)" fillOpacity="0.7" />

            <rect x="100" y="70" width="440" height="12" rx="4" fill="#0e131d" stroke="#273247" strokeWidth="1" />
            <rect x="100" y="278" width="440" height="12" rx="4" fill="#0e131d" stroke="#273247" strokeWidth="1" />
            <line x1="110" y1="76" x2="530" y2="76" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="8 6" />
            <line x1="110" y1="284" x2="530" y2="284" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="8 6" />

            <g transform="translate(140, 105)">
              <rect x="0" y="0" width="150" height="150" rx="16" fill="#090d16" stroke="#1b2436" strokeWidth="1.5" />
              <circle cx="75" cy="75" r="48" stroke="#1e283d" strokeWidth="2" fill="none" />
              <circle cx="75" cy="75" r="32" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6 4" fill="none" filter="url(#neonGlow)" />
              <circle cx="75" cy="75" r="5" fill="#22c55e" />
              <text x="75" y="135" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">15W QI WIRELESS</text>
            </g>

            <g transform="translate(350, 105)">
              <rect x="0" y="0" width="150" height="150" rx="16" fill="#090d16" stroke="#1b2436" strokeWidth="1.5" />
              <circle cx="75" cy="75" r="48" stroke="#1e283d" strokeWidth="2" fill="none" />
              <circle cx="75" cy="75" r="32" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6 4" fill="none" filter="url(#neonGlow)" />
              <circle cx="75" cy="75" r="5" fill="#22c55e" />
              <text x="75" y="135" fill="#94a3b8" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">15W QI WIRELESS</text>
            </g>

            <rect x="302" y="105" width="36" height="150" rx="6" fill="#05070c" stroke="#171e2c" strokeWidth="1" />
            <text x="320" y="180" fill="#475569" fontFamily="monospace" fontSize="7" transform="rotate(-90 320 180)" textAnchor="middle">CABLE STOWAGE</text>
          </g>
        )}

        {/* ========================================================
            EXPANSION MODULE (If Active & in Front View)
            ======================================================== */}
        {isExpanded && angle === 'front' && (
          <g className="transition-all duration-500">
            <path d="M 320 310 L 320 326" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" filter="url(#neonGlow)" />
            <rect x="310" y="316" width="20" height="8" rx="2" fill="#0d111a" stroke="#22c55e" strokeWidth="1" />
            <rect x="70" y="326" width="500" height="60" rx="16" fill="url(#chassisGrad)" stroke="#22c55e" strokeWidth="1.5" />
            <circle cx="115" cy="356" r="4" fill="#22c55e" filter="url(#neonGlow)" />
            <text x="130" y="360" fill="#ffffff" fontFamily="monospace" fontSize="10" fontWeight="bold">
              EXPANSION MODULE // +6.144 kWh LiFePO₄
            </text>
            <text x="470" y="360" fill="#22c55e" fontFamily="monospace" fontSize="9" fontWeight="bold">
              BUS SYNC: 100%
            </text>
          </g>
        )}

        {/* ========================================================
            HEAVY DUTY CASTER WHEELS (For Front, Rear, Left, Right)
            ======================================================== */}
        {angle !== 'top' && (
          <g transform={`translate(0, ${isExpanded && angle === 'front' ? 76 : 0})`}>
            {(angle === 'front' || angle === 'rear') && (
              <>
                <rect x="130" y="310" width="40" height="15" rx="3" fill="#141822" stroke="#283245" strokeWidth="1.5" />
                <circle cx="140" cy="336" r="14" fill="#10131c" stroke="#333e54" strokeWidth="2" />
                <circle cx="160" cy="336" r="14" fill="#10131c" stroke="#333e54" strokeWidth="2" />
                <circle cx="150" cy="336" r="4" fill="#3b4861" />

                <rect x="470" y="310" width="40" height="15" rx="3" fill="#141822" stroke="#283245" strokeWidth="1.5" />
                <circle cx="480" cy="336" r="14" fill="#10131c" stroke="#333e54" strokeWidth="2" />
                <circle cx="500" cy="336" r="14" fill="#10131c" stroke="#333e54" strokeWidth="2" />
                <circle cx="490" cy="336" r="4" fill="#3b4861" />
              </>
            )}

            {(angle === 'left' || angle === 'right') && (
              <>
                <rect x="180" y="310" width="40" height="15" rx="3" fill="#141822" stroke="#283245" strokeWidth="1.5" />
                <circle cx="190" cy="336" r="14" fill="#10131c" stroke="#333e54" strokeWidth="2" />
                <circle cx="210" cy="336" r="14" fill="#10131c" stroke="#333e54" strokeWidth="2" />
                <circle cx="200" cy="336" r="4" fill="#3b4861" />

                <rect x="420" y="310" width="40" height="15" rx="3" fill="#141822" stroke="#283245" strokeWidth="1.5" />
                <circle cx="430" cy="336" r="14" fill="#10131c" stroke="#333e54" strokeWidth="2" />
                <circle cx="450" cy="336" r="14" fill="#10131c" stroke="#333e54" strokeWidth="2" />
                <circle cx="440" cy="336" r="4" fill="#3b4861" />
              </>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
