'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
    setSubmitted(true);
  };

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image src="/images/fleet/photo_4.jpg" alt="" fill className="object-cover opacity-15" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-rogue-dark/90 via-rogue-black/95 to-rogue-black" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rogue-red via-rogue-red/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Get In Touch</span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black mt-3 mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              CONTACT <span className="text-rogue-red">US</span>
            </h1>
            <p className="text-rogue-silver text-xl max-w-3xl leading-relaxed">
              Have questions? Ready to join? We&apos;re here to help. Reach out by phone,
              email, or fill out the form below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="space-y-8">
                  {/* Phone numbers */}
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Call Us</h3>
                    <div className="space-y-3">
                      <a
                        href="tel:7737183282"
                        className="flex items-center gap-4 p-4 rounded-xl bg-rogue-dark border border-white/5 hover:border-rogue-red/30 transition-all group"
                      >
                        <div className="w-12 h-12 bg-rogue-red/10 rounded-xl flex items-center justify-center group-hover:bg-rogue-red/20 transition-colors">
                          <svg className="w-5 h-5 text-rogue-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-bold">(773) 718-3282</div>
                          <div className="text-rogue-silver text-sm">Primary Line</div>
                        </div>
                      </a>
                      <a
                        href="tel:7737183354"
                        className="flex items-center gap-4 p-4 rounded-xl bg-rogue-dark border border-white/5 hover:border-rogue-red/30 transition-all group"
                      >
                        <div className="w-12 h-12 bg-rogue-red/10 rounded-xl flex items-center justify-center group-hover:bg-rogue-red/20 transition-colors">
                          <svg className="w-5 h-5 text-rogue-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-bold">(773) 718-3354</div>
                          <div className="text-rogue-silver text-sm">Secondary Line</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Email</h3>
                    <a
                      href="mailto:roman@teamlinellc.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-rogue-dark border border-white/5 hover:border-rogue-red/30 transition-all group"
                    >
                      <div className="w-12 h-12 bg-rogue-red/10 rounded-xl flex items-center justify-center group-hover:bg-rogue-red/20 transition-colors">
                        <svg className="w-5 h-5 text-rogue-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-bold">roman@teamlinellc.com</div>
                        <div className="text-rogue-silver text-sm">General Inquiries</div>
                      </div>
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Office Hours</h3>
                    <div className="p-4 rounded-xl bg-rogue-dark border border-white/5">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-rogue-silver">Monday &ndash; Friday</span>
                          <span className="text-white font-medium">8:00 AM &ndash; 6:00 PM CT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-rogue-silver">Saturday</span>
                          <span className="text-white font-medium">9:00 AM &ndash; 2:00 PM CT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-rogue-silver">Sunday</span>
                          <span className="text-rogue-silver">Closed</span>
                        </div>
                        <div className="pt-2 mt-2 border-t border-white/5">
                          <span className="text-rogue-red text-xs font-medium">24/7 Dispatch & Roadside Support</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Follow Us</h3>
                    <a
                      href="https://www.facebook.com/people/Rogue-Carrier/61582010114565/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 p-3 rounded-xl bg-rogue-dark border border-white/5 hover:border-rogue-red/30 transition-all"
                    >
                      <svg className="w-5 h-5 text-rogue-red" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="text-rogue-silver text-sm">Facebook</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="gradient-border p-12 rounded-2xl text-center"
                  >
                    <div className="w-16 h-16 bg-rogue-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-rogue-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-rogue-silver">We&apos;ll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="gradient-border p-8 rounded-2xl space-y-5">
                    <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-rogue-silver text-sm mb-1.5">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-rogue-silver text-sm mb-1.5">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all appearance-none"
                      >
                        <option value="">Select a topic</option>
                        <option value="driver-application">Driver Application</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-rogue-silver text-sm mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-rogue-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rogue-red/50 focus:ring-1 focus:ring-rogue-red/50 transition-all resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider py-4 rounded-lg transition-all text-lg"
                    >
                      Send Message
                    </motion.button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
