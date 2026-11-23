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
  Sparkles,
  ChevronRight
} from 'lucide-react';

import ItelProductMatrix from '../components/ItelProductMatrix';
import ItelHardwareExplorer from '../components/ItelHardwareExplorer';
import CleanWaveformComparison from '../components/CleanWaveformComparison';
import TrustAndComparisonSection from '../components/TrustAndComparisonSection';
import RoboticsTitanGallery from '../components/RoboticsTitanGallery';
import InternshipRoadmapInteractive from '../components/InternshipRoadmapInteractive';
import ProcessSection from '../components/ProcessSection';

export default function HomePage() {
  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* SECTION 1: CINEMATIC HERO (Flagship Statement & Clean Hardware Visual) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
        
        {/* Subtle Atmospheric Studio Halo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-b from-[#A3FF35]/12 via-[#101C17]/40 to-transparent rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse [animation-duration:8s]"></div>

        <div className="max-w-6xl mx-auto w-full">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#101C17] border border-white/12 text-xs text-[#A3FF35] font-mono tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#A3FF35] animate-ping"></span>
            <span>CLEAN ENERGY · ROBOTICS · EMBEDDED SYSTEMS · R&amp;D</span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.04] text-white max-w-5xl mx-auto"
          >
            Industrial-Grade <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#A3FF35] via-[#6DEB38] to-[#47bfff] bg-clip-text text-transparent">
              Off-Grid Power
            </span> &amp; Robotics.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#A3ADA5] text-base sm:text-xl max-w-3xl mx-auto mt-6 font-normal leading-relaxed"
          >
            High-density LiFePO₄ energy storage, turnkey commercial solar microgrids, and dynamic quadruped robotics R&amp;D — engineered from first principles for demanding field operations.
          </motion.p>

          {/* Key Metric Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 text-[11px] sm:text-xs font-mono"
          >
            <span className="px-3 py-1 rounded-full bg-[#101C17] border border-white/10 text-white flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#A3FF35]" /> 3.0 kW Continuous Pure Sine
            </span>
            <span className="px-3 py-1 rounded-full bg-[#101C17] border border-white/10 text-white flex items-center gap-1.5">
              <Battery className="w-3.5 h-3.5 text-[#A3FF35]" /> 6.144 – 12.288 kWh Modular LFP
            </span>
            <span className="px-3 py-1 rounded-full bg-[#101C17] border border-white/10 text-white flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-[#A3FF35]" /> Dual MPPT High-Yield Solar
            </span>
            <span className="px-3 py-1 rounded-full bg-[#101C17] border border-white/10 text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A3FF35]" /> &lt; 15ms Seamless UPS
            </span>
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <Link
              to="/power-stations/adb-ps1"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.3)] flex items-center gap-2 group font-heading"
            >
              <span>Explore ADB PS1</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
            <Link
              to="/get-a-quote"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition flex items-center gap-2"
            >
              <span>Request System Quote</span>
            </Link>
            <Link
              to="/projects"
              className="text-[#A3ADA5] hover:text-white font-medium text-sm px-6 py-3.5 transition flex items-center gap-1.5"
            >
              <span>View Field Deployments</span>
              <ArrowUpRight className="w-4 h-4 text-[#A3FF35]" />
            </Link>
          </motion.div>

          {/* Cinematic Flagship Hardware Render */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-12 max-w-4xl mx-auto flex flex-col items-center justify-center"
          >
            <div className="relative aspect-[16/9] w-full flex items-center justify-center animate-hardware-float">
              <img
                src="/images/ps1_titan_studio.jpg"
                alt="ADB Labs PS1 Modular Power Station"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
              />
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 mt-4 text-[#68776D] text-[10px] font-mono tracking-widest uppercase">
              <span>Scroll to Explore Products</span>
              <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-[#A3FF35] animate-bounce"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: 4 CORE CAPABILITIES BAR */}
      <section className="py-10 border-y border-white/10 bg-[#091310]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <Link to="/power-stations" className="group p-4 sm:p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#050B0A] border border-white/10 text-[#A3FF35] group-hover:scale-105 transition flex-shrink-0">
                <Battery className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm sm:text-base">Portable Storage</div>
                <div className="text-[11px] sm:text-xs text-[#A3ADA5] mt-0.5">3.0 kW / 6.1 – 12.3 kWh</div>
              </div>
            </Link>

            <Link to="/energy-solutions" className="group p-4 sm:p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#050B0A] border border-white/10 text-[#A3FF35] group-hover:scale-105 transition flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm sm:text-base">Off-Grid Solar</div>
                <div className="text-[11px] sm:text-xs text-[#A3ADA5] mt-0.5">Turnkey commercial microgrids</div>
              </div>
            </Link>

            <Link to="/robotics-rd" className="group p-4 sm:p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#050B0A] border border-white/10 text-[#A3FF35] group-hover:scale-105 transition flex-shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm sm:text-base">Robotics &amp; AI</div>
                <div className="text-[11px] sm:text-xs text-[#A3ADA5] mt-0.5">Autonomous quadrupeds &amp; CAN</div>
              </div>
            </Link>

            <Link to="/internship" className="group p-4 sm:p-5 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#050B0A] border border-white/10 text-[#A3FF35] group-hover:scale-105 transition flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm sm:text-base">Engineering Training</div>
                <div className="text-[11px] sm:text-xs text-[#A3ADA5] mt-0.5">Hands-on hardware incubator</div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT & SYSTEMS MATRIX (Tabbed Showcase Inspired by energy.itel-life.com) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
                01 // COMPLETE HARDWARE ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
                Product &amp; Systems <span className="text-[#A3FF35]">Portfolio.</span>
              </h2>
            </div>
            <p className="text-[#A3ADA5] text-sm sm:text-base max-w-lg leading-relaxed">
              Explore our modular product line across portable energy, commercial off-grid microgrids, dynamic robotics, and custom LiFePO₄ packs.
            </p>
          </div>

          {/* Clean Tabbed Product Cards - No Slide Traps */}
          <ItelProductMatrix />

        </div>
      </section>

      {/* SECTION 4: HARDWARE ANATOMY & ENGINEERING EXPLORER (Replaces 300vh Scroll Lock) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              02 // ENGINEERING ANATOMY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Anatomy of the <span className="text-[#A3FF35]">ADB PS1.</span>
            </h2>
            <p className="text-[#A3ADA5] text-sm sm:text-base mt-3 leading-relaxed">
              Inspect the core engineering pillars that make the ADB PS1 resilient to continuous tropical heat, heavy inductive motor surges, and coastal salt spray.
            </p>
          </div>

          <ItelHardwareExplorer />

          {/* Pure Sine Wave vs Dirty Generator Comparison */}
          <div className="mt-16">
            <CleanWaveformComparison />
          </div>

        </div>
      </section>

      {/* SECTION 5: REAL-WORLD FIELD DEPLOYMENT (Besant Nagar Case Study) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#101C17] border border-white/10 text-left relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#A3FF35]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C17] border border-white/15 text-xs font-mono text-[#A3FF35]">
                  <MapPin className="w-3.5 h-3.5 text-[#A3FF35]" />
                  <span>BESANT NAGAR, CHENNAI · FIELD VALIDATION</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-heading text-white leading-tight">
                  Energy Beyond <br />
                  <span className="text-[#A3FF35]">The Grid.</span>
                </h3>

                <p className="text-[#A3ADA5] text-sm sm:text-base leading-relaxed">
                  A commercial off-grid solar and energy storage installation deployed for a retail seafood stall on the Besant Nagar coastline. Replaces loud, smoky diesel generators with 12.288 kWh of silent LiFePO₄ storage and 2.88 kWp bifacial solar harvest.
                </p>

                {/* Specs Pill Matrix */}
                <div className="space-y-2.5 font-mono text-xs bg-[#050B0A] p-5 rounded-2xl border border-white/10">
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span className="text-[#68776D]">APPLICATION</span>
                    <span className="text-white font-sans font-bold">Food &amp; Fish Stall (Commercial Retail)</span>
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

      {/* SECTION 6: AUTONOMOUS ROBOTICS & AI R&D DIVISION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-black relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-bold block mb-2">
                03 // INTELLIGENT SYSTEMS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
                Robotics &amp; AI <span className="text-[#38bdf8]">R&amp;D.</span>
              </h2>
            </div>
            <p className="text-[#A3ADA5] text-sm sm:text-base max-w-lg leading-relaxed">
              Bio-inspired quadruped robotics, computer vision perception, low-latency STM32/CAN firmware, and Gazebo dynamic gait physics.
            </p>
          </div>

          <RoboticsTitanGallery />

        </div>
      </section>

      {/* SECTION 7: TRUST, CERTIFICATIONS & GENERATOR COMPARISON */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310] relative">
        <div className="max-w-7xl mx-auto">
          <TrustAndComparisonSection />
        </div>
      </section>

      {/* SECTION 8: TALENT INCUBATOR / HANDS-ON INTERNSHIP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
                04 // TALENT INCUBATOR
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
                Industrial <span className="text-[#A3FF35]">Internship.</span>
              </h2>
            </div>
            <p className="text-[#A3ADA5] text-sm sm:text-base max-w-lg leading-relaxed">
              A 6-week, project-based engineering program with 18 live masterclasses and an autonomous robot simulation capstone.
            </p>
          </div>

          <InternshipRoadmapInteractive />

        </div>
      </section>

      {/* SECTION 9: 5-PHASE ENGINEERING PROCESS */}
      <ProcessSection />

      {/* SECTION 10: HIGH-CONVERTING ENTERPRISE CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#091310] to-[#050B0A] relative text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
            LET'S TURN YOUR IDEA INTO A WORKING SOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Have an engineering challenge?
          </h2>
          <p className="text-[#A3ADA5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need off-grid energy storage, custom LiFePO₄ pack engineering, or autonomous robotics prototyping — our engineering team is ready to assist.
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
