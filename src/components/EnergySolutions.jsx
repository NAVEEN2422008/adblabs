import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Sun, Shield, Bot, Battery, Sparkles, Check } from 'lucide-react';
import { SOLUTIONS_LIST } from '../data/websiteData';

export default function EnergySolutions({ isSubView = false, onSelectSolution, onOpenQuote }) {
  const imageMap = {
    ps1: '/images/ps1_hero.jpg',
    home: '/images/home_backup.jpg',
    solar: '/images/commercial_solar.jpg',
    robotics: '/images/sol_robot.png'
  };

  return (
    <section id="solutions" className="py-24 bg-[#06080f] relative overflow-hidden border-t border-[#161c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          {isSubView && (
            <div className="text-xs font-mono text-green-400 mb-2 uppercase tracking-wider">
              ADB LABS // ENERGY SOLUTIONS
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our <span className="text-green-400">Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            End-to-end energy and engineering solutions for homes, businesses and new-age applications.
          </p>
        </div>

        {/* 4 Cards Grid with Real Full-Bleed Photography matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS_LIST.map((sol, idx) => {
            const imgSrc = imageMap[sol.imageType] || '/images/ps1_hero.jpg';

            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(34, 197, 94, 0.5)' }}
                className="rounded-2xl bg-[#090d18] border border-[#1c2438] transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
              >
                <div>
                  {/* Real Photographic Image Container */}
                  <div className="relative h-48 w-full bg-[#03050a] overflow-hidden border-b border-[#1c2438]">
                    <img
                      src={imgSrc}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />

                    {/* Gradient Scrim for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-black/40"></div>

                    {/* Top Tag Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/80 text-green-400 border border-green-500/40 backdrop-blur-md">
                      {sol.tag}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white group-hover:text-green-400 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </div>

                {/* Explore -> Button */}
                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => onSelectSolution(sol.id)}
                    className="w-full py-2.5 px-3 rounded-xl bg-transparent hover:bg-green-500/10 border border-slate-800 hover:border-green-500/50 text-xs font-semibold text-slate-300 hover:text-green-400 flex items-center justify-between transition-all"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
