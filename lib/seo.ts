import type { Language } from '@/components/LanguageProvider';

export const supportedLanguages: Language[] = [
  'en', 'zh', 'ru', 'ar', 'es', 'pt', 'fr',
  'ja', 'ko', 'de', 'it', 'nl', 'tr', 'pl', 'id',
];

const hreflangCodes: Record<Language, string> = {
  en: 'en',
  zh: 'zh-CN',
  ru: 'ru',
  ar: 'ar',
  es: 'es',
  pt: 'pt-BR',
  fr: 'fr',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  it: 'it',
  nl: 'nl',
  tr: 'tr',
  pl: 'pl',
  id: 'id',
};

export function getLanguage(value?: string): Language {
  const normalized = value?.toLowerCase();
  return normalized && supportedLanguages.includes(normalized as Language)
    ? normalized as Language
    : 'en';
}

export function languagePath(path: string, lang: Language) {
  if (lang === 'en') return path;
  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}lang=${lang}`;
}

export function languageUrl(siteUrl: string, path: string, lang: Language) {
  return `${siteUrl}${languagePath(path, lang)}`;
}

export function languageAlternates(siteUrl: string, path: string) {
  return {
    ...Object.fromEntries(supportedLanguages.map((lang) => [hreflangCodes[lang], languageUrl(siteUrl, path, lang)])),
    'x-default': languageUrl(siteUrl, path, 'en'),
  };
}
