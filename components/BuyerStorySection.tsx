'use client';

import { useLanguage } from './LanguageProvider';

const content = {
  en: {
    label: 'Built for Uptime',
    title: 'The Parts Behind Every Working Day',
    intro: 'Fleet operators, repair businesses and distributors all need the same thing: the right part, made consistently and delivered when the job depends on it. Hongsheng supports the people who keep heavy-duty vehicles working.',
    points: [
      ['Reliable Fitment', 'Controlled machining and inspection help every repeat order match the required dimensions.'],
      ['Dependable Supply', 'Organized production and 200+ product models support ongoing and mixed-model purchasing.'],
      ['Ready for Your Market', 'OEM/ODM support, export packaging and direct communication make international orders easier.'],
    ],
  },
  zh: {
    label: '为稳定运营而制造',
    title: '让每一辆重卡持续创造价值',
    intro: '车队运营商、维修企业和经销商都需要同一件事：型号正确、品质稳定，并在业务需要时按计划交付。宏盛专注于支持每一位保障重型车辆正常运行的人。',
    points: [
      ['可靠匹配', '通过受控加工与检测，让重复订单持续符合所需尺寸和安装要求。'],
      ['稳定供应', '规范生产管理与 200 多种产品型号，支持长期采购及多型号订单。'],
      ['适合海外市场', 'OEM/ODM、出口包装和直接沟通，让国际采购更简单。'],
    ],
  },
  ru: {
    label: 'Для бесперебойной работы',
    title: 'Детали, которые поддерживают каждый рабочий день',
    intro: 'Автопаркам, ремонтным компаниям и дистрибьюторам нужны правильные детали, стабильное качество и своевременные поставки. Hongsheng помогает тем, кто поддерживает тяжелую технику в работе.',
    points: [
      ['Надежная совместимость', 'Контролируемая обработка и проверка обеспечивают стабильные размеры повторных заказов.'],
      ['Стабильные поставки', 'Организованное производство и более 200 моделей поддерживают регулярные и смешанные заказы.'],
      ['Готово для вашего рынка', 'OEM/ODM, экспортная упаковка и прямое общение упрощают международные закупки.'],
    ],
  },
  ar: {
    label: 'مصممة لاستمرار العمل',
    title: 'قطع تدعم كل يوم عمل',
    intro: 'تحتاج أساطيل النقل وورش الصيانة والموزعون إلى القطعة الصحيحة والجودة الثابتة والتسليم في الموعد. تدعم هونغشنغ كل من يحافظ على عمل المركبات الثقيلة.',
    points: [
      ['توافق موثوق', 'تساعد المعالجة والفحص المنضبطان على ثبات الأبعاد في الطلبات المتكررة.'],
      ['توريد مستقر', 'إنتاج منظم وأكثر من 200 طراز يدعمان الطلبات المستمرة والمتنوعة.'],
      ['جاهزة لسوقك', 'دعم OEM/ODM وتغليف التصدير والتواصل المباشر تسهّل الشراء الدولي.'],
    ],
  },
  es: {
    label: 'Fabricado para seguir en marcha',
    title: 'Las piezas detrás de cada jornada de trabajo',
    intro: 'Flotas, talleres y distribuidores necesitan la pieza correcta, calidad constante y entrega a tiempo. Hongsheng apoya a quienes mantienen los vehículos pesados en funcionamiento.',
    points: [
      ['Ajuste confiable', 'El mecanizado y la inspección controlados mantienen las dimensiones en pedidos repetidos.'],
      ['Suministro estable', 'La producción organizada y más de 200 modelos permiten compras continuas y combinadas.'],
      ['Listo para su mercado', 'OEM/ODM, embalaje de exportación y comunicación directa facilitan los pedidos internacionales.'],
    ],
  },
  pt: {
    label: 'Feito para manter em movimento',
    title: 'As peças por trás de cada dia de trabalho',
    intro: 'Frotas, oficinas e distribuidores precisam da peça certa, qualidade consistente e entrega pontual. A Hongsheng apoia quem mantém veículos pesados em operação.',
    points: [
      ['Encaixe confiável', 'Usinagem e inspeção controladas mantêm as dimensões consistentes em pedidos repetidos.'],
      ['Fornecimento estável', 'Produção organizada e mais de 200 modelos apoiam compras contínuas e combinadas.'],
      ['Pronto para seu mercado', 'OEM/ODM, embalagem de exportação e comunicação direta facilitam pedidos internacionais.'],
    ],
  },
  fr: {
    label: 'Conçu pour rester opérationnel',
    title: 'Les pièces qui soutiennent chaque journée de travail',
    intro: 'Flottes, réparateurs et distributeurs ont besoin de la bonne pièce, d’une qualité constante et d’une livraison ponctuelle. Hongsheng accompagne ceux qui maintiennent les véhicules industriels en activité.',
    points: [
      ['Montage fiable', 'Un usinage et un contrôle maîtrisés assurent des dimensions constantes à chaque commande.'],
      ['Approvisionnement stable', 'Une production organisée et plus de 200 modèles facilitent les achats réguliers et mixtes.'],
      ['Prêt pour votre marché', 'OEM/ODM, emballage export et communication directe simplifient les commandes internationales.'],
    ],
  },
} as const;

export default function BuyerStorySection() {
  const { lang } = useLanguage();
  const copy = content[lang];

  return (
    <section className="buyer-story">
      <div className="container">
        <div className="buyer-story-card">
          <div className="buyer-story-heading fade-up">
            <div className="section-label">{copy.label}</div>
            <h2>{copy.title}</h2>
          </div>
          <div className="buyer-story-content fade-up stagger-1">
            <p className="buyer-story-intro">{copy.intro}</p>
            <div className="buyer-story-points">
              {copy.points.map(([title, text], index) => (
                <div className="buyer-story-point" key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{title}</strong><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
