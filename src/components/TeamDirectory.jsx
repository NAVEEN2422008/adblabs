import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { TEAM_MEMBERS, DEPARTMENTS } from '../data/teamData';

export default function TeamDirectory({ onSelectMember }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Departments');

  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      const matchesDept = 
        selectedDept === 'All Departments' || member.department === selectedDept;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesDept;

      const matchesSearch = 
        member.name.toLowerCase().includes(q) ||
        member.id.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.department.toLowerCase().includes(q) ||
        member.skills.some(skill => skill.toLowerCase().includes(q));

      return matchesDept && matchesSearch;
    });
  }, [searchQuery, selectedDept]);

  return (
    <div className="py-20 bg-[#06080f] text-slate-100 min-h-screen relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>ADB LABS CORE ENGINEERING ROSTER (17 MEMBERS)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Meet the <span className="text-green-400">Team</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            The multi-disciplinary hardware architects, robotics researchers, power engineers, and firmware specialists driving next-generation energy storage and autonomous systems.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search by name, employee code (e.g. 001), or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#0b101c] border border-[#1b2538] focus:border-green-500 focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 font-mono transition-colors"
              />
            </div>

            {/* Total Active Count Pill */}
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2 self-end md:self-center">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Showing <strong>{filteredMembers.length}</strong> of 17 Team Profiles</span>
            </div>
          </div>

          {/* Department Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {DEPARTMENTS.map((dept) => {
              const active = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    active
                      ? 'bg-green-500 text-black font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                      : 'bg-[#0c121e] border border-[#192234] text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>
        </div>

        {/* Team Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => onSelectMember(member.id)}
                className="rounded-3xl bg-gradient-to-b from-[#0c1220] to-[#080c16] border border-[#1b263b] hover:border-green-500/50 p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:shadow-[0_10px_30px_rgba(34,197,94,0.1)] relative overflow-hidden"
              >
                {/* Background ID Watermark */}
                <div className="absolute top-2 right-4 text-4xl font-black font-mono text-white/[0.03] select-none pointer-events-none group-hover:text-green-500/[0.08] transition-colors">
                  {member.id.split('-').pop()}
                </div>

                <div>
                  {/* Top Bar: Employee Code Badge & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 border border-[#223048] font-mono text-xs font-bold text-green-400 tracking-wider">
                      {member.id}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {member.department.split('&')[0]}
                    </span>
                  </div>

                  {/* Member Avatar & Header Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.avatarGradient} p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full rounded-[14px] bg-[#070b14] flex items-center justify-center font-mono font-black text-white text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono line-clamp-1 mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Short Bio snippet */}
                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-[#0a0f1d] border border-[#162033] text-[10px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-[#0a0f1d] text-[10px] font-mono text-slate-500">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#141d2e] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Experience: <strong className="text-slate-300">{member.experience}</strong>
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-mono text-green-400 group-hover:translate-x-1 transition-transform">
                    <span>View Portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#090d18] rounded-3xl border border-[#1b2438] p-8 max-w-md mx-auto">
            <Filter className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Members Matched</h3>
            <p className="text-xs text-slate-400 mb-4">
              Try adjusting your search query or reset the department filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDept('All Departments');
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
