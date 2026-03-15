'use client';

const TICKER_TEXT =
  'Bu site demo olarak Mustafa Öner | MK Digital Systems tarafından hazırlanmıştır. Demo sürümü.';

export default function LedTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-2.5" role="marquee" aria-live="polite">
      <div
        className="animate-ticker-scroll flex whitespace-nowrap text-amber-400 font-mono text-sm sm:text-base tracking-wider"
        style={{ textShadow: '0 0 8px rgba(251, 191, 36, 0.6)' }}
      >
        <span className="inline-block px-4">{TICKER_TEXT}</span>
        <span className="inline-block px-4" aria-hidden>
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
}
