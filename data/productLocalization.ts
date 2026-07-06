import type { Language } from '@/components/LanguageProvider';
import { productContent, type LocalizedProductText } from './productContent';
import { importedProductContent } from './imported-products.content.generated';

type ProductContentEntry = {
  en: LocalizedProductText;
  zh: LocalizedProductText;
};

type TranslatedProductText = LocalizedProductText & {
  categoryLabel: string;
};

const baseProductContent = productContent as unknown as Record<string, ProductContentEntry>;
const importedContent = importedProductContent as unknown as Record<string, ProductContentEntry>;

const titlePhraseMap: Record<string, Array<[string, string]>> = {
  ru: [
    ['Heavy-Duty Steering Arm', 'Тяжёлая рулевая тяга'],
    ['Truck Steering Knuckle', 'Поворотный кулак для грузовика'],
    ['Agricultural Machinery Part', 'Деталь сельхозтехники'],
    ['John Deere Suspension Assembly', 'Узел подвески John Deere'],
    ['Heavy-Duty Drive Shaft', 'Карданный вал повышенной прочности'],
    ['Long Shaft Assembly', 'Длинный вал'],
    ['Vertical Arm', 'Вертикальный рычаг'],
    ['Double Bridge Vertical Arm', 'Вертикальный рычаг двойного моста'],
    ['Single Bridge Vertical Arm', 'Вертикальный рычаг одинарного моста'],
    ['Steering Arm', 'Рычаг рулевого управления'],
  ],
  es: [
    ['Heavy-Duty Steering Arm', 'Brazo de dirección reforzado'],
    ['Truck Steering Knuckle', 'Mangueta de dirección para camión'],
    ['Agricultural Machinery Part', 'Pieza de maquinaria agrícola'],
    ['John Deere Suspension Assembly', 'Conjunto de suspensión John Deere'],
    ['Heavy-Duty Drive Shaft', 'Árbol de transmisión reforzado'],
    ['Long Shaft Assembly', 'Conjunto de eje largo'],
    ['Vertical Arm', 'Brazo vertical'],
    ['Double Bridge Vertical Arm', 'Brazo vertical de doble puente'],
    ['Single Bridge Vertical Arm', 'Brazo vertical de puente simple'],
    ['Steering Arm', 'Brazo de dirección'],
  ],
  fr: [
    ['Heavy-Duty Steering Arm', 'Bras de direction renforcé'],
    ['Truck Steering Knuckle', 'Fusée de direction pour camion'],
    ['Agricultural Machinery Part', 'Pièce de machinisme agricole'],
    ['John Deere Suspension Assembly', 'Ensemble de suspension John Deere'],
    ['Heavy-Duty Drive Shaft', 'Arbre de transmission renforcé'],
    ['Long Shaft Assembly', "Ensemble d'arbre long"],
    ['Vertical Arm', 'Bras vertical'],
    ['Double Bridge Vertical Arm', 'Bras vertical double pont'],
    ['Single Bridge Vertical Arm', 'Bras vertical pont simple'],
    ['Steering Arm', 'Bras de direction'],
  ],
  ar: [
    ['Heavy-Duty Steering Arm', 'ذراع توجيه ثقيل'],
    ['Truck Steering Knuckle', 'مفصل توجيه للشاحنة'],
    ['Agricultural Machinery Part', 'قطعة زراعية'],
    ['John Deere Suspension Assembly', 'مجموعة تعليق جون دير'],
    ['Heavy-Duty Drive Shaft', 'عمود نقل الحركة الثقيل'],
    ['Long Shaft Assembly', 'مجموعة عمود طويل'],
    ['Vertical Arm', 'ذراع رأسي'],
    ['Double Bridge Vertical Arm', 'ذراع رأسي مزدوج الجسر'],
    ['Single Bridge Vertical Arm', 'ذراع رأسي أحادي الجسر'],
    ['Steering Arm', 'ذراع التوجيه'],
  ],
  pt: [
    ['Heavy-Duty Steering Arm', 'Braço de direção reforçado'],
    ['Truck Steering Knuckle', 'Manga de direção para caminhão'],
    ['Agricultural Machinery Part', 'Peça de maquinário agrícola'],
    ['John Deere Suspension Assembly', 'Conjunto de suspensão John Deere'],
    ['Heavy-Duty Drive Shaft', 'Eixo cardã reforçado'],
    ['Long Shaft Assembly', 'Conjunto de eixo longo'],
    ['Vertical Arm', 'Braço vertical'],
    ['Double Bridge Vertical Arm', 'Braço vertical de ponte dupla'],
    ['Single Bridge Vertical Arm', 'Braço vertical de ponte simples'],
    ['Steering Arm', 'Braço de direção'],
  ],
};

