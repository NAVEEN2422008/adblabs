import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Sun, 
  Battery, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Building2,
  ExternalLink
} from 'lucide-react';
import { BESANT_NAGAR_PROJECT } from '../data/websiteData';
import BesantNagarVisual from './BesantNagarVisual';

export default function ProjectsShowcase({ isSubView = false, onOpenQuote }) {
  return (
    <section id="projects" className="py-24 bg-[#060709] relative overflow-hidden border-t border-[#141824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb if in subview */}
        {isSubView && (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
            <span>Projects</span>
            <span>&gt;</span>
            <span className="text-green-400 font-semibold">Besant Nagar Off-Grid System</span>
          </div>
        )}

        {/* Section Header matching Mockup */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-green-950 text-green-400 border border-green-800 mb-2 font-bold">
            {BESANT_NAGAR_PROJECT.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {BESANT_NAGAR_PROJECT.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            {BESANT_NAGAR_PROJECT.tagline}
          </p>
        </div>

        {/* Main Project Card with Precision Coastal Solar & Night Stall Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#0b0e16] border border-[#1b2234] overflow-hidden shadow-2xl"
        >
          {/* Dual Visual Stage: Daytime Coastal 2.88 kWp Solar + Evening Commercial Stall */}
          <BesantNagarVisual />

          {/* Project Overview Table (Exact from Mockup) */}
          <div className="p-6 sm:p-8">
            <h3 className="text-xs font-mono uppercase text-green-400 tracking-wider mb-4 font-bold">
              PROJECT OVERVIEW & VALIDATION METRICS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              {BESANT_NAGAR_PROJECT.overview.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#06080e] border border-[#171f2e]"
                >
                  <span className="text-slate-400">{item.label}:</span>
                  <span className="font-bold text-white text-right">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Description & Button */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl font-sans">
                {BESANT_NAGAR_PROJECT.description}
              </p>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-black bg-green-500 hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Inquire for Similar Deployment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
