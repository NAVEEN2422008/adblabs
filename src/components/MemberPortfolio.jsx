import React, { useState, useEffect } from 'react';
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
  Target,
  PenTool,
  Code2,
  Rocket,
  Monitor,
  MousePointer2,
  Box,
  Globe,
  Users,
  Trophy,
  Lightbulb,
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

// Helper to generate the authoritative Job Title watermark running behind the subject (like PORTFOLIO in the reference poster)
function getHeroJobTitle(member, isRed) {
  if (isRed) return 'PORTFOLIO';

  const map = {
    'ADB-446-001': 'CHIEF EXECUTIVE OFFICER',
    'ADB-446-002': 'CHIEF TECHNOLOGY OFFICER',
    'ADB-446-003': 'MANAGING DIRECTOR',
    'ADB-446-004': 'MECHANICAL SYSTEMS & CAD',
    'ADB-446-005': 'CHIEF OPERATING OFFICER',
    'ADB-446-006': 'POWER ELECTRONICS & EMBEDDED',
    'ADB-446-007': 'LEAD FIRMWARE & ROBOTICS',
    'ADB-446-008': 'BATTERY SYSTEMS & QA',
    'ADB-446-009': 'FINANCE & OPERATIONS',
    'ADB-446-010': 'SOFTWARE, AI & IOT CLOUD',
    'ADB-446-011': 'SUPPLY CHAIN & PRODUCTION',
    'ADB-446-012': 'INDUSTRIAL DESIGN & ERGONOMICS',
    'ADB-446-013': 'AUTONOMOUS NAVIGATION & SLAM'
  };

  if (member?.id && map[member.id]) return map[member.id];
  return (member?.role || 'ENGINEERING LEAD').replace(/\(.*?\)/g, '').trim().toUpperCase();
}

// Capability Icon Helper
function getCapabilityIcon(iconName, themeMode = 'slate') {
  let colorClass = "text-white/90";
  if (themeMode === 'crimson') colorClass = "text-[#E50914]";
  if (themeMode === 'emerald') colorClass = "text-emerald-400";

  switch (iconName) {
    case 'PenTool':
    case 'Cpu': return <PenTool className={`w-5 h-5 ${colorClass}`} />;
    case 'Monitor':
    case 'Bot': return <Monitor className={`w-5 h-5 ${colorClass}`} />;
    case 'Sparkles':
    case 'Zap': return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
    case 'MousePointer2':
    case 'Layers': return <MousePointer2 className={`w-5 h-5 ${colorClass}`} />;
    case 'Box':
    case 'Wrench': return <Box className={`w-5 h-5 ${colorClass}`} />;
    case 'BarChart3': return <BarChart3 className={`w-5 h-5 ${colorClass}`} />;
    case 'ShieldCheck': return <ShieldCheck className={`w-5 h-5 ${colorClass}`} />;
    case 'Terminal': return <Terminal className={`w-5 h-5 ${colorClass}`} />;
    case 'Award': return <Award className={`w-5 h-5 ${colorClass}`} />;
    default: return <Cpu className={`w-5 h-5 ${colorClass}`} />;
  }
}

// Visual Mockup for Projects (Slate, Crimson, or Emerald)
function ProjectMockup({ index, themeMode = 'slate' }) {
  const isRed = themeMode === 'crimson';
  const isGreen = themeMode === 'emerald';

  if (index === 0) {
    return (
      <div className={`w-full h-full p-4 flex flex-col justify-between relative overflow-hidden border-b ${
        isRed 
          ? 'bg-[#0E0607] border-red-950/60' 
          : isGreen 
            ? 'bg-[#07130F] border-emerald-950/60' 
            : 'bg-[#080A0E] border-white/[0.06]'
      }`}>
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${
              isRed ? 'bg-[#E50914]' : isGreen ? 'bg-emerald-400' : 'bg-white/20'
            }`} />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <span className={`text-[10px] font-mono ${
            isRed ? 'text-[#E50914]' : isGreen ? 'text-emerald-400' : 'text-zinc-400'
          }`}>
            01 // PLATFORM
          </span>
        </div>
        <div className="my-2 space-y-2">
          <div className="text-xl font-bold font-mono text-white tracking-tight">
            $24,860.50
          </div>
          <div className="h-12 flex items-end gap-1.5 pt-2">
            {[40, 65, 30, 85, 55, 95, 70, 45, 90, 60, 100, 75].map((h, i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-t-sm transition-colors ${
                  isRed 
                    ? (i % 2 === 0 ? 'bg-[#E50914]' : 'bg-red-950/80') 
                    : isGreen 
                      ? (i % 2 === 0 ? 'bg-emerald-400' : 'bg-emerald-950/80')
                      : 'bg-white/20 hover:bg-white/40'
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>ANALYTICS ENGINE</span>
          <span className={isRed ? 'text-[#E50914]' : isGreen ? 'text-emerald-400' : 'text-zinc-300'}>
            ACTIVE FEED
          </span>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={`w-full h-full p-4 flex flex-col justify-between relative overflow-hidden border-b ${
        isRed 
          ? 'bg-[#0F0708] border-red-950/60' 
          : isGreen 
            ? 'bg-[#061410] border-emerald-950/60' 
            : 'bg-[#090C12] border-white/[0.06]'
      }`}>
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">NEXORA</span>
          <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>SERVICES</span>
          </div>
        </div>
        <div className="my-2 flex items-center justify-center relative">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
            isRed 
              ? 'bg-gradient-to-tr from-[#E50914] via-[#8E1616] to-[#450A0A] shadow-[0_0_30px_rgba(229,9,20,0.5)]' 
              : isGreen 
                ? 'bg-gradient-to-tr from-emerald-500 via-teal-700 to-emerald-950 shadow-[0_0_30px_rgba(16,185,129,0.45)]' 
                : 'bg-gradient-to-tr from-zinc-700 via-zinc-400 to-zinc-900 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]'
          }`}>
            <div className={`w-10 h-10 rounded-full ${
              isRed ? 'bg-[#0F0708]' : isGreen ? 'bg-[#061410]' : 'bg-[#090C12]'
            }`} />
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>BRAND SYSTEM</span>
          <span className={isGreen ? 'text-emerald-400' : 'text-zinc-300'}>INTERACTION</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full p-4 flex flex-col justify-between relative overflow-hidden border-b ${
      isRed 
        ? 'bg-[#0E0607] border-red-950/60' 
        : isGreen 
          ? 'bg-[#07130F] border-emerald-950/60' 
          : 'bg-[#080B10] border-white/[0.06]'
    }`}>
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">COMPANION APP</span>
        <span className={`w-2 h-2 rounded-full ${
          isRed ? 'bg-[#E50914]' : isGreen ? 'bg-emerald-400' : 'bg-white/40'
        }`} />
      </div>
      <div className={`my-1 mx-auto w-24 h-24 rounded-2xl p-2 flex flex-col items-center justify-center relative shadow-lg ${
        isRed 
          ? 'bg-[#180A0C] border border-red-900/40' 
          : isGreen 
            ? 'bg-[#0A1A14] border border-emerald-500/30' 
            : 'bg-[#0F1420] border border-white/20'
      }`}>
        <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center ${
          isRed 
            ? 'border-red-900 border-t-[#E50914]' 
            : isGreen 
              ? 'border-emerald-950 border-t-emerald-400' 
              : 'border-white/30 border-t-white'
        }`}>
          <span className={`text-xs font-mono font-bold ${isGreen ? 'text-emerald-400' : 'text-white'}`}>
            72%
          </span>
        </div>
        <span className="text-[8px] font-mono text-zinc-400 mt-1">TELEMETRY</span>
      </div>
      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span>MOBILE INTERFACE</span>
        <span className={isGreen ? 'text-emerald-400' : 'text-zinc-300'}>IOT CORE</span>
      </div>
    </div>
  );
}

