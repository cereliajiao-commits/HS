import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProductCards } from '@/data/products';
import { productDetails } from '@/data/productDetails';
import { importedProductDetails } from '@/data/imported-products.details.generated';
import { resolveProductText, translateCategoryLabel } from '@/data/productLocalization';
import type { Language } from '@/components/LanguageProvider';

type ProductDetailRecord = {
  image: string;
  category?: string;
  title?: string;
  description?: string;
  specs?: { label: string; value: string }[];
  applications?: string[];
};

type ProductPageProps = {
  params: { slug: string };
  searchParams?: { lang?: string; language?: string };
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hsaxle.com';
const COMPANY_NAME = 'Hengshui Hongsheng Auto Parts Co., Ltd.';
const WHATSAPP_URL = 'https://wa.me/8617751097209';
const CONTACT_EMAIL = 'chinahs@hotmail.com';

const importedDetails = importedProductDetails as unknown as Record<string, ProductDetailRecord>;
const baseDetails = productDetails as Record<string, ProductDetailRecord>;

function getLanguage(value?: string): Language {
  return value?.toLowerCase() === 'zh' ? 'zh' : 'en';
}

function getProduct(slug: string) {
  const card = allProductCards.find((item) => item.id === slug);
  if (!card) return null;

  const detail = baseDetails[slug] ?? importedDetails[slug];
  return {
    card,
    detail,
  };
}

function getLocalizedProduct(slug: string, lang: Language) {
  const product = getProduct(slug);
  if (!product) return null;

  const { card, detail } = product;
  const localized = resolveProductText(slug, card.category, lang);
  const fallbackTitle = detail?.title ?? card.title;
  const fallbackDescription = detail?.description ?? card.description;
  const fallbackSpecs = detail?.specs ?? [];
  const fallbackApplications = detail?.applications ?? [];

  return {
    ...product,
    title: localized?.title ?? fallbackTitle,
    description: localized?.description ?? fallbackDescription,
    specs: localized?.specs ?? fallbackSpecs,
    applications: localized?.applications ?? fallbackApplications,
    categoryLabel: localized?.categoryLabel ?? translateCategoryLabel(card.category, lang),
    image: detail?.image ?? card.image,
  };
}

function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function productUrl(slug: string, lang?: Language) {
  const url = new URL(`/product/${encodeURIComponent(slug)}`, SITE_URL);
  if (lang === 'zh') url.searchParams.set('lang', 'zh');
  return url.toString();
}

export function generateStaticParams() {
  return allProductCards.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params, searchParams }: ProductPageProps): Promise<Metadata> {
  const lang = getLanguage(searchParams?.lang ?? searchParams?.language);
  const product = getLocalizedProduct(params.slug, lang);

  if (!product) {
    return {
      title: lang === 'zh' ? '产品未找到 | HONGSHENG Auto Parts' : 'Product Not Found | HONGSHENG Auto Parts',
      robots: { index: false, follow: false },
    };
  }

  const title = product.title;
  const description = product.description || (lang === 'zh'
    ? `了解 ${product.title}，获取 HONGSHENG Auto Parts 的产品规格、应用和询价支持。`
    : `Explore ${product.title}, including specifications, applications, and inquiry support from HONGSHENG Auto Parts.`);
  const url = productUrl(params.slug, lang);
  const image = absoluteUrl(product.image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'HONGSHENG Auto Parts',
      images: [{ url: image, alt: product.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

function StructuredData({ product, slug, lang }: { product: NonNullable<ReturnType<typeof getLocalizedProduct>>; slug: string; lang: Language }) {
  const url = productUrl(slug, lang);
  const image = absoluteUrl(product.image);
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: [image],
    category: product.categoryLabel,
    brand: {
      '@type': 'Brand',
      name: 'HONGSHENG',
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    url,
  };
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: '+86 177 5109 7209',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86 177 5109 7209',
      contactType: 'sales',
        availableLanguage: ['English', 'Chinese'],
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'zh' ? '首页' : 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: lang === 'zh' ? '产品' : 'Products',
        item: `${SITE_URL}/#products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export default function ProductPage({ params, searchParams }: ProductPageProps) {
  const lang = getLanguage(searchParams?.lang ?? searchParams?.language);
  const product = getLocalizedProduct(params.slug, lang);

  if (!product) notFound();

  const labels = lang === 'zh'
    ? {
        back: '返回产品目录',
        specifications: '产品规格',
        applications: '适用车型 / 应用',
        requestQuote: '获取报价',
        whatsapp: 'WhatsApp 咨询',
        inquiryNote: '告诉我们型号、数量和目标市场，我们会尽快回复。',
        language: 'English',
      }
    : {
        back: 'Back to Product Catalog',
        specifications: 'Product Specifications',
        applications: 'Compatible Vehicles / Applications',
        requestQuote: 'Request a Quote',
        whatsapp: 'WhatsApp Inquiry',
        inquiryNote: 'Tell us the model, quantity, and target market. Our team will respond shortly.',
        language: '中文',
      };

  const inquiryUrl = `/?product=${encodeURIComponent(product.title)}#contact`;
  const languageUrl = lang === 'zh' ? productUrl(params.slug, 'en') : productUrl(params.slug, 'zh');

  return (
    <main className="product-detail-page">
      <StructuredData product={product} slug={params.slug} lang={lang} />
      <header className="product-detail-nav">
        <a href="/" className="nav-logo" aria-label="HONGSHENG Auto Parts">
          HONG<span>SHENG</span>
        </a>
        <div className="product-detail-nav-actions">
          <a href={languageUrl} className="product-detail-language">{labels.language}</a>
          <a href="/#products" className="product-detail-back">{labels.back}</a>
        </div>
      </header>

      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">{lang === 'zh' ? '首页' : 'Home'}</a>
          <span aria-hidden="true">/</span>
          <a href="/#products">{lang === 'zh' ? '产品' : 'Products'}</a>
          <span aria-hidden="true">/</span>
          <span>{product.title}</span>
        </nav>

        <section className="product-detail-layout">
          <div className="product-detail-media">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-content">
            <div className="section-label">{product.categoryLabel}</div>
            <h1>{product.title}</h1>
            <p className="product-detail-description">{product.description}</p>

            {product.specs.length > 0 && (
              <div className="product-detail-section">
                <h2>{labels.specifications}</h2>
                <dl className="product-detail-specs">
                  {product.specs.map((spec) => (
                    <div key={`${spec.label}-${spec.value}`} className="product-detail-spec">
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {product.applications.length > 0 && (
              <div className="product-detail-section">
                <h2>{labels.applications}</h2>
                <ul className="product-detail-applications">
                  {product.applications.map((application) => <li key={application}>{application}</li>)}
                </ul>
              </div>
            )}

            <div className="product-detail-cta">
              <a href={inquiryUrl} className="btn btn-primary">{labels.requestQuote}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{labels.whatsapp}</a>
            </div>
            <p className="product-detail-inquiry-note">{labels.inquiryNote}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
