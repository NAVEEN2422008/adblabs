import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Sun, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  TrendingDown, 
  VolumeX, 
  Leaf,
  Layers,
  Sparkles
} from 'lucide-react';
import CleanWaveformComparison from '../components/CleanWaveformComparison';
import ProcessSection from '../components/ProcessSection';

export default function EnergySolutionsPage() {
  const energyCategories = [
    {
      id: 'offgrid',
      title: 'Off-Grid Power Systems',
      tagline: 'Complete Solar + Storage Architecture for Commercial Kiosks & Remote Stalls',
      image: '/images/commercial_solar.jpg',
      badge: 'COMMERCIAL REVOLUTION',
      desc: 'Engineered specifically for high-sun tropical regions and commercial retail stalls operating without reliable grid power. Replaces noisy diesel generators with high-efficiency bifacial solar arrays paired with LiFePO₄ storage.',
      specs: [
        { label: 'System Sizing', val: '6.1 ~ 12.3 kWh' },
        { label: 'Solar Harvest', val: '1.44 ~ 2.88 kWp' },
        { label: 'Inverter Rating', val: '3.0 kW Continuous (6 kW Surge)' },
        { label: 'Fuel Expense', val: '₹0 / Month (100% Daylight Solar)' }
      ],
      applications: ['Beach seafood stalls', 'Night food kiosks', 'Rural clinics', 'Agricultural pumping stations'],
      benefits: ['Zero fuel dependency', 'Under 30 dB silent operation', 'Safe for open food preparation', '~14 months payback']
    },
    {
      id: 'backup',
      title: 'Home Backup Systems',
      tagline: 'Sub-15ms Automatic Transfer for Seamless Household Resilience',
      image: '/images/home_backup.jpg',
      badge: 'RESIDENTIAL POWER',
      desc: 'Whole-essential residential power systems designed to keep air conditioners, refrigerators, lighting, and home workstations running uninterrupted during unexpected grid outages.',
      specs: [
        { label: 'Transfer Time', val: '< 15 ms Automatic' },
        { label: 'AC Compatibility', val: '1.5 Ton Inverter AC' },
        { label: 'Surge Tolerance', val: '6,000 Watts' },
        { label: 'Indoor Safety', val: 'Zero Toxic Fumes (100% Sealed)' }
      ],
      applications: ['Residential apartments', 'Independent villas', 'Work-from-home setups', 'Critical medical equipment'],
      benefits: ['Instant cutover without computer reboots', 'Silent and fume-free for indoor placement', 'Automatic grid & solar recharge']
    },
    {
      id: 'battery',
      title: 'Custom Battery Solutions',
      tagline: 'Automotive LiFePO₄ Prismatic Pack Engineering for Demanding Duty Cycles',
      image: '/images/sol_ps1.png',
      badge: 'CUSTOM ENGINEERING',
      desc: 'Custom-designed lithium iron phosphate battery packs with integrated CAN-bus BMS telemetry, active thermal management, and rugged mechanical enclosures built to project specifications.',
      specs: [
        { label: 'Chemistry', val: 'Automotive LiFePO₄' },
        { label: 'Cycle Life', val: '3,500+ Cycles to 80% DoD' },
        { label: 'Telemetry', val: 'Active CAN-bus BMS' },
        { label: 'Thermal Window', val: '-10°C to +55°C' }
      ],
      applications: ['Autonomous mobile robots', 'Marine coastal equipment', 'Industrial DC microgrids', 'Custom EV prototypes'],
      benefits: ['High thermal runaway threshold', 'Modular voltage scaling (24V, 48V, 96V)', 'Precision per-cell voltage logging']
    }
  ];

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#A3FF35]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
            ENERGY DIVISION // ADB LABS
          </span>
          <h1 className="text-5xl sm:text-7xl font-black font-heading text-white tracking-tight">
            Reliable Energy. <br />
            <span className="text-[#A3FF35]">Engineered for Reality.</span>
          </h1>
          <p className="text-[#A3ADA5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From deployable off-grid commercial packages to whole-home automatic backup and custom prismatic battery packs — built to eliminate fossil fuels and deliver rock-solid 230V pure sine power.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.25)] flex items-center gap-2 font-heading"
            >
              <span>Find Your Energy Solution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/power-stations/adb-ps1"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition"
            >
              <span>Explore ADB PS1 Platform</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Categories Deep Dive */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-24">
          {energyCategories.map((cat, idx) => (
            <div
              key={cat.id}
              id={cat.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-14 rounded-3xl bg-[#091310] border border-white/10 text-left relative overflow-hidden shadow-2xl ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3FF35] font-bold bg-[#A3FF35]/15 px-3 py-1 rounded-full border border-[#A3FF35]/30">
                  {cat.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight">
                  {cat.title}
                </h2>
                <p className="text-sm font-medium text-[#A3FF35]">
                  {cat.tagline}
                </p>
                <p className="text-[#A3ADA5] text-sm leading-relaxed">
                  {cat.desc}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                  {cat.specs.map((s, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#101C17] border border-white/10">
                      <div className="text-[10px] text-[#68776D]">{s.label}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{s.val}</div>
                    </div>
                  ))}
                </div>

                {/* Key Applications & Benefits */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold font-heading text-white uppercase tracking-wider">
                    Key Applications:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.applications.map((app, i) => (
                      <span key={i} className="text-xs bg-[#101C17] text-[#A3ADA5] px-3 py-1 rounded-lg border border-white/10">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/get-a-quote"
                    className="inline-flex items-center gap-2 bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-6 py-3 rounded-full transition font-heading shadow"
                  >
                    <span>Enquire About {cat.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Imagery */}
              <div className="lg:col-span-6">
                <div className="aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 bg-[#050B0A] relative group flex items-center justify-center p-3">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="max-h-full max-w-full object-contain rounded-xl group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Comparison Waveform */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              POWER QUALITY AUDIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Pure Sine Wave vs. Generator Distortion.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-3 leading-relaxed">
              Why commercial waffle irons, deep freezer compressors, and point-of-sale computers burn out on diesel generators — and thrive on ADB Labs PS1.
            </p>
          </div>

          <CleanWaveformComparison />
        </div>
      </section>

      {/* Engineering Process */}
      <ProcessSection />

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#091310] text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Find the right energy solution.
          </h2>
          <p className="text-[#A3ADA5] text-base max-w-xl mx-auto">
            Schedule an on-site load audit or speak directly with an ADB Labs energy systems engineer.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition font-heading shadow"
            >
              <span>Get Energy Assessment</span>
            </Link>
            <Link
              to="/contact"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition"
            >
              <span>Contact Engineering</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
