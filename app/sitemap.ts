import type { MetadataRoute } from 'next';
import { allProductCards } from '@/data/products';
import { oemReferences } from '@/data/oemReference.generated';

const siteUrl = 'https://www.hsaxle.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = allProductCards.flatMap((product) => {
    const englishUrl = `${siteUrl}/product/${encodeURIComponent(product.id)}`;
    const chineseUrl = `${englishUrl}?lang=zh`;
    const languages = { en: englishUrl, 'zh-CN': chineseUrl };

    return [{
      url: englishUrl,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages },
    },
    {
      url: chineseUrl,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages },
    }];
  });
  const oemNumbers = Array.from(new Set(Object.values(oemReferences).flatMap((ref) => ref.oemNumbers)));
  const oemUrls = oemNumbers.map((number) => ({ url: `${siteUrl}/oem/${encodeURIComponent(number)}`, changeFrequency: 'monthly' as const, priority: 0.75 }));

  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...productUrls,
    ...oemUrls,
  ];
}
