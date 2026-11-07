import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Sun, 
  Battery, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  TrendingDown, 
  VolumeX, 
  Leaf, 
  Activity, 
  Clock 
} from 'lucide-react';
import PowerFlowDiagram from '../components/PowerFlowDiagram';

export default function BesantNagarCaseStudyPage() {
  const gallery = [
    { src: '/images/besant_wide.png', caption: 'Full daylight bifacial solar canopy overlooking Besant Nagar coastline' },
    { src: '/images/fish_stall_night.jpg', caption: 'Night commercial operation: Deep chillers and high-lumen retail lighting running 100% off-grid' },
    { src: '/images/besant_detail_solar.png', caption: '4x 720W bifacial high-irradiance solar array mounting hardware' },
    { src: '/images/besant_detail_night.png', caption: 'Sealed LiFePO₄ PS1 inverter power station running silently underneath the counter' }
  ];

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#A3FF35]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C17] border border-white/15 text-xs font-mono text-[#A3FF35] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#A3FF35]" />
            <span>BESANT NAGAR, CHENNAI · COMMERCIAL CASE STUDY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-tight">
            Besant Nagar <br />
            <span className="text-[#A3FF35]">Off-Grid System.</span>
          </h1>

          <p className="text-[#A3ADA5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Replacing a smoky, loud 5kVA diesel generator with an automated 2.88 kWp bifacial solar canopy and 12.288 kWh LiFePO₄ energy storage on the Chennai coastline.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto text-left font-mono">
            <div className="p-4 rounded-2xl bg-[#091310] border border-white/10">
              <div className="text-[10px] text-[#68776D]">APPLICATION</div>
              <div className="text-sm font-bold text-white mt-1">Food / Seafood Stall</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#091310] border border-white/10">
              <div className="text-[10px] text-[#68776D]">SOLAR CANOPY</div>
              <div className="text-sm font-bold text-[#A3FF35] mt-1">2.88 kWp (4x 720W)</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#091310] border border-white/10">
              <div className="text-[10px] text-[#68776D]">BATTERY STORAGE</div>
              <div className="text-sm font-bold text-white mt-1">12.288 kWh Dual Stack</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#091310] border border-white/10">
              <div className="text-[10px] text-[#68776D]">MONTHLY SAVINGS</div>
              <div className="text-sm font-bold text-[#A3FF35] mt-1">₹14,000 / month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & 7 Case Study Pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-20 text-left">
          
          {/* 1. Project Overview */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              01 // PROJECT OVERVIEW
            </span>
            <h2 className="text-3xl font-bold font-heading text-white">
              Electrifying Coastal Retail Beyond Grid Reach
            </h2>
            <p className="text-[#A3ADA5] text-base leading-relaxed">
              Located on the bustling beach promenade of Besant Nagar in Chennai, the commercial fish stall required high-reliability continuous power for active seafood deep refrigeration, illuminated retail signage, ice preservation, and nighttime customer lighting. Operating outside stable electrical grid connections, the stall previously relied on an expensive and polluting commercial diesel generator.
            </p>
          </div>

          {/* 2. The Challenge */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#091310] border border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
              02 // THE CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              The Crushing Cost of Fossil Fuel Generators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className="text-lg font-bold text-white">₹12,000–₹15,000 / mo</div>
                <p className="text-xs text-[#A3ADA5] leading-relaxed">
                  Fuel bills consumed over 25% of monthly retail operating profit margin, with constant fuel purchasing logistics.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-bold text-white">92 dB(A) Engine Roar</div>
                <p className="text-xs text-[#A3ADA5] leading-relaxed">
                  Loud exhaust drone repelled beach evening visitors and dining patrons within a 15-meter radius.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-bold text-white">Salt Air Alternator Failure</div>
                <p className="text-xs text-[#A3ADA5] leading-relaxed">
                  Marine salt air and spray caused frequent alternator corrosion, spark plug fouling, and expensive monthly mechanic overhauls.
                </p>
              </div>
            </div>
          </div>

          {/* 3. System Architecture */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              03 // SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-3xl font-bold font-heading text-white">
              Engineered for Complete Off-Grid Autonomy
            </h2>
            <p className="text-[#A3ADA5] text-base leading-relaxed">
              ADB Labs engineered a self-sustaining clean power plant combining 2.88 kWp of bifacial high-efficiency solar modules with the ADB Labs PS1 Dual Stack storage system (12.288 kWh nominal LiFePO₄ core).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-5 rounded-2xl bg-[#101C17] border border-white/10 space-y-2">
                <div className="text-[#A3FF35] font-bold text-sm">Solar Harvesting Plant</div>
                <ul className="space-y-1.5 text-[#A3ADA5]">
                  <li>• 4x 720W Bifacial High-Efficiency Panels</li>
                  <li>• 2.88 kWp total peak generation</li>
                  <li>• Dual independent 12V–150V MPPT tracking</li>
                  <li>• Marine-grade anodized aluminum coastal racking</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#101C17] border border-white/10 space-y-2">
                <div className="text-[#A3FF35] font-bold text-sm">Storage & Inverter Core</div>
                <ul className="space-y-1.5 text-[#A3ADA5]">
                  <li>• 1x ADB Labs PS1 Master Unit (6.144 kWh)</li>
                  <li>• 1x PS1 Secondary Expansion Battery (+6.144 kWh)</li>
                  <li>• 3.0 kW Pure Sine Inverter (6kW peak surge)</li>
                  <li>• Active CAN-bus automated cell balancing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Live 24-Hour Energy Flow Simulation */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              04 // ENERGY FLOW SIMULATION
            </span>
            <h2 className="text-3xl font-bold font-heading text-white">
              24-Hour Solar Harvesting & Discharge Cycle
            </h2>
            <PowerFlowDiagram />
          </div>

          {/* 5. Key Loads & Appliance Equation */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#091310] border border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              05 // ENERGY CONFIGURATION & LOADS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Stall Appliance Load Profile
            </h2>
            <p className="text-xs sm:text-sm text-[#A3ADA5] leading-relaxed">
              The continuous operating load across the stall averages 510W during standard evening hours, well within the 3.0 kW continuous headroom of the PS1 inverter.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#050B0A] border border-white/10">
                <div className="text-[#68776D]">Deep Chiller</div>
                <div className="text-lg font-bold text-white mt-1">280 Watts</div>
                <div className="text-[10px] text-[#A3FF35]">1.6kW surge rating</div>
              </div>
              <div className="p-4 rounded-xl bg-[#050B0A] border border-white/10">
                <div className="text-[#68776D]">Night LED Signs</div>
                <div className="text-lg font-bold text-white mt-1">150 Watts</div>
                <div className="text-[10px] text-[#A3ADA5]">High-visibility glow</div>
              </div>
              <div className="p-4 rounded-xl bg-[#050B0A] border border-white/10">
                <div className="text-[#68776D]">Stall Illumination</div>
                <div className="text-lg font-bold text-white mt-1">80 Watts</div>
                <div className="text-[10px] text-[#A3ADA5]">Warm customer LEDs</div>
              </div>
              <div className="p-4 rounded-xl bg-[#050B0A] border border-white/10">
                <div className="text-[#68776D]">POS Billing Terminal</div>
                <div className="text-lg font-bold text-white mt-1">40 Watts</div>
                <div className="text-[10px] text-[#A3ADA5]">Card & UPI register</div>
              </div>
            </div>
          </div>

          {/* 6. Project Gallery */}
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              06 // PROJECT GALLERY
            </span>
            <h2 className="text-3xl font-bold font-heading text-white">
              Installation & Field Photography
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gallery.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-[#091310] flex flex-col justify-between">
                  <div className="aspect-[16/10] bg-[#050B0A] flex items-center justify-center p-2">
                    <img src={img.src} alt={img.caption} className="max-h-full max-w-full object-contain rounded-xl" />
                  </div>
                  <div className="p-4 text-xs text-[#A3ADA5] border-t border-white/10">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Results & Economic Impact */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#101C17] to-[#091310] border border-[#A3FF35]/30 space-y-6 shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              07 // VALIDATED RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              The Economic & Environmental Transformation
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className="text-3xl font-heading font-black text-[#A3FF35]">₹0 / Month</div>
                <div className="text-sm font-bold text-white">Fuel Expense Eliminated</div>
                <p className="text-xs text-[#A3ADA5]">
                  Over ₹1.5 Lakhs saved annually, delivering full payback on hardware within ~14 operating months.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-heading font-black text-white">&lt; 30 dB</div>
                <div className="text-sm font-bold text-white">Whisper-Quiet Operation</div>
                <p className="text-xs text-[#A3ADA5]">
                  Zero engine noise allows dining customers to enjoy coastal beach ambiance without disturbance.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-heading font-black text-[#A3FF35]">0 g CO₂</div>
                <div className="text-sm font-bold text-white">Zero Toxic Fumes</div>
                <p className="text-xs text-[#A3ADA5]">
                  Completely eliminates soot and particulate matter settling over fresh seafood and food prep areas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#091310] text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Ready to replicate this off-grid success?
          </h2>
          <p className="text-[#A3ADA5] text-base max-w-xl mx-auto">
            Contact ADB Labs for an on-site commercial kiosk solar audit across Chennai and Tamil Nadu.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition font-heading shadow"
            >
              <span>Enquire About Stall Setup</span>
            </Link>
            <Link
              to="/projects"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition"
            >
              <span>View All Projects</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
