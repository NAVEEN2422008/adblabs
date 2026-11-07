import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import EnergySolutionsPage from './pages/EnergySolutionsPage';
import PowerStationsPage from './pages/PowerStationsPage';
import PS1ProductPage from './pages/PS1ProductPage';
import ProjectsPage from './pages/ProjectsPage';
import BesantNagarCaseStudyPage from './pages/BesantNagarCaseStudyPage';
import RoboticsPage from './pages/RoboticsPage';
import InternshipPage from './pages/InternshipPage';
import AboutPage from './pages/AboutPage';
import MemberPortfolioPage from './pages/MemberPortfolioPage';
import ContactPage from './pages/ContactPage';
import GetAQuotePage from './pages/GetAQuotePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen flex flex-col font-sans selection:bg-[#A3FF35] selection:text-black">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
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
            
            {/* Catch-all 404 handler */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
