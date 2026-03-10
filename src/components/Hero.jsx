'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80', alt: 'Mobile technology' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80', alt: 'Computer repair' },
  { url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1920&q=80', alt: 'Electronics' },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80', alt: 'Technicians working' },
  { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', alt: 'Communication technology' },
];

// Grid of small squares (square shape, not circles) – same count so cells stay square-ish
const COLS = 14;
const ROWS = 14;
const TOTAL = COLS * ROWS;
const VISIBLE_DURATION_MS = 2300; // full photo stays 2.3 seconds
const FORM_DURATION_MS = 1200;   // small squares form the photo
const DISSOLVE_DURATION_MS = 600; // fade out

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState('forming'); // 'forming' | 'visible' | 'dissolving'

  const nextIndex = (activeIndex + 1) % HERO_IMAGES.length;
  const backgroundImage = phase === 'dissolving' ? HERO_IMAGES[nextIndex] : HERO_IMAGES[activeIndex];
  const overlayImage = HERO_IMAGES[activeIndex];

  const startForming = useCallback(() => {
    setPhase('forming');
  }, []);

  const startDissolving = useCallback(() => {
    setPhase('dissolving');
  }, []);

  const finishDissolve = useCallback(() => {
    setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
    startForming();
  }, [startForming]);

  // After squares form, go to visible
  useEffect(() => {
    if (phase !== 'forming') return;
    const t = setTimeout(() => setPhase('visible'), FORM_DURATION_MS + 100);
    return () => clearTimeout(t);
  }, [phase]);

  // After 2.3s visible, start dissolve
  useEffect(() => {
    if (phase !== 'visible') return;
    const t = setTimeout(startDissolving, VISIBLE_DURATION_MS);
    return () => clearTimeout(t);
  }, [phase, startDissolving]);

  // After dissolve animation, switch to next slide
  useEffect(() => {
    if (phase !== 'dissolving') return;
    const t = setTimeout(finishDissolve, DISSOLVE_DURATION_MS + 50);
    return () => clearTimeout(t);
  }, [phase, finishDissolve]);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-200">
      {/* Full background image (under the fragments); during dissolve shows next image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={backgroundImage.url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage.url})` }}
            aria-hidden
          />
        </AnimatePresence>
      </div>

      {/* Small squares (no sliding from above) – come from the RIGHT side, piece by piece, then sit on screen */}
      <div
        className="absolute inset-0 grid pointer-events-none rounded-none"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
        aria-hidden
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const bgX = (col / (COLS - 1)) * 100;
          const bgY = (row / (ROWS - 1)) * 100;
          // Right column first, then next column left – piece by piece from the right
          const delay = (COLS - 1 - col) * 0.018 + row * 0.002;

          const initial = phase === 'forming' ? { opacity: 0, x: 120 } : { opacity: 1, x: 0 };
          const animate = phase === 'dissolving' ? { opacity: 0, x: 0 } : { opacity: 1, x: 0 };
          const transition = phase === 'forming'
            ? { duration: 0.35, delay, ease: 'easeOut' }
            : phase === 'dissolving'
              ? { duration: 0.25, ease: 'easeIn' }
              : { duration: 0.2 };

          return (
            <motion.div
              key={`${activeIndex}-${i}`}
              className="w-full h-full bg-cover bg-no-repeat rounded-none"
              style={{
                backgroundImage: `url(${overlayImage.url})`,
                backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                backgroundPosition: `${bgX}% ${bgY}%`,
              }}
              initial={phase === 'forming' ? initial : false}
              animate={animate}
              transition={transition}
            />
          );
        })}
      </div>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"
        aria-hidden
      />

      {/* 3 dots at bottom: LEFT, CENTER, RIGHT – Ürünler, Teknik Servis, Servis Talebi; active = blue */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-between items-center px-6 sm:px-10 md:px-16">
        <a href="#urunler" className="flex flex-col items-center gap-1.5 group" aria-label="Ürünler">
          <motion.span
            className="rounded-full border-2 w-3 h-3"
            animate={{
              scale: activeIndex % 3 === 0 ? 1.25 : 1,
              backgroundColor: activeIndex % 3 === 0 ? 'rgb(66, 165, 245)' : 'rgba(255,255,255,0.3)',
              borderColor: activeIndex % 3 === 0 ? 'rgb(66, 165, 245)' : 'rgba(255,255,255,0.6)',
            }}
            transition={{ duration: 0.35 }}
          />
          <span className="text-white/80 text-xs font-medium group-hover:text-white">Ürünler</span>
        </a>
        <a href="#teknik-servis" className="flex flex-col items-center gap-1.5 group" aria-label="Teknik Servis">
          <motion.span
            className="rounded-full border-2 w-3 h-3"
            animate={{
              scale: activeIndex % 3 === 1 ? 1.25 : 1,
              backgroundColor: activeIndex % 3 === 1 ? 'rgb(66, 165, 245)' : 'rgba(255,255,255,0.3)',
              borderColor: activeIndex % 3 === 1 ? 'rgb(66, 165, 245)' : 'rgba(255,255,255,0.6)',
            }}
            transition={{ duration: 0.35 }}
          />
          <span className="text-white/80 text-xs font-medium group-hover:text-white">Teknik Servis</span>
        </a>
        <a href="#servis-talebi" className="flex flex-col items-center gap-1.5 group" aria-label="Servis Talebi">
          <motion.span
            className="rounded-full border-2 w-3 h-3"
            animate={{
              scale: activeIndex % 3 === 2 ? 1.25 : 1,
              backgroundColor: activeIndex % 3 === 2 ? 'rgb(66, 165, 245)' : 'rgba(255,255,255,0.3)',
              borderColor: activeIndex % 3 === 2 ? 'rgb(66, 165, 245)' : 'rgba(255,255,255,0.6)',
            }}
            transition={{ duration: 0.35 }}
          />
          <span className="text-white/80 text-xs font-medium group-hover:text-white">Servis Talebi</span>
        </a>
      </div>
    </section>
  );
}
