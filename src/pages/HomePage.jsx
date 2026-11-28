import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import HomeHero from '../components/sections/home/HomeHero';
import InfiniteMarquee from '../components/home/InfiniteMarquee';
import AnimatedStats from '../components/home/AnimatedStats';
import ComparisonSection from '../components/sections/home/ComparisonSection';
import PowerEssentialsSection from '../components/sections/home/PowerEssentialsSection';
import SavingsSection from '../components/sections/home/SavingsSection';
import HorizontalScroll from '../components/home/HorizontalScroll';
import FAQSection from '../components/sections/home/FAQSection';
import FinalCTA from '../components/sections/home/FinalCTA';

const TrustAndComparisonSection = lazy(() => import('../components/TrustAndComparisonSection'));

export default function HomePage() {
  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      <HomeHero />
      <InfiniteMarquee />
      <AnimatedStats />

      {/* Product lineup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-1">PRODUCT LINEUP</span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">Energy Systems Series</h2>
            </div>
            <Link to="/power-stations" className="text-xs font-mono text-[#A3FF35] hover:underline font-bold self-start sm:self-auto flex items-center gap-1">
              <span>View All Systems &gt;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ADB PS1 Power Station', spec: '3.0 kW Continuous | 6.144 kWh LiFePO4', desc: 'All-in-one portable power station with pure sine wave inverter, dual MPPT solar, active CAN-bus BMS.', img: '/images/ps1_titan_studio.jpg', to: '/power-stations/adb-ps1', badge: 'FLAGSHIP CORE' },
              { title: 'Dual-Stack Expansion', spec: '6.0 kW Peak | 12.288 kWh Total', desc: 'Direct DC latch coupling expands storage to 12.288 kWh in seconds without complex wiring.', img: '/images/ps1_dual_stack_titan.jpg', to: '/power-stations/adb-ps1', badge: 'MODULAR EXPANSION' },
              { title: 'Off-Grid Solar Microgrids', spec: '2.88 kWp Solar | 100% Diesel-Free', desc: 'Turnkey rooftop & stall solar installations replacing loud generators for coastal retail.', img: '/images/commercial_solar.jpg', to: '/projects/besant-nagar-off-grid-system', badge: 'COMMERCIAL PILOT' },
            ].map((p) => (
              <div key={p.title} className="rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition p-6 flex flex-col justify-between group">
                <div>
                  <span className="text-[10px] font-mono text-[#A3FF35] bg-[#A3FF35]/10 px-2.5 py-1 rounded-full font-bold">{p.badge}</span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-3 group-hover:text-[#A3FF35] transition">{p.title}</h3>
                  <div className="text-xs font-mono text-[#A3ADA5] mt-1">{p.spec}</div>
                  <div className="relative aspect-[16/11] my-4 rounded-2xl bg-[#050B0A] border border-white/10 flex items-center justify-center overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition duration-300" />
                  </div>
                  <p className="text-xs text-[#A3ADA5] leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-5 mt-5 border-t border-white/10">
                  <Link to={p.to} className="w-full bg-[#050B0A] hover:bg-white/10 text-white border border-white/15 font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A3FF35]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonSection />
      <PowerEssentialsSection />
      <SavingsSection />
      <HorizontalScroll />

      <Suspense fallback={<div className="py-20 text-center text-[#68776D] font-mono text-sm">Syncing Benchmarks…</div>}>
        <TrustAndComparisonSection />
      </Suspense>

      <FAQSection />
      <FinalCTA />
    </div>
  );
}