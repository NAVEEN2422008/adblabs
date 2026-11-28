import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

// TODO: replace placeholder image with generated/real hero photography
const HERO_IMG = '/images/ps1_titan_studio.jpg';

export default function HomeHero() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#A3FF35]/15 via-[#101C17]/40 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101C17] border border-white/12 text-xs font-mono text-[#A3FF35] tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#A3FF35] animate-ping" />
          <span>FLAGSHIP PORTABLE POWER STATION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading text-white tracking-tight leading-[0.98]"
        >
          ADB LABS <span className="text-[#A3FF35]">PS1</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-3xl font-heading text-[#A3ADA5] max-w-3xl mx-auto font-light"
        >
          Whole-Home Power, <span className="text-white font-medium">Now Within Reach.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#68776D] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Delivers pure, silent, modular LiFePO₄ energy that pays for itself — 3.0 kW pure sine inverter, 6.144 kWh automotive LiFePO₄ prismatic core, dual 12 V–150 V MPPT solar tracking, and modular expansion to 12.288 kWh. {/* TODO: verify copy */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/get-a-quote"
            className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-4 rounded-full transition shadow-[0_0_30px_rgba(163,255,55,0.3)] flex items-center gap-2 font-heading"
          >
            <span>Buy Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/power-stations/adb-ps1"
            className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-4 rounded-full transition"
          >
            <span>Get Expert Help</span>
          </Link>
          <button
            type="button"
            className="flex items-center gap-2 text-[#A3ADA5] hover:text-white text-sm font-semibold transition"
            aria-label="Watch product video"
          >
            <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
              <Play className="w-4 h-4 text-[#A3FF35]" />
            </span>
            <span>Watch the Video</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-12 max-w-5xl mx-auto flex items-center justify-center"
        >
          <img
            src={HERO_IMG}
            alt="ADB Labs PS1 modular home battery"
            className="max-h-[480px] w-auto object-contain filter drop-shadow-[0_35px_60px_rgba(0,0,0,0.95)]"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}