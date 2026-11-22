'use client';
import Image from 'next/image';
import { allProductCards } from '@/data/products';
import { useLanguage } from './LanguageProvider';
import { categoryPages } from '@/data/categoryPages';
import { translateCategoryLabel } from '@/data/productLocalization';

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

  const categoryCopy = lang === 'zh'
    ? { label: '按产品系列浏览', title: '先找到产品系列，再选择具体型号', intro: '按配件类型进入系列页面，查看适配车型、OEM号和产品详情。', viewAll: '查看全部产品', view: '查看系列' }
    : { label: 'Browse by product category', title: 'Start with the right part family', intro: 'Enter a part family to compare applications, OEM references and product details.', viewAll: 'View all products', view: 'View category' };
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
              const label = lang === 'zh' ? `${translateCategoryLabel(page.slug, lang)}系列` : page.name;
              const description = lang === 'zh'
                ? '含车型与 OEM/OE 参考信息。'
                : 'Vehicle applications and OEM/OE reference information.';
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
                      alt=""
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
