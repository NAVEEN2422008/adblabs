import React, { useState } from 'react';
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
import { ArrowLeft } from 'lucide-react';

export default function App() {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060709] text-slate-100 selection:bg-green-500 selection:text-black">
      
      {/* Top Fixed Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenQuote={scrollToQuote}
      />

      {/* EcoFlow Titan-style Sticky Subnav (Appears upon scrolling past hero) */}
      {activeView === 'home' && (
        <StickySubNav
          onOpenQuote={scrollToQuote}
          activeSection="ps1"
        />
      )}

      {/* Subpage Breadcrumb & Return to Home button */}
      {activeView !== 'home' && (
        <div className="pt-24 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setActiveView('home')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-green-400 hover:border-green-500/50 transition-colors"
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
            {/* Cinematic Hero with 3D Mouse Parallax & Real Photorealistic PS1 Render */}
            <Hero
              onExploreSolutions={() => {
                const el = document.getElementById('solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenCapabilities={() => {
                const el = document.getElementById('architecture');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenPS1={() => setActiveView('ps1')}
            />

            {/* EcoFlow Titan Section 1: Benchmark Comparison (Diesel vs PS1) */}
            <BenchmarkComparison />

            {/* EcoFlow Titan Section 2: "Get the Highlights" Asymmetrical Bento Grid */}
            <BentoHighlights onOpenQuote={scrollToQuote} />

            {/* EcoFlow Titan Modular Architecture & Exploded Subsystem Docking */}
            <PS1ExplodedView onOpenQuote={scrollToQuote} />

            {/* ADB Labs PS1 Multi-Angle Interactive Showcase */}
            <PS1Showcase onOpenQuote={scrollToQuote} />

            {/* Our Solutions Section (4 Cards Grid with Real Photography from Mockup) */}
            <EnergySolutions
              isSubView={false}
              onSelectSolution={handleSelectSolution}
              onOpenQuote={scrollToQuote}
            />

            {/* Featured Project: Besant Nagar Commercial Fish Stall Pilot */}
            <ProjectsShowcase
              isSubView={false}
              onOpenQuote={scrollToQuote}
            />

            {/* EcoFlow Titan Live Appliance & Autonomy Simulator */}
            <RuntimeCalculator onOpenQuote={scrollToQuote} />

            {/* EcoFlow Titan Section 8: Financial Payback Odometer & ROI */}
            <FinancialROI onOpenQuote={scrollToQuote} />

            {/* Applied Robotics & Edge AI Division (Quadruped Platform & ROS 2) */}
            <RoboticsRnD
              isSubView={false}
              onOpenInternship={() => setIsInternshipModalOpen(true)}
            />

            {/* Robotics & AI Industrial Internship (6-Axis Arm & 6-Week Roadmap) */}
            <InternshipSection
              isSubView={false}
              onOpenInternshipModal={() => setIsInternshipModalOpen(true)}
            />

            {/* Our Process (5 Steps) */}
            <ProcessSection />

            {/* EcoFlow Titan Section 13: 3-Tier Technical Spec Matrix */}
            <SpecMatrix onOpenQuote={scrollToQuote} />

            {/* About ADB Labs Facility & Focus Areas */}
            <AboutSection isSubView={false} />

            {/* Direct Quote Request & Feasibility Assessment Form */}
            <ContactSection />
          </>
        )}

        {/* Dedicated Page View: ADB Labs PS1 Power Station (Multi-Angle) */}
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

        {/* Dedicated Page View: About ADB Labs */}
        {activeView === 'about' && (
          <AboutSection isSubView={true} />
        )}
      </main>

      {/* Site Workflow & Structure (Architecture Diagram & Sitemap matching Mockup) */}
      <SiteWorkflowSection
        onNavigate={handleNavigate}
        onOpenQuote={scrollToQuote}
      />

      {/* Full Footer with Grounded Contact Information */}
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
