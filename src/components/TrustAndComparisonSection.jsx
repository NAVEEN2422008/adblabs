import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, XCircle, Zap, Droplets, Volume2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustAndComparisonSection() {
  const certifications = [
    { code: 'UN 38.3', label: 'Safe Lithium Transport', detail: 'Vibration, altitude & shock certified' },
    { code: 'CE TESTED', label: 'Electromagnetic Immunity', detail: 'EN 61000-6-3 / 6-1 industrial standard' },
    { code: 'BIS IS 16046', label: 'Indian Safety Standard', detail: 'Secondary cells & battery packs' },
    { code: 'IP65 SEAL', label: 'Marine Coastal Ingress', detail: 'Salt spray & tropical humidity rated' },
    { code: 'ISO 9001', label: 'Manufacturing Quality', detail: 'Consistent fabrication QC procedures' }
  ];

  const comparisonRows = [
    {
      feature: 'Fuel / Energy Operating Cost',
      adb: '₹0 (100% Free Solar Recharging)',
      diesel: '₹14,000+ per month in diesel fuel',
      consumer: 'High grid-only tariff charging'
    },
    {
      feature: 'Acoustic Noise Emission',
      adb: '0 dB Silent Operation (Whisper Fan)',
      diesel: '85 dB - 95 dB Roaring Engine Noise',
      consumer: 'High whine noisy inverter fans'
    },
    {
      feature: 'Emissions & Indoor Safety',
      adb: 'Zero Emissions (100% Indoor Safe)',
      diesel: 'Toxic Carbon Monoxide & Soot Fumes',
      consumer: 'Low emissions but fire risk (ternary NMC)'
    },
    {
      feature: 'Outage Transfer Switch Time',
      adb: '< 15 ms Seamless Automatic Transfer',
      diesel: 'Manual Pull-Start or 20s Delay',
      consumer: '30ms - 50ms (Causes Computer Reset)'
    },
    {
      feature: 'Cell Lifespan & Warranty',
      adb: '3,500+ Full Cycles (Automotive LiFePO₄)',
      diesel: 'Engine wear, oil changes every 100 hrs',
      consumer: '500 - 800 cycles (Degrades in 2 years)'
    },
    {
      feature: 'Solar MPPT Input Window',
      adb: 'Up to 2.88 kWp Dual MPPT (12V-150V)',
      diesel: 'No solar input capability',
      consumer: 'Limited to 200W - 400W slow input'
    }
  ];

  return (
    <div className="w-full space-y-20">
      
      {/* 1. Certifications & Compliance Trust Bar */}
      <div>
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
            STANDARDS &amp; COMPLIANCE
          </span>
          <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">
            Built to Rigorous Industrial Standards
          </h3>
          <p className="text-xs sm:text-sm text-[#A3ADA5] max-w-xl mx-auto mt-2">
            Every ADB Labs system undergoes full qualification testing for electrical safety, vibration resistance, and extreme ambient operation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {certifications.map((cert, i) => (
            <div 
              key={i} 
              className={`p-4 sm:p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex flex-col justify-between ${
                i === 4 ? 'col-span-2 sm:col-span-3 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#A3FF35] bg-[#A3FF35]/10 px-2 py-0.5 rounded border border-[#A3FF35]/20">
                    {cert.code}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#A3FF35]" />
                </div>
                <div className="font-heading font-bold text-white text-sm">
                  {cert.label}
                </div>
              </div>
              <div className="text-[11px] text-[#A3ADA5] mt-2">
                {cert.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Direct Side-by-Side Comparison Matrix */}
      <div className="rounded-3xl bg-[#101C17] border border-white/10 p-6 sm:p-10 text-left overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-1">
              BENCHMARK PERFORMANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Why ADB PS1 Replaces Conventional Diesel
            </h3>
          </div>
          <Link
            to="/power-stations/adb-ps1"
            className="text-xs font-mono text-[#A3FF35] hover:underline self-start md:self-auto flex items-center gap-1 font-bold"
          >
            <span>View Full Electrical Test Logs &gt;</span>
          </Link>
        </div>

        {/* Mobile Comparison Cards (<640px) */}
        <div className="space-y-3 sm:hidden">
          {comparisonRows.map((row, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#050B0A] border border-white/10 space-y-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#A3ADA5] font-bold">
                {row.feature}
              </div>
              <div className="flex items-start gap-2 text-xs text-white font-semibold bg-[#A3FF35]/10 border border-[#A3FF35]/25 rounded-xl p-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A3FF35] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-[#A3FF35] block uppercase">ADB Labs PS1</span>
                  {row.adb}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#A3ADA5]">
                  <span className="text-[9px] font-mono text-rose-400 block uppercase">Diesel Gen</span>
                  {row.diesel}
                </div>
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#68776D]">
                  <span className="text-[9px] font-mono text-[#68776D] block uppercase">Generic Pack</span>
                  {row.consumer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop & Tablet Table (>=640px) */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider">
                <th className="py-3 px-4 text-[#A3ADA5]">Parameter</th>
                <th className="py-3 px-4 text-[#A3FF35] bg-[#A3FF35]/10 rounded-t-xl font-bold">ADB Labs PS1</th>
                <th className="py-3 px-4 text-[#A3ADA5]">Traditional Diesel Gen</th>
                <th className="py-3 px-4 text-[#A3ADA5]">Generic Portable Pack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition">
                  <td className="py-3.5 px-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-white bg-[#A3FF35]/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                      <span>{row.adb}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-[#A3ADA5]">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500/80 flex-shrink-0" />
                      <span>{row.diesel}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-[#68776D]">
                    {row.consumer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
