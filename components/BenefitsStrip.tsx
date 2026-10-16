'use client';

import { useLanguage } from './LanguageProvider';

const benefitIcons = [
  <svg key="moq" viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3h17v26H8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" /><path className="icon-cutout" d="M10 10h10v2H10zm0 5h10v2H10zm-1 9h14v2H9z" /></svg>,
  <svg key="price" viewBox="0 0 32 32" aria-hidden="true"><path d="M6 2h13l7 7v21H6Z" /><path className="icon-cutout" d="M19 2v8h7v-2h-5V2ZM9 7h6v2H9Z" /><text x="16" y="25" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial" fontWeight="700">$</text></svg>,
  <svg key="oem" viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3c10 4 17 12 20 23H17C17 16 14 9 8 3Zm0 9c5 3 8 8 8 14H2c8-3 10-7 6-14Z" /></svg>,
  <svg key="warranty" viewBox="0 0 32 32" aria-hidden="true"><path d="M3 12h11v7H3zm15 0h11v7H18zM5 21h9v9H5zm13 0h9v9h-9Z" /><path d="M16 12C3 12 5 1 11 4c3 1 5 8 5 8Zm0 0C29 12 27 1 21 4c-3 1-5 8-5 8Z" fill="none" stroke="currentColor" strokeWidth="2.8" /></svg>,
  <svg key="delivery" viewBox="0 0 32 32" aria-hidden="true"><path d="M11 3h10v4h-3V6h-4v1h-3ZM4 8h23v18H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z" /><path className="icon-cutout" d="M2 14h25v2H2Z" /><circle cx="24" cy="24" r="8" stroke="white" strokeWidth="2" /><path d="M24 19v5h3" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>,
];

export default function BenefitsStrip() {
  const { t } = useLanguage();
  const benefits = [
    ['benefits.moqTitle', 'benefits.moqValue'],
    ['benefits.priceTitle', 'benefits.priceValue'],
    ['benefits.oemTitle', 'benefits.oemValue'],
    ['benefits.warrantyTitle', 'benefits.warrantyValue'],
    ['benefits.deliveryTitle', 'benefits.deliveryValue'],
  ] as const;

  return (
    <section className="benefits-strip" aria-label={t('benefits.ariaLabel')}>
      <div className="benefits-strip-card container">
        {benefits.map(([titleKey, valueKey], index) => (
          <div className="benefit-item" key={titleKey}>
            <div className="benefit-icon">{benefitIcons[index]}</div>
            <strong>{t(titleKey)}</strong>
            <span>{t(valueKey)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
