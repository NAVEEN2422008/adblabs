import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">READY FOR DEPLOYMENT AUDIT</span>
        <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">Let's find the right power configuration.</h2>
        <p className="text-[#A3ADA5] text-base max-w-xl mx-auto">
          Speak directly with an ADB Labs energy specialist to review load sizing and hardware availability.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/get-a-quote"
            className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-4 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.3)] flex items-center gap-2 font-heading"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+918310704488"
            className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-4 rounded-full transition"
          >
            <span>Call: +91 8310704488</span>
          </a>
        </div>
      </div>
    </section>
  );
}