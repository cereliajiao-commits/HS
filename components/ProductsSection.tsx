'use client';
import Image from 'next/image';
import { allProductCards } from '@/data/products';
import { useLanguage } from './LanguageProvider';
import { categoryPages } from '@/data/categoryPages';
import type { Language } from './LanguageProvider';
import { resolveProductText, translateCategoryLabel } from '@/data/productLocalization';
import { withOemTitle } from '@/data/productTitles';
import { categoryUiCopy } from '@/data/categoryLocalization';

const categoryShowcaseCopy: Record<Language, {
  label: string;
  title: string;
  intro: string;
  viewAll: string;
  view: string;
}> = {
  en: {
    label: 'Browse by product category',
    title: 'Start with the right part family',
    intro: 'Enter a part family to compare applications, OEM references and product details.',
    viewAll: 'View all products',
    view: 'View category',
  },
  zh: {
    label: '按产品系列浏览',
    title: '先找到产品系列，再选择具体型号',
    intro: '按配件类型进入系列页面，查看适配车型、OEM号和产品详情。',
    viewAll: '查看全部产品',
    view: '查看系列',
  },
  ru: {
    label: 'Просмотр по категориям продукции',
    title: 'Сначала выберите семейство деталей',
    intro: 'Сравните применение, OEM номера и сведения о продукции по категориям деталей.',
    viewAll: 'Все продукты',
    view: 'Открыть категорию',
  },
  ar: {
    label: 'تصفح حسب فئة المنتج',
    title: 'ابدأ بفئة القطعة المناسبة',
    intro: 'قارن الاستخدامات ومراجع OEM وتفاصيل المنتجات حسب فئة القطعة.',
    viewAll: 'عرض جميع المنتجات',
    view: 'عرض الفئة',
  },
  es: {
    label: 'Explorar por categoría',
    title: 'Empiece por la familia de piezas adecuada',
    intro: 'Compare aplicaciones, referencias OEM y detalles de producto por categoría.',
    viewAll: 'Ver todos los productos',
    view: 'Ver categoría',
  },
  pt: {
    label: 'Navegar por categoria',
    title: 'Comece pela família de peças certa',
    intro: 'Compare aplicações, referências OEM e detalhes dos produtos por categoria.',
    viewAll: 'Ver todos os produtos',
    view: 'Ver categoria',
  },
  fr: {
    label: 'Parcourir par catégorie',
    title: 'Commencez par la bonne famille de pièces',
    intro: 'Comparez les applications, références OEM et détails produits par catégorie.',
    viewAll: 'Voir tous les produits',
    view: 'Voir la catégorie',
  },
};

export default function ProductsSection() {
  const { t, lang } = useLanguage();
  const platformBrands = [
    'SINOTRUK HOWO', 'FAW Jiefang', 'Dongfeng', 'Dongfeng Liuzhou', 'SHACMAN', 'Foton Auman', 'CAMC',
    'Freightliner', 'Peterbilt', 'Kenworth', 'International', 'Ford',
    'Scania', 'Volvo', 'Mercedes-Benz', 'MAN', 'DAF', 'Renault Trucks', 'IVECO',
    'Isuzu', 'Hino', 'Mitsubishi Fuso', 'UD Trucks', 'Hyundai', 'Daewoo',
  ];
  const platformCopy = {
    label: t('products.platformLabel'),
    intro: t('products.platformIntro'),
    note: t('products.platformNote'),
  };

  const categoryCopy = categoryShowcaseCopy[lang];
  const languageQuery = lang === 'en' ? '' : `?lang=${lang}`;

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="products">
      <div className="container">
        <div className="products-header">
          <div className="section-label fade-up" style={{ justifyContent: 'center' }}>{t('products.label')}</div>
          <h2 className="section-title fade-up stagger-1">{t('products.title')}</h2>
          <p className="fade-up stagger-2">
            {t('products.subtitle')}
          </p>
        </div>
        <div className="product-platforms fade-up stagger-2">
          <div className="product-platforms-heading">
            <span>{platformCopy.label}</span>
            <p>{platformCopy.intro}</p>
          </div>
          <div className="product-platform-brand-list" aria-label={platformCopy.label}>
            {platformBrands.map((brand) => <span key={brand}>{brand}</span>)}
          </div>
          <small>{platformCopy.note}</small>
        </div>
        <section className="product-category-showcase fade-up" aria-labelledby="product-category-title">
          <div className="product-category-showcase-heading">
            <div>
              <p className="section-label">{categoryCopy.label}</p>
              <h3 id="product-category-title">{categoryCopy.title}</h3>
              <p>{categoryCopy.intro}</p>
            </div>
            <a className="product-category-view-all" href={`/products${languageQuery}`}>{categoryCopy.viewAll}<span aria-hidden="true">↗</span></a>
          </div>
          <div className="product-category-grid">
            {categoryPages.map((page, index) => {
              const representative = allProductCards.find((product) => product.category === page.slug);
              if (!representative) return null;
              const label = lang === 'zh' ? `${translateCategoryLabel(page.slug, lang)}系列` : translateCategoryLabel(page.slug, lang);
              const localizedRepresentative = resolveProductText(representative.id, representative.category, lang);
              const description = categoryUiCopy[lang].directoryDescription(label);
              const imageAlt = localizedRepresentative
                ? withOemTitle(localizedRepresentative.title, representative.id, lang)
                : `${label} product example`;
              return (
                <a
                  className="product-category-card fade-up"
                  href={`/category/${page.slug}${languageQuery}`}
                  key={page.slug}
                  style={{ transitionDelay: `${Math.min(index, 5) * 70}ms` }}
                >
                  <div className="product-category-card-media">
                    <Image
                      src={`${representative.image}?v=20261106-media`}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                  <div className="product-category-card-content">
                    <h4>{label}</h4>
                    <p>{description}</p>
                    <span className="product-category-card-link">{categoryCopy.view}<span aria-hidden="true">→</span></span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
        <div className="view-all-btn fade-up">
          <a href="#contact" className="btn btn-outline" onClick={handleScrollToContact}>
            {t('products.requestCatalog')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
