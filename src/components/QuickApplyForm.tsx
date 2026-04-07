'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { formatPhone } from '@/utils/formatPhone';

export default function QuickApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    experience: '',
    cdl: 'yes',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'quick', ...formData }),
      });
    } catch {
      // Continue even if email fails — don't block the user
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'generate_lead',
      form_location: 'homepage_quick',
    });

    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      window.open('https://intelliapp.driverapponline.com/c/roguecarrierinc?r=roguecarrierinc.com', '_blank');
    }, 2000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-rogue-dark/80 backdrop-blur-sm border border-rogue-red/20 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-rogue-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-rogue-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
        <p className="text-rogue-silver">
          Redirecting you to complete your full application...
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-rogue-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold text-white mb-1">Quick Pre-Screen</h3>
      <p className="text-rogue-silver text-sm mb-6">Takes 30 seconds. We&apos;ll call you within 24 hours.</p>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white placeholder-rogue-silver/50 focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="(555) 123-4567"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
            className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white placeholder-rogue-silver/50 focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
          />
        </div>
        <div>
          <select
            required
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all appearance-none"
          >
            <option value="" disabled>Years of CDL Experience</option>
            <option value="1-2">1-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-rogue-silver text-sm">Valid CDL Class A?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="cdl"
                value="yes"
                checked={formData.cdl === 'yes'}
                onChange={(e) => setFormData({ ...formData, cdl: e.target.value })}
                className="accent-rogue-red"
              />
              <span className="text-white text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="cdl"
                value="no"
                checked={formData.cdl === 'no'}
                onChange={(e) => setFormData({ ...formData, cdl: e.target.value })}
                className="accent-rogue-red"
              />
              <span className="text-white text-sm">No</span>
            </label>
          </div>
        </div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider py-4 rounded-lg transition-all duration-300 pulse-red text-lg"
      >
        {submitting ? 'Sending...' : 'Truck Yeah! Apply Now'}
      </motion.button>
    </motion.form>
  );
}
