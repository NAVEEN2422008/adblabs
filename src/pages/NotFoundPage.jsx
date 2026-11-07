import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Home, Zap } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-[85vh] flex items-center justify-center px-4 selection:bg-[#A3FF35] selection:text-black">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        
        {/* Error Code Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101C17] border border-white/10 text-xs text-[#A3FF35] font-mono">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>ERROR // 404_BUS_OFFLINE</span>
        </div>

        {/* Big Code */}
        <h1 className="text-7xl sm:text-9xl font-black font-heading text-white tracking-tighter">
          4<span className="text-[#A3FF35]">0</span>4
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
          Circuit Not Found.
        </h2>
        <p className="text-[#A3ADA5] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          The requested engineering coordinate does not exist or has been relocated to another subsystem.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-6 py-3 rounded-full transition shadow-[0_0_20px_rgba(163,255,55,0.25)] flex items-center gap-2 group font-heading"
          >
            <Home className="w-4 h-4" />
            <span>Return to Main Platform</span>
          </Link>
          <Link
            to="/power-stations/adb-ps1"
            className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 px-6 py-3 rounded-full text-xs font-semibold transition flex items-center gap-2"
          >
            <span>Explore PS1 Hardware</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A3FF35]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
