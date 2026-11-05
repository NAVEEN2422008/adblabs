import React, { useState, useEffect } from 'react';

export default function RoboticArmGraphic({ className = "" }) {
  const [kinematics, setKinematics] = useState({
    j1: 45.0,
    j2: -28.4,
    j3: 84.6,
    j4: 12.0,
    j5: -45.2,
    j6: 0.0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setKinematics({
        j1: Number((45.0 + Math.sin(Date.now() / 1500) * 3).toFixed(1)),
        j2: Number((-28.4 + Math.cos(Date.now() / 1200) * 2).toFixed(1)),
        j3: Number((84.6 + Math.sin(Date.now() / 1000) * 2.5).toFixed(1)),
        j4: Number((12.0 + Math.cos(Date.now() / 900) * 1.5).toFixed(1)),
        j5: -45.2,
        j6: Number((Math.sin(Date.now() / 800) * 4).toFixed(1))
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 500 360"
        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="armMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          <linearGradient id="jointDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>

          <filter id="neonArmGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="250" cy="330" rx="180" ry="14" fill="#000000" fillOpacity="0.6" />

        {/* --- MOUNTING BASE --- */}
        <rect x="180" y="295" width="140" height="25" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <rect x="200" y="275" width="100" height="20" rx="4" fill="url(#jointDark)" stroke="#475569" strokeWidth="1.5" />
        
        {/* Base Turret Rotator */}
        <ellipse cx="250" cy="275" rx="35" ry="12" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
        <circle cx="250" cy="275" r="8" fill="#22c55e" filter="url(#neonArmGlow)" />

        {/* --- JOINT 1 & LINK 1 (Shoulder) --- */}
        <path d="M 235 270 L 210 170 L 260 160 L 265 270 Z" fill="url(#armMetal)" stroke="#334155" strokeWidth="1.5" />
        {/* Axis 2 Joint Housing */}
        <circle cx="235" cy="165" r="28" fill="url(#jointDark)" stroke="#475569" strokeWidth="2" />
        <circle cx="235" cy="165" r="14" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />

        {/* --- LINK 2 (Forearm) --- */}
        <path d="M 225 155 L 340 90 L 355 125 L 245 180 Z" fill="url(#armMetal)" stroke="#334155" strokeWidth="1.5" />
        
        {/* Cable Harness */}
        <path d="M 240 270 Q 200 200 225 155 Q 260 110 340 95" stroke="#22c55e" strokeWidth="3" fill="none" strokeDasharray="6 3" opacity="0.8" />

        {/* Axis 3 Elbow Joint */}
        <circle cx="345" cy="108" r="22" fill="url(#jointDark)" stroke="#475569" strokeWidth="2" />
        <circle cx="345" cy="108" r="10" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" />

        {/* --- WRIST & END EFFECTOR --- */}
        <rect x="355" y="98" width="35" height="20" rx="4" transform="rotate(30, 355, 98)" fill="url(#jointDark)" stroke="#64748b" strokeWidth="1.5" />
        
        {/* 2-Finger Precision Gripper */}
        <g transform="translate(385, 110) rotate(30)">
          <rect x="0" y="-8" width="18" height="16" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <path d="M 18 -6 L 38 -12 L 44 -4" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#neonArmGlow)" />
          <path d="M 18 6 L 38 12 L 44 4" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#neonArmGlow)" />
          <line x1="44" y1="0" x2="90" y2="0" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        </g>

        {/* Live Kinematics Readout HUD Overlay */}
        <g transform="translate(30, 30)">
          <rect x="0" y="0" width="170" height="70" rx="8" fill="#090d16" fillOpacity="0.9" stroke="#1e293b" />
          <text x="12" y="18" fill="#22c55e" fontFamily="monospace" fontSize="8" fontWeight="bold">6-DOF REAL-TIME KINEMATICS</text>
          <text x="12" y="32" fill="#ffffff" fontFamily="monospace" fontSize="9">J1: {kinematics.j1}° // J2: {kinematics.j2}°</text>
          <text x="12" y="46" fill="#ffffff" fontFamily="monospace" fontSize="9">J3: {kinematics.j3}° // J4: {kinematics.j4}°</text>
          <text x="12" y="60" fill="#94a3b8" fontFamily="monospace" fontSize="8">PAYLOAD: 5.0kg | ±0.02mm</text>
        </g>
      </svg>
    </div>
  );
}
