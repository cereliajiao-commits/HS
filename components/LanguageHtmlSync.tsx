'use client';

import { useEffect } from 'react';
import { languages } from './LanguageProvider';

export default function LanguageHtmlSync() {
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('lang');
    const isSupported = languages.some((language) => language.code === requested);
    if (isSupported && requested) {
      document.documentElement.lang = requested;
    }
  }, []);

  return null;
}
