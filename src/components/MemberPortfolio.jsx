import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight,
  Download,
  Mail, 
  Phone,
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  Cpu, 
  Award, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Zap,
  BadgeCheck,
  Layers,
  Terminal,
  Wrench,
  BarChart3,
  Bot,
  Copy,
  Check,
  QrCode,
  FileText,
  Sparkles,
  Search,
  Lightbulb,
  Compass,
  Code2,
  Rocket,
  Palette,
  Activity,
  Maximize2,
  X
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/teamData';

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// Capability Icon Helper
function getCapabilityIcon(iconName) {
  switch (iconName) {
    case 'Cpu': return <Cpu className="w-5 h-5 text-[#00FF66]" />;
    case 'Bot': return <Bot className="w-5 h-5 text-[#00FF66]" />;
    case 'Zap': return <Zap className="w-5 h-5 text-[#00FF66]" />;
    case 'Layers': return <Layers className="w-5 h-5 text-[#00FF66]" />;
    case 'Wrench': return <Wrench className="w-5 h-5 text-[#00FF66]" />;
    case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#00FF66]" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#00FF66]" />;
    case 'Terminal': return <Terminal className="w-5 h-5 text-[#00FF66]" />;
    case 'Award': return <Award className="w-5 h-5 text-[#00FF66]" />;
    default: return <Cpu className="w-5 h-5 text-[#00FF66]" />;
  }
}

// Visual Mockup Preview for Selected Projects
function ProjectMockupPreview({ index, tag, title }) {
  // Variations based on index for ultra-clean tech visuals
  if (index === 0) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#0F141C] via-[#0A0D12] to-[#06080B] p-4 flex flex-col justify-between relative overflow-hidden border border-white/5 rounded-t-2xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-[#00FF66]/80" />
          </div>
          <span className="text-[10px] font-mono text-[#00FF66] tracking-wider">LIVE TELEMETRY</span>
        </div>
        
        {/* Mockup Chart Graphic */}
        <div className="my-2 relative flex items-center justify-center">
          <svg className="w-full h-20 text-[#00FF66]/80" viewBox="0 0 200 60" fill="none">
            <path 
              d="M 0 45 Q 30 10, 60 30 T 120 20 T 160 38 T 200 15" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
            <path 
              d="M 0 45 Q 30 10, 60 30 T 120 20 T 160 38 T 200 15 L 200 60 L 0 60 Z" 
              fill="url(#chartGrad)" 
              opacity="0.25" 
            />
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00FF66" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00FF66" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-2 right-4 bg-[#111622]/90 border border-white/10 px-2 py-1 rounded text-[11px] font-mono text-white">
            6.144 kWh
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span>BMS STATUS: NOMINAL</span>
          <span className="text-[#00FF66]">99.8% EFF</span>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#12161F] via-[#0C0F16] to-[#080A0E] p-4 flex flex-col justify-between relative overflow-hidden border border-white/5 rounded-t-2xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">KINEMATICS ENGINE</span>
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
        </div>

        {/* 3D Wireframe / Node Diagram representation */}
        <div className="my-3 flex items-center justify-center relative">
          <div className="w-24 h-24 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
            <div className="w-16 h-16 rounded-full border border-[#00FF66]/40 flex items-center justify-center">
              <Bot className="w-7 h-7 text-[#00FF66]" />
            </div>
          </div>
          <div className="absolute inset-0 bg-radial from-[#00FF66]/10 to-transparent pointer-events-none" />
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span>12-DOF ACTUATION</span>
          <span className="text-zinc-300">ROS2 HUMBLE</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#131822] via-[#0E121A] to-[#07090D] p-4 flex flex-col justify-between relative overflow-hidden border border-white/5 rounded-t-2xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">ARCHITECTURE STACK</span>
        <span className="text-[10px] font-mono text-[#00FF66] bg-[#00FF66]/10 px-1.5 py-0.5 rounded">V2.4</span>
      </div>

      {/* Code / Block schematic preview */}
      <div className="my-2 space-y-1.5 font-mono text-[10px] text-zinc-400 bg-[#07090E] p-2.5 rounded-lg border border-white/5">
        <div className="text-zinc-500">// Solar Inverter MPPT Protocol</div>
        <div className="text-[#00FF66]">const powerBus = initCANbus(500k);</div>
        <div className="text-zinc-300">voltage: 51.2V | current: 120A</div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
        <span>CLEAN POWER STACK</span>
        <span className="text-white">FIELD-READY</span>
      </div>
    </div>
  );
}

