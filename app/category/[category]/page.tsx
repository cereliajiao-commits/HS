import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { allProductCards } from '@/data/products';
import { categoryPageMap, categoryPages } from '@/data/categoryPages';
import { getDisplayOemNumbers, withOemTitle } from '@/data/productTitles';
import type { Language } from '@/components/LanguageProvider';

const SITE_URL = 'https://www.hsaxle.com';

export function generateStaticParams() {
  return categoryPages.map((page) => ({ category: page.slug }));
}

function getPage(category: string) {
  return categoryPageMap[decodeURIComponent(category)];
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const page = getPage(params.category);
  if (!page) return { title: 'Category not found', robots: { index: false, follow: false } };
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [page.name, 'truck parts manufacturer', 'OEM replacement parts', 'HONGSHENG Auto Parts'],
    alternates: { canonical: `${SITE_URL}/category/${page.slug}` },
    openGraph: { type: 'website', title: page.title, description: page.description, url: `${SITE_URL}/category/${page.slug}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

function getLanguage(value?: string): Language {
  const normalized = value?.toLowerCase();
  return normalized && ['en', 'zh', 'ru', 'ar', 'es', 'pt', 'fr'].includes(normalized)
    ? normalized as Language
    : 'en';
}

export default function CategoryPage({ params, searchParams }: { params: { category: string }; searchParams?: { lang?: string } }) {
  const page = getPage(params.category);
  if (!page) notFound();
  const lang = getLanguage(searchParams?.lang);
  const products = allProductCards.filter((product) => product.category === page.slug);
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/category/${page.slug}#collection`,
    name: page.name,
    description: page.description,
    url: `${SITE_URL}/category/${page.slug}`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/product/${encodeURIComponent(product.id)}`,
        name: withOemTitle(product.title, product.id, 'en'),
      })),
    },
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Product categories', item: `${SITE_URL}/category` },
      { '@type': 'ListItem', position: 3, name: page.name, item: `${SITE_URL}/category/${page.slug}` },
    ],
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/category">Product categories</Link><span>/</span><span>{page.name}</span>
        </nav>
        <p className="section-label">{page.name.toUpperCase()}</p>
        <h1>{page.name}</h1>
        <p className="category-page-intro">{page.intro}</p>
        <p className="category-page-count">{products.length} cataloged products with OEM/OE reference information</p>
        <section className="products-grid category-product-grid" aria-label={page.name}>
          {products.map((product, index) => {
            const title = withOemTitle(product.title, product.id, 'en');
            const oemNumbers = getDisplayOemNumbers(product.id, 'en');
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
                  <p>{product.description}</p>
                  {oemNumbers.length ? <div className="product-card-oem"><span>OEM</span> {oemNumbers.join(' · ')}</div> : null}
                  <span className="product-tag">{page.name}</span>
                </div>
              </Link>
            );
          })}
        </section>
        <section className="category-faq" aria-labelledby="category-faq-title">
          <p className="section-label">FITMENT FAQ</p>
          <h2 id="category-faq-title">Questions about {page.name.toLowerCase()}</h2>
          {page.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>
        <div className="category-page-cta"><Link className="btn btn-primary" href="/#contact">Request a catalog or quotation</Link></div>
      </div>
    </main>
  );
}
