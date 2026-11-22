import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProductCards } from '@/data/products';
import { oemReferences } from '@/data/oemReference.generated';
import { withOemTitle } from '@/data/productTitles';

const SITE_URL = 'https://www.hsaxle.com';
const refs = Object.values(oemReferences);

function getReference(number: string) {
  const normalized = decodeURIComponent(number).toLowerCase();
  return refs.find((ref) => ref.oemNumbers.some((value) => value.toLowerCase() === normalized));
}

export function generateStaticParams() {
  return Array.from(new Set(refs.flatMap((ref) => ref.oemNumbers)))
    .map((number) => ({ number: encodeURIComponent(number) }));
}

export async function generateMetadata({ params }: { params: { number: string } }): Promise<Metadata> {
  const number = decodeURIComponent(params.number);
  const ref = getReference(number);
  if (!ref) return { title: 'OEM reference not found', robots: { index: false, follow: false } };
  const product = allProductCards.find((card) => card.id === ref.productId);
  const productTitle = product ? withOemTitle(product.title, product.id, 'en') : 'HONGSHENG Auto Parts product';
  return {
    title: { absolute: `${number} OEM Replacement Part | HONGSHENG Auto Parts` },
    description: `${number} OEM/OE reference for ${productTitle}. Compatible application: ${ref.vehicleApplication}. Request a quote from HONGSHENG Auto Parts.`,
    keywords: [number, productTitle, ref.vehicleApplication, 'OEM replacement part', 'truck parts supplier'],
    alternates: { canonical: `${SITE_URL}/oem/${encodeURIComponent(number)}` },
    openGraph: { type: 'website', title: `${number} OEM Replacement Part`, description: `${productTitle}. Compatible application: ${ref.vehicleApplication}.`, url: `${SITE_URL}/oem/${encodeURIComponent(number)}`, images: product ? [{ url: `${SITE_URL}${product.image}`, alt: `${number} ${productTitle}` }] : undefined },
    twitter: { card: 'summary_large_image', title: `${number} OEM Replacement Part`, description: `${productTitle}. Compatible application: ${ref.vehicleApplication}.`, images: product ? [`${SITE_URL}${product.image}`] : undefined },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function OemReferencePage({ params }: { params: { number: string } }) {
  const number = decodeURIComponent(params.number);
  const ref = getReference(number);
  if (!ref) notFound();
  const product = allProductCards.find((card) => card.id === ref.productId);
  if (!product) notFound();
  const title = withOemTitle(product.title, product.id, 'en');
  const productUrl = `${SITE_URL}/product/${encodeURIComponent(product.id)}`;
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: title,
    description: `${title}. Compatible application: ${ref.vehicleApplication}. OEM/OE reference: ${ref.oemNumbers.join(', ')}.`,
    image: `${SITE_URL}${product.image}`,
    sku: product.id,
    mpn: number,
    category: product.category,
    brand: { '@type': 'Brand', name: 'HONGSHENG' },
    manufacturer: { '@type': 'Organization', name: 'Hengshui Hongsheng Auto Parts Co., Ltd.', url: SITE_URL },
    url: productUrl,
    mainEntityOfPage: `${SITE_URL}/oem/${encodeURIComponent(number)}`,
    additionalProperty: [{ '@type': 'PropertyValue', name: 'Vehicle application', value: ref.vehicleApplication }, { '@type': 'PropertyValue', name: 'OEM / OE reference numbers', value: ref.oemNumbers.join(', ') }],
  };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/#products` }, { '@type': 'ListItem', position: 3, name: `${number} OEM Replacement Part`, item: `${SITE_URL}/oem/${encodeURIComponent(number)}` }] };
  return <main className="oem-reference-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><div className="container"><nav className="product-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#products">Products</a><span>/</span><span>{number}</span></nav><p className="section-label">OEM / OE CROSS REFERENCE</p><h1>{number} OEM Replacement Part</h1><p className="oem-reference-lead">HONGSHENG Auto Parts product reference for OEM/OE number <strong>{number}</strong>.</p><section className="oem-reference-card"><img src={product.image} alt={`${number} ${title}`} width="420" height="420" /><div><h2>{title}</h2><p>Compatible application: {ref.vehicleApplication}</p><p>Reference number: <strong>{ref.oemNumbers.join(', ')}</strong></p><a className="btn btn-primary" href={productUrl}>View product details</a></div></section></div></main>;
}
