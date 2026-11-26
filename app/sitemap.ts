import type { MetadataRoute } from 'next';
import { allProductCards } from '@/data/products';
import { oemReferences } from '@/data/oemReference.generated';
import { categoryPages } from '@/data/categoryPages';
import { languageAlternates, languageUrl, supportedLanguages } from '@/lib/seo';

const siteUrl = 'https://www.hsaxle.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = allProductCards.flatMap((product) => {
    const path = `/product/${encodeURIComponent(product.id)}`;
    const languages = languageAlternates(siteUrl, path);
    return supportedLanguages.map((lang) => ({
      url: languageUrl(siteUrl, path, lang),
      changeFrequency: 'monthly' as const,
      priority: lang === 'en' ? 0.8 : 0.7,
      alternates: { languages },
    }));
  });
  const oemNumbers = Array.from(new Set(Object.values(oemReferences).flatMap((ref) => ref.oemNumbers)));
  const oemUrls = oemNumbers.map((number) => ({ url: `${siteUrl}/oem/${encodeURIComponent(number)}`, changeFrequency: 'monthly' as const, priority: 0.75 }));
  const catalogPaths = ['/products', '/category', ...categoryPages.map((page) => `/category/${page.slug}`)];
  const categoryUrls = catalogPaths.flatMap((path) => {
    const languages = languageAlternates(siteUrl, path);
    return supportedLanguages.map((lang) => ({
      url: languageUrl(siteUrl, path, lang),
      changeFrequency: 'weekly' as const,
      priority: path === '/products' || path === '/category' ? 0.9 : 0.85,
      alternates: { languages },
    }));
  });

  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: languageAlternates(siteUrl, '/') },
    },
    {
      url: `${siteUrl}/company`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...['/factory', '/oem-odm', '/advantages', '/contact'].map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...productUrls,
    ...oemUrls,
    ...categoryUrls,
  ];
}
