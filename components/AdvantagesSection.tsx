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

const buyerPromiseCopy = {
  en: {
    label: 'What buyers can expect',
    title: 'Built for reliable repeat orders',
    intro: 'The same controls that support OEM projects also help overseas buyers source with confidence.',
    points: [
      ['Reliable Fitment', 'Controlled machining and inspection keep repeat orders aligned with required dimensions and installation needs.'],
      ['Dependable Supply', 'Organized production and a broad model range support ongoing and mixed-model purchasing.'],
      ['Ready for Your Market', 'OEM/ODM support, export packaging and direct communication make international orders easier.'],
    ],
  },
  zh: {
    label: '海外采购保障',
    title: '为稳定的重复订单而制造',
    intro: '支持 OEM 项目的同一套生产与质控，也让海外采购商能够更放心地持续采购。',
    points: [
      ['可靠匹配', '受控加工与检测，让重复订单持续符合所需尺寸和安装要求。'],
      ['稳定供应', '规范生产管理与丰富型号，支持长期采购及多型号订单。'],
      ['适合海外市场', 'OEM/ODM、出口包装和直接沟通，让国际采购更简单。'],
    ],
  },
  ru: {
    label: 'Для международных покупателей',
    title: 'Создано для стабильных повторных заказов',
    intro: 'Производственные и контрольные процессы для OEM также помогают зарубежным покупателям закупать с уверенностью.',
    points: [
      ['Надёжная совместимость', 'Обработка и проверка поддерживают стабильные размеры и установку в повторных заказах.'],
      ['Стабильные поставки', 'Организованное производство и широкий модельный ряд подходят для регулярных и смешанных заказов.'],
      ['Готово для вашего рынка', 'OEM/ODM, экспортная упаковка и прямое общение упрощают международные заказы.'],
    ],
  },
  ar: {
    label: 'ما يتوقعه المشترون',
    title: 'مصمّم للطلبات المتكررة الموثوقة',
    intro: 'تساعد عمليات الإنتاج وضبط الجودة المخصصة لمشاريع OEM المشترين الدوليين على الشراء بثقة.',
    points: [
      ['توافق موثوق', 'تحافظ المعالجة والفحوصات المنضبطة على الأبعاد ومتطلبات التركيب في الطلبات المتكررة.'],
      ['توريد مستقر', 'يدعم الإنتاج المنظم ومجموعة الطرازات الواسعة الطلبات المستمرة والمتنوعة.'],
      ['جاهز لسوقك', 'يسهّل دعم OEM/ODM وتغليف التصدير والتواصل المباشر الطلبات الدولية.'],
    ],
  },
  es: {
    label: 'Lo que esperan los compradores',
    title: 'Diseñado para pedidos repetidos fiables',
    intro: 'Los mismos controles que respaldan los proyectos OEM ayudan a los compradores internacionales a abastecerse con confianza.',
    points: [
      ['Ajuste confiable', 'El mecanizado y la inspección controlados mantienen las dimensiones y el montaje en pedidos repetidos.'],
      ['Suministro estable', 'La producción organizada y una amplia gama de modelos permiten compras continuas y combinadas.'],
      ['Listo para su mercado', 'OEM/ODM, embalaje de exportación y comunicación directa facilitan los pedidos internacionales.'],
    ],
  },
  pt: {
    label: 'O que os compradores podem esperar',
    title: 'Feito para pedidos repetidos confiáveis',
    intro: 'Os mesmos controles que apoiam projetos OEM ajudam compradores internacionais a comprar com confiança.',
    points: [
      ['Encaixe confiável', 'Usinagem e inspeção controladas mantêm as dimensões e a instalação em pedidos repetidos.'],
      ['Fornecimento estável', 'Produção organizada e uma ampla linha de modelos apoiam compras contínuas e combinadas.'],
      ['Pronto para seu mercado', 'OEM/ODM, embalagem de exportação e comunicação direta facilitam pedidos internacionais.'],
    ],
  },
  fr: {
    label: 'Ce que les acheteurs peuvent attendre',
    title: 'Conçu pour des commandes récurrentes fiables',
    intro: 'Les mêmes contrôles qui soutiennent les projets OEM aident les acheteurs internationaux à s’approvisionner en confiance.',
    points: [
      ['Montage fiable', 'Un usinage et un contrôle maîtrisés assurent les dimensions et le montage à chaque commande.'],
      ['Approvisionnement stable', 'Une production organisée et une large gamme de modèles facilitent les achats réguliers et mixtes.'],
      ['Prêt pour votre marché', 'OEM/ODM, emballage export et communication directe simplifient les commandes internationales.'],
    ],
  },
} as const;

export default function AdvantagesSection() {
  const { lang, t } = useLanguage();
  const buyerCopy = buyerPromiseCopy[lang];

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
        <div className="advantages-buyer-strip fade-up">
          <div className="advantages-buyer-heading">
            <div className="section-label">{buyerCopy.label}</div>
            <h3>{buyerCopy.title}</h3>
            <p>{buyerCopy.intro}</p>
          </div>
          <div className="advantages-buyer-points">
            {buyerCopy.points.map(([title, text], index) => (
              <div className="advantages-buyer-point" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
