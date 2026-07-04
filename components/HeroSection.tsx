'use client';

export default function HeroSection() {
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
        <div className="hero-badge fade-up">ISO 9001 Certified Manufacturer</div>
        <h1 className="hero-title fade-up stagger-1">
          Precision <span className="highlight">Steering</span><br />& Suspension Systems
        </h1>
        <p className="hero-subtitle fade-up stagger-2">
          Trusted by leading truck and machinery manufacturers worldwide since 1996. We engineer and deliver high-performance steering knuckles, arms, drive shafts, and suspension components.
        </p>
        <div className="hero-actions fade-up stagger-3">
          <a href="#products" className="btn btn-primary" onClick={(e) => handleClick(e, '#products')}>
            Explore Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => handleClick(e, '#contact')}>
            Request a Quote
          </a>
        </div>
        <div className="hero-stats fade-up stagger-4">
          <div>
            <div className="hero-stat-num">28<span>+</span></div>
            <div className="hero-stat-label">Years of Experience</div>
          </div>
          <div>
            <div className="hero-stat-num">200<span>+</span></div>
            <div className="hero-stat-label">Product Models</div>
          </div>
          <div>
            <div className="hero-stat-num">5</div>
            <div className="hero-stat-label">Production Lines</div>
          </div>
          <div>
            <div className="hero-stat-num">ISO</div>
            <div className="hero-stat-label">9001 Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
