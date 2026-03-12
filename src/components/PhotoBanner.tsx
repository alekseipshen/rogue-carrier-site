'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PhotoBannerProps {
  src: string;
  alt: string;
  height?: string;
  overlay?: 'dark' | 'red' | 'gradient';
  children?: React.ReactNode;
}

export default function PhotoBanner({
  src,
  alt,
  height = 'h-[400px]',
  overlay = 'gradient',
  children,
}: PhotoBannerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const overlayClass =
    overlay === 'dark'
      ? 'bg-rogue-black/70'
      : overlay === 'red'
      ? 'bg-gradient-to-r from-rogue-red/40 via-rogue-black/60 to-rogue-black/80'
      : 'bg-gradient-to-t from-rogue-black via-rogue-black/50 to-rogue-black/30';

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.2]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className={`absolute inset-0 ${overlayClass}`} />
      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rogue-red to-transparent" />
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
