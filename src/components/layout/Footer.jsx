import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Code2, Users, X, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setTimeout(() => setDone(false), 3000);
    setEmail('');
  };

  const cols = [
    {
      title: 'Energy Solutions',
      links: [
        { label: 'Overview & Architecture', to: '/energy-solutions' },
        { label: 'Off-Grid Solar Systems', to: '/energy-solutions#offgrid' },
        { label: 'Home Backup Systems', to: '/energy-solutions#backup' },
        { label: 'Custom LiFePO4 Packs', to: '/energy-solutions#battery' },
        { label: 'Besant Nagar Pilot', to: '/projects/besant-nagar-off-grid-system' },
      ],
    },
    {
      title: 'Power Stations',
      links: [
        { label: 'Power Station Lineup', to: '/power-stations' },
        { label: 'ADB Labs PS1 Platform', to: '/power-stations/adb-ps1', badge: '3kW' },
        { label: 'Technical Specifications', to: '/power-stations/adb-ps1#specs' },
        { label: 'CAD 3D Explorer', to: '/power-stations/adb-ps1#cad' },
        { label: 'Appliance Load Sizing', to: '/get-a-quote' },
      ],
    },
    {
      title: 'R&D & Engineering',
      links: [
        { label: 'Robotics & AI Division', to: '/robotics-rd' },
        { label: '6-Week Internship', to: '/internship' },
        { label: 'Engineering Projects', to: '/projects' },
        { label: 'About ADB Labs', to: '/about' },
        { label: 'Contact Engineering', to: '/contact' },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#050B0A] text-white pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A3FF35]/40 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#A3FF35]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand + contact */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#A3FF35] to-[#6DEB38] p-[1.5px] shadow-[0_0_15px_rgba(163,255,55,0.2)]">
                <div className="w-full h-full bg-[#050B0A] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-[#A3FF35] text-sm">ADB</span>
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-white block">ADB LABS</span>
                <span className="text-[9px] font-mono tracking-widest text-[#68776D] uppercase block -mt-1">ENERGY · ROBOTICS · R&D</span>
              </div>
            </Link>

            <p className="text-[#A3ADA5] text-sm leading-relaxed max-w-sm">
              Engineering and R&D initiative building practical energy, robotics and intelligent engineering
              solutions — moving ideas from research and design to real-world deployment.
            </p>

            <div className="space-y-2.5 text-xs text-[#A3ADA5]">
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#A3FF35] flex-shrink-0" /><span>Besant Nagar, Chennai, Tamil Nadu 600090, India</span></div>
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#A3FF35] flex-shrink-0" /><a href="tel:+918310704488" className="hover:text-white transition">+91 8310704488</a></div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#A3FF35] flex-shrink-0" /><a href="mailto:engineering@adblabs.in" className="hover:text-white transition">engineering@adblabs.in</a></div>
            </div>

            {/* Newsletter */}
            <form onSubmit={submit} className="pt-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#68776D] mb-2">Newsletter</div>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  id="footer-newsletter-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="flex-1 bg-[#101C17] border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-[#68776D] focus:outline-none focus:border-[#A3FF35]/40 transition"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full bg-[#A3FF35] text-black flex items-center justify-center hover:bg-[#8ee827] transition shadow-[0_0_15px_rgba(163,255,55,0.25)]"
                  aria-label="Subscribe"
                >
                  {done ? <CheckCircle2 className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
            </form>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: Code2, href: 'https://github.com' },
                { icon: Users, href: 'https://linkedin.com' },
                { icon: X, href: 'https://twitter.com' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#101C17] border border-white/10 flex items-center justify-center text-[#A3ADA5] hover:text-[#A3FF35] hover:border-[#A3FF35]/40 transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title} className="text-left space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">{col.title}</span>
              <ul className="space-y-2.5 text-xs text-[#A3ADA5]">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-white transition inline-flex items-center gap-1.5">
                      <span>{l.label}</span>
                      {l.badge && <span className="text-[9px] font-mono text-[#A3FF35] bg-[#A3FF35]/15 px-1.5 py-0.5 rounded">{l.badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68776D]">
          <div>© {new Date().getFullYear()} ADB LABS (Aurelius Dynamics Bengaluru &amp; Chennai R&D). All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-[#A3ADA5]">CINEMATIC INDUSTRIAL V3.0</span>
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Engineering</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
