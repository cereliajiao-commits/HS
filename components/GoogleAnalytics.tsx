'use client';

import Script from 'next/script';

// GA4 measurement IDs are public browser identifiers; the fallback keeps tracking enabled
// on deployments where the hosting provider has not configured environment variables.
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-CN81GNY7EX';

export default function GoogleAnalytics() {
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
