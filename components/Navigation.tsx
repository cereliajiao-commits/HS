'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <a href="#hero" className="nav-logo" onClick={(e) => handleLinkClick(e, '#hero')}>
          HONG<span>SHENG</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>
          <a href="#products" onClick={(e) => handleLinkClick(e, '#products')}>Products</a>
          <a href="#advantages" onClick={(e) => handleLinkClick(e, '#advantages')}>Why Us</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
          <a href="#contact" className="nav-cta" onClick={(e) => handleLinkClick(e, '#contact')}>Get a Quote</a>
        </div>
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
