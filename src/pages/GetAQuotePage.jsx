import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  Battery, 
  Building, 
  Bot, 
  Layers, 
  Sun, 
  ShieldCheck, 
  AlertCircle,
  Clock,
  MapPin,
  Mail,
  Phone,
  FileText
} from 'lucide-react';

export default function GetAQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Application
    application: 'Off-grid solar system',
    // Step 2: Scale
    scale: 'Small business',
    // Step 3: Dynamic Requirements
    appliances: {
      chiller: true,
      sign: true,
      leds: true,
      blender: false,
      waffle: false,
      pos: true,
      ac: false
    },
    operatingHours: '10-14 hours / day',
    backupDuration: '12-24 hours',
    existingSource: 'Commercial Diesel Generator',
    solarSpaceAvailable: 'Yes (Rooftop or Canopy)',
    // Step 4: Additional Details
    projectDescription: '',
    location: 'Chennai, Tamil Nadu',
    budgetRange: '₹1.5 Lakhs – ₹3 Lakhs',
    timeline: 'Immediate (Within 30 Days)',
    // Step 5: Contact Info
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: 'Chennai',
    preferredContact: 'Phone Call'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Validation functions
  const validateStep = (step) => {
    const newErrors = {};
    if (step === 5) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^(\+91[\-\s]?)?[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(5)) {
      setCurrentStep(5);
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission to backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedId = `ADB-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedId);
      // Persist in localStorage for customer record
      try {
        const stored = JSON.parse(localStorage.getItem('adblabs_enquiries') || '[]');
        stored.push({ id: generatedId, timestamp: new Date().toISOString(), data: formData });
        localStorage.setItem('adblabs_enquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage save skipped');
      }
    }, 1200);
  };

  return (
    <div className="bg-[#050B0A] text-[#F5F7F2] min-h-screen selection:bg-[#A3FF35] selection:text-black">
      
      {/* Header */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#A3FF35]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold block">
            SMART ENGINEERING SIZING WIZARD
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
            Configure Your Solution.
          </h1>
          <p className="text-[#A3ADA5] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Answer a few quick technical questions to generate an accurate load profile and receive a customized engineering quotation.
          </p>

          {/* Stepper Progress Bar */}
          {!isSubmitted && (
            <div className="pt-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#68776D] mb-2 uppercase">
                <span>Step {currentStep} of {totalSteps}</span>
                <span className="text-[#A3FF35]">
                  {currentStep === 1 && 'Application'}
                  {currentStep === 2 && 'Scale'}
                  {currentStep === 3 && 'Requirements'}
                  {currentStep === 4 && 'Project Scope'}
                  {currentStep === 5 && 'Contact Info'}
                  {currentStep === 6 && 'Review & Submit'}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#101C17] border border-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#A3FF35] to-[#6DEB38]"
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Form Container */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-[#091310] border border-white/10 shadow-2xl text-left">
            
            {!isSubmitted ? (
              <div>
                
                {/* STEP 1: APPLICATION */}
                {currentStep === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#A3FF35] font-bold">STEP 01 // SELECTION</span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                        What is your primary application?
                      </h2>
                      <p className="text-xs text-[#A3ADA5] mt-1">Select the operational domain you are designing for.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {[
                        { title: 'Off-grid solar system', desc: 'Commercial food stall, beach kiosk, remote shop', icon: Sun },
                        { title: 'Home backup system', desc: 'Air conditioners, refrigerator, uninterrupted power', icon: Zap },
                        { title: 'Small business power', desc: 'Cafes, retail clinics, commercial registers', icon: Building },
                        { title: 'Portable power station', desc: 'ADB Labs PS1 standalone or dual-stack unit', icon: Battery },
                        { title: 'Custom battery solution', desc: 'Bespoke LiFePO₄ prismatic packs with CAN BMS', icon: Layers },
                        { title: 'Robotics / R&D', desc: 'Autonomous mobile robots, custom firmware, perception', icon: Bot },
                        { title: 'Other engineering challenge', desc: 'Custom energy or embedded development', icon: ShieldCheck }
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.application === item.title;
                        return (
                          <div
                            key={item.title}
                            onClick={() => setFormData({ ...formData, application: item.title })}
                            className={`p-5 rounded-2xl border cursor-pointer transition flex items-start gap-4 ${
                              isSelected
                                ? 'bg-[#101C17] border-[#A3FF35] shadow-[0_0_20px_rgba(163,255,55,0.15)]'
                                : 'bg-[#050B0A] border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className={`p-2 rounded-xl flex-shrink-0 ${isSelected ? 'bg-[#A3FF35] text-black' : 'bg-[#101C17] text-[#A3FF35]'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className={`font-heading font-bold text-sm ${isSelected ? 'text-[#A3FF35]' : 'text-white'}`}>
                                {item.title}
                              </div>
                              <div className="text-xs text-[#A3ADA5] mt-0.5">{item.desc}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: SCALE */}
                {currentStep === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#A3FF35] font-bold">STEP 02 // SIZING</span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                        What is the scale of the deployment?
                      </h2>
                      <p className="text-xs text-[#A3ADA5] mt-1">This guides battery capacity and solar array engineering.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {[
                        { title: 'Personal', desc: 'Residential backup, apartment or portable use (3kW–6kWh)', capacity: '6.144 kWh Single' },
                        { title: 'Small business', desc: 'Retail stall, night food counter, beverage kiosk', capacity: '6.1 ~ 12.3 kWh' },
                        { title: 'Commercial', desc: 'Continuous 24/7 cold storage, multi-appliance operations', capacity: '12.288 kWh Dual Stack' },
                        { title: 'Industrial', desc: 'Multi-unit microgrid, custom vehicle or robotics fleet', capacity: 'Custom Microgrid' }
                      ].map((item) => {
                        const isSelected = formData.scale === item.title;
                        return (
                          <div
                            key={item.title}
                            onClick={() => setFormData({ ...formData, scale: item.title })}
                            className={`p-6 rounded-2xl border cursor-pointer transition space-y-2 ${
                              isSelected
                                ? 'bg-[#101C17] border-[#A3FF35] shadow-[0_0_20px_rgba(163,255,55,0.15)]'
                                : 'bg-[#050B0A] border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`font-heading font-bold text-base ${isSelected ? 'text-[#A3FF35]' : 'text-white'}`}>
                                {item.title}
                              </span>
                              <span className="text-[10px] font-mono text-[#68776D] bg-black/40 px-2 py-0.5 rounded">
                                {item.capacity}
                              </span>
                            </div>
                            <p className="text-xs text-[#A3ADA5]">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: DYNAMIC REQUIREMENTS */}
                {currentStep === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#A3FF35] font-bold">STEP 03 // ELECTRICAL LOADS</span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                        Specify Your Connected Equipment
                      </h2>
                      <p className="text-xs text-[#A3ADA5] mt-1">Select active appliances to compute expected continuous wattage.</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          { key: 'chiller', label: 'Deep Chiller (280W / 1.6kW surge)' },
                          { key: 'sign', label: 'Illuminated Night Sign (150W)' },
                          { key: 'leds', label: 'Stall Customer LEDs (80W)' },
                          { key: 'blender', label: 'Commercial Blender (600W)' },
                          { key: 'waffle', label: 'Waffle Iron (1,000W)' },
                          { key: 'pos', label: 'POS Terminal / Billing (40W)' },
                          { key: 'ac', label: '1.5 Ton Inverter AC (1,200W)' }
                        ].map((app) => {
                          const isActive = formData.appliances[app.key];
                          return (
                            <button
                              key={app.key}
                              type="button"
                              onClick={() => setFormData({
                                ...formData,
                                appliances: { ...formData.appliances, [app.key]: !isActive }
                              })}
                              className={`p-3.5 rounded-xl border text-left text-xs font-mono transition flex flex-col justify-between ${
                                isActive
                                  ? 'bg-[#101C17] border-[#A3FF35] text-white shadow'
                                  : 'bg-[#050B0A] border-white/10 text-[#68776D]'
                              }`}
                            >
                              <span className="font-semibold">{app.label}</span>
                              <span className={`text-[10px] mt-2 font-bold ${isActive ? 'text-[#A3FF35]' : 'text-neutral-500'}`}>
                                {isActive ? '✓ SELECTED' : '+ ADD'}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                          <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">DAILY OPERATING HOURS</label>
                          <select
                            value={formData.operatingHours}
                            onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                            className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                          >
                            <option>4-6 hours / day (Evening only)</option>
                            <option>8-10 hours / day (Standard shift)</option>
                            <option>10-14 hours / day (Extended kiosk)</option>
                            <option>24 Hours Continuous (Round-the-clock)</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">CURRENT POWER SOURCE</label>
                          <select
                            value={formData.existingSource}
                            onChange={(e) => setFormData({ ...formData, existingSource: e.target.value })}
                            className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                          >
                            <option>Commercial Diesel Generator (Replacing)</option>
                            <option>Unstable / Intermittent Grid Connection</option>
                            <option>Completely Off-Grid (No Power Currently)</option>
                            <option>Existing Lead-Acid Inverter (Upgrading)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: ADDITIONAL DETAILS */}
                {currentStep === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#A3FF35] font-bold">STEP 04 // PROJECT SCOPE</span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                        Timeline & Site Characteristics
                      </h2>
                      <p className="text-xs text-[#A3ADA5] mt-1">Help us prepare mounting hardware and delivery scheduling.</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">INSTALLATION LOCATION / CITY *</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Besant Nagar Beach, Chennai, Tamil Nadu"
                          className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">TARGET TIMELINE</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                          >
                            <option>Immediate (Within 30 Days)</option>
                            <option>1 to 3 Months</option>
                            <option>3 to 6 Months</option>
                            <option>Exploratory / Feasibility Stage</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">BUDGET BRACKET (ESTIMATE)</label>
                          <select
                            value={formData.budgetRange}
                            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                            className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                          >
                            <option>₹1.0 Lakh – ₹1.8 Lakhs (Starter Setup)</option>
                            <option>₹1.8 Lakhs – ₹3.2 Lakhs (Expanded Dual Stack)</option>
                            <option>₹3.2 Lakhs+ (Commercial Multi-Unit / R&D)</option>
                            <option>Flexible / To Be Evaluated</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">ADDITIONAL NOTES / SPECIFIC REQUIREMENTS</label>
                        <textarea
                          rows={3}
                          value={formData.projectDescription}
                          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                          placeholder="Any details regarding roof canopy dimensions, marine coastal salt air, or special surge equipment..."
                          className="w-full bg-[#050B0A] border border-white/15 px-4 py-2.5 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: CONTACT INFORMATION */}
                {currentStep === 5 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#A3FF35] font-bold">STEP 05 // DIRECT CONTACT</span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                        Where should we transmit your quote?
                      </h2>
                      <p className="text-xs text-[#A3ADA5] mt-1">An ADB Labs commercial energy engineer will contact you directly.</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">FULL NAME *</label>
                        <input
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Senthil Nathan"
                          className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                        />
                        {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">EMAIL ADDRESS *</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@business.com"
                            className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                          />
                          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">PHONE NUMBER (10-DIGIT INDIAN) *</label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 9840012345"
                            className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                          />
                          {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">BUSINESS / ENTITY NAME</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Marina Fresh Seafoods"
                            className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-mono text-[#A3ADA5] block mb-1">PREFERRED CONTACT METHOD</label>
                          <select
                            value={formData.preferredContact}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                            className="w-full bg-[#050B0A] border border-white/15 px-4 py-3 rounded-xl text-white text-xs focus:border-[#A3FF35] outline-none"
                          >
                            <option>Phone Call</option>
                            <option>WhatsApp Message</option>
                            <option>Email Transmission</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 6: REVIEW & SUBMIT */}
                {currentStep === 6 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase text-[#A3FF35] font-bold">STEP 06 // VERIFICATION</span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                        Review Your Engineering Dossier
                      </h2>
                      <p className="text-xs text-[#A3ADA5] mt-1">Confirm all parameters before formal submission to ADB Labs dispatch.</p>
                    </div>

                    <div className="space-y-4 bg-[#050B0A] p-6 rounded-2xl border border-white/10 font-mono text-xs">
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-[#68776D]">APPLICATION:</span>
                        <span className="text-white font-bold">{formData.application}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-[#68776D]">SCALE:</span>
                        <span className="text-[#A3FF35] font-bold">{formData.scale}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-[#68776D]">OPERATING HOURS:</span>
                        <span className="text-white">{formData.operatingHours}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-[#68776D]">LOCATION:</span>
                        <span className="text-white">{formData.location}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-[#68776D]">CONTACT NAME:</span>
                        <span className="text-white font-bold">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-[#68776D]">EMAIL & PHONE:</span>
                        <span className="text-[#A3FF35]">{formData.email} · {formData.phone}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-[#68776D]">TARGET TIMELINE:</span>
                        <span className="text-white">{formData.timeline}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#101C17] border border-[#A3FF35]/20 text-xs text-[#A3ADA5] flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#A3FF35] flex-shrink-0 mt-0.5" />
                      <span>
                        Your information is processed directly by ADB Labs commercial energy staff in Chennai. We do not sell or share customer contact records.
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Form Navigation Controls */}
                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#A3ADA5] hover:text-white transition flex items-center gap-2 border border-white/10"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : <div></div>}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-7 py-3 rounded-full transition font-heading shadow flex items-center gap-2"
                    >
                      <span>Continue to Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-8 py-3.5 rounded-full transition font-heading shadow flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Transmission...</span>
                      ) : (
                        <>
                          <span>Submit Engineering Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>

              </div>
            ) : (
              /* SUBMITTED SUCCESS STATE */
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#A3FF35]/15 border border-[#A3FF35] flex items-center justify-center mx-auto text-[#A3FF35]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A3FF35] font-bold">
                    TRANSMISSION SUCCESSFUL
                  </span>
                  <h2 className="text-3xl font-black font-heading text-white">
                    Request Logged: {submissionId}
                  </h2>
                  <p className="text-sm text-[#A3ADA5] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.fullName}</span>! Your system requirements for <span className="text-[#A3FF35] font-mono">{formData.application}</span> have been allocated to our technical review desk.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#050B0A] border border-white/10 max-w-md mx-auto text-left font-mono text-xs space-y-2">
                  <div className="text-[#68776D] uppercase">WHAT HAPPENS NEXT:</div>
                  <div className="text-[#A3ADA5]">• Detailed load audit calculation & battery sizing</div>
                  <div className="text-[#A3ADA5]">• Direct phone consultation via {formData.phone}</div>
                  <div className="text-[#A3ADA5]">• Formal quotation transmission to {formData.email}</div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/"
                    className="bg-[#A3FF35] hover:bg-[#8ee827] text-black font-extrabold text-xs px-8 py-3 rounded-full transition font-heading shadow"
                  >
                    Return to Homepage
                  </Link>
                  <Link
                    to="/power-stations/adb-ps1"
                    className="bg-[#101C17] hover:bg-[#132019] text-white border border-white/15 text-xs font-semibold px-6 py-3 rounded-full transition"
                  >
                    View ADB PS1 Specifications
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
