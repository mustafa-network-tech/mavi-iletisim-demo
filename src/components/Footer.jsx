'use client';

const FOOTER_LINKS = [
  { label: 'Ana Sayfa', href: '#' },
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Teknik Servis', href: '#teknik-servis' },
  { label: 'Biz Kimiz', href: '#biz-kimiz' },
  { label: 'Referanslar', href: '#referanslar' },
  { label: 'Servis Talebi', href: '#servis-talebi' },
  { label: 'İletişim', href: '#iletisim' },
];

const SOCIAL = [
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Twitter', href: '#', icon: 'twitter' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
];

function SocialIcon({ icon }) {
  const paths = {
    linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15v-5.5a3.5 3.5 0 0 0-7 0V21m-3.5-9h7m-7 0v4',
    twitter: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-5.8 1.8 1 3 2.6 3 5.2z',
    instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
    facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  };
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d={paths[icon] || paths.facebook} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-mavi-dark mb-3">Mavi İletişim</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              Teknoloji satışı ve teknik servis alanında yılların deneyimi ile müşterilerimize güvenilir çözümler sunuyoruz. Cep telefonu, bilgisayar, tablet ve kurumsal altyapı ürünlerinde tek adresiniz.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-600 hover:text-mavi-dark text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">İletişim</h4>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li>Örnek Mah. Teknoloji Cad. No:1</li>
              <li>
                <a href="tel:+902121234567" className="hover:text-mavi-dark">+90 212 123 45 67</a>
              </li>
              <li>
                <a href="mailto:mustafa82oner@gmail.com" className="hover:text-mavi-dark">mustafa82oner@gmail.com</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2 rounded-lg bg-white text-slate-500 hover:text-mavi-dark hover:bg-soft-blue/50 transition-colors"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm space-y-1">
          <p>© {new Date().getFullYear()} Mavi İletişim. Tüm hakları saklıdır.</p>
          <p className="text-slate-600 font-medium">
            Bu site demo olarak Mustafa Öner | MK Digital Systems tarafından hazırlanmıştır. Demo sürümü.
          </p>
        </div>
      </div>
    </footer>
  );
}
