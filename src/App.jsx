import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import SmoothScrollProvider from './components/global/SmoothScrollProvider';
import PagePreloader from './components/global/PagePreloader';
import CustomCursor from './components/global/CustomCursor';
import PageTransition from './components/global/PageTransition';

import HomePage from './pages/HomePage';
const EnergySolutionsPage = lazy(() => import('./pages/EnergySolutionsPage'));
const PowerStationsPage = lazy(() => import('./pages/PowerStationsPage'));
const PS1ProductPage = lazy(() => import('./pages/PS1ProductPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const BesantNagarCaseStudyPage = lazy(() => import('./pages/BesantNagarCaseStudyPage'));
const RoboticsPage = lazy(() => import('./pages/RoboticsPage'));
const InternshipPage = lazy(() => import('./pages/InternshipPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MemberPortfolioPage = lazy(() => import('./pages/MemberPortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GetAQuotePage = lazy(() => import('./pages/GetAQuotePage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
      <Suspense fallback={
        <div className="min-h-[65vh] flex flex-col items-center justify-center gap-3 bg-[#050B0A]">
          <div className="w-10 h-10 rounded-xl border border-[#A3FF35]/40 bg-[#101C17] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A3FF35] animate-ping" />
          </div>
          <span className="text-[#A3ADA5] font-mono text-[11px] uppercase tracking-[0.2em]">Syncing Telemetry…</span>
        </div>
      }>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/energy-solutions" element={<EnergySolutionsPage />} />
        <Route path="/power-stations" element={<PowerStationsPage />} />
        <Route path="/power-stations/adb-ps1" element={<PS1ProductPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/besant-nagar-off-grid-system" element={<BesantNagarCaseStudyPage />} />
        <Route path="/robotics-rd" element={<RoboticsPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:memberId" element={<MemberPortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-a-quote" element={<GetAQuotePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen flex flex-col font-sans selection:bg-[#A3FF35] selection:text-black film-grain">
          <ScrollToTop />
          <PagePreloader />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}
