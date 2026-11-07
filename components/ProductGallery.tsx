'use client';

import { useState } from 'react';
import ProductImageZoom from './ProductImageZoom';

type ProductGalleryProps = {
  images: string[];
  alt: string;
  hint: string;
};

export default function ProductGallery({ images, alt, hint }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);
  const activeImage = images[selected] ?? images[0];

  return (
    <div className="product-detail-gallery">
      <div className="product-detail-gallery-main">
        <ProductImageZoom src={`${activeImage}?v=20261107-gallery`} alt={alt} hint={hint} />
      </div>
      {images.length > 1 && (
        <div className="product-detail-gallery-thumbs" aria-label="Product images">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`product-detail-gallery-thumb${selected === index ? ' is-active' : ''}`}
              onClick={() => setSelected(index)}
              aria-label={`View product image ${index + 1}`}
              aria-pressed={selected === index}
            >
              <img src={`${image}?v=20261107-gallery`} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