const genericPhraseMap: Record<string, Array<[string, string]>> = {
  ru: [
    ['truck steering linkage', 'рулевую тягу грузовика'],
    ['steering linkage', 'рулевую тягу'],
    ['steering system', 'рулевую систему'],
    ['heavy-duty', 'тяжёлый'],
    ['forged steel', 'кованая сталь'],
    ['forged alloy steel', 'кованая легированная сталь'],
    ['anti-corrosion coating', 'антикоррозионное покрытие'],
    ['protective coating', 'защитное покрытие'],
    ['OEM / aftermarket', 'OEM / послепродажный рынок'],
    ['OEM / custom', 'OEM / индивидуальный заказ'],
    ['OEM replacement', 'OEM-замена'],
    ['Aftermarket supply', 'Поставка на вторичный рынок'],
    ['Custom projects', 'Индивидуальные проекты'],
    ['Product catalog', 'Каталог продукции'],
    ['Commercial vehicles', 'Коммерческие автомобили'],
    ['Heavy-duty trucks', 'Тяжёлые грузовики'],
    ['Truck drivetrain', 'трансмиссию грузовика'],
    ['Truck platforms', 'платформы грузовиков'],
    ['Field machinery', 'полевую технику'],
    ['Special steering linkage', 'специальную рулевую тягу'],
    ['stable steering control', 'стабильное управление'],
    ['reliable fit and performance', 'надёжную посадку и работу'],
    ['stable steering transfer', 'стабильную передачу рулевого управления'],
    ['long service life', 'долгий срок службы'],
    ['dependable steering control', 'надёжное управление'],
    ['replacement parts', 'запасные части'],
    ['catalog display', 'показ в каталоге'],
    ['steering repairs', 'ремонт рулевого управления'],
    ['built for', 'создано для'],
    ['designed for', 'разработано для'],
    ['Precision-built', 'Точно изготовленный'],
    ['Durable', 'Прочный'],
    ['High-quality', 'Высококачественный'],
  ],
  es: [
    ['truck steering linkage', 'varillaje de dirección del camión'],
    ['steering linkage', 'varillaje de dirección'],
    ['steering system', 'sistema de dirección'],
    ['heavy-duty', 'de alta resistencia'],
    ['forged steel', 'acero forjado'],
    ['forged alloy steel', 'acero aleado forjado'],
    ['anti-corrosion coating', 'recubrimiento anticorrosivo'],
    ['protective coating', 'recubrimiento protector'],
    ['OEM / aftermarket', 'OEM / posventa'],
    ['OEM / custom', 'OEM / personalizado'],
    ['OEM replacement', 'repuesto OEM'],
    ['Aftermarket supply', 'suministro posventa'],
    ['Custom projects', 'proyectos personalizados'],
    ['Product catalog', 'catálogo de productos'],
    ['Commercial vehicles', 'vehículos comerciales'],
    ['Heavy-duty trucks', 'camiones pesados'],
    ['Truck drivetrain', 'transmisión del camión'],
    ['Truck platforms', 'plataformas de camión'],
    ['Field machinery', 'maquinaria de campo'],
    ['Special steering linkage', 'varillaje de dirección especial'],
    ['stable steering control', 'control de dirección estable'],
    ['reliable fit and performance', 'ajuste y rendimiento confiables'],
    ['stable steering transfer', 'transferencia de dirección estable'],
    ['long service life', 'larga vida útil'],
    ['dependable steering control', 'control de dirección fiable'],
    ['replacement parts', 'piezas de repuesto'],
    ['catalog display', 'exhibición en catálogo'],
    ['steering repairs', 'reparaciones de dirección'],
    ['built for', 'diseñado para'],
    ['designed for', 'diseñado para'],
    ['Precision-built', 'Fabricado con precisión'],
    ['Durable', 'Duradero'],
    ['High-quality', 'Alta calidad'],
  ],
  fr: [
    ['truck steering linkage', 'bielle de direction du camion'],
    ['steering linkage', 'bielle de direction'],
    ['steering system', 'système de direction'],
    ['heavy-duty', 'robuste'],
    ['forged steel', 'acier forgé'],
    ['forged alloy steel', 'acier allié forgé'],
    ['anti-corrosion coating', 'revêtement anticorrosion'],
    ['protective coating', 'revêtement protecteur'],
    ['OEM / aftermarket', 'OEM / après-vente'],
    ['OEM / custom', 'OEM / sur mesure'],
    ['OEM replacement', 'remplacement OEM'],
    ['Aftermarket supply', 'approvisionnement après-vente'],
    ['Custom projects', 'projets personnalisés'],
    ['Product catalog', 'catalogue produits'],
    ['Commercial vehicles', 'véhicules utilitaires'],
    ['Heavy-duty trucks', 'camions lourds'],
    ['Truck drivetrain', 'transmission du camion'],
    ['Truck platforms', 'plates-formes de camion'],
    ['Field machinery', 'machines agricoles'],
    ['Special steering linkage', 'bielle de direction spéciale'],
    ['stable steering control', 'contrôle de direction stable'],
    ['reliable fit and performance', 'ajustement et performances fiables'],
    ['stable steering transfer', 'transmission de direction stable'],
    ['long service life', 'longue durée de vie'],
    ['dependable steering control', 'contrôle de direction fiable'],
    ['replacement parts', 'pièces de rechange'],
    ['catalog display', 'présentation catalogue'],
    ['steering repairs', 'réparations de direction'],
    ['built for', 'conçu pour'],
    ['designed for', 'conçu pour'],
    ['Precision-built', 'Fabriqué avec précision'],
    ['Durable', 'Durable'],
    ['High-quality', 'Haute qualité'],
  ],
  ar: [
    ['truck steering linkage', 'وصلة توجيه الشاحنة'],
    ['steering linkage', 'وصلة التوجيه'],
    ['steering system', 'نظام التوجيه'],
    ['heavy-duty', 'ثقيل التحمل'],
    ['forged steel', 'فولاذ مطروق'],
    ['forged alloy steel', 'فولاذ سبائكي مطروق'],
    ['anti-corrosion coating', 'طلاء مقاوم للتآكل'],
    ['protective coating', 'طلاء واقٍ'],
    ['OEM / aftermarket', 'OEM / ما بعد البيع'],
    ['OEM / custom', 'OEM / مخصص'],
    ['OEM replacement', 'بديل OEM'],
    ['Aftermarket supply', 'توريد ما بعد البيع'],
    ['Custom projects', 'مشاريع مخصصة'],
    ['Product catalog', 'كتالوج المنتجات'],
    ['Commercial vehicles', 'المركبات التجارية'],
    ['Heavy-duty trucks', 'الشاحنات الثقيلة'],
    ['Truck drivetrain', 'مجموعة نقل حركة الشاحنة'],
    ['Truck platforms', 'منصات الشاحنات'],
    ['Field machinery', 'معدات الحقول'],
    ['Special steering linkage', 'وصلة توجيه خاصة'],
    ['stable steering control', 'تحكم ثابت في التوجيه'],
    ['reliable fit and performance', 'ملاءمة وأداء موثوقان'],
    ['stable steering transfer', 'نقل توجيه مستقر'],
    ['long service life', 'عمر خدمة طويل'],
    ['dependable steering control', 'تحكم موثوق في التوجيه'],
    ['replacement parts', 'قطع غيار بديلة'],
    ['catalog display', 'عرض في الكتالوج'],
    ['steering repairs', 'إصلاحات التوجيه'],
    ['built for', 'مصمم لـ'],
    ['designed for', 'مصمم لـ'],
    ['Precision-built', 'مصنوع بدقة'],
    ['Durable', 'متين'],
    ['High-quality', 'عالي الجودة'],
  ],
  pt: [
    ['truck steering linkage', 'ligação de direção do caminhão'],
    ['steering linkage', 'ligação de direção'],
    ['steering system', 'sistema de direção'],
    ['heavy-duty', 'para serviço pesado'],
    ['forged steel', 'aço forjado'],
    ['forged alloy steel', 'aço-liga forjado'],
    ['anti-corrosion coating', 'revestimento anticorrosivo'],
    ['protective coating', 'revestimento protetor'],
    ['OEM / aftermarket', 'OEM / pós-venda'],
    ['OEM / custom', 'OEM / personalizado'],
    ['OEM replacement', 'substituição OEM'],
    ['Aftermarket supply', 'fornecimento pós-venda'],
    ['Custom projects', 'projetos personalizados'],
    ['Product catalog', 'catálogo de produtos'],
    ['Commercial vehicles', 'veículos comerciais'],
    ['Heavy-duty trucks', 'caminhões pesados'],
    ['Truck drivetrain', 'transmissão do caminhão'],
    ['Truck platforms', 'plataformas de caminhão'],
    ['Field machinery', 'máquinas agrícolas'],
    ['Special steering linkage', 'ligação de direção especial'],
    ['stable steering control', 'controle de direção estável'],
    ['reliable fit and performance', 'encaixe e desempenho confiáveis'],
    ['stable steering transfer', 'transferência de direção estável'],
    ['long service life', 'longa vida útil'],
    ['dependable steering control', 'controle de direção confiável'],
    ['replacement parts', 'peças de reposição'],
    ['catalog display', 'exibição em catálogo'],
    ['steering repairs', 'reparos de direção'],
    ['built for', 'projetado para'],
    ['designed for', 'projetado para'],
    ['Precision-built', 'Fabricado com precisão'],
    ['Durable', 'Durável'],
    ['High-quality', 'Alta qualidade'],
  ],
};

