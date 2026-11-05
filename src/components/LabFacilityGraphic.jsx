import React from 'react';

export default function LabFacilityGraphic({ className = "" }) {
  return (
    <div className={`relative select-none overflow-hidden rounded-2xl ${className}`}>
      <svg
        viewBox="0 0 520 340"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Wall Texture Gradient */}
          <linearGradient id="labWall" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#181e2b" />
            <stop offset="50%" stopColor="#0e131d" />
            <stop offset="100%" stopColor="#080a10" />
          </linearGradient>

          {/* Wooden Slat Gradient */}
          <linearGradient id="woodSlat" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#452c1e" />
            <stop offset="50%" stopColor="#2e1d13" />
            <stop offset="100%" stopColor="#1a0f0a" />
          </linearGradient>

          {/* Polished Terrazzo / Concrete Floor */}
          <linearGradient id="labFloor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#101520" />
            <stop offset="100%" stopColor="#06080e" />
          </linearGradient>

          {/* Reception Counter Marble / Slate */}
          <linearGradient id="deskFront" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#283244" />
            <stop offset="50%" stopColor="#1e2533" />
            <stop offset="100%" stopColor="#141924" />
          </linearGradient>

          {/* Warm Architectural Downlight */}
          <radialGradient id="downlightWarm" cx="50%" cy="0%" r="90%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Neon Logo Glow */}
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- ROOM BACKGROUND (Wall & Floor) --- */}
        {/* Back Wall */}
        <rect x="0" y="0" width="520" height="230" fill="url(#labWall)" />

        {/* Ceiling Warm Recessed Track Lights */}
        <rect x="0" y="0" width="520" height="25" fill="#0b0e14" />
        <ellipse cx="120" cy="18" rx="70" ry="22" fill="url(#downlightWarm)" />
        <ellipse cx="380" cy="18" rx="80" ry="24" fill="url(#downlightWarm)" />
        <circle cx="120" cy="8" r="4" fill="#fef08a" />
        <circle cx="260" cy="8" r="4" fill="#fef08a" />
        <circle cx="380" cy="8" r="4" fill="#fef08a" />

        {/* Vertical Acoustic Wooden Slats on Left Wall Section */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => (
          <rect 
            key={idx} 
            x={15 + idx * 11} 
            y="25" 
            width="5" 
            height="180" 
            rx="1.5" 
            fill="url(#woodSlat)" 
          />
        ))}

        {/* Polished Dark Concrete Floor */}
        <polygon points="0,205 520,205 520,340 0,340" fill="url(#labFloor)" />
        <line x1="0" y1="205" x2="520" y2="205" stroke="#1f283d" strokeWidth="1.5" />

        {/* --- SIGNATURE FEATURE WALL WITH ILLUMINATED ADB LABS BRAND --- */}
        {/* Matte Charcoal Feature Panel */}
        <rect x="300" y="45" width="200" height="110" rx="12" fill="#0c1018" stroke="#1d2638" strokeWidth="1.5" />
        
        {/* Illuminated 3D Logo on Feature Wall (Exact Mockup Match) */}
        <text 
          x="400" 
          y="95" 
          fill="#ffffff" 
          fontFamily="system-ui, sans-serif" 
          fontSize="24" 
          fontWeight="900" 
          letterSpacing="0.08em" 
          textAnchor="middle"
        >
          ADB LABS
        </text>
        <circle cx="480" cy="85" r="4" fill="#22c55e" filter="url(#logoGlow)" />
        
        <text 
          x="400" 
          y="115" 
          fill="#64748b" 
          fontFamily="monospace" 
          fontSize="8" 
          letterSpacing="0.15em" 
          textAnchor="middle"
        >
          R&D • HARDWARE • ROBOTICS
        </text>
        <line x1="330" y1="125" x2="470" y2="125" stroke="#22c55e" strokeWidth="1.5" filter="url(#logoGlow)" />

        {/* --- GLASS PARTITION TO CLEANROOM LAB (Right Background) --- */}
        <rect x="150" y="55" width="130" height="150" rx="4" fill="#040b17" fillOpacity="0.8" stroke="#1e293b" strokeWidth="1" />
        <line x1="215" y1="55" x2="215" y2="205" stroke="#1e293b" strokeWidth="1" />
        
        {/* Digital Oscilloscope / Bench Instruments Glow Inside Partition */}
        <rect x="165" y="110" width="35" height="22" rx="3" fill="#030712" stroke="#22c55e" strokeWidth="1" />
        <path d="M 170 121 Q 175 114 182 121 T 195 121" stroke="#22c55e" strokeWidth="1.5" fill="none" />
        
        <rect x="225" y="105" width="45" height="28" rx="3" fill="#030712" stroke="#38bdf8" strokeWidth="1" />
        <rect x="230" y="110" width="35" height="16" rx="2" fill="#082f49" />
        <text x="247" y="121" fill="#38bdf8" fontFamily="monospace" fontSize="6" textAnchor="middle">TEST BENCH</text>

        {/* --- MODERN MINIMALIST RECEPTION / DEMO BENCH --- */}
        {/* Counter Top Specular Shadow */}
        <polygon points="120,185 460,185 480,205 100,205" fill="#334155" />
        <polygon points="124,187 456,187 476,203 104,203" fill="#1e293b" />

        {/* Counter Face (Dark Fluted Front with Ambient Bottom LED Underglow) */}
        <polygon points="100,205 480,205 460,285 120,285" fill="url(#deskFront)" stroke="#263145" strokeWidth="1" />
        
        {/* Counter LED Ambient Underglow Strip */}
        <line x1="122" y1="284" x2="458" y2="284" stroke="#22c55e" strokeWidth="3" filter="url(#logoGlow)" />
        <ellipse cx="290" cy="288" rx="160" ry="10" fill="#22c55e" fillOpacity="0.25" />

        {/* Minimalist Laptop & Spec Sheet on Counter */}
        {/* Laptop Screen & Keyboard */}
        <polygon points="210,172 245,172 248,188 207,188" fill="#0f172a" stroke="#475569" strokeWidth="1" />
        <rect x="214" y="174" width="28" height="12" rx="1" fill="#0284c7" fillOpacity="0.8" />
        <polygon points="204,188 251,188 255,198 200,198" fill="#334155" />

        {/* PS1 Prototype Showcase on Right Side of Bench */}
        <g transform="translate(370, 145) scale(0.22)">
          <rect x="0" y="0" width="300" height="180" rx="18" fill="#141822" stroke="#22c55e" strokeWidth="4" />
          <rect x="25" y="25" width="250" height="110" rx="10" fill="#05070a" />
          <circle cx="150" cy="80" r="30" stroke="#22c55e" strokeWidth="5" fill="none" />
          <text x="150" y="87" fill="#ffffff" fontFamily="monospace" fontSize="22" fontWeight="bold" textAnchor="middle">82%</text>
        </g>

        {/* Modern Scandinavian Ficus Indoor Planter on Left */}
        <g transform="translate(60, 195)">
          {/* Ceramic Pot */}
          <polygon points="10,40 35,40 32,80 13,80" fill="#090d16" stroke="#1f283d" strokeWidth="1.5" />
          {/* Foliage Leaves */}
          <ellipse cx="22" cy="30" rx="18" ry="12" fill="#14532d" />
          <ellipse cx="14" cy="18" rx="14" ry="10" fill="#166534" />
          <ellipse cx="32" cy="16" rx="15" ry="9" fill="#15803d" />
          <ellipse cx="24" cy="6" rx="10" ry="16" fill="#22c55e" />
        </g>
      </svg>
    </div>
  );
}