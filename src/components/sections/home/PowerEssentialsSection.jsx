import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const essentials = [
  { name: '3-Ton AC', watts: '3500W', icon: '❄️' },
  { name: 'Water Pump', watts: '2500W', icon: '💧' },
  { name: 'Microwave Oven', watts: '1800W', icon: '🔥' },
  { name: 'Washing Machine', watts: '1200W', icon: '🧺' },
  { name: 'Refrigerator', watts: '300W', icon: '🧊' },
  { name: 'Television', watts: '110W', icon: '📺' },
];

export default function PowerEssentialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">POWER ALL YOUR HOME ESSENTIALS</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">Whole-Home Power for Everyday Living</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-3">
            With 3.0 kW continuous (6.0 kW surge) pure sine output, the ADB PS1 powers heavy commercial freezers, pumps, and essential equipment without harmonic distortion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#68776D] mb-4">Keep These Essentials Running Together During an Outage</h3>
            <ul className="space-y-3">
              {essentials.map((e, i) => (
                <motion.li
                  key={e.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-[#101C17] border border-white/10 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{e.icon}</span>
                    <span className="text-sm font-semibold text-white">{e.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black font-heading text-[#A3FF35]">{e.watts}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#A3FF35]" />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[#101C17] border border-white/10 p-5 sm:p-6 flex flex-col items-center justify-center gap-4 overflow-hidden">
            <img
              src="/images/home_backup.jpg"
              alt="ADB Labs PS1 Commercial & Residential Essentials Power"
              className="w-full h-56 sm:h-64 object-cover rounded-2xl border border-white/10"
              loading="lazy"
            />
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="rounded-2xl bg-[#050B0A] border border-white/10 p-3 text-center">
                <div className="text-lg font-black font-heading text-[#A3FF35]">3.0 kW</div>
                <div className="text-[10px] text-[#68776D] mt-1">Continuous</div>
              </div>
              <div className="rounded-2xl bg-[#050B0A] border border-white/10 p-3 text-center">
                <div className="text-lg font-black font-heading text-[#A3FF35]">6.0 kW</div>
                <div className="text-[10px] text-[#68776D] mt-1">Surge</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}