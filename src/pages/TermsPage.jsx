import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, ShieldAlert, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A3FF35]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
            LEGAL // HARDWARE & DEPLOYMENT TERMS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
            Terms of Engineering
          </h1>
          <p className="text-[#A3ADA5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Operational guidelines, system ratings, installation warranties, and hardware deployment terms for ADB LABS solutions.
          </p>
          <div className="text-xs font-mono text-[#68776D] pt-2">
            Last Updated: November 2026 · Release 2.1
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12 text-left">

          {/* Section 1 */}
          <div className="p-8 rounded-2xl bg-[#091310] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#A3FF35]">
              <Scale className="w-6 h-6" />
              <h2 className="text-xl font-bold font-heading text-white">
                1. Engineering Scope & Sizing Accuracy
              </h2>
            </div>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              All quotes, load calculations, and run-time estimates produced by the ADB LABS Smart Enquiry System or on-site engineers are based on verified client-provided equipment specs (wattage ratings, inrush surge requirements, duty cycles). Final hardware deployment configurations are subject to formal site verification and environmental inspections.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-8 rounded-2xl bg-[#091310] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#A3FF35]">
              <Cpu className="w-6 h-6" />
              <h2 className="text-xl font-bold font-heading text-white">
                2. Hardware Warranty & Battery Chemistry Guidelines
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-[#A3ADA5]">
              <li className="flex items-start gap-2">
                <span className="text-[#A3FF35] font-bold">·</span>
                <span><strong className="text-white">LiFePO₄ Prismatic Cells:</strong> Standard 3,500+ cycle guarantee to 80% remaining capacity under recommended 0.5C charging and operating temperatures below 45°C.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A3FF35] font-bold">·</span>
                <span><strong className="text-white">Pure Sine Wave Inverter:</strong> 3,000W continuous output / 6,000W peak inrush surge protection against inductive motor spikes (refrigeration compressors, blenders, pumps).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A3FF35] font-bold">·</span>
                <span><strong className="text-white">Solar MPPT Tracking:</strong> Operating within DC 12V–150V string limits. Tampering with internal high-voltage DC bus voids manufacturer warranty.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-8 rounded-2xl bg-[#091310] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#A3FF35]">
              <ShieldAlert className="w-6 h-6" />
              <h2 className="text-xl font-bold font-heading text-white">
                3. Safety & Coastal Marine Operational Limits
              </h2>
            </div>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              Commercial installations in coastal high-humidity environments (such as our Besant Nagar pilot) require scheduled terminal inspections and IP54 seal checks. Operators must ensure enclosure vents remain unblocked and free from continuous salt spray accumulation.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-8 rounded-2xl bg-[#091310] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#A3FF35]">
              <CheckCircle2 className="w-6 h-6" />
              <h2 className="text-xl font-bold font-heading text-white">
                4. Internship & Academic Disclosures
              </h2>
            </div>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              The 6-Week Robotics & AI Industrial Internship is an intensive hands-on engineering research and development curriculum. In alignment with our strict no-fake-marketing guidelines, ADB LABS does not promise guaranteed placement or government accreditation beyond real project portfolio development and verifiable engineering skills.
            </p>
          </div>

          {/* Back to Home CTA */}
          <div className="pt-6 flex justify-center">
            <Link
              to="/"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 px-6 py-3 rounded-full text-xs font-semibold transition flex items-center gap-2"
            >
              <span>Back to ADB Labs Home</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A3FF35]" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
