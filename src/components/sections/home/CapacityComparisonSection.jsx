import React from 'react';
import { motion } from 'framer-motion';

const loads = [
  { name: 'Oven', icon: '🔥' },
  { name: 'Fridge', icon: '🧊' },
  { name: 'AC', icon: '❄️' },
  { name: 'TV', icon: '📺' },
];

export default function CapacityComparisonSection() {
  const variants = [
    { capacity: '13.5 kWh', start: '13.5kWh Starting Capacity', solar: '5.0 kW', grid: '2.2 kW', label: 'Traditional Class' },
    { capacity: '6.144 kWh', start: '6.144 kWh Starting Capacity', solar: '5.0 kW', grid: '2.2 kW', label: 'ADB PS1' },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">CAPACITY COMPARISON</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">More Power, Less Bulk</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-3">
            {/* TODO: verify ADB capacity figures against traditional 13.5 kWh class */}
            ADB PS1 delivers comparable usable power at a fraction of the entry capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {variants.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl border p-6 sm:p-8 ${i === 1 ? 'bg-gradient-to-b from-[#A3FF35]/10 to-[#101C17] border-[#A3FF35]/30' : 'bg-[#101C17] border-white/10'}`}
            >
              <div className="text-xs font-mono uppercase tracking-widest text-[#68776D] mb-2">{v.label}</div>
              <div className="text-4xl sm:text-5xl font-black font-heading text-white mb-1">{v.capacity}</div>
              <div className="text-xs text-[#A3ADA5] mb-6">{v.start}</div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-2xl bg-[#050B0A] border border-white/10 p-4">
                  <div className="text-xl font-black font-heading text-[#A3FF35]">{v.solar}</div>
                  <div className="text-[10px] text-[#68776D] mt-1">Solar Input</div>
                </div>
                <div className="rounded-2xl bg-[#050B0A] border border-white/10 p-4">
                  <div className="text-xl font-black font-heading text-[#A3FF35]">{v.grid}</div>
                  <div className="text-[10px] text-[#68776D] mt-1">Grid Input</div>
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-6 text-2xl">
                {loads.map((l) => (
                  <span key={l.name} title={l.name}>{l.icon}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}