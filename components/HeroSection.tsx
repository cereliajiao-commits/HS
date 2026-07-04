'use client';

import { useLanguage } from './LanguageProvider';

export default function HeroSection() {
  const { t } = useLanguage();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-accent"></div>
      <div className="hero-content">
        <div className="hero-badge fade-up">{t('hero.badge')}</div>
        <h1 className="hero-title fade-up stagger-1">
          {t('hero.title1')} <span className="highlight">{t('hero.titleHighlight')}</span><br />{t('hero.title2')}
        </h1>
        <p className="hero-subtitle fade-up stagger-2">
          {t('hero.subtitle')}
        </p>
        <div className="hero-actions fade-up stagger-3">
          <a href="#products" className="btn btn-primary" onClick={(e) => handleClick(e, '#products')}>
            {t('hero.exploreProducts')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => handleClick(e, '#contact')}>
            {t('hero.requestQuote')}
          </a>
        </div>
        <div className="hero-stats fade-up stagger-4">
          <div>
            <div className="hero-stat-num">{t('hero.stat1Num')}<span>+</span></div>
            <div className="hero-stat-label">{t('hero.stat1Label')}</div>
          </div>
          <div>
            <div className="hero-stat-num">{t('hero.stat2Num')}<span>+</span></div>
            <div className="hero-stat-label">{t('hero.stat2Label')}</div>
          </div>
          <div>
            <div className="hero-stat-num">{t('hero.stat3Num')}</div>
            <div className="hero-stat-label">{t('hero.stat3Label')}</div>
          </div>
          <div>
            <div className="hero-stat-num">{t('hero.stat4Num')}</div>
            <div className="hero-stat-label">{t('hero.stat4Label')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
