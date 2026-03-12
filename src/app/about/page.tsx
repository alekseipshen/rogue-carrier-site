'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import Link from 'next/link';
import PhotoBanner from '@/components/PhotoBanner';

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rogue-dark via-rogue-black to-rogue-black" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rogue-red via-rogue-red/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Our Story</span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black mt-3 mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              THE <span className="text-rogue-red">ROGUE</span> SPIRIT
            </h1>
            <p className="text-rogue-silver text-xl max-w-3xl leading-relaxed">
              Two partners, fed up with the old-school ways of trucking, founded Rogue Carrier
              in 2020 with one mission: put drivers and customers first. We didn&apos;t start this
              to be just another carrier &mdash; we built it to challenge the status quo, invest in
              the best equipment, and prove that transparency and loyalty still mean something on the road.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ FLEET PHOTO ============ */}
      <PhotoBanner
        src="/images/fleet/photo_15.jpg"
        alt="Rogue Carrier modern Freightliner fleet"
        height="h-[300px] md:h-[400px]"
        overlay="gradient"
      />

      {/* ============ TIMELINE ============ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: 'var(--font-oswald)' }}>
                OUR <span className="text-rogue-red">JOURNEY</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rogue-red via-rogue-red/50 to-transparent" />

            {[
              {
                year: '2020',
                title: 'The Beginning',
                desc: 'Rogue Carrier was founded with a bold vision: build a fleet that drivers actually want to work for. Starting lean and hungry.',
              },
              {
                year: '2022',
                title: 'Rapid Growth',
                desc: 'Expanded to 300+ trucks with a focus on dedicated routes. Invested heavily in modern equipment and driver support systems.',
              },
              {
                year: '2024',
                title: 'Going Nationwide',
                desc: 'Reached 600 trucks delivering across 48 states. Launched dedicated Dry Van routes with consistent, high-paying freight.',
              },
              {
                year: '2026',
                title: '800+ Strong',
                desc: 'Today we run 800+ trucks with 2021\u20132026 equipment. Added 200 new leased trucks. The rogue spirit is stronger than ever.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-rogue-red rounded-full transform -translate-x-1.5 mt-2 ring-4 ring-rogue-black z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="text-rogue-red font-black text-3xl" style={{ fontFamily: 'var(--font-oswald)' }}>
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                    <p className="text-rogue-silver leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-20 bg-rogue-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <AnimatedCounter end={800} suffix="+" label="Trucks in Fleet" />
            <AnimatedCounter end={150} suffix="K" label="Shipments per Year" />
            <AnimatedCounter end={48} label="States Covered" />
            <AnimatedCounter end={200} suffix="+" label="New Trucks in 2026" />
          </div>
        </div>
      </section>

      {/* ============ MISSION / VALUES ============ */}
      <section className="py-24 relative noise-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">What We Stand For</span>
              <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ fontFamily: 'var(--font-oswald)' }}>
                OUR <span className="text-rogue-red">VALUES</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Driver-First',
                desc: 'Every decision we make starts with the question: "How does this help our drivers?" If it doesn\'t, we don\'t do it.',
              },
              {
                num: '02',
                title: 'Modern Equipment',
                desc: 'We invest in the newest trucks and trailers. No driver should have to fight with outdated equipment.',
              },
              {
                num: '03',
                title: 'Transparency',
                desc: 'Clear pay, clear routes, clear expectations. No hidden fees, no games, no surprises.',
              },
              {
                num: '04',
                title: 'Reliability',
                desc: 'Dedicated routes with predictable freight. You\'ll know your schedule and your earnings.',
              },
              {
                num: '05',
                title: '24/7 Support',
                desc: 'Dispatch and roadside assistance that never sleeps. Problems get solved, not ignored.',
              },
              {
                num: '06',
                title: 'Growth',
                desc: 'From startup to 800+ trucks in 6 years. We grow together \u2014 and there\'s room for you.',
              },
            ].map((value, i) => (
              <ScrollReveal key={value.num} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative p-8 rounded-2xl bg-rogue-dark/50 border border-white/5 hover:border-rogue-red/30 transition-all duration-300"
                >
                  <span className="text-6xl font-black text-rogue-red/10 absolute top-4 right-6" style={{ fontFamily: 'var(--font-oswald)' }}>
                    {value.num}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rogue-red transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-rogue-silver text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DRIVER PHOTO ============ */}
      <PhotoBanner
        src="/images/fleet/photo_14.jpg"
        alt="Rogue Carrier driver and fleet"
        height="h-[300px] md:h-[350px]"
        overlay="red"
      >
        <div className="text-center px-4">
          <h3 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
            MODERN EQUIPMENT. <span className="text-rogue-red">REAL SUPPORT.</span>
          </h3>
        </div>
      </PhotoBanner>

      {/* ============ CTA ============ */}
      <section className="py-20 bg-gradient-to-r from-rogue-red-dark via-rogue-red to-rogue-red-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              JOIN THE ROGUE FAMILY
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;re not just hiring drivers. We&apos;re building a team of professionals who want steady miles,
              modern equipment, and a company that has their back.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-white text-rogue-red font-bold uppercase tracking-wider px-10 py-4 rounded-lg hover:bg-rogue-white transition-all text-lg shadow-xl"
            >
              Truck Yeah! Apply Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
