import React, { useState, useEffect } from 'react';
import EcoFlowTitan from './EcoFlowTitan';
import Navbar from './components/Navbar';
import StickySubNav from './components/StickySubNav';
import Hero from './components/Hero';
import BenchmarkComparison from './components/BenchmarkComparison';
import BentoHighlights from './components/BentoHighlights';
import PS1ExplodedView from './components/PS1ExplodedView';
import EnergySolutions from './components/EnergySolutions';
import PS1Showcase from './components/PS1Showcase';
import ProjectsShowcase from './components/ProjectsShowcase';
import RuntimeCalculator from './components/RuntimeCalculator';
import FinancialROI from './components/FinancialROI';
import RoboticsRnD from './components/RoboticsRnD';
import InternshipSection from './components/InternshipSection';
import ProcessSection from './components/ProcessSection';
import SpecMatrix from './components/SpecMatrix';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import SiteWorkflowSection from './components/SiteWorkflowSection';
import Footer from './components/Footer';
import InternshipModal from './components/InternshipModal';
import TeamDirectory from './components/TeamDirectory';
import MemberPortfolio from './components/MemberPortfolio';
import { TEAM_MEMBERS } from './data/teamData';
import { ArrowLeft, Layers } from 'lucide-react';

function parseLocation() {
  if (typeof window === 'undefined') return { view: 'home', code: null };
  const rawPath = window.location.pathname.replace(/\/+$/, '') || '/';
  
  // Match /about/:code or /about/ADB-446-001
  const memberMatch = rawPath.match(/^\/about\/(.+)$/i);
  if (memberMatch) {
    let code = decodeURIComponent(memberMatch[1]).toUpperCase();
    if (/^\d{3}$/.test(code)) {
      code = `ADB-446-${code}`;
    }
    return { view: 'portfolio', code };
  }

  if (rawPath === '/about') {
    return { view: 'about', code: null };
  }
  if (rawPath === '/ps1') return { view: 'ps1', code: null };
  if (rawPath === '/besant' || rawPath === '/projects') return { view: 'besant', code: null };
  if (rawPath === '/solutions') return { view: 'solutions', code: null };
  if (rawPath === '/robotics') return { view: 'robotics', code: null };
  if (rawPath === '/internship') return { view: 'internship', code: null };

  return { view: 'home', code: null };
}

