import React from 'react';

const ITEMS = ['LiFePO4', 'Pure Sine Wave', 'Dual MPPT', 'Active BMS', 'Zero Diesel', 'Modular Expansion', 'CAN-Bus', 'Solar Harvest'];

export default function InfiniteMarquee() {
  const row = (reverse) => (
    <div className="flex overflow-hidden group" onMouseEnter={(e) => e.currentTarget.classList.add('paused')} onMouseLeave={(e) => e.currentTarget.classList.remove('paused')}>
      <div className={`flex gap-12 whitespace-nowrap py-4 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} group-[.paused]:[animation-play-state:paused]`}>
        {[...ITEMS, ...ITEMS].map((it, i) => (
          <span key={i} className="text-2xl sm:text-4xl font-black font-heading text-white/20 hover:text-[#A3FF35] transition-colors">
            {it}
            <span className="mx-6 text-[#A3FF35]/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-10 border-y border-white/10 bg-[#091310] overflow-hidden">
      {row(false)}
      {row(true)}
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeRev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee-rev { animation: marqueeRev 25s linear infinite; }
      `}</style>
    </section>
  );
}