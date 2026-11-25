'use client';

import { useState } from 'react';
import ProductImageZoom from './ProductImageZoom';
import { useLanguage } from './LanguageProvider';

type ProductGalleryProps = {
  images: string[];
  alt: string;
  hint: string;
};

export default function ProductGallery({ images, alt, hint }: ProductGalleryProps) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const activeImage = images[selected] ?? images[0];

  return (
    <div className="product-detail-gallery">
      <div className="product-detail-gallery-main">
        <ProductImageZoom src={activeImage} alt={alt} hint={hint} />
      </div>
      {images.length > 1 && (
        <div className="product-detail-gallery-thumbs" aria-label={t('gallery.images')}>
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`product-detail-gallery-thumb${selected === index ? ' is-active' : ''}`}
              onClick={() => setSelected(index)}
              aria-label={`${t('gallery.view')} ${index + 1}`}
              aria-pressed={selected === index}
            >
              <img src={image} alt={`${alt} view ${index + 1}`} width={1200} height={1200} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
