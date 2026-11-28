import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumPerformanceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">PREMIUM PERFORMANCE. UNMATCHED VALUE.</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">70% Less Upfront</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-3">
            Same savings. Far less upfront. {/* TODO: verify payback figures */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Less Upfront', value: '70%', desc: 'Lower capital cost vs traditional whole-home systems.' },
            { title: 'Payback Period', value: '3 Years', desc: 'Estimated payback vs 10+ years for traditional systems.' },
            { title: 'Output', value: '3.0 kW', desc: 'Continuous AC power with 6.0 kW surge buffer.' },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-[#101C17] border border-white/10 p-6 sm:p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl font-black font-heading text-[#A3FF35]">{c.value}</div>
              <div className="text-sm font-bold text-white mt-2">{c.title}</div>
              <p className="text-xs text-[#A3ADA5] mt-3 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}