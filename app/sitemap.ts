import type { MetadataRoute } from 'next';
import { allProductCards } from '@/data/products';

const siteUrl = 'https://www.hsaxle.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = allProductCards.flatMap((product) => [
    {
      url: `${siteUrl}/product/${encodeURIComponent(product.id)}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/product/${encodeURIComponent(product.id)}?lang=zh`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);

  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...productUrls,
  ];
}
