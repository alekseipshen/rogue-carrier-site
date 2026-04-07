'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TENSTREET_URL =
  'https://intelliapp.driverapponline.com/c/roguecarrierinc?r=roguecarrierinc.com';

export default function RedirectCountdown({ name }: { name?: string }) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = TENSTREET_URL;
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-rogue-dark/80 backdrop-blur-sm border border-rogue-red/20 rounded-2xl p-8 text-center"
    >
      <div className="w-16 h-16 bg-rogue-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8 text-rogue-red"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">
        Application Received!
      </h3>
      {name && (
        <p className="text-rogue-silver mb-2">Thank you, {name}!</p>
      )}
      <p className="text-rogue-silver">
        Redirecting you to complete your full application in{' '}
        <span className="text-white font-bold text-lg">{countdown}</span>{' '}
        seconds...
      </p>
      <a
        href={TENSTREET_URL}
        className="inline-block mt-6 bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider px-8 py-3 rounded-lg transition-all"
      >
        Complete Application Now
      </a>
    </motion.div>
  );
}
