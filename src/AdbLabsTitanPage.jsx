import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Cpu, 
  Bot, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
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
  Battery,
  ShieldCheck,
  TrendingDown,
  VolumeX,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Play,
  Flame,
  Plus
} from 'lucide-react';
import './titan.css';
import { TEAM_MEMBERS } from './data/teamData';

export default function AdbLabsTitanPage({ onNavigateToMember }) {
  // Navigation & Sub-nav state
  const [activeNav, setActiveNav] = useState('overview');
  const [isSubNavSticky, setIsSubNavSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote'); // 'quote' | 'internship' | 'assessment' | 'video'
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

  // Testimonial Carousel state
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  // FAQ Accordion state (single open index for predictable, buttery UX)
  const [activeFaq, setActiveFaq] = useState(0);

  // Robotics Terminal simulation state
  const [rosLogIdx, setRosLogIdx] = useState(0);

  // Form states
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    solution: 'Shop 2 Expanded Heavy-Duty (12.288 kWh)',
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

  const fieldStories = [
    {
      title: "Zero Diesel Expense for Coastal Fish Retailing",
      author: "Besant Nagar Fisherfolk Cooperative",
      role: "Field Pilot Partner · Chennai",
      badge: "Commercial Pilot Trial",
      image: "/images/besant_wide.png",
      quote: "Prior to installing the ADB Labs PS1, our deep chiller ran on a 5kVA diesel generator that burned ₹14,000 in fuel every month and left diesel soot on our seafood. Now, our 280W commercial freezer runs 24/7 whisper-quiet at -18°C with zero fumes and ₹0 monthly fuel bills.",
      stat1: "₹14,000/mo",
      stat1Label: "Diesel Fuel Saved",
      stat2: "100%",
      stat2Label: "Solar Self-Sufficiency"
    },
    {
      title: "Commercial High-Surge Coffee & Waffle Kiosk",
      author: "ECR Beach Promenade Kiosk",
      role: "Retail Vendor Partner",
      badge: "Validated High-Surge Load",
      image: "/images/fish_stall_night.jpg",
      quote: "Commercial waffle irons and blenders pull massive surge currents that trip standard consumer inverters. The PS1's 3kW continuous pure sine output and 6kW peak surge handles our 1kW iron and 600W blender simultaneously without flicker, even during evening beach peak hours.",
      stat1: "6 kW",
      stat1Label: "Peak Surge Absorbed",
      stat2: "0 dB",
      stat2Label: "Silent Evening Operation"
    },
    {
      title: "Automotive LiFePO₄ Durability in Marine Air",
      author: "ADB Labs Hardware Engineering",
      role: "Tamil Nadu Field Audit Team",
      badge: "Coastal Thermal Telemetry",
      image: "/images/besant_detail_night.png",
      quote: "High humidity and salt spray corrode traditional generator alternators within 12 months. The PS1 utilizes sealed automotive-grade LiFePO₄ prismatic cells, CAN-bus active balancing, and dual MPPT tracking with 720W bifacial solar panels, yielding exceptional resilience in marine environments.",
      stat1: "3,500+",
      stat1Label: "Full Rated Cycles",
      stat2: "90% DoD",
      stat2Label: "Safe Usable Capacity"
    }
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
        'highlights',
        'comparison',
        'appliances',
        'hardware',
        'packages',
        'calculator',
        'stories',
        'besant',
        'robotics',
        'internship',
        'team',
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
      const offset = 70;
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
      showToast(`Thank you! Priority commercial allocation updates sent to ${waitlistEmail}`);
      setWaitlistEmail('');
    } else {
      showToast('Please enter a valid email address.');
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setIsQuoteModalOpen(false);
    showToast(`Thank you ${quoteForm.name}! An ADB Labs commercial energy specialist will contact you.`);
    setQuoteForm({ name: '', phone: '', email: '', solution: 'Shop 2 Expanded Heavy-Duty (12.288 kWh)', notes: '' });
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
    <div className="Titan-Page bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans antialiased">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[99999] bg-[#121316] border border-white/20 text-white px-6 py-3.5 rounded-full font-medium shadow-[0_0_40px_rgba(0,0,0,0.8)] flex items-center gap-3 transition-all animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#adceff]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Global Announcement Ticker */}
      <div className="glo-bar-top bg-[#07090e] border-b border-white/[0.08] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="bg-white/10 text-neutral-300 border border-white/15 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
          Pilot Announcement
        </span>
        <span className="text-neutral-300">
          Commercial Off-Grid Pilot Deployments Now Accepting Registrations in Chennai & Tamil Nadu.
        </span>
        <button 
          onClick={() => { setModalType('assessment'); setIsQuoteModalOpen(true); }}
          className="text-[#adceff] underline hover:text-white ml-1 font-semibold transition"
        >
          Book Energy Audit →
        </button>
      </div>

      {/* Global Navigation Header */}
      <header className="global-header sticky top-0 z-50 bg-black/85 backdrop-blur-2xl border-b border-white/[0.08] transition-all">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => scrollToSection('overview')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-white to-neutral-500 p-[1px] shadow-sm">
              <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-white text-sm tracking-tight">
                  ADB
                </span>
              </div>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-2">
                ADB LABS
                <span className="w-1.5 h-1.5 rounded-full bg-[#adceff] animate-pulse"></span>
              </span>
              <span className="block text-[9px] tracking-widest text-[#83868a] uppercase -mt-0.5">
                Energy & Robotics R&D
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#adafb3] uppercase tracking-wider">
            <button onClick={() => scrollToSection('highlights')} className="hover:text-white transition">
              Highlights
            </button>
            <button onClick={() => scrollToSection('comparison')} className="hover:text-white transition">
              Why PS1
            </button>
            <button onClick={() => scrollToSection('appliances')} className="hover:text-white transition">
              Appliances
            </button>
            <button onClick={() => scrollToSection('hardware')} className="hover:text-white transition">
              Hardware
            </button>
            <button onClick={() => scrollToSection('packages')} className="hover:text-white transition">
              Packages
            </button>
            <button onClick={() => scrollToSection('calculator')} className="hover:text-white transition">
              Calculator
            </button>
            <button onClick={() => scrollToSection('besant')} className="hover:text-white transition">
              Field Pilot
            </button>
            <button onClick={() => scrollToSection('robotics')} className="hover:text-white transition">
              Robotics
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-white transition">
              Team
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition">
              FAQ
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setModalType('quote'); setIsQuoteModalOpen(true); }}
              className="bg-white hover:bg-neutral-200 text-black font-bold text-xs px-5 py-2.5 rounded-full transition shadow-md flex items-center gap-2 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-neutral-400 hover:text-white p-2"
              aria-label="Toggle Navigation"
            >
              <Sliders className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-950/95 backdrop-blur-2xl border-b border-neutral-800 px-6 py-5 space-y-4 text-sm font-medium">
            <button onClick={() => { scrollToSection('highlights'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Key Highlights
            </button>
            <button onClick={() => { scrollToSection('comparison'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Why PS1 vs Generator
            </button>
            <button onClick={() => { scrollToSection('appliances'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Essential Appliances
            </button>
            <button onClick={() => { scrollToSection('hardware'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              PS1 Hardware
            </button>
            <button onClick={() => { scrollToSection('packages'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Commercial Packages
            </button>
            <button onClick={() => { scrollToSection('calculator'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Runtime Calculator
            </button>
            <button onClick={() => { scrollToSection('besant'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Besant Nagar Field Pilot
            </button>
            <button onClick={() => { scrollToSection('robotics'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Robotics & AI Division
            </button>
            <button onClick={() => { scrollToSection('internship'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              6-Week Industrial Internship
            </button>
            <button onClick={() => { scrollToSection('team'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Engineering Team & Dossiers
            </button>
            <button onClick={() => { scrollToSection('faq'); setMobileMenuOpen(false); }} className="block w-full text-left text-neutral-300 hover:text-white py-1">
              Technical FAQ
            </button>
          </div>
        )}
      </header>

      {/* SECTION 1: CINEMATIC FULL-BLEED HERO (EcoFlow Titan Stage Replica) */}
      <section id="overview" className="relative pt-24 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        
        {/* Atmospheric Radial Backdrop Halo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#adceff]/15 via-[#3f68e0]/05 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto w-full">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#adceff] font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#adceff] animate-ping"></span>
            <span>Commercial Energy · Robotics · Real-World R&D</span>
          </div>

          {/* Titan Large Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl mx-auto leading-[1.04] text-white">
            ADB Labs PS1 Series
          </h1>

          {/* Subtitle */}
          <p className="text-[#adafb3] text-lg sm:text-2xl max-w-3xl mx-auto mt-6 font-normal leading-relaxed">
            Whole-Stall Power & Commercial Energy Storage, Now Within Reach.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button 
              onClick={() => { setModalType('quote'); setIsQuoteModalOpen(true); }}
              className="bg-white hover:bg-neutral-200 text-black font-bold text-sm px-8 py-3.5 rounded-full transition shadow-[0_0_35px_rgba(255,255,255,0.2)] flex items-center gap-2"
            >
              <span>Get Expert Help</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection('highlights')}
              className="bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 font-semibold text-sm px-8 py-3.5 rounded-full transition backdrop-blur-md flex items-center gap-2"
            >
              <span>Get the Highlights</span>
            </button>
            <button 
              onClick={() => { setModalType('video'); setIsQuoteModalOpen(true); }}
              className="bg-transparent hover:bg-white/5 text-neutral-300 hover:text-white font-semibold text-sm px-6 py-3.5 rounded-full transition flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current text-[#adceff]" />
              <span>Watch Field Pilot</span>
            </button>
          </div>

          {/* Floating Hardware Graphic (Clean, edge-to-edge Luxury Presentation) */}
          <div className="relative mt-12 max-w-4xl mx-auto flex flex-col items-center justify-center">
            <div className="relative aspect-[16/9] w-full flex items-center justify-center">
              <img 
                src="/images/ps1_titan_studio.jpg"
                alt="ADB Labs PS1 Power Station Flagship Hardware"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_35px_50px_rgba(0,0,0,0.95)]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: SLIM STICKY SUB-NAV BAR (EcoFlow Titan-C2 Replica) */}
      <div 
        id="subnav" 
        className={`Titan-C2 transition-all duration-300 z-40 bg-black/90 backdrop-blur-2xl border-y border-white/[0.08] ${
          isSubNavSticky ? 'sticky top-0 shadow-2xl' : 'relative'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-13 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-bold text-white whitespace-nowrap pr-4 border-r border-white/10 flex-shrink-0">
            <span>ADB LABS PS1</span>
            <span className="w-2 h-2 rounded-full bg-[#adceff] animate-pulse"></span>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold tracking-wide whitespace-nowrap text-[#83868a] overflow-x-auto no-scrollbar pl-4">
            <button 
              onClick={() => scrollToSection('highlights')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'highlights' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Highlights
            </button>
            <button 
              onClick={() => scrollToSection('comparison')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'comparison' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Why PS1
            </button>
            <button 
              onClick={() => scrollToSection('appliances')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'appliances' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Appliances
            </button>
            <button 
              onClick={() => scrollToSection('hardware')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'hardware' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Hardware
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'packages' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'calculator' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Calculator
            </button>
            <button 
              onClick={() => scrollToSection('besant')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'besant' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Field Pilot
            </button>
            <button 
              onClick={() => scrollToSection('robotics')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'robotics' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Robotics
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'team' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('specs')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'specs' ? 'text-white border-white' : 'border-transparent'}`}
            >
              Specs
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`hover:text-white transition py-3.5 border-b-2 ${activeNav === 'faq' ? 'text-white border-white' : 'border-transparent'}`}
            >
              FAQ
            </button>
          </div>

          <button
            onClick={() => { setModalType('quote'); setIsQuoteModalOpen(true); }}
            className="hidden sm:inline-flex bg-white hover:bg-neutral-200 text-black font-bold text-xs px-5 py-2 rounded-full transition whitespace-nowrap ml-4 flex-shrink-0"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* SECTION 3: ECOFLOW TITAN SIGNATURE BENTO HIGHLIGHTS (Titan-C4 Replica) */}
      <section id="highlights" className="py-24 px-6 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Core Innovations
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Get the Highlights.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Engineered to replace smoky commercial generators with silent, automated LiFePO₄ storage and autonomous robotics.
            </p>
          </div>

          {/* 4 Bento Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bento Card 1: Full-width Power & Capacity */}
            <div className="md:col-span-2 p-8 sm:p-12 rounded-[32px] glass-panel glass-panel-hover relative overflow-hidden text-left shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#adceff]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-wider text-[#adceff] font-bold">Commercial Power Architecture</span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                  Whole-Stall Power for Everyday Living
                </h3>
                <p className="text-[#adafb3] text-sm mt-3 leading-relaxed">
                  Run high-surge commercial chillers, waffle irons, blenders, and POS terminals simultaneously without tripping breakers or flickering lights.
                </p>
              </div>

              {/* 4 Stat Columns */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xs text-[#83868a] font-medium">Output</div>
                  <div className="text-3xl sm:text-4xl stat-cyan mt-1">3.0 kW</div>
                  <div className="text-xs text-neutral-400 mt-1">6 kW Peak Surge</div>
                </div>

                <div>
                  <div className="text-xs text-[#83868a] font-medium">Capacity</div>
                  <div className="text-3xl sm:text-4xl stat-cyan mt-1">6.1 ~ 12.3 kWh</div>
                  <div className="text-xs text-neutral-400 mt-1">Dual Stack Modular Bus</div>
                </div>

                <div>
                  <div className="text-xs text-[#83868a] font-medium">Monthly Savings</div>
                  <div className="text-3xl sm:text-4xl stat-metallic mt-1">₹14,000</div>
                  <div className="text-xs text-neutral-400 mt-1">~14 Month Payback</div>
                </div>

                <div>
                  <div className="text-xs text-[#83868a] font-medium">Day Solar Array</div>
                  <div className="text-3xl sm:text-4xl stat-metallic mt-1">2.88 kWp</div>
                  <div className="text-xs text-neutral-400 mt-1">Dual MPPT Tracking</div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Spend Less From Day One */}
            <div className="p-8 sm:p-10 rounded-[32px] glass-panel glass-panel-hover text-left flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#adceff] font-bold">Economic Payback</span>
                <h3 className="text-2xl font-bold text-white mt-2">Spend ₹0 on Fuel From Day One</h3>
                <p className="text-[#adafb3] text-xs sm:text-sm mt-3 leading-relaxed">
                  Eliminate ₹1.5+ Lakhs in annual diesel expenses. Sealed LiFePO₄ prismatic cells eliminate alternator corrosion, frequent oil changes, and exhaust fumes.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/[0.08]">
                  <div>
                    <div className="text-xs text-neutral-400">Fuel Expense</div>
                    <div className="text-4xl stat-cyan mt-1">100%</div>
                    <div className="text-xs text-neutral-500 mt-0.5">Eliminated vs Diesel</div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Cell Longevity</div>
                    <div className="text-4xl stat-metallic mt-1">3,500+</div>
                    <div className="text-xs text-neutral-500 mt-0.5">Cycles to 80% DoD</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-xs text-[#adceff] font-bold">
                <span>See Fuel Comparison</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bento Card 3: Autonomous Robotics & AI */}
            <div className="p-8 sm:p-10 rounded-[32px] glass-panel glass-panel-hover text-left flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#adceff] font-bold">Autonomous Robotics & AI</span>
                <h3 className="text-2xl font-bold text-white mt-2">Field Robotics & ROS 2 Intelligence</h3>
                <p className="text-[#adafb3] text-xs sm:text-sm mt-3 leading-relaxed">
                  Advanced 3D LiDAR SLAM, depth camera perception, quadruped locomotion gait stabilization, and simulation-first capstone curricula.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/[0.08]">
                  <div>
                    <div className="text-xs text-neutral-400">Navigation Stack</div>
                    <div className="text-2xl font-bold text-white mt-1">ROS 2 Nav2</div>
                    <div className="text-xs text-neutral-500 mt-0.5">2D/3D SLAM Mapping</div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Vision Perception</div>
                    <div className="text-2xl font-bold text-white mt-1">YOLO + Depth</div>
                    <div className="text-xs text-neutral-500 mt-0.5">Real-time Obstacle Evasion</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-xs text-[#adceff] font-bold">
                <span>Explore Robotics Division</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: TRADITIONAL DIESEL VS ADB LABS PS1 (EcoFlow Titan-C3 Comparison) */}
      <section id="comparison" className="py-24 px-6 border-b border-white/[0.08] bg-gradient-to-b from-black via-[#080a10] to-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Economic & Environmental Breakthrough
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Power More. Spend Less.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Replacing smoky 5kVA diesel generators with silent, automated solar-charged LiFePO₄ storage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Traditional 5kVA Diesel Generator */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] text-left relative overflow-hidden backdrop-blur-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-2">
                Traditional Setup
              </div>
              <h3 className="text-2xl font-bold text-white">5kVA Commercial Diesel Generator</h3>
              <p className="text-[#83868a] text-sm mt-2">
                Standard fossil fuel solution used across retail stalls and beach food kiosks.
              </p>

              <div className="space-y-6 mt-8 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xs text-[#83868a] font-medium">Monthly Fuel Expense</div>
                  <div className="text-3xl font-extrabold text-neutral-300 mt-1 flex items-center gap-2">
                    <span>₹12,000 – ₹15,000</span>
                    <TrendingDown className="w-5 h-5 text-red-400 rotate-180" />
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">Endless sinking cost consuming retail margins</div>
                </div>

                <div>
                  <div className="text-xs text-[#83868a] font-medium">Noise & Disturbance</div>
                  <div className="text-2xl font-bold text-neutral-300 mt-1">92 dB(A) Engine Roar</div>
                  <div className="text-xs text-neutral-500 mt-1">Loud exhaust repelling evening dining customers</div>
                </div>

                <div>
                  <div className="text-xs text-[#83868a] font-medium">Emissions & Food Hygiene</div>
                  <div className="text-2xl font-bold text-red-400 mt-1">Toxic Diesel Exhaust Fumes</div>
                  <div className="text-xs text-neutral-500 mt-1">Soot and particulate matter settling over fresh food</div>
                </div>

                <div>
                  <div className="text-xs text-[#83868a] font-medium">Service & Maintenance</div>
                  <div className="text-xl font-bold text-neutral-300 mt-1">Frequent Oil & Alternator Overhauls</div>
                  <div className="text-xs text-neutral-500 mt-1">Costly repairs caused by coastal salt air corrosion</div>
                </div>
              </div>
            </div>

            {/* Card 2: ADB Labs PS1 Solar Solution */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/20 text-left relative overflow-hidden backdrop-blur-xl shadow-2xl">
              <div className="inline-block bg-[#adceff]/15 text-[#adceff] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                ADB Labs Breakthrough ★
              </div>
              <h3 className="text-2xl font-bold text-white">ADB Labs PS1 Off-Grid System</h3>
              <p className="text-neutral-400 text-sm mt-2">
                12.288 kWh LiFePO₄ storage paired with 2.88 kWp bifacial solar array.
              </p>

              <div className="space-y-6 mt-8 pt-8 border-t border-white/[0.08]">
                <div>
                  <div className="text-xs text-[#adceff] font-medium">Monthly Fuel Expense</div>
                  <div className="text-4xl font-black bg-gradient-to-b from-[#adceff] to-white bg-clip-text text-transparent mt-1 flex items-center gap-2">
                    <span>₹0 / month</span>
                    <Leaf className="w-6 h-6 text-[#adceff]" />
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">100% powered by daylight tropical solar harvest</div>
                </div>

                <div>
                  <div className="text-xs text-[#adceff] font-medium">Operational Noise</div>
                  <div className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
                    <span>&lt; 30 dB Silent</span>
                    <VolumeX className="w-5 h-5 text-[#adceff]" />
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">Whisper-quiet operation preserving stall ambiance</div>
                </div>

                <div>
                  <div className="text-xs text-[#adceff] font-medium">Air Quality & Safety</div>
                  <div className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
                    <span>0 g CO₂ Emissions</span>
                    <ShieldCheck className="w-5 h-5 text-[#adceff]" />
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">100% clean indoor/outdoor safe for seafood & food</div>
                </div>

                <div>
                  <div className="text-xs text-[#adceff] font-medium">Return on Investment</div>
                  <div className="text-xl font-bold text-white mt-1">~14 Months Payback</div>
                  <div className="text-xs text-neutral-400 mt-1">3,500+ lifecycle prismatic cells lasting over 10 years</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ICONIC ESSENTIAL APPLIANCES ENERGY FLOW (EcoFlow Titan-C6 Replica) */}
      <section id="appliances" className="py-24 px-6 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto text-center">
          
          <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
            High-Surge Multi-Load Delivery
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
            Run Your Deep Chiller — and More.
          </h2>
          <p className="text-[#adafb3] text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            With 3kW continuous pure sine output and 6kW peak surge absorption, the PS1 runs all your essential commercial loads together without flicker.
          </p>

          {/* Connected Appliance Equation Bar */}
          <div className="mt-16 p-8 sm:p-12 rounded-[32px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl">
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-8">
              Keep These Commercial Essentials Running Together Off-Grid:
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center min-w-[110px]">
                <Snowflake className="w-6 h-6 text-[#adceff] mb-2" />
                <span className="text-lg font-black text-white">280W</span>
                <span className="text-xs text-neutral-400 mt-0.5">Deep Chiller</span>
              </div>

              <Plus className="w-5 h-5 text-neutral-500" />

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center min-w-[110px]">
                <Radio className="w-6 h-6 text-[#adceff] mb-2" />
                <span className="text-lg font-black text-white">150W</span>
                <span className="text-xs text-neutral-400 mt-0.5">Night Sign</span>
              </div>

              <Plus className="w-5 h-5 text-neutral-500" />

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center min-w-[110px]">
                <Lightbulb className="w-6 h-6 text-[#adceff] mb-2" />
                <span className="text-lg font-black text-white">80W</span>
                <span className="text-xs text-neutral-400 mt-0.5">Stall LEDs</span>
              </div>

              <Plus className="w-5 h-5 text-neutral-500" />

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center min-w-[110px]">
                <Zap className="w-6 h-6 text-[#adceff] mb-2" />
                <span className="text-lg font-black text-white">600W</span>
                <span className="text-xs text-neutral-400 mt-0.5">Blender</span>
              </div>

              <Plus className="w-5 h-5 text-neutral-500" />

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center min-w-[110px]">
                <Coffee className="w-6 h-6 text-[#adceff] mb-2" />
                <span className="text-lg font-black text-white">1,000W</span>
                <span className="text-xs text-neutral-400 mt-0.5">Waffle Iron</span>
              </div>

              <Plus className="w-5 h-5 text-neutral-500" />

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-center min-w-[110px]">
                <Tv className="w-6 h-6 text-[#adceff] mb-2" />
                <span className="text-lg font-black text-white">40W</span>
                <span className="text-xs text-neutral-400 mt-0.5">POS Billing</span>
              </div>

            </div>

            {/* Total Active Load Meter */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
              <div className="text-left">
                <span className="text-xs text-neutral-400 uppercase tracking-wider block">Combined Operating Load</span>
                <span className="text-3xl font-extrabold text-white">2,150 Watts</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#adceff] uppercase tracking-wider block font-bold">PS1 Continuous Headroom</span>
                <span className="text-3xl font-extrabold text-[#adceff]">3,000 W Output (850W Buffer)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: PS1 HARDWARE ARCHITECTURE & INTERACTIVE HOTSPOTS */}
      <section id="hardware" className="py-24 px-6 border-b border-white/[0.08] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Modular Subsystem Architecture
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Power Almost Everything.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Engineered with automotive LiFePO₄ prismatic cells, 3kW continuous pure sine inverter, dual MPPT solar controllers, and rugged caster mobility.
            </p>
          </div>

          {/* Interactive Multi-angle Hardware Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] rounded-[32px] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-10">
            
            {/* Visual Display with Hotspots */}
            <div className="lg:col-span-8 relative flex flex-col items-center justify-center min-h-[460px] bg-black/60 rounded-3xl border border-white/[0.06] p-6">
              
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
                    activeHotspot === 1 ? 'bg-white text-black scale-125 ring-4 ring-[#38bdf8]/40' : 'bg-neutral-800/90 text-white hover:bg-neutral-700'
                  }`}
                >
                  {activeHotspot === 1 && <span className="absolute -inset-1.5 rounded-full border border-[#38bdf8] hotspot-pulse pointer-events-none"></span>}
                  1
                </button>

                {/* Hotspot 2: LiFePO₄ Core */}
                <button 
                  onClick={() => setActiveHotspot(2)}
                  className={`absolute top-[52%] left-[48%] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition shadow-lg ${
                    activeHotspot === 2 ? 'bg-white text-black scale-125 ring-4 ring-[#38bdf8]/40' : 'bg-neutral-800/90 text-white hover:bg-neutral-700'
                  }`}
                >
                  {activeHotspot === 2 && <span className="absolute -inset-1.5 rounded-full border border-[#38bdf8] hotspot-pulse pointer-events-none"></span>}
                  2
                </button>

                {/* Hotspot 3: MPPT Solar */}
                <button 
                  onClick={() => setActiveHotspot(3)}
                  className={`absolute top-[32%] right-[24%] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition shadow-lg ${
                    activeHotspot === 3 ? 'bg-white text-black scale-125 ring-4 ring-[#38bdf8]/40' : 'bg-neutral-800/90 text-white hover:bg-neutral-700'
                  }`}
                >
                  {activeHotspot === 3 && <span className="absolute -inset-1.5 rounded-full border border-[#38bdf8] hotspot-pulse pointer-events-none"></span>}
                  3
                </button>

                {/* Hotspot 4: Expansion Bus */}
                <button 
                  onClick={() => setActiveHotspot(4)}
                  className={`absolute bottom-[18%] right-[32%] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition shadow-lg ${
                    activeHotspot === 4 ? 'bg-white text-black scale-125 ring-4 ring-[#38bdf8]/40' : 'bg-neutral-800/90 text-white hover:bg-neutral-700'
                  }`}
                >
                  {activeHotspot === 4 && <span className="absolute -inset-1.5 rounded-full border border-[#38bdf8] hotspot-pulse pointer-events-none"></span>}
                  4
                </button>
              </div>

              {/* Multi-angle Selector Pills */}
              <div className="flex items-center gap-2 mt-6 bg-white/[0.04] border border-white/10 p-1.5 rounded-full backdrop-blur-md">
                {['front', 'rear', 'side', 'top'].map((angle) => (
                  <button
                    key={angle}
                    onClick={() => setActiveAngle(angle)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase transition ${
                      activeAngle === angle ? 'bg-white text-black font-bold shadow' : 'text-[#83868a] hover:text-white'
                    }`}
                  >
                    {angle} View
                  </button>
                ))}
              </div>
            </div>

            {/* Hotspot Deep-Dive Information Cards (Clickable Two-Way Sync) */}
            <div className="lg:col-span-4 space-y-4">
              <div onClick={() => setActiveHotspot(1)} className={`p-6 rounded-3xl border transition-all cursor-pointer ${activeHotspot === 1 ? 'bg-white/[0.08] border-[#adceff]/60 ring-1 ring-[#adceff]/40 shadow-lg' : 'bg-white/[0.02] border-white/[0.08] hover:border-white/30'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Subsystem 01</span>
                  <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded font-mono">3000W Target</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1.5">Pure Sine Inverter & Surge Power</h3>
                <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                  High-surge bidirectional inverter engineered to easily absorb inductive inrush surges from commercial blenders, waffle irons, deep chillers, and power tools.
                </p>
              </div>

              <div onClick={() => setActiveHotspot(2)} className={`p-6 rounded-3xl border transition-all cursor-pointer ${activeHotspot === 2 ? 'bg-white/[0.08] border-[#adceff]/60 ring-1 ring-[#adceff]/40 shadow-lg' : 'bg-white/[0.02] border-white/[0.08] hover:border-white/30'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Subsystem 02</span>
                  <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded font-mono">6.144 kWh Core</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1.5">Automotive LiFePO₄ & Active BMS</h3>
                <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                  3,500+ lifecycle prismatic chemistry safe for tropical temperatures. Integrated CAN-bus active cell balancing and multi-sensor thermal cutoffs.
                </p>
              </div>

              <div onClick={() => setActiveHotspot(3)} className={`p-6 rounded-3xl border transition-all cursor-pointer ${activeHotspot === 3 ? 'bg-white/[0.08] border-[#adceff]/60 ring-1 ring-[#adceff]/40 shadow-lg' : 'bg-white/[0.02] border-white/[0.08] hover:border-white/30'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Subsystem 03</span>
                  <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded font-mono">420W - 2880W</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1.5">Dual MPPT Solar Controllers</h3>
                <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                  Wide 12V–150V MPPT tracking accepting standard 720W bifacial high-efficiency panels for rapid replenishment during beach and stall operating hours.
                </p>
              </div>

              <div onClick={() => setActiveHotspot(4)} className={`p-6 rounded-3xl border transition-all cursor-pointer ${activeHotspot === 4 ? 'bg-white/[0.08] border-[#adceff]/60 ring-1 ring-[#adceff]/40 shadow-lg' : 'bg-white/[0.02] border-white/[0.08] hover:border-white/30'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Subsystem 04</span>
                  <span className="text-[10px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded font-mono">Quick-Connect</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1.5">Modular Expansion Bus</h3>
                <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                  Heavy-duty direct DC coupling port allowing an additional 6.144 kWh secondary module to double capacity to 12.288 kWh without rewiring or extra inverters.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: COMMERCIAL PACKAGES CATALOG (Side-by-Side Configurator) */}
      <section id="packages" className="py-24 px-6 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Standardized Commercial Packages
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Commercial Small-Business Packages.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Pre-configured, field-tested off-grid packages designed to replace noisy diesel generators for retail stalls, kiosks, and food service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Package 1: Shop 1 Standard System */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition flex flex-col justify-between backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#83868a] uppercase tracking-wider font-semibold">Tier 1 · Starter Setup</span>
                  <span className="text-xs bg-white/10 text-neutral-200 px-3 py-1 rounded-full font-medium">1.44 kWp Solar</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">Shop 1 Standard System</h3>
                <p className="text-[#adafb3] text-sm mt-2">
                  Optimized for small food kiosks, beverage counters, and night stalls with moderate continuous loads.
                </p>

                <div className="my-8 aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.06] flex items-center justify-center p-4">
                  <img src="/images/sol_solar.png" alt="Shop 1 Standard Package" className="max-h-full object-contain" />
                </div>

                <div className="space-y-3.5 border-t border-white/[0.08] pt-6 text-sm text-left">
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Check className="w-4 h-4 text-[#adceff] flex-shrink-0" />
                    <span><strong>1x ADB Labs PS1</strong> (6.144 kWh LiFePO₄ nominal)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Check className="w-4 h-4 text-[#adceff] flex-shrink-0" />
                    <span><strong>2x 720 W Bifacial Panels</strong> (1.44 kWp total array)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Check className="w-4 h-4 text-[#adceff] flex-shrink-0" />
                    <span>3 kW Pure Sine Inverter & Surge Protection</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Check className="w-4 h-4 text-[#adceff] flex-shrink-0" />
                    <span>Stall Mounting Hardware & Weatherproof Cabling</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#83868a] block text-left">Pricing status</span>
                  <span className="text-lg font-bold text-white">Commercial Quote</span>
                </div>
                <button 
                  onClick={() => {
                    setQuoteForm(prev => ({ ...prev, solution: 'Shop 1 Standard Package (6.144 kWh)' }));
                    setModalType('quote');
                    setIsQuoteModalOpen(true);
                  }}
                  className="bg-white hover:bg-neutral-200 text-black font-bold text-xs px-6 py-3 rounded-full transition"
                >
                  Enquire Package
                </button>
              </div>
            </div>

            {/* Package 2: Shop 2 Expanded Heavy-Duty System */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/20 hover:border-white/30 transition flex flex-col justify-between backdrop-blur-xl relative shadow-2xl">
              <div className="absolute -top-3.5 right-8 bg-white text-black font-extrabold text-[10px] tracking-wider uppercase px-3.5 py-1 rounded-full shadow-lg">
                Recommended for Beach & Fish Stalls
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#adceff] uppercase tracking-wider font-bold">Tier 2 · Flagship Setup</span>
                  <span className="text-xs bg-[#adceff]/20 text-[#adceff] px-3 py-1 rounded-full font-medium">2.88 kWp Solar</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">Shop 2 Expanded Heavy-Duty</h3>
                <p className="text-[#adafb3] text-sm mt-2">
                  Full multi-day autonomy for heavy continuous cooling loads, deep chillers, and large illuminated retail signs.
                </p>

                <div className="my-8 aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.06] flex items-center justify-center p-4">
                  <img src="/images/besant_wide.png" alt="Shop 2 Expanded Package" className="max-h-full object-contain" />
                </div>

                <div className="space-y-3.5 border-t border-white/[0.08] pt-6 text-sm text-left">
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Check className="w-4 h-4 text-[#adceff] flex-shrink-0" />
                    <span><strong>1x ADB Labs PS1 Main Unit</strong> (6.144 kWh nominal)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Check className="w-4 h-4 text-[#adceff] flex-shrink-0" />
                    <span><strong>1x Secondary Battery Module</strong> (+6.144 kWh = 12.288 kWh)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Check className="w-4 h-4 text-[#adceff] flex-shrink-0" />
                    <span><strong>4x 720 W Bifacial Panels</strong> (2.88 kWp array)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Check className="w-4 h-4 text-[#adceff] flex-shrink-0" />
                    <span>Direct DC Quick-Connect Harness & Roof Mounting Kits</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#83868a] block text-left">Pricing status</span>
                  <span className="text-lg font-bold text-[#adceff]">Validated Pilot Tier</span>
                </div>
                <button 
                  onClick={() => {
                    setQuoteForm(prev => ({ ...prev, solution: 'Shop 2 Expanded Heavy-Duty Package (12.288 kWh)' }));
                    setModalType('quote');
                    setIsQuoteModalOpen(true);
                  }}
                  className="bg-white hover:bg-neutral-200 text-black font-extrabold text-xs px-6 py-3 rounded-full transition shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  Enquire Package
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: INTERACTIVE AUTONOMY & RUNTIME CALCULATOR (EcoFlow Smart Panel Replica) */}
      <section id="calculator" className="py-24 px-6 border-b border-white/[0.08] bg-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Dynamic Energy Sizing
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Interactive Autonomy Calculator.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Toggle specific appliance loads or select commercial stall presets to compare autonomy between a Single PS1 and the Expanded Dual-Module Stack.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
            
            {/* Scenario Preset Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-9">
              <button
                onClick={() => {
                  setCalcPreset('fish_stall');
                  setCustomLoads({ chiller: true, sign: true, led: true, blender: false, waffle: false, pos: true, ac: false });
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold transition ${
                  calcPreset === 'fish_stall' ? 'bg-white text-black font-bold shadow' : 'bg-white/[0.04] text-[#adafb3] hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                🐟 Besant Nagar Fish Stall
              </button>

              <button
                onClick={() => {
                  setCalcPreset('kiosk');
                  setCustomLoads({ chiller: false, sign: true, led: true, blender: true, waffle: true, pos: true, ac: false });
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold transition ${
                  calcPreset === 'kiosk' ? 'bg-white text-black font-bold shadow' : 'bg-white/[0.04] text-[#adafb3] hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                ☕ Juice & Waffle Kiosk
              </button>

              <button
                onClick={() => {
                  setCalcPreset('home');
                  setCustomLoads({ chiller: false, sign: false, led: true, blender: false, waffle: false, pos: false, ac: true });
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold transition ${
                  calcPreset === 'home' ? 'bg-white text-black font-bold shadow' : 'bg-white/[0.04] text-[#adafb3] hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                🏠 Home Essential Backup (AC + Lights)
              </button>
            </div>

            {/* Appliance Toggle Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              <button
                onClick={() => setCustomLoads(p => ({ ...p, chiller: !p.chiller }))}
                className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.chiller ? 'bg-white/10 border-[#adceff]/60 text-white shadow' : 'bg-white/[0.02] border-white/[0.06] text-[#83868a]'
                }`}
              >
                <Snowflake className="w-5 h-5 text-[#adceff]" />
                <span className="text-xs font-bold">Chiller (280W)</span>
                <span className="text-[10px] font-mono">{customLoads.chiller ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, sign: !p.sign }))}
                className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.sign ? 'bg-white/10 border-[#adceff]/60 text-white shadow' : 'bg-white/[0.02] border-white/[0.06] text-[#83868a]'
                }`}
              >
                <Radio className="w-5 h-5 text-[#adceff]" />
                <span className="text-xs font-bold">Sign (150W)</span>
                <span className="text-[10px] font-mono">{customLoads.sign ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, led: !p.led }))}
                className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.led ? 'bg-white/10 border-[#adceff]/60 text-white shadow' : 'bg-white/[0.02] border-white/[0.06] text-[#83868a]'
                }`}
              >
                <Lightbulb className="w-5 h-5 text-[#adceff]" />
                <span className="text-xs font-bold">LEDs (80W)</span>
                <span className="text-[10px] font-mono">{customLoads.led ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, blender: !p.blender }))}
                className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.blender ? 'bg-white/10 border-[#adceff]/60 text-white shadow' : 'bg-white/[0.02] border-white/[0.06] text-[#83868a]'
                }`}
              >
                <Zap className="w-5 h-5 text-[#adceff]" />
                <span className="text-xs font-bold">Blender (600W)</span>
                <span className="text-[10px] font-mono">{customLoads.blender ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, waffle: !p.waffle }))}
                className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.waffle ? 'bg-white/10 border-[#adceff]/60 text-white shadow' : 'bg-white/[0.02] border-white/[0.06] text-[#83868a]'
                }`}
              >
                <Coffee className="w-5 h-5 text-[#adceff]" />
                <span className="text-xs font-bold">Waffle (1kW)</span>
                <span className="text-[10px] font-mono">{customLoads.waffle ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, pos: !p.pos }))}
                className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.pos ? 'bg-white/10 border-[#adceff]/60 text-white shadow' : 'bg-white/[0.02] border-white/[0.06] text-[#83868a]'
                }`}
              >
                <Tv className="w-5 h-5 text-[#adceff]" />
                <span className="text-xs font-bold">POS (40W)</span>
                <span className="text-[10px] font-mono">{customLoads.pos ? 'ACTIVE' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setCustomLoads(p => ({ ...p, ac: !p.ac }))}
                className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-2 ${
                  customLoads.ac ? 'bg-white/10 border-[#adceff]/60 text-white shadow' : 'bg-white/[0.02] border-white/[0.06] text-[#83868a]'
                }`}
              >
                <Activity className="w-5 h-5 text-[#adceff]" />
                <span className="text-xs font-bold">AC (1.2kW)</span>
                <span className="text-[10px] font-mono">{customLoads.ac ? 'ACTIVE' : 'OFF'}</span>
              </button>
            </div>

            {/* Solar Generation & Stack Options */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-6">
              <div className="flex items-center gap-3">
                <Sun className={`w-5 h-5 ${solarBoost ? 'text-amber-300 animate-spin [animation-duration:12s]' : 'text-[#83868a]'}`} />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Solar Generation Buffer</div>
                  <div className="text-[10px] text-[#adafb3]">
                    {solarBoost ? `Active: +${solarGenerationW.toFixed(0)}W effective tropical irradiance` : 'Night / Off-Peak (Battery Only)'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSolarBoost(!solarBoost)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                    solarBoost ? 'bg-amber-300 text-black font-bold shadow' : 'bg-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  {solarBoost ? 'Solar Active [Day]' : 'Solar Off [Night]'}
                </button>
                <button
                  onClick={() => setModuleMode(moduleMode === 'single' ? 'dual' : 'single')}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition flex items-center gap-1.5 ${
                    moduleMode === 'dual' ? 'bg-white text-black font-bold shadow' : 'bg-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Battery className="w-3.5 h-3.5" />
                  <span>{moduleMode === 'dual' ? 'Dual Stack (12.288 kWh)' : 'Single Unit (6.144 kWh)'}</span>
                </button>
              </div>
            </div>

            {/* Results Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/70 rounded-2xl p-6 border border-white/[0.06]">
              
              {/* Option A: Single PS1 Module */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center">
                <span className="text-xs uppercase text-[#83868a] font-semibold tracking-wider">Single PS1 Module</span>
                <div className="text-3xl font-extrabold text-white mt-2">6.144 kWh</div>
                <div className="text-xs font-semibold text-neutral-400 mt-1">Continuous Active Load: {activeWatts}W</div>
                
                <div className="mt-6 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-4xl sm:text-5xl stat-cyan">{singleHours} Hours</div>
                  <div className="text-xs text-neutral-400 mt-1">Standalone Battery Autonomy</div>
                </div>

                <div className="text-xs text-[#83868a] mt-4">
                  +1.44 kWp Solar Array: Continuous daytime operation with surplus charging
                </div>
              </div>

              {/* Option B: Dual-Stacked Module */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/20 text-center shadow-lg">
                <div className="inline-block bg-white/10 text-white text-[10px] uppercase px-3 py-1 rounded-full font-bold mb-1">
                  Full Commercial Autonomy ★
                </div>
                <div className="text-3xl font-extrabold text-[#adceff] mt-1">12.288 kWh Stack</div>
                <div className="text-xs font-semibold text-neutral-400 mt-1">Continuous Active Load: {activeWatts}W</div>

                <div className="mt-6 p-5 rounded-2xl bg-white/[0.06] border border-white/20">
                  <div className="text-4xl sm:text-5xl stat-metallic">{dualHours} Hours</div>
                  <div className="text-xs text-[#adceff] mt-1">Over 2 Full Days of Night Stall Running</div>
                </div>

                <div className="text-xs text-neutral-400 mt-4">
                  +2.88 kWp Solar Array: Infinite off-grid autonomy during tropical sunshine
                </div>
              </div>

            </div>

            {/* Engineering Note on calculations */}
            <p className="text-xs text-[#83868a] text-center mt-6">
              *Calculations are based on 90% usable DoD and typical continuous draw. As stated in engineering documentation, customer loads must undergo on-site audit before final battery sizing.
            </p>

          </div>
        </div>
      </section>

      {/* SECTION 9: FIELD STORIES & COMMUNITY TRIALS (EcoFlow Titan-C31 3D Deck Replica) */}
      <section id="stories" className="py-24 px-6 border-b border-white/[0.08] relative bg-gradient-to-b from-black via-[#06080d] to-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Real-World Validation
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Tested in the Field.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Discover how coastal retail stalls and food kiosks in Tamil Nadu achieve energy independence with ADB Labs.
            </p>
          </div>

          {/* Testimonial Active Card Deck */}
          <div className="relative">
            
            <div className="p-8 sm:p-12 rounded-[32px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#adceff]/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] flex-shrink-0">
                  <img 
                    src={fieldStories[activeStoryIdx].image} 
                    alt={fieldStories[activeStoryIdx].title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-1/2 space-y-4 text-left">
                  <div className="inline-block bg-[#adceff]/15 text-[#adceff] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {fieldStories[activeStoryIdx].badge}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {fieldStories[activeStoryIdx].title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed italic">
                    "{fieldStories[activeStoryIdx].quote}"
                  </p>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{fieldStories[activeStoryIdx].author}</div>
                      <div className="text-xs text-[#83868a]">{fieldStories[activeStoryIdx].role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-black text-[#adceff]">{fieldStories[activeStoryIdx].stat1}</div>
                      <div className="text-[10px] text-neutral-400">{fieldStories[activeStoryIdx].stat1Label}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2">
                  {fieldStories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStoryIdx(idx)}
                      className={`h-2 rounded-full transition-all ${activeStoryIdx === idx ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveStoryIdx((activeStoryIdx - 1 + fieldStories.length) % fieldStories.length)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveStoryIdx((activeStoryIdx + 1) % fieldStories.length)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* EcoFlow-style Newsletter & Pilot Allocation Banner */}
            <div className="mt-10 p-8 sm:p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#adceff] font-bold">Priority Commercial Pilot Queue</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Get First Access to PS1 Field Deployments</h3>
                <p className="text-[#83868a] text-xs mt-1">Subscribe with your email for technical benchmarks, field trial reports, and priority hardware allocation.</p>
              </div>

              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[320px]">
                <input
                  type="email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter business email address"
                  className="bg-black/60 border border-white/10 px-5 py-3 rounded-full text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#adceff] flex-grow"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-neutral-200 text-black font-bold text-xs px-6 py-3 rounded-full transition whitespace-nowrap shadow"
                >
                  Join Waitlist
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: BESANT NAGAR FIELD PILOT (Featured Project Deep-Dive) */}
      <section id="besant" className="py-24 px-6 border-b border-white/[0.08] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#adceff]">
                <MapPin className="w-3.5 h-3.5 text-[#adceff]" />
                <span>FIELD PILOT CASE STUDY · CHENNAI, INDIA</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Besant Nagar Beach Off-Grid System.
              </h2>

              <p className="text-[#adafb3] text-base leading-relaxed">
                A commercial off-grid solar and energy storage installation deployed for a retail fish stall on the Besant Nagar coastline. Replaces loud, polluting diesel generators with a silent, zero-emission 12.288 kWh LiFePO₄ storage solution.
              </p>

              {/* Project Specs Table */}
              <div className="bg-white/[0.02] rounded-2xl border border-white/[0.08] p-6 space-y-3 font-mono text-xs backdrop-blur-xl">
                <div className="flex justify-between py-2 border-b border-white/[0.08]">
                  <span className="text-[#83868a]">APPLICATION</span>
                  <span className="text-white font-bold font-sans">Food / Fish Stall (Commercial Retail)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.08]">
                  <span className="text-[#83868a]">POWER SYSTEM</span>
                  <span className="text-[#adceff] font-bold font-sans">1x ADB Labs PS1 Power Station</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.08]">
                  <span className="text-[#83868a]">BATTERY CAPACITY</span>
                  <span className="text-white font-bold font-sans">12.288 kWh (6.144 kWh Main + 6.144 kWh Extra)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.08]">
                  <span className="text-[#83868a]">SOLAR ARRAY</span>
                  <span className="text-[#adceff] font-bold font-sans">2.88 kWp (4x 720 W Bifacial Panels)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#83868a]">KEY LOADS</span>
                  <span className="text-white font-bold font-sans">Deep Chiller, Night Signs, Stall Lighting</span>
                </div>
              </div>

              {/* Economic Savings Metric */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/20 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase text-[#adceff] font-semibold">Estimated Diesel Fuel Savings</div>
                  <div className="text-2xl font-bold text-white mt-0.5">₹12,000 – ₹15,000 / month</div>
                </div>
                <span className="text-xs text-neutral-400 font-mono">14 Month Payback</span>
              </div>
            </div>

            {/* Project Imagery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/[0.08] bg-neutral-950 relative group">
                <img 
                  src="/images/besant_wide.png" 
                  alt="Besant Nagar Commercial Solar Setup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/[0.08] text-xs text-left">
                  <span className="font-bold text-white block">Daytime Solar Harvesting (2.88 kWp)</span>
                  <span className="text-neutral-400">Captures intense coastal irradiation to power live chiller cooling and store night reserve.</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-950">
                  <img src="/images/fish_stall_night.jpg" alt="Night Stall Lighting" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-950">
                  <img src="/images/besant_detail_night.png" alt="Silent LiFePO₄ Inverter" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 11: ROBOTICS & AI R&D DIVISION */}
      <section id="robotics" className="py-24 px-6 border-b border-white/[0.08] bg-black relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Autonomous Systems & Intelligence
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Robotics & AI R&D Division.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Advancing practical autonomous mobile robots, computer vision perception, embedded STM32/CAN firmware, and kinematic simulation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Live Terminal & Simulation Preview */}
            <div className="lg:col-span-7 bg-[#08090d] rounded-[32px] border border-white/[0.08] p-6 sm:p-8 font-mono text-xs shadow-2xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-neutral-400 ml-2">adb_robotics@ros2_jazzy_node: ~</span>
                </div>
                <span className="text-[#adceff] flex items-center gap-1.5 text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-[#adceff] animate-ping"></span>
                  TELEMETRY LIVE
                </span>
              </div>

              {/* Terminal Screen & Animated Radar Sweep */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                
                {/* Radar Sweep Graphic */}
                <div className="relative aspect-square rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center p-4">
                  <div className="absolute inset-4 rounded-full border border-white/[0.08]"></div>
                  <div className="absolute inset-10 rounded-full border border-white/[0.04]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#adceff] shadow-[0_0_15px_#adceff]"></div>
                  
                  {/* Rotating beam */}
                  <div className="absolute inset-0 rounded-full animate-spin [animation-duration:4s] border-t-2 border-[#adceff]/80 pointer-events-none"></div>

                  <span className="absolute bottom-3 text-[10px] text-[#adceff]/80 font-mono">
                    3D LiDAR SLAM · Active
                  </span>
                </div>

                {/* Live Console Output */}
                <div className="space-y-3 font-mono text-[11px] text-neutral-300 text-left">
                  <div className="text-white font-bold">$ ros2 run adb_navigation2 slam_cartographer</div>
                  <div className="text-neutral-500">[INFO] Node initialized at 50 Hz</div>
                  <div className="text-[#adceff] bg-white/[0.04] p-3 rounded-xl border border-white/[0.08]">
                    {rosLogs[rosLogIdx]}
                  </div>
                  <div className="text-neutral-500 text-[10px]">
                    Depth Camera: RealSense D435i · IMU: BNO085 9-DoF · Odom: 4-Wheel Hall
                  </div>
                </div>

              </div>

              {/* Robot Preview Images */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/[0.08]">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.06] bg-black flex items-center justify-center p-2">
                  <img src="/images/robot_dog_titan.jpg" alt="Autonomous Quadruped Robot" className="max-h-full object-contain" />
                </div>
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.06] bg-black flex items-center justify-center p-2">
                  <img src="/images/robotic_arm_titan.jpg" alt="6-Axis Precision Manipulator" className="max-h-full object-contain" />
                </div>
              </div>

            </div>

            {/* 4 R&D Capability Pillars */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
                <div className="text-xs text-[#adceff] uppercase font-bold tracking-wider">Pillar 01</div>
                <h3 className="text-lg font-bold text-white mt-1">Robotics Systems & Kinematics</h3>
                <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                  Mathematical modeling, inverse kinematics, quadruped trotting stabilization, and Gazebo physics simulation.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
                <div className="text-xs text-[#adceff] uppercase font-bold tracking-wider">Pillar 02</div>
                <h3 className="text-lg font-bold text-white mt-1">AI & Computer Vision Integration</h3>
                <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                  Real-time edge perception with YOLO, point-cloud segmentation, obstacle detection, and camera-LiDAR sensor fusion.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
                <div className="text-xs text-[#adceff] uppercase font-bold tracking-wider">Pillar 03</div>
                <h3 className="text-lg font-bold text-white mt-1">Embedded Systems & CAN Firmware</h3>
                <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                  Low-latency STM32 microcontrollers, CAN-bus inter-module communication, real-time BMS monitors, and brushless motor drivers.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
                <div className="text-xs text-[#adceff] uppercase font-bold tracking-wider">Pillar 04</div>
                <h3 className="text-lg font-bold text-white mt-1">Rapid Additive Prototyping</h3>
                <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                  Carbon-fiber reinforced 3D printed mechanical structures, CNC aluminum joints, and fast iterative hardware testing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 12: ROBOTICS & AI INDUSTRIAL INTERNSHIP (6-Week Program) */}
      <section id="internship" className="py-24 px-6 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Engineering Talent Incubator
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Robotics & AI Industrial Internship.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              A 6-week, project-based industrial internship with live mentorship and a simulated autonomous robot capstone. Learn simulation-first without requiring expensive physical hardware.
            </p>
          </div>

          {/* Program Highlights Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-center backdrop-blur-md">
              <Calendar className="w-6 h-6 text-[#adceff] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">6 Weeks</div>
              <div className="text-xs text-neutral-400 mt-1">Structured Duration</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-center backdrop-blur-md">
              <Activity className="w-6 h-6 text-[#adceff] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">18 Sessions</div>
              <div className="text-xs text-neutral-400 mt-1">Live Mentor-Led</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-center backdrop-blur-md">
              <Award className="w-6 h-6 text-[#adceff] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1 Capstone</div>
              <div className="text-xs text-neutral-400 mt-1">Autonomous Navigation</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-center backdrop-blur-md">
              <Bot className="w-6 h-6 text-[#adceff] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">All Disciplines</div>
              <div className="text-xs text-neutral-400 mt-1">CSE, AI/ML, ECE, EEE, Mech</div>
            </div>
          </div>

          {/* 6-Week Learning Roadmap Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition backdrop-blur-xl">
              <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Week 01</span>
              <h3 className="text-lg font-bold text-white mt-1.5">Robotics Foundations</h3>
              <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                Robot anatomy, degrees of freedom, coordinate reference frames, sensors, Linux command-line, and Python for engineers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition backdrop-blur-xl">
              <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Week 02</span>
              <h3 className="text-lg font-bold text-white mt-1.5">ROS 2 & Robot Modeling</h3>
              <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                Nodes, topics, services, actions, URDF robot modeling, sensor publishing, and Gazebo world physics setup.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition backdrop-blur-xl">
              <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Week 03</span>
              <h3 className="text-lg font-bold text-white mt-1.5">Kinematics & Control</h3>
              <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                Forward and inverse kinematics, differential drive controllers, wheel odometry calculations, and motor control theories.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition backdrop-blur-xl">
              <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Week 04</span>
              <h3 className="text-lg font-bold text-white mt-1.5">Computer Vision & AI</h3>
              <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                OpenCV image processing, color masking, depth camera streams, point clouds, and object detection with neural networks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition backdrop-blur-xl">
              <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Week 05</span>
              <h3 className="text-lg font-bold text-white mt-1.5">Autonomous Navigation (Nav2)</h3>
              <p className="text-[#adafb3] text-xs mt-2 leading-relaxed">
                2D/3D SLAM mapping, costmaps, global A* path planning, local DWB collision avoidance, and autonomous waypoint following.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.05] border border-white/20 transition backdrop-blur-xl">
              <span className="text-xs text-[#adceff] font-bold uppercase tracking-wider">Week 06</span>
              <h3 className="text-lg font-bold text-white mt-1.5">Capstone Demonstration</h3>
              <p className="text-neutral-300 text-xs mt-2 leading-relaxed">
                Full-mission deployment: simulated autonomous mobile robot completing warehouse delivery, obstacle evasion, and dock return.
              </p>
            </div>

          </div>

          {/* Internship Pre-Registration CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={() => { setModalType('internship'); setIsQuoteModalOpen(true); }}
              className="bg-white hover:bg-neutral-200 text-black font-extrabold text-sm px-10 py-3.5 rounded-full transition shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Apply / Join Internship Waitlist (Opening Soon)
            </button>
            <span className="block text-[#83868a] text-xs mt-3">
              *Draft curriculum for upcoming cohort. Selected applicants receive syllabus & timetable.
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 13: LEADERSHIP & ENGINEERING TEAM (Dossiers) */}
      <section id="team" className="py-24 px-6 border-b border-white/[0.08] bg-gradient-to-b from-black via-[#08090f] to-black relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              The Builders
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Leadership & Engineering Team.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Meet the founders, researchers, and engineers pioneering clean energy architecture and autonomous robotics at ADB Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.id}
                onClick={() => onNavigateToMember && onNavigateToMember(member.id)}
                className="group p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between cursor-pointer relative overflow-hidden text-left"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#adceff]/5 rounded-full blur-xl group-hover:bg-[#adceff]/15 transition"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#adceff] bg-[#adceff]/10 px-2.5 py-1 rounded-full border border-[#adceff]/20 font-bold">
                      {member.id}
                    </span>
                    <span className="text-[10px] text-[#83868a]">
                      {member.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#adceff] transition">
                    {member.name}
                  </h3>
                  <div className="text-xs font-medium text-neutral-400 mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-[#83868a] mt-1">
                    {member.department}
                  </div>

                  <p className="text-xs text-[#adafb3] mt-3 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#adceff] transition">
                  <span>View Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 14: TECHNICAL SPEC MATRIX (Specs) */}
      <section id="specs" className="py-24 px-6 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Engineering Transparency
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Technical Specification Matrix.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Comprehensive specifications of the ADB Labs PS1 Power Station and modular expansion subsystems.
            </p>
          </div>

          <div className="bg-white/[0.02] rounded-[32px] border border-white/[0.08] overflow-hidden text-xs backdrop-blur-xl">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.04] border-b border-white/[0.08]">
                  <th className="p-4 sm:p-5 text-[#83868a] font-bold uppercase tracking-wider">Subsystem Parameter</th>
                  <th className="p-4 sm:p-5 text-white font-bold uppercase tracking-wider">ADB Labs PS1 (Base Unit)</th>
                  <th className="p-4 sm:p-5 text-[#adceff] font-bold uppercase tracking-wider">PS1 + Expansion Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-neutral-300">
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Nominal Battery Capacity</td>
                  <td className="p-4 sm:p-5 font-bold text-white">6.144 kWh</td>
                  <td className="p-4 sm:p-5 font-bold text-[#adceff]">12.288 kWh (Modular Dual Stack)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Cell Chemistry</td>
                  <td className="p-4 sm:p-5">Automotive Prismatic LiFePO₄</td>
                  <td className="p-4 sm:p-5">Automotive Prismatic LiFePO₄</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Continuous AC Output</td>
                  <td className="p-4 sm:p-5">3 kW Target Pure Sine Wave</td>
                  <td className="p-4 sm:p-5">3 kW Target Pure Sine Wave</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Peak Surge Output</td>
                  <td className="p-4 sm:p-5">6 kW Surge Handling</td>
                  <td className="p-4 sm:p-5">6 kW Surge Handling</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Solar Charging Input</td>
                  <td className="p-4 sm:p-5">Up to 420W (Internal MPPT)</td>
                  <td className="p-4 sm:p-5">Up to 2.88 kWp (with Dual Array)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Cycle Life</td>
                  <td className="p-4 sm:p-5">&gt;3,500 Cycles to 80% Capacity</td>
                  <td className="p-4 sm:p-5">&gt;3,500 Cycles to 80% Capacity</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Telemetry & BMS Protocol</td>
                  <td className="p-4 sm:p-5">CAN-bus 2.0B / Bluetooth BLE</td>
                  <td className="p-4 sm:p-5">Synchronized CAN-bus Master/Slave</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Mobility & Enclosure</td>
                  <td className="p-4 sm:p-5">Heavy-Duty Caster Wheels & Handles</td>
                  <td className="p-4 sm:p-5">Modular Stack Latches & Locking Wheels</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#adafb3]">Engineering Status</td>
                  <td className="p-4 sm:p-5 text-white font-bold">In Development (Phase 3)</td>
                  <td className="p-4 sm:p-5 text-[#adceff] font-bold">Field Pilot Tested (Besant Nagar)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SECTION 15: ENGINEERING FAQ ACCORDION */}
      <section id="faq" className="py-24 px-6 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#adceff]">
              Got Questions?
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-[#adafb3] text-base sm:text-lg mt-4 leading-relaxed">
              Honest technical answers regarding battery chemistry, commercial sizing, pilot availability, and robotics research.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            
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
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 sm:p-7 font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 hover:text-[#adceff] transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-[#83868a] ${isOpen ? 'rotate-180 text-white' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 text-sm text-[#adafb3] leading-relaxed border-t border-white/[0.06] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* SECTION 16: ENGINEERING DISCLAIMERS & REGULATORY DISCLOSURES */}
      <section className="py-16 px-6 border-b border-white/[0.08] bg-black text-[#83868a] text-xs leading-relaxed text-left">
        <div className="max-w-6xl mx-auto space-y-3">
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

      {/* SECTION 17: OFFICIAL ADB LABS GLOBAL FOOTER */}
      <footer id="footer" className="bg-[#050609] py-20 px-6 text-[#adafb3] text-xs font-sans text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-white to-neutral-500 p-[1px]">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                  <span className="font-black text-white text-xs">ADB</span>
                </div>
              </div>
              <span className="font-bold text-lg text-white">ADB LABS</span>
            </div>
            <p className="text-[#83868a] max-w-sm leading-relaxed">
              A technology and R&D initiative focused on building practical solutions across clean energy, robotics, engineering, embedded systems, and product development.
            </p>
            <div className="pt-2 text-neutral-300 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#adceff]" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#adceff]" />
                <span>+91 8310704488</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#adceff]" />
                <span>mdzainoct@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Energy Solutions</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollToSection('hardware')} className="hover:text-white transition">ADB Labs PS1</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="hover:text-white transition">Commercial Off-Grid Packages</button></li>
              <li><button onClick={() => scrollToSection('hardware')} className="hover:text-white transition">Custom LiFePO₄ Battery Packs</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="hover:text-white transition">Shop 1 & Shop 2 Systems</button></li>
            </ul>
          </div>

          {/* Robotics Col */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Robotics & AI</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollToSection('robotics')} className="hover:text-white transition">Robotics Systems & Kinematics</button></li>
              <li><button onClick={() => scrollToSection('robotics')} className="hover:text-white transition">Computer Vision Perception</button></li>
              <li><button onClick={() => scrollToSection('robotics')} className="hover:text-white transition">Embedded STM32 / CAN Firmware</button></li>
              <li><button onClick={() => scrollToSection('internship')} className="hover:text-white transition">6-Week Industrial Internship</button></li>
            </ul>
          </div>

          {/* Quick Contact Box */}
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Request Quotation</h4>
            <p className="text-[#83868a] text-xs leading-relaxed">
              Get an engineered load audit and customized quote for your shop or facility.
            </p>
            <button
              onClick={() => { setModalType('quote'); setIsQuoteModalOpen(true); }}
              className="w-full bg-white hover:bg-neutral-200 text-black font-bold text-xs py-3 rounded-full transition text-center block shadow"
            >
              Get a Quote →
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-[#83868a] text-xs gap-4">
          <div>
            © 2026 ADB Labs. All rights reserved. Technology & R&D Initiative.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">Engineering Compliance</span>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE QUOTE & AUDIT MODAL */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#101217] border border-white/20 max-w-lg w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl text-left">
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] uppercase tracking-widest text-[#adceff] bg-[#adceff]/15 border border-[#adceff]/30 px-3 py-1 rounded-full font-bold">
              ADB Labs Commercial Direct
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
              {modalType === 'internship' ? 'Apply for Robotics Internship' : modalType === 'assessment' ? 'Book Free On-Site Solar Audit' : modalType === 'video' ? 'Besant Nagar Coastal Pilot Video' : 'Request Commercial System Quote'}
            </h3>

            {modalType === 'video' ? (
              <div className="mt-4 space-y-4">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center relative">
                  <img src="/images/besant_wide.png" alt="Video thumbnail" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl mb-3 cursor-pointer hover:scale-110 transition">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                    <span className="text-white font-bold text-sm">4K Pilot Field Documentary</span>
                    <span className="text-neutral-400 text-xs mt-1">Supervised field recording at Besant Nagar coastline</span>
                  </div>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  The documentary chronicles the 14-month continuous operation of ADB Labs PS1 replacing a smoky 5kVA diesel generator for a commercial seafood stall on Chennai's beach promenade.
                </p>
                <button
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="w-full bg-white hover:bg-neutral-200 text-black font-bold text-xs py-3 rounded-full transition mt-2"
                >
                  Close Video Player
                </button>
              </div>
            ) : (
              <>
                <p className="text-[#adafb3] text-xs mt-2">
                  {modalType === 'internship' 
                    ? 'Join the priority waitlist for the 6-Week Simulation-First Robotics & AI Industrial Internship.' 
                    : 'Share your requirements and our engineering team in Chennai will provide a dimensioned load breakdown.'}
                </p>

                <form onSubmit={handleQuoteSubmit} className="mt-6 space-y-4 text-xs">
                  <div>
                    <label className="block text-neutral-400 uppercase tracking-wider mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="e.g. Senthil Kumar"
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#adceff]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-400 uppercase tracking-wider mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#adceff]"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                        placeholder="name@business.com"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#adceff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-400 uppercase tracking-wider mb-1">Target Application</label>
                    <select 
                      value={quoteForm.solution}
                      onChange={(e) => setQuoteForm({ ...quoteForm, solution: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#adceff]"
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
                    <label className="block text-neutral-400 uppercase tracking-wider mb-1">Project Notes / Specific Loads</label>
                    <textarea
                      rows={3}
                      value={quoteForm.notes}
                      onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                      placeholder="Detail your equipment (e.g. 280W freezer running 12 hours/day at Besant Nagar beach stall)..."
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-[#adceff]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-neutral-200 text-black font-extrabold text-sm py-3 rounded-full transition shadow-lg mt-2"
                  >
                    Submit Consultation Request →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
