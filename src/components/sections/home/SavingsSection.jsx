import React from 'react';
import { motion } from 'framer-motion';

export default function SavingsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">TOP-TIER SAVINGS</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">Save More. Pay Back Faster</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-4 leading-relaxed">
            X-Fusion-style self-consumption: your solar powers your home first, then charges the PS1 for after dark, so you buy less from the grid. {/* TODO: verify savings claims */}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[#A3ADA5]">
            {['Work With The Grid — buy less at peak rates', 'Rooftop-grade Solar Input — up to 2.88 kWp', 'Full Power, Lower Bills — even while charging'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#101C17] border border-white/10 p-4 text-center">
              <div className="text-2xl font-black font-heading text-[#A3FF35]">10+ yrs</div>
              <div className="text-[10px] text-[#68776D] mt-1">Traditional Payback</div>
            </div>
            <div className="rounded-2xl bg-[#101C17] border border-[#A3FF35]/30 p-4 text-center">
              <div className="text-2xl font-black font-heading text-[#A3FF35]">3 yrs</div>
              <div className="text-[10px] text-[#68776D] mt-1">ADB PS1 Payback</div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-[#101C17] border border-white/10 p-6 sm:p-8 min-h-[260px] flex items-center justify-center">
          {/* TODO: replace with generated/real savings-solar image */}
          <div className="text-center text-[#68776D] text-sm font-mono">[Savings image placeholder]</div>
        </div>
      </div>
    </section>
  );
}