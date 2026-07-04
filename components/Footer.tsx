'use client';

export default function Footer() {
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
              Hengshui Hongsheng Auto Parts Co., Ltd. &mdash; Professional manufacturer of steering systems for automobiles, agricultural machinery, and construction equipment since 1996.
            </p>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>Steering Arms</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>Steering Knuckles</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>Vertical Arms</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>Drive Shafts</a></li>
              <li><a href="#products" onClick={(e) => handleClick(e, '#products')}>Agricultural Parts</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>About Us</a></li>
              <li><a href="#advantages" onClick={(e) => handleClick(e, '#advantages')}>Why Choose Us</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Request Quote</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+8613613183888">+86 136 1318 3888</a></li>
              <li><a href="mailto:chinahs@hotmail.com">chinahs@hotmail.com</a></li>
              <li><a href="https://wa.me/8617751097209" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a></li>
              <li><a href="#">Anping, Hebei, China</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2024 Hengshui Hongsheng Auto Parts Co., Ltd. All rights reserved.</span>
          <span>ISO 9001 Certified Manufacturer</span>
        </div>
      </div>
    </footer>
  );
}
