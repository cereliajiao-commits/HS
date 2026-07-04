'use client';

const advantages = [
  {
    icon: '&#9881;',
    title: 'Advanced Manufacturing',
    desc: 'Five friction press forging lines, three extrusion lines, CNC machining centers, high-precision grinding machines, and CNC high-frequency quenching systems ensure consistent quality at scale.',
  },
  {
    icon: '&#9878;',
    title: 'Rigorous Quality Control',
    desc: 'Equipped with magnetic flaw detectors, metallographic analyzers, chemical analysis labs, and tensile testing machines. ISO 9001 certified with Six Sigma management practices.',
  },
  {
    icon: '&#128295;',
    title: 'Comprehensive Product Range',
    desc: 'Over 200 models covering steering knuckles, steering arms, vertical arms, drive shafts, half-shafts, and agricultural components for all major Chinese and international truck brands.',
  },
  {
    icon: '&#128640;',
    title: 'OEM & Custom Solutions',
    desc: 'Established OEM partnerships with American Airport Special Vehicles, Shandong Kaima, Chery Heavy Industry, and more. Custom design and manufacturing to your specifications.',
  },
  {
    icon: '&#128197;',
    title: '28+ Years Experience',
    desc: 'Since 1996, we have built deep expertise in steering system manufacturing, serving automotive, agricultural, and construction machinery sectors with proven reliability.',
  },
  {
    icon: '&#127760;',
    title: 'Global Service Network',
    desc: 'We serve clients worldwide with responsive communication via WhatsApp, WeChat, and email. Dedicated support team for international orders and technical inquiries.',
  },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages">
      <div className="advantages-bg"></div>
      <div className="container">
        <div className="advantages-header">
          <div className="section-label fade-up" style={{ justifyContent: 'center' }}>Why Choose Us</div>
          <h2 className="section-title fade-up stagger-1">Built on Quality, Driven by Innovation</h2>
        </div>
        <div className="advantages-grid">
          {advantages.map((adv, i) => (
            <div key={i} className={`advantage-card fade-up ${i > 0 ? `stagger-${i}` : ''}`}>
              <div className="advantage-icon" dangerouslySetInnerHTML={{ __html: adv.icon }} />
              <h3>{adv.title}</h3>
              <p>{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
