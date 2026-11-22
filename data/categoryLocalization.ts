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

export const categoryUiCopy: Record<Language, CategoryUiCopy> = {
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
};

type FaqItem = { question: string; answer: string };

export function localizedCategoryFaq(name: string, lang: Language, englishFaq: FaqItem[]): FaqItem[] {
  if (lang === 'en') return englishFaq;
  const faq: Record<Exclude<Language, 'en'>, FaqItem[]> = {
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
  };
  return faq[lang as Exclude<Language, 'en'>];
}
