import React, { useState, useEffect } from 'react';

export default function QuadrupedGraphic({ className = "" }) {
  const [lidarAngle, setLidarAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLidarAngle(prev => (prev + 4) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 520 320"
        className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bodyCarbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#252e3d" />
            <stop offset="40%" stopColor="#131722" />
            <stop offset="100%" stopColor="#080a0f" />
          </linearGradient>

          <linearGradient id="legBone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4f607a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <filter id="neonDogGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="lidarScanGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="80%" stopColor="#22c55e" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 360 LiDAR Active Radar Sweep Waveform */}
        <g transform="translate(255, 58)">
          <circle cx="0" cy="0" r="110" stroke="#22c55e" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.35" fill="none" />
          <circle cx="0" cy="0" r="70" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" fill="none" />
          {/* Animated Sweep Ray */}
          <line
            x1="0"
            y1="0"
            x2={110 * Math.cos((lidarAngle * Math.PI) / 180)}
            y2={110 * Math.sin((lidarAngle * Math.PI) / 180)}
            stroke="#22c55e"
            strokeWidth="1.5"
            filter="url(#neonDogGlow)"
          />
          {/* Detected Obstacle Point Cloud */}
          <circle cx="75" cy="-30" r="2.5" fill="#22c55e" filter="url(#neonDogGlow)" />
          <circle cx="-80" cy="40" r="2.5" fill="#38bdf8" filter="url(#neonDogGlow)" />
          <circle cx="95" cy="50" r="3" fill="#22c55e" filter="url(#neonDogGlow)" />
        </g>

        {/* Ambient Ground Shadow */}
        <ellipse cx="260" cy="285" rx="190" ry="16" fill="#000000" fillOpacity="0.75" />

        {/* --- BACK LEGS (Background pair) --- */}
        {/* Rear Left Upper Leg */}
        <line x1="145" y1="130" x2="120" y2="200" stroke="#1b2230" strokeWidth="12" strokeLinecap="round" />
        <circle cx="120" cy="200" r="10" fill="#0f1420" stroke="#2a354a" strokeWidth="2" />
        {/* Rear Left Lower Leg */}
        <line x1="120" y1="200" x2="105" y2="275" stroke="#1b2230" strokeWidth="9" strokeLinecap="round" />
        <circle cx="105" cy="275" r="7" fill="#22c55e" filter="url(#neonDogGlow)" />

        {/* Front Left Upper Leg */}
        <line x1="375" y1="130" x2="400" y2="200" stroke="#1b2230" strokeWidth="12" strokeLinecap="round" />
        <circle cx="400" cy="200" r="10" fill="#0f1420" stroke="#2a354a" strokeWidth="2" />
        {/* Front Left Lower Leg */}
        <line x1="400" y1="200" x2="415" y2="275" stroke="#1b2230" strokeWidth="9" strokeLinecap="round" />
        <circle cx="415" cy="275" r="7" fill="#22c55e" filter="url(#neonDogGlow)" />

        {/* --- MAIN TORSO CHASSIS --- */}
        <rect x="120" y="80" width="280" height="75" rx="20" fill="url(#bodyCarbon)" stroke="#2b364a" strokeWidth="2" />
        
        {/* Top Electronics / Battery Spine */}
        <rect x="140" y="70" width="230" height="14" rx="5" fill="#0d111a" stroke="#1e2638" strokeWidth="1" />
        
        {/* 360 LiDAR Puck on Top */}
        <rect x="235" y="48" width="40" height="22" rx="6" fill="#141a26" stroke="#22c55e" strokeWidth="1.5" />
        <line x1="235" y1="58" x2="275" y2="58" stroke="#22c55e" strokeWidth="2" filter="url(#neonDogGlow)" />
        <circle cx="255" cy="58" r="3" fill="#ffffff" />

        {/* Head Sensor Array (Vision Cameras & Depth Sensors) */}
        <path d="M 390 95 L 440 102 L 435 130 L 385 135 Z" fill="#121622" stroke="#334155" strokeWidth="1.5" />
        {/* Stereo Depth Lenses */}
        <circle cx="422" cy="112" r="5" fill="#05070a" stroke="#22c55e" strokeWidth="1.5" filter="url(#neonDogGlow)" />
        <circle cx="422" cy="122" r="4" fill="#05070a" stroke="#38bdf8" strokeWidth="1" />

        {/* Lateral Illuminated Neon Stripe */}
        <line x1="150" y1="120" x2="370" y2="120" stroke="#22c55e" strokeWidth="2" filter="url(#neonDogGlow)" opacity="0.9" />

        {/* --- FOREGROUND LEGS --- */}
        {/* Rear Right Hip Joint */}
        <circle cx="165" cy="120" r="16" fill="#1e2533" stroke="#475569" strokeWidth="2" />
        <line x1="165" y1="120" x2="140" y2="195" stroke="url(#legBone)" strokeWidth="14" strokeLinecap="round" />
        {/* Knee */}
        <circle cx="140" cy="195" r="11" fill="#111622" stroke="#22c55e" strokeWidth="2" />
        {/* Lower Shin & Foot */}
        <line x1="140" y1="195" x2="160" y2="280" stroke="url(#legBone)" strokeWidth="10" strokeLinecap="round" />
        <circle cx="160" cy="280" r="8" fill="#22c55e" filter="url(#neonDogGlow)" />

        {/* Front Right Hip Joint */}
        <circle cx="355" cy="120" r="16" fill="#1e2533" stroke="#475569" strokeWidth="2" />
        <line x1="355" y1="120" x2="375" y2="195" stroke="url(#legBone)" strokeWidth="14" strokeLinecap="round" />
        {/* Knee */}
        <circle cx="375" cy="195" r="11" fill="#111622" stroke="#22c55e" strokeWidth="2" />
        {/* Lower Shin & Foot */}
        <line x1="375" y1="195" x2="350" y2="280" stroke="url(#legBone)" strokeWidth="10" strokeLinecap="round" />
        <circle cx="350" cy="280" r="8" fill="#22c55e" filter="url(#neonDogGlow)" />

        {/* Cybernetic Vision Bounding Box Target */}
        <g transform="translate(425, 80)">
          <path d="M 0 0 L 10 0 M 0 0 L 0 10" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 40 0 L 30 0 M 40 0 L 40 10" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 0 40 L 10 40 M 0 40 L 0 30" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 40 40 L 30 40 M 40 40 L 40 30" stroke="#22c55e" strokeWidth="1.5" />
          <text x="0" y="52" fill="#22c55e" fontFamily="monospace" fontSize="8" fontWeight="bold">TARGET: 1.84m</text>
        </g>

        {/* Aerospace HUD Odometry Box */}
        <g transform="translate(30, 25)">
          <rect x="0" y="0" width="135" height="42" rx="6" fill="#090d16" fillOpacity="0.85" stroke="#1e293b" />
          <text x="10" y="16" fill="#22c55e" fontFamily="monospace" fontSize="8" fontWeight="bold">NAV2 // CARTOGRAPHER</text>
          <text x="10" y="28" fill="#ffffff" fontFamily="monospace" fontSize="10" fontWeight="bold">ODOM: 1.42 m/s</text>
          <text x="10" y="38" fill="#94a3b8" fontFamily="monospace" fontSize="7">PITCH +1.2° // ROLL -0.4°</text>
        </g>
      </svg>
    </div>
  );
}
