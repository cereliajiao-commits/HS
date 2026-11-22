'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language =
  | 'en' | 'zh' | 'ru' | 'ar' | 'es' | 'pt' | 'fr'
  | 'ja' | 'ko' | 'de' | 'it' | 'nl' | 'tr' | 'pl' | 'id';

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
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
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

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage?: Language }) {
  const [lang, setLang] = useState<Language>(initialLanguage ?? 'en');

  useEffect(() => {
    let cancelled = false;
    if (initialLanguage) {
      setLang(initialLanguage);
      return () => { cancelled = true; };
    }
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
  }, [initialLanguage]);

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
