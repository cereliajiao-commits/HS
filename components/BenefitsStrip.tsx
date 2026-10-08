'use client';

import { useLanguage } from './LanguageProvider';

const benefitIcons = [
  <svg key="moq" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h11l3 3v15H5zM8 8h7M8 12h7M8 16h4" /></svg>,
  <svg key="price" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h8l4 4v14H5V3h2zM9 7h5M12 10v8M15 12.5c0-1.1-1.2-1.7-2.4-1.7S10 11.4 10 12.4s1 1.4 2.2 1.7 2.2.7 2.2 1.8-1.1 1.7-2.4 1.7-2.4-.6-2.4-1.8" /></svg>,
  <svg key="oem" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12c4-1 6-4 8-9 4 2 7 5 10 10-4 0-7 1-10 5-1-3-3-5-8-6z" /></svg>,
  <svg key="warranty" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM8 9h8M8 13h5M17 17l2 2 4-5" /></svg>,
  <svg key="delivery" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h12v11H3zM15 10h4l2 3v4h-6zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>,
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
