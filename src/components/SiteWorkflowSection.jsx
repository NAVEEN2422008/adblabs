import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Compass, 
  Search, 
  FileText, 
  MessageSquareCheck, 
  ArrowRight,
  ChevronRight,
  Layers
} from 'lucide-react';

export default function SiteWorkflowSection({ onNavigate, onOpenQuote }) {
  const steps = [
    {
      num: "01",
      title: "Visit Site",
      subtitle: "Home Overview",
      icon: Globe,
      view: "home"
    },
    {
      num: "02",
      title: "Explore Solution",
      subtitle: "Energy / Power / Robotics",
      icon: Compass,
      view: "solutions"
    },
    {
      num: "03",
      title: "View Details",
      subtitle: "Product / Project / Program",
      icon: Search,
      view: "ps1"
    },
    {
      num: "04",
      title: "Enquire",
      subtitle: "Get a Quote / Apply",
      icon: FileText,
      action: onOpenQuote
    },
    {
      num: "05",
      title: "Follow Up",
      subtitle: "Team Response & Next Steps",
      icon: MessageSquareCheck,
      action: onOpenQuote
    }
  ];

  const sitemapGroups = [
    {
      title: "Home",
      view: "home",
      links: [
        { label: "Hero & 3D Tilt Stage", anchor: "hero" },
        { label: "Diesel vs PS1 Benchmark", anchor: "benchmark" },
        { label: "Highlights Bento Grid", anchor: "highlights" },
        { label: "Modular Docking Architecture", anchor: "architecture" }
      ]
    },
    {
      title: "Energy Solutions",
      view: "solutions",
      links: [
        { label: "Off-Grid Systems", view: "solutions" },
        { label: "Home Backup Systems", view: "solutions" },
        { label: "Custom Battery Solutions", view: "solutions" }
      ]
    },
    {
      title: "Power Stations",
      view: "ps1",
      links: [
        { label: "ADB Labs PS1 (Multi-Angle)", view: "ps1" },
        { label: "Runtime & Autonomy Calculator", anchor: "calculator" },
        { label: "Financial ROI Odometer", anchor: "roi" },
        { label: "3-Tier Spec Matrix", anchor: "specs" }
      ]
    },
    {
      title: "Projects",
      view: "besant",
      links: [
        { label: "Besant Nagar Off-Grid System", view: "besant" },
        { label: "Field Telemetry & Validation", view: "besant" }
      ]
    },
    {
      title: "Robotics R&D",
      view: "robotics",
      links: [
        { label: "Autonomous Mobile Platforms", view: "robotics" },
        { label: "ROS 2 & Jetson Perception", view: "robotics" },
        { label: "Industrial 6-Axis Manipulator", view: "internship" }
      ]
    },
    {
      title: "Internship Program",
      view: "internship",
      links: [
        { label: "Program Overview & Mentors", view: "internship" },
        { label: "6-Week Learning Roadmap", view: "internship" },
        { label: "Priority Waitlist & Apply", view: "internship" }
      ]
    },
    {
      title: "About ADB Labs",
      view: "about",
      links: [
        { label: "R&D Facility & Infrastructure", view: "about" },
        { label: "8 Interdisciplinary Focus Areas", view: "about" },
        { label: "5-Step Engineering Pipeline", anchor: "process" }
      ]
    },
    {
      title: "Contact Desk",
      action: onOpenQuote,
      links: [
        { label: "Direct Phone: +91 8310704481", action: onOpenQuote },
        { label: "Email: mdzalnex1@gmail.com", action: onOpenQuote },
        { label: "Chennai R&D Headquarters", action: onOpenQuote }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#04060a] border-t border-[#141824] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Mockup Bottom Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-green-400 text-xs font-mono mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURE & SITEMAP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Site Workflow & <span className="text-green-400">Structure</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Complete website flow, user journey and section architecture directly mapped from engineering requirements.
          </p>
        </div>

        {/* 5-Step User Journey Pipeline Diagram */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#090c14] border border-[#1a2130] shadow-2xl">
          <div className="text-xs font-mono text-green-400 uppercase tracking-widest font-bold mb-6">
            CORE USER CONVERSION PATHWAY
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (step.action) step.action();
                    else if (step.view) onNavigate(step.view);
                  }}
                  className="p-5 rounded-2xl bg-[#0d121c] border border-slate-800/80 hover:border-green-500/50 hover:bg-[#111826] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono text-slate-500 font-bold group-hover:text-green-400 transition-colors">
                        STAGE {step.num}
                      </span>
                      <div className="p-2 rounded-xl bg-black/60 border border-slate-800 text-green-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400 group-hover:text-white">
                    <span>EXPLORE STAGE</span>
                    <ArrowRight className="w-3 h-3 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sitemap (Pages) Structured Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090c14] border border-[#1a2130]">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
            <div>
              <h3 className="text-lg font-bold text-white">Sitemap (Pages & Deep Anchors)</h3>
              <p className="text-xs text-slate-400 mt-0.5">Direct index of all system views, hardware specs, and research modules</p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-black/60 border border-slate-800 text-[10px] font-mono text-green-400">
              8 PRIMARY DESTINATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-xs">
            {sitemapGroups.map((group, idx) => (
              <div key={idx} className="space-y-2.5">
                <button
                  onClick={() => {
                    if (group.action) group.action();
                    else if (group.view) onNavigate(group.view);
                  }}
                  className="font-mono text-xs font-bold text-white uppercase tracking-wider hover:text-green-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span>{group.title}</span>
                </button>

                <ul className="space-y-1.5 pl-3 border-l border-slate-800">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <button
                        onClick={() => {
                          if (link.action) link.action();
                          else if (link.view) onNavigate(link.view);
                          else if (link.anchor) {
                            onNavigate('home');
                            setTimeout(() => {
                              const el = document.getElementById(link.anchor);
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 50);
                          }
                        }}
                        className="text-slate-400 hover:text-green-400 transition-colors text-left text-[11px] flex items-center gap-1 group py-0.5"
                      >
                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-green-400 transition-colors shrink-0" />
                        <span>{link.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}