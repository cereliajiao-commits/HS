import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HONGSHENG Auto Parts',
    short_name: 'HONGSHENG',
    description:
      'Heavy-duty truck, agricultural machinery, construction equipment, driveline, chassis, and custom components.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#0d1117',
    lang: 'en',
    dir: 'ltr',
  };
}
