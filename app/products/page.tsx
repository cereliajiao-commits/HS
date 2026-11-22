import type { Metadata } from 'next';
import Link from 'next/link';
import AllProductsCatalog from '@/components/AllProductsCatalog';
import type { Language } from '@/components/LanguageProvider';

const SITE_URL = 'https://www.hsaxle.com';

export const metadata: Metadata = {
  title: { absolute: 'All Truck and Agricultural Parts | HONGSHENG' },
  description: 'Browse all HONGSHENG truck steering, suspension, axle, driveline and agricultural machinery replacement parts with OEM/OE reference information.',
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    type: 'website',
    title: 'All Truck and Agricultural Parts | HONGSHENG',
    description: 'Browse the complete HONGSHENG Auto Parts product catalog.',
    url: `${SITE_URL}/products`,
  },
};

function getLanguage(value?: string): Language {
  const normalized = value?.toLowerCase();
  return normalized && ['en', 'zh', 'ru', 'ar', 'es', 'pt', 'fr'].includes(normalized)
    ? normalized as Language
    : 'en';
}

export default function AllProductsPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = getLanguage(searchParams?.lang);
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/products#collection`,
    name: 'All HONGSHENG Auto Parts Products',
    description: 'Complete HONGSHENG truck and agricultural machinery parts catalog.',
    url: `${SITE_URL}/products`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };

  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><span>All products</span>
        </nav>
        <p className="section-label">ALL PRODUCTS</p>
        <h1>All Truck and Agricultural Parts</h1>
        <p className="category-page-intro">Browse the complete HONGSHENG product catalog. Open any product to view OEM/OE references, vehicle applications and quotation details.</p>
        <AllProductsCatalog lang={lang} />
      </div>
    </main>
  );
}
