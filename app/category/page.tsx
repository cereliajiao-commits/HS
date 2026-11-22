import type { Metadata } from 'next';
import Link from 'next/link';
import { categoryPages } from '@/data/categoryPages';
import type { Language } from '@/components/LanguageProvider';
import { translateCategoryLabel } from '@/data/productLocalization';
import { categoryUiCopy } from '@/data/categoryLocalization';

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

function getLanguage(value?: string): Language {
  const normalized = value?.toLowerCase();
  return normalized && ['en', 'zh', 'ru', 'ar', 'es', 'pt', 'fr'].includes(normalized)
    ? normalized as Language
    : 'en';
}

export default function CategoryIndexPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = getLanguage(searchParams?.lang);
  const copy = categoryUiCopy[lang];
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
          <Link href="/">{copy.home}</Link><span>/</span><span>{copy.categories}</span>
        </nav>
        <p className="section-label">{copy.browseLabel}</p>
        <h1>{copy.categories}</h1>
        <p className="category-page-intro">{copy.directoryIntro}</p>
        <div className="category-directory-grid">
          {categoryPages.map((page) => (
            <Link className="category-directory-card" href={`/category/${page.slug}${lang === 'en' ? '' : `?lang=${lang}`}`} key={page.slug}>
              <h2>{lang === 'en' ? page.name : translateCategoryLabel(page.slug, lang)}</h2>
              <p>{copy.directoryDescription(lang === 'en' ? page.name : translateCategoryLabel(page.slug, lang))}</p>
              <span>View category →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
