'use client';

import { useLanguage } from './LanguageProvider';

export default function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="trust-strip" aria-label="HONGSHENG capabilities">
      <div className="container trust-strip-inner">
        <div className="trust-intro">
          <span className="trust-kicker">{t('trust.kicker')}</span>
          <strong>{t('trust.title')}</strong>
        </div>
        <div className="trust-items">
          <div className="trust-item"><span className="trust-icon">01</span><span>{t('trust.oem')}</span></div>
          <div className="trust-item"><span className="trust-icon">02</span><span>{t('trust.quality')}</span></div>
          <div className="trust-item"><span className="trust-icon">03</span><span>{t('trust.global')}</span></div>
        </div>
      </div>
    </section>
  );
}
