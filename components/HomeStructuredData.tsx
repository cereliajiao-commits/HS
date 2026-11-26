import { allProductCards } from '@/data/products';
import { oemReferences } from '@/data/oemReference.generated';
import { withOemTitle } from '@/data/productTitles';
import { resolveProductText } from '@/data/productLocalization';
import { translations } from '@/data/translations';
import type { Language } from '@/components/LanguageProvider';
import { languageUrl } from '@/lib/seo';

const SITE_URL = 'https://www.hsaxle.com';

export default function HomeStructuredData({ lang = 'en' }: { lang?: Language }) {
  const pageUrl = languageUrl(SITE_URL, '/', lang);
  const schemaLanguage = lang === 'zh' ? 'zh-CN' : lang;
  const copy = translations[lang];
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Hengshui Hongsheng Auto Parts Co., Ltd.',
        legalName: 'Hengshui Hongsheng Auto Parts Co., Ltd.',
        alternateName: ['HONGSHENG Auto Parts', '衡水宏盛汽车配件有限公司'],
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
          availableLanguage: ['English', 'Chinese', 'Russian', 'Arabic', 'Spanish', 'Portuguese', 'French', 'Japanese', 'Korean', 'German', 'Italian', 'Dutch', 'Turkish', 'Polish', 'Indonesian'],
          areaServed: 'Worldwide',
        },
        knowsAbout: [
          'Steering knuckles',
          'Steering arms',
          'Drive shafts',
          'Truck suspension parts',
          'Forged automotive parts',
          'OEM and ODM manufacturing',
          'SHACMAN truck parts',
          'OEM cross-reference parts',
        ],
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Heavy-Duty Truck and Machinery Parts',
          itemListElement: [
            'Steering knuckles',
            'Steering arms and vertical arms',
            'Drive shafts and long shaft assemblies',
            'Agricultural machinery components',
          ].map((name) => ({ '@type': 'OfferCatalog', name })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: lang === 'zh' ? '衡水宏盛汽车配件有限公司 | HONGSHENG 宏盛汽车配件' : lang === 'en' ? 'Hengshui Hongsheng Auto Parts Co., Ltd. | HONGSHENG Auto Parts' : `HONGSHENG ${copy['hero.title1']} ${copy['hero.titleHighlight']}`,
        description: copy['hero.subtitle'],
        inLanguage: schemaLanguage,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/?q={search_term_string}#products`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#product-catalog`,
        name: lang === 'zh' ? 'HONGSHENG 重型卡车与机械零部件目录' : lang === 'en' ? 'HONGSHENG Heavy-Duty Truck and Machinery Parts Catalog' : `HONGSHENG ${copy['products.title']}`,
        description: copy['products.subtitle'],
        numberOfItems: allProductCards.length,
        itemListElement: allProductCards.map((product, index) => {
          const oem = oemReferences[product.id];
          return {
            '@type': 'ListItem',
            position: index + 1,
            url: languageUrl(SITE_URL, `/product/${encodeURIComponent(product.id)}`, lang),
            item: {
              '@type': 'WebPage',
              '@id': `${languageUrl(SITE_URL, `/product/${encodeURIComponent(product.id)}`, lang)}#webpage`,
              name: withOemTitle(resolveProductText(product.id, product.category, lang)?.title ?? product.title, product.id, lang),
              image: `${SITE_URL}${product.image}`,
              description: resolveProductText(product.id, product.category, lang)?.description ?? product.description,
              about: { '@type': 'Thing', name: resolveProductText(product.id, product.category, lang)?.categoryLabel ?? product.category },
              category: resolveProductText(product.id, product.category, lang)?.categoryLabel ?? product.category,
              ...(oem?.oemNumbers[0] ? { identifier: oem.oemNumbers[0] } : { identifier: product.id }),
            },
          };
        }),
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: lang === 'zh' ? '衡水宏盛汽车配件有限公司｜HONGSHENG重卡零部件制造商' : lang === 'en' ? 'Hengshui Hongsheng Auto Parts Co., Ltd. | HONGSHENG Truck Parts Manufacturer' : `HONGSHENG ${copy['hero.title1']} ${copy['hero.titleHighlight']}`,
        description: copy['hero.subtitle'],
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/company/og-hongsheng-auto-parts.jpg`,
          width: 1200,
          height: 630,
        },
        inLanguage: schemaLanguage,
      },
      ...[
        ['Company Profile', `${SITE_URL}/company`],
        ['Factory Capabilities', `${SITE_URL}/factory`],
        ['OEM / ODM', `${SITE_URL}/oem-odm`],
        ['Products', `${SITE_URL}/products`],
        ['Contact Us', `${SITE_URL}/contact`],
      ].map(([name, url]) => ({ '@type': 'SiteNavigationElement', name, url })),
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: [
          [copy['faq.company'], copy['faq.companyAnswer']],
          [copy['faq.moq'], copy['faq.moqAnswer']],
          [copy['faq.brand'], copy['faq.brandAnswer']],
          [copy['faq.quality'], copy['faq.qualityAnswer']],
          [copy['faq.delivery'], copy['faq.deliveryAnswer']],
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
