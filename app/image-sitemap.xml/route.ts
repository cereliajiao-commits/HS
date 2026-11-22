import { allProductCards } from '@/data/products';

const siteUrl = 'https://www.hsaxle.com';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const entries = allProductCards.map((product) => {
    const pageUrl = `${siteUrl}/product/${encodeURIComponent(product.id)}`;
    const imageUrl = new URL(product.image, siteUrl).toString();
    return `  <url>\n    <loc>${escapeXml(pageUrl)}</loc>\n    <image:image>\n      <image:loc>${escapeXml(imageUrl)}</image:loc>\n      <image:title>${escapeXml(product.title)}</image:title>\n      <image:caption>${escapeXml(product.description)}</image:caption>\n    </image:image>\n  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
