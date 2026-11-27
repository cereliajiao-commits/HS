import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProductCards } from '@/data/products';
import { oemReferences } from '@/data/oemReference.generated';
import { displayOemNumber, withOemTitle } from '@/data/productTitles';

const SITE_URL = 'https://www.hsaxle.com';
const refs = Object.values(oemReferences);

function getReference(number: string) {
  const normalized = decodeURIComponent(number).toLowerCase();
  return refs.find((ref) => ref.oemNumbers.some((value) => value.toLowerCase() === normalized));
}

function isIndexableReference(ref: (typeof refs)[number] | undefined) {
  return Boolean(ref?.oemNumbers.length && (ref.confidence === '高' || ref.confidence === '中'));
}

export function generateStaticParams() {
  return Array.from(new Set(refs.flatMap((ref) => ref.oemNumbers)))
    .map((number) => ({ number: encodeURIComponent(number) }));
}

export async function generateMetadata({ params }: { params: { number: string } }): Promise<Metadata> {
  const number = decodeURIComponent(params.number);
  const ref = getReference(number);
  if (!ref) return { title: 'OEM reference not found', robots: { index: false, follow: false } };
  const displayNumber = displayOemNumber(number, 'en');
  const product = allProductCards.find((card) => card.id === ref.productId);
  const displayApplication = /[\u3400-\u9fff]/.test(ref.vehicleApplication)
    ? 'Compatible truck or machinery application'
    : ref.vehicleApplication;
  const productTitle = product ? withOemTitle(product.title, product.id, 'en') : 'HONGSHENG Auto Parts product';
  const indexable = isIndexableReference(ref);
  return {
    title: { absolute: `${displayNumber} ${productTitle} | OEM Replacement Part | HONGSHENG Auto Parts` },
    description: `${displayNumber} OEM/OE reference for ${productTitle}. Compatible application: ${displayApplication}. Verify the vehicle, axle and mounting details before ordering from HONGSHENG Auto Parts.`,
    keywords: [displayNumber, productTitle, displayApplication, 'OEM replacement part', 'truck parts supplier'],
    alternates: { canonical: `${SITE_URL}/oem/${encodeURIComponent(number)}` },
    openGraph: { type: 'website', title: `${displayNumber} OEM Replacement Part`, description: `${productTitle}. Compatible application: ${displayApplication}.`, url: `${SITE_URL}/oem/${encodeURIComponent(number)}`, images: product ? [{ url: `${SITE_URL}${product.image}`, alt: `${displayNumber} ${productTitle}` }] : undefined },
    twitter: { card: 'summary_large_image', title: `${displayNumber} OEM Replacement Part`, description: `${productTitle}. Compatible application: ${displayApplication}.`, images: product ? [`${SITE_URL}${product.image}`] : undefined },
    robots: { index: indexable, follow: true, googleBot: { index: indexable, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function OemReferencePage({ params }: { params: { number: string } }) {
  const number = decodeURIComponent(params.number);
  const ref = getReference(number);
  if (!ref) notFound();
  const displayNumber = displayOemNumber(number, 'en');
  const product = allProductCards.find((card) => card.id === ref.productId);
  if (!product) notFound();
  const displayApplication = /[\u3400-\u9fff]/.test(ref.vehicleApplication)
    ? 'Compatible truck or machinery application'
    : ref.vehicleApplication;
  const title = withOemTitle(product.title, product.id, 'en');
  const productUrl = `${SITE_URL}/product/${encodeURIComponent(product.id)}`;
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/oem/${encodeURIComponent(number)}#webpage`,
    name: title,
    description: `${title}. Compatible application: ${displayApplication}. OEM/OE reference: ${ref.oemNumbers.map((value) => displayOemNumber(value, 'en')).join(', ')}.`,
    primaryImageOfPage: `${SITE_URL}${product.image}`,
    about: {
      '@type': 'Thing',
      name: title,
      identifier: number,
      category: product.category,
    },
    url: `${SITE_URL}/oem/${encodeURIComponent(number)}`,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    additionalProperty: [{ '@type': 'PropertyValue', name: 'Vehicle application', value: displayApplication }, { '@type': 'PropertyValue', name: 'OEM / OE reference numbers', value: ref.oemNumbers.map((value) => displayOemNumber(value, 'en')).join(', ') }],
  };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/#products` }, { '@type': 'ListItem', position: 3, name: `${number} OEM Replacement Part`, item: `${SITE_URL}/oem/${encodeURIComponent(number)}` }] };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `What does OEM ${displayNumber} match?`, acceptedAnswer: { '@type': 'Answer', text: `${displayNumber} is listed as an OEM/OE reference for ${title}. The application shown on this page is ${displayApplication}. Confirm the vehicle, axle and dimensions before ordering.` } },
      { '@type': 'Question', name: `How do I verify ${displayNumber} fitment?`, acceptedAnswer: { '@type': 'Answer', text: `Compare the OEM number with the old part, vehicle model, axle or bridge type, left/right position, hole spacing and spline details. Send photos and measurements to HONGSHENG Auto Parts if any detail is uncertain.` } },
    ],
  };
  return <main className="oem-reference-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><div className="container"><nav className="product-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#products">Products</a><span>/</span><span>{displayNumber}</span></nav><p className="section-label">OEM / OE CROSS REFERENCE</p><h1>{displayNumber} {title}</h1><p className="oem-reference-lead">Hengshui Hongsheng Auto Parts cross-reference page for OEM/OE number <strong>{displayNumber}</strong>. Use the application and fitment checks below before ordering.</p><section className="oem-reference-card"><img src={product.image} alt={`${displayNumber} ${title}`} width="420" height="420" /><div><h2>{title}</h2><p>Compatible application: {displayApplication}</p><p>Reference number: <strong>{ref.oemNumbers.map((value) => displayOemNumber(value, 'en')).join(', ')}</strong></p><a className="btn btn-primary" href={productUrl}>View product details</a></div></section><section className="category-faq oem-fitment-checks"><p className="section-label">FITMENT CHECK</p><h2>Before ordering OEM {displayNumber}</h2><ul><li>Match the OEM/OE number with the old part or supplier reference.</li><li>Confirm vehicle model, axle or bridge type, left/right position and mounting dimensions.</li><li>Send a photo, drawing or measurements to HONGSHENG when the configuration is uncertain.</li></ul></section></div></main>;
}
