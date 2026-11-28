import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Can the ADB PS1 run heavy commercial appliances together?', a: 'With 3.0 kW continuous and 6.0 kW surge pure sine output, the PS1 supports freezers, pumps, POS terminals, and LED lighting simultaneously within rated capacity.' },
  { q: 'How does modular expansion to 12.288 kWh work?', a: 'A secondary 6.144 kWh module docks via quick-latch DC bus coupling and CAN-bus sync, doubling runtime without rewiring.' },
  { q: 'Is the PS1 safe for indoor use?', a: 'Yes — sealed LiFePO₄ chemistry, zero emissions, whisper-quiet (<30 dB), safe under counters or in kiosks.' },
  { q: 'What is the expected battery lifespan?', a: '3,500+ full cycles to 80% capacity — over 10 years of daily use.' },
  { q: 'Can I add the PS1 to an existing rooftop solar system?', a: 'Yes — dual 12–150 V MPPT inputs accept standard 24V/48V/series commercial PV panel strings.' },
  { q: 'How much can it reduce my electricity & diesel bill?', a: 'Solar self-consumption and diesel replacement at our Besant Nagar pilot eliminated 100% of daily generator fuel spend.' },
  { q: 'Is it worth it without solar?', a: 'Yes — as a silent, emission-free UPS backup that charges from the grid and discharges during outages and peak tariffs.' },
  { q: 'What protection systems are built into the BMS?', a: 'Active 16-cell balancing, over-current, short-circuit, over-temperature, and galvanically isolated CAN-bus fault telemetry.' },
  { q: 'How fast is the switchover during an outage?', a: 'Sub-15 ms automatic transfer keeps critical loads live without interruption.' },
  { q: 'Can I expand from 6.144 kWh to 12.288 kWh later?', a: 'Yes — add a second module anytime via the quick-latch DC bus; no inverter or rewiring needed.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="rounded-2xl bg-[#101C17] border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-white hover:text-[#A3FF35] transition"
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#A3FF35] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#A3ADA5] leading-relaxed border-t border-white/[0.06] pt-4">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}