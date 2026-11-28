import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KEY = 'adb_preloader_seen_v1';

export default function Preloader() {
  const [visible, setVisible] = useState(() => {
    try {
      return !sessionStorage.getItem(KEY);
    } catch {
      return true;
    }
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf;
    const start = performance.now();
    const duration = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setVisible(false);
          try { sessionStorage.setItem(KEY, '1'); } catch {}
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050B0A] flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#A3FF35] to-[#6DEB38] p-[1.5px] shadow-[0_0_30px_rgba(163,255,55,0.3)]">
              <div className="w-full h-full bg-[#050B0A] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-[#A3FF35] text-base">ADB</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-white tracking-tight">ADB LABS</span>
              <span className="text-[9px] font-mono tracking-widest text-[#68776D] uppercase">ENERGY · ROBOTICS · R&D</span>
            </div>
          </div>
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#A3FF35]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="mt-3 text-[10px] font-mono text-[#68776D] tracking-widest">
            INITIALIZING SYSTEMS
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
