import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Sun, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sliders,
  RotateCw,
  Box
} from 'lucide-react';
import ModularStackingSimulator from '../components/ModularStackingSimulator';

export default function PowerStationsPage() {
  const powerLineup = [
    {
      id: 'ps1-standard',
      name: 'ADB Labs PS1 Single Unit',
      tier: 'STARTER COMMERCIAL SETUP',
      capacity: '6.144 kWh',
      output: '3.0 kW Continuous',
      surge: '6.0 kW Peak Inrush',
      solar: '1.44 kWp (2x 720W Bifacial)',
      runtimeChiller: '19.7 Hours',
      image: '/images/ps1_titan_studio.jpg',
      desc: 'Standalone all-in-one power station housing automotive LiFePO₄ prismatic cells, 3kW pure sine inverter, and dual MPPT solar controllers. Perfect for juice bars, tea counters, and small food kiosks.',
      status: 'Ready for Field Pilot Allocation'
    },
    {
      id: 'ps1-dual',
      name: 'ADB Labs PS1 Dual Stack',
      tier: 'FLAGSHIP COMMERCIAL POWER PLANT',
      capacity: '12.288 kWh',
      output: '3.0 kW Continuous',
      surge: '6.0 kW Peak Inrush',
      solar: '2.88 kWp (4x 720W Bifacial)',
      runtimeChiller: '39.5 Hours',
      image: '/images/ps1_dual_stack_titan.jpg',
      desc: 'Expanded 2-tier modular tower featuring master PS1 paired with secondary 6.144 kWh battery pack via high-amperage direct DC bus coupling. Engineered for heavy 24/7 commercial cooling and deep chillers.',
      status: 'Validated in Besant Nagar Beach Pilot'
    }
  ];

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#A3FF35]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
            PORTABLE ENERGY HARDWARE // ADB LABS
          </span>
          <h1 className="text-5xl sm:text-7xl font-black font-heading text-white tracking-tight">
            Power Without <br />
            <span className="text-[#A3FF35]">Boundaries.</span>
          </h1>
          <p className="text-[#A3ADA5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            High-surge bidirectional pure sine inverters, tropical-grade LiFePO₄ prismatic chemistry, and modular expansion buses engineered for demanding real-world workloads.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/power-stations/adb-ps1"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.25)] flex items-center gap-2 font-heading"
            >
              <span>Explore Flagship PS1</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/get-a-quote"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition"
            >
              <span>Calculate Load Sizing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Lineup Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              SYSTEM ARCHITECTURES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Modular Power Configurations.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-3">
              Scale from a single 6.144 kWh master unit up to a dual-stacked 12.288 kWh tower without rewiring or secondary inverters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {powerLineup.map((prod) => (
              <div
                key={prod.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#091310] border border-white/10 flex flex-col justify-between text-left relative overflow-hidden shadow-2xl hover:border-[#A3FF35]/40 transition group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3FF35] bg-[#A3FF35]/15 px-3 py-1 rounded-full border border-[#A3FF35]/30 font-bold">
                      {prod.tier}
                    </span>
                    <span className="text-[11px] font-mono text-[#68776D]">
                      {prod.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold font-heading text-white">
                    {prod.name}
                  </h3>

                  <p className="text-[#A3ADA5] text-sm mt-3 leading-relaxed">
                    {prod.desc}
                  </p>

                  {/* Image Presentation */}
                  <div className="my-8 aspect-[16/10] rounded-2xl overflow-hidden bg-[#050B0A] border border-white/10 flex items-center justify-center p-4">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Spec Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-white/10 font-mono text-xs">
                    <div>
                      <div className="text-[10px] text-[#68776D]">CAPACITY</div>
                      <div className="text-base font-bold text-white mt-0.5">{prod.capacity}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#68776D]">AC OUTPUT</div>
                      <div className="text-base font-bold text-[#A3FF35] mt-0.5">{prod.output}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#68776D]">SOLAR ARRAY</div>
                      <div className="text-base font-bold text-white mt-0.5">{prod.solar}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#68776D]">CHILLER RUN</div>
                      <div className="text-base font-bold text-[#A3FF35] mt-0.5">{prod.runtimeChiller}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between">
                  <Link
                    to="/power-stations/adb-ps1"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#A3FF35] hover:text-white transition font-heading"
                  >
                    <span>View Technical Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/get-a-quote"
                    className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-5 py-2.5 rounded-full transition font-heading shadow"
                  >
                    <span>Request System Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Stacking Simulator */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              HARDWARE CONFIGURATOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Build Your Commercial Energy Stack.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-3">
              Compare single master unit vs dual-stack expansion with live runtime calculations.
            </p>
          </div>

          <ModularStackingSimulator />
        </div>
      </section>

      {/* Technical Applications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#091310]">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-10">
            Portable Energy Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#101C17] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#050B0A] border border-white/10 flex items-center justify-center text-[#A3FF35]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Commercial Food Service</h3>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">
                Run deep freezers, waffle irons, blenders, espresso grinders, and digital billing registers simultaneously without flickering stall lights.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#101C17] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#050B0A] border border-white/10 flex items-center justify-center text-[#A3FF35]">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Off-Grid Coastal Deployments</h3>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">
                Marine salt-spray resistant chassis seals and aluminum alloy frame engineered to survive high-humidity coastal beach operating conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#101C17] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#050B0A] border border-white/10 flex items-center justify-center text-[#A3FF35]">
                <Battery className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Field Robotics & Mobile Power</h3>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">
                Direct DC bus and 230V pure sine power for recharging autonomous mobile robot fleets, drone ground stations, and outdoor research equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
