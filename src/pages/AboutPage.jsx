import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Bot, 
  Battery, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamData';

export default function AboutPage() {
  const focusAreas = [
    'Robotics & Autonomous Locomotion',
    'AI & Edge Computer Vision',
    'Embedded Systems & CAN Firmware',
    'Hardware Development & Rapid Machining',
    'Clean Energy Storage & LiFePO₄ Chemistry',
    'Product Development & CAD Kinematics',
    'Field Systems Deployment & Stress Audits'
  ];

  const founders = TEAM_MEMBERS.filter(m => m.id === 'ADB-446-001' || m.id === 'ADB-446-002');
  const otherMembers = TEAM_MEMBERS.filter(m => m.id !== 'ADB-446-001' && m.id !== 'ADB-446-002');

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#A3FF35]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C17] border border-white/15 text-xs font-mono text-[#A3FF35] uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A3FF35]" />
            <span>ABOUT ADB LABS // ENGINEERING & R&D INITIATIVE</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black font-heading text-white tracking-tight leading-tight">
            Engineering Ideas <br />
            <span className="text-[#A3FF35]">Into Reality.</span>
          </h1>

          <p className="text-[#A3ADA5] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            ADB LABS is an engineering and R&D initiative focused on building practical energy, robotics, and intelligent engineering solutions — moving ideas from research and design to real-world deployment.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(163,255,55,0.25)] flex items-center gap-2 font-heading"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 font-semibold text-sm px-8 py-3.5 rounded-full transition"
            >
              <span>Contact Lab Facility</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy & Focus Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              OUR ENGINEERING ETHOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Physical Products, Practical Deployments.
            </h2>
            <p className="text-[#A3ADA5] text-sm leading-relaxed">
              We reject the trend of building superficial software that never touches physical reality. Our work centers on real electrical current, mechanical kinematic loads, embedded microcontrollers, lithium battery electrochemistry, and real-world outdoor operating environments.
            </p>
            <p className="text-[#A3ADA5] text-sm leading-relaxed">
              From our commercial off-grid solar installation at Besant Nagar to our ROS 2 autonomous robotics testbenches, every project is built to operate under real ambient temperatures, marine salt spray, and continuous commercial duty cycles.
            </p>

            <div className="p-6 rounded-2xl bg-[#091310] border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#A3FF35] font-bold">
                <MapPin className="w-4 h-4" />
                <span>R&D Base: Chennai & Bengaluru, India</span>
              </div>
              <p className="text-[#68776D] font-sans">
                Laboratory prototyping, firmware flashing benches, solar testing pads, and field robotics proving grounds.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
              DOMAINS OF WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Core Capabilities.
            </h2>

            <div className="grid grid-cols-1 gap-2.5">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#091310] border border-white/10 text-xs font-mono text-[#F5F7F2]">
                  <CheckCircle2 className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Leadership & Engineering Founders */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#091310]">
        <div className="max-w-7xl mx-auto text-left">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              FOUNDERS & TECHNICAL DIRECTORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Leadership & Engineering Team.
            </h2>
            <p className="text-[#A3ADA5] text-base mt-2">
              Click any dossier to view verifiable technical competencies, patents, and project contributions.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {founders.map((lead) => (
              <Link
                key={lead.id}
                to={`/about/${lead.id}`}
                className="p-8 rounded-3xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition group flex flex-col sm:flex-row items-center gap-6 shadow-2xl"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-black border border-white/10 flex-shrink-0">
                  <img src={lead.avatar} alt={lead.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="space-y-2 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3FF35] bg-[#A3FF35]/15 px-2.5 py-0.5 rounded-full border border-[#A3FF35]/30 font-bold">
                    {lead.id}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#A3FF35] transition">
                    {lead.name}
                  </h3>
                  <div className="text-xs font-mono text-[#A3ADA5]">
                    {lead.role}
                  </div>
                  <p className="text-xs text-[#68776D] line-clamp-2">
                    {lead.bio}
                  </p>
                  <div className="text-xs font-bold text-[#A3FF35] flex items-center gap-1.5 pt-1">
                    <span>View Engineering Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Other Engineering Members */}
          <h3 className="text-xl font-bold font-heading text-white mb-6">
            Engineering & Research Fellows
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherMembers.map((member) => (
              <Link
                key={member.id}
                to={`/about/${member.id}`}
                className="p-4 rounded-2xl bg-[#101C17] border border-white/10 hover:border-[#A3FF35]/40 transition text-left group"
              >
                <span className="text-[9px] font-mono text-[#A3FF35] block">{member.id}</span>
                <div className="text-sm font-bold font-heading text-white group-hover:text-[#A3FF35] transition mt-1">
                  {member.name}
                </div>
                <div className="text-[10px] font-mono text-[#68776D] mt-0.5">{member.role}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop & Laboratory Prototyping Facilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-left space-y-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block mb-2">
              FACILITY & TESTBENCHES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Laboratory & Prototyping Workshop.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#091310] p-2 flex flex-col justify-between">
              <img src="/images/about_detail_lab.png" alt="Lab Testbench" className="max-h-full max-w-full object-contain rounded-xl" />
              <div className="text-[11px] text-[#A3ADA5] pt-2 px-2">High-voltage battery cycling & CAN telemetry diagnostic bench</div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#091310] p-2 flex flex-col justify-between">
              <img src="/images/adb_lab_facility.jpg" alt="Robotics Testing Grounds" className="max-h-full max-w-full object-contain rounded-xl" />
              <div className="text-[11px] text-[#A3ADA5] pt-2 px-2">Indoor mobile robotics 3D LiDAR SLAM mapping arena</div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#091310] p-2 flex flex-col justify-between">
              <img src="/images/besant_detail_solar.png" alt="Solar Inverter Station" className="max-h-full max-w-full object-contain rounded-xl" />
              <div className="text-[11px] text-[#A3ADA5] pt-2 px-2">Coastal solar simulation and high-amperage MPPT test rack</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
