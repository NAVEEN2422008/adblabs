import React from 'react';
import { motion } from 'framer-motion';

const rows = [
  { label: 'Upfront Cost', traditional: '$33K+', adb: '70% less', note: 'TODO: verify ADB pricing' },
  { label: 'Installation Time', traditional: 'Up to 60 Days', adb: '7 Days', note: 'TODO: verify install SLA' },
  { label: 'Intelligence', traditional: 'No Built-In Load Control', adb: 'Built-In Load Management', note: '' },
  { label: 'Entry Threshold', traditional: '13.5 kWh at a Time', adb: 'Starts at 6.144 kWh', note: '' },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">POWER ALMOST EVERYTHING</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">Start for Less</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-3">
            Traditional whole-home backup vs. the ADB PS1 modular system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#101C17] border border-white/10 p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold font-heading text-[#A3ADA5] mb-6">Traditional Systems</h3>
            <ul className="space-y-5">
              {rows.map((r) => (
                <li key={r.label} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#68776D] mb-1">{r.label}</div>
                  <div className="text-xl sm:text-2xl font-black font-heading text-white">{r.traditional}</div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ADB */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-gradient-to-b from-[#A3FF35]/10 to-[#101C17] border border-[#A3FF35]/30 p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold font-heading text-[#A3FF35] mb-6">ADB PS1 Series</h3>
            <ul className="space-y-5">
              {rows.map((r) => (
                <li key={r.label} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#68776D] mb-1">{r.label}</div>
                  <div className="text-xl sm:text-2xl font-black font-heading text-white">{r.adb}</div>
                  {r.note && <div className="text-[10px] text-[#68776D] mt-1">{r.note}</div>}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}