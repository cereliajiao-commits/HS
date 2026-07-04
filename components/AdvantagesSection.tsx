'use client';

import { useLanguage } from './LanguageProvider';

const advantageIcons = [
  '&#9881;',
  '&#9878;',
  '&#128295;',
  '&#128640;',
  '&#128197;',
  '&#127760;',
];

export default function AdvantagesSection() {
  const { t } = useLanguage();

  const advantages = [
    { icon: advantageIcons[0], title: t('adv.t1'), desc: t('adv.d1') },
    { icon: advantageIcons[1], title: t('adv.t2'), desc: t('adv.d2') },
    { icon: advantageIcons[2], title: t('adv.t3'), desc: t('adv.d3') },
    { icon: advantageIcons[3], title: t('adv.t4'), desc: t('adv.d4') },
    { icon: advantageIcons[4], title: t('adv.t5'), desc: t('adv.d5') },
    { icon: advantageIcons[5], title: t('adv.t6'), desc: t('adv.d6') },
  ];

  return (
    <section id="advantages">
      <div className="advantages-bg"></div>
      <div className="container">
        <div className="advantages-header">
          <div className="section-label fade-up" style={{ justifyContent: 'center' }}>{t('adv.label')}</div>
          <h2 className="section-title fade-up stagger-1">{t('adv.title')}</h2>
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
