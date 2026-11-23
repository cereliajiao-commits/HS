'use client';

import { useLanguage, type Language } from './LanguageProvider';

const content = {
  en: {
    label: 'Inside Hongsheng',
    title: 'From Production Floor to Export-Ready Parts',
    intro: 'Overseas buyers need more than a product catalog. They need confidence that repeat orders will match specifications, fit correctly, and arrive protected. Our manufacturing, inspection, warehousing, and packing workflow is built around those expectations.',
    gateAlt: 'Entrance of Hengshui Hongsheng Auto Parts factory',
    stats: [
      ['1996', 'Manufacturing since'],
      ['10', 'Production lines'],
      ['3', 'Extrusion lines'],
      ['CNC', 'Precision machining'],
      ['ISO 9001', 'Quality system'],
    ],
    cards: [
      {
        title: 'Production Capacity for Repeat Orders',
        text: 'Dedicated equipment and organized in-process handling support volume orders across truck, agricultural, and construction machinery product families.',
        image: '/images/company/production-workshop.jpg?v=20261016-2',
      },
      {
        title: 'Precision Machining',
        text: 'Controlled CNC turning and grinding help maintain critical geometry, surface finish, and reliable fitment.',
        image: '/images/company/precision-machining.jpg',
      },
      {
        title: 'Dimensional Inspection',
        text: 'Critical dimensions and functional features are checked before products move to packing and shipment.',
        image: '/images/company/quality-inspection.jpg',
      },
      {
        title: 'Warehouse & Order Control',
        text: 'Products are organized by model and order stage to support repeat purchasing and mixed-model orders.',
        image: '/images/company/warehouse.jpg?v=20261016-2',
      },
      {
        title: 'Export-Ready Packaging',
        text: 'Heavy components are packed in reinforced wooden cases to reduce movement and damage during international transport.',
        image: '/images/company/export-packaging.jpg?v=20261016-2',
      },
    ],
    buyerTitle: 'What international buyers can expect',
    buyerPoints: ['Consistent fit and dimensions', 'Clear production communication', 'Protected international delivery'],
  },
  zh: {
    label: '走进宏盛',
    title: '从生产车间到出口交付',
    intro: '海外采购商需要的不只是产品目录，更需要确认重复订单能够符合规格、安装匹配，并在运输中得到妥善保护。我们的生产、检测、仓储与包装流程，正是围绕这些核心要求建立。',
    gateAlt: '衡水宏盛汽车配件有限公司工厂入口',
    stats: [
      ['1996', '开始专业制造'],
      ['10', '条生产线'],
      ['3', '条挤压生产线'],
      ['CNC', '精密加工'],
      ['ISO 9001', '质量管理体系'],
    ],
    cards: [
      {
        title: '稳定承接重复与批量订单',
        text: '专业加工设备与规范的在制品管理，可支持重卡、农业机械和工程机械多类零部件的批量生产。',
        image: '/images/company/production-workshop.jpg?v=20261016-2',
      },
      {
        title: '精密机械加工',
        text: '通过受控的 CNC 车削与磨削，保证关键尺寸、表面质量和安装匹配。',
        image: '/images/company/precision-machining.jpg',
      },
      {
        title: '尺寸与质量检测',
        text: '关键尺寸和功能部位在包装发货前进行检测，降低不合格产品流入订单的风险。',
        image: '/images/company/quality-inspection.jpg',
      },
      {
        title: '仓储与订单管理',
        text: '产品按型号和订单阶段有序管理，便于重复采购和多型号混装订单。',
        image: '/images/company/warehouse.jpg?v=20261016-2',
      },
      {
        title: '出口运输包装',
        text: '重型零部件采用加固木箱包装，减少国际运输过程中的移动、磕碰和损坏。',
        image: '/images/company/export-packaging.jpg?v=20261016-2',
      },
    ],
    buyerTitle: '海外采购商可以获得',
    buyerPoints: ['稳定的尺寸与安装匹配', '清晰及时的生产沟通', '适合国际运输的包装保护'],
  },
  ru: {
    label: 'Внутри Hongsheng',
    title: 'От производственного цеха до готовых к экспорту деталей',
    intro: 'Зарубежным покупателям нужен не только каталог, но и уверенность в стабильности размеров, точной совместимости повторных заказов и надежной защите при перевозке. Наши процессы производства, контроля, хранения и упаковки созданы именно для этого.',
    gateAlt: 'Вход на завод Hengshui Hongsheng Auto Parts',
    stats: [
      ['1996', 'Производство с'],
      ['10', 'Производственных линий'],
      ['3', 'Экструзионные линии'],
      ['CNC', 'Прецизионная обработка'],
      ['ISO 9001', 'Система качества'],
    ],
    cards: [
      { title: 'Производственные мощности для повторных заказов', text: 'Специализированное оборудование и организованный контроль производства поддерживают крупные заказы для грузовиков, сельхозтехники и строительной техники.', image: '/images/company/production-workshop.jpg?v=20261016-2' },
      { title: 'Прецизионная механообработка', text: 'Контролируемые операции CNC и шлифование помогают сохранять критические размеры, качество поверхности и надежную совместимость.', image: '/images/company/precision-machining.jpg' },
      { title: 'Контроль размеров', text: 'Критические размеры и функциональные элементы проверяются до упаковки и отгрузки.', image: '/images/company/quality-inspection.jpg' },
      { title: 'Склад и контроль заказов', text: 'Изделия организованы по моделям и этапам заказа, что упрощает повторные и смешанные поставки.', image: '/images/company/warehouse.jpg?v=20261016-2' },
      { title: 'Упаковка для экспорта', text: 'Тяжелые детали упаковываются в усиленные деревянные ящики для снижения риска перемещения и повреждений при международной перевозке.', image: '/images/company/export-packaging.jpg?v=20261016-2' },
    ],
    buyerTitle: 'Что получают международные покупатели',
    buyerPoints: ['Стабильная совместимость и размеры', 'Понятная коммуникация по производству', 'Защищенная международная доставка'],
  },
  es: {
    label: 'Dentro de Hongsheng',
    title: 'Del taller de producción a piezas listas para exportar',
    intro: 'Los compradores internacionales necesitan más que un catálogo: necesitan confiar en que los pedidos repetidos mantendrán las especificaciones, encajarán correctamente y llegarán bien protegidos. Nuestro flujo de producción, inspección, almacenamiento y embalaje está diseñado para cumplir esas expectativas.',
    gateAlt: 'Entrada de la fábrica de repuestos de automóviles Hengshui Hongsheng',
    stats: [['1996', 'Fabricando desde'], ['10', 'Líneas de producción'], ['3', 'Líneas de extrusión'], ['CNC', 'Mecanizado de precisión'], ['ISO 9001', 'Sistema de calidad']],
    cards: [
      { title: 'Capacidad para pedidos repetidos', text: 'Equipos especializados y una gestión ordenada de la producción permiten atender pedidos de gran volumen para camiones, maquinaria agrícola y equipos de construcción.', image: '/images/company/production-workshop.jpg?v=20261016-2' },
      { title: 'Mecanizado de precisión', text: 'El torneado y rectificado CNC controlados ayudan a mantener la geometría crítica, el acabado superficial y un montaje fiable.', image: '/images/company/precision-machining.jpg' },
      { title: 'Inspección dimensional', text: 'Las dimensiones críticas y las funciones principales se revisan antes del embalaje y el envío.', image: '/images/company/quality-inspection.jpg' },
      { title: 'Almacén y control de pedidos', text: 'Los productos se organizan por modelo y fase del pedido para facilitar compras repetidas y pedidos mixtos.', image: '/images/company/warehouse.jpg?v=20261016-2' },
      { title: 'Embalaje listo para exportación', text: 'Las piezas pesadas se embalan en cajas de madera reforzadas para reducir desplazamientos y daños durante el transporte internacional.', image: '/images/company/export-packaging.jpg?v=20261016-2' },
    ],
    buyerTitle: 'Lo que pueden esperar los compradores internacionales',
    buyerPoints: ['Dimensiones y ajuste constantes', 'Comunicación clara durante la producción', 'Entrega internacional protegida'],
  },
  pt: {
    label: 'Por dentro da Hongsheng',
    title: 'Do chão de fábrica às peças prontas para exportação',
    intro: 'Os compradores internacionais precisam de mais do que um catálogo: precisam ter confiança de que os pedidos repetidos manterão as especificações, terão o encaixe correto e chegarão bem protegidos. Nosso processo de produção, inspeção, armazenagem e embalagem foi criado para atender a essas expectativas.',
    gateAlt: 'Entrada da fábrica de autopeças Hengshui Hongsheng',
    stats: [['1996', 'Fabricando desde'], ['10', 'Linhas de produção'], ['3', 'Linhas de extrusão'], ['CNC', 'Usinagem de precisão'], ['ISO 9001', 'Sistema de qualidade']],
    cards: [
      { title: 'Capacidade para pedidos recorrentes', text: 'Equipamentos dedicados e um fluxo de produção organizado atendem pedidos em volume para caminhões, máquinas agrícolas e equipamentos de construção.', image: '/images/company/production-workshop.jpg?v=20261016-2' },
      { title: 'Usinagem de precisão', text: 'Torneamento e retificação CNC controlados ajudam a manter a geometria crítica, o acabamento superficial e um encaixe confiável.', image: '/images/company/precision-machining.jpg' },
      { title: 'Inspeção dimensional', text: 'As dimensões críticas e as funções principais são verificadas antes da embalagem e do embarque.', image: '/images/company/quality-inspection.jpg' },
      { title: 'Armazém e controle de pedidos', text: 'Os produtos são organizados por modelo e etapa do pedido para facilitar compras recorrentes e pedidos mistos.', image: '/images/company/warehouse.jpg?v=20261016-2' },
      { title: 'Embalagem pronta para exportação', text: 'Peças pesadas são embaladas em caixas de madeira reforçadas para reduzir movimentação e danos durante o transporte internacional.', image: '/images/company/export-packaging.jpg?v=20261016-2' },
    ],
    buyerTitle: 'O que os compradores internacionais podem esperar',
    buyerPoints: ['Encaixe e dimensões consistentes', 'Comunicação clara sobre a produção', 'Entrega internacional protegida'],
  },
  fr: {
    label: 'Au cœur de Hongsheng',
    title: 'De l’atelier de production aux pièces prêtes à exporter',
    intro: 'Les acheteurs internationaux ont besoin de plus qu’un catalogue : ils doivent pouvoir compter sur des commandes répétées conformes aux spécifications, un montage correct et une livraison bien protégée. Notre organisation de production, de contrôle, de stockage et d’emballage répond à ces attentes.',
    gateAlt: 'Entrée de l’usine de pièces automobiles Hengshui Hongsheng',
    stats: [['1996', 'Fabrication depuis'], ['10', 'Lignes de production'], ['3', 'Lignes d’extrusion'], ['CNC', 'Usinage de précision'], ['ISO 9001', 'Système qualité']],
    cards: [
      { title: 'Capacité pour les commandes répétées', text: 'Des équipements dédiés et une organisation maîtrisée permettent de traiter des commandes en volume pour les camions, les machines agricoles et les engins de chantier.', image: '/images/company/production-workshop.jpg?v=20261016-2' },
      { title: 'Usinage de précision', text: 'Le tournage et la rectification CNC contrôlés préservent la géométrie critique, l’état de surface et la fiabilité du montage.', image: '/images/company/precision-machining.jpg' },
      { title: 'Contrôle dimensionnel', text: 'Les dimensions critiques et les fonctions essentielles sont vérifiées avant l’emballage et l’expédition.', image: '/images/company/quality-inspection.jpg' },
      { title: 'Stockage et suivi des commandes', text: 'Les produits sont classés par modèle et par étape de commande pour faciliter les achats récurrents et les commandes mixtes.', image: '/images/company/warehouse.jpg?v=20261016-2' },
      { title: 'Emballage prêt pour l’export', text: 'Les pièces lourdes sont emballées dans des caisses en bois renforcées afin de limiter les mouvements et les dommages pendant le transport international.', image: '/images/company/export-packaging.jpg?v=20261016-2' },
    ],
    buyerTitle: 'Ce que les acheteurs internationaux peuvent attendre',
    buyerPoints: ['Montage et dimensions constants', 'Communication claire sur la production', 'Livraison internationale protégée'],
  },
  ar: {
    label: 'داخل هونغشنغ',
    title: 'من أرضية الإنتاج إلى قطع جاهزة للتصدير',
    intro: 'يحتاج المشترون الدوليون إلى أكثر من كتالوج؛ فهم يريدون ضمان تطابق الطلبات المتكررة مع المواصفات، وسهولة التركيب، ووصول المنتجات محمية جيداً. صُممت عمليات الإنتاج والفحص والتخزين والتغليف لدينا لتحقيق هذه التوقعات.',
    gateAlt: 'مدخل مصنع هنغشوي هونغشنغ لقطع غيار السيارات',
    stats: [['1996', 'نصنّع منذ'], ['10', 'خطوط إنتاج'], ['3', 'خطوط بثق'], ['CNC', 'تشغيل دقيق'], ['ISO 9001', 'نظام الجودة']],
    cards: [
      { title: 'قدرة إنتاجية للطلبات المتكررة', text: 'تدعم المعدات المتخصصة وتنظيم العمل طلبات الكميات الكبيرة للشاحنات والآلات الزراعية ومعدات البناء.', image: '/images/company/production-workshop.jpg?v=20261016-2' },
      { title: 'تشغيل ميكانيكي دقيق', text: 'يساعد الخراطة والطحن باستخدام CNC على الحفاظ على الأبعاد المهمة وجودة السطح وموثوقية الملاءمة.', image: '/images/company/precision-machining.jpg' },
      { title: 'فحص الأبعاد', text: 'يتم فحص الأبعاد المهمة والوظائف الأساسية قبل التغليف والشحن.', image: '/images/company/quality-inspection.jpg' },
      { title: 'المستودع ومراقبة الطلبات', text: 'تُنظم المنتجات حسب الطراز ومرحلة الطلب لتسهيل المشتريات المتكررة والطلبات متعددة الطرازات.', image: '/images/company/warehouse.jpg?v=20261016-2' },
      { title: 'تغليف جاهز للتصدير', text: 'تُعبأ القطع الثقيلة في صناديق خشبية معززة للحد من الحركة والأضرار أثناء النقل الدولي.', image: '/images/company/export-packaging.jpg?v=20261016-2' },
    ],
    buyerTitle: 'ما يمكن للمشترين الدوليين توقعه',
    buyerPoints: ['أبعاد وملاءمة ثابتة', 'تواصل واضح حول الإنتاج', 'تسليم دولي محمي'],
  },
};

