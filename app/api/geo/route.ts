import { NextRequest, NextResponse } from 'next/server';

type Language = 'en' | 'zh' | 'ru' | 'ar' | 'es' | 'pt' | 'fr';

export const dynamic = 'force-dynamic';

const countryLanguage: Record<string, Language> = {
  CN: 'zh', HK: 'zh', MO: 'zh', TW: 'zh',
  RU: 'ru', BY: 'ru', KZ: 'ru', KG: 'ru',
  AE: 'ar', SA: 'ar', QA: 'ar', KW: 'ar', BH: 'ar', OM: 'ar',
  EG: 'ar', JO: 'ar', IQ: 'ar', MA: 'ar', DZ: 'ar', TN: 'ar',
  ES: 'es', MX: 'es', AR: 'es', CL: 'es', CO: 'es', PE: 'es',
  VE: 'es', EC: 'es', UY: 'es', BO: 'es', PY: 'es', CR: 'es',
  BR: 'pt', PT: 'pt',
  FR: 'fr', BE: 'fr', MC: 'fr', LU: 'fr',
};

function languageFromAcceptLanguage(value: string | null): Language {
  const languages = (value ?? '')
    .toLowerCase()
    .split(',')
    .map((part) => part.trim().split(';')[0]);

  for (const language of languages) {
    if (language.startsWith('zh')) return 'zh';
    if (language.startsWith('ru')) return 'ru';
    if (language.startsWith('ar')) return 'ar';
    if (language.startsWith('es')) return 'es';
    if (language.startsWith('pt')) return 'pt';
    if (language.startsWith('fr')) return 'fr';
  }

  return 'en';
}

export function GET(request: NextRequest) {
  const country = (
    request.headers.get('cf-ipcountry')
    ?? request.headers.get('x-vercel-ip-country')
    ?? request.headers.get('x-country-code')
    ?? ''
  ).toUpperCase();

  const language = countryLanguage[country] ?? languageFromAcceptLanguage(request.headers.get('accept-language'));

  return NextResponse.json(
    { country: country || null, language },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}
