import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rogue Carrier',
  description:
    'How Rogue Capital Group Corp collects, uses, and protects your personal information, including SMS/text messaging opt-in data.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black mb-3" style={{ fontFamily: 'var(--font-oswald)' }}>
          PRIVACY <span className="text-rogue-red">POLICY</span>
        </h1>
        <p className="text-rogue-silver text-sm mb-10">Last updated: July 13, 2026</p>

        <div className="space-y-8 text-rogue-silver leading-relaxed">
          <p>
            Rogue Capital Group Corp (&ldquo;Rogue Carrier,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains what information we
            collect through our website and communications, how we use it, and the choices you have.
          </p>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as your name, phone number,
              email address, driving/employment history, and any details you include when you apply
              for a position, contact us, or opt in to receive text messages. We also collect basic
              technical data (such as device and usage information) through standard web analytics.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To review and process your job application and communicate with you about it;</li>
              <li>To contact you by phone, email, or SMS/text about recruiting and hiring;</li>
              <li>To respond to your inquiries and provide support;</li>
              <li>To operate, maintain, and improve our website and services;</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">SMS / Text Messaging</h2>
            <p className="mb-3">
              If you opt in to receive text messages from Rogue Capital Group Corp, we use your phone number
              to send messages related to your application, recruiting, and hiring. Message frequency
              varies. Message and data rates may apply. You can opt out at any time by replying{' '}
              <span className="text-white font-semibold">STOP</span>, or reply{' '}
              <span className="text-white font-semibold">HELP</span> for help. See our{' '}
              <Link href="/sms-terms" className="text-rogue-red hover:underline">
                SMS Terms &amp; Conditions
              </Link>{' '}
              for full details.
            </p>
            <p className="rounded-xl border border-rogue-red/30 bg-rogue-red/5 p-4 text-white">
              No mobile information will be shared with or sold to third parties or affiliates for
              marketing or promotional purposes. Text messaging originator opt-in data and consent
              will not be shared with any third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">How We Share Information</h2>
            <p>
              We may share your information with service providers who help us operate our business
              (for example, our applicant-tracking and messaging platforms), and only as needed to
              provide those services to us. We may also disclose information when required by law. We
              do not sell your personal information, and we do not share SMS opt-in data with third
              parties for their own marketing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Data Security &amp; Retention</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect your
              information, and we retain it only as long as necessary for the purposes described above
              or as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
            <p>
              You may opt out of text messages at any time by replying STOP. You may request access
              to, correction of, or deletion of your personal information by contacting us using the
              details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
            <p>
              Rogue Capital Group Corp
              <br />
              1312 Marquette Dr, Ste E, Romeoville, IL 60446
              <br />
              Phone:{' '}
              <a href="tel:+17737183282" className="text-rogue-red hover:underline">
                (773) 718-3282
              </a>
              <br />
              Email:{' '}
              <a href="mailto:hr@roguecarrierinc.com" className="text-rogue-red hover:underline">
                hr@roguecarrierinc.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
