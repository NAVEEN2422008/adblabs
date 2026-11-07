import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Cpu, 
  Bot, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Snowflake, 
  Coffee, 
  Tv, 
  Lightbulb, 
  Radio, 
  Activity, 
  Award, 
  Calendar, 
  X,
  Sun,
  Battery
} from 'lucide-react';
import './titan.css';

export default function AdbLabsTitanPage() {
  // Navigation & Sub-nav state
  const [activeNav, setActiveNav] = useState('overview');
  const [isSubNavSticky, setIsSubNavSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote'); // 'quote' | 'internship' | 'assessment'
  const [toastMessage, setToastMessage] = useState('');

  // Hardware Multi-angle switcher
  const [activeAngle, setActiveAngle] = useState('front');
  const [activeHotspot, setActiveHotspot] = useState(1);

  // Modular Battery Expansion Mode
  const [moduleMode, setModuleMode] = useState('single'); // 'single' (6.144 kWh) | 'dual' (12.288 kWh)

  // Interactive Runtime Calculator state
  const [calcPreset, setCalcPreset] = useState('fish_stall');
  const [customLoads, setCustomLoads] = useState({
    chiller: true,
    sign: true,
    led: true,
    blender: false,
    waffle: false,
    pos: true,
    ac: false
  });
  const [solarBoost, setSolarBoost] = useState(true);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState([0]); // first open by default

  // Robotics Terminal simulation state
  const [rosLogIdx, setRosLogIdx] = useState(0);

  // Form states
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    solution: 'Commercial Off-Grid (Shop Package)',
    notes: ''
  });

  const rosLogs = [
    "[INFO] [nav2_controller]: Tracking path trajectory with 0.02m cross-track error",
    "[INFO] [lidar_slam_toolbox]: 2D Occupancy grid published. 1420 points mapped",
    "[INFO] [can_bms_telemetry]: ADB Labs PS1 linked via CAN-bus. State of Charge: 82.4%",
    "[INFO] [perception_node]: Stereo depth camera detected obstacle at +1.84m [Clearing]",
    "[INFO] [stm32_motor_driver]: Quadruped trotting gait frequency: 1.8 Hz. Current draw nominal",
    "[INFO] [nav2_bt_navigator]: Waypoint #04 reached. Yaw stabilized at +34.2°"
  ];

  // Rotate ROS terminal logs
  useEffect(() => {
    const interval = setInterval(() => {
      setRosLogIdx(prev => (prev + 1) % rosLogs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [rosLogs.length]);

  // Scroll spy & sub-nav stickiness
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSubNavSticky(scrollY > 550);

      const sections = [
        'overview',
        'hardware',
        'packages',
        'calculator',
        'besant',
        'robotics',
        'internship',
        'specs',
        'faq'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4500);
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail && waitlistEmail.includes('@')) {
      showToast(`Thank you! Priority pilot updates sent to ${waitlistEmail}`);
      setWaitlistEmail('');
    } else {
      showToast('Please enter a valid email address.');
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setIsQuoteModalOpen(false);
    showToast(`Thank you ${quoteForm.name}! An ADB Labs energy specialist will contact you.`);
    setQuoteForm({ name: '', phone: '', email: '', solution: 'Commercial Off-Grid (Shop Package)', notes: '' });
  };

  // Calculator Power Computations
  const getCalculatedWattage = () => {
    let total = 0;
    if (customLoads.chiller) total += 280;
    if (customLoads.sign) total += 150;
    if (customLoads.led) total += 80;
    if (customLoads.blender) total += 600;
    if (customLoads.waffle) total += 1000;
    if (customLoads.pos) total += 40;
    if (customLoads.ac) total += 1200;
    return Math.max(total, 60);
  };

  const activeWatts = getCalculatedWattage();
  const singleCapacityWh = 6144 * 0.90; // 90% usable DoD
  const dualCapacityWh = 12288 * 0.90;

  const singleHours = (singleCapacityWh / activeWatts).toFixed(1);
  const dualHours = (dualCapacityWh / activeWatts).toFixed(1);

  const solarGenerationW = solarBoost ? (moduleMode === 'single' ? 1440 * 0.75 : 2880 * 0.75) : 0;

  return (
    <div className="Titan-Page bg-black text-white min-h-screen selection:bg-emerald-500 selection:text-black font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[99999] bg-[#0c1017] border border-emerald-500/80 text-white px-6 py-3.5 rounded-full font-medium shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center gap-3 transition-all animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Global Notification Bar */}
      <div className="glo-bar-top bg-[#080b11] border-b border-neutral-800 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
          Pilot Announcement
        </span>
        <span className="text-neutral-300">
          Commercial Off-Grid Pilot Deployments Now Accepting Registrations in Chennai & Tamil Nadu.
        </span>
        <button 
          onClick={() => { setModalType('assessment'); setIsQuoteModalOpen(true); }}
          className="text-emerald-400 underline hover:text-emerald-300 ml-1 font-semibold"
        >
          Book Free Energy Audit →
        </button>
      </div>

      {/* Global Navigation Header */}
      <header className="global-header sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-neutral-800/80 transition-all">
        <div className="max-w-[1440px] mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('overview')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center p-0.5 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-lg">
                  ADB
                </span>
              </div>
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-white flex items-center gap-1.5">
                ADB LABS
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
              <span className="block text-[10px] tracking-widest text-neutral-400 uppercase font-mono -mt-1">
                Engineering & R&D
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <button onClick={() => scrollToSection('hardware')} className="hover:text-emerald-400 transition">
              PS1 Power Station
            </button>
            <button onClick={() => scrollToSection('packages')} className="hover:text-emerald-400 transition">
              Commercial Systems
            </button>
            <button onClick={() => scrollToSection('calculator')} className="hover:text-emerald-400 transition">
              Runtime Calculator
            </button>
            <button onClick={() => scrollToSection('besant')} className="hover:text-emerald-400 transition">
              Besant Nagar Project
            </button>
            <button onClick={() => scrollToSection('robotics')} className="hover:text-emerald-400 transition">
              Robotics & AI
            </button>
            <button onClick={() => scrollToSection('internship')} className="hover:text-emerald-400 transition">
              Internship
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-400 transition">
              FAQ
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setModalType('quote'); setIsQuoteModalOpen(true); }}
              className="bg-white hover:bg-neutral-200 text-black font-semibold text-xs px-5 py-2.5 rounded-full transition shadow-lg flex items-center gap-2 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-neutral-400 hover:text-white p-2"
              aria-label="Toggle Navigation"
            >
              <Sliders className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-5 space-y-4 text-sm font-medium">
            <button onClick={() => { scrollToSection('hardware'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-200 hover:text-emerald-400 py-1">
              PS1 Power Station
            </button>
            <button onClick={() => { scrollToSection('packages'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-200 hover:text-emerald-400 py-1">
              Commercial Packages
            </button>
            <button onClick={() => { scrollToSection('calculator'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-200 hover:text-emerald-400 py-1">
              Runtime Calculator
            </button>
            <button onClick={() => { scrollToSection('besant'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-200 hover:text-emerald-400 py-1">
              Besant Nagar Project
            </button>
            <button onClick={() => { scrollToSection('robotics'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-200 hover:text-emerald-400 py-1">
              Robotics & AI Division
            </button>
            <button onClick={() => { scrollToSection('internship'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-200 hover:text-emerald-400 py-1">
              6-Week Industrial Internship
            </button>
            <button onClick={() => { scrollToSection('faq'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-200 hover:text-emerald-400 py-1">
              Technical FAQ
            </button>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO (Titan-C1 Replica) */}
      <section id="overview" className="Titan-C1 relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto text-center">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>ENERGY · ROBOTICS · EMBEDDED SYSTEMS · R&D</span>
          </div>

          {/* Titan Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.08] text-white">
            Engineering Real-World Solutions.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 mt-2">
              ADB Labs PS1 Power Station.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-400 text-lg sm:text-xl max-w-3xl mx-auto mt-6 font-normal leading-relaxed">
            Building practical technology through research, engineering, prototyping, and real-world experimentation. Modular 6.144 kWh LiFePO₄ storage, 3kW pure sine surge, and autonomous robotics.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button 
              onClick={() => scrollToSection('hardware')}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_30px_rgba(34,197,94,0.3)] flex items-center gap-2"
            >
              <span>Explore PS1 Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => { setModalType('quote'); setIsQuoteModalOpen(true); }}
              className="bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-semibold text-sm px-8 py-3.5 rounded-full transition flex items-center gap-2"
            >
              <span>Request System Quote</span>
            </button>
          </div>

          {/* Studio Hardware Graphic Display */}
          <div className="relative mt-12 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-black p-4 sm:p-8 shadow-2xl">
            <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Main Product Render */}
            <div className="relative aspect-[16/9] w-full flex items-center justify-center">
              <img 
                src="/images/ps1_titan_studio.jpg"
                alt="ADB Labs PS1 Power Station Flagship Hardware"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
              />

              {/* Development status badge */}
              <div className="absolute top-4 left-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                In Development · Engineering Phase
              </div>
            </div>

            {/* Hardware Key Specs Banner (Titan-C1 Key Metrics) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-neutral-800/80 text-left">
              <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
                <div className="text-neutral-500 text-xs font-mono uppercase">Core Chemistry</div>
                <div className="text-2xl font-bold text-white mt-1">6.144 kWh</div>
                <div className="text-xs text-emerald-400 mt-1 font-mono">LiFePO₄ Automotive Grade</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
                <div className="text-neutral-500 text-xs font-mono uppercase">Inverter Output</div>
                <div className="text-2xl font-bold text-white mt-1">3 kW Target</div>
                <div className="text-xs text-neutral-400 mt-1 font-mono">Pure Sine · 6kW Surge</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
                <div className="text-neutral-500 text-xs font-mono uppercase">Solar Charging</div>
                <div className="text-2xl font-bold text-white mt-1">Up to 2.88 kWp</div>
                <div className="text-xs text-cyan-400 mt-1 font-mono">Dual MPPT Regulated</div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
                <div className="text-neutral-500 text-xs font-mono uppercase">Expansion Bus</div>
                <div className="text-2xl font-bold text-white mt-1">12.288 kWh</div>
                <div className="text-xs text-emerald-400 mt-1 font-mono">Plug & Play Secondary Pack</div>
              </div>
            </div>
          </div>

          {/* 4 Core Value Pillars (from Brochure) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-left hover:border-emerald-500/50 transition">
              <Zap className="w-6 h-6 text-emerald-400 mb-3" />
              <h2 className="font-bold text-base text-white">Power Solutions</h2>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                Reliable, scalable LiFePO₄ storage and solar generation for commercial off-grid sites.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-left hover:border-cyan-500/50 transition">
              <Bot className="w-6 h-6 text-cyan-400 mb-3" />
              <h2 className="font-bold text-base text-white">Robotics R&D</h2>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                Intelligent robotic systems, ROS 2 autonomous navigation, and depth perception.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-left hover:border-emerald-500/50 transition">
              <Cpu className="w-6 h-6 text-emerald-400 mb-3" />
              <h2 className="font-bold text-base text-white">Product Development</h2>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                End-to-end hardware prototyping, CAN-bus BMS firmware, and thermal enclosures.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-left hover:border-cyan-500/50 transition">
              <Sparkles className="w-6 h-6 text-cyan-400 mb-3" />
              <h2 className="font-bold text-base text-white">Internship Program</h2>
              <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                6-Week simulation-first industrial curriculum with 18 live mentor-led sessions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: STICKY SUB-NAV (Titan-C2 Replica) */}
      <div 
        id="subnav" 
        className={`Titan-C2 transition-all duration-300 z-40 bg-black/95 backdrop-blur-xl border-y border-neutral-800 ${
          isSubNavSticky ? 'sticky top-18 shadow-2xl' : 'relative'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-15 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap text-neutral-400">
            <button 
              onClick={() => scrollToSection('overview')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'overview' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('hardware')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'hardware' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              PS1 Hardware
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'packages' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              Shop Packages
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'calculator' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              Autonomy Calculator
            </button>
            <button 
              onClick={() => scrollToSection('besant')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'besant' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              Besant Nagar Pilot
            </button>
            <button 
              onClick={() => scrollToSection('robotics')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'robotics' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              Robotics R&D
            </button>
            <button 
              onClick={() => scrollToSection('internship')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'internship' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              Internship
            </button>
            <button 
              onClick={() => scrollToSection('specs')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'specs' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              Specs
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`hover:text-white transition py-4 border-b-2 ${activeNav === 'faq' ? 'text-white border-emerald-400' : 'border-transparent'}`}
            >
              FAQ
            </button>
          </div>

          <button
            onClick={() => { setModalType('quote'); setIsQuoteModalOpen(true); }}
            className="hidden sm:inline-flex bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs px-5 py-2 rounded-full transition whitespace-nowrap ml-4"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* SECTION 3: PS1 HARDWARE ARCHITECTURE (Titan-C3 Replica) */}
      <section id="hardware" className="Titan-C3 py-24 px-6 border-b border-neutral-800/80 relative">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Modular Subsystem Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Power Almost Everything.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4">
              Engineered with automotive LiFePO₄ prismatic cells, 3kW continuous pure sine inverter, dual MPPT solar controllers, and rugged caster mobility.
            </p>
          </div>

          {/* Interactive Multi-angle Hardware Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950 rounded-3xl border border-neutral-800/80 p-6 sm:p-10">
            
            {/* Visual Display with Hotspots */}
            <div className="lg:col-span-8 relative flex flex-col items-center justify-center min-h-[420px] bg-black/60 rounded-2xl border border-neutral-800 p-6">
              
              {/* Product View Display */}
              <div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center">
                <img 
                  src={
                    activeAngle === 'front' ? '/images/ps1_titan_studio.jpg' :
                    activeAngle === 'rear' ? '/images/ps1_studio_render.jpg' :
                    activeAngle === 'side' ? '/images/sol_ps1.png' :
                    '/images/ps1_hero.jpg'
                  }
                  alt={`ADB Labs PS1 - ${activeAngle} view`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
                />

                {/* Hotspot 1: Inverter */}
                <button 
                  onClick={() => setActiveHotspot(1)}
                  className={`absolute top-[28%] left-[25%] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition shadow-lg ${
                    activeHotspot === 1 ? 'bg-emerald-400 text-black scale-125 ring-4 ring-emerald-500/30' : 'bg-neutral-800 text-white hover:bg-neutral-700'
                  }`}
                >
                  1
                </button>

                {/* Hotspot 2: LiFePO4 Core */}
                <button 
                  onClick={() => setActiveHotspot(2)}
                  className={`absolute top-[52%] left-[48%] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition shadow-lg ${
                    activeHotspot === 2 ? 'bg-emerald-400 text-black scale-125 ring-4 ring-emerald-500/30' : 'bg-neutral-800 text-white hover:bg-neutral-700'
                  }`}
                >
                  2
                </button>

                {/* Hotspot 3: MPPT Solar */}
                <button 
                  onClick={() => setActiveHotspot(3)}
                  className={`absolute top-[32%] right-[24%] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition shadow-lg ${
                    activeHotspot === 3 ? 'bg-emerald-400 text-black scale-125 ring-4 ring-emerald-500/30' : 'bg-neutral-800 text-white hover:bg-neutral-700'
                  }`}
                >
                  3
                </button>

                {/* Hotspot 4: Expansion Bus */}
                <button 
                  onClick={() => setActiveHotspot(4)}
                  className={`absolute bottom-[18%] right-[32%] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition shadow-lg ${
                    activeHotspot === 4 ? 'bg-emerald-400 text-black scale-125 ring-4 ring-emerald-500/30' : 'bg-neutral-800 text-white hover:bg-neutral-700'
                  }`}
                >
                  4
                </button>
              </div>

              {/* Multi-angle Selector Pills */}
              <div className="flex items-center gap-2 mt-6 bg-neutral-900 border border-neutral-800 p-1 rounded-full">
                {['front', 'rear', 'side', 'top'].map((angle) => (
                  <button
                    key={angle}
                    onClick={() => setActiveAngle(angle)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase transition ${
                      activeAngle === angle ? 'bg-white text-black font-bold shadow' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {angle} View
                  </button>
                ))}
              </div>
            </div>

            {/* Hotspot Deep-Dive Information Card */}
            <div className="lg:col-span-4 space-y-4">
              <div className={`p-6 rounded-2xl border transition-all ${activeHotspot === 1 ? 'bg-emerald-950/20 border-emerald-500/60' : 'bg-neutral-900/60 border-neutral-800'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Subsystem 01</span>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-mono">3000W Target</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">Pure Sine Inverter & Surge Power</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  High-surge bidirectional inverter engineered to easily absorb inductive inrush surges from commercial blenders, waffle irons, deep chillers, and power tools.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border transition-all ${activeHotspot === 2 ? 'bg-emerald-950/20 border-emerald-500/60' : 'bg-neutral-900/60 border-neutral-800'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Subsystem 02</span>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-mono">6.144 kWh Core</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">Automotive LiFePO₄ & Active BMS</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  3,500+ lifecycle prismatic chemistry safe for tropical temperatures. Integrated CAN-bus active cell balancing and multi-sensor thermal cutoffs.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border transition-all ${activeHotspot === 3 ? 'bg-emerald-950/20 border-emerald-500/60' : 'bg-neutral-900/60 border-neutral-800'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Subsystem 03</span>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-mono">420W - 2880W</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">Dual MPPT Solar Controllers</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Wide 12V–150V MPPT tracking accepting standard 720W bifacial high-efficiency panels for rapid replenishment during beach and stall operating hours.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border transition-all ${activeHotspot === 4 ? 'bg-emerald-950/20 border-emerald-500/60' : 'bg-neutral-900/60 border-neutral-800'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Subsystem 04</span>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-mono">Quick-Connect</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">Modular Expansion Bus</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Heavy-duty direct DC coupling port allowing an additional 6.144 kWh secondary module to double capacity to 12.288 kWh without rewiring or extra inverters.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: PRIORITY PILOT WAITLIST BANNER (Titan-C5 Replica) */}
      <section className="Titan-C5 py-16 px-6 bg-gradient-to-r from-neutral-950 via-[#0a111a] to-neutral-950 border-b border-neutral-800/80">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-neutral-900/40 border border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Early Adopter Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
              Join the Commercial Pilot Waitlist.
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mt-2">
              Commercial small-business owners and research partners: register for pilot allocation, field trial updates, and priority hardware delivery in Chennai.
            </p>
          </div>

          <form onSubmit={handleWaitlistSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3 min-w-[320px]">
            <input 
              type="email"
              required
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-neutral-950 border border-neutral-700 px-5 py-3 rounded-full text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-400 flex-grow"
            />
            <button 
              type="submit"
              className="bg-white hover:bg-neutral-200 text-black font-bold text-sm px-7 py-3 rounded-full transition whitespace-nowrap"
            >
              Pre-Register
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 5: COMMERCIAL PACKAGES CATALOG (Titan-C25 Replica) */}
      <section id="packages" className="Titan-C25 py-24 px-6 border-b border-neutral-800/80">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Standardized Deployments
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Commercial Small-Business Packages.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4">
              Pre-configured, field-tested off-grid packages designed to replace noisy diesel generators for retail stalls, kiosks, and food service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Package 1: Shop 1 Standard System */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Configuration A</span>
                  <span className="text-xs bg-neutral-800 text-neutral-200 px-3 py-1 rounded-full font-mono">1.44 kWp Solar</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-3">Shop 1 Standard System</h3>
                <p className="text-neutral-400 text-sm mt-2">
                  Optimized for small food kiosks, beverage counters, and night stalls with moderate continuous loads.
                </p>

                <div className="my-6 aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-neutral-800 flex items-center justify-center p-4">
                  <img src="/images/sol_solar.png" alt="Shop 1 Standard Package" className="max-h-full object-contain" />
                </div>

                <div className="space-y-3 border-t border-neutral-800 pt-6 text-sm">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>1x ADB Labs PS1</strong> (6.144 kWh LiFePO₄ nominal)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>2x 720 W Bifacial Panels</strong> (1.44 kWp total array)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>3 kW Pure Sine Inverter & Surge Protection</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Stall Mounting Hardware & Weatherproof Cabling</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-500 font-mono block">Pricing status</span>
                  <span className="text-base font-bold text-white">Commercial Quote</span>
                </div>
                <button 
                  onClick={() => {
                    setQuoteForm(prev => ({ ...prev, solution: 'Shop 1 Standard Package (6.144 kWh)' }));
                    setModalType('quote');
                    setIsQuoteModalOpen(true);
                  }}
                  className="bg-white hover:bg-neutral-200 text-black font-bold text-xs px-6 py-2.5 rounded-full transition"
                >
                  Enquire Package
                </button>
              </div>
            </div>

            {/* Package 2: Shop 2 Expanded Heavy-Duty System */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-emerald-500/50 hover:border-emerald-400 transition flex flex-col justify-between shadow-[0_0_30px_rgba(34,197,94,0.1)] relative">
              <div className="absolute -top-3.5 right-8 bg-emerald-500 text-black font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow">
                Recommended for Beach & Fish Stalls
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">Configuration B</span>
                  <span className="text-xs bg-emerald-950/80 border border-emerald-800 text-emerald-300 px-3 py-1 rounded-full font-mono">2.88 kWp Solar</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-3">Shop 2 Expanded Heavy-Duty</h3>
                <p className="text-neutral-400 text-sm mt-2">
                  Full multi-day autonomy for heavy continuous cooling loads, deep chillers, and large illuminated retail signs.
                </p>

                <div className="my-6 aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-neutral-800 flex items-center justify-center p-4">
                  <img src="/images/besant_wide.png" alt="Shop 2 Expanded Package" className="max-h-full object-contain" />
                </div>

                <div className="space-y-3 border-t border-neutral-800 pt-6 text-sm">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>1x ADB Labs PS1 Main Unit</strong> (6.144 kWh nominal)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>1x Secondary Battery Module</strong> (+6.144 kWh = 12.288 kWh)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>4x 720 W Bifacial Panels</strong> (2.88 kWp array)</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct DC Quick-Connect Harness & Roof Mounting Kits</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-500 font-mono block">Pricing status</span>
                  <span className="text-base font-bold text-emerald-400">Validated Pilot Tier</span>
                </div>
                <button 
                  onClick={() => {
                    setQuoteForm(prev => ({ ...prev, solution: 'Shop 2 Expanded Heavy-Duty Package (12.288 kWh)' }));
                    setModalType('quote');
                    setIsQuoteModalOpen(true);
                  }}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs px-6 py-2.5 rounded-full transition shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  Enquire Package
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE AUTONOMY & RUNTIME CALCULATOR (Titan-C8 Replica) */}
      <section id="calculator" className="Titan-C8 py-24 px-6 border-b border-neutral-800/80 bg-neutral-950/40">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Dynamic Energy Sizing
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Interactive Autonomy Calculator.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4">
              Toggle specific appliance loads or select commercial stall presets to compare autonomy between a Single PS1 and the Expanded Dual-Module Stack.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-neutral-950 rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl">
            
            {/* Scenario Preset Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <button
                onClick={() => {
                  setCalcPreset('fish_stall');
                  setCustomLoads({ chiller: true, sign: true, led: true, blender: false, waffle: false, pos: true, ac: false });
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${
                  calcPreset === 'fish_stall' ? 'bg-emerald-500 text-black font-bold shadow' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                🐟 Besant Nagar Fish Stall
              </button>

              <button
                onClick={() => {
                  setCalcPreset('kiosk');
                  setCustomLoads({ chiller: false, sign: true, led: true, blender: true, waffle: true, pos: true, ac: false });
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${
                  calcPreset === 'kiosk' ? 'bg-emerald-500 text-black font-bold shadow' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                ☕ Juice & Waffle Kiosk
              </button>

              <button
                onClick={() => {
                  setCalcPreset('home');
                  setCustomLoads({ chiller: false, sign: false, led: true, blender: false, waffle: false, pos: false, ac: true });
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${
                  calcPreset === 'home' ? 'bg-emerald-500 text-black font-bold shadow' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                🏠 Home Essential Backup (AC + Lights)
              </button>
            </div>

            {/* Appliance Toggle Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              <button
                onClick={() => setCustomLoads(p => ({ ...p, chiller: !p.chiller }))}
                className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.chiller ? 'bg-emerald-950/40 border-emerald-500 text-white' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'
                }`}
              >
                <Snowflake className="w-5 h-5" />
                <span className="text-xs font-bold">Chiller (280W)</span>
                <span className="text-[10px] font-mono">{customLoads.chiller ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, sign: !p.sign }))}
                className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.sign ? 'bg-emerald-950/40 border-emerald-500 text-white' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'
                }`}
              >
                <Radio className="w-5 h-5" />
                <span className="text-xs font-bold">Sign (150W)</span>
                <span className="text-[10px] font-mono">{customLoads.sign ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, led: !p.led }))}
                className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.led ? 'bg-emerald-950/40 border-emerald-500 text-white' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'
                }`}
              >
                <Lightbulb className="w-5 h-5" />
                <span className="text-xs font-bold">LEDs (80W)</span>
                <span className="text-[10px] font-mono">{customLoads.led ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, blender: !p.blender }))}
                className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.blender ? 'bg-emerald-950/40 border-emerald-500 text-white' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'
                }`}
              >
                <Zap className="w-5 h-5" />
                <span className="text-xs font-bold">Blender (600W)</span>
                <span className="text-[10px] font-mono">{customLoads.blender ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, waffle: !p.waffle }))}
                className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.waffle ? 'bg-emerald-950/40 border-emerald-500 text-white' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'
                }`}
              >
                <Coffee className="w-5 h-5" />
                <span className="text-xs font-bold">Waffle (1kW)</span>
                <span className="text-[10px] font-mono">{customLoads.waffle ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, pos: !p.pos }))}
                className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.pos ? 'bg-emerald-950/40 border-emerald-500 text-white' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'
                }`}
              >
                <Tv className="w-5 h-5" />
                <span className="text-xs font-bold">POS (40W)</span>
                <span className="text-[10px] font-mono">{customLoads.pos ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, ac: !p.ac }))}
                className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.ac ? 'bg-emerald-950/40 border-emerald-500 text-white' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'
                }`}
              >
                <Activity className="w-5 h-5" />
                <span className="text-xs font-bold">AC (1.2kW)</span>
                <span className="text-[10px] font-mono">{customLoads.ac ? 'ACTIVE' : 'OFF'}</span>
              </button>
            </div>

            {/* Solar Generation & Stack Options */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 mb-6">
              <div className="flex items-center gap-3">
                <Sun className={`w-5 h-5 ${solarBoost ? 'text-amber-400 animate-spin [animation-duration:12s]' : 'text-neutral-500'}`} />
                <div>
                  <div className="text-xs font-bold text-white">Solar Generation Buffer</div>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    {solarBoost ? `Active: +${solarGenerationW.toFixed(0)}W effective tropical irradiance` : 'Night / Off-Peak (Battery Only)'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSolarBoost(!solarBoost)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition ${
                    solarBoost ? 'bg-amber-400 text-black font-bold shadow' : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {solarBoost ? 'Solar Active [ON]' : 'Solar Off [Night]'}
                </button>
                <button
                  onClick={() => setModuleMode(moduleMode === 'single' ? 'dual' : 'single')}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition flex items-center gap-1.5 ${
                    moduleMode === 'dual' ? 'bg-emerald-400 text-black font-bold shadow' : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Battery className="w-3.5 h-3.5" />
                  <span>{moduleMode === 'dual' ? 'Dual Stack (12.288 kWh)' : 'Single Unit (6.144 kWh)'}</span>
                </button>
              </div>
            </div>

            {/* Results Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/80 rounded-2xl p-6 border border-neutral-800">
              
              {/* Option A: Single PS1 Module */}
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
                <span className="text-xs font-mono uppercase text-neutral-400">Single PS1 Module</span>
                <div className="text-3xl font-extrabold text-white mt-2">6.144 kWh</div>
                <div className="text-sm font-semibold text-neutral-400 mt-1">Continuous Active Load: {activeWatts}W</div>
                
                <div className="mt-6 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="text-3xl font-mono font-bold text-emerald-400">{singleHours} Hours</div>
                  <div className="text-xs text-neutral-400 mt-1">Standalone Battery Autonomy</div>
                </div>

                <div className="text-xs text-neutral-500 mt-4">
                  +1.44 kWp Solar Array: Continuous daytime operation with surplus charging
                </div>
              </div>

              {/* Option B: Dual-Stacked Module */}
              <div className="p-6 rounded-2xl bg-neutral-950 border border-emerald-500/60 text-center shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                <div className="inline-block bg-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold mb-1">
                  Full Commercial Autonomy ★
                </div>
                <div className="text-3xl font-extrabold text-emerald-400 mt-1">12.288 kWh Stack</div>
                <div className="text-sm font-semibold text-neutral-400 mt-1">Continuous Active Load: {activeWatts}W</div>

                <div className="mt-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/50">
                  <div className="text-3xl font-mono font-bold text-emerald-300">{dualHours} Hours</div>
                  <div className="text-xs text-emerald-400 mt-1">Over 2 Full Days of Night Stall Running</div>
                </div>

                <div className="text-xs text-emerald-400/80 mt-4">
                  +2.88 kWp Solar Array: Infinite off-grid autonomy during tropical sunshine
                </div>
              </div>

            </div>

            {/* Engineering Note on calculations */}
            <p className="text-xs text-neutral-500 font-mono text-center mt-6">
              *Calculations are based on 90% usable DoD and typical continuous draw. As stated in engineering documentation, customer loads must undergo on-site audit before final battery sizing.
            </p>

          </div>
        </div>
      </section>

      {/* SECTION 7: BESANT NAGAR FIELD PILOT (Featured Project Deep-Dive) */}
      <section id="besant" className="py-24 px-6 border-b border-neutral-800/80 relative">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-xs text-emerald-300 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>FIELD PILOT CASE STUDY · CHENNAI, INDIA</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Besant Nagar Beach Off-Grid System.
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed">
                A commercial off-grid solar and energy storage installation deployed for a retail fish stall on the Besant Nagar coastline. Replaces loud, polluting diesel generators with a silent, zero-emission 12.288 kWh LiFePO₄ storage solution.
              </p>

              {/* Project Specs Table (from Brochure) */}
              <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-6 space-y-3 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-neutral-500">APPLICATION</span>
                  <span className="text-white font-bold">Food / Fish Stall (Commercial Retail)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-neutral-500">POWER SYSTEM</span>
                  <span className="text-emerald-400 font-bold">1x ADB Labs PS1 Power Station</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-neutral-500">BATTERY CAPACITY</span>
                  <span className="text-white font-bold">12.288 kWh (6.144 kWh Main + 6.144 kWh Extra)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-neutral-500">SOLAR ARRAY</span>
                  <span className="text-cyan-400 font-bold">2.88 kWp (4x 720 W Bifacial Panels)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-neutral-500">KEY LOADS</span>
                  <span className="text-white font-bold">Deep Chiller, Night Signs, Stall Lighting</span>
                </div>
              </div>

              {/* Economic Savings Metric */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-emerald-400">Estimated Diesel Fuel Savings</div>
                  <div className="text-2xl font-bold text-white mt-0.5">₹12,000 – ₹15,000 / month</div>
                </div>
                <span className="text-xs text-neutral-400 font-mono">14 Month Payback</span>
              </div>
            </div>

            {/* Project Imagery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 relative group">
                <img 
                  src="/images/besant_wide.png" 
                  alt="Besant Nagar Commercial Solar Setup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800 text-xs">
                  <span className="font-bold text-white block">Daytime Solar Harvesting (2.88 kWp)</span>
                  <span className="text-neutral-400">Captures intense coastal irradiation to power live chiller cooling and store night reserve.</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                  <img src="/images/fish_stall_night.jpg" alt="Night Stall Lighting" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                  <img src="/images/besant_detail_night.png" alt="Silent LiFePO4 Inverter" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: ROBOTICS & AI R&D DIVISION */}
      <section id="robotics" className="py-24 px-6 border-b border-neutral-800/80 bg-neutral-950/60 relative">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Autonomous Systems & Intelligence
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Robotics & AI R&D Division.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4">
              Advancing practical autonomous mobile robots, computer vision perception, embedded STM32/CAN firmware, and kinematic simulation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Live Terminal & Simulation Preview */}
            <div className="lg:col-span-7 bg-black rounded-3xl border border-neutral-800 p-6 sm:p-8 font-mono text-xs">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-neutral-400 ml-2">adb_robotics@ros2_jazzy_node: ~</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1.5 text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  TELEMETRY LIVE
                </span>
              </div>

              {/* Terminal Screen & Animated Radar Sweep */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                
                {/* Radar Sweep Graphic */}
                <div className="relative aspect-square rounded-full border border-cyan-500/30 bg-cyan-950/10 flex items-center justify-center p-4">
                  <div className="absolute inset-4 rounded-full border border-cyan-500/20"></div>
                  <div className="absolute inset-10 rounded-full border border-cyan-500/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
                  
                  {/* Rotating beam */}
                  <div className="absolute inset-0 rounded-full animate-spin [animation-duration:4s] border-t-2 border-cyan-400/80 pointer-events-none"></div>

                  <span className="absolute bottom-3 text-[10px] text-cyan-400/70 font-mono">
                    3D LiDAR SLAM · Active
                  </span>
                </div>

                {/* Live Console Output */}
                <div className="space-y-3 font-mono text-[11px] text-neutral-300">
                  <div className="text-emerald-400 font-bold">$ ros2 run adb_navigation2 slam_cartographer</div>
                  <div className="text-neutral-400">[INFO] Node initialized at 50 Hz</div>
                  <div className="text-cyan-300 bg-neutral-900/80 p-2.5 rounded-lg border border-neutral-800">
                    {rosLogs[rosLogIdx]}
                  </div>
                  <div className="text-neutral-500 text-[10px]">
                    Depth Camera: RealSense D435i · IMU: BNO085 9-DoF · Odom: 4-Wheel Hall
                  </div>
                </div>

              </div>

              {/* Robot Preview Images */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-800">
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center">
                  <img src="/images/robot_dog_titan.jpg" alt="Autonomous Quadruped Robot" className="max-h-full object-contain" />
                </div>
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center">
                  <img src="/images/robotic_arm_titan.jpg" alt="6-Axis Precision Manipulator" className="max-h-full object-contain" />
                </div>
              </div>

            </div>

            {/* 4 R&D Capability Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="text-xs font-mono text-cyan-400 uppercase font-bold">Pillar 01</div>
                <h3 className="text-lg font-bold text-white mt-1">Robotics Systems & Kinematics</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Mathematical modeling, inverse kinematics, quadruped trotting stabilization, and Gazebo physics simulation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="text-xs font-mono text-cyan-400 uppercase font-bold">Pillar 02</div>
                <h3 className="text-lg font-bold text-white mt-1">AI & Computer Vision Integration</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Real-time edge perception with YOLO, point-cloud segmentation, obstacle detection, and camera-LiDAR sensor fusion.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="text-xs font-mono text-cyan-400 uppercase font-bold">Pillar 03</div>
                <h3 className="text-lg font-bold text-white mt-1">Embedded Systems & CAN Firmware</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Low-latency STM32 microcontrollers, CAN-bus inter-module communication, real-time BMS monitors, and brushless motor drivers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="text-xs font-mono text-cyan-400 uppercase font-bold">Pillar 04</div>
                <h3 className="text-lg font-bold text-white mt-1">Rapid Additive Prototyping</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  Carbon-fiber reinforced 3D printed mechanical structures, CNC aluminum joints, and fast iterative hardware testing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: ROBOTICS & AI INDUSTRIAL INTERNSHIP (6-Week Program) */}
      <section id="internship" className="py-24 px-6 border-b border-neutral-800/80">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Engineering Talent Incubator
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Robotics & AI Industrial Internship.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4">
              A 6-week, project-based industrial internship with live mentorship and a simulated autonomous robot capstone. Learn simulation-first without requiring expensive physical hardware.
            </p>
          </div>

          {/* Program Highlights Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <Calendar className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">6 Weeks</div>
              <div className="text-xs text-neutral-400 mt-1 font-mono">Structured Duration</div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <Activity className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">18 Sessions</div>
              <div className="text-xs text-neutral-400 mt-1 font-mono">Live Mentor-Led</div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <Award className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1 Capstone</div>
              <div className="text-xs text-neutral-400 mt-1 font-mono">Autonomous Navigation</div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <Bot className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">All Disciplines</div>
              <div className="text-xs text-neutral-400 mt-1 font-mono">CSE, AI/ML, ECE, EEE, Mech</div>
            </div>
          </div>

          {/* 6-Week Learning Roadmap Cards */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 transition">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Week 01</span>
              <h3 className="text-lg font-bold text-white mt-1">Robotics Foundations</h3>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Robot anatomy, degrees of freedom, coordinate reference frames, sensors, Linux command-line, and Python for engineers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 transition">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Week 02</span>
              <h3 className="text-lg font-bold text-white mt-1">ROS 2 & Robot Modeling</h3>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Nodes, topics, services, actions, URDF robot modeling, sensor publishing, and Gazebo world physics setup.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 transition">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Week 03</span>
              <h3 className="text-lg font-bold text-white mt-1">Kinematics & Control</h3>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                Forward and inverse kinematics, differential drive controllers, wheel odometry calculations, and motor control theories.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-cyan-500/50 transition">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Week 04</span>
              <h3 className="text-lg font-bold text-white mt-1">Computer Vision & AI</h3>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                OpenCV image processing, color masking, depth camera streams, point clouds, and object detection with neural networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-cyan-500/50 transition">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Week 05</span>
              <h3 className="text-lg font-bold text-white mt-1">Autonomous Navigation (Nav2)</h3>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                2D/3D SLAM mapping, costmaps, global A* path planning, local DWB collision avoidance, and autonomous waypoint following.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-cyan-500/50 bg-cyan-950/20 transition">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Week 06</span>
              <h3 className="text-lg font-bold text-white mt-1">Capstone Demonstration</h3>
              <p className="text-neutral-300 text-xs mt-2 leading-relaxed">
                Full-mission deployment: simulated autonomous mobile robot completing warehouse delivery, obstacle evasion, and dock return.
              </p>
            </div>

          </div>

          {/* Internship Pre-Registration CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={() => { setModalType('internship'); setIsQuoteModalOpen(true); }}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm px-10 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(34,197,94,0.3)]"
            >
              Apply / Join Internship Waitlist (Opening Soon)
            </button>
            <span className="block text-neutral-500 text-xs mt-3 font-mono">
              *Draft curriculum for upcoming cohort. Selected applicants receive syllabus & timetable.
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 10: 5-STAGE ENGINEERING PROCESS */}
      <section className="py-24 px-6 border-b border-neutral-800/80 bg-neutral-950/40">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Engineering Rigor
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Our 5-Stage Process.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4">
              From idea to real-world deployment — how ADB Labs designs and validates practical hardware and software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-emerald-400 flex items-center justify-center mx-auto mb-3 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-white text-base">Research</h3>
              <p className="text-neutral-400 text-xs mt-1">Explore problems & audit real energy loads.</p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-emerald-400 flex items-center justify-center mx-auto mb-3 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-white text-base">Design</h3>
              <p className="text-neutral-400 text-xs mt-1">Architect electronics, BMS & mechanical enclosures.</p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-emerald-400 flex items-center justify-center mx-auto mb-3 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-white text-base">Prototype</h3>
              <p className="text-neutral-400 text-xs mt-1">Fabricate circuit boards, assemblies & models.</p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-emerald-400 flex items-center justify-center mx-auto mb-3 font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-bold text-white text-base">Test</h3>
              <p className="text-neutral-400 text-xs mt-1">Validate thermal safety, surge limits & runtimes.</p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-emerald-500/50 bg-emerald-950/20 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto mb-3 font-mono font-bold text-sm">
                05
              </div>
              <h3 className="font-bold text-white text-base">Deploy</h3>
              <p className="text-neutral-300 text-xs mt-1">Real-world commercial and pilot usage.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 11: TECHNICAL SPEC MATRIX (Specs) */}
      <section id="specs" className="py-24 px-6 border-b border-neutral-800/80">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Engineering Transparency
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Technical Specification Matrix.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4">
              Comprehensive specifications of the ADB Labs PS1 Power Station and modular expansion subsystems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-neutral-950 rounded-3xl border border-neutral-800 overflow-hidden font-mono text-xs">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-900/80 text-left border-b border-neutral-800">
                  <th className="p-4 text-neutral-400 font-bold uppercase">Subsystem Parameter</th>
                  <th className="p-4 text-emerald-400 font-bold uppercase">ADB Labs PS1 (Base Unit)</th>
                  <th className="p-4 text-cyan-400 font-bold uppercase">PS1 + Expansion Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
                <tr>
                  <td className="p-4 text-neutral-400">Nominal Battery Capacity</td>
                  <td className="p-4 font-bold text-white">6.144 kWh</td>
                  <td className="p-4 font-bold text-cyan-300">12.288 kWh (Modular Dual Stack)</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Cell Chemistry</td>
                  <td className="p-4">Automotive Prismatic LiFePO₄</td>
                  <td className="p-4">Automotive Prismatic LiFePO₄</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Continuous AC Output</td>
                  <td className="p-4">3 kW Target Pure Sine Wave</td>
                  <td className="p-4">3 kW Target Pure Sine Wave</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Peak Surge Output</td>
                  <td className="p-4">6 kW Surge Handling</td>
                  <td className="p-4">6 kW Surge Handling</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Solar Charging Input</td>
                  <td className="p-4">Up to 420W (Internal MPPT)</td>
                  <td className="p-4">Up to 2.88 kWp (with Dual Array)</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Cycle Life</td>
                  <td className="p-4">&gt;3,500 Cycles to 80% Capacity</td>
                  <td className="p-4">&gt;3,500 Cycles to 80% Capacity</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Telemetry & BMS Protocol</td>
                  <td className="p-4">CAN-bus 2.0B / Bluetooth BLE</td>
                  <td className="p-4">Synchronized CAN-bus Master/Slave</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Mobility & Enclosure</td>
                  <td className="p-4">Heavy-Duty Caster Wheels & Handles</td>
                  <td className="p-4">Modular Stack Latches & Locking Wheels</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-400">Engineering Status</td>
                  <td className="p-4 text-emerald-400 font-bold">In Development (Phase 3)</td>
                  <td className="p-4 text-cyan-400 font-bold">Field Pilot Tested (Besant Nagar)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SECTION 12: ENGINEERING FAQ ACCORDION (Titan-C26 Replica) */}
      <section id="faq" className="Titan-C26 py-24 px-6 border-b border-neutral-800/80">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
              Frequently Asked Questions.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-4">
              Honest technical answers regarding battery chemistry, commercial sizing, pilot availability, and robotics research.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            
            {[
              {
                q: "1. What is the current developmental status of the ADB Labs PS1?",
                a: "The ADB Labs PS1 is currently labeled 'In Development' and under active engineering validation. The specifications (6.144 kWh nominal capacity, 3 kW target inverter output, and solar MPPT charge capabilities) reflect current bench testing targets. The website presents preliminary metrics transparently while engineering completes thermal and surge testing."
              },
              {
                q: "2. How does the Shop 1 Standard System compare to the Shop 2 Expanded System?",
                a: "The Shop 1 Standard System includes one PS1 unit with 6.144 kWh nominal battery storage and two 720W bifacial solar panels (1.44 kWp total). The Shop 2 Expanded System includes the PS1 main unit, plus one additional 6.144 kWh secondary battery module (totaling 12.288 kWh) and four 720W solar panels (2.88 kWp). The expanded setup is a single PS1 unit coupled with an auxiliary battery module via quick-connect DC bus — not two standalone PS1 units."
              },
              {
                q: "3. What loads can the Besant Nagar commercial off-grid system handle?",
                a: "The Besant Nagar pilot was engineered for a commercial fish retail stall on the Chennai coast. Its 12.288 kWh battery stack and 2.88 kWp solar array are dimensioned to power a commercial deep chiller (280W continuous), high-intensity night signboards (150W), and stall illumination (80W), successfully replacing a smoky and expensive 5kVA diesel generator."
              },
              {
                q: "4. Why is LiFePO₄ chemistry chosen instead of standard Lithium-ion?",
                a: "LiFePO₄ (Lithium Iron Phosphate) offers significantly higher thermal stability, non-combustible chemical safety, and 3,500+ deep discharge cycles compared to conventional NMC cells. This makes it ideal for harsh tropical outdoor environments and coastal humidity encountered in Chennai and Tamil Nadu commercial applications."
              },
              {
                q: "5. Who can apply for the Robotics & AI Industrial Internship?",
                a: "The proposed 6-week internship program is designed for undergraduate and graduate students in CSE, AI/ML, Robotics, ECE, EEE, and Mechanical Engineering. It emphasizes simulation-first learning in Gazebo and ROS 2, ensuring that every participant can build, simulate, and demonstrate autonomous robotic navigation without needing personal access to expensive physical robots."
              },
              {
                q: "6. Can the PS1 be used for residential home backup during power outages?",
                a: "Yes. When paired with a manual or automatic transfer switch, the PS1's 3kW pure sine output can support essential residential circuits including refrigerators, fans, LED lighting, WiFi routers, and low-tonnage inverter air conditioners without flicker."
              },
              {
                q: "7. Why are commercial package prices quoted upon enquiry rather than fixed online?",
                a: "As emphasized in internal project handovers, every commercial site has varying daily load profiles, roof structural constraints, and solar cable distances. To avoid setting unverified expectations, ADB Labs conducts pre-installation energy audits to confirm compatibility before issuing formal project quotations."
              },
              {
                q: "8. How can our business or laboratory collaborate with ADB Labs?",
                a: "You can reach out through our 'Get a Quote' or 'Book Assessment' forms, or email us directly at mdzainoct@gmail.com / call +91 8310704488. We actively partner with small businesses, academic institutions, and robotics researchers across India."
              }
            ].map((faq, idx) => {
              const isOpen = openFaq.includes(idx);
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden transition"
                >
                  <button
                    onClick={() => {
                      if (isOpen) {
                        setOpenFaq(openFaq.filter(i => i !== idx));
                      } else {
                        setOpenFaq([...openFaq, idx]);
                      }
                    }}
                    className="w-full text-left p-6 font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 hover:text-emerald-400 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-neutral-400 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* SECTION 13: ENGINEERING DISCLAIMERS & REGULATORY DISCLOSURES (Titan-C27 Replica) */}
      <section className="Titan-C27 py-16 px-6 border-b border-neutral-800/80 bg-black text-neutral-500 font-mono text-[11px] leading-relaxed">
        <div className="max-w-[1440px] mx-auto space-y-3">
          <p className="font-bold text-neutral-400 uppercase tracking-wider mb-2">Engineering & Regulatory Notices:</p>
          <p>
            1. <strong>Preliminary Engineering Status:</strong> The ADB Labs PS1 is in developmental prototype testing. Stated metrics (including 6.144 kWh nominal capacity, 3 kW target inverter output, and charging efficiency) are developmental objectives subject to comprehensive third-party lab verification.
          </p>
          <p>
            2. <strong>Load Audits:</strong> Runtime estimates generated by the Autonomy Calculator are based on theoretical continuous power draws and do not constitute a warranty of runtime. Actual operational hours depend on seasonal solar insolation, temperature ambient, and appliance duty cycles.
          </p>
          <p>
            3. <strong>Commercial Pilots:</strong> The Besant Nagar installation represents a supervised field pilot for technical data collection. Field findings are utilized iteratively to optimize thermal dissipation and BMS firmware.
          </p>
          <p>
            4. <strong>Internship Program:</strong> The Robotics & AI Industrial Internship curriculum is an educational initiative. Dates, cohort sizes, and mentor assignments are confirmed upon acceptance to the priority waitlist.
          </p>
        </div>
      </section>

      {/* SECTION 14: OFFICIAL ADB LABS GLOBAL FOOTER */}
      <footer id="footer" className="bg-[#05070c] py-16 px-6 text-neutral-400 text-xs font-sans">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
                  <span className="font-mono font-black text-emerald-400 text-sm">ADB</span>
                </div>
              </div>
              <span className="font-bold text-lg text-white">ADB LABS</span>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              A technology and R&D initiative focused on building practical solutions across clean energy, robotics, engineering, embedded systems, and product development.
            </p>
            <div className="pt-2 text-neutral-300 space-y-1.5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 8310704488</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>mdzainoct@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs mb-4">Energy Solutions</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollToSection('hardware')} className="hover:text-emerald-400 transition">ADB Labs PS1</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="hover:text-emerald-400 transition">Commercial Off-Grid Packages</button></li>
              <li><button onClick={() => scrollToSection('hardware')} className="hover:text-emerald-400 transition">Custom LiFePO₄ Battery Packs</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="hover:text-emerald-400 transition">Shop 1 & Shop 2 Systems</button></li>
            </ul>
          </div>

          {/* Robotics Col */}
          <div>
            <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs mb-4">Robotics & AI</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollToSection('robotics')} className="hover:text-emerald-400 transition">Robotics Systems & Kinematics</button></li>
              <li><button onClick={() => scrollToSection('robotics')} className="hover:text-emerald-400 transition">Computer Vision Perception</button></li>
              <li><button onClick={() => scrollToSection('robotics')} className="hover:text-emerald-400 transition">Embedded STM32 / CAN Firmware</button></li>
              <li><button onClick={() => scrollToSection('internship')} className="hover:text-emerald-400 transition">6-Week Industrial Internship</button></li>
            </ul>
          </div>

          {/* Quick Contact Box */}
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <h4 className="font-bold text-white uppercase font-mono tracking-wider text-xs">Request Quotation</h4>
            <p className="text-neutral-400 text-xs">
              Get an engineered load audit and customized quote for your shop or facility.
            </p>
            <button
              onClick={() => { setModalType('quote'); setIsQuoteModalOpen(true); }}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs py-2.5 rounded-full transition text-center block"
            >
              Get a Quote →
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-[11px] font-mono gap-4">
          <div>
            © 2026 ADB Labs. All rights reserved. Technology & R&D Initiative.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-neutral-400 cursor-pointer">Engineering Compliance</span>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE QUOTE & AUDIT MODAL */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121620] border border-neutral-800 max-w-lg w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl text-left">
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-full font-bold">
              ADB Labs Commercial Direct
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
              {modalType === 'internship' ? 'Apply for Robotics Internship' : modalType === 'assessment' ? 'Book Free On-Site Solar Audit' : 'Request Commercial System Quote'}
            </h3>

            <p className="text-neutral-400 text-xs mt-2">
              {modalType === 'internship' 
                ? 'Join the priority waitlist for the 6-Week Simulation-First Robotics & AI Industrial Internship.' 
                : 'Share your requirements and our engineering team in Chennai will provide a dimensioned load breakdown.'}
            </p>

            <form onSubmit={handleQuoteSubmit} className="mt-6 space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 uppercase font-mono tracking-wider mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  placeholder="e.g. Senthil Kumar"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 uppercase font-mono tracking-wider mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 uppercase font-mono tracking-wider mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    placeholder="name@business.com"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 uppercase font-mono tracking-wider mb-1">Target Application</label>
                <select 
                  value={quoteForm.solution}
                  onChange={(e) => setQuoteForm({ ...quoteForm, solution: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-emerald-400"
                >
                  <option>Shop 1 Standard System (6.144 kWh + 1.44 kWp)</option>
                  <option>Shop 2 Expanded Heavy-Duty (12.288 kWh + 2.88 kWp)</option>
                  <option>Commercial Fish / Deep Chiller Stall</option>
                  <option>Food & Beverage Kiosk (Blender/Waffle)</option>
                  <option>Residential Essential Home Backup</option>
                  <option>Robotics & AI Internship Enrollment</option>
                  <option>Custom LiFePO₄ Battery R&D</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 uppercase font-mono tracking-wider mb-1">Project Notes / Specific Loads</label>
                <textarea
                  rows={3}
                  value={quoteForm.notes}
                  onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                  placeholder="Detail your equipment (e.g. 280W freezer running 12 hours/day at Besant Nagar beach stall)..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm py-3 rounded-full transition shadow-[0_0_20px_rgba(34,197,94,0.3)] mt-2"
              >
                Submit Consultation Request →
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
