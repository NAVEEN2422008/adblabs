import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Sun, 
  ShieldCheck, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Bot,
  GraduationCap,
  Sparkles,
  MapPin,
  Clock,
  Layers
} from 'lucide-react';
import TrustAndComparisonSection from '../components/TrustAndComparisonSection';

export default function HomePage() {
  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* 1. CINEMATIC HERO (Clean, Impactful, Minimalist like itel Energy) */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-16 pb-12 overflow-hidden">
        {/* Subtle Ambient Studio Halo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#A3FF35]/12 via-[#101C17]/40 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto w-full">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C17] border border-white/12 text-xs text-[#A3FF35] font-mono tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#A3FF35] animate-ping"></span>
            <span>MODULAR ENERGY STORAGE &amp; COMMERCIAL OFF-GRID</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.08] text-white"
          >
            Industrial-Grade <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#A3FF35] via-[#6DEB38] to-[#47bfff] bg-clip-text text-transparent">
              Off-Grid Energy.
            </span> Built for Real-World Demands.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#A3ADA5] text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed"
          >
            Modular LiFePO₄ portable power stations and turnkey commercial solar microgrids. Silent, zero-emission energy designed to replace noisy diesel generators.
          </motion.p>

          {/* Key Specs Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 text-xs font-mono"
          >
            <span className="px-3 py-1 rounded-full bg-[#101C17] border border-white/10 text-white flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#A3FF35]" /> 3.0 kW Pure Sine
            </span>
            <span className="px-3 py-1 rounded-full bg-[#101C17] border border-white/10 text-white flex items-center gap-1.5">
              <Battery className="w-3.5 h-3.5 text-[#A3FF35]" /> 6.144 – 12.288 kWh LFP
            </span>
            <span className="px-3 py-1 rounded-full bg-[#101C17] border border-white/10 text-white flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-[#A3FF35]" /> Dual MPPT Solar
            </span>
            <span className="px-3 py-1 rounded-full bg-[#101C17] border border-white/10 text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A3FF35]" /> &lt; 15ms UPS Switch
            </span>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <Link
              to="/power-stations/adb-ps1"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full transition shadow-[0_0_20px_rgba(163,255,55,0.3)] flex items-center gap-2 font-heading"
            >
              <span>Explore ADB PS1 Station</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/get-a-quote"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full transition"
            >
              <span>Request System Quote</span>
            </Link>
          </motion.div>

          {/* Hero Flagship Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="relative mt-10 max-w-3xl mx-auto"
          >
            <div className="relative aspect-[16/9] w-full flex items-center justify-center animate-hardware-float">
              <img
                src="/images/ps1_titan_studio.jpg"
                alt="ADB Labs PS1 Modular Power Station"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. PRODUCT PHILOSOPHY (Directly Inspired by itel Energy's 3 Pillars: Save Money, Safety, Reliable) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-[#091310]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              ENGINEERING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
              Product Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-[#A3ADA5] mt-2">
              Every ADB Labs product is engineered around three non-negotiable real-world commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar 1: Save Money */}
            <div className="p-8 rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-center text-[#A3FF35]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black font-heading text-white">
                Save Money
              </h3>
              <p className="text-xs sm:text-sm text-[#A3ADA5] leading-relaxed">
                Eliminate recurring generator fuel bills. Besant Nagar commercial deployment proven to save ₹14,000+ monthly with zero engine maintenance.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>100% free daytime solar replenishment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>Zero diesel fuel purchase or transport</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>Ultra-low lifetime cost of energy (LCOS)</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Safety */}
            <div className="p-8 rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-center text-[#A3FF35]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black font-heading text-white">
                Uncompromising Safety
              </h3>
              <p className="text-xs sm:text-sm text-[#A3ADA5] leading-relaxed">
                Automotive-grade LiFePO₄ prismatic chemistry with active CAN-bus BMS. Non-combustible, non-toxic, and completely safe for indoor operation.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>Zero thermal runaway risk up to 55°C</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>Active CAN-bus per-cell voltage protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>IP65 marine-grade salt-spray seals</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Reliable */}
            <div className="p-8 rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-center text-[#A3FF35]">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black font-heading text-white">
                Field Reliable
              </h3>
              <p className="text-xs sm:text-sm text-[#A3ADA5] leading-relaxed">
                3,500+ full discharge cycles (&gt;10-year lifespan) with pure sine wave AC output and seamless sub-15ms UPS automatic transfer.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>&lt; 15ms automatic transfer switch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>6.0 kW surge absorption for motor loads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>3,500+ rated cycles to 80% DoD</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PRODUCT LIST (Directly Inspired by itel Energy's 3 Clean Product Cards) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-1">
                PRODUCT LINEUP
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">
                Energy Systems Series
              </h2>
            </div>
            <Link
              to="/power-stations"
              className="text-xs font-mono text-[#A3FF35] hover:underline font-bold self-start sm:self-auto flex items-center gap-1"
            >
              <span>View All Systems &gt;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Product 1: PS1 Core */}
            <div className="rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition p-6 flex flex-col justify-between text-left group">
              <div>
                <span className="text-[10px] font-mono text-[#A3FF35] bg-[#A3FF35]/10 px-2.5 py-1 rounded-full font-bold">
                  FLAGSHIP CORE
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-3 group-hover:text-[#A3FF35] transition">
                  ADB PS1 Power Station
                </h3>
                <div className="text-xs font-mono text-[#A3ADA5] mt-1">
                  3.0 kW Continuous | 6.144 kWh LiFePO₄
                </div>
                <div className="relative aspect-[16/11] my-4 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-center p-3">
                  <img
                    src="/images/ps1_titan_studio.jpg"
                    alt="ADB PS1 Power Station"
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition duration-300"
                  />
                </div>
                <p className="text-xs text-[#A3ADA5] leading-relaxed">
                  All-in-one portable power station with pure sine wave inverter, dual MPPT solar, and active CAN-bus BMS.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-white/10">
                <Link
                  to="/power-stations/adb-ps1"
                  className="w-full bg-[#A3FF35] hover:bg-[#8ee827] text-black font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5 font-heading"
                >
                  <span>Explore ADB PS1</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Product 2: Dual Stack Capacity */}
            <div className="rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition p-6 flex flex-col justify-between text-left group">
              <div>
                <span className="text-[10px] font-mono text-[#A3FF35] bg-[#A3FF35]/10 px-2.5 py-1 rounded-full font-bold">
                  MODULAR EXPANSION
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-3 group-hover:text-[#A3FF35] transition">
                  Dual-Stack Expansion
                </h3>
                <div className="text-xs font-mono text-[#A3ADA5] mt-1">
                  6.0 kW Peak | 12.288 kWh Total
                </div>
                <div className="relative aspect-[16/11] my-4 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-center p-3">
                  <img
                    src="/images/ps1_dual_stack_titan.jpg"
                    alt="Dual-Stack Expansion Module"
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition duration-300"
                  />
                </div>
                <p className="text-xs text-[#A3ADA5] leading-relaxed">
                  Direct DC latch coupling bus expands storage capacity to 12.288 kWh in seconds without complex external wiring.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-white/10">
                <Link
                  to="/power-stations/adb-ps1"
                  className="w-full bg-[#050B0A] hover:bg-white/10 text-white border border-white/15 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <span>View Dual-Stack Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A3FF35]" />
                </Link>
              </div>
            </div>

            {/* Product 3: Turnkey Commercial Off-Grid */}
            <div className="rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition p-6 flex flex-col justify-between text-left group">
              <div>
                <span className="text-[10px] font-mono text-[#A3FF35] bg-[#A3FF35]/10 px-2.5 py-1 rounded-full font-bold">
                  COMMERCIAL PILOT
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-3 group-hover:text-[#A3FF35] transition">
                  Off-Grid Solar Microgrids
                </h3>
                <div className="text-xs font-mono text-[#A3ADA5] mt-1">
                  2.88 kWp Solar | 100% Diesel-Free
                </div>
                <div className="relative aspect-[16/11] my-4 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/commercial_solar.jpg"
                    alt="Besant Nagar Commercial Solar Pilot"
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition duration-500"
                  />
                </div>
                <p className="text-xs text-[#A3ADA5] leading-relaxed">
                  Turnkey rooftop &amp; stall solar installations replacing loud generators for coastal retail and remote businesses.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-white/10">
                <Link
                  to="/projects/besant-nagar-off-grid-system"
                  className="w-full bg-[#050B0A] hover:bg-white/10 text-white border border-white/15 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <span>Read Field Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A3FF35]" />
                </Link>
              </div>
            </div>

          </div>

          {/* Quick-Nav Links for Specialized Divisions (Robotics & Internship have dedicated pages) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
            <Link
              to="/robotics-rd"
              className="p-4 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#38bdf8]/40 transition flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#050B0A] text-[#38bdf8]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Robotics &amp; AI R&amp;D Division</div>
                  <div className="text-[11px] text-[#A3ADA5]">12-DoF ORZO quadruped, gait physics &amp; CAN firmware</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#38bdf8] group-hover:translate-x-1 transition" />
            </Link>

            <Link
              to="/internship"
              className="p-4 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#050B0A] text-[#A3FF35]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Industrial Internship Incubator</div>
                  <div className="text-[11px] text-[#A3ADA5]">6-week project-based robotics &amp; energy hardware training</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#A3FF35] group-hover:translate-x-1 transition" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. CERTIFICATION INFORMATION & PERFORMANCE BENCHMARK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310] relative">
        <div className="max-w-6xl mx-auto">
          <TrustAndComparisonSection />
        </div>
      </section>

      {/* 5. DIRECT CONSULTATION & ENTERPRISE INQUIRY (Like itel Energy's Service & Contact) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#091310] to-[#050B0A] relative text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
            LET'S DISCUSS YOUR SYSTEM REQUIREMENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Ready to Replace Your Diesel Generator?
          </h2>
          <p className="text-[#A3ADA5] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our engineering team will assess your electrical loads and design a tailored LiFePO₄ battery storage or solar microgrid package for your exact needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.3)] flex items-center gap-2 font-heading"
            >
              <span>Start an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full transition"
            >
              <span>Contact ADB LABS</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
