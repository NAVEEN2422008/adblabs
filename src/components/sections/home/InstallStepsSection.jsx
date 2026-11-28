import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { n: 'Step 1', title: 'Place Your Order', desc: 'Share your delivery details and contact information.' },
  { n: 'Step 2', title: 'Schedule Installation', desc: "We'll reach out within 2 business days to confirm your installation time." },
  { n: 'Step 3', title: 'Install & Activate', desc: 'Our certified engineer installs and commissions your system — ready to use the same day.' },
  { n: 'Step 4', title: 'Review & Enjoy', desc: 'Verify your system and start enjoying reliable whole-home power.' },
];

export default function InstallStepsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">FASTEST 7-DAY INSTALL, GUARANTEED</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">Fastest 7‑Day Install, Guaranteed</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-3">
            {/* TODO: verify install SLA */}
            Highest safety standards. North America-grade compliance. {/* TODO: adapt to India */}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-[#101C17] border border-white/10 p-6 space-y-3"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">{s.n}</span>
              <h3 className="text-lg font-bold font-heading text-white">{s.title}</h3>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}