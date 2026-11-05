import React, { useState } from 'react';
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
import { ArrowLeft, Layers } from 'lucide-react';

function ADBLabsView() {
  const [activeView, setActiveView] = useState('home');
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  const scrollToQuote = () => {
    setActiveView('home');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleNavigate = (viewId) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSolution = (solId) => {
    if (solId === 'portable-power') {
      setActiveView('ps1');
    } else if (solId === 'robotics-rd') {
      setActiveView('robotics');
    } else if (solId === 'off-grid') {
      setActiveView('besant');
    } else {
      setActiveView('solutions');
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

      <StickySubNav
        activeView={activeView}
        onNavigate={handleNavigate}
        onScrollToQuote={scrollToQuote}
      />

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
            <AboutSection />
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

        {activeView === 'about' && (
          <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
            </div>
            <AboutSection />
            <SiteWorkflowSection onNavigate={handleNavigate} />
          </div>
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
  const [currentMode, setCurrentMode] = useState('ecoflow'); // 'ecoflow' (1-1 copy) or 'adblabs'

  return (
    <div className="relative">
      {/* View Switcher Pill */}
      <aside aria-label="Version Switcher" className="fixed bottom-6 left-6 z-[9999] flex items-center bg-black/85 backdrop-blur-md border border-neutral-700/80 rounded-full p-1 shadow-2xl text-xs font-semibold">
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
      </aside>

      {/* Render selected view */}
      {currentMode === 'ecoflow' ? <EcoFlowTitan /> : <ADBLabsView />}
    </div>
  );
}
