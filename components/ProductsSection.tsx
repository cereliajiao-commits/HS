'use client';

import { useState, useCallback } from 'react';
import { allProductCards } from '@/data/products';
import { useLanguage } from './LanguageProvider';
import { productContent } from '@/data/productContent';

const containsCjk = (text: string) => /[\u4e00-\u9fff]/.test(text);

export default function ProductsSection() {
  const { t, lang } = useLanguage();
  const productLocale = lang === 'zh' ? 'zh' : 'en';

  const typeTabs = [
    { filter: 'all', label: t('products.all') },
    { filter: 'vertical', label: t('products.verticalArms') },
    { filter: 'steering-arm', label: t('products.steeringArms') },
    { filter: 'steering-knuckle', label: t('products.steeringKnuckles') },
    { filter: 'agricultural', label: t('products.agricultural') },
    { filter: 'john-deere', label: 'John Deere' },
    { filter: 'shaft', label: t('products.driveShafts') },
    { filter: 'long-shaft', label: 'Long Shaft' },
  ];

  const brandTabs = [
    { filter: 'all', label: t('products.all') },
    { filter: 'sinotruk', label: 'SINOTRUK' },
    { filter: 'dongfeng', label: 'Dongfeng' },
    { filter: 'auman', label: 'Auman' },
    { filter: 'howo', label: 'HOWO' },
    { filter: 'shaanxi', label: 'Shaanxi' },
    { filter: 'john-deere', label: 'John Deere' },
    { filter: 'others', label: t('products.others') },
  ];
  const [filterMode, setFilterMode] = useState<'type' | 'brand'>('type');
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleModeSwitch = (mode: 'type' | 'brand') => {
    setFilterMode(mode);
    setCurrentFilter('all');
  };

  const handleFilter = (filter: string) => {
    setCurrentFilter(filter);
  };

  const openProductDetail = useCallback((productId: string) => {
    const event = new CustomEvent('openProductModal', { detail: productId });
    window.dispatchEvent(event);
  }, []);

  const filteredCards = allProductCards.filter((card) => {
    if (currentFilter === 'all') return true;
    if (filterMode === 'type') return card.category === currentFilter;
    return card.brand === currentFilter;
  });

  const tabs = filterMode === 'type' ? typeTabs : brandTabs;

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
        <div className="product-tabs fade-up stagger-3">
          <div className="filter-mode-toggle">
            <button
              className={`mode-btn ${filterMode === 'type' ? 'active' : ''}`}
              onClick={() => handleModeSwitch('type')}
            >
              {t('products.byType')}
            </button>
            <button
              className={`mode-btn ${filterMode === 'brand' ? 'active' : ''}`}
              onClick={() => handleModeSwitch('brand')}
            >
              {t('products.byBrand')}
            </button>
          </div>
          <div className="filter-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.filter}
                className={`product-tab ${currentFilter === tab.filter ? 'active' : ''}`}
                onClick={() => handleFilter(tab.filter)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="products-grid">
          {filteredCards.map((card) => {
            const localized = productContent[card.id]?.[productLocale];
            const title = localized?.title ?? card.title;
            const description = localized?.description ?? card.description;

            return (
              <div
                key={card.id}
                className="product-card fade-up visible"
                onClick={() => openProductDetail(card.id)}
              >
                <div className="product-card-img">
                  <img src={card.image} alt={title} />
                </div>
                <div className="product-card-body">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="product-tag">{card.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
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