const categoryLabelMap: Record<string, Record<string, string>> = {
  en: {
    vertical: 'Vertical Arm',
    'steering-arm': 'Steering Arm',
    'steering-knuckle': 'Steering Knuckle',
    agricultural: 'Agricultural Part',
    'john-deere': 'John Deere Assembly',
    shaft: 'Drive Shaft',
    'long-shaft': 'Long Shaft Assembly',
  },
  zh: {
    vertical: '垂臂',
    'steering-arm': '转向臂',
    'steering-knuckle': '转向节',
    agricultural: '农机配件',
    'john-deere': '约翰迪尔总成',
    shaft: '传动轴',
    'long-shaft': '长轴',
  },
  ru: {
    vertical: 'Вертикальный рычаг',
    'steering-arm': 'Рычаг рулевого управления',
    'steering-knuckle': 'Поворотный кулак',
    agricultural: 'Деталь сельхозтехники',
    'john-deere': 'Узел John Deere',
    shaft: 'Карданный вал',
    'long-shaft': 'Длинный вал',
  },
  es: {
    vertical: 'Brazo vertical',
    'steering-arm': 'Brazo de dirección',
    'steering-knuckle': 'Mangueta de dirección',
    agricultural: 'Pieza agrícola',
    'john-deere': 'Conjunto John Deere',
    shaft: 'Árbol de transmisión',
    'long-shaft': 'Eje largo',
  },
  fr: {
    vertical: 'Bras vertical',
    'steering-arm': 'Bras de direction',
    'steering-knuckle': 'Fusée de direction',
    agricultural: 'Pièce agricole',
    'john-deere': 'Ensemble John Deere',
    shaft: 'Arbre de transmission',
    'long-shaft': 'Arbre long',
  },
  ar: {
    vertical: 'ذراع رأسي',
    'steering-arm': 'ذراع توجيه',
    'steering-knuckle': 'مفصل توجيه',
    agricultural: 'قطعة زراعية',
    'john-deere': 'مجموعة جون دير',
    shaft: 'عمود نقل الحركة',
    'long-shaft': 'عمود طويل',
  },
  pt: {
    vertical: 'Braço vertical',
    'steering-arm': 'Braço de direção',
    'steering-knuckle': 'Manga de direção',
    agricultural: 'Peça agrícola',
    'john-deere': 'Conjunto John Deere',
    shaft: 'Eixo cardã',
    'long-shaft': 'Eixo longo',
  },
};