export default function MemberPortfolio({ employeeCode, member: propMember, onBack, onSelectMember }) {
  const [copied, setCopied] = useState(false);
  const [showBarcodeModal, setShowBarcodeModal] = useState(false);
  const [activeTheme, setActiveTheme] = useState('emerald'); // 'emerald' | 'charcoal' | 'crimson'

  // Find member index
  const currentIndex = TEAM_MEMBERS.findIndex(
    (m) => m.id.toLowerCase() === (employeeCode || '').toLowerCase()
  );

  const member = propMember || (currentIndex !== -1 ? TEAM_MEMBERS[currentIndex] : null);

  const prevMember = currentIndex > 0 
    ? TEAM_MEMBERS[currentIndex - 1] 
    : TEAM_MEMBERS[TEAM_MEMBERS.length - 1];

  const nextMember = currentIndex < TEAM_MEMBERS.length - 1 
    ? TEAM_MEMBERS[currentIndex + 1] 
    : TEAM_MEMBERS[0];

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!member) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 bg-[#080A0E]">
        <div className="max-w-md w-full bg-[#0D1016] border border-red-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono text-red-400 uppercase tracking-widest block mb-1">
            404 // Identity Record Not Found
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Employee ID Invalid</h2>
          <p className="text-sm text-zinc-400 mb-6">
            No active portfolio found matching identifier <code className="text-[#00FF66] bg-[#050B0A] px-2 py-0.5 rounded font-mono">{employeeCode}</code>.
          </p>
          <button
            onClick={onBack}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#00FF66] hover:bg-[#00E55C] text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Team Portfolios</span>
          </button>
        </div>
      </div>
    );
  }

  // Derive display watermark word for the gigantic background depth typography
  // In the reference posters: "PORTFOLIO" or "DIGITAL DESIGNER"
  const displayWatermark = "PORTFOLIO";

  return (
    <div className="min-h-screen bg-[#07090C] text-[#E4E7EB] pt-20 pb-28 relative overflow-hidden selection:bg-[#00FF66] selection:text-black">
      
      {/* ======================================================== */}
      {/* ATMOSPHERIC BACKGROUND LIGHTING & VIGNETTE               */}
      {/* ======================================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090C11] via-[#07090C] to-[#050709] pointer-events-none" />

      {/* Dynamic Halo Disc Behind Hero Area */}
      <div 
        className={`absolute top-[160px] left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] lg:w-[680px] h-[340px] sm:h-[500px] lg:h-[680px] rounded-full blur-[130px] sm:blur-[160px] pointer-events-none transition-colors duration-700 ${
          activeTheme === 'crimson' 
            ? 'bg-rose-600/20' 
            : activeTheme === 'charcoal' 
            ? 'bg-white/10' 
            : 'bg-[#00FF66]/15'
        }`}
      />

      {/* Secondary ambient fill */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-emerald-700/8 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-teal-600/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* TOP EDITORIAL CONTROL BAR                                */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400">
            <button 
              onClick={() => window.location.href = '/'}
              className="hover:text-white transition-colors"
            >
              ADB Labs
            </button>
            <span className="text-zinc-600">/</span>
            <button 
              onClick={onBack}
              className="hover:text-[#00FF66] transition-colors"
            >
              Team Directory
            </button>
            <span className="text-zinc-600">/</span>
            <span className="text-[#00FF66] font-semibold bg-[#0D1017] px-2.5 py-1 rounded-md border border-white/10">
              {member.id}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Color Atmosphere Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-[#0D1017] p-1 rounded-lg border border-white/10 mr-2 text-xs font-mono">
              <button
                onClick={() => setActiveTheme('emerald')}
                className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                  activeTheme === 'emerald' ? 'bg-[#00FF66] text-black font-bold' : 'text-zinc-400 hover:text-white'
                }`}
                title="ADB Cyber Emerald Atmosphere"
              >
                Emerald
              </button>
              <button
                onClick={() => setActiveTheme('crimson')}
                className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                  activeTheme === 'crimson' ? 'bg-rose-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
                title="Studio Crimson Atmosphere (Reference Style)"
              >
                Crimson
              </button>
              <button
                onClick={() => setActiveTheme('charcoal')}
                className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                  activeTheme === 'charcoal' ? 'bg-zinc-200 text-black font-bold' : 'text-zinc-400 hover:text-white'
                }`}
                title="Studio Monochrome Slate"
              >
                Charcoal
              </button>
            </div>

            <button
              onClick={() => onSelectMember && onSelectMember(prevMember.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1017] hover:bg-[#151A24] text-zinc-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
              title={`Previous: ${prevMember.name}`}
            >
              <ChevronLeft className="w-3.5 h-3.5 text-[#00FF66]" />
              <span className="hidden md:inline">{prevMember.name.split(' ')[0]}</span>
            </button>

            <button
              onClick={() => onSelectMember && onSelectMember(nextMember.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1017] hover:bg-[#151A24] text-zinc-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
              title={`Next: ${nextMember.name}`}
            >
              <span className="hidden md:inline">{nextMember.name.split(' ')[0]}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#00FF66]" />
            </button>

            <button
              onClick={() => setShowBarcodeModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1017] hover:bg-[#151A24] text-[#00FF66] border border-white/10 text-xs font-medium transition-all"
              title="View Scannable ID Badge"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>ID Badge</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1017] hover:bg-[#151A24] text-zinc-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00FF66]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MONUMENTAL HERO: EDITORIAL MAGAZINE POSTER WITH DEPTH    */}
        {/* Cutout is embedded IN FRONT OF giant background text     */}
        {/* ======================================================== */}
        <div className="relative pt-6 pb-12 sm:pb-20 overflow-hidden rounded-3xl bg-gradient-to-b from-[#0C0E14] via-[#090C11] to-[#07090C] border border-white/[0.07] shadow-2xl">
          
          {/* Subtle Orbital Ring & Star Accent (Matching AV Poster Reference) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] lg:w-[680px] h-[340px] sm:h-[540px] lg:h-[680px] rounded-full border border-white/[0.05] pointer-events-none z-0" />
          <div className="absolute top-[28%] right-[22%] text-white/20 text-xs font-mono pointer-events-none z-0">
            ✦
          </div>
          <div className="absolute top-[68%] left-[18%] text-[#00FF66]/20 text-xs font-mono pointer-events-none z-0">
            ✦
          </div>

          {/* Graphic Glowing Circle Behind Subject Head (Rayhan Aditya / Arjun Reference) */}
          <div 
            className={`absolute top-[18%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[420px] lg:w-[500px] h-[280px] sm:h-[420px] lg:h-[500px] rounded-full pointer-events-none transition-all duration-700 z-[1] ${
              activeTheme === 'crimson'
                ? 'bg-gradient-to-tr from-[#8E1616] via-[#A81B1B]/70 to-[#500A0A]/40 shadow-[0_0_90px_rgba(229,9,20,0.35)]'
                : activeTheme === 'charcoal'
                ? 'bg-gradient-to-tr from-zinc-700/40 via-zinc-600/30 to-zinc-900/60 shadow-[0_0_80px_rgba(255,255,255,0.08)]'
                : 'bg-gradient-to-tr from-[#00FF66]/25 via-emerald-600/20 to-teal-900/30 shadow-[0_0_90px_rgba(0,255,102,0.2)]'
            }`}
          />

          {/* LAYER 1: Giant Condensed Typography in the Background */}
          {/* Sits BEHIND the cutout */}
          <div className="absolute top-10 sm:top-14 lg:top-16 left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-10 overflow-hidden">
            <h1 
              className={`font-display-condensed text-[22vw] sm:text-[20vw] lg:text-[15.5rem] font-black uppercase tracking-normal leading-none whitespace-nowrap transition-colors duration-500 ${
                activeTheme === 'crimson'
                  ? 'text-rose-600/[0.22]'
                  : activeTheme === 'charcoal'
                  ? 'text-white/[0.16]'
                  : 'text-[#00FF66]/[0.18]'
              }`}
            >
              {displayWatermark}
            </h1>
          </div>

          {/* Top Eyebrow Tag */}
          <div className="relative z-20 text-center mb-4 sm:mb-6 px-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11151F]/80 border border-white/10 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
              <span className="text-zinc-300">ADB LABS R&D</span>
              <span className="text-zinc-500">•</span>
              <span className="text-[#00FF66] font-semibold">{member.department}</span>
            </div>
          </div>

          {/* MAIN HERO GRID: LEFT INFO + CENTER CUTOUT (IN FRONT) + RIGHT META */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end px-6 sm:px-10 lg:px-14 relative z-20">
            
            {/* Left Column: Script Accent, Bold Name, Role, Statement, Dual Action Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-end pb-4 sm:pb-8 text-center lg:text-left order-2 lg:order-1">
              
              {/* Handwritten Script Accent (Exactly like Rayhan Aditya Reference) */}
              <span className="font-script text-3xl sm:text-4xl text-[#00FF66] -rotate-6 mb-1 block select-none">
                Hello, I'm
              </span>

              {/* Huge Monumental Condensed Name */}
              <h2 className="font-display-condensed text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-wide leading-[0.9] mb-3">
                {member.name}
              </h2>

              {/* Subtitle / Role Badge */}
              <div className="inline-block text-xs sm:text-sm font-mono tracking-widest text-zinc-300 uppercase mb-5 font-semibold">
                <span className="text-[#00FF66]">{member.role}</span>
                {member.headline && member.headline.includes('&') && (
                  <span className="block text-zinc-400 font-normal mt-0.5 text-xs">
                    {member.headline}
                  </span>
                )}
              </div>

              {/* Bio summary paragraph */}
              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
                {member.bio}
              </p>

              {/* Quote pill */}
              {member.quote && (
                <div className="border-l-2 border-[#00FF66] pl-3.5 py-1 mb-8 bg-white/[0.02] rounded-r-lg max-w-md mx-auto lg:mx-0 text-left">
                  <p className="text-xs sm:text-sm italic text-zinc-300 font-mono">
                    "{member.quote}"
                  </p>
                </div>
              )}

              {/* Action Buttons: Solid High-Contrast Pill + Glass Pill (Matching Reference) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="#featured-work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] cursor-pointer"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                {member.resumeUrl && (
                  <a
                    href={member.resumeUrl}
                    download={`${member.name.replace(/\s+/g, '_')}_Resume.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#121622] hover:bg-[#1A2030] text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    <Download className="w-4 h-4 text-[#00FF66]" />
                    <span>DOWNLOAD RESUME</span>
                  </a>
                )}
              </div>

            </div>

            {/* Center/Foreground: THE CUTOUT IMAGE EMBEDDED IN FRONT OF TEXT */}
            {/* z-30 layering ensures the subject's head and body clearly occlude the background watermark */}
            <div className="lg:col-span-4 relative flex justify-center items-end order-1 lg:order-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[620px]">
              
              <div className="relative w-full max-w-[460px] flex items-end justify-center">
                {member.image ? (
                  <div className="relative z-30 flex items-end justify-center w-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="max-h-[460px] sm:max-h-[580px] lg:max-h-[680px] w-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] select-none pointer-events-none transform transition-transform duration-500 hover:scale-[1.03] -mt-10 sm:-mt-16 lg:-mt-24"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    
                    {/* Seamless bottom fade so cutout flows naturally into card floor */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090C11] via-[#090C11]/80 to-transparent pointer-events-none z-35" />
                  </div>
                ) : (
                  <div className="w-64 h-80 rounded-2xl bg-gradient-to-br from-[#121622] to-[#0A0D14] border border-white/10 flex flex-col items-center justify-center text-center p-6 z-30">
                    <div className="w-20 h-20 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center text-3xl font-extrabold text-[#00FF66] mb-3">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-base font-bold text-white">{member.name}</span>
                    <span className="text-xs text-[#00FF66] font-mono mt-1">{member.role}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Availability Badge & Quick Specs (Matching AV & Rayhan Posters) */}
            <div className="lg:col-span-3 flex flex-col justify-end pb-4 sm:pb-8 text-center lg:text-right order-3">
              
              {/* Engagement Status Pill */}
              <div className="p-4 rounded-2xl bg-[#11151F]/90 border border-white/10 backdrop-blur-md mb-6 text-left">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    ENGAGEMENT STATUS
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
                </div>
                <div className="text-xs font-semibold text-white">
                  {member.availability || 'Available for Hardware R&D Projects'}
                </div>
                <span className="text-[11px] font-mono text-[#00FF66] mt-2 inline-flex items-center gap-1">
                  <span>ACTIVE R&D</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>

              {/* Quick Contact & Verified ID */}
              <div className="space-y-2 text-xs font-mono text-zinc-400 text-left sm:text-right">
                <div className="flex items-center lg:justify-end gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00FF66]" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center lg:justify-end gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00FF66]" />
                  <span>VERIFIED ID: {member.id}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* STATS BANNER: 4 COLUMNS PILL CONTAINER (AV Poster Style) */}
        {/* ======================================================== */}
        <div className="my-16 rounded-2xl sm:rounded-3xl bg-[#0D1017]/90 border border-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {(member.stats || [
              { label: 'PROJECTS COMPLETED', value: '18+' },
              { label: 'YEARS IN HARDWARE', value: '3+' },
              { label: 'ACTIVE PROTOTYPES', value: '4' },
              { label: 'SYSTEM RELIABILITY', value: '99.9%' }
            ]).map((st, idx) => (
              <div 
                key={idx}
                className={`p-4 sm:p-6 text-center ${idx > 0 && idx % 2 === 0 ? 'border-t sm:border-t-0' : ''}`}
              >
                <div className="inline-flex items-center justify-center gap-2 mb-2">
                  <span className="text-[#00FF66] text-sm">✦</span>
                  <div className="font-display-condensed text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {st.value}
                  </div>
                </div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SELECTED PROJECTS: 3 HORIZONTAL CARDS WITH MOCKUP FRAMES */}
        {/* Matches AV Digital Designer & Rayhan Selected Projects    */}
        {/* ======================================================== */}
        <div id="featured-work" className="mb-24 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>PORTFOLIO SHOWCASE</span>
              </div>
              <h2 className="font-display-condensed text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white">
                SELECTED PROJECTS
              </h2>
            </div>
            <a 
              href="#contact-section"
              className="text-xs font-mono text-zinc-400 hover:text-[#00FF66] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>EXPLORE ALL INITIATIVES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(member.featuredProjects || []).map((proj, pIdx) => (
              <div 
                key={pIdx}
                className="rounded-2xl bg-[#0D1017] border border-white/10 hover:border-[#00FF66]/50 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-lg hover:-translate-y-1.5"
              >
                <div>
                  {/* Visual Mockup Header Container */}
                  <div className="h-44 w-full relative overflow-hidden bg-[#090C11]">
                    <ProjectMockupPreview 
                      index={pIdx} 
                      tag={proj.tag} 
                      title={proj.title} 
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#00FF66] bg-[#00FF66]/10 px-2.5 py-1 rounded-md border border-[#00FF66]/20 font-semibold">
                        0{pIdx + 1} // {proj.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF66] transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tech tags + Circular Arrow Button */}
                <div className="p-6 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {(proj.tech || []).slice(0, 3).map((t, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] font-mono text-zinc-400 bg-[#121622] px-2 py-0.5 rounded border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#121622] border border-white/10 group-hover:border-[#00FF66] group-hover:bg-[#00FF66] flex items-center justify-center text-zinc-300 group-hover:text-black transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* TWO-COLUMN GRID: CORE CAPABILITIES (LEFT) vs             */}
        {/* TOOLS & TECHNOLOGIES + CERTIFICATIONS (RIGHT)            */}
        {/* Exact Layout Structure from the AV Digital Designer poster*/}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24">
          
          {/* Left Column: CORE CAPABILITIES (6 Grid Items) */}
          <div className="lg:col-span-7">
            <div className="mb-8 pb-3 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>EXPERTISE & SPECIALIZATION</span>
              </div>
              <h2 className="font-display-condensed text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">
                CORE CAPABILITIES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(member.capabilities || []).map((cap, cIdx) => (
                <div 
                  key={cIdx}
                  className="p-5 rounded-2xl bg-[#0D1017] border border-white/10 hover:border-[#00FF66]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#121622] border border-white/10 group-hover:border-[#00FF66]/50 flex items-center justify-center mb-3 transition-colors">
                    {getCapabilityIcon(cap.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#00FF66] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: TOOLS & TECH + CERTIFICATIONS */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            {/* 1. Tools & Technologies Grid */}
            <div className="mb-8">
              <div className="mb-6 pb-3 border-b border-white/10">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>TOOLCHAIN</span>
                </div>
                <h3 className="font-display-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                  TOOLS & TECHNOLOGIES
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D1017] border border-white/10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(
                    (member.techStack && Object.values(member.techStack).flat()) ||
                    member.skills ||
                    ['SolidWorks', 'ROS2', 'Altium', 'Python', 'C++', 'Docker', 'Linux', 'Git']
                  ).slice(0, 9).map((tool, tIdx) => (
                    <div 
                      key={tIdx}
                      className="p-3 rounded-xl bg-[#121622] border border-white/[0.07] hover:border-[#00FF66]/40 flex items-center gap-2.5 transition-colors group"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00FF66]/60 group-hover:bg-[#00FF66]" />
                      <span className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Certifications & Education (Right Below Tools) */}
            <div>
              <div className="mb-6 pb-3 border-b border-white/10">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>CREDENTIALS</span>
                </div>
                <h3 className="font-display-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                  CERTIFICATIONS & EDUCATION
                </h3>
              </div>

              <div className="space-y-3.5">
                {(member.education || []).map((edu, eduIdx) => (
                  <div 
                    key={eduIdx}
                    className="p-4 rounded-xl bg-[#0D1017] border border-white/10 flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#121622] border border-white/10 flex items-center justify-center text-[#00FF66] shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {edu.institution} <span className="text-zinc-600">•</span> {edu.period}
                      </p>
                      {edu.score && (
                        <span className="inline-block text-[10px] font-mono text-[#00FF66] bg-[#00FF66]/10 px-2 py-0.5 rounded border border-[#00FF66]/20 mt-1.5">
                          {edu.score}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* WORK PROCESS & PHILOSOPHY: VERTICAL CONNECTED TIMELINE   */}
        {/* Exact Layout from Rayhan Aditya Reference Poster         */}
        {/* ======================================================== */}
        <div className="mb-24">
          <div className="mb-8 pb-4 border-b border-white/10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-1">
              <Wrench className="w-3.5 h-3.5" />
              <span>SYSTEMATIC EXECUTION</span>
            </div>
            <h2 className="font-display-condensed text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white">
              MY ENGINEERING PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: 5 Numbered Connected Step Nodes (01 DISCOVER -> 05 DELIVER) */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0D1017] border border-white/10 relative">
              <div className="space-y-6 sm:space-y-8 relative">
                
                {/* Connecting glowing vertical spine line */}
                <div className="absolute top-4 bottom-4 left-5 w-[2px] bg-gradient-to-b from-[#00FF66] via-emerald-600/40 to-transparent pointer-events-none hidden sm:block" />

                {[
                  { 
                    num: '01', 
                    title: 'DISCOVER & REQUIREMENT ANALYSIS', 
                    desc: 'Deep-dive into electrical bounds, thermal dissipation thresholds, payload limits, and operational stress environments.',
                    icon: Search
                  },
                  { 
                    num: '02', 
                    title: 'DEFINE & SCHEMATIC TOPOLOGY', 
                    desc: 'Synthesizing kinematic models, component selection, CAN-bus network hierarchy, and Bill of Materials.',
                    icon: Lightbulb
                  },
                  { 
                    num: '03', 
                    title: 'DESIGN & 3D SIMULATION', 
                    desc: 'Parametric CAD modeling, structural FEA load analysis, multi-layer PCB layout routing, and airflow modeling.',
                    icon: Compass
                  },
                  { 
                    num: '04', 
                    title: 'DEVELOP & RAPID PROTOTYPING', 
                    desc: 'Bare-metal C/C++ firmware architecture, hardware-in-the-loop validation, and precision bench testing.',
                    icon: Code2
                  },
                  { 
                    num: '05', 
                    title: 'DELIVER & STRESS VALIDATION', 
                    desc: 'Full-load electrical run-to-empty tests, vibration profiling, safety certification checks, and field deployment.',
                    icon: Rocket
                  }
                ].map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 sm:gap-6 relative z-10 group">
                      {/* Step Circle Node */}
                      <div className="w-10 h-10 rounded-full bg-[#121622] border border-white/20 group-hover:border-[#00FF66] group-hover:bg-[#00FF66] flex items-center justify-center text-zinc-300 group-hover:text-black transition-all shrink-0">
                        <span className="font-mono text-xs font-bold">{step.num}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <StepIcon className="w-4 h-4 text-[#00FF66]" />
                          <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white group-hover:text-[#00FF66] transition-colors">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Right: Editorial Quote & Philosophy Card (Rayhan Aditya Style) */}
            <div 
              className={`lg:col-span-4 p-8 rounded-3xl border flex flex-col justify-between transition-colors duration-700 ${
                activeTheme === 'crimson'
                  ? 'bg-gradient-to-b from-[#8E1616]/40 to-[#0D1017] border-rose-600/30'
                  : activeTheme === 'charcoal'
                  ? 'bg-gradient-to-b from-zinc-800/40 to-[#0D1017] border-white/10'
                  : 'bg-gradient-to-b from-emerald-950/40 to-[#0D1017] border-[#00FF66]/30'
              }`}
            >
              <div>
                <span className="font-serif text-6xl text-[#00FF66] leading-none block select-none">
                  “
                </span>
                <p className="text-base sm:text-lg font-medium text-white leading-relaxed mt-2 mb-6">
                  Great engineering is not merely how a system is assembled; it is how reliably it performs under unpredictable real-world extremes.
                </p>
                <div className="font-script text-2xl text-[#00FF66] mb-2 select-none">
                  {member.name.split(' ')[0]}
                </div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  {member.division || 'ADB LABS ENGINEERING'}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  CORE CREED
                </span>
                <span className="text-xs font-bold text-white uppercase">
                  UNCOMPROMISING RELIABILITY & PRECISION
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* CALL TO ACTION BANNER: "LET'S CREATE SOMETHING EXTRAORDINARY" */}
        {/* Matches AV Digital Designer Reference Footer Card        */}
        {/* ======================================================== */}
        <div id="contact-section" className="rounded-3xl bg-gradient-to-r from-[#0E121A] via-[#141A26] to-[#0E121A] border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00FF66]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Giant Bold Typography */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2 font-semibold">
                INITIATE COLLABORATION
              </span>
              <h2 className="font-display-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] mb-3">
                LET'S CREATE SOMETHING EXTRAORDINARY
                <span className="text-[#00FF66] ml-2">✦</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Open for clean-energy storage, field robotics hardware R&D, and deep-tech partnerships.
              </p>
            </div>

            {/* Middle: Action Button */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-center">
              <span className="text-xs text-zinc-400 mb-3 text-left lg:text-center">
                Ready to engineer the next generation of hardware?
              </span>
              {member.socials?.email && (
                <a
                  href={`mailto:${member.socials.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]"
                >
                  <span>LET'S WORK TOGETHER</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              )}
            </div>

            {/* Right: Clean Contact Links Rows */}
            <div className="lg:col-span-4 space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 text-xs font-mono">
              {member.socials?.email && (
                <a 
                  href={`mailto:${member.socials.email}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00FF66] shrink-0" />
                  <span className="truncate">{member.socials.email}</span>
                </a>
              )}

              {member.socials?.linkedin && (
                <a 
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-[#00FF66] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#00FF66] shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              )}

              {member.socials?.github && (
                <a 
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-[#00FF66] transition-colors"
                >
                  <GitHubIcon className="w-4 h-4 text-[#00FF66] shrink-0" />
                  <span>GitHub Repository</span>
                </a>
              )}

              <div className="flex items-center gap-2.5 text-zinc-400">
                <MapPin className="w-4 h-4 text-[#00FF66] shrink-0" />
                <span>{member.location}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* SCANNABLE ID BADGE MODAL                                 */}
      {/* ======================================================== */}
      <AnimatePresence>
        {showBarcodeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowBarcodeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0C0F17] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl"
            >
              <button
                onClick={() => setShowBarcodeModal(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center text-[#00FF66]">
                <QrCode className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                Official ADB Labs ID
              </h3>
              <p className="text-xs text-zinc-400 mb-6 font-mono">
                {member.name} // {member.id}
              </p>

              {/* ID Card Mockup inside Modal */}
              <div className="bg-[#07090E] border border-white/10 rounded-2xl p-4 mb-6 text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-bold text-white tracking-widest text-xs">ADB LABS</span>
                  <span className="text-[10px] font-mono text-[#00FF66]">SECURITY VERIFIED</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-14 h-14 object-cover object-top rounded-lg bg-zinc-800"
                    />
                  )}
                  <div>
                    <div className="text-sm font-bold text-white">{member.name}</div>
                    <div className="text-xs text-[#00FF66] font-mono">{member.role}</div>
                    <div className="text-[10px] text-zinc-400 font-mono mt-0.5">{member.id}</div>
                  </div>
                </div>

                {/* Scannable Barcode Strip */}
                <div className="bg-white p-2 rounded flex flex-col items-center justify-center">
                  <div className="w-full h-8 flex items-center justify-between px-1">
                    {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5].map((w, i) => (
                      <div 
                        key={i} 
                        className="bg-black h-full" 
                        style={{ width: `${w * 1.5}px` }} 
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-black font-bold tracking-widest mt-1">
                    *{member.id}*
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowBarcodeModal(false)}
                className="w-full py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close ID Badge
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
