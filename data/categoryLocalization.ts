import type { Language } from '@/components/LanguageProvider';

type CategoryUiCopy = {
  home: string;
  categories: string;
  browseLabel: string;
  count: (count: number) => string;
  faqLabel: string;
  faqTitle: (name: string) => string;
  quote: string;
  intro: (name: string) => string;
  directoryIntro: string;
  directoryDescription: (name: string) => string;
};

export const categoryUiCopy: Partial<Record<Language, CategoryUiCopy>> = {
  en: {
    home: 'Home',
    categories: 'Product categories',
    browseLabel: 'PRODUCT CATEGORY',
    count: (count) => `${count} cataloged products with OEM/OE reference information`,
    faqLabel: 'FITMENT FAQ',
    faqTitle: (name) => `Questions about ${name.toLowerCase()}`,
    quote: 'Request a catalog or quotation',
    intro: (name) => `Browse ${name.toLowerCase()} by truck platform, OEM/OE reference and application. Confirm key dimensions and mounting details before ordering.`,
    directoryIntro: 'Explore HONGSHENG Auto Parts categories by steering, suspension, axle, driveline and agricultural machinery application. Each category links to products, OEM references and a quote request route.',
    directoryDescription: (name) => `Browse ${name.toLowerCase()} with vehicle applications, OEM/OE references and product details.`,
  },
  zh: {
    home: '首页',
    categories: '产品分类',
    browseLabel: '产品系列',
    count: (count) => `${count} 个产品，含 OEM/OE 参考信息`,
    faqLabel: '适配常见问题',
    faqTitle: (name) => `${name}适配与采购问题`,
    quote: '索取产品目录或报价',
    intro: (name) => `浏览${name}产品，查看车型适配、OEM/OE 参考号和产品详情。下单前请核对关键尺寸与安装方式。`,
    directoryIntro: '按转向、悬挂、车桥、传动和农机应用浏览宏盛汽车配件产品系列。每个系列都连接到产品、OEM 参考号和询价入口。',
    directoryDescription: (name) => `查看${name}的车型适配、OEM/OE 参考号和产品详情。`,
  },
  ru: {
    home: 'Главная',
    categories: 'Категории продукции',
    browseLabel: 'КАТЕГОРИЯ ПРОДУКЦИИ',
    count: (count) => `${count} товаров с OEM/OE справочной информацией`,
    faqLabel: 'ВОПРОСЫ ПО СОВМЕСТИМОСТИ',
    faqTitle: (name) => `Вопросы о продукции «${name}»`,
    quote: 'Запросить каталог или цену',
    intro: (name) => `Просмотрите продукцию «${name}» по платформе грузовика, OEM/OE номеру и применению. Перед заказом проверьте размеры и крепление.`,
    directoryIntro: 'Выберите категории HONGSHENG по рулевому управлению, подвеске, мостам, трансмиссии и сельхозтехнике. В каждой категории доступны товары, OEM номера и запрос цены.',
    directoryDescription: (name) => `Продукция «${name}» с применяемостью, OEM/OE номерами и подробностями.`,
  },
  ar: {
    home: 'الرئيسية',
    categories: 'فئات المنتجات',
    browseLabel: 'فئة المنتج',
    count: (count) => `${count} منتجاً مع مراجع OEM/OE`,
    faqLabel: 'أسئلة التوافق',
    faqTitle: (name) => `أسئلة حول ${name}`,
    quote: 'اطلب الكتالوج أو عرض السعر',
    intro: (name) => `تصفح ${name} حسب منصة الشاحنة ورقم OEM/OE والاستخدام. تحقق من الأبعاد وتفاصيل التثبيت قبل الطلب.`,
    directoryIntro: 'تصفح فئات HONGSHENG حسب تطبيقات التوجيه والتعليق والمحاور ونقل الحركة والآلات الزراعية. ترتبط كل فئة بالمنتجات ومراجع OEM وطلب السعر.',
    directoryDescription: (name) => `تصفح ${name} مع التطبيقات ومراجع OEM/OE وتفاصيل المنتج.`,
  },
  es: {
    home: 'Inicio',
    categories: 'Categorías de productos',
    browseLabel: 'CATEGORÍA DE PRODUCTO',
    count: (count) => `${count} productos con referencias OEM/OE`,
    faqLabel: 'PREGUNTAS DE COMPATIBILIDAD',
    faqTitle: (name) => `Preguntas sobre ${name.toLowerCase()}`,
    quote: 'Solicitar catálogo o cotización',
    intro: (name) => `Explore ${name.toLowerCase()} por plataforma de camión, referencia OEM/OE y aplicación. Confirme las dimensiones y el montaje antes de pedir.`,
    directoryIntro: 'Explore las categorías de HONGSHENG por dirección, suspensión, ejes, transmisión y maquinaria agrícola. Cada categoría enlaza a productos, referencias OEM y solicitud de cotización.',
    directoryDescription: (name) => `Consulte ${name.toLowerCase()} con aplicaciones, referencias OEM/OE y detalles del producto.`,
  },
  pt: {
    home: 'Início',
    categories: 'Categorias de produtos',
    browseLabel: 'CATEGORIA DO PRODUTO',
    count: (count) => `${count} produtos com referências OEM/OE`,
    faqLabel: 'DÚVIDAS DE COMPATIBILIDADE',
    faqTitle: (name) => `Perguntas sobre ${name.toLowerCase()}`,
    quote: 'Solicitar catálogo ou cotação',
    intro: (name) => `Consulte ${name.toLowerCase()} por plataforma de caminhão, referência OEM/OE e aplicação. Confirme dimensões e montagem antes do pedido.`,
    directoryIntro: 'Explore as categorias HONGSHENG por direção, suspensão, eixos, transmissão e máquinas agrícolas. Cada categoria leva aos produtos, referências OEM e solicitação de cotação.',
    directoryDescription: (name) => `Consulte ${name.toLowerCase()} com aplicações, referências OEM/OE e detalhes do produto.`,
  },
  fr: {
    home: 'Accueil',
    categories: 'Catégories de produits',
    browseLabel: 'CATÉGORIE DE PRODUIT',
    count: (count) => `${count} produits avec références OEM/OE`,
    faqLabel: 'FAQ COMPATIBILITÉ',
    faqTitle: (name) => `Questions sur ${name.toLowerCase()}`,
    quote: 'Demander le catalogue ou un devis',
    intro: (name) => `Découvrez ${name.toLowerCase()} par plateforme de camion, référence OEM/OE et application. Vérifiez les dimensions et le montage avant commande.`,
    directoryIntro: 'Parcourez les catégories HONGSHENG par direction, suspension, ponts, transmission et machines agricoles. Chaque catégorie mène aux produits, références OEM et demande de devis.',
    directoryDescription: (name) => `Découvrez ${name.toLowerCase()} avec applications, références OEM/OE et détails produit.`,
  },
  ja: {
    home: 'ホーム', categories: '製品カテゴリー', browseLabel: '製品カテゴリー', count: (count) => `OEM/OE参照情報付き ${count} 製品`, faqLabel: '適合性FAQ', faqTitle: (name) => `${name}についてのよくある質問`, quote: 'カタログまたは見積もりを依頼', intro: (name) => `${name}をトラックプラットフォーム、OEM/OE番号、用途から検索できます。ご注文前に寸法と取付仕様をご確認ください。`, directoryIntro: 'ステアリング、サスペンション、アクスル、駆動系、農業機械向けにHONGSHENGの製品カテゴリーをご覧いただけます。', directoryDescription: (name) => `${name}の車両適合、OEM/OE番号、製品詳細を確認できます。`,
  },
  ko: {
    home: '홈', categories: '제품 카테고리', browseLabel: '제품 카테고리', count: (count) => `OEM/OE 참조 정보가 있는 ${count}개 제품`, faqLabel: '호환성 FAQ', faqTitle: (name) => `${name}에 대한 자주 묻는 질문`, quote: '카탈로그 또는 견적 요청', intro: (name) => `${name} 제품을 트럭 플랫폼, OEM/OE 번호 및 용도별로 확인하세요. 주문 전에 주요 치수와 장착 정보를 확인하십시오.`, directoryIntro: '스티어링, 서스펜션, 차축, 구동계 및 농기계 용도별 HONGSHENG 제품 카테고리를 살펴보세요.', directoryDescription: (name) => `${name}의 차량 적용, OEM/OE 번호 및 제품 상세 정보입니다.`,
  },
  de: {
    home: 'Startseite', categories: 'Produktkategorien', browseLabel: 'PRODUKTKATEGORIE', count: (count) => `${count} Produkte mit OEM/OE-Referenzen`, faqLabel: 'KOMPATIBILITÄTS-FAQ', faqTitle: (name) => `Fragen zu ${name}`, quote: 'Katalog oder Angebot anfordern', intro: (name) => `${name} nach Lkw-Plattform, OEM/OE-Referenz und Anwendung durchsuchen. Prüfen Sie vor der Bestellung Maße und Befestigung.`, directoryIntro: 'Entdecken Sie HONGSHENG-Kategorien für Lenkung, Fahrwerk, Achsen, Antrieb und Landmaschinen.', directoryDescription: (name) => `${name} mit Fahrzeuganwendungen, OEM/OE-Referenzen und Produktdetails durchsuchen.`,
  },
  it: { home: 'Pagina iniziale', categories: 'Categorie prodotti', browseLabel: 'CATEGORIA PRODOTTO', count: (count) => `${count} prodotti con riferimenti OEM/OE`, faqLabel: 'FAQ COMPATIBILITÀ', faqTitle: (name) => `Domande su ${name}`, quote: 'Richiedi catalogo o preventivo', intro: (name) => `Consulta ${name} per piattaforma del camion, riferimento OEM/OE e applicazione. Verifica dimensioni e fissaggio prima dell’ordine.`, directoryIntro: 'Esplora le categorie HONGSHENG per sterzo, sospensioni, assali, trasmissione e macchine agricole.', directoryDescription: (name) => `Consulta ${name} con applicazioni, riferimenti OEM/OE e dettagli del prodotto.` },
  nl: { home: 'Startpagina', categories: 'Productcategorieën', browseLabel: 'PRODUCTCATEGORIE', count: (count) => `${count} producten met OEM/OE-referenties`, faqLabel: 'COMPATIBILITEITS-FAQ', faqTitle: (name) => `Vragen over ${name}`, quote: 'Catalogus of offerte aanvragen', intro: (name) => `Bekijk ${name} op vrachtwagenplatform, OEM/OE-referentie en toepassing. Controleer maten en montage vóór bestelling.`, directoryIntro: 'Bekijk HONGSHENG-categorieën voor besturing, ophanging, assen, aandrijving en landbouwmachines.', directoryDescription: (name) => `Bekijk ${name} met voertuigtoepassingen, OEM/OE-referenties en productdetails.` },
  tr: { home: 'Ana sayfa', categories: 'Ürün kategorileri', browseLabel: 'ÜRÜN KATEGORİSİ', count: (count) => `OEM/OE referans bilgili ${count} ürün`, faqLabel: 'UYUMLULUK SSS', faqTitle: (name) => `${name} hakkında sorular`, quote: 'Katalog veya teklif isteyin', intro: (name) => `${name} ürünlerini kamyon platformu, OEM/OE referansı ve uygulamaya göre inceleyin. Siparişten önce ölçü ve bağlantıyı kontrol edin.`, directoryIntro: 'HONGSHENG kategorilerini direksiyon, süspansiyon, aks, aktarma ve tarım makinelerine göre inceleyin.', directoryDescription: (name) => `${name} için araç uygulamalarını, OEM/OE referanslarını ve ürün ayrıntılarını görün.` },
  pl: { home: 'Strona główna', categories: 'Kategorie produktów', browseLabel: 'KATEGORIA PRODUKTU', count: (count) => `${count} produktów z referencjami OEM/OE`, faqLabel: 'FAQ DOPASOWANIA', faqTitle: (name) => `Pytania dotyczące ${name}`, quote: 'Poproś o katalog lub wycenę', intro: (name) => `Przeglądaj ${name} według platformy ciężarówki, numeru OEM/OE i zastosowania. Przed zamówieniem sprawdź wymiary i mocowanie.`, directoryIntro: 'Przeglądaj kategorie HONGSHENG dla układów kierowniczych, zawieszenia, osi, napędu i maszyn rolniczych.', directoryDescription: (name) => `Zobacz ${name} z zastosowaniami, numerami OEM/OE i szczegółami produktu.` },
  id: { home: 'Beranda', categories: 'Kategori produk', browseLabel: 'KATEGORI PRODUK', count: (count) => `${count} produk dengan referensi OEM/OE`, faqLabel: 'FAQ KESESUAIAN', faqTitle: (name) => `Pertanyaan tentang ${name}`, quote: 'Minta katalog atau penawaran', intro: (name) => `Jelajahi ${name} berdasarkan platform truk, referensi OEM/OE, dan aplikasi. Periksa ukuran serta pemasangan sebelum memesan.`, directoryIntro: 'Jelajahi kategori HONGSHENG untuk kemudi, suspensi, gandar, drivetrain, dan mesin pertanian.', directoryDescription: (name) => `Lihat ${name} dengan aplikasi kendaraan, referensi OEM/OE, dan detail produk.` },
};

