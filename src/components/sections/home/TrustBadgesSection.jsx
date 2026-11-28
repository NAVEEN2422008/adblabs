import React from 'react';

const badges = [
  { title: 'UL 9540', desc: 'Complete-system safety certification (TODO: confirm)' },
  { title: 'UL 9540A', desc: 'Thermal runaway testing (TODO: confirm)' },
  { title: 'LiFePO₄', desc: 'Grade-A prismatic cells, 3,500+ cycles' },
  { title: '3.0 kW', desc: 'Pure sine inverter, <15 ms transfer' },
  { title: '2.88 kWp', desc: 'Dual MPPT solar input' },
  { title: '90% DoD', desc: 'Usable capacity' },
];

export default function TrustBadgesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div key={b.title} className="rounded-2xl bg-[#101C17] border border-white/10 p-4 text-center">
              <div className="text-sm font-black font-heading text-[#A3FF35]">{b.title}</div>
              <div className="text-[10px] text-[#68776D] mt-1 leading-tight">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}