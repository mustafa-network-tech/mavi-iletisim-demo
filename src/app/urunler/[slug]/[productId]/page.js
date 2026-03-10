import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCT_CATEGORIES } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

export function generateStaticParams() {
  const params = [];
  for (const category of PRODUCT_CATEGORIES) {
    for (const product of category.products) {
      params.push({
        slug: category.slug,
        productId: product.id,
      });
    }
  }
  return params;
}

export default function ProductPage({ params }) {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const product = category.products.find((p) => p.id === params.productId);
  if (!product) return notFound();

  return (
    <section className="section-padding bg-soft-white min-h-screen">
      <div className="container-wide mx-auto space-y-8">
        {/* Breadcrumb */}
        <div className="text-sm text-slate-500 flex flex-wrap items-center gap-1">
          <Link href="/" className="hover:text-mavi-dark">
            Ana Sayfa
          </Link>
          <span>/</span>
          <Link href="/#urunler" className="hover:text-mavi-dark">
            Ürünler
          </Link>
          <span>/</span>
          <Link href={`/urunler/${category.slug}`} className="hover:text-mavi-dark">
            {category.title}
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">{product.name}</span>
        </div>

        <ProductDetail category={category} product={product} />
      </div>
    </section>
  );
}

