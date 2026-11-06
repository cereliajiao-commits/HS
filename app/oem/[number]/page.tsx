import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProductCards } from '@/data/products';
import { oemReferences } from '@/data/oemReference.generated';

const SITE_URL = 'https://www.hsaxle.com';
const refs = Object.values(oemReferences);

function getReference(number: string) {
  const normalized = decodeURIComponent(number).toLowerCase();
  return refs.find((ref) => ref.oemNumbers.some((value) => value.toLowerCase() === normalized));
}

export function generateStaticParams() {
  return refs.flatMap((ref) => ref.oemNumbers.map((number) => ({ number: encodeURIComponent(number) })));
}

export async function generateMetadata({ params }: { params: { number: string } }): Promise<Metadata> {
  const ref = getReference(params.number);
  if (!ref) return { title: 'OEM reference not found', robots: { index: false, follow: false } };
  return { title: `${params.number} OEM Replacement Part | HONGSHENG Auto Parts`, description: `${params.number} OEM/OE reference for ${ref.vehicleApplication}. Find the compatible HONGSHENG Auto Parts product and request a quote.`, alternates: { canonical: `${SITE_URL}/oem/${encodeURIComponent(params.number)}` }, robots: { index: true, follow: true } };
}

export default function OemReferencePage({ params }: { params: { number: string } }) {
  const ref = getReference(params.number);
  if (!ref) notFound();
  const product = allProductCards.find((card) => card.id === ref.productId);
  if (!product) notFound();
  const graph = { '@context': 'https://schema.org', '@type': 'Product', name: product.title, sku: product.id, mpn: params.number, brand: { '@type': 'Brand', name: 'HONGSHENG' }, manufacturer: { '@type': 'Organization', name: 'Hengshui Hongsheng Auto Parts Co., Ltd.', url: SITE_URL }, url: `${SITE_URL}/product/${encodeURIComponent(product.id)}` };
  return <main className="oem-reference-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} /><div className="container"><nav className="product-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#products">Products</a><span>/</span><span>{params.number}</span></nav><p className="section-label">OEM / OE CROSS REFERENCE</p><h1>{params.number} OEM Replacement Part</h1><p className="oem-reference-lead">HONGSHENG Auto Parts product reference for OEM/OE number <strong>{params.number}</strong>.</p><section className="oem-reference-card"><img src={product.image} alt={`${params.number} ${product.title}`} width="420" height="420" /><div><h2>{product.title}</h2><p>Compatible application: {ref.vehicleApplication}</p><p>Reference number: <strong>{ref.oemNumbers.join(', ')}</strong></p><a className="btn btn-primary" href={`/product/${encodeURIComponent(product.id)}`}>View product details</a></div></section></div></main>;
}
