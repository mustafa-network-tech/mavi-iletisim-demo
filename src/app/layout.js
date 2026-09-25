import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { CartProvider } from '@/components/cart/CartContext';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

// Demo site: kept out of search results so it is never mistaken for a real shop (X-Robots-Tag in next.config.js too).
export const metadata = {
  title: 'Mavi İletişim — Teknoloji Mağazası Web Sitesi Demosu | MK Digital Systems',
  description:
    "MK Digital Systems'in teknoloji mağazaları için hazırladığı örnek web sitesi: ürün katalogu, sepet ve teknik servis talebi. Mavi İletişim gerçek bir işletme değildir.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: 'Mavi İletişim · Teknoloji mağazası web sitesi demosu',
    description: 'Teknoloji mağazaları için hazırlanmış örnek web sitesi. MK Digital Systems portföy projesi.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={plusJakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-soft-white dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-100 antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            <TopBar />
            <Navbar />
            <main className="pt-24 bg-soft-white dark:bg-slate-900">{children}</main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
