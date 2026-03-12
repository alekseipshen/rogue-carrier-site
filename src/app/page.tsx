'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import ParticleField from '@/components/ParticleField';
import Image from 'next/image';
import QuickApplyForm from '@/components/QuickApplyForm';
import FleetGallery from '@/components/FleetGallery';
import PhotoBanner from '@/components/PhotoBanner';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with parallax */}
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0"
        >
          <Image src="/images/fleet/photo_14.jpg" alt="" fill className="object-cover opacity-20" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-rogue-black via-rogue-black/90 to-rogue-dark/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-rogue-black via-rogue-black/90 to-rogue-black/70" />
        </motion.div>

        {/* Particles */}
        <ParticleField />

        {/* Red accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rogue-red via-rogue-red/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rogue-red/50 to-transparent" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-rogue-red/10 border border-rogue-red/30 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 bg-rogue-red rounded-full animate-pulse" />
                <span className="text-rogue-red text-sm font-semibold uppercase tracking-wider">Now Hiring Nationwide</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-6"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                <span className="text-white">FREIGHT</span>
                <br />
                <span className="text-white">WITHOUT</span>
                <br />
                <span className="text-rogue-red red-glow-text">LIMITS</span>
              </motion.h1>

              {/* Pay highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-baseline gap-3 mb-6"
              >
                <span className="text-4xl sm:text-5xl font-black text-white">$0.70</span>
                <span className="text-rogue-silver text-lg">/mile</span>
                <span className="text-rogue-silver text-sm">&#8226; Dedicated Routes &#8226; 48 States</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-rogue-silver text-lg max-w-xl mb-8 leading-relaxed"
              >
                Join the 800+ truck fleet with modern 2021&ndash;2026 equipment,
                predictable freight, and a team that actually values its drivers.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/apply"
                  className="group relative inline-flex items-center gap-2 bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 text-lg red-glow hover:shadow-xl hover:shadow-rogue-red/30"
                >
                  Apply Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="tel:7737183282"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 text-lg"
                >
                  <svg className="w-5 h-5 text-rogue-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </motion.div>
            </div>

            {/* Right: Quick Apply Form */}
            <div className="hidden lg:block">
              <QuickApplyForm />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-rogue-red rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative py-20 bg-rogue-dark border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-rogue-red/5 via-transparent to-rogue-red/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <AnimatedCounter end={800} suffix="+" label="Trucks in Fleet" />
            <AnimatedCounter end={48} label="States Covered" />
            <AnimatedCounter end={0.70} prefix="$" label="Per Mile (up to)" decimals={2} />
            <AnimatedCounter end={2026} label="Newest Equipment" />
          </div>
        </div>
      </section>

      {/* ============ FLEET GALLERY ============ */}
      <FleetGallery />

      {/* ============ WHY ROGUE ============ */}
      <section className="py-24 relative noise-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ fontFamily: 'var(--font-oswald)' }}>
                BUILT FOR <span className="text-rogue-red">DRIVERS</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Top Pay',
                desc: 'Up to $0.70/mile on dedicated routes. Predictable income, no guessing.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: 'Modern Fleet',
                desc: '2021\u20132026 trucks and trailers. Clean, reliable equipment you can count on.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                ),
                title: 'Dedicated Routes',
                desc: 'No hunting for loads. Predictable routes with consistent customers.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: '24/7 Support',
                desc: "Dispatch and roadside assistance available around the clock. You're never alone.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                ),
                title: 'Fuel Card',
                desc: 'Company fuel card with discounts. Keep more of your hard-earned money.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: 'Referral Program',
                desc: 'Earn extra by referring qualified drivers. Your network is your net worth.',
              },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="gradient-border p-6 rounded-xl group cursor-default"
                >
                  <div className="w-14 h-14 bg-rogue-red/10 rounded-xl flex items-center justify-center text-rogue-red mb-4 group-hover:bg-rogue-red/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-rogue-silver text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PHOTO DIVIDER ============ */}
      <PhotoBanner
        src="/images/fleet/photo_5.jpg"
        alt="Rogue Carrier dedicated route truck"
        height="h-[300px] md:h-[400px]"
        overlay="red"
      >
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
            800+ TRUCKS. <span className="text-rogue-red">49 STATES.</span>
          </h3>
        </div>
      </PhotoBanner>

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rogue-red-dark via-rogue-red to-rogue-red-dark" />
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-white/5 rotate-12"
              style={{ left: `${i * 12}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              READY TO GO <span className="underline decoration-4 underline-offset-4">ROGUE</span>?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              800+ trucks. 48 states. Up to $0.70/mile. Modern equipment. Dedicated routes.
              Your next chapter starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-white text-rogue-red font-bold uppercase tracking-wider px-10 py-4 rounded-lg hover:bg-rogue-white transition-all duration-300 text-lg shadow-xl"
              >
                Truck Yeah! Apply Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:7737183282"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call (773) 718-3282
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ MOBILE FORM (shown below hero on mobile) ============ */}
      <section className="lg:hidden py-12 px-4 bg-rogue-dark">
        <QuickApplyForm />
      </section>
    </>
  );
}
