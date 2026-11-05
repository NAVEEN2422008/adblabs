import React, { useEffect, useRef, useState } from 'react';
import { ecoflowTitanHtml } from './data/ecoflowTitanHtml';
import './titan.css';

export default function EcoFlowTitan() {
  const containerRef = useRef(null);
  const [toastMsg, setToastMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // 1. FAQ Accordion Click Handler
    const faqItems = root.querySelectorAll('.Titan-C26 .items .item');
    const handleFaqClick = function (e) {
      e.preventDefault();
      const isActive = this.classList.contains('active');
      this.classList.toggle('active', !isActive);
    };

    faqItems.forEach(item => {
      item.addEventListener('click', handleFaqClick);
    });

    // 2. Titan-C8 Appliance Tabs Click Handler
    const c8Tabs = root.querySelectorAll('.Titan-C8 .tabs .tab');
    const c8Items = root.querySelectorAll('.Titan-C8 .items .item');
    const c8Bg = root.querySelector('.Titan-C8 .tabs .bg');

    if (c8Tabs.length > 0) {
      if (c8Bg) c8Bg.classList.add('is-ready');

      c8Tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          c8Tabs.forEach(t => t.classList.remove('active', 'default'));
          tab.classList.add('active');

          c8Items.forEach((it, i) => {
            if (i === index) {
              it.classList.add('active');
            } else {
              it.classList.remove('active');
            }
          });

          if (c8Bg) {
            c8Bg.style.transform = `translateX(${index * 100}%)`;
          }
        });
      });
    }

    // 3. Sticky Sub-Nav Links Smooth Scroll & Scroll Spy
    const navLinks = root.querySelectorAll('.Titan-C2 a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').replace('#', '');
        const targetElem = root.querySelector(`#${targetId}`);
        if (targetElem) {
          e.preventDefault();
          const navHeight = 90;
          const targetPosition = targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // 4. Email subscription submit
    const emailBtn = root.querySelector('.Titan-C5-email-box button, .Titan-C5-email-box .Titan-C5-btn-4');
    const emailInput = root.querySelector('.Titan-C5-email-box input');
    if (emailBtn) {
      emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const val = emailInput ? emailInput.value.trim() : '';
        if (val && val.includes('@')) {
          setToastMsg(`Thank you! A $50 TITAN voucher has been sent to ${val}.`);
          if (emailInput) emailInput.value = '';
        } else {
          setToastMsg('Please enter a valid email address.');
        }
        setTimeout(() => setToastMsg(''), 4500);
      });
    }

    // 5. Modals for "Plan Before You Buy" / Assessment buttons
    const assessmentBtns = root.querySelectorAll('[data-btn-id*="Plan"], [data-btn-id*="Assess"], .Titan-C22 .item .Eco-Link, .Titan-C21 .btn');
    assessmentBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        setModalTitle(btn.innerText || 'Schedule Your Free Installation Assessment');
        setShowModal(true);
      });
    });

    // 6. Scroll spy for sticky sub-nav & back-to-top button
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 600);

      const nav = root.querySelector('.Titan-C2');
      if (nav) {
        if (scrollY > 400) {
          nav.classList.add('is-sticky');
        } else {
          nav.classList.remove('is-sticky');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      faqItems.forEach(item => item.removeEventListener('click', handleFaqClick));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="ecoflow-titan-wrapper relative bg-black text-white min-h-screen">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] bg-[#1a73e8] text-white px-6 py-3 rounded-full font-medium shadow-2xl flex items-center gap-3 transition-all animate-bounce">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {toastMsg}
        </div>
      )}

      {/* Assessment / Consultation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14171d] border border-neutral-700 max-w-lg w-full rounded-2xl p-6 sm:p-8 relative shadow-2xl text-left">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-full">
              EcoFlow Professional Services
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
              {modalTitle}
            </h3>
            <p className="text-neutral-400 text-sm mt-2">
              Connect with an official EcoFlow energy specialist. We will evaluate your electrical panel, calculate solar sizing, and provide guaranteed 7-day install pricing.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
                setToastMsg('Consultation requested! An EcoFlow specialist will contact you within 24 hours.');
                setTimeout(() => setToastMsg(''), 5000);
              }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  className="w-full bg-[#1e232b] border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#1e232b] border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">ZIP / Postal Code</label>
                  <input
                    type="text"
                    required
                    placeholder="90210"
                    className="w-full bg-[#1e232b] border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Home Electrical Setup</label>
                <select className="w-full bg-[#1e232b] border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400">
                  <option>100A or 200A Standard Main Panel</option>
                  <option>Have Existing Rooftop Solar</option>
                  <option>Need Whole-Home Battery + Smart Panel 10</option>
                  <option>Off-Grid or Remote Cabin Project</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-white hover:bg-neutral-200 text-black font-semibold py-3 rounded-full transition mt-4"
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-[9000] bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          title="Back to Top"
        >
          <svg className="w-5 h-5 text-neutral-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* 1-to-1 EcoFlow TITAN Series Rendered Tree */}
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: ecoflowTitanHtml }}
      />
    </div>
  );
}