function applyReplacements(text: string, replacements: Array<[string, string]>) {
  let output = text;
  for (const [source, target] of [...replacements].sort((a, b) => b[0].length - a[0].length)) {
    output = output.split(source).join(target);
  }
  return output;
}

function translateText(text: string, lang: Language) {
  if (lang === 'en' || lang === 'zh') return text;
  const replacements = genericPhraseMap[lang];
  if (!replacements) return text;
  return applyReplacements(applyReplacements(text, replacements), titlePhraseMap[lang] ?? []);
}

export function translateCategoryLabel(category: string, lang: Language) {
  return categoryLabelMap[lang]?.[category] ?? category;
}

export function resolveProductText(productId: string, category: string, lang: Language): TranslatedProductText | null {
  const source = baseProductContent[productId] ?? importedContent[productId];
  if (!source) return null;

  const canonical = lang === 'zh' ? source.zh : source.en;
  if (lang === 'en' || lang === 'zh') {
    return {
      ...canonical,
      categoryLabel: translateCategoryLabel(category, lang),
    };
  }

  return {
    title: translateText(source.en.title, lang),
    description: translateText(source.en.description, lang),
    specs: source.en.specs.map((spec) => ({
      label: translateText(spec.label, lang),
      value: translateText(spec.value, lang),
    })),
    applications: source.en.applications.map((app) => translateText(app, lang)),
    categoryLabel: translateCategoryLabel(category, lang),
  };
}
