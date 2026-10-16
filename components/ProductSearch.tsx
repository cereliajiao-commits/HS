'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { allProductCards } from '@/data/products';
import { resolveProductText } from '@/data/productLocalization';
import { useLanguage, type Language } from './LanguageProvider';
import { trackEvent } from '@/lib/analytics';

const searchCopy: Record<Language, { label: string; title: string; placeholder: string; hint: string; noResults: string; results: string }> = {
  en: { label: 'Search products', title: 'Search Products', placeholder: 'Model, product, category or brand', hint: 'Search all product models by keyword.', noResults: 'No matching products found.', results: 'matching products' },
  zh: { label: '搜索产品', title: '搜索产品', placeholder: '输入型号、产品、类别或品牌', hint: '可通过关键词搜索全部产品型号。', noResults: '没有找到匹配的产品。', results: '个匹配产品' },
  ru: { label: 'Поиск товаров', title: 'Поиск товаров', placeholder: 'Модель, товар, категория или бренд', hint: 'Поиск по всем моделям продукции.', noResults: 'Совпадений не найдено.', results: 'результатов' },
  ar: { label: 'بحث المنتجات', title: 'بحث المنتجات', placeholder: 'الموديل أو المنتج أو الفئة أو العلامة', hint: 'ابحث في جميع موديلات المنتجات.', noResults: 'لم يتم العثور على منتجات مطابقة.', results: 'منتجات مطابقة' },
  es: { label: 'Buscar productos', title: 'Buscar productos', placeholder: 'Modelo, producto, categoría o marca', hint: 'Busca todos los modelos por palabra clave.', noResults: 'No se encontraron productos.', results: 'productos encontrados' },
  pt: { label: 'Buscar produtos', title: 'Buscar produtos', placeholder: 'Modelo, produto, categoria ou marca', hint: 'Pesquise todos os modelos por palavra-chave.', noResults: 'Nenhum produto encontrado.', results: 'produtos encontrados' },
  fr: { label: 'Rechercher des produits', title: 'Rechercher des produits', placeholder: 'Modèle, produit, catégorie ou marque', hint: 'Recherchez tous les modèles par mot-clé.', noResults: 'Aucun produit correspondant.', results: 'produits trouvés' },
};

export default function ProductSearch() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const copy = searchCopy[lang];

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const matches = useMemo(() => {
    const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];

    return allProductCards.filter((card) => {
      const localized = resolveProductText(card.id, card.category, lang);
      const chinese = resolveProductText(card.id, card.category, 'zh');
      const haystack = [
        card.id,
        card.title,
        card.description,
        card.tag,
        card.category,
        card.brand,
        localized?.title,
        localized?.description,
        localized?.categoryLabel,
        chinese?.title,
        chinese?.description,
        chinese?.categoryLabel,
      ].filter(Boolean).join(' ').toLocaleLowerCase();

      return terms.every((term) => haystack.includes(term));
    });
  }, [query, lang]);

  const openSearch = () => {
    setIsOpen(true);
    trackEvent('open_product_search', { location: 'navbar' });
  };

  return (
    <div className="product-search">
      <button className="nav-search-button" type="button" onClick={openSearch} aria-label={copy.label} title={copy.label}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4.2 4.2" />
        </svg>
        <span>{copy.label}</span>
      </button>

      {isOpen && (
        <div className="product-search-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}>
          <section className="product-search-panel" role="dialog" aria-modal="true" aria-label={copy.title}>
            <div className="product-search-heading">
              <div>
                <h2>{copy.title}</h2>
                <p>{copy.hint}</p>
              </div>
              <button className="product-search-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close">×</button>
            </div>
            <label className="product-search-input-wrap">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.2 4.2" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.placeholder}
                aria-label={copy.label}
              />
            </label>

            <div className="product-search-results" aria-live="polite">
              {query.trim() && matches.length > 0 && (
                <div className="product-search-count">{matches.length} {copy.results}</div>
              )}
              {query.trim() && matches.length === 0 && (
                <div className="product-search-empty">{copy.noResults}</div>
              )}
              {matches.map((card) => {
                const localized = resolveProductText(card.id, card.category, lang);
                const title = localized?.title ?? card.title;
                const category = localized?.categoryLabel ?? card.tag;
                return (
                  <a
                    className="product-search-result"
                    key={card.id}
                    href={`/product/${encodeURIComponent(card.id)}${lang === 'zh' ? '?lang=zh' : ''}`}
                    onClick={() => {
                      setIsOpen(false);
                      trackEvent('search_product', { product_id: card.id, query });
                    }}
                  >
                    <span className="product-search-result-image"><img src={card.image} alt="" /></span>
                    <span className="product-search-result-copy">
                      <strong>{title}</strong>
                      <small>{category}</small>
                    </span>
                    <span className="product-search-result-arrow" aria-hidden="true">→</span>
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
