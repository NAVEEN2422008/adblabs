import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Zap, 
  Bot, 
  Layers, 
  GraduationCap, 
  ArrowRight, 
  Play,
  Sun,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, VALUE_PILLARS } from '../data/websiteData';
import PS1HardwareGraphic from './PS1HardwareGraphic';

export default function Hero({ onExploreSolutions, onOpenCapabilities, onOpenPS1 }) {
  // 3D Mouse Parallax Physics (EcoFlow Titan Studio Experience)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const iconMap = {
    Zap: Zap,
    Bot: Bot,
    Layers: Layers,
    GraduationCap: GraduationCap
  };

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-[#060709]"
    >
      {/* Volumetric Studio Ambient Lighting (EcoFlow Titan Trademark) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] ambient-glow-green rounded-full blur-[170px] pointer-events-none"></div>
      <div className="absolute top-16 left-12 w-[300px] h-[300px] ambient-glow-blue rounded-full blur-[130px] pointer-events-none"></div>

      {/* Subtle Precision Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Eyebrow Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center mb-5"
        >
          <div className="px-4 py-1.5 rounded-full bg-[#0e111a] border border-[#1e2538] text-slate-300 text-xs font-mono tracking-[0.25em] uppercase flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
            <span>ENERGY &nbsp;|&nbsp; ROBOTICS &nbsp;|&nbsp; ENGINEERING &nbsp;|&nbsp; R&D</span>
          </div>
        </motion.div>

        {/* Display Headline (Exact 64px Grotesque Tight-Tracking) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.08]"
        >
          Engineering{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 drop-shadow-[0_0_35px_rgba(34,197,94,0.35)]">
            Real-World
          </span>{' '}
          Solutions
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          {COMPANY_INFO.subTagline}
        </motion.p>

        {/* Dual High-Contrast CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExploreSolutions}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold text-black bg-green-500 hover:bg-green-400 shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 group"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenCapabilities}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#0e121b] hover:bg-[#151c2c] border border-slate-700/80 hover:border-slate-500 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>Our Capabilities</span>
            <Play className="w-3.5 h-3.5 fill-white text-white" />
          </button>
        </motion.div>

        {/* Centerpiece 3D Interactive PS1 Hardware Stage with Floating Aerospace HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ perspective: 1200 }}
          className="mt-10 mb-12 relative max-w-3xl mx-auto cursor-pointer"
          onClick={onOpenPS1}
        >
          {/* Floating HUD Telemetry Badge 1: Top Left (Inverter) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="hidden md:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#090d18]/90 border border-green-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.25)] pointer-events-none"
          >
            <Zap className="w-3.5 h-3.5 text-green-400 animate-pulse" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-green-400 font-bold">3,000W PURE SINE</div>
              <div className="text-[8px] text-slate-400">&lt;3% THD Clean AC</div>
            </div>
          </motion.div>

          {/* Floating HUD Telemetry Badge 2: Top Right (Capacity) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="hidden md:flex absolute -top-4 -right-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#090d18]/90 border border-emerald-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.25)] pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            <div className="text-left font-mono">
              <div className="text-[10px] text-emerald-400 font-bold">12.288 kWh MODULAR</div>
              <div className="text-[8px] text-slate-400">High-Current DC Bus</div>
            </div>
          </motion.div>

          {/* Floating HUD Telemetry Badge 3: Bottom Left (MPPT) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hidden md:flex absolute -bottom-2 -left-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090d18]/90 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)] pointer-events-none"
          >
            <Sun className="w-3.5 h-3.5 text-cyan-400" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-cyan-400 font-bold">420W DUAL MPPT</div>
              <div className="text-[8px] text-slate-400">&gt;98.4% Efficiency</div>
            </div>
          </motion.div>

          {/* Floating HUD Telemetry Badge 4: Bottom Right (UPS) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="hidden md:flex absolute -bottom-2 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090d18]/90 border border-amber-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)] pointer-events-none"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-amber-400 font-bold">SUB-20MS UPS</div>
              <div className="text-[8px] text-slate-400">Zero Glitch Switchover</div>
            </div>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY }}
            className="relative transition-transform duration-100 ease-out max-w-2xl mx-auto"
          >
            {/* The Pixel-Perfect PS1 Hardware Digital Twin */}
            <PS1HardwareGraphic isExpanded={false} />

            {/* Click to Explore Hint Overlay */}
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-mono text-green-400 font-bold hover:underline">
              <span>EXPLORE MULTI-ANGLE HARDWARE & SUBSYSTEMS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </motion.div>

        {/* 4 Value Pillars Underneath Hero with EcoFlow Titan Glass Styling */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
        >
          {VALUE_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Zap;
            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -4, borderColor: 'rgba(34, 197, 94, 0.4)' }}
                className="p-5 rounded-2xl bg-[#0b0e16] border border-[#1b2234] transition-all flex items-start gap-4 group shadow-lg"
              >
                <div className="p-3 rounded-xl bg-[#121624] border border-[#222c42] text-green-400 group-hover:scale-110 transition-transform shrink-0">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
