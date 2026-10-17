const SITE_URL = 'https://www.hsaxle.com';

export default function HomeStructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Hengshui Hongsheng Auto Parts Co., Ltd.',
        alternateName: 'HONGSHENG Auto Parts',
        url: SITE_URL,
        foundingDate: '1996',
        description: 'ISO 9001 certified manufacturer of steering, suspension, driveline, chassis, agricultural machinery, and custom forged components.',
        image: `${SITE_URL}/images/company/og-hongsheng-auto-parts.jpg`,
        email: 'chinahs@hotmail.com',
        telephone: '+86 177 5109 7209',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Mapdian Development Zone',
          addressLocality: 'Anping County',
          addressRegion: 'Hebei',
          addressCountry: 'CN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+86 177 5109 7209',
          email: 'chinahs@hotmail.com',
          availableLanguage: ['English', 'Chinese'],
          areaServed: 'Worldwide',
        },
        knowsAbout: [
          'Steering knuckles',
          'Steering arms',
          'Drive shafts',
          'Truck suspension parts',
          'Forged automotive parts',
          'OEM and ODM manufacturing',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'HONGSHENG Auto Parts',
        description: 'Heavy-duty truck steering, suspension and driveline parts manufacturer.',
        inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: 'Truck Steering & Driveline Parts Manufacturer | HONGSHENG',
        description: 'ISO 9001 manufacturer of steering knuckles, steering arms, drive shafts and forged parts for heavy-duty trucks.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/company/og-hongsheng-auto-parts.jpg`,
          width: 1200,
          height: 630,
        },
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: [
          ['Are you a trading company or a factory?', 'We are a manufacturer with our own production lines, machining capability, and quality-control process in Hebei, China.'],
          ['What is your minimum order quantity?', 'Our standard minimum order quantity is 100 pieces per model. We can discuss special requirements for new projects.'],
          ['Can you create my own brand?', 'Yes. We support OEM packaging, product marking, and custom manufacturing based on your drawings or samples.'],
          ['What quality certifications do you have?', 'We operate an ISO 9001 quality system and use inspection equipment including magnetic flaw detection and tensile testing.'],
          ['How long is the delivery time?', 'Typical production lead time is around 40–45 days, depending on the model, quantity, and order schedule.'],
        ].map(([name, text]) => ({
          '@type': 'Question',
          name,
          acceptedAnswer: { '@type': 'Answer', text },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}
