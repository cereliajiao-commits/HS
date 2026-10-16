'use client';

import { useLanguage } from './LanguageProvider';

const content = {
  en: {
    label: 'OE-Grade Manufacturing',
    title: 'Consistent Parts for Every Working Day',
    intro: 'Hongsheng manufactures for OEM/ODM programs and the independent aftermarket. Defined drawings, materials and process controls help us deliver OE-grade fit, stable repeat-order quality and dependable supply for heavy-duty vehicles.',
    points: [
      ['Reliable Fitment', 'Controlled machining and inspection help every repeat order match the required dimensions.'],
      ['Dependable Supply', 'Organized production and 200+ product models support ongoing and mixed-model purchasing.'],
      ['Ready for Your Market', 'OEM/ODM support, export packaging and direct communication make international orders easier.'],
    ],
  },
  zh: {
    label: '按 OE 级要求制造',
    title: '稳定品质，保障每一个工作日',
    intro: '宏盛面向 OEM/ODM 项目及独立售后市场供货。我们依据明确的图纸、材料和工艺要求组织生产，以 OE 级安装匹配、稳定的重复订单品质和可靠供应，支持重型车辆持续运营。',
    points: [
      ['可靠匹配', '通过受控加工与检测，让重复订单持续符合所需尺寸和安装要求。'],
      ['稳定供应', '规范生产管理与 200 多种产品型号，支持长期采购及多型号订单。'],
      ['适合海外市场', 'OEM/ODM、出口包装和直接沟通，让国际采购更简单。'],
    ],
  },
  ru: {
    label: 'Производство уровня OE',
    title: 'Стабильные детали для каждого рабочего дня',
    intro: 'Hongsheng производит детали для программ OEM/ODM и независимого рынка запчастей. Чертежи, материалы и контроль процессов обеспечивают посадку уровня OE, стабильность повторных заказов и надежные поставки.',
    points: [
      ['Надежная совместимость', 'Контролируемая обработка и проверка обеспечивают стабильные размеры повторных заказов.'],
      ['Стабильные поставки', 'Организованное производство и более 200 моделей поддерживают регулярные и смешанные заказы.'],
      ['Готово для вашего рынка', 'OEM/ODM, экспортная упаковка и прямое общение упрощают международные закупки.'],
    ],
  },
  ar: {
    label: 'تصنيع بمستوى OE',
    title: 'قطع ثابتة الجودة لكل يوم عمل',
    intro: 'تصنّع هونغشنغ لبرامج OEM/ODM ولسوق قطع الغيار المستقل. تساعد الرسومات والمواد وضوابط العمليات المحددة على توفير توافق بمستوى OE وجودة ثابتة للطلبات المتكررة وتوريد موثوق.',
    points: [
      ['توافق موثوق', 'تساعد المعالجة والفحص المنضبطان على ثبات الأبعاد في الطلبات المتكررة.'],
      ['توريد مستقر', 'إنتاج منظم وأكثر من 200 طراز يدعمان الطلبات المستمرة والمتنوعة.'],
      ['جاهزة لسوقك', 'دعم OEM/ODM وتغليف التصدير والتواصل المباشر تسهّل الشراء الدولي.'],
    ],
  },
  es: {
    label: 'Fabricación de nivel OE',
    title: 'Piezas consistentes para cada jornada',
    intro: 'Hongsheng fabrica para programas OEM/ODM y el mercado independiente de recambios. Planos, materiales y controles de proceso definidos permiten ofrecer ajuste de nivel OE, calidad constante y suministro fiable.',
    points: [
      ['Ajuste confiable', 'El mecanizado y la inspección controlados mantienen las dimensiones en pedidos repetidos.'],
      ['Suministro estable', 'La producción organizada y más de 200 modelos permiten compras continuas y combinadas.'],
      ['Listo para su mercado', 'OEM/ODM, embalaje de exportación y comunicación directa facilitan los pedidos internacionales.'],
    ],
  },
  pt: {
    label: 'Fabricação de nível OE',
    title: 'Peças consistentes para cada dia de trabalho',
    intro: 'A Hongsheng fabrica para programas OEM/ODM e para o mercado independente de reposição. Desenhos, materiais e controles de processo definidos ajudam a garantir encaixe de nível OE, qualidade consistente e fornecimento confiável.',
    points: [
      ['Encaixe confiável', 'Usinagem e inspeção controladas mantêm as dimensões consistentes em pedidos repetidos.'],
      ['Fornecimento estável', 'Produção organizada e mais de 200 modelos apoiam compras contínuas e combinadas.'],
      ['Pronto para seu mercado', 'OEM/ODM, embalagem de exportação e comunicação direta facilitam pedidos internacionais.'],
    ],
  },
  fr: {
    label: 'Fabrication de niveau OE',
    title: 'Des pièces constantes pour chaque journée de travail',
    intro: 'Hongsheng fabrique pour les programmes OEM/ODM et le marché indépendant de la rechange. Des plans, matériaux et procédés définis assurent un montage de niveau OE, une qualité constante et un approvisionnement fiable.',
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
