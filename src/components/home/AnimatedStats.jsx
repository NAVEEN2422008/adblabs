import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

const STATS = [
  { end: 3.0, suffix: ' kW', label: 'Continuous Output', decimals: 1 },
  { end: 6.144, suffix: ' kWh', label: 'LiFePO4 Capacity', decimals: 3 },
  { end: 3500, suffix: '+', label: 'Cycle Life', decimals: 0 },
  { end: 98, suffix: '%', label: 'Efficiency', decimals: 0 },
];

function Stat({ end, suffix, label, decimals }) {
  const { ref, display } = useCountUp(end, { suffix, decimals, duration: 2000 });
  return (
    <div ref={ref} className="glass-panel rounded-2xl p-6 text-center relative overflow-hidden group">
      <div className="text-3xl sm:text-4xl font-black font-heading text-white">{display}</div>
      <div className="text-xs font-mono text-[#68776D] uppercase tracking-widest mt-2">{label}</div>
      {/* lime sweep underline */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#A3FF35] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </section>
  );
}