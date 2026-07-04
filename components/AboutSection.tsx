'use client';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label fade-up">About Us</div>
            <h2 className="section-title fade-up stagger-1">Engineering Excellence<br />Since 1996</h2>
            <p className="fade-up stagger-2">
              Hengshui Hongsheng Auto Parts Co., Ltd. was established in 1996 as a specialized manufacturer of steering systems for automobiles, agricultural machinery, and construction machinery. Our core products include steering knuckles, steering arms, four-wheel drive half-shafts, steering knuckle pins, and ball joint rods.
            </p>
            <p className="fade-up stagger-3">
              We operate five friction press production lines and three extrusion lines, supported by CNC machining centers, high-precision grinding machines, and complete heat treatment facilities. Our quality control is backed by magnetic flaw detectors, metallographic analyzers, and tensile testing equipment.
            </p>
            <p className="fade-up stagger-4">
              We have established partnerships with renowned manufacturers including American Airport Special Vehicles, Qingdao Haitong, Guizhou Aerospace Hongguang, Shandong Kaima, Weifang Heavy Industry, Shandong Shifeng, Chery Heavy Industry, and Tianjin Yongmeng.
            </p>
            <div className="about-highlights fade-up stagger-5">
              <div className="about-highlight">
                <div className="about-highlight-icon">&#9881;</div>
                <h4>Advanced Manufacturing</h4>
                <p>5 forging lines, CNC centers, precision grinding</p>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">&#9878;</div>
                <h4>Quality Assured</h4>
                <p>ISO 9001 certified, Six Sigma management</p>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">&#128200;</div>
                <h4>R&D Capability</h4>
                <p>Custom design & OEM partnerships</p>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon">&#127760;</div>
                <h4>Global Reach</h4>
                <p>Exporting to international markets</p>
              </div>
            </div>
          </div>
          <div className="about-visual fade-up stagger-3">
            <div className="about-image-wrapper">
              <img src="/images/company/factory-aerial.png" alt="HONGSHENG Factory Aerial View" />
            </div>
            <div className="about-badge-float">
              <div className="num">28+</div>
              <div className="label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
