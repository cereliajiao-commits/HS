'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh' | 'ru' | 'ar' | 'es' | 'pt' | 'fr';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

// Import translations
import { translations } from '@/data/translations';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    let cancelled = false;
    const saved = window.localStorage.getItem('hs-language') as Language | null;
    if (saved && languages.some((language) => language.code === saved)) {
      setLang(saved);
      return () => { cancelled = true; };
    }

    fetch('/api/geo', { headers: { Accept: 'application/json' } })
      .then((response) => response.ok ? response.json() : null)
      .then((data: { language?: Language } | null) => {
        if (!cancelled && data?.language && languages.some((language) => language.code === data.language)) {
          setLang(data.language);
        }
      })
      .catch(() => {
        // Keep English as the safe default when geo detection is unavailable.
      });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('hs-language', lang);
    document.cookie = `hs-language=${lang}; path=/; max-age=31536000; samesite=lax`;
  }, [lang]);

  const t = (key: string): string => {
    const langTranslations = translations[lang];
    if (langTranslations && langTranslations[key]) {
      return langTranslations[key];
    }
    // Fallback to English
    if (translations['en'] && translations['en'][key]) {
      return translations['en'][key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
