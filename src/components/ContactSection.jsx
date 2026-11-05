import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function ContactSection({ presetCategory = "ps1-standard" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Chennai',
    category: presetCategory || 'ps1-standard',
    estimatedLoad: '300-600W (Freezer + Lights + POS)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#04060c] relative overflow-hidden border-t border-[#161c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-mono text-green-400 uppercase tracking-wider block mb-1">
            GET A CUSTOM SYSTEM QUOTE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Consult With Our <span className="text-green-400">Engineering Team</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Tell us about your business loads, roof space, or custom hardware requirements for a tailored feasibility assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Grounded Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090d18] border border-[#1e2638] space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono text-green-400 uppercase tracking-wider">OFFICIAL CONTACT</span>
                <h3 className="text-xl font-bold text-white mt-1">ADB Labs Facility</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Energy Systems & Autonomous Robotics Engineering
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Phone / WhatsApp:</strong>
                    <p className="text-slate-400 text-xs font-mono">{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Direct Email:</strong>
                    <p className="text-slate-400 text-xs font-mono">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Engineering Base:</strong>
                    <p className="text-slate-400 text-xs">{COMPANY_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                <span>Transparent engineering load audits & preliminary validation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#090d18] rounded-2xl border border-[#1e2638] p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto border border-green-500/50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your requirement has been routed directly to our engineering desk at <span className="text-green-400">{COMPANY_INFO.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Naveen S"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 83107 04481"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Deployment Location
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Interest / System
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none transition-colors"
                  >
                    <option value="ps1-standard">ADB Labs PS1 Power Station (6.144 kWh)</option>
                    <option value="besant-pilot">Besant Nagar Style Off-Grid System (12.288 kWh + Solar)</option>
                    <option value="custom-battery">Custom LiFePO4 Battery Pack Engineering</option>
                    <option value="robotics">Robotics & AI Prototyping Collaboration</option>
                    <option value="internship">Robotics & AI Industrial Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Project Details / Questions
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your power requirements, equipment specs, or internship queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Engineering Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
