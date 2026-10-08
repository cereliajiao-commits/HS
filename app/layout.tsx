import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const siteUrl = 'https://www.hsaxle.com';
const siteName = 'HONGSHENG Auto Parts';
const siteDescription =
  'Hengshui Hongsheng Auto Parts Co., Ltd. - Leading manufacturer of steering knuckles, steering arms, drive shafts, and suspension systems for heavy-duty trucks and agricultural machinery. ISO9001 certified.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Professional Steering & Suspension Systems Since 1996`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'steering knuckle manufacturer',
    'truck steering parts supplier',
    'heavy-duty truck suspension parts',
    'steering arm manufacturer',
    'drive shaft supplier',
    'agricultural machinery parts manufacturer',
    'OEM auto parts supplier',
    'forged auto parts factory',
    'HONGSHENG Auto Parts',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: `${siteName} | Professional Steering & Suspension Systems Since 1996`,
    description: siteDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: `${siteName} | Professional Steering & Suspension Systems Since 1996`,
    description: siteDescription,
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
