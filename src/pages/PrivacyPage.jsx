import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A3FF35]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
            LEGAL // TRANSPARENCY & DATA SECURITY
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#A3ADA5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            How ADB LABS collects, secures, and handles technical inquiries, project data, and customer specifications.
          </p>
          <div className="text-xs font-mono text-[#68776D] pt-2">
            Last Updated: November 2026 · Version 1.2
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12 text-left">

          {/* Section 1 */}
          <div className="p-8 rounded-2xl bg-[#091310] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#A3FF35]">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-xl font-bold font-heading text-white">
                1. Data Protection & Engineering Confidentiality
              </h2>
            </div>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              At ADB LABS (Aurelius Dynamics Bengaluru & Chennai R&D), we treat all engineering schematics, power audit numbers, commercial site details, and project inquiries with strict industrial confidentiality. We do not sell, rent, or trade your personal or project data to third-party advertising brokers.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-8 rounded-2xl bg-[#091310] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#A3FF35]">
              <Lock className="w-6 h-6" />
              <h2 className="text-xl font-bold font-heading text-white">
                2. Information We Collect
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-[#A3ADA5]">
              <li className="flex items-start gap-2">
                <span className="text-[#A3FF35] font-bold">·</span>
                <span><strong className="text-white">Inquiry Specifications:</strong> Appliance power ratings, daily duty cycles, operating hours, solar installation constraints, and system scale submitted via our Smart Enquiry System.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A3FF35] font-bold">·</span>
                <span><strong className="text-white">Contact Credentials:</strong> Authorized representative name, verified corporate or personal email address, Indian phone number, and physical deployment location.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A3FF35] font-bold">·</span>
                <span><strong className="text-white">Technical Analytics:</strong> Anonymized telemetry such as browser rendering capabilities, viewport dimensions, and WebGL support to ensure optimal Three.js rendering performance.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-8 rounded-2xl bg-[#091310] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#A3FF35]">
              <Eye className="w-6 h-6" />
              <h2 className="text-xl font-bold font-heading text-white">
                3. Purpose of Processing
              </h2>
            </div>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              Data collected through the website is utilized strictly to:
            </p>
            <ul className="space-y-2 text-sm text-[#A3ADA5]">
              <li>· Formulate accurate hardware proposals, battery capacity sizing, and solar PV array calculations.</li>
              <li>· Coordinate on-site visits and installation audits in Chennai and Tamil Nadu regions.</li>
              <li>· Review and process student applications for the 6-Week Robotics & AI Industrial Internship.</li>
              <li>· Deliver formal quotation documentation and technical safety compliance updates.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="p-8 rounded-2xl bg-[#091310] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-[#A3FF35]">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-bold font-heading text-white">
                4. Contact Our Data Compliance Team
              </h2>
            </div>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              If you have any questions or wish to request the deletion or correction of your submitted engineering inquiry, contact our engineering administration at:
            </p>
            <div className="p-4 rounded-xl bg-[#101C17] border border-white/5 font-mono text-xs text-white space-y-1">
              <div>ADB LABS Systems Engineering</div>
              <div className="text-[#A3FF35]">engineering@adblabs.in</div>
              <div>Besant Nagar, Chennai, Tamil Nadu 600090, India</div>
              <div>Direct: +91 8310704488</div>
            </div>
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
