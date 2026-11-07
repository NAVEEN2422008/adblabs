import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Copy, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  Cpu, 
  Award, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Zap,
  BadgeCheck
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

export default function MemberPortfolio({ employeeCode, member: propMember, onBack, onNavigateToTeam, onSelectMember, onNavigateToMember }) {
  const [copied, setCopied] = useState(false);

  // Find member by employee code (case-insensitive) or index
  const currentIndex = TEAM_MEMBERS.findIndex(
    (m) => m.id.toLowerCase() === (employeeCode || '').toLowerCase()
  );

  const member = propMember || (currentIndex !== -1 ? TEAM_MEMBERS[currentIndex] : null);
  const handleBack = onBack || onNavigateToTeam;
  const handleSelect = onSelectMember || onNavigateToMember;

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

  // If member not found
  if (!member) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-[#0c121e] border border-red-500/30 rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono text-red-400 uppercase tracking-widest block mb-1">
            404 // Identity Record Not Found
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Employee ID Invalid</h2>
          <p className="text-sm text-slate-400 mb-6">
            No active portfolio found matching identifier <code className="text-green-400 bg-slate-900 px-2 py-0.5 rounded font-mono">{employeeCode}</code>.
          </p>
          <button
            onClick={handleBack}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All 17 Team Portfolios</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06080f] text-slate-100 pt-24 pb-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Breadcrumb & Quick Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#182032]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <button 
              onClick={() => window.location.pathname = '/'}
              className="hover:text-white transition-colors"
            >
              ADB Labs
            </button>
            <span>/</span>
            <button 
              onClick={handleBack}
              className="hover:text-green-400 transition-colors"
            >
              Team Directory
            </button>
            <span>/</span>
            <span className="text-green-400 font-semibold">{member.id}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1626] border border-[#1f2b45] hover:border-green-500/50 text-xs font-mono text-slate-300 hover:text-white transition-all"
              title="Copy link to portfolio"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Share Profile</span>
                </>
              )}
            </button>

            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-xs font-mono text-green-400 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Members</span>
            </button>
          </div>
        </div>

        {/* Master Digital ID Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-[#0c1322] via-[#090e1a] to-[#060a12] border border-[#1e2a42] p-6 sm:p-10 mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Futuristic grid watermarks */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,#22c55e15,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 text-[120px] font-black font-mono text-white/[0.02] select-none pointer-events-none leading-none">
            {member.id.split('-').pop()}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Avatar / Badge Column */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center">
              <div className="relative group mb-4">
                <div className={`w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr ${member.avatarGradient} p-1 shadow-[0_0_40px_rgba(34,197,94,0.25)] flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-full h-full rounded-[22px] bg-[#070b14] flex flex-col items-center justify-center p-4 relative">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-wider">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-2 tracking-widest uppercase">
                      ADB R&D LABS
                    </span>
                  </div>
                </div>

                {/* Status indicator badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#080d1a] border border-green-500/50 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-green-400 tracking-wider uppercase">
                    VERIFIED CREW
                  </span>
                </div>
              </div>

              {/* Monospace Code Tag */}
              <div className="mt-3 px-3 py-1 rounded-lg bg-black/60 border border-[#202d44] font-mono text-xs text-green-400 font-bold tracking-widest shadow-inner">
                {member.id}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold">
                  {member.department}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono">
                  {member.division}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono ml-auto">
                  <MapPin className="w-3.5 h-3.5 text-green-400" />
                  {member.location}
                </span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {member.name}
                </h1>
                <p className="text-base sm:text-lg font-mono text-green-400 mt-1">
                  {member.role}
                </p>
              </div>

              {/* Engineering philosophy quote */}
              <blockquote className="border-l-2 border-green-500 pl-4 py-1 italic text-slate-300 text-sm sm:text-base bg-white/[0.01] rounded-r-lg">
                "{member.quote}"
              </blockquote>

              {/* Quick Stat Counter Badges */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="p-3 rounded-2xl bg-[#090e1a]/80 border border-[#1b2538] text-center">
                  <div className="text-xs font-mono text-slate-400">Experience</div>
                  <div className="text-base sm:text-lg font-black text-white font-mono mt-0.5">{member.experience}</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#090e1a]/80 border border-[#1b2538] text-center">
                  <div className="text-xs font-mono text-slate-400">Projects Shipped</div>
                  <div className="text-base sm:text-lg font-black text-green-400 font-mono mt-0.5">{member.projectsCompleted}+</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#090e1a]/80 border border-[#1b2538] text-center">
                  <div className="text-xs font-mono text-slate-400">Patents / IP</div>
                  <div className="text-base sm:text-lg font-black text-blue-400 font-mono mt-0.5">{member.patentsFiled}</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Detailed Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Column: Bio & Featured Projects */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Professional Background */}
            <div className="rounded-3xl bg-[#090e1a] border border-[#182338] p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-green-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Mission & Engineering Background</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="mt-6 pt-6 border-t border-[#162033] flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Award className="w-4 h-4 text-green-400" />
                <span>Academic Foundation: <strong className="text-slate-200">{member.education}</strong></span>
              </div>
            </div>

            {/* Featured ADB Labs Projects */}
            <div className="rounded-3xl bg-[#090e1a] border border-[#182338] p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6 text-green-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Key Engineering Contributions</span>
              </div>

              <div className="space-y-4">
                {member.featuredProjects.map((project, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-[#060a14] border border-[#19243a] hover:border-green-500/40 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-white group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
                        DEPLOYED
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Side Column: Skills, Verified Credentials, Socials */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Technical Skills Radar */}
            <div className="rounded-3xl bg-[#090e1a] border border-[#182338] p-6">
              <div className="flex items-center gap-2 mb-4 text-green-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Core Competencies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-[#0c1424] border border-[#1e2d4a] text-xs font-mono text-slate-200 hover:text-green-400 hover:border-green-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Crew Identity Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#0c1424] to-[#070b14] border border-[#1e2d4a] p-6 text-left shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-green-400 font-bold uppercase tracking-wider">
                <BadgeCheck className="w-4 h-4" />
                <span>Verified Engineering Crew</span>
              </div>
              
              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-[#182338]">
                  <span className="text-slate-500">Employee ID</span>
                  <span className="text-green-400 font-bold">{member.id}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#182338]">
                  <span className="text-slate-500">Department</span>
                  <span className="text-slate-200">{member.department}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#182338]">
                  <span className="text-slate-500">Roster Status</span>
                  <span className="text-emerald-400 font-medium">● Active / Lab Staff</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-500">Facility Base</span>
                  <span className="text-slate-300">Chennai Lab</span>
                </div>
              </div>
            </div>

            {/* Connect & Social Contacts */}
            <div className="rounded-3xl bg-[#090e1a] border border-[#182338] p-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                COMMUNICATION CHANNELS
              </div>
              <div className="space-y-2">
                <a
                  href={`mailto:${member.socials.email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#060a14] border border-[#19243a] hover:border-green-500/50 hover:bg-[#0c1527] text-xs font-mono text-slate-300 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-green-400" />
                    <span>{member.socials.email}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#060a14] border border-[#19243a] hover:border-blue-500/50 hover:bg-[#0c1527] text-xs font-mono text-slate-300 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedInIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#060a14] border border-[#19243a] hover:border-slate-500/50 hover:bg-[#0c1527] text-xs font-mono text-slate-300 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <GitHubIcon className="w-4 h-4 text-slate-300" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Teammate Switcher Footer (Prev / Next) */}
        <div className="pt-8 border-t border-[#182032] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => handleSelect(prevMember.id)}
            className="flex items-center gap-3 p-4 rounded-2xl bg-[#090e1a] border border-[#182338] hover:border-green-500/40 text-left transition-all group"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-green-400 group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase">
                Previous Teammate ({prevMember.id})
              </span>
              <span className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                {prevMember.name}
              </span>
            </div>
          </button>

          <button
            onClick={() => handleSelect(nextMember.id)}
            className="flex items-center justify-end gap-3 p-4 rounded-2xl bg-[#090e1a] border border-[#182338] hover:border-green-500/40 text-right transition-all group"
          >
            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase">
                Next Teammate ({nextMember.id})
              </span>
              <span className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                {nextMember.name}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-green-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
