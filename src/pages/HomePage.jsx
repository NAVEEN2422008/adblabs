import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Bot, 
  Cpu, 
  GraduationCap, 
  ArrowRight, 
  ArrowUpRight, 
  Battery, 
  Layers, 
  Sun, 
  ShieldCheck, 
  Activity, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Cinematic3DHero from '../components/home/Cinematic3DHero';
import OurSolutionsBento from '../components/OurSolutionsBento';
import CleanWaveformComparison from '../components/CleanWaveformComparison';
import EcoFlowScrollPinnedHardware from '../components/EcoFlowScrollPinnedHardware';
import RoboticsTitanGallery from '../components/RoboticsTitanGallery';
import InternshipRoadmapInteractive from '../components/InternshipRoadmapInteractive';
import ProcessSection from '../components/ProcessSection';

export default function HomePage() {
  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* SECTION 1: CINEMATIC 3D WEBGL HERO */}
      <Cinematic3DHero />

      {/* SECTION 2: CAPABILITIES STRIP */}
      <section className="py-12 border-y border-white/10 bg-[#091310]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <Link to="/energy-solutions" className="group p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#050B0A] border border-white/10 text-[#A3FF35] group-hover:scale-105 transition">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">Power Solutions</div>
                <div className="text-xs text-[#A3ADA5] mt-1">Reliable & scalable energy</div>
              </div>
            </Link>

            <Link to="/robotics-rd" className="group p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#050B0A] border border-white/10 text-[#A3FF35] group-hover:scale-105 transition">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">Robotics R&D</div>
                <div className="text-xs text-[#A3ADA5] mt-1">Intelligent machines</div>
              </div>
            </Link>

            <Link to="/power-stations" className="group p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#050B0A] border border-white/10 text-[#A3FF35] group-hover:scale-105 transition">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">Product Development</div>
                <div className="text-xs text-[#A3ADA5] mt-1">From concept to prototype</div>
              </div>
            </Link>

            <Link to="/internship" className="group p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#050B0A] border border-white/10 text-[#A3FF35] group-hover:scale-105 transition">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">Internship Program</div>
                <div className="text-xs text-[#A3ADA5] mt-1">Hands-on, project-based learning</div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 3: OUR SOLUTIONS (Editorial Asymmetric Bento) */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
                01 // Systems Portfolio
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
                Our <span className="text-[#A3FF35]">Solutions.</span>
              </h2>
            </div>
            <p className="text-[#A3ADA5] text-base max-w-lg leading-relaxed">
              End-to-end energy and engineering solutions for homes, businesses, and field applications — built around genuine operational constraints.
            </p>
          </div>

          <OurSolutionsBento />

        </div>
      </section>

      {/* SECTION 4: FEATURED PRODUCT — ADB LABS PS1 CINEMATIC REVEAL */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#101C17] border border-white/10 relative overflow-hidden text-left shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#A3FF35]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A3FF35]/15 border border-[#A3FF35]/30 text-xs font-mono text-[#A3FF35] font-bold">
                  <span>FLAGSHIP HARDWARE · READY FOR AUDIT</span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-black font-heading text-white leading-tight">
                  Meet the <span className="text-[#A3FF35]">ADB PS1.</span>
                </h3>

                <p className="text-[#A3ADA5] text-base leading-relaxed">
                  An integrated portable power station engineered with 3.0 kW continuous pure sine output and 6.144 kWh automotive LiFePO₄ prismatic chemistry, expandable to 12.288 kWh via direct DC bus coupling.
                </p>

                {/* Key Spec Pillars */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#A3FF35]">6.144</div>
                    <div className="text-xs text-[#A3ADA5] mt-0.5">kWh Nominal Core</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">3.0 kW</div>
                    <div className="text-xs text-[#A3ADA5] mt-0.5">Continuous Inverter</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#A3FF35]">LFP</div>
                    <div className="text-xs text-[#A3ADA5] mt-0.5">3,500+ Cycle Life</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/power-stations/adb-ps1"
                    className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-7 py-3 rounded-full transition shadow flex items-center gap-2 font-heading"
                  >
                    <span>Explore ADB PS1</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/power-stations/adb-ps1#cad"
                    className="bg-[#050B0A] hover:bg-white/10 text-white border border-white/15 font-semibold text-xs px-6 py-3 rounded-full transition"
                  >
                    <span>CAD 3D Explorer</span>
                  </Link>
                </div>
              </div>

              {/* Product Visual */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#050B0A] border border-white/10 p-6 flex items-center justify-center">
                  <img
                    src="/images/ps1_titan_studio.jpg"
                    alt="ADB Labs PS1 Studio Presentation"
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                  />
                  <div className="absolute bottom-3 right-4 text-[10px] font-mono text-[#68776D]">
                    1:1 SCALE SPECIFICATION // REV 3.2
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Clean AC Pure Sine Wave vs Generator Distortion */}
          <div className="mt-16">
            <CleanWaveformComparison />
          </div>

        </div>
      </section>

      {/* SECTION 5: SCROLL-DRIVEN HARDWARE ANATOMY (EcoFlow Titan Pinned Stage) */}
      <section className="relative border-b border-white/10">
        <EcoFlowScrollPinnedHardware />
      </section>

      {/* SECTION 6: FEATURED PROJECT — BESANT NAGAR OFF-GRID SYSTEM */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#101C17] border border-white/10 text-left relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C17] border border-white/15 text-xs font-mono text-[#A3FF35]">
                  <MapPin className="w-3.5 h-3.5 text-[#A3FF35]" />
                  <span>BESANT NAGAR, CHENNAI · FIELD PILOT</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-heading text-white leading-tight">
                  Energy Beyond <br />
                  <span className="text-[#A3FF35]">The Grid.</span>
                </h3>

                <p className="text-[#A3ADA5] text-base leading-relaxed">
                  A commercial off-grid solar and energy storage installation deployed for a retail seafood stall on the Besant Nagar coastline. Replaces loud, smoky diesel generators with 12.288 kWh of silent LiFePO₄ storage and 2.88 kWp bifacial solar harvest.
                </p>

                {/* Specs Pill Matrix */}
                <div className="space-y-2.5 font-mono text-xs bg-[#050B0A] p-5 rounded-2xl border border-white/10">
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-[#68776D]">APPLICATION</span>
                    <span className="text-white font-sans font-bold">Food / Fish Stall (Commercial Retail)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-[#68776D]">SOLAR CAPACITY</span>
                    <span className="text-[#A3FF35] font-sans font-bold">2.88 kWp (4x 720W Bifacial Panels)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-[#68776D]">BATTERY STORAGE</span>
                    <span className="text-white font-sans font-bold">12.288 kWh Dual Stack LiFePO₄</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#68776D]">DIESEL ELIMINATED</span>
                    <span className="text-[#A3FF35] font-sans font-bold">100% (₹14,000 / month saved)</span>
                  </div>
                </div>

                <Link
                  to="/projects/besant-nagar-off-grid-system"
                  className="inline-flex items-center gap-2 bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-7 py-3.5 rounded-full transition font-heading shadow"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Gallery Image */}
              <div className="lg:col-span-6">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#050B0A] relative group">
                  <img
                    src="/images/besant_wide.png"
                    alt="Besant Nagar Commercial Solar Pilot"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#050B0A]/85 backdrop-blur-md border border-white/10 text-xs text-left">
                    <span className="text-white font-bold block">Daytime Solar Harvesting (2.88 kWp)</span>
                    <span className="text-[#A3ADA5]">Continuous chiller operation with zero toxic fumes.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: ROBOTICS & AI R&D DIVISION */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-black relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
                02 // Intelligent Systems
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
                Robotics & AI <span className="text-[#A3FF35]">R&D.</span>
              </h2>
            </div>
            <p className="text-[#A3ADA5] text-base max-w-lg leading-relaxed">
              Advancing practical autonomous mobile robots, computer vision perception, embedded STM32/CAN firmware, and kinematic simulation.
            </p>
          </div>

          <RoboticsTitanGallery />

        </div>
      </section>

      {/* SECTION 8: ROBOTICS & AI INDUSTRIAL INTERNSHIP */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
                03 // Talent Incubator
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
                Industrial <span className="text-[#A3FF35]">Internship.</span>
              </h2>
            </div>
            <p className="text-[#A3ADA5] text-base max-w-lg leading-relaxed">
              A 6-week, project-based engineering program with 18 live masterclasses and an autonomous robot simulation capstone.
            </p>
          </div>

          <InternshipRoadmapInteractive />

        </div>
      </section>

      {/* SECTION 9: 5-PHASE PROCESS */}
      <ProcessSection />

      {/* SECTION 10: FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#091310] to-[#050B0A] relative text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
            LET'S TURN YOUR IDEA INTO A WORKING SOLUTION
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
            Have an engineering challenge?
          </h2>
          <p className="text-[#A3ADA5] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need off-grid energy storage, custom LiFePO₄ pack engineering, or autonomous robotics prototyping — our engineering team is ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-4 rounded-full transition shadow-[0_0_30px_rgba(163,255,55,0.3)] flex items-center gap-2 font-heading"
            >
              <span>Start an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-4 rounded-full transition"
            >
              <span>Contact ADB LABS</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
