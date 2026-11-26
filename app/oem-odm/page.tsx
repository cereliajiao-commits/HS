import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.hsaxle.com';
const title = 'OEM and ODM Truck Parts Manufacturing | HONGSHENG';
const description = 'HONGSHENG supports OEM and ODM truck parts projects with forged components, product marking, custom packaging and fitment review.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/oem-odm` },
  openGraph: { type: 'website', url: `${SITE_URL}/oem-odm`, title, description, siteName: 'HONGSHENG Auto Parts' },
};

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${SITE_URL}/oem-odm#webpage`, url: `${SITE_URL}/oem-odm`, name: title, description, inLanguage: 'en', isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': `${SITE_URL}/#organization` } },
    { '@type': 'Service', '@id': `${SITE_URL}/oem-odm#service`, name: 'OEM and ODM truck parts manufacturing', provider: { '@id': `${SITE_URL}/#organization` }, serviceType: 'OEM/ODM manufacturing for heavy-duty truck and agricultural machinery parts', areaServed: 'Worldwide', description },
  ],
};

export default function OemOdmPage() {
  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>OEM and ODM</span></nav>
        <p className="section-label">OEM / ODM MANUFACTURING</p>
        <h1>Custom Truck Parts for OEM and Aftermarket Programs</h1>
        <p className="category-page-intro">{description} Send an OEM/OE number, drawing, sample or product photo so our team can review the application and confirm the next step.</p>
        <div className="category-directory-grid">
          <section className="category-directory-card"><h2>OEM/OE Reference Matching</h2><p>Use the product catalog to search steering arms, steering knuckles, tie rods, torque rods, drive shafts and other parts by reference number.</p></section>
          <section className="category-directory-card"><h2>Custom Manufacturing</h2><p>We can review drawings or samples for forged and machined truck, agricultural machinery and construction equipment components.</p></section>
          <section className="category-directory-card"><h2>Marking and Packaging</h2><p>OEM/ODM projects can include product marking, export packaging and repeat-order handling for international buyers.</p></section>
        </div>
        <section className="category-faq" aria-labelledby="oem-faq-title"><p className="section-label">PROJECT WORKFLOW</p><h2 id="oem-faq-title">OEM and ODM inquiry questions</h2><details open><summary>What information should I send for a fitment review?</summary><p>Please provide the OEM/OE number, vehicle brand and model, axle or bridge type, left/right position, quantity, destination market and a product photo or drawing when available.</p></details><details><summary>Can HONGSHENG manufacture from a drawing or sample?</summary><p>Yes. HONGSHENG supports OEM/ODM development, product marking and custom packaging. Final fitment, material, MOQ and lead time should be confirmed with the sales team.</p></details><details><summary>How do I browse existing truck parts?</summary><p>Start with the catalog or a category page, then open the product detail page to review the OEM/OE reference, application and image.</p></details></section>
        <div className="category-page-cta"><Link className="btn btn-primary" href="/products">Browse Product Catalog</Link><Link className="btn btn-outline" href="/contact">Start an OEM Inquiry</Link></div>
      </div>
    </main>
  );
}
