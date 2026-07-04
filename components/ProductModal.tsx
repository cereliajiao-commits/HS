'use client';

import { useEffect, useState } from 'react';
import { productDetails } from '@/data/productDetails';

export default function ProductModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setProductId(customEvent.detail);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('openProductModal', handleOpen);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openProductModal', handleOpen);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setProductId(null);
    document.body.style.overflow = '';
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeModal();
    setTimeout(() => {
      const target = document.querySelector('#contact');
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  if (!isOpen || !productId) return null;

  const product = productDetails[productId];
  if (!product) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <div className="modal-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="modal-body">
          <div className="modal-category">{product.category}</div>
          <h2 className="modal-title">{product.title}</h2>
          <p className="modal-description">{product.description}</p>
          <div className="modal-specs">
            {product.specs.map((spec, i) => (
              <div key={i} className="modal-spec">
                <div className="modal-spec-label">{spec.label}</div>
                <div className="modal-spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
          <div className="modal-applications">
            <h4>Compatible Vehicles / Applications</h4>
            <ul>
              {product.applications.map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>
          </div>
          <div className="modal-cta">
            <a href="#contact" className="btn btn-primary" onClick={handleScrollToContact}>Request Quote</a>
            <a href="https://wa.me/8617751097209" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Inquiry</a>
          </div>
        </div>
      </div>
    </div>
  );
}
