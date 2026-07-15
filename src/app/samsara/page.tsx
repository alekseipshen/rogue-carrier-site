import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Samsara Dash Cam & Biometric Data Policy | Rogue Carrier',
  description:
    'How Rogue Capital Group Corp uses in-cab Samsara dash cams, the camera hardware we run, what data is collected, how it is secured, our retention schedule, and your right to consent and revoke.',
  alternates: { canonical: '/samsara' },
  openGraph: {
    title: 'Samsara Dash Cam & Biometric Data Policy | Rogue Carrier',
    description:
      'How Rogue Capital Group Corp uses in-cab Samsara dash cams, the camera hardware we run, what data is collected, how it is secured, our retention schedule, and your right to consent and revoke.',
    type: 'website',
  },
};

const HARDWARE = [
  {
    title: 'AI Multicam Hub',
    desc: 'A central hub that supports up to four auxiliary cameras, giving expanded visibility around the vehicle for added safety.',
  },
  {
    title: 'Dual-Facing Dash Cam',
    desc: 'Captures both inward- and outward-facing video through wide-angle lenses, monitoring cab activity and road conditions at the same time.',
  },
  {
    title: 'Safety, Not Surveillance',
    desc: 'The system is designed to enhance driver awareness and fleet visibility. It is a safety tool that helps protect the driver, the company, and the vehicle.',
  },
];

const POINTS = [
  {
    num: '01',
    title: 'Why We Use Dash Cams',
    desc: 'Samsara dash cams are installed to increase safety for the driver, the company, and the vehicle. They are a safety tool — not a surveillance tool.',
  },
  {
    num: '02',
    title: 'Event-Based Recording Only',
    desc: 'Cameras are activated only when the Samsara software detects an unsafe action by the vehicle or the driver. They do not record continuously throughout your shift.',
  },
  {
    num: '03',
    title: 'How Data Is Secured',
    desc: 'Recorded data is stored securely and is released to a third party only when required by law. It is never sold or shared for marketing purposes.',
  },
  {
    num: '04',
    title: 'Retention & Deletion',
    desc: 'Data is permanently deleted three (3) years after the driver’s last interaction with the company, in line with our written retention and destruction schedule.',
  },
  {
    num: '05',
    title: 'Voluntary Consent',
    desc: 'Participation is voluntary. Drivers provide written consent before any recording begins, and that consent can be revoked at any time.',
  },
  {
    num: '06',
    title: 'Your Right to Revoke',
    desc: 'You may revoke your consent at any time by contacting our HR team. Revocation does not affect data already collected under prior consent.',
  },
];

export default function SamsaraPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rogue-dark via-rogue-black to-rogue-black" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rogue-red via-rogue-red/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">
              Legal &middot; Samsara Program
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black mt-3 mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              SAMSARA <span className="text-rogue-red">DASH CAM</span> &amp; BIOMETRIC DATA POLICY
            </h1>
            <p className="text-rogue-silver text-lg leading-relaxed">
              This disclosure explains how Rogue Capital Group Corp uses in-cab Samsara dash cams, what is
              recorded, how that data is protected, and the rights you have as a driver. We publish it
              openly so every member of our team knows exactly what to expect.
            </p>
            <p className="text-rogue-silver/70 text-sm mt-6">Last updated: June 29, 2026</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ THE SAMSARA SYSTEM (HARDWARE) ============ */}
      <section className="py-20 bg-rogue-dark border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Hardware</span>
            <h2
              className="text-3xl sm:text-4xl font-black mt-3 mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              THE SAMSARA <span className="text-rogue-red">SYSTEM</span>
            </h2>
            <p className="text-rogue-silver leading-relaxed mb-10 max-w-3xl">
              Our trucks run Samsara camera systems built to enhance driver awareness and fleet visibility
              through video and monitoring hardware. Here is exactly what is installed in the cab.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {HARDWARE.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="group relative h-full p-8 rounded-2xl bg-rogue-black/40 border border-white/5 hover:border-rogue-red/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rogue-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-rogue-silver text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POLICY POINTS ============ */}
      <section className="py-20 relative noise-bg">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {POINTS.map((point, i) => (
              <ScrollReveal key={point.num} delay={i * 0.08}>
                <div className="group relative h-full p-8 rounded-2xl bg-rogue-dark/50 border border-white/5 hover:border-rogue-red/30 transition-all duration-300">
                  <span
                    className="text-6xl font-black text-rogue-red/10 absolute top-4 right-6"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {point.num}
                  </span>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-rogue-red transition-colors">
                    {point.title}
                  </h2>
                  <p className="text-rogue-silver text-sm leading-relaxed">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEGAL FRAMEWORK ============ */}
      <section className="py-20 bg-rogue-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">
              Compliance
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black mt-3 mb-6"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              LEGAL <span className="text-rogue-red">FRAMEWORK</span>
            </h2>
            <p className="text-rogue-silver leading-relaxed mb-8">
              Our dash cam program is administered in accordance with the following laws. Where a
              driver operates in or resides in Illinois, these statutes apply directly:
            </p>
            <ul className="space-y-4">
              {[
                {
                  law: 'Biometric Information Privacy Act',
                  cite: '740 ILCS 14',
                  note: 'Governs the collection, storage, and destruction of biometric data.',
                },
                {
                  law: 'Electronic Communications Privacy Act',
                  cite: '18 U.S.C. § 2701',
                  note: 'Federal protection for stored electronic communications.',
                },
                {
                  law: 'Illinois Eavesdropping Statute',
                  cite: '720 ILCS 5/14-1',
                  note: 'Requires consent for the recording of conversations.',
                },
              ].map((item) => (
                <li
                  key={item.cite}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-5 rounded-xl bg-rogue-black/40 border border-white/5"
                >
                  <span className="text-white font-bold whitespace-nowrap">{item.law}</span>
                  <span className="text-rogue-red text-sm font-mono">{item.cite}</span>
                  <span className="text-rogue-silver text-sm sm:ml-auto">{item.note}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ CONSENT & CONTACT ============ */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-8 sm:p-10 rounded-2xl gradient-border">
              <h2
                className="text-2xl sm:text-3xl font-black mb-4"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                CONSENT &amp; <span className="text-rogue-red">REVOCATION</span>
              </h2>
              <p className="text-rogue-silver leading-relaxed mb-4">
                All Rogue Carrier drivers acknowledge and voluntarily agree to allow the employer to use
                Samsara dash cams in the truck they will be driving. Before any recording begins, each
                driver reviews and signs a written consent and disclosure form during onboarding. Signing
                is voluntary, and consent may be revoked at any time without penalty.
              </p>
              <p className="text-rogue-silver leading-relaxed mb-6">
                To request a copy of your signed consent, ask a question about this policy, or revoke
                your consent, contact our HR team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hr@roguecarrierinc.com"
                  className="inline-flex items-center justify-center gap-2 bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-rogue-red/20"
                >
                  hr@roguecarrierinc.com
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-rogue-red/40 text-white font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <p className="text-rogue-silver/60 text-xs leading-relaxed mt-8">
              Rogue Capital Group Corp &middot; 1312 Marquette Dr, Ste E, Romeoville, IL 60446. This page is
              provided for general informational purposes and reflects our current data practices; it
              does not constitute legal advice.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
