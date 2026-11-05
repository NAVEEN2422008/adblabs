import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Cpu, 
  Bot, 
  Lightbulb, 
  ShieldCheck, 
  Layers, 
  Sun, 
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO, ABOUT_FOCUS_AREAS } from '../data/websiteData';
import LabFacilityGraphic from './LabFacilityGraphic';

export default function AboutSection({ isSubView = false }) {
  return (
    <section id="about" className="py-24 bg-[#06080f] relative overflow-hidden border-t border-[#141824]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] ambient-glow-green rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb if in subview */}
        {isSubView && (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
            <span>Company</span>
            <span>&gt;</span>
            <span className="text-green-400 font-semibold">About ADB Labs</span>
          </div>
        )}

        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-green-400 uppercase tracking-wider mb-2">
            ENGINEERING & PROTOTYPING ETHOS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-green-400">ADB Labs</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
            {COMPANY_INFO.aboutDescription}
          </p>
        </div>

        {/* R&D Lab Facility Presentation Banner (Matching Mockup) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-[#0c121e] via-[#090d18] to-[#05070e] border border-[#1b2234] p-6 sm:p-10 mb-10 overflow-hidden relative shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-green-400 font-bold uppercase tracking-wider">
                CHENNAI ENGINEERING FACILITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Bridging Theory & Field Reality
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe practical hardware innovation requires rigorous prototyping, physical load profiling, and field experimentation. Our facility designs, tests, and deploys clean power electronics and autonomous robotics built for tough Indian environmental conditions.
              </p>
              
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-green-400 shrink-0" />
                <span>Facility Location: Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Clean Architectural R&D Studio Graphic (Exact Mockup Match) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <LabFacilityGraphic className="w-full max-w-md shadow-2xl border border-slate-800" />
            </div>

          </div>
        </motion.div>

        {/* Our Focus Areas Grid (Exact 8 items from Mockup) */}
        <div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 font-bold">
            Our Focus Areas
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {ABOUT_FOCUS_AREAS.map((area, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, borderColor: 'rgba(34, 197, 94, 0.4)' }}
                className="p-4 rounded-xl bg-[#0b0e16] border border-[#1b2234] transition-all flex items-center justify-between group shadow"
              >
                <span className="text-xs font-bold text-white group-hover:text-green-400 transition-colors">
                  {area}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:scale-125 transition-transform shadow-[0_0_8px_#22c55e]"></span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
