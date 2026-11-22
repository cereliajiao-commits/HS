import type { Metadata } from 'next';
import Link from 'next/link';
import { categoryPages } from '@/data/categoryPages';

const SITE_URL = 'https://www.hsaxle.com';

export const metadata: Metadata = {
  title: { absolute: 'Truck and Agricultural Parts Categories | HONGSHENG' },
  description: 'Browse HONGSHENG Auto Parts categories for truck steering, suspension, axle, driveline and agricultural machinery replacement parts.',
  alternates: { canonical: `${SITE_URL}/category` },
  openGraph: {
    type: 'website',
    title: 'Truck and Agricultural Parts Categories | HONGSHENG',
    description: 'Browse HONGSHENG heavy-duty truck, axle, steering and agricultural machinery parts by category.',
    url: `${SITE_URL}/category`,
  },
};

export default function CategoryIndexPage() {
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/category#collection`,
    name: 'Truck and Agricultural Parts Categories',
    description: 'HONGSHENG Auto Parts product categories.',
    url: `${SITE_URL}/category`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categoryPages.map((page, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: page.name,
        url: `${SITE_URL}/category/${page.slug}`,
      })),
    },
  };

  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><span>Product categories</span>
        </nav>
        <p className="section-label">PRODUCT CATEGORIES</p>
        <h1>Truck and Agricultural Parts Categories</h1>
        <p className="category-page-intro">Explore HONGSHENG Auto Parts categories by steering, suspension, axle, driveline and agricultural machinery application. Each category links to products, OEM references and a quote request route.</p>
        <div className="category-directory-grid">
          {categoryPages.map((page) => (
            <Link className="category-directory-card" href={`/category/${page.slug}`} key={page.slug}>
              <h2>{page.name}</h2>
              <p>{page.description}</p>
              <span>View category →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
