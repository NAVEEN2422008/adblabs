import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Sun, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ChevronDown, 
  Sliders, 
  Activity, 
  RotateCw,
  Box,
  Eye,
  Info
} from 'lucide-react';
import PS1ProductViewer from '../components/product/PS1ProductViewer';
import EcoFlowScrollPinnedHardware from '../components/EcoFlowScrollPinnedHardware';
import CleanWaveformComparison from '../components/CleanWaveformComparison';
import RuntimeCalculator from '../components/RuntimeCalculator';

export default function PS1ProductPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const specCategories = [
    {
      name: 'Battery System & Chemistry',
      specs: [
        { label: 'Nominal Core Capacity', value: '6.144 kWh (6,144 Wh)' },
        { label: 'Expanded Dual-Stack Capacity', value: '12.288 kWh (via DC coupling bus)' },
        { label: 'Cell Chemistry', value: 'Automotive-grade LiFePO₄ (Lithium Iron Phosphate)' },
        { label: 'Cycle Life', value: '3,500+ full cycles to 80% initial capacity (>10 years)' },
        { label: 'Safe Depth of Discharge (DoD)', value: '90% continuous usable capacity' },
        { label: 'Battery Management System', value: 'Active CAN-bus BMS with micro-second cell balancing' },
        { label: 'Thermal Protection Limits', value: '-10°C to +55°C operating threshold' }
      ]
    },
    {
      name: 'Inverter & AC Output Power',
      specs: [
        { label: 'Continuous AC Power', value: '3,000 Watts (3.0 kW)' },
        { label: 'Peak Inrush Surge Power', value: '6,000 Watts (6.0 kW surge buffer)' },
        { label: 'Waveform Geometry', value: 'Pure Sine Wave (Total Harmonic Distortion THD < 1.4%)' },
        { label: 'Output Nominal Voltage', value: '230 V AC ±1% solid regulation' },
        { label: 'Frequency Stability', value: '50.0 Hz crystal-synchronized' },
        { label: 'Automatic Transfer Speed', value: '< 15 ms seamless UPS automatic switchover' }
      ]
    },
    {
      name: 'Solar & Grid Ingestion Charging',
      specs: [
        { label: 'Maximum Solar PV Input', value: '2,880 Wp (Dual MPPT controllers)' },
        { label: 'Solar Voltage Input Range', value: '12 V – 150 V DC wide tracking' },
        { label: 'Full Solar Recharge Duration', value: '~2.5 to 3.5 hours under peak tropical sunshine' },
        { label: 'Grid / AC Charging Input', value: '230 V AC, 16A fast-charge' },
        { label: 'Concurrent Solar + Grid Mode', value: 'Yes, intelligent hybrid priority routing' }
      ]
    },
    {
      name: 'Chassis, Dimensions & Mechanics',
      specs: [
        { label: 'Chassis Construction', value: 'High-strength aluminum alloy structural unibody' },
        { label: 'Mobility System', value: '4x 360° locking heavy-duty industrial caster base' },
        { label: 'Caster Load Rating', value: '350 kg dynamic rated capacity' },
        { label: 'Marine Corrosion Resistance', value: 'Salt-spray resistant gaskets & sealed vent paths' },
        { label: 'Lifting & Transport Handles', value: 'Flush-recessed ergonomic aluminum grip handles' },
        { label: 'Expansion Coupling', value: 'Quick-latch CAN-linked high-amp DC bus port' }
      ]
    }
  ];

  const faqs = [
    {
      q: 'Can the ADB Labs PS1 start a commercial deep freezer or high-surge waffle iron?',
      a: 'Yes. With a 3.0 kW continuous rating and a massive 6.0 kW instant inrush surge capacity, the PS1 effortlessly absorbs the heavy inductive motor-start currents from commercial waffle irons (1kW), deep freezer compressors (up to 1.6kW surge), blenders, and air conditioners without voltage sags or brownouts.'
    },
    {
      q: 'How does the modular expansion bus work to reach 12.288 kWh?',
      a: 'The PS1 features a rear heavy-duty high-amp DC bus coupling port. A secondary 6.144 kWh expansion module docks directly onto the master unit using quick-latch mechanical fasteners and integrated CAN-bus communication. The dual BMS units automatically synchronize cell states and double continuous runtime without any external inverter or rewiring.'
    },
    {
      q: 'What solar panels are recommended for daylight stall operation?',
      a: 'We recommend paired 720W bifacial solar panels (2 panels for 1.44 kWp on the Single Unit, or 4 panels for 2.88 kWp on the Dual Stack). In Chennai and tropical coastal conditions, 2.88 kWp generates up to 12–14 kWh of clean solar electricity per day, providing 100% daytime autonomous operation plus full night reserve charging.'
    },
    {
      q: 'Is the PS1 safe for indoor placement and food stalls?',
      a: 'Completely safe. Unlike diesel generators that emit toxic nitrogen oxides, carbon monoxide, and soot, the PS1 uses sealed automotive LiFePO₄ chemistry that emits 0 grams of CO₂ and operates at whisper-quiet levels (< 30 dB). It can be placed directly underneath dining counters or inside retail kiosks.'
    },
    {
      q: 'What is the expected lifespan of the battery cells?',
      a: 'The automotive LiFePO₄ prismatic cells are rated for over 3,500 full charge-discharge cycles down to 80% remaining capacity. For a commercial food stall cycling once per day, this represents over 10 years of reliable daily service before significant degradation.'
    }
  ];

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* SECTION 1: CINEMATIC PRODUCT HERO (Inspired by EcoFlow Titan) */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#A3FF35]/15 via-[#101C17]/40 to-transparent rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse [animation-duration:9s]"></div>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101C17] border border-white/12 text-xs font-mono text-[#A3FF35] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#A3FF35] animate-ping"></span>
            <span>FLAGSHIP PORTABLE POWER STATION</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black font-heading text-white tracking-tight leading-[0.98]">
            ADB LABS <span className="text-[#A3FF35]">PS1</span>
          </h1>

          <p className="text-xl sm:text-3xl font-heading text-[#A3ADA5] max-w-3xl mx-auto font-light">
            Portable Power. <span className="text-white font-medium">Engineered for Possibility.</span>
          </p>

          <p className="text-[#68776D] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            3.0 kW pure sine inverter, 6.144 kWh automotive LiFePO₄ prismatic core, dual 12V–150V MPPT solar tracking, and modular expansion to 12.288 kWh.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-4 rounded-full transition shadow-[0_0_30px_rgba(163,255,55,0.3)] flex items-center gap-2 font-heading"
            >
              <span>Enquire Direct</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#specs"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-4 rounded-full transition"
            >
              <span>Request Specifications</span>
            </a>
          </div>

          {/* Full-Bleed Studio Render */}
          <div className="relative mt-12 max-w-5xl mx-auto flex items-center justify-center animate-hardware-float">
            <img
              src="/images/ps1_titan_studio.jpg"
              alt="ADB Labs PS1 Cinematic Hardware"
              className="max-h-[480px] w-auto object-contain filter drop-shadow-[0_35px_60px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE 3D & 5-ANGLE PRODUCT VIEWER */}
      <section id="cad" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              PRECISION HARDWARE INSPECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Interactive Product Exploration.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-3">
              Switch between 5-angle photographic CAD views and live interactive Three.js 3D WebGL orbit canvas.
            </p>
          </div>

          <PS1ProductViewer />
        </div>
      </section>

      {/* SECTION 3: SCROLL-PINNED SUBSYSTEM ARCHITECTURE */}
      <section className="relative border-b border-white/10">
        <EcoFlowScrollPinnedHardware />
      </section>

      {/* SECTION 4: LOAD CALCULATION TOOL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              DYNAMIC AUTONOMY ESTIMATOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Calculate Your Operational Autonomy.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-3">
              Toggle specific commercial appliance loads or select presets to view real-world hours for Single (6.1 kWh) vs Dual Stack (12.3 kWh).
            </p>
          </div>

          <RuntimeCalculator />
        </div>
      </section>

      {/* SECTION 5: COMPLETE TECHNICAL SPECIFICATION MATRIX */}
      <section id="specs" className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
        <div className="max-w-6xl mx-auto">
          <div className="text-left max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              ENGINEERING DATASHEET
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Technical Specifications.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-2">
              All electrical ratings and chemical attributes reflect verified preliminary targets from ADB Labs engineering documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#101C17] border border-white/10 text-left space-y-4 shadow-xl"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#A3FF35]"></div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {cat.name}
                  </h3>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {cat.specs.map((s, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-white/[0.06] gap-1">
                      <span className="text-[#68776D] font-normal">{s.label}</span>
                      <span className="text-[#F5F7F2] font-semibold text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PRODUCT APPLICATIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-left">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              FIELD DEPLOYMENT PROFILES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Where ADB PS1 Operates.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#091310] border border-white/10 space-y-3">
              <span className="text-2xl font-bold font-heading text-[#A3FF35]">01</span>
              <h3 className="text-lg font-bold font-heading text-white">Commercial Food Stalls</h3>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">
                Run deep chillers, waffle irons, blenders, and POS machines 100% off-grid without petrol or diesel smoke.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#091310] border border-white/10 space-y-3">
              <span className="text-2xl font-bold font-heading text-[#A3FF35]">02</span>
              <h3 className="text-lg font-bold font-heading text-white">Home Essential Backup</h3>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">
                Sub-15ms automatic transfer keeps 1.5 ton inverter ACs, refrigerators, lights, and WiFi live without downtime.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#091310] border border-white/10 space-y-3">
              <span className="text-2xl font-bold font-heading text-[#A3FF35]">03</span>
              <h3 className="text-lg font-bold font-heading text-white">Coastal Marine Kiosks</h3>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">
                Marine salt-spray sealed aluminum unibody designed to withstand high humidity and coastal salt-air corrosion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#091310] border border-white/10 space-y-3">
              <span className="text-2xl font-bold font-heading text-[#A3FF35]">04</span>
              <h3 className="text-lg font-bold font-heading text-white">Robotics & Field R&D</h3>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">
                High-amp direct DC output and 230V clean power for field robotics battery recharging and outdoor lab telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              TECHNICAL CLARIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#101C17] border border-white/10 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-white hover:text-[#A3FF35] transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#A3FF35] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#A3ADA5] leading-relaxed border-t border-white/[0.06] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
            READY FOR DEPLOYMENT AUDIT
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
            Let's find the right power configuration.
          </h2>
          <p className="text-[#A3ADA5] text-base max-w-xl mx-auto">
            Speak directly with an ADB Labs commercial energy specialist in Chennai to review load sizing and hardware availability.
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

    </div>
  );
}
