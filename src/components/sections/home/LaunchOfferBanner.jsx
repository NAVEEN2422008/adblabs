import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LaunchOfferBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-gradient-to-r from-[#0B1A12] to-[#050B0A]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">ADB PS1 AVAILABLE NOW</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">Claim Your Launch Offer!</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base max-w-xl">
            Up to 3 kW output. 6.144–12.288 kWh capacity. 100% diesel-free. {/* TODO: verify offer terms */}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/get-a-quote"
            className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.3)] flex items-center gap-2 font-heading"
          >
            <span>Available Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}