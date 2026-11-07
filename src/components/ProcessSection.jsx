import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Cpu, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/websiteData';

export default function ProcessSection() {
  const iconMap = {
    Search: Search,
    Compass: Compass,
    Cpu: Cpu,
    CheckCircle: CheckCircle2,
    Send: Send
  };

  return (
    <section id="process" className="py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative bg-black overflow-hidden">
      {/* Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#38bdf8]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#38bdf8]">
            Engineering Pipeline
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
            Our <span className="bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#38bdf8] bg-clip-text text-transparent">Process.</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            From preliminary research and mathematical modeling to physical prototyping, lab validation, and real-world deployment.
          </p>
        </div>

        {/* 5-Step Process Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = iconMap[item.icon] || Cpu;
            const isLast = idx === PROCESS_STEPS.length - 1;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-[28px] bg-[#090b10] border border-white/[0.08] hover:border-[#38bdf8]/40 transition-all flex flex-col justify-between relative group shadow-2xl text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold text-[#38bdf8] px-2.5 py-0.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20">
                      STEP {item.step}
                    </span>
                    {!isLast && (
                      <ArrowRight className="w-4 h-4 text-neutral-600 hidden lg:block group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 text-[#38bdf8] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#38bdf8]/10 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[10px] font-mono text-neutral-500 uppercase">
                  Phase 0{idx + 1} Execution
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
