'use client';

import { MK_WHATSAPP } from '@/data/mk';

const TICKER_TEXT =
  'Bu tarz web site projeleri için bizimle iletişime geçin — Mustafa Öner | MK Digital Systems';

export default function LedTicker() {
  return (
    <div
      className="relative w-full bg-black py-2.5 flex items-center justify-between gap-3 px-3 sm:px-4"
      role="marquee"
      aria-live="polite"
    >
      <div className="relative flex-1 overflow-hidden">
        <div
          className="animate-ticker-scroll flex whitespace-nowrap text-amber-400 font-mono text-xs sm:text-sm md:text-base tracking-wider"
          style={{ textShadow: '0 0 8px rgba(251, 191, 36, 0.6)' }}
        >
          <span className="inline-block px-4">{TICKER_TEXT}</span>
          <span className="inline-block px-4" aria-hidden>
            {TICKER_TEXT}
          </span>
        </div>
      </div>

      <a
        href={MK_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 whitespace-nowrap transition-colors"
      >
        <span className="hidden sm:inline">Benzer bir site için görüşelim →</span>
        <span className="sm:hidden">Görüşelim →</span>
      </a>
    </div>
  );
}