export default function MemberPortfolio({ employeeCode, member: propMember, onBack, onSelectMember }) {
  const [copied, setCopied] = useState(false);
  const [showBarcodeModal, setShowBarcodeModal] = useState(false);

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

  // Specific user instruction:
  // 001 in Greyish (Slate) theme
  // 002, 009, 010 in Reddish (Crimson) theme
  // 3rd Theme: Greenish (Emerald/ADB Labs)
  const isRedMember = member && ['ADB-446-002', 'ADB-446-009', 'ADB-446-010'].includes(member.id);
  const [themeMode, setThemeMode] = useState(isRedMember ? 'crimson' : 'slate');

  useEffect(() => {
    if (member) {
      const red = ['ADB-446-002', 'ADB-446-009', 'ADB-446-010'].includes(member.id);
      setThemeMode(red ? 'crimson' : 'slate');
    }
  }, [member?.id]);

  const isRed = themeMode === 'crimson';
  const isGreen = themeMode === 'emerald';
  const isSlate = themeMode === 'slate';

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-24 bg-[#090B0E] text-white">
        <div className="max-w-md w-full bg-[#11141D] border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
            404 // Identity Record Not Found
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Employee ID Invalid</h2>
          <p className="text-sm text-zinc-400 mb-6">
            No active portfolio found matching identifier <code className="text-white bg-[#080A0E] px-2 py-0.5 rounded font-mono">{employeeCode}</code>.
          </p>
          <button
            onClick={onBack}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Team Portfolios</span>
          </button>
        </div>
      </div>
    );
  }

  // Compute authoritative Job Title for the watermark behind subject
  const heroJobTitle = getHeroJobTitle(member, isRed);

  return (
    <div className={`min-h-screen pt-4 pb-24 relative overflow-x-hidden transition-colors duration-500 font-body-portfolio ${
      isRed 
        ? 'bg-[#08080A] text-[#E5E7EB] selection:bg-[#E50914] selection:text-white' 
        : isGreen
          ? 'bg-[#060D0A] text-[#D8E6E0] selection:bg-[#00FF88] selection:text-black'
          : 'bg-[#0B0E14] text-[#E2E8F0] selection:bg-slate-300 selection:text-black'
    }`}>
      
      {/* Background Ambient Atmosphere */}
      {isRed ? (
        <>
          <div className="absolute top-[180px] right-[10%] w-[500px] h-[500px] rounded-full bg-[#E50914]/12 blur-[170px] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[-100px] w-[500px] h-[500px] bg-rose-950/20 rounded-full blur-[200px] pointer-events-none" />
        </>
      ) : isGreen ? (
        <>
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/[0.08] rounded-full blur-[180px] pointer-events-none" />
          <div className="absolute top-[35%] left-[-100px] w-[550px] h-[550px] bg-teal-500/[0.05] rounded-full blur-[220px] pointer-events-none" />
          <div className="absolute bottom-[15%] right-[-50px] w-[600px] h-[600px] bg-emerald-950/25 rounded-full blur-[200px] pointer-events-none" />
        </>
      ) : (
        /* Dark Charcoal (Blue-Black) Ambient Illumination */
        <>
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-950/[0.12] rounded-full blur-[200px] pointer-events-none" />
          <div className="absolute top-[35%] left-[-100px] w-[550px] h-[550px] bg-slate-800/[0.1] rounded-full blur-[220px] pointer-events-none" />
          <div className="absolute bottom-[15%] right-[-50px] w-[600px] h-[600px] bg-[#0E1524]/40 rounded-full blur-[200px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* TOP EDITORIAL NAV / CONTROLS                             */}
        {/* ======================================================== */}
        <header className="flex flex-col sm:flex-row items-center justify-between py-6 border-b border-white/[0.08] mb-8 gap-4">
          
          {/* Logo & ID */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.location.href = '/'}
              className="text-2xl font-black tracking-tighter text-white font-heading hover:opacity-80 transition-opacity"
            >
              ADB
            </button>
            <span className="text-zinc-600">/</span>
            <span className={`text-xs font-mono uppercase tracking-widest font-semibold ${
              isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-300'
            }`}>
              {member.id}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-zinc-400 hidden md:inline">
              {member.name}
            </span>
          </div>

          {/* Quick Theme Mode Toggle (Dark Charcoal vs Reddish vs Greenish) */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono">
            <button
              onClick={() => setThemeMode('slate')}
              className={`px-3 py-1 rounded-full text-[11px] transition-all flex items-center gap-1.5 ${
                isSlate 
                  ? 'bg-slate-200 text-slate-950 font-bold shadow-md' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>Dark Charcoal</span>
            </button>
            <button
              onClick={() => setThemeMode('crimson')}
              className={`px-3 py-1 rounded-full text-[11px] transition-all flex items-center gap-1.5 ${
                isRed 
                  ? 'bg-[#E50914] text-white font-bold shadow-[0_0_15px_rgba(229,9,20,0.5)]' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              <span>Reddish</span>
            </button>
            <button
              onClick={() => setThemeMode('emerald')}
              className={`px-3 py-1 rounded-full text-[11px] transition-all flex items-center gap-1.5 ${
                isGreen 
                  ? 'bg-[#00FF88] text-black font-extrabold shadow-[0_0_15px_rgba(0,255,136,0.5)]' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF88]" />
              <span>Greenish</span>
            </button>
          </div>

          {/* Member Switcher & Contact Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onSelectMember && onSelectMember(prevMember.id)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 text-xs font-mono transition-all"
              title={`Previous: ${prevMember.name}`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{prevMember.name.split(' ')[0]}</span>
            </button>

            <button
              onClick={() => onSelectMember && onSelectMember(nextMember.id)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 text-xs font-mono transition-all"
              title={`Next: ${nextMember.name}`}
            >
              <span className="hidden lg:inline">{nextMember.name.split(' ')[0]}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#contact-section"
              className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md ml-1 ${
                isRed 
                  ? 'bg-[#E50914] hover:bg-[#C8102E] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]' 
                  : isGreen
                    ? 'bg-[#00FF88] hover:bg-[#10B981] text-black shadow-[0_0_20px_rgba(0,255,136,0.35)]'
                    : 'bg-white hover:bg-slate-200 text-black'
              }`}
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

        </header>

        {/* ======================================================== */}
        {/* HERO SECTION - OUTSIDE ANY BOUNDING BOX!                 */}
        {/* 1. Job Title runs horizontally behind the person's image */}
        {/* 2. Free-standing cutout centered in the middle           */}
        {/* 3. Flanked by editorial bio/signature (left) & quote (rt)*/}
        {/* 4. Person's Name is placed DIRECTLY BELOW subject image  */}
        {/* ======================================================== */}
        <section className="relative pt-4 pb-16 sm:pb-20 overflow-visible">
          
          {/* GIANT HORIZONTAL JOB TITLE BEHIND SUBJECT (Centered across background) */}
          <div className="absolute top-2 sm:top-4 lg:top-8 left-0 right-0 w-full flex justify-center select-none pointer-events-none z-0 overflow-hidden px-2 sm:px-4">
            <h2 className={`font-anton uppercase tracking-tight text-center leading-none whitespace-nowrap drop-shadow-2xl ${
              isRed 
                ? 'text-[17vw] lg:text-[13.5rem] text-[#E50914]/[0.9] drop-shadow-[0_0_50px_rgba(229,9,20,0.35)]' 
                : isGreen
                  ? (heroJobTitle.length > 20 
                      ? 'text-[7.5vw] sm:text-[6.5vw] lg:text-[5.5rem] xl:text-[6.8rem] text-emerald-400/[0.22] drop-shadow-[0_0_40px_rgba(16,185,129,0.25)]' 
                      : 'text-[11vw] sm:text-[9.5vw] lg:text-[8rem] xl:text-[9.5rem] text-emerald-400/[0.22] drop-shadow-[0_0_40px_rgba(16,185,129,0.25)]')
                  : (heroJobTitle.length > 20
                      ? 'text-[7.5vw] sm:text-[6.5vw] lg:text-[5.5rem] xl:text-[6.8rem] text-slate-400/[0.18] drop-shadow-[0_0_40px_rgba(255,255,255,0.06)]'
                      : 'text-[11vw] sm:text-[9.5vw] lg:text-[8rem] xl:text-[9.5rem] text-slate-300/[0.20] drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]')
            }`}>
              {heroJobTitle}
            </h2>
          </div>

          {/* MAIN HERO STAGE: Left Bio/Signature + Center Cutout + Right Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end relative z-10 pt-12 sm:pt-16">
            
            {/* Left Column: Script greeting, Role Tag, Bio, and Signature */}
            <div className="lg:col-span-3 flex flex-col justify-end order-2 lg:order-1 pb-4 sm:pb-8">
              
              <div className={`font-oswald font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-2 ${
                isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-400'
              }`}>
                {isRed ? 'EXECUTIVE PORTFOLIO' : isGreen ? 'CLEAN ENERGY & ROBOTICS' : 'HARDWARE & SYSTEMS'}
              </div>

              {/* Handwritten Script Accent ("Hello, I'm" from reference poster) */}
              <span className={`font-script text-3xl sm:text-4xl -rotate-6 mb-2 block select-none ${
                isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-300'
              }`}>
                Hello, I'm
              </span>

              {/* Bio Summary Paragraph */}
              <p className="font-body-portfolio text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Signature Accent (Exact match to reference poster) */}
              <div className="pt-2 border-t border-white/[0.08]">
                <div className="font-script text-2xl sm:text-3xl text-zinc-200 mb-0.5 select-none">
                  {member.name}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  {member.division || 'ADB LABS CREW'}
                </div>
              </div>

            </div>

            {/* Center Column: FREE-STANDING CUTOUT IMAGE (NO BOUNDING BOX!) */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-end order-1 lg:order-2 min-h-[440px] sm:min-h-[540px] lg:min-h-[620px]">
              
              {/* Centered Glowing Halo Disc Behind Cutout (Matching Reference Poster) */}
              {isRed ? (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[320px] sm:w-[440px] lg:w-[480px] h-[320px] sm:h-[440px] lg:h-[480px] rounded-full bg-gradient-to-tr from-[#7A0C0C] via-[#B81D24] to-[#450A0A] shadow-[0_0_120px_rgba(229,9,20,0.45)] pointer-events-none z-0" />
              ) : isGreen ? (
                <>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[320px] sm:w-[440px] lg:w-[480px] h-[320px] sm:h-[440px] lg:h-[480px] rounded-full bg-gradient-to-tr from-[#062419] via-[#0B3D2B] to-[#041710] border border-emerald-500/20 shadow-[0_0_120px_rgba(16,185,129,0.3)] pointer-events-none z-0" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[360px] sm:w-[500px] lg:w-[540px] h-[360px] sm:h-[500px] lg:h-[540px] rounded-full border border-emerald-500/20 pointer-events-none z-0" />
                </>
              ) : (
                /* Dark Charcoal (Blue-Black) Halo Disc */
                <>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[320px] sm:w-[440px] lg:w-[480px] h-[320px] sm:h-[440px] lg:h-[480px] rounded-full bg-gradient-to-tr from-[#0B101D] via-[#151E33] to-[#0A0E18] border border-slate-700/30 shadow-[0_0_120px_rgba(30,41,59,0.5)] pointer-events-none z-0" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[360px] sm:w-[500px] lg:w-[540px] h-[360px] sm:h-[500px] lg:h-[540px] rounded-full border border-slate-700/30 pointer-events-none z-0" />
                </>
              )}

              {/* The Cutout Image (Outside any box) */}
              <div className="relative z-20 flex flex-col items-center">
                {member.image ? (
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[460px] sm:h-[540px] lg:h-[620px] w-auto max-w-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />

                    {/* Gradient fade at bottom so subject blends seamlessly into page canvas */}
                    <div className={`absolute inset-x-0 bottom-0 h-16 pointer-events-none z-30 ${
                      isRed 
                        ? 'bg-gradient-to-t from-[#08080A] via-[#08080A]/60 to-transparent' 
                        : isGreen
                          ? 'bg-gradient-to-t from-[#060D0A] via-[#060D0A]/60 to-transparent'
                          : 'bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/60 to-transparent'
                    }`} />
                  </div>
                ) : (
                  <div className={`w-64 sm:w-72 h-80 sm:h-96 rounded-3xl border flex flex-col items-center justify-center text-center p-6 z-20 ${
                    isGreen ? 'bg-[#091511] border-emerald-500/20' : isRed ? 'bg-[#14080A] border-red-900/40' : 'bg-[#101522] border-slate-800'
                  }`}>
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-extrabold text-white mb-4 ${
                      isRed 
                        ? 'bg-[#E50914]/20 border border-[#E50914]' 
                        : isGreen 
                          ? 'bg-emerald-500/20 border border-[#00FF88] text-[#00FF88]' 
                          : 'bg-slate-800 border border-slate-700'
                    }`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-lg font-bold text-white">{member.name}</span>
                    <span className="text-xs text-zinc-400 font-mono mt-1">{member.role}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Engineering Philosophy, Location & Availability */}
            <div className="lg:col-span-3 flex flex-col justify-end text-left lg:text-right order-3 pb-4 sm:pb-8">
              
              <div className="font-oswald font-bold text-xs uppercase tracking-widest text-zinc-300 mb-2">
                DESIGN THAT INSPIRES. CODE THAT PERFORMS.
              </div>

              {/* Philosophy Quote */}
              <p className="font-body-portfolio text-xs text-zinc-400 italic leading-relaxed mb-6">
                "{member.quote || "Building bold, uncompromising hardware engineered for the toughest real-world challenges."}"
              </p>

              {/* Location & Availability Badge */}
              <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-zinc-400 flex items-center lg:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>{member.location || 'Chennai, India'}</span>
                </div>
                <div className={`text-xs font-bold tracking-wider uppercase font-mono ${
                  isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-300'
                }`}>
                  AVAILABLE FOR R&D ↗
                </div>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* PERSON'S NAME & ACTIONS - DIRECTLY BELOW PERSON'S IMAGE  */}
          {/* ======================================================== */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.08] text-center relative z-20">
            
            {/* Person's Name in Anton */}
            <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.8rem] uppercase text-white tracking-wide leading-none mb-3 select-none drop-shadow-xl">
              {member.name}
            </h1>

            {/* Role / Headline (Oswald Bold) */}
            <div className={`font-oswald font-bold text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-2 flex-wrap ${
              isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-300'
            }`}>
              <span>{member.role}</span>
              {member.department && (
                <>
                  <span className="text-zinc-600">//</span>
                  <span className="text-zinc-400 font-normal">{member.department}</span>
                </>
              )}
            </div>

            {/* Centered Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#featured-work"
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  isRed 
                    ? 'bg-[#E50914] hover:bg-[#C8102E] text-white shadow-[0_0_25px_rgba(229,9,20,0.45)]' 
                    : isGreen
                      ? 'bg-[#00FF88] hover:bg-[#10B981] text-black font-extrabold shadow-[0_0_30px_rgba(0,255,136,0.35)]'
                      : 'bg-white hover:bg-slate-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                }`}
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
                  className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md ${
                    isGreen
                      ? 'bg-[#091511] hover:bg-[#0E201A] text-emerald-300 hover:text-white border border-emerald-500/25 hover:border-emerald-400/50'
                      : isRed
                        ? 'bg-[#180A0C] hover:bg-[#250F13] text-zinc-300 hover:text-white border border-red-900/40 hover:border-red-600/50'
                        : 'bg-[#101522] hover:bg-[#161D2E] text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500/80'
                  }`}
                >
                  <Download className={`w-4 h-4 ${isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-400'}`} />
                  <span>DOWNLOAD RESUME</span>
                </a>
              )}
            </div>

          </div>

        </section>

        {/* ======================================================== */}
        {/* STATS ROW (The FIRST card container on the page)         */}
        {/* ======================================================== */}
        <section className={`mb-24 rounded-2xl sm:rounded-3xl backdrop-blur-xl p-6 sm:p-8 shadow-xl ${
          isRed 
            ? 'bg-[#0E0608]/90 border border-red-950/80 shadow-[0_0_30px_rgba(229,9,20,0.1)]' 
            : isGreen
              ? 'bg-[#091511]/90 border border-emerald-500/20 shadow-[0_0_35px_rgba(16,185,129,0.1)]'
              : 'bg-[#101522]/90 border border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        }`}>
          <div className={`grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x ${
            isRed ? 'divide-red-950/60' : isGreen ? 'divide-emerald-950/60' : 'divide-slate-800/80'
          }`}>
            {(member.stats || [
              { label: 'YEARS EXPERIENCE', value: '6+' },
              { label: 'PROJECTS COMPLETED', value: '40+' },
              { label: 'HAPPY CLIENTS', value: '18+' },
              { label: 'COUNTRIES WORKED WITH', value: '12' }
            ]).map((st, idx) => (
              <div 
                key={idx} 
                className={`p-4 sm:p-6 text-center ${idx > 0 && idx % 2 === 0 ? 'border-t sm:border-t-0' : ''}`}
              >
                <div className="inline-flex items-center justify-center gap-2 mb-2">
                  <span className={`text-sm ${isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-300'}`}>✦</span>
                  <div className={`font-bebas text-5xl sm:text-6xl tracking-wide leading-none ${
                    isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-white'
                  }`}>
                    {st.value}
                  </div>
                </div>
                <div className="font-oswald font-bold text-[11px] sm:text-xs uppercase tracking-widest text-zinc-400">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SELECTED / FEATURED PROJECTS (3 Horizontal Cards Grid)   */}
        {/* ======================================================== */}
        <section id="featured-work" className="mb-24 scroll-mt-24">
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
            <h2 className="font-oswald font-bold text-sm uppercase tracking-[0.2em] text-zinc-400">
              {isRed ? 'SELECTED PROJECTS' : 'FEATURED WORK'}
            </h2>
            <a 
              href="#contact-section"
              className={`font-oswald font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors ${
                isRed ? 'text-[#E50914] hover:text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>{isRed ? 'VIEW ALL PROJECTS →' : 'EXPLORE ALL PROJECTS'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(member.featuredProjects || [
              { title: 'Veloce Bikes', tag: 'E-COMMERCE PLATFORM', desc: 'Crafting responsive, high-speed interactive commercial interfaces.' },
              { title: 'Woodcraft Furniture', tag: 'ARCHITECTURE & WEB', desc: 'Modern minimal product catalog with 3D product viewports.' },
              { title: 'Urbanic Editorial', tag: 'MAGAZINE & LIFESTYLE', desc: 'Editorial typography layout with interactive content feeds.' }
            ]).map((proj, pIdx) => (
              <div 
                key={pIdx}
                className={`rounded-2xl transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-lg hover:-translate-y-1.5 ${
                  isRed 
                    ? 'bg-[#0E0608] border border-red-950/80 hover:border-red-600/50' 
                    : isGreen
                      ? 'bg-[#091511] border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]'
                      : 'bg-[#101522] border border-slate-800/80 hover:border-slate-600/60 hover:shadow-[0_4px_25px_rgba(0,0,0,0.4)]'
                }`}
              >
                <div>
                  {/* Mockup Preview Header */}
                  <div className="h-48 w-full relative overflow-hidden bg-[#080A0E]">
                    <ProjectMockup index={pIdx} themeMode={themeMode} />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                      isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-zinc-400'
                    }`}>
                      <span className="font-bebas text-base">0{pIdx + 1}</span> // {proj.tag}
                    </div>

                    <h3 className="font-oswald font-bold text-xl text-white mb-2 group-hover:text-zinc-200 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="font-body-portfolio text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                {/* Circular Arrow Button */}
                <div className="p-6 pt-0 flex justify-end">
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                    isRed 
                      ? 'bg-red-950/40 border-red-900/60 group-hover:border-[#E50914] group-hover:bg-[#E50914] text-zinc-300 group-hover:text-white' 
                      : isGreen
                        ? 'bg-emerald-950/50 border-emerald-800/60 group-hover:border-[#00FF88] group-hover:bg-[#00FF88] text-emerald-200 group-hover:text-black'
                        : 'bg-[#141B2A] border border-slate-700/60 group-hover:border-white group-hover:bg-white text-zinc-300 group-hover:text-black'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPLIT SECTION:                                           */}
        {/* If Red: EDUCATION & SKILLS + WORK PROCESS + PHILOSOPHY   */}
        {/* If Slate/Greenish: CORE CAPABILITIES + TOOLS & CERTS     */}
        {/* ======================================================== */}
        {isRed ? (
          /* Rayhan Aditya Red Theme 3-Column Grid */
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
            
            {/* Column 1: EDUCATION & SKILLS (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <div className="mb-6 pb-3 border-b border-white/[0.08]">
                  <h3 className="font-oswald font-bold text-xs uppercase tracking-[0.2em] text-[#E50914]">
                    EDUCATION & CREDENTIALS
                  </h3>
                </div>
                <div className="space-y-4">
                  {(member.education || [
                    { degree: 'B.Sc. in Visual Communication', institution: 'Binus University', period: '2019 - 2023' },
                    { degree: 'UI/UX Design Certification', institution: 'Google Career Certificates', period: '2023' }
                  ]).map((edu, eIdx) => (
                    <div key={eIdx} className="p-4 rounded-xl bg-[#0E0608] border border-red-950/60">
                      <span className="text-[10px] font-mono text-[#E50914] block mb-1 font-bold">
                        {edu.period}
                      </span>
                      <h4 className="font-oswald font-bold text-sm text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-zinc-400 font-mono">
                        {edu.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4 pb-2 border-b border-white/[0.08]">
                  <h3 className="font-oswald font-bold text-xs uppercase tracking-[0.2em] text-[#E50914]">
                    SKILLS & TOOLCHAIN
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(
                    (member.techStack && Object.values(member.techStack).flat()) ||
                    member.skills ||
                    ['Web Design', 'UI/UX Design', 'Figma', 'Framer', 'SolidWorks', 'ROS2', 'Python', 'C++']
                  ).map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-[#0E0608] border border-red-950/80 hover:border-[#E50914]/50 text-xs text-zinc-300 transition-colors font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: WORK PROCESS (Vertical Connected Line) (4 cols) */}
            <div className="lg:col-span-4">
              <div className="mb-6 pb-3 border-b border-white/[0.08]">
                <h3 className="font-oswald font-bold text-xs uppercase tracking-[0.2em] text-[#E50914]">
                  WORK PROCESS
                </h3>
              </div>
              <div className="p-6 rounded-2xl bg-[#0E0608] border border-red-950/60 space-y-6 relative">
                {/* Vertical red glowing spine */}
                <div className="absolute top-8 bottom-8 left-9 w-[2px] bg-gradient-to-b from-[#E50914] via-rose-950 to-transparent pointer-events-none" />

                {[
                  { num: '01', title: 'DISCOVER', desc: 'Understanding goals, constraints, and operational bounds.', icon: Search },
                  { num: '02', title: 'IDEATE', desc: 'Research, schematic modeling, and architecture design.', icon: Lightbulb },
                  { num: '03', title: 'DESIGN', desc: 'Crafting high-precision physical & digital prototypes.', icon: PenTool },
                  { num: '04', title: 'DEVELOP', desc: 'Writing clean firmware, mechanics, and system software.', icon: Code2 },
                  { num: '05', title: 'DELIVER', desc: 'Rigorous stress validation, tuning, and deployment.', icon: Rocket }
                ].map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 relative z-10 group">
                      <div className="w-8 h-8 rounded-full bg-[#180A0C] border border-[#E50914]/40 group-hover:border-[#E50914] group-hover:bg-[#E50914] flex items-center justify-center font-bebas text-sm font-bold text-[#E50914] group-hover:text-white transition-all shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h5 className="font-oswald font-bold text-xs uppercase tracking-wider text-white group-hover:text-[#E50914] transition-colors">
                          {step.title}
                        </h5>
                        <p className="font-body-portfolio text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3: PHILOSOPHY QUOTE CARD (Crimson Red Card Container) (4 cols) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-b from-[#7A0C0C] via-[#520909] to-[#240404] border border-red-600/40 flex flex-col justify-between shadow-[0_0_30px_rgba(229,9,20,0.2)]">
              <div>
                <span className="font-serif text-6xl text-[#E50914] leading-none block select-none">
                  “
                </span>
                <p className="font-body-portfolio text-base font-medium text-white leading-relaxed mt-2 mb-6">
                  {member.quote || "Good design is not just how it looks, but how it works under real operational stress."}
                </p>
                <div className="font-script text-3xl text-white mb-1 select-none">
                  {member.name.split(' ')[0]}
                </div>
                <div className="text-[11px] font-mono text-red-300 uppercase tracking-widest">
                  {member.division || 'ADB LABS'}
                </div>
              </div>

              <div className="pt-6 border-t border-red-800/50 mt-6">
                <span className="font-oswald font-bold text-[10px] uppercase tracking-widest text-red-300 block mb-1">
                  VISION
                </span>
                <span className="font-oswald font-bold text-xs text-white uppercase tracking-wider">
                  LET'S CREATE SOMETHING GREAT TOGETHER
                </span>
              </div>
            </div>

          </section>
        ) : (
          /* AV Slate / Greenish Theme Grid */
          <section id="core-capabilities" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24 scroll-mt-24">
            
            {/* Left: CORE CAPABILITIES */}
            <div className="lg:col-span-7">
              <div className="mb-8 pb-3 border-b border-white/[0.08]">
                <h2 className={`font-oswald font-bold text-sm uppercase tracking-[0.2em] ${
                  isGreen ? 'text-[#00FF88]' : 'text-zinc-400'
                }`}>
                  CORE CAPABILITIES
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(member.capabilities || [
                  { title: 'UI/UX DESIGN', desc: 'Crafting intuitive, user-centered interfaces that drive engagement and delight.', icon: 'PenTool' },
                  { title: 'WEB DESIGN', desc: 'Designing responsive, modern websites that communicate brand and purpose.', icon: 'Monitor' },
                  { title: 'BRANDING', desc: 'Building visual identities that connect, inspire, and leave a lasting impression.', icon: 'Sparkles' },
                  { title: 'INTERACTION DESIGN', desc: 'Creating smooth, meaningful interactions that enhance the user experience.', icon: 'MousePointer2' },
                  { title: 'DESIGN SYSTEMS', desc: 'Building scalable design systems that ensure consistency and efficiency.', icon: 'Layers' },
                  { title: 'PROTOTYPING', desc: 'Turning ideas into interactive prototypes to validate and accelerate solutions.', icon: 'Box' }
                ]).map((cap, cIdx) => (
                  <div key={cIdx} className="space-y-2 p-2">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                      isGreen 
                        ? 'bg-emerald-500/[0.08] border border-emerald-500/20' 
                        : 'bg-white/[0.04] border border-white/10'
                    }`}>
                      {getCapabilityIcon(cap.icon, themeMode)}
                    </div>
                    <h3 className="font-oswald font-bold text-sm uppercase tracking-wider text-white">
                      {cap.title}
                    </h3>
                    <p className="font-body-portfolio text-xs text-zinc-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: TOOLS & TECH + CERTIFICATIONS */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div>
                <div className="mb-6 pb-3 border-b border-white/[0.08]">
                  <h3 className={`font-oswald font-bold text-sm uppercase tracking-[0.2em] ${
                    isGreen ? 'text-[#00FF88]' : 'text-zinc-400'
                  }`}>
                    TOOLS & TECHNOLOGIES
                  </h3>
                </div>
                <div className={`p-6 rounded-2xl ${
                  isGreen 
                    ? 'bg-[#091511] border border-emerald-500/20 shadow-lg' 
                    : 'bg-[#101522] border border-slate-800/80 shadow-md'
                }`}>
                  <div className="grid grid-cols-2 gap-4">
                    {(
                      (member.techStack && Object.values(member.techStack).flat()) ||
                      member.skills ||
                      ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Webflow', 'Framer', 'Spline', 'Adobe After Effects', 'Notion']
                    ).slice(0, 8).map((tool, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2.5 py-1 text-xs text-zinc-300">
                        <div className={`w-2 h-2 rounded-full ${isGreen ? 'bg-[#00FF88]' : 'bg-slate-400'}`} />
                        <span className="font-medium text-white font-mono">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-6 pb-3 border-b border-white/[0.08]">
                  <h3 className={`font-oswald font-bold text-sm uppercase tracking-[0.2em] ${
                    isGreen ? 'text-[#00FF88]' : 'text-zinc-400'
                  }`}>
                    CERTIFICATIONS & EDUCATION
                  </h3>
                </div>
                <div className={`p-6 rounded-2xl space-y-4 ${
                  isGreen 
                    ? 'bg-[#091511] border border-emerald-500/20 shadow-lg' 
                    : 'bg-[#101522] border border-slate-800/80 shadow-md'
                }`}>
                  {(member.education || [
                    { degree: 'Google UX Design Professional Certificate', institution: 'Coursera', period: '2022' },
                    { degree: 'Bachelor of Design (B.Des.)', institution: 'University of California, Los Angeles', period: '2018' }
                  ]).map((edu, eduIdx) => (
                    <div key={eduIdx} className="flex items-start gap-3.5 pb-3 border-b border-white/[0.05] last:border-b-0 last:pb-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isGreen 
                          ? 'bg-emerald-500/[0.1] border border-emerald-500/25 text-[#00FF88]' 
                          : 'bg-slate-800/60 border border-slate-700/60 text-slate-300'
                      }`}>
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-oswald font-bold text-sm text-white leading-snug">
                          {edu.degree}
                        </h4>
                        <p className="text-[11px] text-zinc-400 mt-0.5 font-mono">
                          {edu.institution} <span className="text-zinc-600">•</span> {edu.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </section>
        )}

        {/* ======================================================== */}
        {/* MY DESIGN PROCESS (Horizontal sequence in Slate & Green) */}
        {/* ======================================================== */}
        {!isRed && (
          <section className={`mb-24 rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${
            isGreen 
              ? 'bg-[#091511] border border-emerald-500/20 shadow-lg' 
              : 'bg-[#101522] border border-slate-800/80 shadow-md'
          }`}>
            <div className="mb-6 pb-4 border-b border-white/[0.08]">
              <h2 className={`font-oswald font-bold text-sm uppercase tracking-[0.2em] ${
                isGreen ? 'text-[#00FF88]' : 'text-zinc-400'
              }`}>
                MY DESIGN PROCESS
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { num: '01', title: 'DISCOVER', desc: 'Understanding goals, user needs, and the problem in depth.', icon: Search },
                { num: '02', title: 'DEFINE', desc: 'Research, analysis, and synthesising insights into clear direction.', icon: Target },
                { num: '03', title: 'DESIGN', desc: 'Designing intuitive interfaces with clarity and purpose.', icon: PenTool },
                { num: '04', title: 'DEVELOP', desc: 'Collaborating with developers to bring ideas to life.', icon: Code2 },
                { num: '05', title: 'DELIVER', desc: 'Testing, refining, and launching seamless digital experiences.', icon: Rocket }
              ].map((step, sIdx) => {
                const StepIcon = step.icon;
                return (
                  <div key={sIdx} className="space-y-2">
                    <div className={`font-oswald font-bold text-xs uppercase tracking-widest ${
                      isGreen ? 'text-[#00FF88]' : 'text-zinc-400'
                    }`}>
                      <span className="font-bebas text-sm">{step.num}</span> // {step.title}
                    </div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center my-2 ${
                      isGreen 
                        ? 'bg-emerald-500/[0.1] border border-emerald-500/25 text-[#00FF88]' 
                        : 'bg-slate-800/60 border border-slate-700/60 text-slate-300'
                    }`}>
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <p className="font-body-portfolio text-xs text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* FOOTER CTA BANNER                                        */}
        {/* Red Theme: "LET'S WORK TOGETHER" (Rayhan Aditya style)   */}
        {/* Slate & Green Theme: "LET'S CREATE SOMETHING EXTRAORDINARY"*/}
        {/* ======================================================== */}
        <footer id="contact-section" className={`rounded-3xl border p-8 sm:p-12 relative overflow-hidden shadow-2xl ${
          isRed 
            ? 'bg-gradient-to-r from-[#120608] via-[#1F0A0E] to-[#120608] border-red-900/40 shadow-[0_0_40px_rgba(229,9,20,0.15)]' 
            : isGreen
              ? 'bg-gradient-to-r from-[#071410] via-[#0C241C] to-[#071410] border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)]'
              : 'bg-gradient-to-r from-[#0E131E] via-[#121828] to-[#0E131E] border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Headline (Anton) */}
            <div className="lg:col-span-5">
              <h2 className="font-anton text-4xl sm:text-5xl uppercase tracking-normal text-white leading-[0.95]">
                {isRed ? "LET'S WORK TOGETHER" : "LET'S CREATE SOMETHING EXTRAORDINARY"}
                <span className={`ml-2 ${isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-white/60'}`}>✦</span>
              </h2>
            </div>

            {/* Middle: Blurb + Pill Button */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-center">
              <p className="font-body-portfolio text-xs text-zinc-400 mb-3 text-left lg:text-center">
                I'm currently available for freelance projects and collaborations.
              </p>
              {member.socials?.email && (
                <a
                  href={`mailto:${member.socials.email}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg ${
                    isRed 
                      ? 'bg-[#E50914] hover:bg-[#C8102E] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]' 
                      : isGreen
                        ? 'bg-[#00FF88] hover:bg-[#10B981] text-black font-extrabold shadow-[0_0_20px_rgba(0,255,136,0.35)]'
                        : 'bg-white hover:bg-slate-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  }`}
                >
                  <span>LET'S WORK TOGETHER</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              )}
            </div>

            {/* Right: Contact details */}
            <div className={`lg:col-span-4 space-y-2.5 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-8 text-xs font-mono ${
              isRed ? 'border-red-950/80' : isGreen ? 'border-emerald-950/80' : 'border-slate-800/80'
            }`}>
              {member.socials?.email && (
                <a 
                  href={`mailto:${member.socials.email}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail className={`w-3.5 h-3.5 shrink-0 ${isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-400'}`} />
                  <span className="truncate">{member.socials.email}</span>
                </a>
              )}

              <div className="flex items-center gap-2.5 text-zinc-400">
                <Phone className={`w-3.5 h-3.5 shrink-0 ${isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-400'}`} />
                <span>+91 83107 04488</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400">
                <MapPin className={`w-3.5 h-3.5 shrink-0 ${isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-400'}`} />
                <span>{member.location || 'Coimbatore, India'}</span>
              </div>

              <div className="flex items-center gap-2.5 text-zinc-400">
                <Globe className={`w-3.5 h-3.5 shrink-0 ${isRed ? 'text-[#E50914]' : isGreen ? 'text-[#00FF88]' : 'text-slate-400'}`} />
                <span>www.adblabs.in</span>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Social Icons Row */}
          <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 ${
            isRed ? 'border-red-950/60' : isGreen ? 'border-emerald-950/60' : 'border-slate-800/80'
          }`}>
            <div>
              © 2026 {member.name}. All Rights Reserved.
            </div>

            <div className="flex items-center gap-4">
              <span>LET'S CONNECT</span>
              {member.socials?.linkedin && (
                <a 
                  href={member.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              )}
              {member.socials?.github && (
                <a 
                  href={member.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
              )}
              <button 
                onClick={() => setShowBarcodeModal(true)} 
                className="hover:text-white transition-colors"
                title="View ID Badge"
              >
                <QrCode className="w-4 h-4" />
              </button>
            </div>
          </div>

        </footer>

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
              className="bg-[#0F1420] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl"
            >
              <button
                onClick={() => setShowBarcodeModal(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <QrCode className="w-6 h-6" />
              </div>

              <h3 className="font-oswald font-bold text-xl text-white mb-1">
                Official ADB Labs ID
              </h3>
              <p className="text-xs text-zinc-400 mb-6 font-mono">
                {member.name} // {member.id}
              </p>

              {/* ID Card Mockup inside Modal */}
              <div className="bg-[#07090E] border border-white/10 rounded-2xl p-4 mb-6 text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-bold text-white tracking-widest text-xs">ADB LABS</span>
                  <span className="text-[10px] font-mono text-zinc-400">SECURITY VERIFIED</span>
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
                    <div className={`text-xs font-mono ${isRed ? 'text-[#E50914]' : 'text-zinc-300'}`}>{member.role}</div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{member.id}</div>
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
                className="w-full py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-colors"
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
