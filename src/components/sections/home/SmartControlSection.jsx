import React from 'react';
import { motion } from 'framer-motion';

export default function SmartControlSection() {
  const circuits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">FINER CONTROL. FEWER EXTRAS.</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">10 Circuits. One Smart Panel</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-4 leading-relaxed">
            ADB Smart Load Management puts control in your app. Traditional setups require extra hardware — and extra cost. {/* TODO: ADB smart panel spec */}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[#A3ADA5]">
            {['Toggle loads from your phone', 'Prioritize critical circuits during outages', 'Monitor real-time power flow'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-[#101C17] border border-white/10 p-6 sm:p-8 min-h-[300px] flex items-center justify-center">
          {/* TODO: replace with generated/real smart-control image */}
          <div className="grid grid-cols-5 gap-3 w-full max-w-xs">
            {circuits.map((n) => (
              <motion.div
                key={n}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: n * 0.04 }}
                className="aspect-square rounded-xl bg-[#050B0A] border border-white/10 flex items-center justify-center text-xs font-mono text-[#A3FF35]"
              >
                {n}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}