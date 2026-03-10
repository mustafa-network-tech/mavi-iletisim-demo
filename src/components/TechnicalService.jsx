'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SERVICES = [
  {
    title: 'Telefon tamiri',
    description: 'Akıllı telefon ve cep telefonu ekran değişimi, batarya, yazılım ve donanım onarımı.',
    icon: 'phone',
  },
  {
    title: 'Bilgisayar bakım ve onarım',
    description: 'Dizüstü ve masaüstü bilgisayar tamiri, temizlik, termal macun ve donanım değişimi.',
    icon: 'laptop',
  },
  {
    title: 'Yazılım kurulumu',
    description: 'İşletim sistemi kurulumu, lisanslı yazılımlar ve güvenlik yazılımları.',
    icon: 'code',
  },
  {
    title: 'Donanım yükseltme',
    description: 'RAM, SSD, ekran ve diğer donanım yükseltmeleri ile performans artışı.',
    icon: 'cpu',
  },
  {
    title: 'Kurumsal teknik destek',
    description: 'Şirket içi IT altyapısı, ağ ve cihaz yönetimi, uzaktan destek.',
    icon: 'building',
  },
];

const icons = {
  phone: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  ),
  laptop: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
  code: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  ),
  cpu: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2M5 15H3m18 6v-2M3 5v2m18-2v2M3 19v-2m18 2v-2" />
  ),
  building: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  ),
};

export default function TechnicalService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="teknik-servis" className="section-padding bg-white">
      <div className="container-wide mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Teknik Servis
        </motion.h2>
        <motion.p
          className="text-slate-600 text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Uzman ekibimiz ile tüm cihazlarınız için hızlı ve güvenilir servis hizmeti.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className="flex gap-5 p-6 rounded-2xl bg-soft-grey/60 hover:bg-soft-blue/40 border border-transparent hover:border-soft-blue/50 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-mavi/20 text-mavi-dark flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icons[service.icon]}
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{service.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
