'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// GA4 measurement IDs are public browser identifiers; the fallback keeps tracking enabled
// on deployments where the hosting provider has not configured environment variables.
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-CN81GNY7EX';

export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('hs_cookie_consent');
    setAllowed(stored === 'accepted');
    const handleConsent = (event: Event) => {
      setAllowed((event as CustomEvent<'accepted' | 'declined'>).detail === 'accepted');
    };
    window.addEventListener('hs-cookie-consent', handleConsent);
    return () => window.removeEventListener('hs-cookie-consent', handleConsent);
  }, []);

  if (!measurementId || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
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
