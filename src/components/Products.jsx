'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '@/data/products';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="urunler" className="section-padding bg-gradient-to-b from-soft-white to-soft-blue/30">
      <div className="container-wide mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Ürünler
        </motion.h2>
        <motion.p
          className="text-slate-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Geniş ürün yelpazemiz ile ihtiyacınıza uygun teknoloji çözümlerini sunuyoruz.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {PRODUCT_CATEGORIES.map((cat) => (
            <motion.div key={cat.slug} variants={item}>
              <Link
                href={`/urunler/${cat.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-soft-blue/50 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={cat.heroImage}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-mavi-dark transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{cat.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
