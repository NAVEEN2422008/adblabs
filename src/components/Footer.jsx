import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ArrowUp, Globe } from 'lucide-react';
import { COMPANY_INFO, FOOTER_SITEMAP } from '../data/websiteData';

export default function Footer({ onNavigate, onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03050a] border-t border-[#161c2c] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Main Footer Grid matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-wider text-white uppercase">
                ADB LABS
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {COMPANY_INFO.aboutDescription}
            </p>

            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <span className="text-[11px] font-mono text-green-400">CONNECT:</span>
              <a href="#" className="hover:text-green-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-green-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-green-400 transition-colors">YouTube</a>
            </div>
          </div>

          {/* Col 2: Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider font-bold">Solutions</h4>
            <ul className="space-y-2">
              {FOOTER_SITEMAP.solutions.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-green-400 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: R&D & Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider font-bold">R&D</h4>
            <ul className="space-y-2 mb-4">
              {FOOTER_SITEMAP.rnd.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-green-400 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-mono text-xs uppercase tracking-wider font-bold pt-2">Programs</h4>
            <ul className="space-y-2">
              {FOOTER_SITEMAP.programs.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-green-400 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company (1.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider font-bold">Company</h4>
            <ul className="space-y-2">
              {FOOTER_SITEMAP.company.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-green-400 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Exact Contact Box from Mockup (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={onOpenQuote}
              className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-black bg-green-500 hover:bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="space-y-2.5 pt-1 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 truncate">
                <Mail className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching Mockup */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>{COMPANY_INFO.copyright}</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-green-400 transition-colors">Terms & Conditions</a>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-green-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
