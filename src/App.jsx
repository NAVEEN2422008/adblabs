import React, { useState, useEffect } from 'react';
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
import { ArrowLeft } from 'lucide-react';

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

export default function App() {
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
    <div className="min-h-screen bg-[#060709] text-slate-100 selection:bg-green-500 selection:text-black">
      
      {/* Top Fixed Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={(v) => navigateTo(v)}
        onOpenQuote={scrollToQuote}
      />

      {/* Sticky Subnav on Home View */}
      {activeView === 'home' && (
        <StickySubNav
          onOpenQuote={scrollToQuote}
          activeSection="ps1"
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

      {/* Main Content Area */}
      <main>
        {activeView === 'home' && (
          <>
            {/* Cinematic Hero */}
            <Hero
              onExploreSolutions={() => {
                const el = document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenCapabilities={() => {
                const el = document.getElementById('architecture');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenPS1={() => navigateTo('ps1')}
            />

            {/* Benchmark Comparison */}
            <BenchmarkComparison />

            {/* Bento Highlights */}
            <BentoHighlights onOpenQuote={scrollToQuote} />

            {/* PS1 Modular Architecture & Exploded Subsystem */}
            <PS1ExplodedView onOpenQuote={scrollToQuote} />

            {/* PS1 Showcase */}
            <PS1Showcase onOpenQuote={scrollToQuote} />

            {/* Energy Solutions */}
            <EnergySolutions
              isSubView={false}
              onSelectSolution={handleSelectSolution}
              onOpenQuote={scrollToQuote}
            />

            {/* Featured Project: Besant Nagar */}
            <ProjectsShowcase
              isSubView={false}
              onOpenQuote={scrollToQuote}
            />

            {/* Runtime Calculator */}
            <RuntimeCalculator onOpenQuote={scrollToQuote} />

            {/* Financial ROI */}
            <FinancialROI onOpenQuote={scrollToQuote} />

            {/* Applied Robotics Division */}
            <RoboticsRnD
              isSubView={false}
              onOpenInternship={() => setIsInternshipModalOpen(true)}
            />

            {/* Robotics Internship */}
            <InternshipSection
              isSubView={false}
              onOpenInternshipModal={() => setIsInternshipModalOpen(true)}
            />

            {/* Our Process */}
            <ProcessSection />

            {/* Spec Matrix */}
            <SpecMatrix onOpenQuote={scrollToQuote} />

            {/* About ADB Labs Facility & Team Showcase */}
            <AboutSection 
              isSubView={false} 
              onNavigateToTeam={() => navigateTo('about')}
            />

            {/* Contact Form */}
            <ContactSection />
          </>
        )}

        {/* Dedicated Page View: ADB Labs PS1 Power Station */}
        {activeView === 'ps1' && (
          <PS1Showcase onOpenQuote={scrollToQuote} />
        )}

        {/* Dedicated Page View: Besant Nagar Off-Grid System */}
        {activeView === 'besant' && (
          <ProjectsShowcase isSubView={true} onOpenQuote={scrollToQuote} />
        )}

        {/* Dedicated Page View: Energy Solutions */}
        {activeView === 'solutions' && (
          <EnergySolutions
            isSubView={true}
            onSelectSolution={handleSelectSolution}
            onOpenQuote={scrollToQuote}
          />
        )}

        {/* Dedicated Page View: Robotics & R&D */}
        {activeView === 'robotics' && (
          <RoboticsRnD
            isSubView={true}
            onOpenInternship={() => setIsInternshipModalOpen(true)}
          />
        )}

        {/* Dedicated Page View: Industrial Internship Program */}
        {activeView === 'internship' && (
          <InternshipSection
            isSubView={true}
            onOpenInternshipModal={() => setIsInternshipModalOpen(true)}
          />
        )}

        {/* Dedicated Page View: About ADB Labs & 17-Member Team Directory */}
        {activeView === 'about' && (
          <div>
            <TeamDirectory 
              onSelectMember={(code) => navigateTo('portfolio', code)} 
            />
            <AboutSection 
              isSubView={true} 
            />
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
      </main>

      {/* Site Workflow & Structure */}
      <SiteWorkflowSection
        onNavigate={handleNavigate}
        onOpenQuote={scrollToQuote}
      />

      {/* Full Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={scrollToQuote}
      />

      {/* Priority Waitlist Modal */}
      <InternshipModal
        isOpen={isInternshipModalOpen}
        onClose={() => setIsInternshipModalOpen(false)}
      />
    </div>
  );
}
