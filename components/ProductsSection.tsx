'use client';

import { useState, useCallback } from 'react';
import { productCards } from '@/data/products';

const typeTabs = [
  { filter: 'all', label: 'All' },
  { filter: 'steering', label: 'Steering Arms' },
  { filter: 'knuckle', label: 'Steering Knuckles' },
  { filter: 'vertical', label: 'Vertical Arms' },
  { filter: 'shaft', label: 'Drive Shafts' },
  { filter: 'suspension', label: 'Suspension' },
  { filter: 'agri', label: 'Agricultural' },
];

const brandTabs = [
  { filter: 'all', label: 'All' },
  { filter: 'faw', label: 'FAW' },
  { filter: 'howo', label: 'HOWO' },
  { filter: 'auman', label: 'Auman' },
  { filter: 'dongfeng', label: 'Dongfeng' },
  { filter: 'shaanxi', label: 'Shaanxi' },
  { filter: 'sinotruk', label: 'SINOTRUK' },
  { filter: 'liberation', label: 'Liberation' },
  { filter: 'john-deere', label: 'John Deere' },
  { filter: 'others', label: 'Others' },
];

export default function ProductsSection() {
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

  const filteredCards = productCards.filter((card) => {
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
          <div className="section-label fade-up" style={{ justifyContent: 'center' }}>Our Products</div>
          <h2 className="section-title fade-up stagger-1">Comprehensive Product Range</h2>
          <p className="fade-up stagger-2">
            Over 200 models of precision-engineered steering and suspension components for heavy-duty trucks, agricultural machinery, and construction equipment.
          </p>
        </div>
        <div className="product-tabs fade-up stagger-3">
          <div className="filter-mode-toggle">
            <button
              className={`mode-btn ${filterMode === 'type' ? 'active' : ''}`}
              onClick={() => handleModeSwitch('type')}
            >
              By Type
            </button>
            <button
              className={`mode-btn ${filterMode === 'brand' ? 'active' : ''}`}
              onClick={() => handleModeSwitch('brand')}
            >
              By Brand
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
          {filteredCards.map((card, index) => (
            <div
              key={card.id}
              className={`product-card fade-up visible`}
              onClick={() => openProductDetail(card.id)}
            >
              <div className="product-card-img">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="product-card-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="product-tag">{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-btn fade-up">
          <a href="#contact" className="btn btn-outline" onClick={handleScrollToContact}>
            Request Full Catalog
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
