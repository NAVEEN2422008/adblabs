import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FreeSupportSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">FREE INSTALLATION SUPPORT</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">FREE EcoFlow-Style Installation Support</h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base mt-3">
            Plan before you buy. Free on-site assessment. Live guidance after delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-[#101C17] border border-white/10 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold font-heading text-white">Free On-Site Assessment</h3>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              Personalize your setup, cost, and installation plan before you buy. {/* TODO */}
            </p>
            <Link to="/get-a-quote" className="inline-flex items-center gap-2 text-[#A3FF35] text-sm font-bold hover:underline">
              <span>Request Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-3xl bg-[#101C17] border border-white/10 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold font-heading text-white">FREE Official Live Installation Support</h3>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              Free quotation | Online Appointment | Live Installation Guidance. {/* TODO */}
            </p>
            <div className="text-xs text-[#68776D] space-y-1">
              <div>Email: engineering@adblabs.in</div>
              <div>Call: +91 8310704488</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}