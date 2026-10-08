'use client';

import { useLanguage } from './LanguageProvider';
import { trackEvent } from '@/lib/analytics';

export default function HeroSection() {
  const { t } = useLanguage();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    trackEvent(href === '#products' ? 'view_products' : 'begin_inquiry', { location: 'hero' });
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-modern">
      <div className="hero-modern-bg" />
      <div className="hero-modern-grid" />
      <div className="hero-modern-content container">
        <div className="hero-modern-copy">
          <div className="hero-badge fade-up">{t('hero.badge')}</div>
          <div className="hero-kicker fade-up stagger-1">{t('hero.kicker')}</div>
          <h1 className="hero-title fade-up stagger-1">
            {t('hero.title1')} <span className="highlight">{t('hero.titleHighlight')}</span><br />{t('hero.title2')}
          </h1>
          <p className="hero-subtitle fade-up stagger-2">{t('hero.subtitle')}</p>
          <div className="hero-actions fade-up stagger-3">
            <a href="#products" className="btn btn-primary" onClick={(e) => handleClick(e, '#products')}>
              {t('hero.exploreProducts')} <span className="btn-arrow">↗</span>
            </a>
            <a href="#contact" className="btn btn-light-outline" onClick={(e) => handleClick(e, '#contact')}>
              {t('hero.requestQuote')}
            </a>
          </div>
          <div className="hero-proof fade-up stagger-4">
            <div className="hero-proof-avatars"><span>H</span><span>O</span><span>E</span></div>
            <div><strong>{t('hero.proofTitle')}</strong><small>{t('hero.proofCopy')}</small></div>
          </div>
        </div>

        <div className="hero-modern-visual fade-up stagger-2" aria-label="HONGSHENG product showcase">
          <div className="hero-visual-orbit orbit-one" />
          <div className="hero-visual-orbit orbit-two" />
          <div className="hero-product-main">
            <img src="/images/products/imported-steering-knuckle-001-1041羊角左右.png" alt="Heavy-duty steering knuckle" />
          </div>
          <div className="hero-product-float hero-product-float-top">
            <img src="/images/products/STR双桥垂臂（四种）.png" alt="STR double bridge vertical arm" />
            <span>STR SERIES</span>
          </div>
          <div className="hero-product-float hero-product-float-bottom">
            <img src="/images/products/sinotruk-str-drive-shaft.png" alt="SINOTRUK STR drive shaft" />
            <span>DRIVE SYSTEMS</span>
          </div>
          <div className="hero-visual-label"><span>01</span>{t('hero.panelTitle')}<small>{t('hero.panelCopy')}</small></div>
        </div>
      </div>
      <div className="hero-modern-stats container fade-up stagger-4">
        <div><strong>{t('hero.stat1Num')}<em>+</em></strong><span>{t('hero.stat1Label')}</span></div>
        <div><strong>{t('hero.stat2Num')}<em>+</em></strong><span>{t('hero.stat2Label')}</span></div>
        <div><strong>{t('hero.stat3Num')}</strong><span>{t('hero.stat3Label')}</span></div>
        <div><strong>{t('hero.stat4Num')}</strong><span>{t('hero.stat4Label')}</span></div>
        <div className="hero-scroll-note">{t('hero.scrollNote')} <span>↓</span></div>
      </div>
    </section>
  );
}
