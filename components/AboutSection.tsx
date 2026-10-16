'use client';

import { useLanguage } from './LanguageProvider';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-heading">
            <div className="section-label fade-up">{t('about.label')}</div>
            <h2 className="section-title fade-up stagger-1">{t('about.title')}</h2>
          </div>
          <div className="about-copy">
            <p className="fade-up stagger-2">
              {t('about.p1')}
            </p>
            <p className="fade-up stagger-3">
              {t('about.p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
