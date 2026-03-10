import Hero from '@/components/Hero';
import Products from '@/components/Products';
import TechnicalService from '@/components/TechnicalService';
import About from '@/components/About';
import References from '@/components/References';
import ServiceRequest from '@/components/ServiceRequest';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <TechnicalService />
      <About />
      <References />
      <ServiceRequest />
      <Contact />
    </>
  );
}
