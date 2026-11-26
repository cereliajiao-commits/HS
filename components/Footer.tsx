'use client';

import { useLanguage, type Language } from './LanguageProvider';
import { translateCategoryLabel } from '@/data/productLocalization';

export default function Footer() {
  const { lang, t } = useLanguage();
  const languageQuery = lang === 'en' ? '' : `?lang=${lang}`;
  const allCategoriesLabel = ({
    en: 'All product categories', zh: '全部产品分类', ru: 'Все категории продукции', ar: 'جميع فئات المنتجات',
    es: 'Todas las categorías', pt: 'Todas as categorias', fr: 'Toutes les catégories',
    ja: 'すべての製品カテゴリー', ko: '전체 제품 카테고리', de: 'Alle Produktkategorien', it: 'Tutte le categorie', nl: 'Alle productcategorieën', tr: 'Tüm ürün kategorileri', pl: 'Wszystkie kategorie produktów', id: 'Semua kategori produk',
  } as Partial<Record<Language, string>>)[lang] ?? 'All product categories';
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
              <li><a href={`/category${languageQuery}`}>{allCategoriesLabel}</a></li>
              <li><a href={`/category/tie-rod${languageQuery}`}>{translateCategoryLabel('tie-rod', lang)}</a></li>
              <li><a href={`/category/steering-arm${languageQuery}`}>{t('footer.steeringArms')}</a></li>
              <li><a href={`/category/steering-knuckle${languageQuery}`}>{t('footer.steeringKnuckles')}</a></li>
              <li><a href={`/category/vertical${languageQuery}`}>{t('footer.verticalArms')}</a></li>
              <li><a href={`/category/shaft${languageQuery}`}>{t('footer.driveShafts')}</a></li>
              <li><a href={`/category/agricultural${languageQuery}`}>{t('footer.agriculturalParts')}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.company')}</h4>
            <ul>
              {lang === 'en' && <>
                <li><a href="/company">Company Profile</a></li>
                <li><a href="/factory">Factory Capabilities</a></li>
                <li><a href="/oem-odm">OEM / ODM</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </>}
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
            <div className="footer-socials" aria-label="HONGSHENG social profiles">
              <a href="https://www.facebook.com/61594699907767/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" /></svg>
              </a>
              <a href="https://cn.linkedin.com/in/zoey-deng-4763b4381" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 8.1A1.9 1.9 0 1 0 6.2 4a1.9 1.9 0 0 0 0 4.1ZM4.5 20h3.4V9.7H4.5V20Zm5.5-10.3h3.3v1.4h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.2 2.2 4.2 5.1V20h-3.4v-5c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7V20H10V9.7Z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@apple.user4449820" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4c.3 1.8 1.4 3.1 3 3.5V11c-1.2-.1-2.3-.5-3.2-1.1v5.2a5.3 5.3 0 1 1-4.6-5.2v3.5a1.9 1.9 0 1 0 1.1 1.7V4H15Z" /></svg>
              </a>
            </div>
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
