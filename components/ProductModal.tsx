'use client';

import { useEffect, useState } from 'react';
import { productDetails } from '@/data/productDetails';
import { useLanguage } from './LanguageProvider';
import { productContent } from '@/data/productContent';

export default function ProductModal() {
  const { lang } = useLanguage();
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
  const localized = productContent[productId]?.[lang];
  const title = localized?.title ?? product.title;
  const description = localized?.description ?? product.description;
  const specs = localized?.specs ?? product.specs;
  const applications = localized?.applications ?? product.applications;
  const compatibleLabel = lang === 'zh' ? '适用车型 / 应用' : 'Compatible Vehicles / Applications';
  const requestQuoteLabel = lang === 'zh' ? '获取报价' : 'Request Quote';
  const whatsappLabel = lang === 'zh' ? 'WhatsApp 咨询' : 'WhatsApp Inquiry';

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <div className="modal-image">
          <img src={product.image} alt={title} />
        </div>
        <div className="modal-body">
          <div className="modal-category">{product.category}</div>
          <h2 className="modal-title">{title}</h2>
          <p className="modal-description">{description}</p>
          <div className="modal-specs">
            {specs.map((spec, i) => (
              <div key={i} className="modal-spec">
                <div className="modal-spec-label">{spec.label}</div>
                <div className="modal-spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
          <div className="modal-applications">
            <h4>{compatibleLabel}</h4>
            <ul>
              {applications.map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>
          </div>
          <div className="modal-cta">
            <a href="#contact" className="btn btn-primary" onClick={handleScrollToContact}>{requestQuoteLabel}</a>
            <a href="https://wa.me/8617751097209" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{whatsappLabel}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
