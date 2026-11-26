import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.hsaxle.com';
const title = 'Contact HONGSHENG Auto Parts | Truck Parts Supplier';
const description = 'Contact Hengshui Hongsheng Auto Parts for truck steering, suspension, driveline, agricultural machinery and OEM/ODM parts inquiries.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: { type: 'website', url: `${SITE_URL}/contact`, title, description, siteName: 'HONGSHENG Auto Parts' },
};

const graph = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contactpage`,
  url: `${SITE_URL}/contact`,
  name: title,
  description,
  inLanguage: 'en',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: { '@id': `${SITE_URL}/#organization` },
};

export default function ContactPage() {
  return (
    <main className="category-page oem-reference-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav>
        <p className="section-label">CONTACT HONGSHENG</p>
        <h1>Talk to a Truck Parts Manufacturer</h1>
        <p className="category-page-intro">{description} Tell us the OEM/OE number, vehicle application, quantity and destination market so we can route your inquiry to the right product or manufacturing team.</p>
        <div className="category-directory-grid">
          <section className="category-directory-card"><h2>Email</h2><p>Send product references, drawings, photos and order requirements to our sales team.</p><a href="mailto:chinahs@hotmail.com">chinahs@hotmail.com</a></section>
          <section className="category-directory-card"><h2>WhatsApp</h2><p>For a quick fitment or quotation discussion, contact the international sales team.</p><a href="https://wa.me/8617751097209" target="_blank" rel="noopener noreferrer">+86 177 5109 7209</a></section>
          <section className="category-directory-card"><h2>Factory Location</h2><p>Hengshui Hongsheng Auto Parts is located in Anping County, Hebei, China.</p><span>Mapdian Development Zone, Hebei, China</span></section>
        </div>
        <section className="category-faq" aria-labelledby="contact-faq-title"><p className="section-label">BEFORE YOU CONTACT US</p><h2 id="contact-faq-title">Information to include in an inquiry</h2><details open><summary>What should I include in a quotation request?</summary><p>Include the product name or OEM/OE number, vehicle brand and model, axle type, left/right position, quantity, destination country and any photo or drawing available.</p></details><details><summary>Can I request a custom truck part?</summary><p>Yes. Use the OEM/ODM page or contact the team with a drawing, sample and expected annual or order quantity.</p></details></section>
        <div className="category-page-cta"><Link className="btn btn-primary" href="/#contact">Open Online Inquiry Form</Link><Link className="btn btn-outline" href="/products">Browse Products</Link></div>
      </div>
    </main>
  );
}
