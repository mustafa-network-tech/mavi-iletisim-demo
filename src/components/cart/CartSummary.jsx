'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart/CartContext';

function formatPrice(n) {
  return `₺${Number(n).toLocaleString('tr-TR')}`;
}

export default function CartSummary() {
  const { items, totalCount, clearCart, removeItem, updateQuantity, hydrated } = useCart();

  if (!hydrated) {
    return (
      <div className="py-8 text-center text-slate-500 text-sm">
        Sepet yükleniyor...
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-600">
          Sepetiniz boş. Ürün detay sayfalarından <strong>Sepete Ekle</strong> butonu ile
          eklediğiniz demo ürünler burada listelenir.
        </p>
      </div>
    );
  }

  const totalAmount = items.reduce(
    (sum, item) => sum + (item.unitPrice ?? 4999) * item.quantity,
    0,
  );

  return (
    <div className="space-y-4">
      <ul className="divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white overflow-hidden">
        {items.map((item, idx) => {
          const unitPrice = item.unitPrice ?? 4999;
          const lineTotal = unitPrice * item.quantity;
          return (
            <li
              key={`${item.id}-${item.color}-${item.memory}-${idx}`}
              className="p-4 flex flex-wrap gap-4 items-center"
            >
              <Link
                href={`/urunler/${item.categorySlug}/${item.id}`}
                className="flex gap-4 items-center flex-1 min-w-0"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 hover:text-mavi-dark">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {item.categoryTitle}
                    {item.color && ` • ${item.color}`}
                    {item.memory && ` • ${item.memory}`}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Birim: {formatPrice(unitPrice)}
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateQuantity(idx, item.quantity - 1)}
                  className="w-8 h-8 rounded-lg border border-slate-200 text-slate-600 hover:bg-soft-grey flex items-center justify-center font-medium"
                  aria-label="Azalt"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-semibold text-slate-800">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(idx, item.quantity + 1)}
                  className="w-8 h-8 rounded-lg border border-slate-200 text-slate-600 hover:bg-soft-grey flex items-center justify-center font-medium"
                  aria-label="Artır"
                >
                  +
                </button>
              </div>

              <div className="text-sm font-semibold text-mavi-dark whitespace-nowrap">
                {formatPrice(lineTotal)}
              </div>

              <button
                type="button"
                onClick={() => removeItem(idx)}
                className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                aria-label="Sepetten çıkar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-700">
        <span>
          Toplam ürün: <span className="font-semibold">{totalCount}</span>
        </span>
        <span className="font-semibold text-mavi-dark">
          Toplam tutar: {formatPrice(totalAmount)}
        </span>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-semibold text-rose-600 hover:text-rose-700"
        >
          Sepeti Temizle
        </button>
      </div>
    </div>
  );
}

