import React from 'react';
import AnimatedStat from '../../three/AnimatedStat';

const STATS = [
  { value: 3.0, suffix: ' kW', label: 'Continuous Output', decimals: 1 },
  { value: 6.144, suffix: ' kWh', label: 'Base Capacity' },
  { value: 14000, prefix: '₹', suffix: '/mo', label: 'Field Savings' },
  { value: 2.88, suffix: ' kWp', label: 'Solar Array' },
  { value: 3500, suffix: '+', label: 'Rated Cycles' },
  { value: 15, prefix: '<', suffix: ' ms', label: 'Transfer Switch' },
];

export default function StatsBand() {
  return (
    <section className="py-16 px-6 lg:px-8 border-y border-white/10 bg-[#091310]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {STATS.map((s, i) => (
          <AnimatedStat key={i} value={s.value} suffix={s.suffix} prefix={s.prefix || ''} label={s.label} decimals={s.decimals} />
        ))}
      </div>
    </section>
  );
}
