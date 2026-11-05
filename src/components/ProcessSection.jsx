import React from 'react';
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
    <section id="process" className="py-20 bg-[#04060c] relative overflow-hidden border-t border-[#161c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Mockup */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our <span className="text-green-400">Process</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1">
            From idea to real-world deployment.
          </p>
        </div>

        {/* 5-Step Process Pipeline matching Mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = iconMap[item.icon] || Cpu;
            const isLast = idx === PROCESS_STEPS.length - 1;

            return (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#080d19] border border-[#1b2336] hover:border-green-500/40 transition-all flex flex-col justify-between relative group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-green-400 font-bold px-2 py-0.5 rounded bg-green-950 border border-green-800">
                      STEP {item.step}
                    </span>
                    {!isLast && (
                      <ArrowRight className="w-4 h-4 text-slate-600 hidden lg:block group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-green-400 w-fit mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-green-400 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
