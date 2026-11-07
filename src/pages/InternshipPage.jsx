import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  ChevronDown,
  Layers,
  Sparkles
} from 'lucide-react';
import InternshipRoadmapInteractive from '../components/InternshipRoadmapInteractive';

export default function InternshipPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyForm, setApplyForm] = useState({ name: '', email: '', phone: '', college: '', branch: '', motivation: '' });
  const [applySubmitted, setApplySubmitted] = useState(false);

  const highlights = [
    { label: 'Program Duration', val: '6 Weeks', icon: Calendar },
    { label: 'Live Masterclasses', val: '18 Live Sessions', icon: Clock },
    { label: 'Capstone Deliverable', val: 'Simulated Autonomous AMR', icon: Terminal },
    { label: 'Eligibility', val: 'Engineering Students & Graduates', icon: GraduationCap }
  ];

  const outcomes = [
    'Proficiency in ROS 2 Jazzy / Humble node architectures, topics, services, and action servers',
    'Creation of full kinematic 3D URDF robot models with visual and physical collision limits',
    'Implementation of 2D/3D Cartographer SLAM, costmaps, and Nav2 autonomous waypoint tracking',
    'Edge computer vision with OpenCV, camera calibration, and YOLOv8 real-time object detection',
    'Kinematic forward and inverse motion control simulation inside Gazebo and Isaac Sim'
  ];

  const faqs = [
    {
      q: 'Do I need physical robot hardware to participate in this internship?',
      a: 'No. The curriculum is intentionally designed simulation-first using ROS 2, Gazebo, and Isaac Sim on standard developer laptops (Ubuntu 22.04 or 24.04 via dual boot or WSL2). You will build genuine, deployable robotics code without requiring expensive physical components.'
    },
    {
      q: 'Who is eligible to apply for this 6-week cohort?',
      a: 'Pre-final, final-year engineering students, and recent graduates in Mechanical, Mechatronics, Electrical, Electronics, Computer Science, and Robotics. Foundational familiarity with Python or C++ and Linux command line is recommended.'
    },
    {
      q: 'What is the capstone project at the end of Week 6?',
      a: 'Every student builds an end-to-end Autonomous Warehouse Transport Robot in simulation. Your robot must autonomously map an unknown warehouse, localize itself using 3D LiDAR SLAM, avoid dynamic pedestrian obstacles, and navigate to target pallet coordinates.'
    },
    {
      q: 'Is this an accredited university course or job guarantee?',
      a: 'This is an intensive, project-based industrial mentorship and training program provided by ADB Labs engineers. It provides genuine real-world project portfolios, code repositories, and verifiable experience certificates. We do not make misleading claims of university accreditation or guaranteed job placements.'
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplySubmitted(true);
  };

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#A3FF35]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C17] border border-white/15 text-xs font-mono text-[#A3FF35] uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-[#A3FF35]" />
            <span>TALENT INCUBATOR // INDUSTRIAL INTERNSHIP</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black font-heading text-white tracking-tight leading-tight">
            Learn by Building. <br />
            <span className="text-[#A3FF35]">Grow by Engineering.</span>
          </h1>

          <p className="text-[#A3ADA5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A 6-week, project-based industrial internship with live engineering mentorship and a simulated autonomous mobile robot capstone.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto text-left font-mono">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="p-4 rounded-2xl bg-[#091310] border border-white/10 flex items-start gap-3">
                  <Icon className="w-4 h-4 text-[#A3FF35] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-[#68776D]">{h.label}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{h.val}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.25)] flex items-center gap-2 font-heading"
            >
              <span>Apply for Next Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#roadmap"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition"
            >
              <span>View 6-Week Curriculum</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive 6-Week Roadmap */}
      <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              STEP-BY-STEP MASTERY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              The 6-Week Learning Journey.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-3">
              Explore the weekly curriculum modules, live sessions, competencies, and deliverables.
            </p>
          </div>

          <InternshipRoadmapInteractive onApplyClick={() => setIsApplyModalOpen(true)} />
        </div>
      </section>

      {/* Learning Outcomes & Who Can Apply */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              PORTFOLIO OUTCOMES
            </span>
            <h2 className="text-3xl font-bold font-heading text-white">
              What You Will Build & Own
            </h2>
            <p className="text-sm text-[#A3ADA5] leading-relaxed">
              Upon graduation, you will leave with working repositories, a full Gazebo/ROS 2 warehouse simulation project, and demonstrable competencies that differentiate you in robotics engineering interviews.
            </p>

            <ul className="space-y-3 pt-2">
              {outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#091310] border border-white/10 text-xs text-[#A3ADA5]">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0 mt-0.5" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              PROGRAM STRUCTURE
            </span>
            <h2 className="text-3xl font-bold font-heading text-white">
              Who Should Apply?
            </h2>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-5 rounded-2xl bg-[#101C17] border border-white/10 space-y-2">
                <div className="text-[#A3FF35] font-bold font-sans text-sm">Target Engineering Branches</div>
                <p className="text-[#A3ADA5] font-sans">
                  Mechatronics, Mechanical, Robotics, Computer Science, Electrical, and Electronics engineering students or recent graduates seeking practical field engineering depth.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#101C17] border border-white/10 space-y-2">
                <div className="text-[#A3FF35] font-bold font-sans text-sm">Prerequisites & Tools</div>
                <p className="text-[#A3ADA5] font-sans">
                  A modern laptop capable of running Ubuntu Linux (native or WSL2), basic terminal familiarity, and baseline introductory knowledge of Python.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#101C17] border border-white/10 space-y-2">
                <div className="text-[#A3FF35] font-bold font-sans text-sm">Mentorship Cadence</div>
                <p className="text-[#A3ADA5] font-sans">
                  3 live evening interactive sessions per week with active code debugging, weekly milestone reviews, and direct Discord engineer support.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-7 py-3 rounded-full transition font-heading shadow"
              >
                <span>Apply for Next Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Internship FAQs.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#101C17] border border-white/10 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-white hover:text-[#A3FF35] transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#A3FF35] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#A3ADA5] leading-relaxed border-t border-white/[0.06] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-[#101C17] border border-white/20 rounded-3xl p-6 sm:p-10 max-w-lg w-full text-left relative shadow-2xl">
            <button
              onClick={() => { setIsApplyModalOpen(false); setApplySubmitted(false); }}
              className="absolute top-5 right-5 text-[#A3ADA5] hover:text-white text-xl"
            >
              ✕
            </button>

            {!applySubmitted ? (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <span className="text-[10px] font-mono text-[#A3FF35] uppercase font-bold">
                  APPLICATION FORM // COHORT 2026
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Robotics & AI Internship
                </h3>
                <p className="text-xs text-[#A3ADA5]">
                  Fill out your details. Our admissions team will review your background and send enrollment scheduling.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">FULL NAME *</label>
                    <input
                      required
                      type="text"
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">EMAIL ADDRESS *</label>
                      <input
                        required
                        type="email"
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                        placeholder="you@college.edu"
                        className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">PHONE NUMBER *</label>
                      <input
                        required
                        type="tel"
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">COLLEGE / INSTITUTION</label>
                    <input
                      type="text"
                      value={applyForm.college}
                      onChange={(e) => setApplyForm({ ...applyForm, college: e.target.value })}
                      placeholder="e.g. Anna University / IIT Madras"
                      className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">BRANCH & YEAR</label>
                    <input
                      type="text"
                      value={applyForm.branch}
                      onChange={(e) => setApplyForm({ ...applyForm, branch: e.target.value })}
                      placeholder="e.g. Mechatronics, 3rd Year"
                      className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs py-3 rounded-xl transition font-heading shadow"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#A3FF35] mx-auto" />
                <h3 className="text-2xl font-bold font-heading text-white">Application Received</h3>
                <p className="text-xs text-[#A3ADA5] max-w-sm mx-auto">
                  Thank you {applyForm.name}! An ADB Labs mentor will review your details and email cohort onboarding guidelines to {applyForm.email}.
                </p>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-6 py-2 rounded-full transition"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
