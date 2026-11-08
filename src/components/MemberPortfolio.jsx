import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Sparkles
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

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!member) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-[#050B0A]">
        <div className="max-w-md w-full bg-[#0B1513] border border-red-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono text-red-400 uppercase tracking-widest block mb-1">
            404 // Identity Record Not Found
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Employee ID Invalid</h2>
          <p className="text-sm text-slate-400 mb-6">
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

  return (
    <div className="min-h-screen bg-[#050B0A] text-[#F5F7F2] pt-24 pb-24 relative overflow-hidden selection:bg-[#00FF66] selection:text-black">
      {/* Background ambient lighting - ADB Labs cyber green glow */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#00FF66]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#00FF66]/8 rounded-full blur-[180px] pointer-events-none" />

      {/* Cyber grid background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00FF66 1px, transparent 1px), linear-gradient(90deg, #00FF66 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Control Bar: Breadcrumbs & Quick Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#162B25]/80">
          <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
            <button 
              onClick={() => window.location.href = '/'}
              className="hover:text-white transition-colors"
            >
              ADB Labs
            </button>
            <span className="text-slate-600">/</span>
            <button 
              onClick={onBack}
              className="hover:text-[#00FF66] transition-colors"
            >
              Team Directory
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-[#00FF66] font-semibold bg-[#0B1513] px-2.5 py-1 rounded-md border border-[#162B25]">
              {member.id}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onSelectMember && onSelectMember(prevMember.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1513] hover:bg-[#12231F] text-slate-300 hover:text-white border border-[#162B25] text-xs font-medium transition-all"
              title={`Previous: ${prevMember.name}`}
            >
              <ChevronLeft className="w-3.5 h-3.5 text-[#00FF66]" />
              <span className="hidden md:inline">{prevMember.name.split(' ')[0]}</span>
            </button>

            <button
              onClick={() => onSelectMember && onSelectMember(nextMember.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1513] hover:bg-[#12231F] text-slate-300 hover:text-white border border-[#162B25] text-xs font-medium transition-all"
              title={`Next: ${nextMember.name}`}
            >
              <span className="hidden md:inline">{nextMember.name.split(' ')[0]}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#00FF66]" />
            </button>

            <button
              onClick={() => setShowBarcodeModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1513] hover:bg-[#12231F] text-[#00FF66] border border-[#162B25] text-xs font-medium transition-all"
              title="View Scannable ID Badge"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>ID Badge</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1513] hover:bg-[#12231F] text-slate-300 hover:text-white border border-[#162B25] text-xs font-medium transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00FF66]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HERO SECTION - Inspired by Sample Reference Layout       */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Eyebrow, Huge Title, Statement, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1513] border border-[#162B25] text-[#00FF66] text-xs font-mono uppercase tracking-widest mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
              <span>{member.department} // {member.division}</span>
            </div>

            {/* Massive Display Title (matching sample image's bold typography) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] mb-6 text-white">
              {member.headline ? (
                <>
                  <span className="block text-white">{member.headline.split('&')[0]}</span>
                  {member.headline.includes('&') && (
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] via-emerald-400 to-teal-300">
                      & {member.headline.split('&')[1]}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00FF66]">
                  {member.role}
                </span>
              )}
            </h1>

            {/* Professional Summary Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              {member.bio}
            </p>

            {/* Quote Block */}
            {member.quote && (
              <div className="border-l-2 border-[#00FF66] pl-4 py-1 mb-8 bg-[#0B1513]/40 rounded-r-xl max-w-xl">
                <p className="text-sm italic text-slate-400 font-mono">
                  "{member.quote}"
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#featured-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00FF66] hover:bg-[#00E55C] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(0,255,102,0.35)] hover:shadow-[0_0_35px_rgba(0,255,102,0.5)] cursor-pointer"
              >
                <span>VIEW FEATURED WORK</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {member.resumeUrl && (
                <a
                  href={member.resumeUrl}
                  download={`${member.name.replace(/\s+/g, '_')}_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1513] hover:bg-[#12231F] text-white hover:text-[#00FF66] border border-[#162B25] hover:border-[#00FF66]/50 font-bold text-sm tracking-wide transition-all cursor-pointer shadow-lg"
                >
                  <Download className="w-4 h-4 text-[#00FF66]" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              )}

              <a
                href="#contact-section"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-[#0B1513] text-slate-300 hover:text-white border border-transparent hover:border-[#162B25] font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#00FF66]" />
                <span>LET'S CONNECT</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Portrait Cutout & Floating Badges */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Ambient emerald backlight behind image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00FF66]/20 via-emerald-600/10 to-transparent rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[420px] rounded-3xl bg-gradient-to-b from-[#0F1E1A] to-[#07100E] border border-[#162B25] overflow-hidden shadow-2xl p-4 sm:p-6 group">
              
              {/* Top corner status badges */}
              <div className="flex items-center justify-between gap-2 mb-4 relative z-20">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050B0A]/90 border border-[#00FF66]/30 text-[#00FF66] text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
                  <span>{member.status.split('/')[0]}</span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-[#050B0A]/80 px-2.5 py-1 rounded-md border border-[#162B25]">
                  {member.id}
                </span>
              </div>

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-t from-[#050B0A] via-transparent to-transparent flex items-end justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#0B1513] to-[#050B0A]">
                    <div className="w-24 h-24 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center text-3xl font-extrabold text-[#00FF66] mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-lg font-bold text-white">{member.name}</span>
                    <span className="text-xs text-[#00FF66] font-mono mt-1">{member.role}</span>
                  </div>
                )}

                {/* Subtle dark gradient overlay at bottom of cutout */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07100E] to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge (like sample image "AVAILABLE FOR FREELANCE / HARDWARE") */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#050B0A]/90 border border-[#162B25] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center text-[#00FF66]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                      ENGAGEMENT STATUS
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {member.availability || 'Available for Hardware R&D Projects'}
                    </span>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00FF66] shadow-[0_0_8px_#00FF66]" />
              </div>

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* STATS BANNER (4 Cards Grid - Exactly like sample layout) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {(member.stats || [
            { label: 'PROJECTS COMPLETED', value: '18+' },
            { label: 'YEARS IN HARDWARE', value: '3+' },
            { label: 'ACTIVE PROTOTYPES', value: '4' },
            { label: 'SYSTEM RELIABILITY', value: '99.9%' }
          ]).map((st, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#0B1513]/80 border border-[#162B25] hover:border-[#00FF66]/40 transition-all backdrop-blur-md group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FF66]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#00FF66] transition-colors">
                {st.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* FEATURED WORK (3 Column Cards Grid - Sample Reference)   */}
        {/* ======================================================== */}
        <div id="featured-work" className="mb-24 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#162B25]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>PORTFOLIO SHOWCASE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                FEATURED WORK & PROJECTS
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {member.featuredProjects?.length || 0} DOCUMENTED INITIATIVES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(member.featuredProjects || []).map((proj, pIdx) => (
              <div 
                key={pIdx}
                className="rounded-2xl bg-[#0B1513]/70 border border-[#162B25] hover:border-[#00FF66]/50 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00FF66] bg-[#00FF66]/10 px-2.5 py-1 rounded-md border border-[#00FF66]/20">
                      {proj.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#050B0A] border border-[#162B25] group-hover:border-[#00FF66] flex items-center justify-center text-slate-400 group-hover:text-[#00FF66] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF66] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                {proj.tech && proj.tech.length > 0 && (
                  <div className="pt-4 border-t border-[#162B25]/60 flex flex-wrap gap-1.5">
                    {proj.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[11px] font-mono text-slate-400 bg-[#050B0A] px-2 py-0.5 rounded border border-[#162B25]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* CORE CAPABILITIES (6 Cards Grid - Sample Reference)      */}
        {/* ======================================================== */}
        <div className="mb-24">
          <div className="mb-10 pb-4 border-b border-[#162B25]">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>DOMAINS & COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              CORE CAPABILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(member.capabilities || []).map((cap, cIdx) => (
              <div 
                key={cIdx}
                className="p-6 rounded-2xl bg-[#0B1513]/60 border border-[#162B25] hover:border-[#00FF66]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#050B0A] border border-[#162B25] group-hover:border-[#00FF66]/50 flex items-center justify-center mb-4 transition-colors">
                  {getCapabilityIcon(cap.icon)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00FF66] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* TOOLS & TECHNOLOGIES (Categorized Grid)                  */}
        {/* ======================================================== */}
        {member.techStack && (
          <div className="mb-24">
            <div className="mb-10 pb-4 border-b border-[#162B25]">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>TOOLCHAIN & PLATFORMS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                TOOLS & TECHNOLOGIES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(member.techStack).map(([catKey, items], idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0B1513]/60 border border-[#162B25]"
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00FF66] block mb-4 pb-2 border-b border-[#162B25]">
                    {catKey === 'languages' ? 'Languages' :
                     catKey === 'hardware' ? 'Hardware & Systems' :
                     catKey === 'cadTools' ? 'CAD, EDA & Design' : 'Tools & Environments'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, iIdx) => (
                      <span 
                        key={iIdx}
                        className="text-xs font-medium text-slate-200 bg-[#050B0A] px-3 py-1.5 rounded-lg border border-[#162B25] hover:border-[#00FF66]/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* EXPERIENCE & EDUCATION TIMELINE (Two Columns)            */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-7">
            <div className="mb-8 pb-3 border-b border-[#162B25]">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>CAREER RECORD</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                WORK EXPERIENCE
              </h2>
            </div>

            <div className="space-y-6">
              {(member.experience || []).map((exp, eIdx) => (
                <div 
                  key={eIdx}
                  className="p-6 rounded-2xl bg-[#0B1513]/60 border border-[#162B25] relative pl-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-[#00FF66] bg-[#00FF66]/10 px-2.5 py-0.5 rounded border border-[#00FF66]/20 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-slate-300 mb-4">
                    {exp.company} <span className="text-slate-500">•</span> {exp.location}
                  </div>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                      {exp.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-[#00FF66] mt-1">▹</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-8 pb-3 border-b border-[#162B25]">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>CREDENTIALS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  EDUCATION & AWARDS
                </h2>
              </div>

              <div className="space-y-6 mb-8">
                {(member.education || []).map((edu, eduIdx) => (
                  <div 
                    key={eduIdx}
                    className="p-5 rounded-2xl bg-[#0B1513]/60 border border-[#162B25]"
                  >
                    <span className="text-xs font-mono text-[#00FF66] block mb-1">
                      {edu.period}
                    </span>
                    <h3 className="text-base font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-xs text-slate-400 mb-2">
                      {edu.institution}
                    </div>
                    {edu.score && (
                      <span className="text-xs font-mono text-emerald-300 bg-[#050B0A] px-2 py-0.5 rounded border border-[#162B25]">
                        {edu.score}
                      </span>
                    )}
                    {edu.details && (
                      <p className="text-xs text-slate-400 mt-2">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications Block */}
              {member.certifications && member.certifications.length > 0 && (
                <div className="p-5 rounded-2xl bg-[#0B1513]/40 border border-[#162B25]">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    HONORS & CERTIFICATIONS
                  </span>
                  <div className="space-y-2">
                    {member.certifications.map((cert, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <BadgeCheck className="w-4 h-4 text-[#00FF66] shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* ENGINEERING PROCESS (5 Steps - Sample Reference Layout)  */}
        {/* ======================================================== */}
        <div className="mb-24">
          <div className="mb-10 pb-4 border-b border-[#162B25]">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00FF66] uppercase tracking-widest mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>METHODOLOGY & EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              MY ENGINEERING PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'DISCOVER', desc: 'Understanding core physical constraints, electrical limits, and mission requirements.' },
              { num: '02', title: 'DEFINE', desc: 'Translating research into schematic topologies, mathematical kinematic models, and BOM.' },
              { num: '03', title: 'DESIGN', desc: 'Parametric 3D CAD modeling, PCB trace routing, and thermal channel simulations.' },
              { num: '04', title: 'DEVELOP', desc: 'Writing deterministic embedded firmware, rapid prototyping, and bench validation.' },
              { num: '05', title: 'DELIVER', desc: 'Stress testing under full electrical/mechanical load, calibration, and deployment.' }
            ].map((st, sIdx) => (
              <div 
                key={sIdx}
                className="p-5 rounded-2xl bg-[#0B1513]/50 border border-[#162B25] hover:border-[#00FF66]/50 transition-all"
              >
                <span className="text-2xl font-mono font-extrabold text-[#00FF66] block mb-2">
                  {st.num}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* CALL TO ACTION BANNER (Matching Sample Layout)           */}
        {/* ======================================================== */}
        <div id="contact-section" className="rounded-3xl bg-gradient-to-r from-[#0B1513] via-[#0F1E1A] to-[#0B1513] border border-[#00FF66]/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00FF66]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2">
                INITIATE CONTACT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4">
                LET'S BUILD SOMETHING EXTRAORDINARY
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mb-6">
                Currently actively collaborating on clean-energy storage, autonomous robotics, and embedded systems engineering.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {member.socials?.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00FF66] hover:bg-[#00E55C] text-black font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>LET'S WORK TOGETHER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#050B0A] hover:bg-[#12231F] text-white border border-[#162B25] hover:border-[#00FF66]/40 text-sm font-semibold transition-all"
                  >
                    <LinkedInIcon className="w-4 h-4 text-[#00FF66]" />
                    <span>LinkedIn</span>
                  </a>
                )}

                {member.socials?.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#050B0A] hover:bg-[#12231F] text-white border border-[#162B25] hover:border-[#00FF66]/40 text-sm font-semibold transition-all"
                  >
                    <GitHubIcon className="w-4 h-4 text-[#00FF66]" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 bg-[#050B0A]/80 border border-[#162B25] rounded-2xl p-6 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block border-b border-[#162B25] pb-2">
                DIRECT CHANNELS // {member.id}
              </span>

              {member.socials?.email && (
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#00FF66]/10 flex items-center justify-center text-[#00FF66] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">EMAIL</span>
                    <a href={`mailto:${member.socials.email}`} className="text-white hover:text-[#00FF66] transition-colors break-all">
                      {member.socials.email}
                    </a>
                  </div>
                </div>
              )}

              {member.socials?.phone && (
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#00FF66]/10 flex items-center justify-center text-[#00FF66] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">PHONE / WHATSAPP</span>
                    <a href={`tel:${member.socials.phone}`} className="text-white hover:text-[#00FF66] transition-colors">
                      {member.socials.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#00FF66]/10 flex items-center justify-center text-[#00FF66] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">LOCATION</span>
                  <span className="text-white">
                    {member.location}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* SCANNABLE ID BADGE MODAL                                 */}
      {/* ======================================================== */}
      {showBarcodeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setShowBarcodeModal(false)}
        >
          <div 
            className="max-w-md w-full bg-[#0B1513] border border-[#00FF66]/40 rounded-3xl p-6 sm:p-8 text-center relative shadow-[0_0_50px_rgba(0,255,102,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 mb-6 pb-3 border-b border-[#162B25]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00FF66]" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">
                  ADB LABS // VERIFIED ID BADGE
                </span>
              </div>
              <button
                onClick={() => setShowBarcodeModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              {member.name}
            </h3>
            <span className="text-xs font-mono text-[#00FF66] block mb-6">
              {member.id} • {member.role}
            </span>

            {/* Barcode Display */}
            <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-center shadow-inner">
              <img 
                src={`/barcodes/badge_card/${member.id}_scannable_badge.png`}
                alt={`${member.name} Barcode`}
                className="max-h-24 object-contain"
                onError={(e) => {
                  // Fallback to standard barcode
                  e.target.src = `/barcodes/${member.id}_barcode.png`;
                }}
              />
            </div>

            <p className="text-xs text-slate-400 mb-6 font-mono">
              Scannable 1D & 2D verification badge linked to official employee credentials.
            </p>

            <button
              onClick={() => setShowBarcodeModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#00FF66] hover:bg-[#00E55C] text-black font-bold text-xs uppercase tracking-wider transition-all"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
