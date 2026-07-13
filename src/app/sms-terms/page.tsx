import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMS Terms & Conditions | Rogue Carrier',
  description:
    'Terms and conditions for the Rogue Carrier Inc SMS / text messaging program: message frequency, rates, and how to opt out.',
};

export default function SmsTermsPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black mb-3" style={{ fontFamily: 'var(--font-oswald)' }}>
          SMS TERMS &amp; <span className="text-rogue-red">CONDITIONS</span>
        </h1>
        <p className="text-rogue-silver text-sm mb-10">Last updated: July 13, 2026</p>

        <div className="space-y-8 text-rogue-silver leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Standard Messaging Disclosures</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Message and data rates may apply.</li>
              <li>You can opt out at any time by texting &ldquo;STOP.&rdquo;</li>
              <li>
                For assistance, text &ldquo;HELP&rdquo; or visit our{' '}
                <Link href="/privacy-policy" className="text-rogue-red hover:underline">
                  Privacy Policy
                </Link>{' '}
                page.
              </li>
              <li>Message frequency may vary depending on service.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">SMS Opt-In &amp; Opt-Out</h2>
            <p>
              By opting into SMS from a web form or other medium, you are agreeing to receive SMS
              messages from Rogue Capital Group Corp. This includes SMS messages for conversations
              (external), conversations (between employees). Message frequency varies. Message and data
              rates may apply. See privacy policy at{' '}
              <a
                href="https://www.roguecarrierinc.com/privacy-policy"
                className="text-rogue-red hover:underline"
              >
                https://www.roguecarrierinc.com/privacy-policy
              </a>
              . Message HELP for help. Reply STOP to any message to opt out.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Program Description</h2>
            <p>
              When you opt in, you agree to receive recurring SMS/text messages from Rogue Carrier Inc
              regarding your job application, recruiting, interview and onboarding scheduling, hiring
              updates, and related employment opportunities. Consent to receive text messages is not a
              condition of applying for a position or of any purchase.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Message Frequency</h2>
            <p>Message frequency varies based on your interaction with us.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Cost</h2>
            <p>Message and data rates may apply, according to the plan you have with your carrier.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Opt Out &amp; Help</h2>
            <p>
              You can cancel the SMS service at any time by texting{' '}
              <span className="text-white font-semibold">STOP</span>. After you send STOP, we will send
              a reply confirming that you have been unsubscribed. You will no longer receive messages
              from us. For help, reply <span className="text-white font-semibold">HELP</span> or contact
              us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Carriers</h2>
            <p>
              Carriers are not liable for delayed or undelivered messages. Delivery of messages is
              subject to effective transmission by your wireless carrier and is not guaranteed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Privacy</h2>
            <p>
              Your privacy matters to us. No mobile information will be shared with or sold to third
              parties or affiliates for marketing or promotional purposes. Text messaging originator
              opt-in data and consent will not be shared with any third parties. For more information,
              see our{' '}
              <Link href="/privacy-policy" className="text-rogue-red hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
            <p>
              Rogue Carrier Inc
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
