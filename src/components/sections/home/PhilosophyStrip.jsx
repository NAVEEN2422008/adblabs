import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../../lib/gsapSetup';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

const PILLARS = [
  { title: 'Save Money', desc: 'Eliminate recurring generator fuel bills. Besant Nagar pilot saves ₹14,000+/month with zero engine maintenance.', icon: '₹' },
  { title: 'Uncompromising Safety', desc: 'Automotive-grade LiFePO4 with active CAN-bus BMS. Non-combustible, safe for indoor operation.', icon: '🛡' },
  { title: 'Field Reliable', desc: '3,500+ full discharge cycles, pure sine wave AC, sub-15ms UPS transfer.', icon: '⚡' },
];

export default function PhilosophyStrip() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const mobile = useIsMobile();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (mobile || reduced) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    section.style.height = (track.scrollWidth + window.innerHeight) + 'px';

    const tween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth + 80),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${track.scrollWidth}`,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => { if (t.trigger === section) t.kill(); });
    };
  }, [mobile, reduced]);

  if (mobile || reduced) {
    return (
      <section className="py-20 px-6 lg:px-8 border-y border-white/10 bg-[#091310]">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-3xl font-black font-heading text-white text-center">Engineering Principles</h2>
          <div className="grid grid-cols-1 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="p-6 rounded-3xl bg-[#101C17] border border-white/10">
                <h3 className="text-xl font-black font-heading text-white">{p.title}</h3>
                <p className="text-sm text-[#A3ADA5] mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#091310]">
      <div className="sticky top-0 h-screen flex items-center">
        <div ref={trackRef} className="flex gap-8 pl-8 will-change-transform">
          <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">ENGINEERING PRINCIPLES</span>
            <h2 className="text-4xl sm:text-6xl font-black font-heading text-white mt-3">Product<br />Philosophy</h2>
            <p className="text-[#A3ADA5] mt-4 max-w-sm text-sm">Scroll to explore the three non-negotiable commitments behind every ADB Labs product.</p>
          </div>
          {PILLARS.map((p) => (
            <div key={p.title} className="flex-shrink-0 w-[46vw] max-w-xl p-10 rounded-3xl bg-[#101C17] border border-white/10 flex flex-col justify-between">
              <div className="text-5xl">{p.icon}</div>
              <div>
                <h3 className="text-3xl font-black font-heading text-white">{p.title}</h3>
                <p className="text-sm text-[#A3ADA5] mt-3 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-[20vw]" />
        </div>
      </div>
    </section>
  );
}
