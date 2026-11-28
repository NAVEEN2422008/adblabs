import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroWebGLCanvas from '../../home/HeroWebGLCanvas';
import KineticHeadline from '../../home/KineticHeadline';

export default function CinematicHero() {

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <HeroWebGLCanvas />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C17]/80 backdrop-blur border border-white/12 text-xs text-[#A3FF35] font-mono tracking-wider uppercase mb-6"
          data-cursor
        >
          <span className="w-2 h-2 rounded-full bg-[#A3FF35] animate-ping" />
          <span>MODULAR ENERGY STORAGE &amp; COMMERCIAL OFF-GRID</span>
        </motion.div>

        <KineticHeadline
          text="Industrial-Grade Off-Grid Energy."
          className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.05] text-white"
          as="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#A3ADA5] text-base sm:text-lg max-w-2xl mt-5 leading-relaxed"
        >
          Modular LiFePO4 portable power stations and turnkey commercial solar microgrids. Silent,
          zero-emission energy engineered to replace noisy diesel generators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          <Link
            to="/power-stations/adb-ps1"
            data-cursor
            className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full transition shadow-[0_0_20px_rgba(163,255,55,0.3)] flex items-center gap-2 font-heading"
          >
            <span>Explore ADB PS1 Station</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/get-a-quote"
            data-cursor
            className="bg-[#101C17]/80 backdrop-blur text-white border border-white/15 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full transition hover:bg-[#132019]"
          >
            <span>Request System Quote</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
