'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const photos = [
  { src: '/images/fleet/photo_4.jpg', alt: 'Driver with Rogue Carrier fleet', span: 'col-span-2 row-span-2' },
  { src: '/images/fleet/photo_15.jpg', alt: 'Modern Freightliner fleet lineup', span: 'col-span-1 row-span-1' },
  { src: '/images/fleet/photo_10.jpg', alt: 'Driver with Rogue Carrier truck', span: 'col-span-1 row-span-1' },
  { src: '/images/fleet/photo_19.jpg', alt: 'Fleet trucks at facility', span: 'col-span-1 row-span-1' },
  { src: '/images/fleet/photo_9.jpg', alt: 'Driver with Peterbilt truck', span: 'col-span-1 row-span-1' },
  { src: '/images/fleet/photo_8.jpg', alt: 'Driver standing by truck', span: 'col-span-2 row-span-1' },
];

export default function FleetGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">Life at Rogue</span>
              <h2
                className="text-4xl sm:text-5xl font-black mt-3"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                OUR <span className="text-rogue-red">FLEET</span> & DRIVERS
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {photos.map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${photo.span} relative rounded-2xl overflow-hidden cursor-pointer group h-full`}
                  onClick={() => setLightbox(i)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Dark/red overlay for consistent styling */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rogue-black/80 via-rogue-black/20 to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-rogue-red/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Hover red line accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-rogue-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-rogue-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-rogue-black/70 rounded-full flex items-center justify-center text-white hover:bg-rogue-red transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Nav arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-rogue-black/70 rounded-full flex items-center justify-center text-white hover:bg-rogue-red transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-rogue-black/70 rounded-full flex items-center justify-center text-white hover:bg-rogue-red transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
