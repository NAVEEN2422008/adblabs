import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedStat({ value, suffix = '', prefix = '', label, duration = 1600, decimals }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(value * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  const d = decimals !== undefined ? decimals : (Number.isInteger(value) ? 0 : 1);
  const formatted = d === 0
    ? Math.round(display).toLocaleString()
    : display.toFixed(d);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight bg-gradient-to-b from-white to-[#94a3b8] bg-clip-text text-transparent">
        {prefix}{formatted}{suffix}
      </div>
      <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-[#68776D]">{label}</div>
    </div>
  );
}
