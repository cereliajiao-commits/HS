import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.hsaxle.com';
const title = 'Why Choose Hengshui Hongsheng Auto Parts | HONGSHENG';
const description = 'Why buyers choose Hengshui Hongsheng Auto Parts for heavy-duty truck steering, suspension, driveline and forged components: manufacturing capacity, quality control, OEM support and export service.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/advantages` },
  openGraph: { type: 'website', url: `${SITE_URL}/advantages`, title, description, siteName: 'HONGSHENG Auto Parts' },
};

const advantages = [
  ['Advanced manufacturing', 'Ten friction press forging lines, three extrusion lines, CNC machining centers, precision grinding and heat-treatment capability support repeat production.'],
  ['Quality control', 'Inspection includes controlled dimensions, magnetic flaw detection, metallographic analysis and tensile testing, supported by an ISO 9001 quality system.'],
  ['Complete truck parts range', 'The catalog covers steering knuckles, steering arms, vertical arms, tie rods, torque rods, drive shafts, suspension parts and related chassis components.'],
  ['OEM and ODM support', 'Buyers can send OEM/OE numbers, drawings, samples, vehicle applications and packaging requirements for cross-reference or custom development.'],
  ['Long-term manufacturing experience', 'Hengshui Hongsheng Auto Parts has manufactured precision components for heavy-duty vehicles, agricultural machinery and construction equipment since 1996.'],
  ['Export-ready service', 'Production, inspection, warehousing and reinforced export packaging are organized to support international repeat orders and mixed-model shipments.'],
];

const graph = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/advantages#webpage`,
  url: `${SITE_URL}/advantages`,
  name: title,
  description,
  inLanguage: 'en',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Hengshui Hongsheng Auto Parts advantages',
    itemListElement: advantages.map(([name, text], index) => ({ '@type': 'ListItem', position: index + 1, name, description: text })),
  },
};

export default function AdvantagesPage() {
  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Why HONGSHENG</span></nav>
        <p className="section-label">WHY HONGSHENG</p>
        <h1>Why choose Hengshui Hongsheng Auto Parts?</h1>
        <p className="category-page-intro">{description} This page explains the manufacturing, quality and export capabilities behind the HONGSHENG truck parts catalog.</p>
        <div className="category-directory-grid">
          {advantages.map(([heading, text]) => <article className="category-directory-card" key={heading}><h2>{heading}</h2><p>{text}</p></article>)}
        </div>
        <div className="category-page-cta"><Link className="btn btn-primary" href="/products">Browse Truck Parts</Link><Link className="btn btn-outline" href="/contact">Contact Us</Link></div>
      </div>
    </main>
  );
}
