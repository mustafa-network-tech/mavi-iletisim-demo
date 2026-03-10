import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCT_CATEGORIES } from '@/data/products';

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }) {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.slug);

  if (!category) {
    return notFound();
  }

  return (
    <section className="section-padding bg-soft-white min-h-screen">
      <div className="container-wide mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-slate-500 flex flex-wrap items-center gap-1">
          <a href="/" className="hover:text-mavi-dark">
            Ana Sayfa
          </a>
          <span>/</span>
          <a href="/#urunler" className="hover:text-mavi-dark">
            Ürünler
          </a>
          <span>/</span>
          <span className="text-slate-700 font-medium">{category.title}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-14">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              {category.title}
            </h1>
            <p className="mt-3 text-slate-600 max-w-xl">{category.description}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100 aspect-[16/9]">
            <img
              src={category.heroImage}
              alt={category.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Products grid – click card to see product detail & add to cart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {category.products.map((product) => (
            <Link
              key={product.id}
              href={`/urunler/${category.slug}/${product.id}`}
              className="group bg-white rounded-2xl shadow-md border border-slate-100 hover:border-soft-blue/60 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-mavi-dark">
                  {product.name}
                </h2>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Demo ürün • Detay için tıklayın
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

