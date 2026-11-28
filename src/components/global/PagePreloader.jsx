import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KEY = 'adb_preloader_seen_v2';

export default function PagePreloader() {
  const [visible, setVisible] = useState(() => {
    try { return !sessionStorage.getItem(KEY); } catch { return true; }
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf;
    const start = performance.now();
    const duration = 1600;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setVisible(false);
          try { sessionStorage.setItem(KEY, '1'); } catch {}
        }, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-preloader"
          className="fixed inset-0 z-[9999] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Left + right split panels */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#050B0A]"
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#050B0A]"
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Content */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-8"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* SVG letter-draw */}
            <svg width="260" height="80" viewBox="0 0 260 80" className="overflow-visible">
              <text
                className="preloader-text"
                x="50%" y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                className="font-heading"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 900,
                  fontSize: 52,
                  fill: 'none',
                  stroke: '#A3FF35',
                  strokeWidth: 1.2,
                  letterSpacing: '0.05em',
                }}
              >
                ADB LABS
              </text>
            </svg>
            <style>{`
              .preloader-text {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw 1.4s ease forwards;
              }
              @keyframes draw { to { stroke-dashoffset: 0; } }
            `}</style>

            {/* Progress bar */}
            <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#A3FF35] shadow-[0_0_12px_#A3FF35]"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#68776D] uppercase">
              INITIALIZING SYSTEMS — {Math.round(progress * 100)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}