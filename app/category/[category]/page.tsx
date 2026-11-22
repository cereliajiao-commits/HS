import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { allProductCards } from '@/data/products';
import { categoryPageMap, categoryPages } from '@/data/categoryPages';
import { getDisplayOemNumbers, withOemTitle } from '@/data/productTitles';
import { resolveProductText } from '@/data/productLocalization';
import { translateCategoryLabel } from '@/data/productLocalization';
import { categoryUiCopy, localizedCategoryFaq } from '@/data/categoryLocalization';
import { getLanguage, languageAlternates, languageUrl } from '@/lib/seo';

const SITE_URL = 'https://www.hsaxle.com';

export function generateStaticParams() {
  return categoryPages.map((page) => ({ category: page.slug }));
}

function getPage(category: string) {
  return categoryPageMap[decodeURIComponent(category)];
}

export async function generateMetadata({ params, searchParams }: { params: { category: string }; searchParams?: { lang?: string } }): Promise<Metadata> {
  const page = getPage(params.category);
  if (!page) return { title: 'Category not found', robots: { index: false, follow: false } };
  const lang = getLanguage(searchParams?.lang);
  const displayName = lang === 'en' ? page.name : translateCategoryLabel(page.slug, lang);
  const copy = categoryUiCopy[lang] ?? categoryUiCopy.en!;
  const path = `/category/${page.slug}`;
  const canonical = languageUrl(SITE_URL, path, lang);
  return {
    title: { absolute: lang === 'en' ? page.title : `${displayName} | HONGSHENG Auto Parts` },
    description: copy.intro(displayName),
    keywords: [displayName, 'truck parts manufacturer', 'OEM replacement parts', 'HONGSHENG Auto Parts'],
    alternates: { canonical, languages: languageAlternates(SITE_URL, path) },
    openGraph: { type: 'website', title: displayName, description: copy.intro(displayName), url: canonical },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function CategoryPage({ params, searchParams }: { params: { category: string }; searchParams?: { lang?: string } }) {
  const page = getPage(params.category);
  if (!page) notFound();
  const lang = getLanguage(searchParams?.lang);
  const copy = categoryUiCopy[lang] ?? categoryUiCopy.en!;
  const displayName = lang === 'en' ? page.name : translateCategoryLabel(page.slug, lang);
  const localizedFaq = localizedCategoryFaq(displayName, lang, page.faq);
  const products = allProductCards.filter((product) => product.category === page.slug);
  const categoryPath = `/category/${page.slug}`;
  const categoryUrl = languageUrl(SITE_URL, categoryPath, lang);
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${categoryUrl}#collection`,
    name: displayName,
    description: copy.intro(displayName),
    url: categoryUrl,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: languageUrl(SITE_URL, `/product/${encodeURIComponent(product.id)}`, lang),
        name: withOemTitle(resolveProductText(product.id, product.category, lang)?.title ?? product.title, product.id, lang),
      })),
    },
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.home, item: languageUrl(SITE_URL, '/', lang) },
      { '@type': 'ListItem', position: 2, name: copy.categories, item: languageUrl(SITE_URL, '/category', lang) },
      { '@type': 'ListItem', position: 3, name: displayName, item: categoryUrl },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${categoryUrl}#faq`,
    mainEntity: localizedFaq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{copy.home}</Link><span>/</span><Link href={`/category${lang === 'en' ? '' : `?lang=${lang}`}`}>{copy.categories}</Link><span>/</span><span>{displayName}</span>
        </nav>
        <p className="section-label">{copy.browseLabel}</p>
        <h1>{displayName}</h1>
        <p className="category-page-intro">{copy.intro(displayName)}</p>
        <p className="category-page-count">{copy.count(products.length)}</p>
        <section className="products-grid category-product-grid" aria-label={displayName}>
          {products.map((product, index) => {
            const localized = resolveProductText(product.id, product.category, lang);
            const title = withOemTitle(localized?.title ?? product.title, product.id, lang);
            const description = localized?.description ?? product.description;
            const oemNumbers = getDisplayOemNumbers(product.id, lang);
            return (
              <Link className="product-card" href={`/product/${encodeURIComponent(product.id)}${lang === 'en' ? '' : `?lang=${lang}`}`} key={product.id}>
                <div className="product-card-img">
                  <Image
                    src={product.image}
                    alt={title}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
                <div className="product-card-body">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  {oemNumbers.length ? <div className="product-card-oem"><span>OEM</span> {oemNumbers.join(' · ')}</div> : null}
                  <span className="product-tag">{localized?.categoryLabel ?? displayName}</span>
                </div>
              </Link>
            );
          })}
        </section>
        <section className="category-faq" aria-labelledby="category-faq-title">
          <p className="section-label">{copy.faqLabel}</p>
          <h2 id="category-faq-title">{copy.faqTitle(displayName)}</h2>
          {localizedFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>
        <div className="category-page-cta"><Link className="btn btn-primary" href="/#contact">{copy.quote}</Link></div>
      </div>
    </main>
  );
}
