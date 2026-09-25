'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DEMO_CONTACT, MK_WHATSAPP } from '@/data/mk';

const INFO = [
  {
    label: 'Adres',
    value: 'Örnek Mah. Teknoloji Cad. No:1, 34000 İstanbul',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    ),
    href: null,
  },
  {
    label: 'Telefon',
    value: DEMO_CONTACT.phone,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
    href: null,
  },
  {
    label: 'Email',
    value: DEMO_CONTACT.email,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="iletisim" className="section-padding bg-white" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          İletişim
        </motion.h2>
        <motion.p
          className="text-slate-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Sorularınız için bize ulaşabilirsiniz.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {INFO.map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-soft-blue/50 text-mavi-dark flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-slate-800 font-medium hover:text-mavi-dark transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-800 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            <p className="text-xs text-slate-500">{DEMO_CONTACT.note}</p>
            <div className="rounded-xl border border-slate-200 bg-soft-grey p-5">
              <p className="text-sm font-semibold text-slate-800">İşletmeniz için benzer bir site</p>
              <p className="text-sm text-slate-600 mt-1">Mavi İletişim, MK Digital Systems’in hazırladığı bir örnek projedir.</p>
              <a
                href={MK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-semibold text-mavi-dark hover:underline"
              >
                WhatsApp’tan MK Digital Systems ile görüşün →
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden border border-slate-200 bg-soft-grey min-h-[280px] sm:min-h-[320px]"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="w-full h-full min-h-[280px] sm:min-h-[320px]">
              <iframe
                title="Harita — Yıldız Parkı (örnek kamu yeşil alan)"
                src="https://www.openstreetmap.org/export/embed.html?bbox=29.0120%2C41.0400%2C29.0320%2C41.0520&layer=mapnik&marker=41.046%2C29.022"
                className="w-full h-full min-h-[280px] sm:min-h-[320px] border-0 block"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-slate-500 text-center py-2 bg-soft-grey border-t border-slate-200">
              Örnek konum: Yıldız Parkı (kamu yeşil alanı) — Harita: © OpenStreetMap
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
