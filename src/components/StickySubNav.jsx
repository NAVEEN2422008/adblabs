import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, Layers, Sliders, MapPin } from 'lucide-react';

export default function StickySubNav({ onOpenQuote, activeSection }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling 450px
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed top-14 left-0 right-0 z-40 bg-[#06080f]/90 backdrop-blur-xl border-b border-[#1b2336] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs">
            
            {/* Left: Product identifier */}
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-white tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                ADB LABS PS1
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-green-950 text-green-400 font-mono text-[10px] border border-green-800">
                6.144 kWh • 3 kW
              </span>
            </div>

            {/* Center Quick Navigation Links (EcoFlow style) */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-3 font-mono text-[11px] text-slate-300">
              <button
                onClick={() => scrollTo('ps1')}
                className="px-2.5 py-1 rounded hover:text-green-400 hover:bg-white/[0.04] transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => scrollTo('architecture')}
                className="px-2.5 py-1 rounded hover:text-green-400 hover:bg-white/[0.04] transition-colors"
              >
                Modular Architecture
              </button>
              <button
                onClick={() => scrollTo('solutions')}
                className="px-2.5 py-1 rounded hover:text-green-400 hover:bg-white/[0.04] transition-colors"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="px-2.5 py-1 rounded hover:text-green-400 hover:bg-white/[0.04] transition-colors"
              >
                Besant Nagar Pilot
              </button>
              <button
                onClick={() => scrollTo('calculator')}
                className="px-2.5 py-1 rounded hover:text-green-400 hover:bg-white/[0.04] transition-colors"
              >
                Runtime Calculator
              </button>
              <button
                onClick={() => scrollTo('robotics')}
                className="px-2.5 py-1 rounded hover:text-green-400 hover:bg-white/[0.04] transition-colors"
              >
                Robotics R&D
              </button>
            </div>

            {/* Right Action CTA */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenQuote}
                className="px-4 py-1.5 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all flex items-center gap-1.5"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