const makeFactoryCopy = (copy: {
  label: string; title: string; intro: string; gateAlt: string; stats: string[];
  cards: Array<[string, string]>; buyerTitle: string; buyerPoints: string[];
}): (typeof content.en) => ({
  ...content.en,
  label: copy.label,
  title: copy.title,
  intro: copy.intro,
  gateAlt: copy.gateAlt,
  stats: content.en.stats.map(([value], index) => [value, copy.stats[index]] as [string, string]),
  cards: content.en.cards.map((card, index) => ({ ...card, title: copy.cards[index][0], text: copy.cards[index][1] })),
  buyerTitle: copy.buyerTitle,
  buyerPoints: copy.buyerPoints,
});

const extraFactoryContent: Partial<Record<Language, (typeof content.en)>> = {
  ja: makeFactoryCopy({ label: '宏盛の現場', title: '生産現場から輸出対応部品まで', intro: '海外のお客様が必要とするのはカタログだけではありません。安定した仕様、適合性、輸送保護を支える生産・検査・倉庫・梱包体制を整えています。', gateAlt: '衡水宏盛汽車配件工場入口', stats: ['製造開始', '生産ライン', '押出ライン', '精密加工', '品質システム'], cards: [['リピート・量産注文への対応', '専用設備と工程管理により、トラック、農業機械、建設機械部品の量産に対応します。'], ['精密機械加工', '管理されたCNC旋削と研削で、重要寸法、表面品質、取付精度を維持します。'], ['寸法検査', '梱包・出荷前に重要寸法と機能部位を検査します。'], ['倉庫と注文管理', '製品をモデルと注文段階で管理し、継続購入や混載注文を支援します。'], ['輸出対応梱包', '重量部品を補強木箱に梱包し、国際輸送中の移動や損傷を抑えます。']], buyerTitle: '海外のお客様が期待できること', buyerPoints: ['安定した寸法と適合性', '明確な生産コミュニケーション', '国際輸送に適した保護梱包'] }),
  ko: makeFactoryCopy({ label: 'HONGSHENG 생산 현장', title: '생산 현장에서 수출 준비 부품까지', intro: '해외 구매자에게는 카탈로그 이상의 신뢰가 필요합니다. 반복 주문의 사양, 장착, 운송 보호를 위해 생산·검사·창고·포장 공정을 관리합니다.', gateAlt: '헝수이 HONGSHENG 자동차 부품 공장 입구', stats: ['전문 제조 시작', '생산 라인', '압출 라인', '정밀 가공', '품질 시스템'], cards: [['반복·대량 주문 대응', '전용 설비와 공정 관리를 통해 트럭, 농기계 및 건설 장비 부품의 양산을 지원합니다.'], ['정밀 가공', '관리된 CNC 선삭과 연삭으로 주요 치수, 표면 품질 및 장착 정밀도를 유지합니다.'], ['치수 검사', '포장과 출하 전에 주요 치수와 기능 부위를 검사합니다.'], ['창고 및 주문 관리', '모델과 주문 단계별로 제품을 관리하여 반복 구매와 혼합 주문을 지원합니다.'], ['수출용 포장', '중량 부품을 보강 목상자에 포장하여 국제 운송 중 이동과 손상을 줄입니다.']], buyerTitle: '해외 구매자가 기대할 수 있는 것', buyerPoints: ['일관된 치수와 장착', '명확한 생산 커뮤니케이션', '국제 운송에 적합한 포장'] }),
  de: makeFactoryCopy({ label: 'Einblicke in HONGSHENG', title: 'Von der Produktion bis zum exportfertigen Bauteil', intro: 'Internationale Käufer brauchen mehr als einen Katalog: Sie brauchen verlässliche Spezifikationen, Passform und Transportschutz. Dafür verbinden wir Produktion, Prüfung, Lager und Verpackung.', gateAlt: 'Fabrikzugang von Hengshui Hongsheng Auto Parts', stats: ['Fertigung seit', 'Produktionslinien', 'Extrusionslinien', 'Präzisionsbearbeitung', 'Qualitätssystem'], cards: [['Kapazität für Folgeaufträge', 'Spezialisierte Anlagen und kontrollierte Abläufe unterstützen Serienaufträge für Lkw, Landmaschinen und Baumaschinen.'], ['Präzisionsbearbeitung', 'Kontrolliertes CNC-Drehen und Schleifen sichern Maße, Oberfläche und Passform.'], ['Maßprüfung', 'Kritische Maße und Funktionen werden vor Verpackung und Versand geprüft.'], ['Lager und Auftragskontrolle', 'Produkte werden nach Modell und Auftragsphase organisiert, auch für Mischaufträge.'], ['Exportgerechte Verpackung', 'Schwere Teile werden in verstärkten Holzkisten geschützt transportiert.']], buyerTitle: 'Was internationale Käufer erwarten können', buyerPoints: ['Konstante Maße und Passform', 'Klare Produktionskommunikation', 'Geschützter internationaler Versand'] }),
  it: makeFactoryCopy({ label: 'Dentro HONGSHENG', title: 'Dalla produzione ai ricambi pronti per l’export', intro: 'Gli acquirenti internazionali hanno bisogno di specifiche stabili, compatibilità e protezione durante il trasporto. Produzione, controllo, magazzino e imballaggio lavorano insieme per questo obiettivo.', gateAlt: 'Ingresso della fabbrica Hengshui Hongsheng Auto Parts', stats: ['Produzione dal', 'Linee produttive', 'Linee di estrusione', 'Lavorazione CNC', 'Sistema qualità'], cards: [['Capacità per ordini ricorrenti', 'Attrezzature dedicate e gestione del processo supportano ordini in volume per camion, macchine agricole e da cantiere.'], ['Lavorazione di precisione', 'Tornitura e rettifica CNC controllate mantengono dimensioni, finitura e compatibilità.'], ['Controllo dimensionale', 'Le dimensioni e funzioni critiche sono verificate prima di imballaggio e spedizione.'], ['Magazzino e controllo ordini', 'I prodotti sono organizzati per modello e fase dell’ordine, anche per ordini misti.'], ['Imballaggio per export', 'I componenti pesanti sono protetti in casse di legno rinforzate.']], buyerTitle: 'Cosa possono aspettarsi gli acquirenti internazionali', buyerPoints: ['Dimensioni e compatibilità costanti', 'Comunicazione chiara sulla produzione', 'Spedizione internazionale protetta'] }),
  nl: makeFactoryCopy({ label: 'Binnen HONGSHENG', title: 'Van productievloer tot exportklaar onderdeel', intro: 'Internationale kopers hebben betrouwbare specificaties, pasvorm en transportbescherming nodig. Daarom combineren we productie, inspectie, opslag en verpakking in één beheerst proces.', gateAlt: 'Fabrieksingang van Hengshui Hongsheng Auto Parts', stats: ['Productie sinds', 'Productielijnen', 'Extrusielijnen', 'Precisiebewerking', 'Kwaliteitssysteem'], cards: [['Capaciteit voor herhaalorders', 'Gespecialiseerde apparatuur en procesbeheer ondersteunen serieorders voor vrachtwagens, landbouw- en bouwmachines.'], ['Precisiebewerking', 'Gecontroleerd CNC-draaien en slijpen behouden maten, oppervlakte en pasvorm.'], ['Maatcontrole', 'Kritieke maten en functies worden vóór verpakking en verzending gecontroleerd.'], ['Magazijn en orderbeheer', 'Producten worden per model en orderfase beheerd, ook voor gemengde orders.'], ['Exportverpakking', 'Zware onderdelen worden beschermd in versterkte houten kisten.']], buyerTitle: 'Wat internationale kopers kunnen verwachten', buyerPoints: ['Constante maten en pasvorm', 'Duidelijke productiecommunicatie', 'Beschermde internationale levering'] }),
  tr: makeFactoryCopy({ label: 'HONGSHENG’i tanıyın', title: 'Üretimden ihracata hazır parçalara', intro: 'Uluslararası alıcılar istikrarlı ölçüler, uyum ve taşıma koruması bekler. Üretim, kontrol, depo ve ambalaj süreçlerimizi bu beklentiye göre yönetiyoruz.', gateAlt: 'Hengshui Hongsheng Auto Parts fabrika girişi', stats: ['Üretimden beri', 'Üretim hattı', 'Ekstrüzyon hattı', 'Hassas işleme', 'Kalite sistemi'], cards: [['Tekrarlı sipariş kapasitesi', 'Özel ekipman ve kontrollü süreçler kamyon, tarım ve iş makinesi parçalarının seri üretimini destekler.'], ['Hassas işleme', 'Kontrollü CNC tornalama ve taşlama ölçü, yüzey ve uyumu korur.'], ['Ölçü kontrolü', 'Kritik ölçüler ve işlevler paketleme ve sevkiyat öncesi kontrol edilir.'], ['Depo ve sipariş kontrolü', 'Ürünler model ve sipariş aşamasına göre düzenlenir.'], ['İhracat ambalajı', 'Ağır parçalar güçlendirilmiş ahşap kasalarda korunur.']], buyerTitle: 'Uluslararası alıcıların beklentileri', buyerPoints: ['Tutarlı ölçü ve uyum', 'Açık üretim iletişimi', 'Korumalı uluslararası sevkiyat'] }),
  pl: makeFactoryCopy({ label: 'Poznaj HONGSHENG', title: 'Od hali produkcyjnej do części gotowych do eksportu', intro: 'Międzynarodowi nabywcy potrzebują stabilnych parametrów, dopasowania i ochrony w transporcie. Łączymy produkcję, kontrolę, magazyn i pakowanie w jeden proces.', gateAlt: 'Wejście do fabryki Hengshui Hongsheng Auto Parts', stats: ['Produkcja od', 'Linie produkcyjne', 'Linie wytłaczania', 'Obróbka CNC', 'System jakości'], cards: [['Moce dla zamówień powtarzalnych', 'Dedykowane urządzenia i kontrola procesu obsługują serie części do ciężarówek, maszyn rolniczych i budowlanych.'], ['Obróbka precyzyjna', 'Kontrolowane toczenie i szlifowanie CNC utrzymują wymiary, powierzchnię i dopasowanie.'], ['Kontrola wymiarów', 'Krytyczne wymiary i funkcje są sprawdzane przed pakowaniem i wysyłką.'], ['Magazyn i kontrola zamówień', 'Produkty są porządkowane według modelu i etapu zamówienia.'], ['Opakowanie eksportowe', 'Ciężkie elementy są chronione w wzmocnionych skrzyniach drewnianych.']], buyerTitle: 'Czego mogą oczekiwać nabywcy międzynarodowi', buyerPoints: ['Stałe wymiary i dopasowanie', 'Jasna komunikacja produkcyjna', 'Chroniona dostawa międzynarodowa'] }),
  id: makeFactoryCopy({ label: 'Di dalam HONGSHENG', title: 'Dari lantai produksi hingga komponen siap ekspor', intro: 'Pembeli internasional membutuhkan spesifikasi yang konsisten, kecocokan, dan perlindungan selama pengiriman. Produksi, inspeksi, gudang, dan pengemasan kami dikelola untuk tujuan tersebut.', gateAlt: 'Pintu masuk pabrik Hengshui Hongsheng Auto Parts', stats: ['Memproduksi sejak', 'Lini produksi', 'Lini ekstrusi', 'Pemesinan presisi', 'Sistem kualitas'], cards: [['Kapasitas pesanan berulang', 'Peralatan khusus dan pengelolaan proses mendukung produksi komponen truk, mesin pertanian, dan alat konstruksi.'], ['Pemesinan presisi', 'Pembubutan dan penggerindaan CNC terkontrol menjaga ukuran, permukaan, dan kecocokan.'], ['Pemeriksaan dimensi', 'Dimensi dan fungsi penting diperiksa sebelum pengemasan dan pengiriman.'], ['Gudang dan kontrol pesanan', 'Produk ditata berdasarkan model dan tahap pesanan untuk mendukung pesanan campuran.'], ['Kemasan siap ekspor', 'Komponen berat dilindungi dalam peti kayu yang diperkuat.']], buyerTitle: 'Yang dapat diharapkan pembeli internasional', buyerPoints: ['Ukuran dan kecocokan konsisten', 'Komunikasi produksi yang jelas', 'Pengiriman internasional terlindungi'] }),
};

