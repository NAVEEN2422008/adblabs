import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Zap, Bot, Sun, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export default function Navbar({ activeView, setActiveView, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewId, anchorId) => {
    setMobileMenuOpen(false);
    if (activeView !== 'home' && viewId === 'home') {
      setActiveView('home');
      setTimeout(() => {
        if (anchorId) {
          const el = document.getElementById(anchorId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else if (activeView === 'home' && anchorId) {
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveView(viewId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080f]/95 backdrop-blur-md border-b border-[#1e2638] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#06080f]/90 via-[#06080f]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Exact Mockup Style */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-green-400 transition-colors uppercase">
              ADB LABS
            </span>
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span>
          </button>

          {/* Desktop Navigation Links matching Mockup */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => handleNavClick('solutions', 'solutions')}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 hover:bg-white/[0.04]"
            >
              <span>Energy Solutions</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            <button
              onClick={() => handleNavClick('ps1', 'ps1')}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 hover:bg-white/[0.04]"
            >
              <span>Power Stations</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            <button
              onClick={() => handleNavClick('besant', 'projects')}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors hover:bg-white/[0.04]"
            >
              Projects
            </button>

            <button
              onClick={() => handleNavClick('robotics', 'robotics')}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 hover:bg-white/[0.04]"
            >
              <span>Robotics R&D</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            <button
              onClick={() => handleNavClick('internship', 'internship')}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors hover:bg-white/[0.04]"
            >
              Internship
            </button>

            <button
              onClick={() => handleNavClick('about', 'about')}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-colors hover:bg-white/[0.04]"
            >
              About
            </button>
          </nav>

          {/* Right Button: "Get a Quote ->" (Exact Pill Styling from Mockup) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2 rounded-full text-xs font-bold text-white bg-transparent hover:bg-green-500/10 border border-green-500/80 hover:border-green-400 flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(34,197,94,0.15)] group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-green-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b16]/98 border-b border-[#1e2638] px-6 py-6 mt-3 space-y-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('solutions', 'solutions')}
              className="text-left text-sm font-medium text-slate-200 hover:text-green-400 py-2 border-b border-slate-800/60"
            >
              Energy Solutions
            </button>
            <button
              onClick={() => handleNavClick('ps1', 'ps1')}
              className="text-left text-sm font-medium text-slate-200 hover:text-green-400 py-2 border-b border-slate-800/60"
            >
              Power Stations (PS1)
            </button>
            <button
              onClick={() => handleNavClick('besant', 'projects')}
              className="text-left text-sm font-medium text-slate-200 hover:text-green-400 py-2 border-b border-slate-800/60"
            >
              Projects (Besant Nagar Off-Grid)
            </button>
            <button
              onClick={() => handleNavClick('robotics', 'robotics')}
              className="text-left text-sm font-medium text-slate-200 hover:text-green-400 py-2 border-b border-slate-800/60"
            >
              Robotics R&D
            </button>
            <button
              onClick={() => handleNavClick('internship', 'internship')}
              className="text-left text-sm font-medium text-slate-200 hover:text-green-400 py-2 border-b border-slate-800/60"
            >
              Industrial Internship
            </button>
            <button
              onClick={() => handleNavClick('about', 'about')}
              className="text-left text-sm font-medium text-slate-200 hover:text-green-400 py-2 border-b border-slate-800/60"
            >
              About ADB Labs
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 text-xs font-bold rounded-full text-black bg-green-500 hover:bg-green-400 flex items-center justify-center gap-2 shadow-lg"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
