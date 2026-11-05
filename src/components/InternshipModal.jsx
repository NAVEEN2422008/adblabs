import React, { useState } from 'react';
import { X, CheckCircle2, Bot, Calendar, Sparkles, Send, BellRing } from 'lucide-react';
import { INTERNSHIP_DETAILS } from '../data/websiteData';

export default function InternshipModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    major: 'CSE / AI-ML',
    year: '3rd Year',
    focusArea: 'ROS 2 & Autonomous Navigation (Nav2)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg p-6 sm:p-8 bg-[#0b101c] border border-green-500/30 rounded-3xl shadow-[0_0_50px_rgba(34,197,94,0.15)] overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900 border border-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Application Recorded</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-green-400">{formData.name}</strong>. Your priority waitlist application for the <strong className="text-white">Applied Robotics & Edge AI Internship</strong> cohort has been received.
            </p>
            <div className="p-3 rounded-xl bg-[#070b14] border border-[#1b2538] text-xs font-mono text-slate-400">
              Lab admissions coordinator will reach out via <span className="text-white">{formData.email}</span> within 48 hours.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold text-xs font-mono transition-colors"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-green-400 font-bold uppercase tracking-wider">
                <Bot className="w-4 h-4" />
                <span>SUMMER 2026 LAB COHORT</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Apply for Robotics Internship
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Join our 6-week intensive hardware cohort working directly with 6-axis arms, quadruped locomotion, and ROS 2 at our Chennai lab.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arun Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#070b14] border border-[#1b2538] focus:border-green-500 focus:outline-none text-xs text-white font-mono placeholder:text-slate-600 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#070b14] border border-[#1b2538] focus:border-green-500 focus:outline-none text-xs text-white font-mono placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#070b14] border border-[#1b2538] focus:border-green-500 focus:outline-none text-xs text-white font-mono placeholder:text-slate-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                    Institution / University *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="College Name"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#070b14] border border-[#1b2538] focus:border-green-500 focus:outline-none text-xs text-white font-mono placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                    Current Year
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#070b14] border border-[#1b2538] focus:border-green-500 focus:outline-none text-xs text-white font-mono transition-colors"
                  >
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year / Final">4th Year / Final</option>
                    <option value="Graduate / Post-Grad">Graduate / Post-Grad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                  Primary Research Track
                </label>
                <select
                  value={formData.focusArea}
                  onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#070b14] border border-[#1b2538] focus:border-green-500 focus:outline-none text-xs text-white font-mono transition-colors"
                >
                  <option value="ROS 2 & Autonomous Navigation (Nav2)">ROS 2 & Autonomous Navigation (Nav2)</option>
                  <option value="6-Axis Robotic Arm & Industrial Kinematics">6-Axis Robotic Arm & Industrial Kinematics</option>
                  <option value="Edge AI & TensorRT Computer Vision">Edge AI & TensorRT Computer Vision</option>
                  <option value="BMS & Power Electronics Design">BMS & Power Electronics Design</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-[1.01] transition-all"
                >
                  <span>Submit Internship Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
