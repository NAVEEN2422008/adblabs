import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Battery, 
  Zap, 
  Sun, 
  Layers, 
  Shield, 
  ArrowRight, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';
import { PS1_DETAILS } from '../data/websiteData';
import PS1HardwareGraphic from './PS1HardwareGraphic';

export default function PS1Showcase({ onOpenQuote }) {
  const [activeAngle, setActiveAngle] = useState('front');

  const iconMap = {
    Battery: Battery,
    Zap: Zap,
    Sun: Sun,
    Layers: Layers,
    Shield: Shield
  };

  const currentAngleObj = PS1_DETAILS.angles.find(a => a.id === activeAngle);

  return (
    <section id="ps1" className="py-24 bg-[#060709] relative overflow-hidden border-t border-[#141824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb matching Mockup */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
          <span>Power Stations</span>
          <span>&gt;</span>
          <span className="text-green-400 font-semibold">ADB Labs PS1 Power Station</span>
        </div>

        {/* Title, Badge & Subhead */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                ADB Labs PS1 Power Station
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-green-950 text-green-400 border border-green-800">
                {PS1_DETAILS.badge}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              {PS1_DETAILS.tagline}
            </p>
          </div>

          {/* Action Buttons matching Mockup */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-green-500 hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all"
            >
              Enquire Now
            </button>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 border border-slate-700 hover:border-slate-500 transition-all"
            >
              Request Specs
            </button>
          </div>
        </div>

        {/* Large Hardware Visual & Multi-Angle Display Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-b from-[#0c121e] to-[#06080e] border border-[#1b2234] p-6 sm:p-10 shadow-2xl relative"
        >
          {/* Main Visual Display using the precision digital twin */}
          <div className="min-h-[340px] sm:min-h-[460px] flex flex-col items-center justify-center py-4 relative">
            <div className="w-full max-w-2xl flex flex-col items-center justify-center">
              <PS1HardwareGraphic isExpanded={false} angle={activeAngle} className="w-full max-w-xl" />

              <div className="mt-4 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-slate-800 flex items-center justify-between text-xs font-mono w-full max-w-xl">
                <span className="text-slate-300">ANGLE VIEW: <strong className="text-green-400">{currentAngleObj?.label.toUpperCase()}</strong></span>
                <span className="text-slate-400">{currentAngleObj?.desc}</span>
              </div>
            </div>
          </div>

          {/* Angle View Selector Buttons (Exact from Mockup) */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3">
            {PS1_DETAILS.angles.map((angle) => {
              const isSelected = activeAngle === angle.id;

              return (
                <button
                  key={angle.id}
                  onClick={() => setActiveAngle(angle.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    isSelected
                      ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                      : 'bg-[#080a10] border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {angle.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 5 Key Highlights Strip (Exact Cards from Mockup) */}
        <div className="mt-10">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 font-bold">
            Key Highlights
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {PS1_DETAILS.keyHighlights.map((item, idx) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0b0e16] border border-[#1b2234] text-center flex flex-col items-center justify-center group hover:border-green-500/40 transition-colors shadow-lg"
                >
                  <Icon className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-base font-bold font-mono text-white">{item.value}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
