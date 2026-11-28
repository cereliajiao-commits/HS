import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.hsaxle.com';
const COMPANY_NAME = 'Hengshui Hongsheng Auto Parts Co., Ltd.';
const SEARCH_NAME = 'Hengshui Hongsheng Auto Parts';
const ALTERNATE_COMPANY_NAME = 'Hengshui Hongsheng Automobile & Agricultural Parts Co., Ltd.';
const DESCRIPTION =
  'Hengshui Hongsheng Auto Parts is a China-based manufacturer of heavy-duty truck steering, suspension and driveline parts, agricultural machinery components and OEM/ODM forged parts.';

export const metadata: Metadata = {
  title: { absolute: 'Hengshui Hongsheng Auto Parts | Company Profile' },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/company` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/company`,
    title: 'Hengshui Hongsheng Auto Parts | Company Profile',
    description: DESCRIPTION,
    siteName: 'HONGSHENG Auto Parts',
    images: [{
      url: `${SITE_URL}/images/company/og-hongsheng-auto-parts.jpg`,
      width: 1200,
      height: 630,
      alt: 'HONGSHENG Auto Parts manufacturing company profile',
    }],
  },
};

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SEARCH_NAME,
      legalName: COMPANY_NAME,
      alternateName: [SEARCH_NAME, ALTERNATE_COMPANY_NAME, 'HONGSHENG Auto Parts', '衡水宏盛汽车配件有限公司'],
      sameAs: [
        'https://www.facebook.com/61594699907767/',
        'https://www.aliexpress.com/store/1102826464',
        'https://www.tiktok.com/@apple.user4449820',
      ],
      founder: {
        '@type': 'Person',
        name: 'Zoey Deng',
        url: 'https://cn.linkedin.com/in/zoey-deng-4763b4381',
        worksFor: { '@id': `${SITE_URL}/#organization` },
      },
      url: SITE_URL,
      logo: `${SITE_URL}/images/company/og-hongsheng-auto-parts.jpg`,
      image: `${SITE_URL}/images/company/factory-entrance.jpg`,
      foundingDate: '1996',
      description: DESCRIPTION,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Anping County',
        addressRegion: 'Hebei',
        addressCountry: 'CN',
      },
      knowsAbout: [
        'heavy-duty truck parts',
        'truck steering arms',
        'steering knuckles',
        'drive shafts',
        'torque rods',
        'OEM and ODM manufacturing',
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/company#aboutpage`,
      url: `${SITE_URL}/company`,
      name: 'Hengshui Hongsheng Auto Parts | Company Profile',
      description: DESCRIPTION,
      inLanguage: 'en',
      about: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: { '@id': `${SITE_URL}/company#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/company#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Company Profile', item: `${SITE_URL}/company` },
      ],
    },
  ],
};

export default function CompanyPage() {
  return (
    <main className="category-page oem-reference-page company-profile-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><span>Company Profile</span>
        </nav>
        <p className="section-label">HONGSHENG AUTO PARTS</p>
        <h1>{SEARCH_NAME}</h1>
        <p className="category-page-intro">
          HONGSHENG Auto Parts is the international brand of {COMPANY_NAME}, also described online as {ALTERNATE_COMPANY_NAME}. We are a China-based manufacturer serving heavy-duty truck, agricultural machinery and construction equipment markets since 1996.
        </p>

        <div className="category-directory-grid">
          <section className="category-directory-card">
            <h2>Heavy-Duty Truck Parts Manufacturer</h2>
            <p>We manufacture steering arms, vertical arms, steering knuckles, tie rods, torque rods, drive shafts, differentials and related chassis components.</p>
          </section>
          <section className="category-directory-card">
            <h2>OEM and ODM Supply</h2>
            <p>Buyers can match products by OEM/OE number, vehicle application, axle type, mounting pattern and left or right position.</p>
          </section>
          <section className="category-directory-card">
            <h2>Factory and Quality</h2>
            <p>Our production capability includes forging, extrusion, CNC machining, grinding, heat treatment and inspection for repeat orders.</p>
          </section>
        </div>

        <section className="category-faq" aria-labelledby="company-faq-title">
          <p className="section-label">COMPANY INFORMATION</p>
          <h2 id="company-faq-title">About Hengshui Hongsheng Auto Parts</h2>
          <details open>
            <summary>What is the official English company name?</summary>
            <p>The official English company name is {COMPANY_NAME}. Some supplier and social profiles use the equivalent name {ALTERNATE_COMPANY_NAME}. HONGSHENG Auto Parts is the company brand used for international product and manufacturing inquiries.</p>
          </details>
          <details>
            <summary>What products does HONGSHENG manufacture?</summary>
            <p>HONGSHENG manufactures heavy-duty truck steering, suspension, driveline and chassis parts, plus agricultural machinery components and custom forged parts.</p>
          </details>
          <details>
            <summary>How can buyers verify a product?</summary>
            <p>Use the OEM/OE reference, vehicle brand and model, axle or bridge type, mounting dimensions and product photos. OEM numbers are reference information and fitment should be confirmed before ordering.</p>
          </details>
        </section>

        <section className="category-directory-grid" aria-labelledby="official-profiles-title">
          <section className="category-directory-card">
            <h2 id="official-profiles-title">Official HONGSHENG Auto Parts Profiles</h2>
            <p>These profiles refer to the same Hengshui Hongsheng Auto Parts manufacturer and support product, OEM and export inquiries.</p>
            <p><a href="https://www.facebook.com/61594699907767/" target="_blank" rel="noopener noreferrer">Facebook: Hengshui Hongsheng Auto Parts</a></p>
            <p><a href="https://cn.linkedin.com/in/zoey-deng-4763b4381" target="_blank" rel="noopener noreferrer">LinkedIn: Zoey Deng</a></p>
            <p><a href="https://www.aliexpress.com/store/1102826464" target="_blank" rel="noopener noreferrer">AliExpress: Hongsheng Auto Parts Store</a></p>
            <p><a href="https://www.tiktok.com/@apple.user4449820" target="_blank" rel="noopener noreferrer">TikTok: HS AUTO PARTS</a></p>
          </section>
        </section>

        <div className="category-directory-grid">
          <Link className="category-directory-card" href="/factory"><h2>Factory Capabilities</h2><p>Review forging, CNC machining, inspection, warehouse and export packaging capabilities.</p><span>View factory page →</span></Link>
          <Link className="category-directory-card" href="/oem-odm"><h2>OEM / ODM Manufacturing</h2><p>Learn how to send OEM/OE numbers, drawings, samples and packaging requirements.</p><span>View OEM / ODM page →</span></Link>
          <Link className="category-directory-card" href="/contact"><h2>Contact Us</h2><p>Send product references, vehicle applications, quantities and destination requirements.</p><span>Contact sales →</span></Link>
        </div>

        <div className="category-page-cta">
          <Link className="btn btn-primary" href="/products">Browse Truck Parts Catalog</Link>
          <Link className="btn btn-outline" href="/#contact">Request a Quote</Link>
        </div>
      </div>
    </main>
  );
}
