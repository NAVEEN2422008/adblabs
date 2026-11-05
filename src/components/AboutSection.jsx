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
  MapPin,
  Users,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, ABOUT_FOCUS_AREAS } from '../data/websiteData';
import LabFacilityGraphic from './LabFacilityGraphic';

export default function AboutSection({ isSubView = false, onNavigateToTeam }) {
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

        {/* R&D Lab Facility Presentation Banner */}
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

            {/* Clean Architectural R&D Studio Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <LabFacilityGraphic className="w-full max-w-md shadow-2xl border border-slate-800" />
            </div>

          </div>
        </motion.div>

        {/* Our Focus Areas Grid */}
        <div className="mb-12">
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

        {/* Core Engineering Team & Roster Showcase Banner */}
        {onNavigateToTeam && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-green-950/30 via-[#0d1624] to-[#070b14] border border-green-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="space-y-2 text-center sm:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>17 MULTIDISCIPLINARY CREW MEMBERS</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Meet the Engineers Behind ADB Labs
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Explore individual research portfolios, project contributions, and technical competencies for each verified crew member (<code className="text-green-400 font-mono">ADB-446-001</code> through <code className="text-green-400 font-mono">ADB-446-017</code>).
              </p>
            </div>

            <button
              onClick={onNavigateToTeam}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold text-xs sm:text-sm font-mono transition-all whitespace-nowrap shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:scale-105 relative z-10"
            >
              <span>Explore Team Portfolios</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
