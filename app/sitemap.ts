import type { MetadataRoute } from 'next';
import { allProductCards } from '@/data/products';

const siteUrl = 'https://www.hsaxle.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const productUrls = allProductCards.flatMap((product) => {
    const englishUrl = `${siteUrl}/product/${encodeURIComponent(product.id)}`;
    const chineseUrl = `${englishUrl}?lang=zh`;
    const languages = { en: englishUrl, 'zh-CN': chineseUrl };

    return [{
      url: englishUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: { languages },
    },
    {
      url: chineseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: { languages },
    }];
  });

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...productUrls,
  ];
}
