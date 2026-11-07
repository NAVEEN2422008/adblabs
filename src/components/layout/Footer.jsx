import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050B0A] border-t border-white/10 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#A3FF35] to-[#6DEB38] p-[1.5px] shadow-[0_0_15px_rgba(163,255,55,0.2)]">
                <div className="w-full h-full bg-[#050B0A] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-[#A3FF35] text-sm tracking-tight">
                    ADB
                  </span>
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-white block">
                  ADB LABS
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#68776D] uppercase block -mt-1">
                  ENERGY · ROBOTICS · R&D
                </span>
              </div>
            </Link>

            <p className="text-[#A3ADA5] text-sm leading-relaxed max-w-sm">
              ADB LABS is an engineering and R&D initiative focused on building practical energy, robotics and intelligent engineering solutions, moving ideas from research and design to real-world deployment.
            </p>

            <div className="space-y-2.5 text-xs text-[#A3ADA5] pt-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                <span>Besant Nagar, Chennai, Tamil Nadu 600090, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                <a href="tel:+918310704488" className="hover:text-white transition">
                  +91 8310704488
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A3FF35] flex-shrink-0" />
                <a href="mailto:engineering@adblabs.in" className="hover:text-white transition">
                  engineering@adblabs.in
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="text-left space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
              Energy Solutions
            </span>
            <ul className="space-y-2.5 text-xs text-[#A3ADA5]">
              <li>
                <Link to="/energy-solutions" className="hover:text-white transition">
                  Overview & Architecture
                </Link>
              </li>
              <li>
                <Link to="/energy-solutions#offgrid" className="hover:text-white transition">
                  Off-Grid Solar Systems
                </Link>
              </li>
              <li>
                <Link to="/energy-solutions#backup" className="hover:text-white transition">
                  Home Backup Systems
                </Link>
              </li>
              <li>
                <Link to="/energy-solutions#battery" className="hover:text-white transition">
                  Custom LiFePO₄ Battery Packs
                </Link>
              </li>
              <li>
                <Link to="/projects/besant-nagar-off-grid-system" className="hover:text-white transition">
                  Besant Nagar Pilot Case Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Power Stations & Products */}
          <div className="text-left space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
              Power Stations
            </span>
            <ul className="space-y-2.5 text-xs text-[#A3ADA5]">
              <li>
                <Link to="/power-stations" className="hover:text-white transition">
                  Power Station Lineup
                </Link>
              </li>
              <li>
                <Link to="/power-stations/adb-ps1" className="text-white hover:text-[#A3FF35] transition font-semibold flex items-center gap-1.5">
                  <span>ADB Labs PS1 Platform</span>
                  <span className="text-[9px] font-mono text-[#A3FF35] bg-[#A3FF35]/15 px-1.5 py-0.5 rounded">3kW</span>
                </Link>
              </li>
              <li>
                <Link to="/power-stations/adb-ps1#specs" className="hover:text-white transition">
                  Technical Specifications
                </Link>
              </li>
              <li>
                <Link to="/power-stations/adb-ps1#cad" className="hover:text-white transition">
                  CAD Interactive 3D Explorer
                </Link>
              </li>
              <li>
                <Link to="/get-a-quote" className="hover:text-white transition">
                  Appliance Load Sizing
                </Link>
              </li>
            </ul>
          </div>

          {/* R&D, Internship & Company */}
          <div className="text-left space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
              R&D & Engineering
            </span>
            <ul className="space-y-2.5 text-xs text-[#A3ADA5]">
              <li>
                <Link to="/robotics-rd" className="hover:text-white transition">
                  Robotics & AI Division
                </Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-white transition">
                  6-Week Industrial Internship
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition">
                  Engineering Projects Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About ADB Labs & Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Engineering Team
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68776D]">
          <div>
            © {new Date().getFullYear()} ADB LABS (Aurelius Dynamics Bengaluru & Chennai R&D). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-[#A3ADA5]">
              CINEMATIC INDUSTRIAL V2.4
            </span>
            <Link to="/contact" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Terms of Engineering
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
