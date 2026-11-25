import { allProductCards } from '@/data/products';
import { oemReferences } from '@/data/oemReference.generated';

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
    const oem = oemReferences[product.id]?.oemNumbers ?? [];
    const application = oemReferences[product.id]?.vehicleApplication;
    const caption = [
      product.description,
      oem.length ? `OEM/OE reference: ${oem.join(', ')}` : '',
      application ? `Vehicle application: ${application}.` : '',
    ].filter(Boolean).join(' ');

    return [
      '  <url>',
      `    <loc>${escapeXml(pageUrl)}</loc>`,
      '    <image:image>',
      `      <image:loc>${escapeXml(imageUrl)}</image:loc>`,
      `      <image:title>${escapeXml(product.title)}</image:title>`,
      `      <image:caption>${escapeXml(caption)}</image:caption>`,
      '    </image:image>',
      '  </url>',
    ].join('\n');
  }).join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    entries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
