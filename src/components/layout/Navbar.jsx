import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Cpu, 
  FolderGit2, 
  GraduationCap, 
  Info, 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown 
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Energy Solutions', path: '/energy-solutions' },
    { label: 'Power Stations', path: '/power-stations' },
    { label: 'PS1 Station', path: '/power-stations/adb-ps1', highlight: true },
    { label: 'Projects', path: '/projects' },
    { label: 'Robotics & R&D', path: '/robotics-rd' },
    { label: 'Internship', path: '/internship' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050B0A]/85 backdrop-blur-2xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#A3FF35] to-[#6DEB38] p-[1.5px] shadow-[0_0_15px_rgba(163,255,55,0.2)]">
            <div className="w-full h-full bg-[#050B0A] rounded-[10px] flex items-center justify-center">
              <span className="font-heading font-extrabold text-[#A3FF35] text-sm tracking-tight">
                ADB
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-lg tracking-tight text-[#F5F7F2] group-hover:text-white transition">
                ADB LABS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35] animate-pulse"></span>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-[#68776D] uppercase -mt-1">
              ENERGY · ROBOTICS · R&D
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-[#A3ADA5]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition hover:text-white ${
                  isActive ? 'text-white font-bold' : ''
                } ${link.highlight ? 'text-[#A3FF35] font-semibold' : ''}`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="desktopNavUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#A3FF35] shadow-[0_0_8px_#A3FF35]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Get a Quote */}
        <div className="flex items-center gap-3">
          <Link
            to="/get-a-quote"
            className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-5 py-2.5 rounded-full transition shadow-[0_0_20px_rgba(163,255,55,0.25)] flex items-center gap-2 group font-heading"
          >
            <span>Start an Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#A3FF35]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Phone / Tablet) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 72px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden fixed top-18 left-0 right-0 bg-[#050B0A]/95 backdrop-blur-3xl border-b border-white/10 px-6 py-8 overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#68776D] mb-4 px-2">
                ADB LABS SYSTEM DIRECTORY
              </div>

              {[
                { label: 'Home', path: '/', icon: Zap },
                { label: 'Energy Solutions', path: '/energy-solutions', icon: Battery },
                { label: 'Power Stations', path: '/power-stations', icon: Zap },
                { label: 'ADB PS1 Product Page', path: '/power-stations/adb-ps1', icon: Zap, highlight: true },
                { label: 'Projects & Case Studies', path: '/projects', icon: FolderGit2 },
                { label: 'Besant Nagar Case Study', path: '/projects/besant-nagar-off-grid-system', icon: FolderGit2 },
                { label: 'Robotics & R&D', path: '/robotics-rd', icon: Cpu },
                { label: 'Robotics & AI Internship', path: '/internship', icon: GraduationCap },
                { label: 'About ADB Labs', path: '/about', icon: Info },
                { label: 'Contact', path: '/contact', icon: Phone },
                { label: 'Smart Enquiry System', path: '/get-a-quote', icon: ArrowRight, cta: true }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between p-3.5 rounded-2xl transition font-medium text-sm ${
                      isActive 
                        ? 'bg-[#101C17] text-[#A3FF35] font-bold border border-[#A3FF35]/30' 
                        : item.cta
                        ? 'bg-[#A3FF35] text-black font-extrabold mt-3'
                        : 'text-[#A3ADA5] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#A3FF35]' : item.cta ? 'text-black' : 'text-[#68776D]'}`} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF35]"></span>}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer Drawer Support */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <a
                href="tel:+918310704488"
                className="w-full bg-[#101C17] border border-white/10 text-white font-semibold text-xs py-3 rounded-full flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#A3FF35]" />
                <span>Call Engineering: +91 8310704488</span>
              </a>
              <div className="text-[10px] font-mono text-center text-[#68776D]">
                CHENNAI, TAMIL NADU · REAL-WORLD R&D
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
