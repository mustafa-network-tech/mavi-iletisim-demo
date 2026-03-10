'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DEVICE_TYPES = ['Cep Telefonu', 'Bilgisayar', 'Tablet', 'Diğer'];

export default function ServiceRequest() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="servis-talebi" className="section-padding bg-gradient-to-b from-soft-white to-soft-blue/30" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Servis Talebi Oluştur
        </motion.h2>
        <motion.p
          className="text-slate-600 text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Teknik servis talebinizi aşağıdaki form ile iletebilirsiniz. En kısa sürede size dönüş yapacağız.
        </motion.p>

        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8 lg:p-10"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-soft-blue/50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mavi-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Talebiniz Alındı</h3>
              <p className="mt-2 text-slate-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mavi-dark focus:ring-2 focus:ring-mavi/30 outline-none transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mavi-dark focus:ring-2 focus:ring-mavi/30 outline-none transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mavi-dark focus:ring-2 focus:ring-mavi/30 outline-none transition-all"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label htmlFor="device" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Cihaz Türü
                </label>
                <select
                  id="device"
                  name="device"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mavi-dark focus:ring-2 focus:ring-mavi/30 outline-none transition-all bg-white"
                >
                  <option value="">Seçiniz</option>
                  {DEVICE_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Sorun Açıklaması
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mavi-dark focus:ring-2 focus:ring-mavi/30 outline-none transition-all resize-none"
                  placeholder="Cihazınızda yaşadığınız sorunu kısaca açıklayınız..."
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 rounded-xl bg-mavi-dark text-white font-semibold hover:bg-mavi-dark/90 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Gönder
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
