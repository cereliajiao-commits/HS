'use client';

import { useLanguage } from './LanguageProvider';

const content = {
  en: {
    label: 'OE-Grade Manufacturing',
    title: 'Consistent Parts for Every Working Day',
    intro: 'Hongsheng manufactures for OEM/ODM programs and the independent aftermarket. Defined drawings, materials and process controls help us deliver OE-grade fit, stable repeat-order quality and dependable supply for heavy-duty vehicles.',
    points: [
      ['Reliable Fitment', 'Controlled machining and inspection help every repeat order match the required dimensions.'],
      ['Dependable Supply', 'Organized production and 1000+ product models support ongoing and mixed-model purchasing.'],
      ['Ready for Your Market', 'OEM/ODM support, export packaging and direct communication make international orders easier.'],
    ],
  },
  zh: {
    label: '按 OE 级要求制造',
    title: '稳定品质，保障每一个工作日',
    intro: '宏盛面向 OEM/ODM 项目及独立售后市场供货。我们依据明确的图纸、材料和工艺要求组织生产，以 OE 级安装匹配、稳定的重复订单品质和可靠供应，支持重型车辆持续运营。',
    points: [
      ['可靠匹配', '通过受控加工与检测，让重复订单持续符合所需尺寸和安装要求。'],
      ['稳定供应', '规范生产管理与 1000 多种产品型号，支持长期采购及多型号订单。'],
      ['适合海外市场', 'OEM/ODM、出口包装和直接沟通，让国际采购更简单。'],
    ],
  },
  ru: {
    label: 'Производство уровня OE',
    title: 'Стабильные детали для каждого рабочего дня',
    intro: 'Hongsheng производит детали для программ OEM/ODM и независимого рынка запчастей. Чертежи, материалы и контроль процессов обеспечивают посадку уровня OE, стабильность повторных заказов и надежные поставки.',
    points: [
      ['Надежная совместимость', 'Контролируемая обработка и проверка обеспечивают стабильные размеры повторных заказов.'],
      ['Стабильные поставки', 'Организованное производство и более 1000 моделей поддерживают регулярные и смешанные заказы.'],
      ['Готово для вашего рынка', 'OEM/ODM, экспортная упаковка и прямое общение упрощают международные закупки.'],
    ],
  },
  ar: {
    label: 'تصنيع بمستوى OE',
    title: 'قطع ثابتة الجودة لكل يوم عمل',
    intro: 'تصنّع هونغشنغ لبرامج OEM/ODM ولسوق قطع الغيار المستقل. تساعد الرسومات والمواد وضوابط العمليات المحددة على توفير توافق بمستوى OE وجودة ثابتة للطلبات المتكررة وتوريد موثوق.',
    points: [
      ['توافق موثوق', 'تساعد المعالجة والفحص المنضبطان على ثبات الأبعاد في الطلبات المتكررة.'],
      ['توريد مستقر', 'إنتاج منظم وأكثر من 1000 طراز يدعمان الطلبات المستمرة والمتنوعة.'],
      ['جاهزة لسوقك', 'دعم OEM/ODM وتغليف التصدير والتواصل المباشر تسهّل الشراء الدولي.'],
    ],
  },
  es: {
    label: 'Fabricación de nivel OE',
    title: 'Piezas consistentes para cada jornada',
    intro: 'Hongsheng fabrica para programas OEM/ODM y el mercado independiente de recambios. Planos, materiales y controles de proceso definidos permiten ofrecer ajuste de nivel OE, calidad constante y suministro fiable.',
    points: [
      ['Ajuste confiable', 'El mecanizado y la inspección controlados mantienen las dimensiones en pedidos repetidos.'],
      ['Suministro estable', 'La producción organizada y más de 1000 modelos permiten compras continuas y combinadas.'],
      ['Listo para su mercado', 'OEM/ODM, embalaje de exportación y comunicación directa facilitan los pedidos internacionales.'],
    ],
  },
  pt: {
    label: 'Fabricação de nível OE',
    title: 'Peças consistentes para cada dia de trabalho',
    intro: 'A Hongsheng fabrica para programas OEM/ODM e para o mercado independente de reposição. Desenhos, materiais e controles de processo definidos ajudam a garantir encaixe de nível OE, qualidade consistente e fornecimento confiável.',
    points: [
      ['Encaixe confiável', 'Usinagem e inspeção controladas mantêm as dimensões consistentes em pedidos repetidos.'],
      ['Fornecimento estável', 'Produção organizada e mais de 1000 modelos apoiam compras contínuas e combinadas.'],
      ['Pronto para seu mercado', 'OEM/ODM, embalagem de exportação e comunicação direta facilitam pedidos internacionais.'],
    ],
  },
  fr: {
    label: 'Fabrication de niveau OE',
    title: 'Des pièces constantes pour chaque journée de travail',
    intro: 'Hongsheng fabrique pour les programmes OEM/ODM et le marché indépendant de la rechange. Des plans, matériaux et procédés définis assurent un montage de niveau OE, une qualité constante et un approvisionnement fiable.',
    points: [
      ['Montage fiable', 'Un usinage et un contrôle maîtrisés assurent des dimensions constantes à chaque commande.'],
      ['Approvisionnement stable', 'Une production organisée et plus de 1000 modèles facilitent les achats réguliers et mixtes.'],
      ['Prêt pour votre marché', 'OEM/ODM, emballage export et communication directe simplifient les commandes internationales.'],
    ],
  },
} as const;

