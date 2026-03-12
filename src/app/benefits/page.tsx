'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import PhotoBanner from '@/components/PhotoBanner';

function BenefitIcon({ children }: { children: ReactNode }) {
  return (
    <div className="w-14 h-14 bg-rogue-red/10 rounded-2xl flex items-center justify-center text-rogue-red mb-5 group-hover:bg-rogue-red group-hover:text-white transition-all duration-300">
      {children}
    </div>
  );
}

const benefits = [
  {
    category: 'Compensation',
    items: [
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </BenefitIcon>
        ),
        title: 'Up to $0.70/Mile',
        desc: 'Top-tier pay for CDL Class A drivers. Dedicated routes mean predictable, steady income every week.',
        highlight: true,
      },
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
          </BenefitIcon>
        ),
        title: 'Fuel Card & Discounts',
        desc: 'Company-provided fuel card with negotiated discounts at major truck stops nationwide.',
        highlight: false,
      },
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </BenefitIcon>
        ),
        title: 'Referral Bonuses',
        desc: 'Earn extra cash for every qualified driver you refer who joins the Rogue Carrier team.',
        highlight: false,
      },
    ],
  },
  {
    category: 'Equipment & Routes',
    items: [
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </BenefitIcon>
        ),
        title: 'Modern Fleet (2021\u20132026)',
        desc: 'Drive the newest equipment on the road. Clean, well-maintained trucks that you can be proud of.',
        highlight: true,
      },
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
          </BenefitIcon>
        ),
        title: 'Dedicated Routes',
        desc: 'No load boards, no uncertainty. Pre-planned routes with consistent customers across 49 states.',
        highlight: false,
      },
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </BenefitIcon>
        ),
        title: 'Safety Equipment',
        desc: 'All safety equipment provided by the company. Your safety is our investment.',
        highlight: false,
      },
    ],
  },
  {
    category: 'Support & Growth',
    items: [
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
            </svg>
          </BenefitIcon>
        ),
        title: '24/7 Dispatch & Support',
        desc: 'Round-the-clock dispatch and roadside assistance. Help is always one call away.',
        highlight: true,
      },
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </BenefitIcon>
        ),
        title: 'Relocation Assistance',
        desc: "Need to move to run your routes more efficiently? We'll help you get there.",
        highlight: false,
      },
      {
        icon: (
          <BenefitIcon>
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
          </BenefitIcon>
        ),
        title: 'Lease Purchase Program',
        desc: 'Ready to own? Our lease purchase program helps you transition from driver to owner-operator.',
        highlight: false,
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

      {/* ============ FLEET PHOTO ============ */}
      <PhotoBanner
        src="/images/fleet/photo_17.jpg"
        alt="Rogue Carrier modern fleet"
        height="h-[250px] md:h-[350px]"
        overlay="gradient"
      />

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
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`group relative p-8 rounded-2xl border transition-all duration-300 h-full ${
                      item.highlight
                        ? 'bg-rogue-red/5 border-rogue-red/30 hover:border-rogue-red/60 hover:bg-rogue-red/10'
                        : 'bg-rogue-dark border-white/5 hover:border-white/20 hover:bg-rogue-gray'
                    }`}
                  >
                    {item.icon}
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-rogue-silver text-sm leading-relaxed">{item.desc}</p>
                    {item.highlight && (
                      <div className="absolute top-6 right-6">
                        <span className="bg-rogue-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
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

      {/* ============ DRIVER PHOTO ============ */}
      <PhotoBanner
        src="/images/fleet/photo_1.jpg"
        alt="Driver with Rogue Carrier truck"
        height="h-[250px] md:h-[350px]"
        overlay="red"
      >
        <div className="text-center px-4">
          <h3 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
            YOUR TRUCK. <span className="text-rogue-red">YOUR ROAD.</span>
          </h3>
        </div>
      </PhotoBanner>

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
