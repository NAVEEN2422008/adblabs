import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  Monitor, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  BellRing,
  Bot
} from 'lucide-react';
import { INTERNSHIP_DETAILS } from '../data/websiteData';
import RoboticArmGraphic from './RoboticArmGraphic';

export default function InternshipSection({ isSubView = false, onOpenInternshipModal }) {
  return (
    <section id="internship" className="py-24 bg-[#06080f] relative overflow-hidden border-t border-[#141824]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] ambient-glow-green rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb if in subview */}
        {isSubView && (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
            <span>Programs</span>
            <span>&gt;</span>
            <span className="text-green-400 font-semibold">Robotics & AI Industrial Internship</span>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-green-950 text-green-400 border border-green-800 mb-2 font-bold">
              {INTERNSHIP_DETAILS.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {INTERNSHIP_DETAILS.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              {INTERNSHIP_DETAILS.subtitle}
            </p>
          </div>

          {/* Action Buttons matching Mockup */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenInternshipModal}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-green-500 hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center gap-1.5"
            >
              <span>{INTERNSHIP_DETAILS.cta}</span>
              <BellRing className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenInternshipModal}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 border border-slate-700 hover:border-slate-500 transition-all"
            >
              Program Details
            </button>
          </div>
        </div>

        {/* Hero Card with Precision 6-Axis Robotic Arm Visual & 4 Stats Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-b from-[#0c121e] to-[#06080e] border border-[#1b2234] p-6 sm:p-10 mb-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Precision Robotic Arm Visual */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <RoboticArmGraphic className="w-full max-w-sm" />
            </div>

            {/* 4 Highlight Pills (Exact from Mockup) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-[#080a10] border border-slate-800 flex items-center gap-3 shadow">
                <Calendar className="w-5 h-5 text-green-400 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">6 Weeks Duration</div>
                  <div className="text-[10px] text-slate-400 font-mono">Structured weekly progress</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080a10] border border-slate-800 flex items-center gap-3 shadow">
                <Clock className="w-5 h-5 text-green-400 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">18 Live Sessions</div>
                  <div className="text-[10px] text-slate-400 font-mono">Direct mentor interaction</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080a10] border border-slate-800 flex items-center gap-3 shadow">
                <Monitor className="w-5 h-5 text-green-400 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">Project-Based Learning</div>
                  <div className="text-[10px] text-slate-400 font-mono">100% Simulation accessible</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080a10] border border-slate-800 flex items-center gap-3 shadow">
                <Users className="w-5 h-5 text-green-400 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white">Target Disciplines</div>
                  <div className="text-[10px] text-slate-400 font-mono">CSE, AI/ML, ECE, EEE, Mech</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 6-Week Learning Journey (Horizontal Timeline Tracker - Exact from Mockup) */}
        <div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 font-bold">
            6-Week Learning Journey
          </div>

          <div className="relative">
            {/* Horizontal Timeline Track */}
            <div className="hidden lg:block absolute top-5 left-6 right-6 h-0.5 bg-slate-800 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {INTERNSHIP_DETAILS.journey.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0b0e16] border border-[#1b2234] hover:border-green-500/40 transition-all text-left flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-7 h-7 rounded-full bg-green-500/20 text-green-400 border border-green-500/50 flex items-center justify-center font-mono text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-[11px] font-mono text-green-400 font-bold uppercase">{item.week}</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-2">{item.title}</div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
