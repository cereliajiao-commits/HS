'use client';

import { useState } from 'react';
import { allProductCards } from '@/data/products';
import { useLanguage } from './LanguageProvider';
import { resolveProductText } from '@/data/productLocalization';
import { trackEvent } from '@/lib/analytics';
import { oemReferences } from '@/data/oemReference.generated';

export default function ProductsSection() {
  const { t, lang } = useLanguage();
  const productLocale = lang === 'zh' ? 'zh' : 'en';
  const platformBrands = [
    'SINOTRUK HOWO', 'FAW Jiefang', 'Dongfeng', 'Dongfeng Liuzhou', 'SHACMAN', 'Foton Auman', 'CAMC',
    'Freightliner', 'Peterbilt', 'Kenworth', 'International', 'Ford',
    'Scania', 'Volvo', 'Mercedes-Benz', 'MAN', 'DAF', 'Renault Trucks', 'IVECO',
    'Isuzu', 'Hino', 'Mitsubishi Fuso', 'UD Trucks', 'Hyundai', 'Daewoo',
  ];
  const platformCopy = lang === 'zh'
    ? {
        label: '适配车型平台',
        intro: '产品应用覆盖中国、北美、欧洲、日本及韩国主流商用车平台，并支持矿用车、宽体车、工程卡车、自卸车和客车零部件定制。',
        note: '品牌名称仅用于说明产品适配车型，不代表品牌授权或隶属关系。',
      }
    : {
        label: 'Compatible Vehicle Platforms',
        intro: 'Applications cover leading commercial vehicle platforms from China, North America, Europe, Japan, and Korea, with custom support for mining, wide-body, construction, dump trucks, and buses.',
        note: 'Brand names identify compatible vehicle applications only and do not imply affiliation or endorsement.',
      };

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
    { filter: 'shaanxi', label: 'SHACMAN' },
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
        <div className="product-tabs fade-up stagger-3">
          <div className="filter-mode-toggle">
            <button
              className={`mode-btn ${filterMode === 'brand' ? 'active' : ''}`}
              onClick={() => handleModeSwitch('brand')}
            >
              {t('products.byBrand')}
            </button>
            <button
              className={`mode-btn ${filterMode === 'type' ? 'active' : ''}`}
              onClick={() => handleModeSwitch('type')}
            >
              {t('products.byType')}
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
          {filteredCards.map((card, index) => {
            const localized = resolveProductText(card.id, card.category, lang);
            const title = localized?.title ?? card.title;
            const description = localized?.description ?? card.description;
            const tag = localized?.categoryLabel ?? card.tag;
            const oem = oemReferences[card.id];

            return (
              <a
                key={card.id}
                href={`/product/${encodeURIComponent(card.id)}${lang === 'zh' ? '?lang=zh' : ''}`}
                className={`product-card fade-up visible${index < 12 ? ' product-card--priority' : ''}`}
                onClick={() => trackEvent('view_product', { product_id: card.id, location: 'product_grid' })}
                aria-label={`${title} product details`}
              >
                <div className="product-card-img">
                  <img
                    src={`${card.image}?v=20261017-webp`}
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
                    <div className="product-card-oem" aria-label={`OEM reference numbers: ${oem.oemNumbers.join(', ')}`}>
                      <span>OEM</span> {oem.oemNumbers.join(' · ')}
                    </div>
                  ) : null}
                  <span className="product-tag">{tag}</span>
                </div>
              </a>
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
