import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.hsaxle.com';
const title = 'Factory Capabilities | Hengshui Hongsheng Auto Parts';
const description = 'Explore the HONGSHENG factory workflow for heavy-duty truck parts: forging, extrusion, CNC machining, inspection, warehousing and export packaging.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/factory` },
  openGraph: { type: 'website', url: `${SITE_URL}/factory`, title, description, siteName: 'HONGSHENG Auto Parts' },
};

const graph = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/factory#webpage`,
  url: `${SITE_URL}/factory`,
  name: title,
  description,
  inLanguage: 'en',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}/images/company/factory-entrance.jpg` },
};

const process = [
  ['Production capacity for repeat orders', 'Dedicated equipment and organized in-process handling support volume orders across truck, agricultural and construction machinery product families.', '/images/company/production-workshop.jpg?v=20261016-2'],
  ['Precision machining', 'Controlled CNC turning and grinding help maintain critical geometry, surface finish and reliable fitment.', '/images/company/precision-machining.jpg'],
  ['Dimensional inspection', 'Critical dimensions and functional features are checked before products move to packing and shipment.', '/images/company/quality-inspection.jpg'],
  ['Warehouse and order control', 'Products are organized by model and order stage to support repeat purchasing and mixed-model orders.', '/images/company/warehouse.jpg?v=20261016-2'],
  ['Export-ready packaging', 'Heavy components are packed in reinforced wooden cases to reduce movement and damage during international transport.', '/images/company/export-packaging.jpg?v=20261016-2'],
];

export default function FactoryPage() {
  return (
    <main className="factory-section standalone-factory-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Factory Capabilities</span></nav>
        <div className="factory-header">
          <div className="factory-header-title"><div className="section-label">INSIDE HONGSHENG</div><h1 className="section-title">From Production Floor to Export-Ready Parts</h1></div>
          <p>{description} Repeat-order buyers can review the process before requesting a quotation.</p>
        </div>
        <div className="factory-gate"><img src="/images/company/factory-entrance.jpg" alt="Entrance of Hengshui Hongsheng Auto Parts factory" fetchPriority="high" /></div>
        <div className="factory-stats">
          {[[ '1996', 'Manufacturing since' ], [ '10', 'Production lines' ], [ '3', 'Extrusion lines' ], [ 'CNC', 'Precision machining' ], [ 'ISO 9001', 'Quality system' ]].map(([value, label]) => <div className="factory-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <div className="factory-process-grid">
          {process.map(([heading, text, image], index) => <article className={`factory-process-card${index === 0 ? ' factory-process-card--wide' : ''}`} key={heading}><div className={`factory-process-image factory-process-image--${index + 1}`}><img src={image} alt={heading} loading={index === 0 ? 'eager' : 'lazy'} /></div><div className="factory-process-copy"><span>{String(index + 1).padStart(2, '0')}</span><h2>{heading}</h2><p>{text}</p></div></article>)}
        </div>
        <div className="factory-buyer-bar"><strong>What international buyers can expect</strong><div><span>Consistent fit and dimensions</span><span>Clear production communication</span><span>Protected international delivery</span></div></div>
        <div className="category-page-cta"><Link className="btn btn-primary" href="/products">Browse Truck Parts Catalog</Link><Link className="btn btn-outline" href="/contact">Contact HONGSHENG</Link></div>
      </div>
    </main>
  );
}
