import React, { useState } from 'react';
import { X, CheckCircle2, Bot, Calendar, Sparkles, Send, BellRing } from 'lucide-react';
import { INTERNSHIP_DETAILS } from '../data/websiteData';

export default function InternshipModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#070b18] border border-green-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(34,197,94,0.2)] text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto border border-green-500/50">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Priority Waitlist Confirmed!</h3>
            <p className="text-sm text-slate-300">
              Thank you, <strong className="text-white">{formData.name}</strong>. You're on the priority notification list for Batch 1 of the <strong className="text-green-400">Robotics & AI Industrial Internship</strong>.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
              We'll notify you via <span className="text-white">{formData.email}</span> as soon as application dates & session slots are announced.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-xs uppercase"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-green-950 text-green-300 border border-green-800">
                PROPOSED PROGRAM • BATCH 1 WAITLIST
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              Robotics & AI Industrial Internship
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Pre-register to receive the full syllabus PDF and early access notification when applications open.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyadarshini M"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 83107 04481"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    College / University
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anna University / IIT Madras"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 mb-1">
                    Discipline / Branch
                  </label>
                  <select
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none"
                  >
                    <option value="CSE / AI-ML">Computer Science / AI-ML</option>
                    <option value="Robotics / Mechatronics">Robotics / Mechatronics</option>
                    <option value="ECE / EEE">ECE / Electrical & Electronics</option>
                    <option value="Mechanical">Mechanical Engineering</option>
                    <option value="Other">Other Discipline</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-300 mb-1">
                  Primary Learning Interest
                </label>
                <select
                  value={formData.focusArea}
                  onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-green-400 focus:outline-none"
                >
                  <option value="ROS 2 & Nav2">ROS 2 Navigation & Autonomous Mobile Robots (Nav2)</option>
                  <option value="Computer Vision">Edge Computer Vision (YOLOv8 + OpenCV on Jetson)</option>
                  <option value="Gazebo Simulation">Robot Modeling, URDF, and Gazebo Physics Simulation</option>
                  <option value="Embedded Control">STM32 Firmware, CAN-Bus & Motor Controllers</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2 transition-all"
                >
                  <BellRing className="w-4 h-4" />
                  <span>Join Early Access Waitlist</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
