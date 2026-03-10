'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const IMAGE_URL = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="biz-kimiz" className="section-padding bg-gradient-to-b from-soft-blue/20 to-soft-white">
      <div className="container-wide mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Biz Kimiz
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:min-h-[400px]"
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img
              src={IMAGE_URL}
              alt="Mavi İletişim teknoloji çalışma alanı"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Mavi İletişim</strong>, teknoloji perakende satışı ve teknik servis alanında yılların deneyimi ile müşterilerine güvenilir ve profesyonel hizmet sunan bir kuruluştur.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Cep telefonu, bilgisayar, tablet ve kurumsal altyapı ürünlerinde geniş ürün yelpazesi ile hem bireysel hem kurumsal müşterilerimizin ihtiyaçlarını karşılıyoruz. Teknik servis birimimiz, tüm marka ve modellerde hızlı tamir ve bakım hizmeti vermektedir.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mavi-dark" />
                Yılların deneyimi ve sektör bilgisi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mavi-dark" />
                Müşteri memnuniyeti odaklı hizmet
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mavi-dark" />
                Uzman teknik servis ekibi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mavi-dark" />
                Garanti ve güvenilir çözümler
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
