'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import LanguageSwitcher from './LanguageSwitcher';
import ProductSearch from './ProductSearch';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang } = useLanguage();
  const factoryLabel = t('nav.factory');
  const pageUrl = (path: string) => lang === 'en' ? path : `${path}?lang=${lang}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href={pageUrl('/')} className="nav-logo" aria-label="Hengshui Hongsheng Auto Parts home">
          <span className="nav-logo-wordmark">HONG<span>SHENG</span></span>
          <small>Hengshui Hongsheng Auto Parts</small>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <a href={pageUrl('/company')}>{t('nav.about')}</a>
          <a href={pageUrl('/factory')}>{factoryLabel}</a>
          <a href={pageUrl('/products')}>{t('nav.products')}</a>
          <a href={pageUrl('/advantages')}>{t('nav.whyUs')}</a>
          <a href={pageUrl('/contact')}>{t('nav.contact')}</a>
          <a href="#contact" className="nav-cta" onClick={(e) => handleLinkClick(e, '#contact')}>{t('nav.getQuote')}</a>
        </div>
        <div className="nav-tools">
          <ProductSearch />
          <LanguageSwitcher />
          <button className="nav-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={t('nav.toggle')}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
