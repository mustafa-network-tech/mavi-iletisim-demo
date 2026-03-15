'use client';

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
        href="https://wa.me/905456597551"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 whitespace-nowrap transition-colors"
      >
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden
          >
            <path d="M16.01 6.002c-4.41 0-7.994 3.583-7.994 7.992 0 1.41.37 2.78 1.08 3.99l-1.15 4.19 4.3-1.13c1.17.64 2.49.97 3.76.97h.01c4.41 0 7.99-3.583 7.99-7.992 0-2.14-.83-4.15-2.34-5.66a7.947 7.947 0 0 0-5.66-2.35zm0-2.002c2.67 0 5.18 1.04 7.07 2.93C24.97 8.82 26 11.33 26 14c0 4.96-4.03 8.99-8.99 8.99-1.43 0-2.83-.34-4.1-.99l-4.75 1.25 1.27-4.7A8.93 8.93 0 0 1 7 14c0-4.96 4.03-9 9.01-9zm4.21 11.88c-.23-.12-1.39-.72-1.61-.8-.22-.08-.38-.12-.54.12-.16.23-.62.8-.76.96-.14.15-.28.17-.51.06-.23-.12-.96-.35-1.83-1.12-.68-.6-1.14-1.35-1.27-1.58-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.4.12-.13.16-.23.24-.39.08-.15.04-.29-.02-.41-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.41.06-.62.29-.21.23-.82.8-.82 1.95 0 1.15.84 2.26.96 2.42.12.15 1.66 2.54 4.02 3.57.56.24.99.38 1.33.49.56.18 1.08.16 1.49.1.45-.07 1.39-.57 1.59-1.11.2-.54.2-1 .14-1.1-.06-.1-.21-.16-.44-.28z" />
          </svg>
        </span>
        <span className="hidden sm:inline">Teklif Al</span>
        <span className="sm:hidden">Teklif</span>
      </a>
    </div>
  );
}
