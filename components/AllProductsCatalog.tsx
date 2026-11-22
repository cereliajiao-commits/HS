'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { allProductCards } from '@/data/products';
import { getDisplayOemNumbers, withOemTitle } from '@/data/productTitles';
import type { Language } from './LanguageProvider';
import { resolveProductText } from '@/data/productLocalization';

const PRODUCTS_PER_PAGE = 20;

export default function AllProductsCatalog({ lang = 'en', countSuffix = 'products with OEM/OE reference information' }: { lang?: Language; countSuffix?: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(allProductCards.length / PRODUCTS_PER_PAGE));
  const visiblePage = Math.min(currentPage, totalPages);
  const products = allProductCards.slice((visiblePage - 1) * PRODUCTS_PER_PAGE, visiblePage * PRODUCTS_PER_PAGE);

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <p className="category-page-count">{allProductCards.length} {countSuffix}</p>
      <section className="products-grid category-product-grid" aria-label="All products">
        {products.map((product, index) => {
          const localized = resolveProductText(product.id, product.category, lang);
          const title = withOemTitle(localized?.title ?? product.title, product.id, lang);
          const description = localized?.description ?? product.description;
          const oemNumbers = getDisplayOemNumbers(product.id, lang);
          return (
            <Link className="product-card" href={`/product/${encodeURIComponent(product.id)}${lang === 'en' ? '' : `?lang=${lang}`}`} key={product.id}>
              <div className="product-card-img">
                <Image
                  src={product.image}
                  alt={title}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 3}
                />
              </div>
              <div className="product-card-body">
                <h2>{title}</h2>
                <p>{description}</p>
                {oemNumbers.length ? <div className="product-card-oem"><span>OEM</span> {oemNumbers.join(' · ')}</div> : null}
                <span className="product-tag">{localized?.categoryLabel ?? product.tag}</span>
              </div>
            </Link>
          );
        })}
      </section>
      {totalPages > 1 && (
        <nav className="products-pagination" aria-label="All products pagination">
          <button type="button" className="products-pagination-arrow" onClick={() => changePage(Math.max(1, visiblePage - 1))} disabled={visiblePage === 1} aria-label="Previous page">‹</button>
          <div className="products-pagination-pages">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button type="button" key={page} className={`products-pagination-page${page === visiblePage ? ' active' : ''}`} onClick={() => changePage(page)} aria-current={page === visiblePage ? 'page' : undefined}>{page}</button>
            ))}
          </div>
          <button type="button" className="products-pagination-arrow" onClick={() => changePage(Math.min(totalPages, visiblePage + 1))} disabled={visiblePage === totalPages} aria-label="Next page">›</button>
        </nav>
      )}
    </>
  );
}
