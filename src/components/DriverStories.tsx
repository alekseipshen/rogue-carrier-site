'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const drivers = [
  {
    src: '/videos/driver-testimonial-1.mp4',
    poster: '/videos/poster-1.jpg',
    name: 'Rogue Carrier Driver',
    label: 'CDL Class A Driver',
  },
  {
    src: '/videos/driver-testimonial-2.mp4',
    poster: '/videos/poster-2.jpg',
    name: 'Rogue Carrier Driver',
    label: 'CDL Class A Driver',
  },
];

function VideoCard({
  src,
  poster,
  name,
  label,
  delay,
}: {
  src: string;
  poster: string;
  name: string;
  label: string;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="relative group cursor-pointer"
        onClick={togglePlay}
      >
        {/* Card container */}
        <div className="relative overflow-hidden rounded-2xl bg-rogue-dark border border-white/5">
          {/* Video wrapper — portrait aspect ratio */}
          <div className="relative aspect-[9/14] max-h-[520px] overflow-hidden">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              playsInline
              preload="metadata"
              onEnded={handleEnded}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Play/Pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
            >
              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Play button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-16 h-16 rounded-full bg-rogue-red/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-rogue-red/30"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </motion.div>
            </div>

            {/* Bottom info bar */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
            >
              <div className="relative z-10">
                <p className="text-white font-bold text-sm">{name}</p>
                <p className="text-white/60 text-xs">{label}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle red glow on hover */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-rogue-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      </motion.div>
    </ScrollReveal>
  );
}

export default function DriverStories() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-rogue-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,42,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-rogue-red text-sm font-bold uppercase tracking-widest">
              Real Drivers, Real Stories
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black mt-3"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              HEAR FROM <span className="text-rogue-red">OUR TEAM</span>
            </h2>
            <p className="text-rogue-silver mt-4 max-w-lg mx-auto text-base leading-relaxed">
              Don&apos;t just take our word for it. Hear directly from the drivers who call Rogue Carrier home.
            </p>
          </div>
        </ScrollReveal>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {drivers.map((driver, i) => (
            <VideoCard key={driver.src} {...driver} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
