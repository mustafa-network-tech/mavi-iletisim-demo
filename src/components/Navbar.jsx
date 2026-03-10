'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/components/cart/CartContext';

const LINKS = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Ürünler', href: '/#urunler' },
  { label: 'Teknik Servis', href: '/#teknik-servis' },
  { label: 'Biz Kimiz', href: '/#biz-kimiz' },
  { label: 'Referanslar', href: '/#referanslar' },
  { label: 'Servis Talebi', href: '/#servis-talebi' },
  { label: 'İletişim', href: '/#iletisim' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="text-xl font-bold text-mavi-dark tracking-tight">
            Mavi İletişim
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-slate-600 hover:text-mavi-dark hover:bg-soft-blue/50 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Sepet ikonu – her zaman sağ üstte, tıklanınca /sepet sayfasına gider */}
            <Link
              href="/sepet"
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-soft-grey/80 border border-slate-200 hover:bg-soft-blue/50 hover:border-mavi/30 transition-colors"
              aria-label="Sepeti görüntüle"
            >
              <span className="relative inline-flex">
                <svg
                  className="w-5 h-5 text-mavi-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l2-7H5.4M7 13L5.4 5M7 13l-2 5m5-5v5m4-5v5m1-14a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-mavi-dark text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {totalCount > 99 ? '99+' : totalCount}
                  </span>
                )}
              </span>
              <span className="hidden sm:inline text-sm font-medium text-slate-700">
                Sepet {totalCount > 0 && `(${totalCount})`}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-soft-grey"
              aria-label="Menüyü aç"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
                </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-200 shadow-lg overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-slate-600 hover:bg-soft-blue/50 hover:text-mavi-dark font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sepet"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-mavi-dark hover:bg-soft-blue/50 font-medium"
                >
                  Sepet {totalCount > 0 && `(${totalCount})`}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
