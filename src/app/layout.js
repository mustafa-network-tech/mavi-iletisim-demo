import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { CartProvider } from '@/components/cart/CartContext';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'MK Digital Systems | Mustafa Öner — Teknoloji, Güven ve Profesyonel Hizmet',
  description:
    'MK Digital Systems — Teknoloji, güven ve profesyonel hizmet. Cep telefonu, bilgisayar, tablet ve network ürünleri. Teknik servis ve kurumsal destek.',
  keywords: 'MK Digital Systems, Mustafa Öner, teknoloji, teknik servis, telefon tamiri, bilgisayar onarım, tablet, iletişim',
  openGraph: {
    title: 'MK Digital Systems',
    description: 'Teknoloji, Güven ve Profesyonel Hizmet — Mustafa Öner',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={plusJakarta.variable}>
      <body className="min-h-screen bg-soft-white font-sans text-slate-800 antialiased">
        <CartProvider>
          <TopBar />
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