export default function FactorySection() {
  const { lang } = useLanguage();
  const localizedContent = { ...content, ...extraFactoryContent } as Partial<Record<Language, (typeof content.en)>>;
  const copy = localizedContent[lang] ?? content.en;

  return (
    <section id="factory" className="factory-section">
      <div className="container">
        <div className="factory-header">
          <div className="factory-header-title">
            <div className="section-label">{copy.label}</div>
            <h2 className="section-title">{copy.title}</h2>
          </div>
          <p>{copy.intro}</p>
        </div>

        <div className="factory-gate">
          <img src="/images/company/factory-entrance.jpg" alt={copy.gateAlt} loading="eager" fetchPriority="high" decoding="async" />
        </div>

        <div className="factory-stats">
          {copy.stats.map(([value, label]) => (
            <div className="factory-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="factory-process-grid">
          {copy.cards.map((card, index) => (
            <article
              className={`factory-process-card fade-up ${index === 0 ? 'factory-process-card--wide' : ''}`}
              style={{ transitionDelay: `${Math.min(index, 4) * 80}ms` }}
              key={card.title}
            >
              <div className={`factory-process-image factory-process-image--${index + 1}`}><img src={card.image} alt={card.title} loading="lazy" decoding="async" /></div>
              <div className="factory-process-copy">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="factory-buyer-bar">
          <strong>{copy.buyerTitle}</strong>
          <div>
            {copy.buyerPoints.map((point) => <span key={point}>{point}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