type FaqItem = { question: string; answer: string };

export function localizedCategoryFaq(name: string, lang: Language, englishFaq: FaqItem[]): FaqItem[] {
  if (lang === 'en') return englishFaq;
  const faq: Partial<Record<Exclude<Language, 'en'>, FaqItem[]>> = {
    zh: [
      { question: `${name}主要用于什么？`, answer: `${name}用于重型车辆及相关机械的转向、悬挂、车桥或传动系统。具体用途请结合车型、桥型和产品详情确认。` },
      { question: '下单前需要核对哪些信息？', answer: '请核对 OEM/OE 参考号、车型与年份、桥型或轴型、左右位置、关键尺寸和安装孔位。' },
      { question: '如何确认产品是否匹配？', answer: '如果适配信息不确定，请同时提供旧件照片、车型铭牌、OEM/OE 号和关键尺寸，由销售进一步确认。' },
    ],
    ru: [
      { question: `Для чего предназначена продукция «${name}»?`, answer: `Эти детали применяются в рулевых, подвесочных, мостовых или трансмиссионных системах грузовиков и техники. Проверяйте применение по модели и номеру детали.` },
      { question: 'Что проверить перед заказом?', answer: 'Проверьте OEM/OE номер, модель и год автомобиля, тип моста, сторону установки, размеры и схему крепления.' },
      { question: 'Как подтвердить совместимость?', answer: 'Если применение неясно, отправьте фото детали, шильдик автомобиля, OEM/OE номер и ключевые размеры для проверки.' },
    ],
    ar: [
      { question: `ما استخدام منتجات ${name}؟`, answer: `تُستخدم هذه القطع في أنظمة التوجيه أو التعليق أو المحاور أو نقل الحركة للشاحنات والمعدات. تحقق من التطبيق حسب الطراز ورقم القطعة.` },
      { question: 'ما المعلومات التي يجب التحقق منها قبل الطلب؟', answer: 'تحقق من رقم OEM/OE وطراز المركبة ونوع المحور والجهة والأبعاد ونمط التثبيت.' },
      { question: 'كيف أتأكد من التوافق؟', answer: 'عند عدم وضوح التطبيق، أرسل صورة القطعة ولوحة المركبة ورقم OEM/OE والأبعاد المهمة للمراجعة.' },
    ],
    es: [
      { question: `¿Para qué se utilizan los productos de ${name.toLowerCase()}?`, answer: `Estas piezas se utilizan en sistemas de dirección, suspensión, ejes o transmisión de camiones y maquinaria. Confirme la aplicación por modelo y referencia.` },
      { question: '¿Qué hay que comprobar antes de pedir?', answer: 'Compruebe la referencia OEM/OE, modelo y año, tipo de eje, posición, dimensiones y patrón de montaje.' },
      { question: '¿Cómo confirmo la compatibilidad?', answer: 'Si la aplicación no está clara, envíe fotos de la pieza, placa del vehículo, referencia OEM/OE y dimensiones clave.' },
    ],
    pt: [
      { question: `Para que servem os produtos de ${name.toLowerCase()}?`, answer: `Essas peças são usadas em sistemas de direção, suspensão, eixos ou transmissão de caminhões e máquinas. Confirme a aplicação pelo modelo e referência.` },
      { question: 'O que deve ser verificado antes do pedido?', answer: 'Verifique a referência OEM/OE, modelo e ano, tipo de eixo, posição, dimensões e padrão de montagem.' },
      { question: 'Como confirmar a compatibilidade?', answer: 'Se a aplicação não estiver clara, envie fotos da peça, placa do veículo, referência OEM/OE e dimensões principais.' },
    ],
    fr: [
      { question: `À quoi servent les produits ${name.toLowerCase()} ?`, answer: `Ces pièces sont utilisées dans les systèmes de direction, de suspension, de pont ou de transmission des camions et machines. Vérifiez l’application par modèle et référence.` },
      { question: 'Que faut-il vérifier avant la commande ?', answer: 'Vérifiez la référence OEM/OE, le modèle et l’année, le type de pont, la position, les dimensions et le montage.' },
      { question: 'Comment confirmer la compatibilité ?', answer: 'Si l’application est incertaine, envoyez des photos de la pièce, la plaque du véhicule, la référence OEM/OE et les dimensions clés.' },
    ],
    ja: [
      { question: `${name}製品は何に使用されますか？`, answer: `${name}製品はトラックや関連機械のステアリング、サスペンション、アクスル、駆動系に使用されます。車種と部品番号で用途をご確認ください。` },
      { question: '注文前に何を確認すべきですか？', answer: 'OEM/OE番号、車種・年式、アクスル、左右、主要寸法、取付穴を確認してください。' },
      { question: '適合を確認するには？', answer: '用途が不明な場合は、旧品写真、車両プレート、OEM/OE番号、主要寸法をお送りください。' },
    ],
    ko: [
      { question: `${name} 제품은 어디에 사용되나요?`, answer: `${name} 제품은 트럭 및 관련 장비의 스티어링, 서스펜션, 차축 또는 구동계에 사용됩니다. 차량과 부품 번호로 적용 정보를 확인하십시오.` },
      { question: '주문 전에 무엇을 확인해야 하나요?', answer: 'OEM/OE 번호, 차량 모델과 연식, 차축, 좌우 방향, 주요 치수 및 장착 홀을 확인하십시오.' },
      { question: '호환성을 어떻게 확인하나요?', answer: '적용 정보가 불확실하면 기존 부품 사진, 차량 명판, OEM/OE 번호와 주요 치수를 보내 주세요.' },
    ],
    de: [
      { question: `Wofür werden ${name}-Produkte verwendet?`, answer: `${name}-Produkte werden in Lenkungs-, Fahrwerks-, Achs- oder Antriebssystemen von Lkw und Maschinen eingesetzt. Prüfen Sie Anwendung und Teilenummer.` },
      { question: 'Was sollte ich vor der Bestellung prüfen?', answer: 'Prüfen Sie OEM/OE-Nummer, Fahrzeugmodell und Baujahr, Achse, Seite, Maße und Befestigungsbild.' },
      { question: 'Wie bestätige ich die Kompatibilität?', answer: 'Bei Unsicherheit senden Sie Fotos des Altteils, Fahrzeugdaten, OEM/OE-Nummer und wichtige Maße.' },
    ],
    it: [
      { question: `A cosa servono i prodotti ${name}?`, answer: `I prodotti ${name} sono utilizzati nei sistemi di sterzo, sospensione, assale o trasmissione di camion e macchine. Verificare applicazione e riferimento.` },
      { question: 'Cosa controllare prima dell’ordine?', answer: 'Controllare riferimento OEM/OE, modello e anno, assale, lato, dimensioni e fissaggio.' },
      { question: 'Come confermare la compatibilità?', answer: 'In caso di dubbio, inviare foto del pezzo, dati del veicolo, riferimento OEM/OE e misure principali.' },
    ],
    nl: [
      { question: `Waarvoor worden ${name}-producten gebruikt?`, answer: `${name}-producten worden gebruikt in stuur-, ophangings-, as- of aandrijfsystemen van vrachtwagens en machines. Controleer toepassing en referentie.` },
      { question: 'Wat moet ik vóór bestelling controleren?', answer: 'Controleer OEM/OE-nummer, voertuigmodel en bouwjaar, as, zijde, maten en montage.' },
      { question: 'Hoe bevestig ik de compatibiliteit?', answer: 'Stuur bij twijfel foto’s van het oude onderdeel, voertuiggegevens, OEM/OE-nummer en belangrijke maten.' },
    ],
    tr: [
      { question: `${name} ürünleri ne için kullanılır?`, answer: `${name} ürünleri kamyon ve makinelerin direksiyon, süspansiyon, aks veya aktarma sistemlerinde kullanılır. Uygulamayı parça numarasıyla doğrulayın.` },
      { question: 'Siparişten önce ne kontrol edilmeli?', answer: 'OEM/OE numarasını, araç model ve yılını, aksı, tarafı, ölçüleri ve bağlantıyı kontrol edin.' },
      { question: 'Uyumluluk nasıl doğrulanır?', answer: 'Emin değilseniz eski parçanın fotoğrafını, araç bilgilerini, OEM/OE numarasını ve temel ölçüleri gönderin.' },
    ],
    pl: [
      { question: `Do czego służą produkty ${name}?`, answer: `Produkty ${name} stosuje się w układach kierowniczych, zawieszenia, osi lub napędu ciężarówek i maszyn. Sprawdź zastosowanie i numer części.` },
      { question: 'Co sprawdzić przed zamówieniem?', answer: 'Sprawdź numer OEM/OE, model i rok pojazdu, oś, stronę, wymiary i sposób mocowania.' },
      { question: 'Jak potwierdzić dopasowanie?', answer: 'W razie wątpliwości prześlij zdjęcia starej części, dane pojazdu, numer OEM/OE i najważniejsze wymiary.' },
    ],
    id: [
      { question: `Untuk apa produk ${name} digunakan?`, answer: `Produk ${name} digunakan pada sistem kemudi, suspensi, gandar, atau drivetrain truk dan mesin. Periksa aplikasi berdasarkan nomor komponen.` },
      { question: 'Apa yang perlu diperiksa sebelum memesan?', answer: 'Periksa nomor OEM/OE, model dan tahun kendaraan, gandar, sisi pemasangan, ukuran, dan pola pemasangan.' },
      { question: 'Bagaimana memastikan kecocokan?', answer: 'Jika ragu, kirim foto komponen lama, data kendaraan, nomor OEM/OE, dan ukuran penting.' },
    ],
  };
  return faq[lang as Exclude<Language, 'en'>] ?? englishFaq;
}
