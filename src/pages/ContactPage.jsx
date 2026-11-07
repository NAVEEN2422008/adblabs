import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Business / Commercial Energy',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A3FF35]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
            GET IN TOUCH // ENGINEERING & LAB DIRECT
          </span>
          <h1 className="text-5xl sm:text-7xl font-black font-heading text-white tracking-tight">
            Contact ADB LABS.
          </h1>
          <p className="text-[#A3ADA5] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Reach out directly to discuss commercial power installations, robotics R&D partnerships, or educational programs.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-heading text-white mb-2">
                Engineering Headquarters
              </h2>
              <p className="text-xs text-[#A3ADA5] leading-relaxed">
                Connect with our systems engineering team in Chennai for on-site audits and technical consultations.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              
              <div className="p-5 rounded-2xl bg-[#091310] border border-white/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#101C17] text-[#A3FF35] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#68776D] uppercase">LOCATION</div>
                  <div className="text-sm font-bold text-white mt-0.5">Besant Nagar, Chennai</div>
                  <div className="text-[11px] text-[#A3ADA5] mt-1 font-sans">
                    Tamil Nadu 600090, India
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#091310] border border-white/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#101C17] text-[#A3FF35] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#68776D] uppercase">DIRECT PHONE</div>
                  <a href="tel:+918310704488" className="text-sm font-bold text-[#A3FF35] hover:underline mt-0.5 block">
                    +91 8310704488
                  </a>
                  <div className="text-[11px] text-[#A3ADA5] mt-1 font-sans">
                    Mon–Sat, 9:00 AM – 7:00 PM IST
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#091310] border border-white/10 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#101C17] text-[#A3FF35] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#68776D] uppercase">ENGINEERING EMAIL</div>
                  <a href="mailto:engineering@adblabs.in" className="text-sm font-bold text-white hover:text-[#A3FF35] transition mt-0.5 block">
                    engineering@adblabs.in
                  </a>
                  <div className="text-[11px] text-[#A3ADA5] mt-1 font-sans">
                    Guaranteed response within 24 business hours
                  </div>
                </div>
              </div>

            </div>

            {/* Smart Enquiry Alternative */}
            <div className="p-6 rounded-2xl bg-[#101C17] border border-[#A3FF35]/30 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
                NEED A FORMAL QUOTE?
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                Interactive Engineering Sizing Wizard
              </h3>
              <p className="text-xs text-[#A3ADA5]">
                Calculate your exact continuous wattage draw, battery runtime hours, and required solar array size.
              </p>
              <Link
                to="/get-a-quote"
                className="inline-flex items-center gap-2 bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-5 py-2.5 rounded-full transition font-heading shadow"
              >
                <span>Launch Sizing Wizard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#091310] border border-white/10 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-1">
                      DIRECT MESSAGE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                      Send an Engineering Enquiry
                    </h2>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1.5">FULL NAME *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ananya Sundaram"
                        className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1.5">EMAIL ADDRESS *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1.5">PHONE NUMBER *</label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 9876543210"
                          className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1.5">ENQUIRY CATEGORY</label>
                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                      >
                        <option value="Business / Commercial Energy">Business / Commercial Energy (Off-Grid Stall, PS1)</option>
                        <option value="Residential Home Backup">Residential Home Backup (1.5 Ton AC, Whole Home)</option>
                        <option value="Custom Battery Engineering">Custom Battery Engineering (LiFePO₄ Packs, CAN BMS)</option>
                        <option value="Robotics R&D Partnership">Robotics R&D Partnership (AMR, ROS 2, Vision)</option>
                        <option value="Industrial Internship Cohort">Industrial Internship Cohort (6-Week Robotics)</option>
                        <option value="General Engineering Query">General Engineering Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1.5">PROJECT DETAILS / MESSAGE *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Please describe your specific application, appliance loads, or project timeline..."
                        className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs py-3.5 rounded-xl transition font-heading shadow flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message to Engineering</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 space-y-5">
                  <CheckCircle2 className="w-14 h-14 text-[#A3FF35] mx-auto" />
                  <h3 className="text-3xl font-bold font-heading text-white">Transmission Delivered</h3>
                  <p className="text-sm text-[#A3ADA5] max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name}. Your enquiry for <span className="text-[#A3FF35] font-mono">{form.type}</span> has been logged. An ADB Labs engineer will review your requirements and respond to <span className="text-white font-mono">{form.email}</span>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', type: 'Business / Commercial Energy', message: '' }); }}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
