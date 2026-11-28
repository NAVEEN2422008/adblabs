import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight } from 'lucide-react';
import OrzoViewer from '../../three/OrzoViewer';

export default function OrzoShowcase() {
  return (
    <section className="py-20 px-6 lg:px-8 border-y border-white/10 bg-[#091310]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-bold block mb-2">ROBOTICS &amp; AI R&amp;D</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            ORZO Quadruped Platform
          </h2>
          <p className="text-[#A3ADA5] mt-4 text-sm sm:text-base leading-relaxed">
            Bio-inspired 12-DoF quadruped robot with gait physics, CAN-bus motor control, and autonomous
            navigation. Drag to orbit the procedural model.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-300">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" /> Dynamic multi-terrain balance</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" /> CAN-bus motor control firmware</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" /> Stereo depth AI perception</li>
          </ul>
          <Link
            to="/robotics-rd"
            className="inline-flex items-center gap-2 mt-8 bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition"
          >
            <Bot className="w-4 h-4 text-[#38bdf8]" />
            <span>Explore Robotics Division</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <OrzoViewer />
      </div>
    </section>
  );
}
