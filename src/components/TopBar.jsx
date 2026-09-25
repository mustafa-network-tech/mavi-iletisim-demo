'use client';

import { MK_HOME } from '@/data/mk';

/** Sample-project notice: Mavi İletişim is a fictional business built as an MK Digital Systems web design demo. */
export default function TopBar() {
  return (
    <aside
      aria-label="Örnek proje bildirimi"
      className="fixed top-0 left-0 right-0 z-[60] h-8 flex items-center gap-3 bg-[#0b1e26] text-[#c9d5d8] px-4 sm:px-6 text-[11px] sm:text-xs border-b border-white/10"
    >
      <b className="shrink-0 pr-3 border-r border-white/20 text-[#d7b98b] uppercase tracking-[0.18em] text-[10px] font-semibold">Örnek proje</b>
      <p className="hidden sm:block flex-1 min-w-0 truncate">
        Mavi İletişim gerçek bir işletme değildir; MK Digital Systems’in teknoloji mağazaları için hazırladığı bir web sitesi demosudur.
      </p>
      <a href={MK_HOME} className="shrink-0 ml-auto text-white border-b border-white/40 hover:text-[#d7b98b] hover:border-[#d7b98b]">
        <span className="sm:hidden">MK Digital Systems demosu ↗</span>
        <span className="hidden sm:inline">MK Digital Systems ↗</span>
      </a>
    </aside>
  );
}
