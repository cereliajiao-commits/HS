'use client';

import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo" onClick={(e) => handleClick(e, '#hero')}>
              HONG<span>SHENG</span>
            </a>
            <p>
              {t('footer.desc')}
            </p>
            <p className="footer-entity-name">
              <strong>衡水宏盛汽车配件有限公司</strong><br />
              Hengshui Hongsheng Auto Parts Co., Ltd.
            </p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.products')}</h4>
            <ul>
              <li><a href="/category">All product categories</a></li>
              <li><a href="/category/tie-rod">Truck tie rods</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>{t('footer.steeringArms')}</a></li>
              <li><a href="/category/steering-knuckle">Steering knuckles</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>{t('footer.steeringKnuckles')}</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>{t('footer.verticalArms')}</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>{t('footer.driveShafts')}</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>{t('footer.agriculturalParts')}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>{t('footer.aboutUs')}</a></li>
              <li><a href="#advantages" onClick={(e) => handleClick(e, '#advantages')}>{t('footer.whyChooseUs')}</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>{t('footer.contact')}</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>{t('footer.requestQuote')}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><a href="tel:+8613613183888">+86 136 1318 3888</a></li>
              <li><a href="mailto:chinahs@hotmail.com">chinahs@hotmail.com</a></li>
              <li><a href="https://wa.me/8617751097209" target="_blank" rel="noopener noreferrer">{t('contact.whatsapp')}</a></li>
              <li><a href="#">{t('contact.addressValue')}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.iso')}</span>
        </div>
      </div>
    </footer>
  );
}
