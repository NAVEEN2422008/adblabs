import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, ShieldCheck, ArrowRight, Fuel, Calendar, Award } from 'lucide-react';

export default function FinancialROI({ onOpenQuote }) {
  // Interactive Diesel Consumption Slider (Litres per day, ₹95/L average commercial diesel in Chennai)
  const [litersPerDay, setLitersPerDay] = useState(4);
  const DIESEL_PRICE_INR = 95;

  const dailyFuelCost = litersPerDay * DIESEL_PRICE_INR;
  const monthlySavings = dailyFuelCost * 30;
  const annualSavings = dailyFuelCost * 365;

  // Estimated payback in months based on ~₹2,20,000 system installation
  const estimatedPaybackMonths = Math.max(10, Math.round(220000 / monthlySavings));

  return (
    <section id="roi" className="py-24 bg-[#08090d] relative overflow-hidden border-t border-[#141824]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-green-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Direct EcoFlow Titan ROI Section) */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-green-400 text-xs font-mono uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>FINANCIAL RETURN & RECOVERY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Save More. <span className="text-green-400">Pay Back Faster.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Replacing a 3kW diesel generator running 6-8 hours daily eliminates direct fuel and maintenance expenses, recovering your system cost in under 24 months.
          </p>
        </div>

        {/* Interactive Diesel Expense Recalibration Slider */}
        <div className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl bg-[#0c111e] border border-green-500/30 shadow-xl space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-2 text-green-400 font-bold">
              <Fuel className="w-4 h-4" /> DAILY GENERATOR DIESEL CONSUMPTION:
            </span>
            <span className="text-white font-bold text-sm bg-black/60 px-3 py-1 rounded-lg border border-slate-800">
              {litersPerDay} Liters / Day (₹{dailyFuelCost.toLocaleString('en-IN')}/day)
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="12"
            step="0.5"
            value={litersPerDay}
            onChange={(e) => setLitersPerDay(Number(e.target.value))}
            className="w-full accent-green-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />

          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>1L (Small Prep Light)</span>
            <span>4L (Besant Nagar Fish Stall)</span>
            <span>8L (Food Truck / Heavy Cooking)</span>
            <span>12L (Commercial Micro-Grid)</span>
          </div>
        </div>

        {/* Animated ROI Odometer Stat Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[#0c121e] via-[#090e18] to-[#05070e] border border-green-500/40 p-8 sm:p-12 mb-12 shadow-[0_0_50px_rgba(34,197,94,0.15)] text-center relative overflow-hidden"
        >
          <span className="text-xs font-mono uppercase text-green-400 tracking-widest font-bold">
            ESTIMATED ANNUAL OPERATIONAL FUEL SAVINGS
          </span>

          <div className="text-5xl sm:text-7xl font-mono font-black text-white my-3 tracking-tight">
            ₹{annualSavings.toLocaleString('en-IN')}
            <span className="text-green-400 text-3xl sm:text-5xl font-semibold"> / Year</span>
            <span className="text-xs sm:text-sm text-slate-400 font-sans block mt-1 font-normal">
              ₹{monthlySavings.toLocaleString('en-IN')}/month in direct diesel fuel eliminated forever
            </span>
          </div>

          {/* Payback Visual Timeline */}
          <div className="max-w-xl mx-auto mt-8 pt-6 border-t border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400">
              <span>TRADITIONAL GENERATOR PAYBACK:</span>
              <span className="text-red-400 font-bold">NEVER (PERPETUAL FUEL DRAIN)</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2">
              <div className="bg-red-500/60 h-2 rounded-full w-full"></div>
            </div>

            <div className="flex items-center justify-between text-slate-400 pt-2">
              <span>ADB LABS PS1 SOLAR RECOVERY:</span>
              <span className="text-green-400 font-bold">
                {estimatedPaybackMonths} MONTHS ({(120 - estimatedPaybackMonths) / 12 > 0 ? `${((120 - estimatedPaybackMonths) / 12).toFixed(1)} YEARS 100% FREE POWER` : 'LIFETIME ASSET'})
              </span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2">
              <div 
                style={{ width: `${Math.min(100, Math.round((estimatedPaybackMonths / 36) * 100))}%` }}
                className="bg-green-500 h-2 rounded-full shadow-[0_0_10px_#22c55e] transition-all duration-300"
              ></div>
            </div>
          </div>
        </motion.div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#090d18] border border-[#1b2336] space-y-2">
            <div className="text-green-400 font-mono text-xs font-bold uppercase">01 / FUEL INDEPENDENCE</div>
            <h4 className="text-lg font-bold text-white">Zero Daily Fuel Runs</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Eliminate daily trips to the petrol pump with jerry cans. The solar panels silently recharge the battery array every single sunny morning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090d18] border border-[#1b2336] space-y-2">
            <div className="text-green-400 font-mono text-xs font-bold uppercase">02 / ZERO MAINTENANCE</div>
            <h4 className="text-lg font-bold text-white">Solid-State Reliability</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No engine oil changes, no spark plug fouling, no clogged carburetors, and no pull-cord mechanical fatigue. Pure solid-state electronics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090d18] border border-[#1b2336] space-y-2">
            <div className="text-green-400 font-mono text-xs font-bold uppercase">03 / FREEDOM TO RELOCATE</div>
            <h4 className="text-lg font-bold text-white">Portable Capital Asset</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unlike fixed rooftop grid setups that belong to the landlord's building, the PS1 sits on heavy-duty casters and moves with your business.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
