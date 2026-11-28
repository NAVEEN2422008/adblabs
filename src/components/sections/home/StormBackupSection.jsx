import React from 'react';
import { motion } from 'framer-motion';

const alerts = [
  { title: 'Emergency charging is on', time: 'Now', desc: 'Batteries are charging in preparation for severe weather expected in 12 hours.' },
  { title: 'Power outage', time: 'Now', desc: 'Your home is currently powered by batteries due to a power outage.' },
];

export default function StormBackupSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">STORM BACKUP THAT THINKS AHEAD</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">It Learns. It Plans. It Saves.</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-3">
            Prepare early, switch in under 15 ms, and keep critical refrigeration and communications online through coastal storms and grid blackouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            {alerts.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl bg-[#101C17] border border-white/10 p-5"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-white">{a.title}</h3>
                  <span className="text-[10px] font-mono text-[#A3FF35]">{a.time}</span>
                </div>
                <p className="text-xs text-[#A3ADA5] leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
            <ul className="mt-4 space-y-2 text-sm text-[#A3ADA5]">
              {['Get Alerts Before the Storm', 'Backup in Under 20 ms', 'Make Backup Last Longer'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-[#101C17] border border-white/10 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
            <img
              src="/images/besant_detail_night.png"
              alt="ADB Labs Night Operation Off-Grid Backup"
              className="w-full h-64 sm:h-72 object-cover rounded-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}