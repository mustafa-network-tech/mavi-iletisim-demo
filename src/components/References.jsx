'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// public/images/references/ içindeki dosya adlarına göre ayarlandı
const REFERENCE_CARDS = [
  {
    name: 'MK Digital Systems',
    photo: '/images/references/aira5 - Kopya.jpg',
    description: 'Kurumsal web ve yazılım çözümleri platformu.',
  },
  {
    name: 'M.K. Field Ops',
    photo: '/images/references/mk-field-ops.jpeg',
    description: 'Telekom saha operasyonları yönetim sistemi.',
  },
  {
    name: 'Kadraj Rotam',
    photo: '/images/references/kadrajrotamlogo.jpeg',
    description: 'Fotoğraf rotaları ve keşif platformu.',
  },
  {
    name: 'Şiir Dünyası',
    photo: '/images/references/siir-dunyasi.jpeg',
    description: 'Dijital şiir ve edebiyat platformu.',
  },
  {
    name: 'Mavi Kadraj',
    photo: '/images/references/mavi kadrajlogo - Kopya.jpg',
    description: 'Fotoğraf ve doğa odaklı medya projesi.',
  },
  {
    name: 'Mavi İletişim',
    useIcons: true,
    description: 'Teknoloji ürünleri ve teknik servis çözümleri.',
  },
];

// Kendi fotoğraflarınızı ekleyene kadar gösterilecek placeholder (gerçek fotoğraflar)
const PLACEHOLDER_PHOTOS = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1512820790803-83d734c7faeb?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
];

const TESTIMONIALS = [
  {
    comment: 'Telefon tamiri için başvurdum, çok hızlı ve uygun fiyata hizmet aldım. Teşekkürler Mavi İletişim.',
    name: 'Ahmet Y.',
    role: 'Bireysel Müşteri',
    rating: 5,
  },
  {
    comment: 'Kurumsal bilgisayar alımlarımızı ve teknik destek ihtiyacımızı karşılıyorlar. Güvenilir bir iş ortağı.',
    name: 'Elif K.',
    role: 'IT Müdürü',
    rating: 5,
  },
  {
    comment: 'Tablet ve aksesuar alışverişimde her zaman kaliteli ürün ve dürüst fiyat. Memnunum.',
    name: 'Mehmet D.',
    role: 'Bireysel Müşteri',
    rating: 5,
  },
];

const PhoneIcon = () => (
  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

function ReferenceCard({ name, description, photo, photos, placeholderPhoto, useIcons, isInView, delay }) {
  const [photoError, setPhotoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const displaySrc = photoError ? placeholderPhoto : photo;
  const imgSrc = typeof displaySrc === 'string' && displaySrc.startsWith('/') ? encodeURI(displaySrc) : displaySrc;
  const hasTwoLogos = Array.isArray(photos) && photos.length >= 2;
  const showPanel = isHovered || panelOpen;

  return (
    <motion.div
      className="group relative flex flex-col min-h-[140px] sm:min-h-[160px] rounded-2xl bg-white border-2 border-slate-200 shadow-sm overflow-hidden transition-all duration-300 ease-in-out hover:border-mavi-dark/40 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      title={name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setPanelOpen((prev) => !prev)}
    >
      {/* Fotoğraf alanı: tek logo, iki logo veya ikonlar (Mavi İletişim) */}
      <div className="relative w-full flex-1 min-h-[90px] sm:min-h-[100px] bg-slate-100 flex items-center justify-center gap-4 text-slate-400 overflow-hidden">
        {useIcons ? (
          <span className="flex gap-4 transition-colors duration-300 group-hover:text-mavi-dark/70">
            <PhoneIcon />
            <EmailIcon />
          </span>
        ) : hasTwoLogos ? (
          <div className="flex items-center justify-center gap-6 sm:gap-8 w-full h-full p-4">
            <img
              src={encodeURI(photos[0])}
              alt=""
              className="object-contain max-h-[70px] sm:max-h-[85px] w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <img
              src={encodeURI(photos[1])}
              alt=""
              className="object-contain max-h-[70px] sm:max-h-[85px] w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        ) : (
          <img
            src={imgSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setPhotoError(true)}
          />
        )}
      </div>
      {/* Referans adı */}
      <div className="flex items-center justify-center px-3 py-3 text-slate-700 font-semibold text-center text-sm sm:text-base transition-colors duration-300 group-hover:text-mavi-dark flex-shrink-0">
        {name}
      </div>

      {/* Açıklama paneli: hover veya tıklanınca slide-up */}
      {description && (
        <div
          className="absolute inset-x-0 bottom-0 px-3 py-2 bg-white/90 backdrop-blur-sm border-t border-slate-200/50 text-slate-600 text-xs leading-snug line-clamp-2 rounded-b-2xl transition-all duration-300 ease-in-out md:pointer-events-none"
          style={{
            opacity: showPanel ? 1 : 0,
            transform: showPanel ? 'translateY(0)' : 'translateY(10px)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {description}
        </div>
      )}
    </motion.div>
  );
}

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${count} yıldız`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function References() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="referanslar" className="section-padding bg-white">
      <div className="container-wide mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Referanslar
        </motion.h2>
        <motion.p
          className="text-slate-600 text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Bizi tercih eden kurumlar ve müşterilerimizin görüşleri.
        </motion.p>

        {/* Reference cards with logo background */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {REFERENCE_CARDS.map((ref, i) => (
            <ReferenceCard
              key={ref.name}
              name={ref.name}
              description={ref.description}
              photo={ref.photo}
              photos={ref.photos}
              placeholderPhoto={PLACEHOLDER_PHOTOS[i]}
              useIcons={ref.useIcons}
              isInView={isInView}
              delay={0.2 + i * 0.06}
            />
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-6 rounded-2xl bg-soft-blue/30 border border-soft-blue/50"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">&ldquo;{t.comment}&rdquo;</p>
              <p className="mt-4 font-semibold text-slate-800">{t.name}</p>
              <p className="text-slate-500 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
