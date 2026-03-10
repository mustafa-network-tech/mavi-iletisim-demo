'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
    value: '+90 212 123 45 67',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
    href: 'tel:+902121234567',
  },
  {
    label: 'Email',
    value: 'info@maviiletisim.com',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    href: 'mailto:info@maviiletisim.com',
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
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden border border-slate-200 bg-soft-grey min-h-[280px] flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="text-center text-slate-500 p-6">
              <svg className="w-12 h-12 mx-auto mb-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="font-medium">Harita alanı</p>
              <p className="text-sm mt-1">Google Maps entegrasyonu buraya eklenebilir</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
