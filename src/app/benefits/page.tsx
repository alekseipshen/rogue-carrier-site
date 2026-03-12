'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

const benefits = [
  {
    category: 'Compensation',
    items: [
      {
        icon: '💰',
        title: 'Up to $0.70/Mile',
        desc: 'Top-tier pay for CDL Class A drivers. Dedicated routes mean predictable, steady income every week.',
        highlight: true,
      },
      {
        icon: '⛽',
        title: 'Fuel Card & Discounts',
        desc: 'Company-provided fuel card with negotiated discounts at major truck stops nationwide.',
      },
      {
        icon: '🤝',
        title: 'Referral Bonuses',
        desc: 'Earn extra cash for every qualified driver you refer who joins the Rogue Carrier team.',
      },
    ],
  },
  {
    category: 'Equipment & Routes',
    items: [
      {
        icon: '🚛',
        title: 'Modern Fleet (2021\u20132026)',
        desc: 'Drive the newest equipment on the road. Clean, well-maintained trucks that you can be proud of.',
        highlight: true,
      },
      {
        icon: '🗺️',
        title: 'Dedicated Routes',
        desc: 'No load boards, no uncertainty. Pre-planned routes with consistent customers across 49 states.',
      },
      {
        icon: '🏗️',
        title: 'Safety Equipment',
        desc: 'All safety equipment provided by the company. Your safety is our investment.',
      },
    ],
  },
  {
    category: 'Support & Growth',
    items: [
      {
        icon: '📞',
        title: '24/7 Dispatch & Support',
        desc: 'Round-the-clock dispatch and roadside assistance. Help is always one call away.',
        highlight: true,
      },
      {
        icon: '🏠',
        title: 'Relocation Assistance',
        desc: "Need to move to run your routes more efficiently? We'll help you get there.",
      },
      {
        icon: '🔑',
        title: 'Lease Purchase Program',
        desc: 'Ready to own? Our lease purchase program helps you transition from driver to owner-operator.',
      },
    ],
  },
];

export default function BenefitsPage() {
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
            <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Driver Benefits</span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black mt-3 mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              WHY DRIVERS <span className="text-rogue-red">CHOOSE</span> US
            </h1>
            <p className="text-rogue-silver text-xl max-w-3xl leading-relaxed">
              Top pay, modern equipment, and dedicated routes &mdash; that&apos;s just the beginning.
              Here&apos;s everything you get when you drive for Rogue Carrier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ PAY SPOTLIGHT ============ */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rogue-red-dark via-rogue-red to-rogue-red-dark p-1">
              <div className="bg-rogue-dark rounded-xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-8">
                <div className="text-center lg:text-left flex-1">
                  <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Earn More</span>
                  <div className="flex items-baseline gap-2 mt-2 justify-center lg:justify-start">
                    <span className="text-6xl sm:text-7xl font-black text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
                      $0.70
                    </span>
                    <span className="text-2xl text-rogue-silver">/mile</span>
                  </div>
                  <p className="text-rogue-silver mt-4 text-lg max-w-md">
                    Up to $0.65&ndash;$0.70 per mile on dedicated Dry Van routes.
                    Consistent freight means consistent paychecks.
                  </p>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[
                    { label: 'Weekly Avg.', value: '$3,000+' },
                    { label: 'Miles/Week', value: '2,500+' },
                    { label: 'Structure', value: '1099' },
                    { label: 'Payment', value: 'Weekly' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-rogue-gray rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-rogue-silver text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ BENEFITS GRID ============ */}
      {benefits.map((section, sectionIdx) => (
        <section key={section.category} className={`py-16 ${sectionIdx % 2 !== 0 ? 'bg-rogue-dark/50' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ fontFamily: 'var(--font-oswald)' }}>
                {section.category.toUpperCase()}
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative p-6 rounded-2xl border transition-all duration-300 h-full ${
                      item.highlight
                        ? 'bg-rogue-red/5 border-rogue-red/30 hover:border-rogue-red/60'
                        : 'bg-rogue-dark border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className="text-4xl mb-4 block">{item.icon}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-rogue-silver text-sm leading-relaxed">{item.desc}</p>
                    {item.highlight && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-rogue-red text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                          Top Perk
                        </span>
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ============ REQUIREMENTS ============ */}
      <section className="py-24 relative noise-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Requirements</span>
              <h2 className="text-4xl sm:text-5xl font-black mt-3" style={{ fontFamily: 'var(--font-oswald)' }}>
                WHAT WE <span className="text-rogue-red">NEED</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {[
              'Valid CDL Class A license',
              '1+ year of verifiable driving experience',
              'Clean driving record',
              'Knowledge of DOT regulations & ELD',
              'Professional attitude and reliability',
            ].map((req, i) => (
              <ScrollReveal key={req} delay={i * 0.1}>
                <div className="flex items-center gap-4 py-4 border-b border-white/5">
                  <div className="w-8 h-8 bg-rogue-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-rogue-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-lg">{req}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 bg-gradient-to-r from-rogue-red-dark via-rogue-red to-rogue-red-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              LIKE WHAT YOU SEE?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Start earning up to $0.70/mile with dedicated routes and modern equipment. Takes 30 seconds to apply.
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