const additionalContent: Partial<Record<'ja' | 'ko' | 'de' | 'it' | 'nl' | 'tr' | 'pl' | 'id', { label: string; title: string; intro: string; points: Array<[string, string]> }>> = {
  ja: { label: 'OE級製造', title: '毎日の稼働を支える安定品質', intro: 'HONGSHENGはOEM/ODMおよびアフターマーケット向けに、図面・材料・工程を管理して部品を供給します。', points: [['確かな適合', '加工と検査で寸法と取付の再現性を維持します。'], ['安定供給', '整理された生産と幅広いモデルで継続注文に対応します。'], ['海外市場対応', 'OEM/ODM、輸出梱包、直接コミュニケーションを提供します。']] },
  ko: { label: 'OE급 제조', title: '매일의 운행을 위한 안정적인 품질', intro: 'HONGSHENG은 OEM/ODM 및 애프터마켓을 위해 도면, 소재와 공정을 관리하여 부품을 공급합니다.', points: [['정확한 장착', '가공과 검사를 통해 치수와 장착의 일관성을 유지합니다.'], ['안정적인 공급', '체계적인 생산과 폭넓은 모델로 반복 주문을 지원합니다.'], ['해외 시장 대응', 'OEM/ODM, 수출 포장 및 직접 소통을 제공합니다.']] },
  de: { label: 'Fertigung auf OE-Niveau', title: 'Konstante Qualität für jeden Arbeitstag', intro: 'HONGSHENG fertigt für OEM/ODM und den Ersatzteilmarkt mit kontrollierten Zeichnungen, Materialien und Prozessen.', points: [['Zuverlässige Passform', 'Bearbeitung und Prüfung halten Maße und Montage bei Folgeaufträgen konstant.'], ['Stabile Versorgung', 'Organisierte Fertigung und viele Modelle unterstützen wiederkehrende Bestellungen.'], ['Bereit für Ihren Markt', 'OEM/ODM, Exportverpackung und direkte Kommunikation erleichtern internationale Aufträge.']] },
  it: { label: 'Produzione a livello OE', title: 'Qualità costante per ogni giornata di lavoro', intro: 'HONGSHENG produce per programmi OEM/ODM e aftermarket con disegni, materiali e processi controllati.', points: [['Compatibilità affidabile', 'Lavorazione e controllo mantengono dimensioni e montaggio costanti.'], ['Fornitura stabile', 'Produzione organizzata e molti modelli supportano ordini ricorrenti.'], ['Pronti per il tuo mercato', 'OEM/ODM, imballaggio export e comunicazione diretta semplificano gli ordini.']] },
  nl: { label: 'Productie op OE-niveau', title: 'Constante kwaliteit voor elke werkdag', intro: 'HONGSHENG produceert voor OEM/ODM en de aftermarket met gecontroleerde tekeningen, materialen en processen.', points: [['Betrouwbare pasvorm', 'Bewerking en controle houden maten en montage bij herhaalorders constant.'], ['Stabiele levering', 'Georganiseerde productie en veel modellen ondersteunen terugkerende orders.'], ['Klaar voor uw markt', 'OEM/ODM, exportverpakking en directe communicatie maken internationale orders eenvoudiger.']] },
  tr: { label: 'OE seviyesinde üretim', title: 'Her iş günü için tutarlı kalite', intro: 'HONGSHENG, kontrollü çizim, malzeme ve süreçlerle OEM/ODM ve satış sonrası pazar için üretim yapar.', points: [['Güvenilir uyum', 'İşleme ve kontrol, tekrarlı siparişlerde ölçü ve montajı korur.'], ['İstikrarlı tedarik', 'Düzenli üretim ve geniş model yelpazesi sürekli siparişleri destekler.'], ['Pazarınıza hazır', 'OEM/ODM, ihracat ambalajı ve doğrudan iletişim sunarız.']] },
  pl: { label: 'Produkcja na poziomie OE', title: 'Stała jakość na każdy dzień pracy', intro: 'HONGSHENG produkuje dla OEM/ODM i rynku wtórnego, kontrolując rysunki, materiały i procesy.', points: [['Pewne dopasowanie', 'Obróbka i kontrola utrzymują wymiary oraz montaż w zamówieniach powtarzalnych.'], ['Stabilne dostawy', 'Zorganizowana produkcja i szeroka gama modeli wspierają stałe zamówienia.'], ['Gotowi na Twój rynek', 'OEM/ODM, opakowanie eksportowe i bezpośrednia komunikacja ułatwiają zakup.']] },
  id: { label: 'Produksi setara OE', title: 'Kualitas konsisten untuk setiap hari kerja', intro: 'HONGSHENG memproduksi untuk OEM/ODM dan aftermarket dengan gambar, bahan, serta proses yang terkontrol.', points: [['Kecocokan andal', 'Pemesinan dan pemeriksaan menjaga ukuran serta pemasangan pada pesanan berulang.'], ['Pasokan stabil', 'Produksi teratur dan banyak model mendukung pesanan berkelanjutan.'], ['Siap untuk pasar Anda', 'OEM/ODM, kemasan ekspor, dan komunikasi langsung memudahkan pesanan internasional.']] },
};

export default function BuyerStorySection() {
  const { lang } = useLanguage();
  const copy = ({ ...content, ...additionalContent } as unknown as Partial<Record<typeof lang, (typeof content.en)>>)[lang] ?? content.en;

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
