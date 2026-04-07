'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import { formatPhone } from '@/utils/formatPhone';
import RedirectCountdown from '@/components/RedirectCountdown';

const steps = [
  { id: 1, label: 'Basic Info' },
  { id: 2, label: 'Experience' },
];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    cdl: 'yes',
    experience: '',
    currentLocation: '',
    availability: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'full', ...formData }),
      });
    } catch {
      // Continue even if email fails
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'generate_lead',
      form_location: 'apply_full',
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <RedirectCountdown name={formData.firstName} />
      </section>
    );
  }

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <Image src="/images/fleet/photo_19.jpg" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-rogue-dark/90 via-rogue-black/95 to-rogue-black" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rogue-red via-rogue-red/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Join Our Team</span>
            <h1
              className="text-5xl sm:text-6xl font-black mt-3 mb-4"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              APPLY <span className="text-rogue-red">NOW</span>
            </h1>
            <p className="text-rogue-silver text-lg max-w-2xl mx-auto">
              Two simple steps: fill out the pre-screen below, then complete the full application on Tenstreet.
              Our team will call you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ FORM ============ */}
      <section className="py-12 relative">
        <div className="max-w-2xl mx-auto px-4">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {steps.map((s) => (
                <div key={s.id} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      step >= s.id
                        ? 'bg-rogue-red text-white'
                        : 'bg-rogue-gray text-rogue-silver'
                    }`}
                  >
                    {step > s.id ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.id
                    )}
                  </div>
                  <span className={`text-sm font-medium hidden sm:block ${step >= s.id ? 'text-white' : 'text-rogue-silver'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-rogue-gray rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: step === 1 ? '50%' : '100%' }}
                className="h-full bg-rogue-red rounded-full"
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form steps */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="gradient-border p-8 rounded-2xl space-y-5">
                    <h2 className="text-2xl font-bold text-white mb-2">Step 1: Basic Information</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-rogue-silver text-sm mb-1.5">First Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => updateField('firstName', e.target.value)}
                          className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-rogue-silver text-sm mb-1.5">Last Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => updateField('lastName', e.target.value)}
                          className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => updateField('phone', formatPhone(e.target.value))}
                        className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    onClick={() => {
                      if (formData.firstName && formData.lastName && formData.phone) setStep(2);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider py-4 rounded-lg transition-all text-lg"
                  >
                    Continue to Step 2
                  </motion.button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="gradient-border p-8 rounded-2xl space-y-5">
                    <h2 className="text-2xl font-bold text-white mb-2">Step 2: Driving Experience</h2>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">Valid CDL Class A? *</label>
                      <div className="flex gap-4">
                        {['yes', 'no'].map((val) => (
                          <label key={val} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="cdl"
                              value={val}
                              checked={formData.cdl === val}
                              onChange={(e) => updateField('cdl', e.target.value)}
                              className="accent-rogue-red w-4 h-4"
                            />
                            <span className="text-white capitalize">{val}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">Years of Experience *</label>
                      <select
                        required
                        value={formData.experience}
                        onChange={(e) => updateField('experience', e.target.value)}
                        className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all appearance-none"
                      >
                        <option value="" disabled>Select experience</option>
                        <option value="2-3">2-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">Current Location (City, State)</label>
                      <input
                        type="text"
                        value={formData.currentLocation}
                        onChange={(e) => updateField('currentLocation', e.target.value)}
                        className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">When can you start?</label>
                      <select
                        value={formData.availability}
                        onChange={(e) => updateField('availability', e.target.value)}
                        className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all appearance-none"
                      >
                        <option value="">Select availability</option>
                        <option value="immediately">Immediately</option>
                        <option value="1-week">Within 1 week</option>
                        <option value="2-weeks">Within 2 weeks</option>
                        <option value="1-month">Within 1 month</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-rogue-gray text-white font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-rogue-gray-light transition-all"
                    >
                      Back
                    </button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-[2] bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider py-4 rounded-lg transition-all text-lg pulse-red"
                    >
                      {submitting ? 'Sending...' : 'Submit Application'}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Side info */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 bg-rogue-dark/50 border border-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'Submit the pre-screen form above (30 seconds)' },
                  { step: '2', text: 'Complete the full Tenstreet application' },
                  { step: '3', text: 'Our recruiter calls you within 24 hours' },
                  { step: '4', text: 'Get approved and start driving!' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-rogue-red/20 rounded-full flex items-center justify-center text-rogue-red font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-rogue-silver pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-rogue-silver text-sm">
                  Questions? Call us: <a href="tel:+17737183282" className="text-rogue-red hover:underline">(773) 718-3282</a> or <a href="tel:+17737183354" className="text-rogue-red hover:underline">(773) 718-3354</a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
