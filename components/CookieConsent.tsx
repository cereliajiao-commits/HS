'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'hs_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(CONSENT_KEY) === null);
  }, []);

  const choose = (value: 'accepted' | 'declined') => {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent('hs-cookie-consent', { detail: value }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie preferences">
      <div className="cookie-consent-copy">
        <strong>Cookie preferences</strong>
        <p>We use necessary cookies to keep this site working and optional analytics cookies to understand visits. You can accept or decline analytics.</p>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-consent-decline" onClick={() => choose('declined')}>Decline analytics</button>
        <button type="button" className="cookie-consent-accept" onClick={() => choose('accepted')}>Accept analytics</button>
      </div>
    </aside>
  );
}
