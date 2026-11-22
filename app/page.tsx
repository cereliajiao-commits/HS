import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import HomeStructuredData from '@/components/HomeStructuredData';
import type { Language } from '@/components/LanguageProvider';
import { getLanguage, languageAlternates, languageUrl } from '@/lib/seo';
import { translations } from '@/data/translations';

const SITE_URL = 'https://www.hsaxle.com';

export async function generateMetadata({ searchParams }: { searchParams?: { lang?: string } }): Promise<Metadata> {
  const lang = getLanguage(searchParams?.lang);
  const copy = translations[lang];
  const title = lang === 'zh'
    ? '重型商用车零部件可靠制造｜稳定供应｜HONGSHENG'
    : lang === 'en'
      ? 'Truck Steering & Driveline Parts Manufacturer | HONGSHENG'
      : `${copy['hero.title1']} ${copy['hero.titleHighlight']} | HONGSHENG Auto Parts`;
  const description = copy['hero.subtitle'];
  const canonical = languageUrl(SITE_URL, '/', lang);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical, languages: languageAlternates(SITE_URL, '/') },
    openGraph: { type: 'website', url: canonical, title, description, siteName: 'HONGSHENG Auto Parts', locale: ({ en: 'en_US', zh: 'zh_CN', ru: 'ru_RU', ar: 'ar_SA', es: 'es_ES', pt: 'pt_BR', fr: 'fr_FR' } as Record<Language, string>)[lang] },
  };
}

export default function Page({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = getLanguage(searchParams?.lang);
  return (
    <>
      <HomeStructuredData lang={lang} />
      <HomePage initialLanguage={searchParams?.lang ? lang : undefined} />
    </>
  );
}
