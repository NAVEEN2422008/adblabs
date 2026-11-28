import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsapSetup';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const CARDS = [
  { title: 'Modular Power', desc: 'LiFePO4 storage from 6 to 30 kWh.' },
  { title: 'Solar Harvest', desc: 'Dual MPPT up to 2.88 kWp.' },
  { title: 'Pure Sine', desc: '< 1.4% THD inverter output.' },
  { title: 'Active BMS', desc: 'CAN-bus cell balancing.' },
  { title: 'Zero Diesel', desc: 'Silent off-grid operation.' },
];

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const mobile = useIsMobile();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (mobile || reduced) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${track.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      return () => tween.kill();
    }, section);
    return () => ctx.revert();
  }, [mobile, reduced]);

  if (mobile || reduced) {
    return (
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#050B0A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {CARDS.map((c, i) => (
              <div key={i} className="w-full rounded-3xl bg-[#101C17] border border-white/10 p-8 noise-card">
                <div className="text-[10px] font-mono text-[#A3FF35] mb-2">0{i + 1}</div>
                <h3 className="text-2xl font-black font-heading text-white mb-3">{c.title}</h3>
                <p className="text-[#A3ADA5] text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#050B0A]">
      <div ref={trackRef} className="flex items-center gap-8 h-full px-12 will-change-transform">
        {CARDS.map((c, i) => (
          <div key={i} className="shrink-0 w-[400px] h-[500px] rounded-3xl bg-[#101C17] border border-white/10 p-8 flex flex-col justify-end noise-card">
            <div className="text-[10px] font-mono text-[#A3FF35] mb-2">0{i + 1}</div>
            <h3 className="text-3xl font-black font-heading text-white mb-3">{c.title}</h3>
            <p className="text-[#A3ADA5] text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}