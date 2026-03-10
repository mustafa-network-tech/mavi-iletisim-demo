import CartSummary from '@/components/cart/CartSummary';

export default function CartPage() {
  return (
    <section className="section-padding bg-soft-white min-h-screen">
      <div className="container-narrow mx-auto space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Sepet</h1>
          <p className="mt-2 text-slate-600 text-sm">
            Sepete eklediğiniz tüm ürünler aşağıda listelenir. İstediğiniz ürünü tek tek çıkarabilir veya sepeti temizleyebilirsiniz.
          </p>
        </div>

        <CartSummary />

        <p className="mt-8 pt-6 text-slate-400 text-sm leading-relaxed">
          Demo Sepet: Bu alan yalnızca sistemin çalışma mantığını göstermek için hazırlanmıştır. Gerçek projelerde kullanıcı girişi, sipariş yönetimi ve ödeme sistemleri entegre edilmektedir.
        </p>
      </div>
    </section>
  );
}

