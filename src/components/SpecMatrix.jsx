import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Sparkles } from 'lucide-react';

export default function SpecMatrix({ onOpenQuote }) {
  const specs = [
    { name: "Nominal Storage Capacity", std: "6.144 kWh", exp: "12.288 kWh (Dual Stack)", cust: "Up to 30+ kWh" },
    { name: "Continuous AC Output Target", std: "3,000 W Pure Sine", exp: "3,000 W Pure Sine", cust: "Scalable 6kW~10kW+" },
    { name: "Momentary Surge Tolerance", std: "6,000 W (Inductive Motors)", exp: "6,000 W (Inductive Motors)", cust: "Up to 15,000 W" },
    { name: "Recommended Solar Array", std: "1.44 kWp (2x 720W Panels)", exp: "2.88 kWp (4x 720W Panels)", cust: "Bespoke Multi-String Array" },
    { name: "Battery Cell Chemistry", std: "Grade-A LiFePO₄", exp: "Grade-A LiFePO₄", cust: "Custom LiFePO₄ / NMC" },
    { name: "Cycle Life Rating", std: "4,000+ Cycles to 80%", exp: "4,000+ Cycles to 80%", cust: "4,000+ to 6,000+ Cycles" },
    { name: "Receptacles & Outlets", std: "2x 230V 16A, USB-C PD", exp: "2x 230V 16A, USB-C PD, DC Bus", cust: "Industrial Cam-Lock / Multi-Phase" },
    { name: "Chassis & Mobility", std: "Anodized Al + Rolling Base", exp: "Anodized Al + Rolling Base", cust: "Weatherproof Enclosure / Skid" },
    { name: "Ideal Target Deployment", std: "Juice Stalls, Kiosks, POS", exp: "Besant Nagar Fish Stall, Cold Chain", cust: "Autonomous Robotics & Micro-Grids" }
  ];

  return (
    <section id="specs" className="py-24 bg-[#060709] relative overflow-hidden border-t border-[#141824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (EcoFlow Titan Spec Sheet style) */}
        <div className="text-left mb-12">
          <div className="text-xs font-mono text-green-400 uppercase tracking-wider mb-2">
            DETAILED TECHNICAL SPECIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Compare <span className="text-green-400">System Configurations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            High-density specification matrix across ADB Labs portable power and commercial solar packages.
          </p>
        </div>

        {/* High-Density 3-Column Spec Matrix (Direct EcoFlow Titan Architecture) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="py-4 px-4 font-bold text-white uppercase text-[11px] w-1/4">Specification</th>
                <th className="py-4 px-4 font-bold text-slate-200 text-sm w-1/4 bg-[#0c101c]/40 rounded-t-xl">
                  PS1 Standard
                  <span className="block text-[10px] text-green-400 font-normal">Shop 1 Turnkey (6.14 kWh)</span>
                </th>
                <th className="py-4 px-4 font-bold text-white text-sm w-1/4 bg-[#0e1628] rounded-t-xl border-t-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                  PS1 Expanded
                  <span className="block text-[10px] text-green-400 font-bold">Shop 2 Heavy (12.28 kWh) ★</span>
                </th>
                <th className="py-4 px-4 font-bold text-slate-200 text-sm w-1/4 bg-[#0c101c]/40 rounded-t-xl">
                  Custom Engineering
                  <span className="block text-[10px] text-slate-400 font-normal">Industrial / R&D Systems</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {specs.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-sans font-semibold text-slate-300">{row.name}</td>
                  <td className="py-3.5 px-4 text-slate-300 bg-[#0c101c]/20">{row.std}</td>
                  <td className="py-3.5 px-4 text-white font-bold bg-[#0e1628]/40 text-green-300">{row.exp}</td>
                  <td className="py-3.5 px-4 text-slate-400 bg-[#0c101c]/20">{row.cust}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-slate-800">
                <td className="py-5 px-4 text-slate-400 font-sans">Availability & Inquiries</td>
                <td className="py-5 px-4 bg-[#0c101c]/20">
                  <button
                    onClick={onOpenQuote}
                    className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs"
                  >
                    Inquire Std
                  </button>
                </td>
                <td className="py-5 px-4 bg-[#0e1628]/40">
                  <button
                    onClick={onOpenQuote}
                    className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-xs shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                  >
                    Select Expanded
                  </button>
                </td>
                <td className="py-5 px-4 bg-[#0c101c]/20">
                  <button
                    onClick={onOpenQuote}
                    className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs"
                  >
                    Custom Quote
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </section>
  );
}
