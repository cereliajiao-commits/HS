import type { Metadata } from 'next';
import Link from 'next/link';
import { categoryPages } from '@/data/categoryPages';
import type { Language } from '@/components/LanguageProvider';
import { translateCategoryLabel } from '@/data/productLocalization';
import { categoryUiCopy } from '@/data/categoryLocalization';
import { getLanguage, languageAlternates, languageUrl } from '@/lib/seo';

const SITE_URL = 'https://www.hsaxle.com';

export async function generateMetadata({ searchParams }: { searchParams?: { lang?: string } }): Promise<Metadata> {
  const lang = getLanguage(searchParams?.lang);
  const copy = categoryUiCopy[lang] ?? categoryUiCopy.en!;
  const canonical = languageUrl(SITE_URL, '/category', lang);
  return {
    title: { absolute: lang === 'en' ? 'Truck and Agricultural Parts Categories | HONGSHENG' : `${copy.categories} | HONGSHENG Auto Parts` },
    description: copy.directoryIntro,
    alternates: { canonical, languages: languageAlternates(SITE_URL, '/category') },
    openGraph: { type: 'website', title: copy.categories, description: copy.directoryIntro, url: canonical },
  };
}

export default function CategoryIndexPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = getLanguage(searchParams?.lang);
  const copy = categoryUiCopy[lang] ?? categoryUiCopy.en!;
  const categoryUrl = languageUrl(SITE_URL, '/category', lang);
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${categoryUrl}#collection`,
    name: copy.categories,
    description: copy.directoryIntro,
    url: categoryUrl,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categoryPages.map((page, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: lang === 'en' ? page.name : translateCategoryLabel(page.slug, lang),
        url: languageUrl(SITE_URL, `/category/${page.slug}`, lang),
      })),
    },
  };

  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <Link href={lang === 'en' ? '/' : `/?lang=${lang}`}>{copy.home}</Link><span>/</span><span>{copy.categories}</span>
        </nav>
        <p className="section-label">{copy.browseLabel}</p>
        <h1>{copy.categories}</h1>
        <p className="category-page-intro">{copy.directoryIntro}</p>
        <div className="category-directory-grid">
          {categoryPages.map((page) => (
            <Link className="category-directory-card" href={`/category/${page.slug}${lang === 'en' ? '' : `?lang=${lang}`}`} key={page.slug}>
              <h2>{lang === 'en' ? page.name : translateCategoryLabel(page.slug, lang)}</h2>
              <p>{copy.directoryDescription(lang === 'en' ? page.name : translateCategoryLabel(page.slug, lang))}</p>
              <span>{copy.browseLabel} →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
