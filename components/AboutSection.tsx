'use client';

import { useLanguage } from './LanguageProvider';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label fade-up">{t('about.label')}</div>
            <h2 className="section-title fade-up stagger-1">{t('about.title')}</h2>
            <p className="fade-up stagger-2">
              {t('about.p1')}
            </p>
            <p className="fade-up stagger-3">
              {t('about.p2')}
            </p>
            <p className="fade-up stagger-4">
              {t('about.p3')}
            </p>
            <div className="about-highlights fade-up stagger-5">
              <div className="about-highlight">
                <div className="about-highlight-icon">&#9881;</div>
                <h4>{t('about.h1')}</h4>
                <p>{t('about.h1Desc')}</p>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">&#9878;</div>
                <h4>{t('about.h2')}</h4>
                <p>{t('about.h2Desc')}</p>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">&#128200;</div>
                <h4>{t('about.h3')}</h4>
                <p>{t('about.h3Desc')}</p>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">&#127760;</div>
                <h4>{t('about.h4')}</h4>
                <p>{t('about.h4Desc')}</p>
              </div>
            </div>
          </div>
          <div className="about-visual fade-up stagger-3">
            <div className="about-image-wrapper">
              <img src="/images/company/factory-aerial.png" alt="HONGSHENG Factory Aerial View" />
            </div>
            <div className="about-badge-float">
              <div className="num">28+</div>
              <div className="label">{t('about.yearsExp')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