function ADBLabsView() {
  const initialLoc = parseLocation();
  const [activeView, setActiveView] = useState(initialLoc.view);
  const [selectedEmployeeCode, setSelectedEmployeeCode] = useState(initialLoc.code);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  // Sync route with URL history
  const navigateTo = (viewId, code = null, push = true) => {
    setActiveView(viewId);
    setSelectedEmployeeCode(code);

    let targetPath = '/';
    if (viewId === 'about') targetPath = '/about';
    else if (viewId === 'portfolio' && code) targetPath = `/about/${code}`;
    else if (viewId === 'ps1') targetPath = '/ps1';
    else if (viewId === 'besant') targetPath = '/besant';
    else if (viewId === 'solutions') targetPath = '/solutions';
    else if (viewId === 'robotics') targetPath = '/robotics';
    else if (viewId === 'internship') targetPath = '/internship';

    if (push && window.location.pathname !== targetPath) {
      window.history.pushState({ viewId, code }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseLocation();
      setActiveView(parsed.view);
      setSelectedEmployeeCode(parsed.code);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic document title updates
  useEffect(() => {
    if (activeView === 'portfolio' && selectedEmployeeCode) {
      const member = TEAM_MEMBERS.find(
        (m) => m.id.toLowerCase() === selectedEmployeeCode.toLowerCase()
      );
      if (member) {
        document.title = `${member.name} (${member.id}) | ADB Labs Portfolio`;
      } else {
        document.title = `Portfolio (${selectedEmployeeCode}) | ADB Labs`;
      }
    } else if (activeView === 'about') {
      document.title = `Team Directory & Engineering Roster (17 Members) | ADB Labs`;
    } else {
      document.title = `ADB Labs | Off-Grid Clean Energy & Applied Robotics`;
    }
  }, [activeView, selectedEmployeeCode]);

  const scrollToQuote = () => {
    navigateTo('home');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleNavigate = (viewId) => {
    navigateTo(viewId);
  };

  const handleSelectSolution = (solId) => {
    if (solId === 'portable-power') {
      navigateTo('ps1');
    } else if (solId === 'robotics-rd') {
      navigateTo('robotics');
    } else if (solId === 'off-grid') {
      navigateTo('besant');
    } else {
      navigateTo('solutions');
    }
  };

  return (
    <div className="min-h-screen bg-[#04060c] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar
        onOpenInternship={() => setIsInternshipModalOpen(true)}
        onScrollToQuote={scrollToQuote}
        onNavigate={handleNavigate}
        activeView={activeView}
      />

      {activeView === 'home' && (
        <StickySubNav
          activeView={activeView}
          onNavigate={handleNavigate}
          onScrollToQuote={scrollToQuote}
        />
      )}

      {/* Breadcrumb & Return to Home button for subviews */}
      {activeView !== 'home' && (
        <div className="pt-24 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-green-400 hover:border-green-500/50 transition-colors shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Home Overview</span>
          </button>
        </div>
      )}

      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            <Hero onOpenInternship={() => setIsInternshipModalOpen(true)} onScrollToQuote={scrollToQuote} />
            <BentoHighlights onNavigate={handleNavigate} />
            <BenchmarkComparison />
            <PS1ExplodedView />
            <EnergySolutions onSelectSolution={handleSelectSolution} onNavigate={handleNavigate} />
            <ProjectsShowcase onNavigate={handleNavigate} />
            <RuntimeCalculator onNavigate={handleNavigate} />
            <FinancialROI onNavigate={handleNavigate} />
            <RoboticsRnD onOpenInternship={() => setIsInternshipModalOpen(true)} onNavigate={handleNavigate} />
            <InternshipSection onOpenModal={() => setIsInternshipModalOpen(true)} />
            <ProcessSection />
            <SpecMatrix />
            <AboutSection onNavigateToTeam={() => navigateTo('about')} />
            <SiteWorkflowSection onNavigate={handleNavigate} />
            <ContactSection />
          </>
        )}

        {activeView === 'ps1' && (
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Overview
              </button>
            </div>
            <PS1Showcase onScrollToQuote={scrollToQuote} />
            <SpecMatrix />
          </div>
        )}

        {activeView === 'solutions' && (
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
            </div>
            <EnergySolutions onSelectSolution={handleSelectSolution} onNavigate={handleNavigate} />
            <RuntimeCalculator onNavigate={handleNavigate} />
            <FinancialROI onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'robotics' && (
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
            </div>
            <RoboticsRnD onOpenInternship={() => setIsInternshipModalOpen(true)} onNavigate={handleNavigate} />
            <InternshipSection onOpenModal={() => setIsInternshipModalOpen(true)} />
          </div>
        )}

        {activeView === 'besant' && (
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
            </div>
            <ProjectsShowcase onNavigate={handleNavigate} />
            <FinancialROI onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'calculator' && (
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
            </div>
            <RuntimeCalculator onNavigate={handleNavigate} />
            <FinancialROI onNavigate={handleNavigate} />
          </div>
        )}

        {/* Dedicated Page View: About ADB Labs & 17-Member Team Directory */}
        {activeView === 'about' && (
          <div className="pt-16 pb-16">
            <TeamDirectory 
              onSelectMember={(code) => navigateTo('portfolio', code)} 
            />
            <AboutSection isSubView={true} />
            <SiteWorkflowSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* Dedicated Page View: Individual Team Member Portfolio (/about/:employeeCode) */}
        {activeView === 'portfolio' && (
          <MemberPortfolio
            employeeCode={selectedEmployeeCode}
            onNavigateToTeam={() => navigateTo('about')}
            onNavigateToMember={(code) => navigateTo('portfolio', code)}
          />
        )}

        {activeView === 'contact' && (
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
            </div>
            <ContactSection />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <InternshipModal
        isOpen={isInternshipModalOpen}
        onClose={() => setIsInternshipModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  const initialLoc = parseLocation();
  // If user visits /about or a portfolio deep-link, open ADB Labs view directly
  const isDeepRoute = initialLoc.view !== 'home';
  const [currentMode, setCurrentMode] = useState(isDeepRoute ? 'adblabs' : 'adblabs');

  return (
    <div className="relative">
      {/* View Switcher Pill */}
      <aside aria-label="Version Switcher" className="fixed bottom-6 left-6 z-[9999] flex items-center bg-black/85 backdrop-blur-md border border-neutral-700/80 rounded-full p-1 shadow-2xl text-xs font-semibold">
        <button
          onClick={() => setCurrentMode('adblabs')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition ${
            currentMode === 'adblabs'
              ? 'bg-cyan-500 text-black shadow'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          ADB Labs Site
        </button>
        <button
          onClick={() => setCurrentMode('ecoflow')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition ${
            currentMode === 'ecoflow'
              ? 'bg-white text-black shadow'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          EcoFlow TITAN (1:1 Replica)
        </button>
      </aside>

      {/* Render selected view */}
      {currentMode === 'ecoflow' ? <EcoFlowTitan /> : <ADBLabsView />}
    </div>
  );
}
