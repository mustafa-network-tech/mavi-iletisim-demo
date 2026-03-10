'use client';

import { useState, useMemo } from 'react';
import { useCart } from '@/components/cart/CartContext';

export default function ProductDetail({ category, product }) {
  const { addItem } = useCart();

  const colorOptions = product.colors && product.colors.length > 0
    ? product.colors
    : ['Siyah', 'Beyaz', 'Mavi'];

  const memoryOptions = useMemo(() => {
    if (product.storage && product.storage.includes('GB')) {
      return ['64 GB', '128 GB', '256 GB'];
    }
    return product.storage ? [product.storage] : ['Standart'];
  }, [product.storage]);

  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedMemory, setSelectedMemory] = useState(memoryOptions[0]);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem(product, category, {
      color: selectedColor,
      memory: selectedMemory,
      unitPrice: demoPriceNum,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const demoPriceNum =
    category.slug === 'cep-telefonlari'
      ? 14999
      : category.slug === 'tabletler'
      ? 11999
      : category.slug === 'bilgisayarlar'
      ? 27999
      : 4999;
  const demoPrice = `₺${demoPriceNum.toLocaleString('tr-TR')}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            {product.name}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">
            {category.title} • Demo ürün
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-3xl font-semibold text-mavi-dark">{demoPrice}</p>
          <p className="text-xs text-slate-500 mt-1">
            * Fiyatlar örnek amaçlıdır. Gerçek fiyat ve stok bilgisi için mağaza ile iletişime geçiniz.
          </p>
          {added && (
            <p className="text-xs font-semibold text-emerald-600">
              Ürün sepete eklendi. Sepeti <a href="/sepet" className="underline">buradan</a> görüntüleyebilirsiniz.
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-2">Renk</h3>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                    selectedColor === color
                      ? 'bg-mavi-dark text-white border-mavi-dark'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-mavi-dark/50'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-2">Hafıza</h3>
            <div className="flex flex-wrap gap-2">
              {memoryOptions.map((mem) => (
                <button
                  key={mem}
                  type="button"
                  onClick={() => setSelectedMemory(mem)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                    selectedMemory === mem
                      ? 'bg-mavi-dark text-white border-mavi-dark'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-mavi-dark/50'
                  }`}
                >
                  {mem}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800 mb-2">Teknik Özellikler</h3>
          <ul className="text-sm text-slate-600 space-y-1.5">
            {'size' in product && (
              <li>
                <span className="font-medium text-slate-700">Ekran:</span>{' '}
                {product.size}
              </li>
            )}
            {'storage' in product && (
              <li>
                <span className="font-medium text-slate-700">Depolama:</span>{' '}
                {product.storage}
              </li>
            )}
            {'battery' in product && (
              <li>
                <span className="font-medium text-slate-700">Batarya:</span>{' '}
                {product.battery}
              </li>
            )}
            {'cpu' in product && (
              <li>
                <span className="font-medium text-slate-700">İşlemci:</span>{' '}
                {product.cpu}
              </li>
            )}
            {'ram' in product && (
              <li>
                <span className="font-medium text-slate-700">Bellek:</span>{' '}
                {product.ram}
              </li>
            )}
            {'compatible' in product && (
              <li>
                <span className="font-medium text-slate-700">Uyumluluk:</span>{' '}
                {product.compatible}
              </li>
            )}
            {'spec1' in product && (
              <li>
                <span className="font-medium text-slate-700">Özellik:</span>{' '}
                {product.spec1}
              </li>
            )}
            {'spec2' in product && (
              <li>
                <span className="font-medium text-slate-700">Özellik:</span>{' '}
                {product.spec2}
              </li>
            )}
          </ul>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full md:w-auto px-8 py-3 rounded-xl bg-mavi-dark text-white font-semibold hover:bg-mavi-dark/90 shadow-md hover:shadow-lg transition-all"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

