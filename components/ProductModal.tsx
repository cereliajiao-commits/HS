'use client';

import { useEffect, useRef, useState } from 'react';
import { productDetails } from '@/data/productDetails';
import { useLanguage } from './LanguageProvider';
import { productContent } from '@/data/productContent';

export default function ProductModal() {
  const { lang } = useLanguage();
  const productLocale = lang === 'zh' ? 'zh' : 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 8, y: -14 });
  const [dragging, setDragging] = useState(false);
  const dragOrigin = useRef<{ x: number; y: number; rx: number; ry: number } | null>(null);

  useEffect(() => {
    if (productId) {
      setRotation({ x: 8, y: -14 });
      setDragging(false);
      dragOrigin.current = null;
    }
  }, [productId]);

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

  const handleViewerPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
    dragOrigin.current = {
      x: e.clientX,
      y: e.clientY,
      rx: rotation.x,
      ry: rotation.y,
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handleViewerPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !dragOrigin.current) return;
    const dx = e.clientX - dragOrigin.current.x;
    const dy = e.clientY - dragOrigin.current.y;
    const nextY = dragOrigin.current.ry + dx / 5;
    const nextX = Math.max(-18, Math.min(18, dragOrigin.current.rx - dy / 10));
    setRotation({ x: nextX, y: nextY });
  };

  const handleViewerPointerUp = () => {
    setDragging(false);
    dragOrigin.current = null;
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
  const localized = productContent[productId]?.[productLocale];
  const title = localized?.title ?? product.title;
  const description = localized?.description ?? product.description;
  const specs = localized?.specs ?? product.specs;
  const applications = localized?.applications ?? product.applications;
  const compatibleLabel = lang === 'zh' ? '适用车型 / 应用' : 'Compatible Vehicles / Applications';
  const requestQuoteLabel = lang === 'zh' ? '获取报价' : 'Request Quote';
  const whatsappLabel = lang === 'zh' ? 'WhatsApp 咨询' : 'WhatsApp Inquiry';
  const viewerLabel = lang === 'zh' ? '拖动图片可预览 360° 效果' : 'Drag the image for a 360°-style preview';
  const resetLabel = lang === 'zh' ? '重置视图' : 'Reset View';

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <div className="modal-image modal-spin-stage">
          <div
            className={`spin-viewer ${dragging ? 'dragging' : ''}`}
            onPointerDown={handleViewerPointerDown}
            onPointerMove={handleViewerPointerMove}
            onPointerUp={handleViewerPointerUp}
            onPointerCancel={handleViewerPointerUp}
            onPointerLeave={handleViewerPointerUp}
          >
            <div className="spin-viewer-shell">
              <div
                className="spin-viewer-frame"
                style={{
                  transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
              >
                <img src={product.image} alt={title} draggable={false} />
              </div>
            </div>
          </div>
          <div className="spin-hint-row">
            <span className="spin-hint">{viewerLabel}</span>
            <button
              type="button"
              className="spin-reset"
              onClick={() => setRotation({ x: 8, y: -14 })}
            >
              {resetLabel}
            </button>
          </div>
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
