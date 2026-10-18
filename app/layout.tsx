import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieConsent from '@/components/CookieConsent';

const siteUrl = 'https://www.hsaxle.com';
const siteName = 'HONGSHENG Auto Parts';
const siteTitle = 'Truck Steering & Driveline Parts Manufacturer | HONGSHENG';
const siteDescription =
  'Hengshui Hongsheng Auto Parts Co., Ltd. (衡水宏盛汽车配件有限公司) is an ISO 9001 manufacturer of steering knuckles, steering arms, drive shafts and forged parts for heavy-duty trucks. OEM/ODM support. Request a quote.';
const socialImage = '/images/company/og-hongsheng-auto-parts.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  category: 'Automotive',
  creator: 'Hengshui Hongsheng Auto Parts Co., Ltd.',
  publisher: 'Hengshui Hongsheng Auto Parts Co., Ltd.',
  keywords: [
    'truck steering parts manufacturer',
    'steering knuckle manufacturer',
    'steering arm manufacturer',
    'truck drive shaft manufacturer',
    'heavy-duty truck suspension parts',
    'forged truck parts supplier',
    'agricultural machinery parts manufacturer',
    'OEM auto parts supplier',
    'SHACMAN truck parts',
    'OEM cross reference numbers',
    'truck parts supplier China',
    'HONGSHENG Auto Parts',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
    images: [{
      url: socialImage,
      width: 1200,
      height: 630,
      alt: 'HONGSHENG heavy-duty truck parts manufacturing',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  formatDetection: { email: false, address: false, telephone: false },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/dm-sans-latin-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/outfit-latin-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/company/hero-howo-faw-shacman.webp" as="image" type="image/webp" />
      </head>
      <body>
        {children}
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
