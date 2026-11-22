'use client';

import { useState } from 'react';
import { allProductCards } from '@/data/products';
import { useLanguage } from './LanguageProvider';
import { resolveProductText, translateProductText } from '@/data/productLocalization';
import { trackEvent } from '@/lib/analytics';
import { oemReferences } from '@/data/oemReference.generated';
import { withOemTitle } from '@/data/productTitles';
import { categoryPages } from '@/data/categoryPages';
import { translateCategoryLabel } from '@/data/productLocalization';

export default function ProductsSection() {
  const { t, lang } = useLanguage();
  const PRODUCTS_PER_PAGE = 20;
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

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(allProductCards.length / PRODUCTS_PER_PAGE));
  const visiblePage = Math.min(currentPage, totalPages);
  const paginatedCards = allProductCards.slice((visiblePage - 1) * PRODUCTS_PER_PAGE, visiblePage * PRODUCTS_PER_PAGE);

  const changePage = (page: number) => {
    setCurrentPage(page);
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categoryCopy = lang === 'zh'
    ? { label: '按产品系列浏览', title: '先找到产品系列，再选择具体型号', intro: '按配件类型进入系列页面，查看适配车型、OEM号和产品详情。', viewAll: '查看全部系列', view: '查看系列', count: '个产品' }
    : { label: 'Browse by product category', title: 'Start with the right part family', intro: 'Enter a part family to compare applications, OEM references and product details.', viewAll: 'View all categories', view: 'View category', count: 'products' };

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
            <a className="product-category-view-all" href="/category">{categoryCopy.viewAll}<span aria-hidden="true">↗</span></a>
          </div>
          <div className="product-category-grid">
            {categoryPages.map((page) => {
              const representative = allProductCards.find((product) => product.category === page.slug);
              const productCount = allProductCards.filter((product) => product.category === page.slug).length;
              if (!representative) return null;
              const label = lang === 'zh' ? `${translateCategoryLabel(page.slug, lang)}系列` : page.name;
              const description = lang === 'zh'
                ? `${productCount}${categoryCopy.count}，含车型与 OEM/OE 参考信息。`
                : `${productCount} ${categoryCopy.count} with vehicle and OEM/OE reference information.`;
              return (
                <a className="product-category-card" href={`/category/${page.slug}`} key={page.slug}>
                  <div className="product-category-card-media">
                    <img src={`${representative.image}?v=20261106-media`} alt="" loading="lazy" width="900" height="700" />
                  </div>
                  <div className="product-category-card-content">
                    <span className="product-category-card-number">{String(productCount).padStart(2, '0')}</span>
                    <h4>{label}</h4>
                    <p>{description}</p>
                    <span className="product-category-card-link">{categoryCopy.view}<span aria-hidden="true">→</span></span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
        <div className="products-grid">
          {paginatedCards.map((card, index) => {
            const localized = resolveProductText(card.id, card.category, lang);
            const title = withOemTitle(localized?.title ?? translateProductText(card.title, lang), card.id, lang);
            const description = localized?.description ?? translateProductText(card.description, lang);
            const tag = localized?.categoryLabel ?? card.tag;
            const oem = oemReferences[card.id];

            return (
              <a
                key={card.id}
                href={`/product/${encodeURIComponent(card.id)}${lang === 'en' ? '' : `?lang=${lang}`}`}
                className={`product-card fade-up visible${index < 12 ? ' product-card--priority' : ''}`}
                onClick={() => trackEvent('view_product', { product_id: card.id, location: 'product_grid' })}
                aria-label={`${title} — ${t('products.cardDetails')}`}
              >
                <div className="product-card-img">
                  <img
                    src={`${card.image}?v=20261106-media`}
                    alt={title}
                    loading={index < 12 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index < 4 ? 'high' : 'auto'}
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="product-card-body">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {oem?.oemNumbers.length ? (
                    <div className="product-card-oem" aria-label={`${t('products.oemReferenceNumbers')}: ${oem.oemNumbers.join(', ')}`}>
                      <span>OEM</span> {oem.oemNumbers.join(' · ')}
                    </div>
                  ) : null}
                  <span className="product-tag">{tag}</span>
                </div>
              </a>
            );
          })}
        </div>
        {totalPages > 1 && (
          <nav className="products-pagination" aria-label={lang === 'zh' ? '产品目录分页' : 'Product catalog pagination'}>
            <button
              type="button"
              className="products-pagination-arrow"
              onClick={() => changePage(Math.max(1, visiblePage - 1))}
              disabled={visiblePage === 1}
              aria-label={lang === 'zh' ? '上一页' : 'Previous page'}
            >
              ‹
            </button>
            <div className="products-pagination-pages">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  type="button"
                  key={page}
                  className={`products-pagination-page${page === visiblePage ? ' active' : ''}`}
                  onClick={() => changePage(page)}
                  aria-current={page === visiblePage ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="products-pagination-arrow"
              onClick={() => changePage(Math.min(totalPages, visiblePage + 1))}
              disabled={visiblePage === totalPages}
              aria-label={lang === 'zh' ? '下一页' : 'Next page'}
            >
              ›
            </button>
          </nav>
        )}
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
