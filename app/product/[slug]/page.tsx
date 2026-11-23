import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProductCards } from '@/data/products';
import { productDetails } from '@/data/productDetails';
import { importedProductDetails } from '@/data/imported-products.details.generated';
import { resolveProductText, translateCategoryLabel, translateProductText } from '@/data/productLocalization';
import type { Language } from '@/components/LanguageProvider';
import ProductGallery from '@/components/ProductGallery';
import { oemReferences } from '@/data/oemReference.generated';
import { getDisplayOemNumbers, withOemTitle } from '@/data/productTitles';
import { translations } from '@/data/translations';
import { getLanguage, languageAlternates, languageUrl } from '@/lib/seo';

type ProductDetailRecord = {
  image: string;
  images?: string[];
  category?: string;
  title?: string;
  description?: string;
  specs?: { label: string; value: string }[];
  applications?: string[];
};

type ProductPageProps = {
  params: { slug: string };
  searchParams?: { lang?: string; language?: string };
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hsaxle.com';
const COMPANY_NAME = 'Hengshui Hongsheng Auto Parts Co., Ltd.';
const WHATSAPP_URL = 'https://wa.me/8617751097209';
const CONTACT_EMAIL = 'chinahs@hotmail.com';

const importedDetails = importedProductDetails as unknown as Record<string, ProductDetailRecord>;
const baseDetails = productDetails as Record<string, ProductDetailRecord>;

function getProduct(slug: string) {
  const card = allProductCards.find((item) => item.id === slug);
  if (!card) return null;

  const detail = baseDetails[slug] ?? importedDetails[slug];
  return {
    card,
    detail,
  };
}

function getLocalizedProduct(slug: string, lang: Language) {
  const product = getProduct(slug);
  if (!product) return null;

  const { card, detail } = product;
  const localized = resolveProductText(slug, card.category, lang);
  const fallbackTitle = translateProductText(detail?.title ?? card.title, lang);
  const fallbackDescription = translateProductText(detail?.description ?? card.description, lang);
  const fallbackSpecs = detail?.specs ?? [];
  const fallbackApplications = detail?.applications ?? [];
  const oem = oemReferences[slug];
  const displayOemNumbers = getDisplayOemNumbers(slug, lang);
  const displayVehicleApplication = lang === 'zh' || !/[\u3400-\u9fff]/.test(oem?.vehicleApplication ?? '')
    ? oem?.vehicleApplication ?? ''
    : '';

  return {
    ...product,
    title: withOemTitle(localized?.title ?? fallbackTitle, slug, lang),
    description: localized?.description ?? fallbackDescription,
    specs: localized?.specs ?? fallbackSpecs,
    applications: localized?.applications ?? fallbackApplications,
    oem,
    displayOemNumbers,
    displayVehicleApplication,
    categoryLabel: localized?.categoryLabel ?? translateCategoryLabel(card.category, lang),
    image: detail?.image ?? card.image,
    images: detail?.images?.length ? detail.images : [detail?.image ?? card.image],
  };
}

function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

type ProductFaqItem = { question: string; answer: string };

const localizedProductFaq: Partial<Record<Language, {
  oemQuestion: string;
  applicationQuestion: string;
  fitmentQuestion: string;
  customQuestion: string;
  oemAnswer: (oem: string) => string;
  applicationAnswer: (application: string) => string;
  noApplication: string;
  fitmentAnswer: string;
  customAnswer: string;
}>> = {
  ja: {
    oemQuestion: 'この製品に対応するOEM / OE番号は？', applicationQuestion: 'どの車両またはステアリングシステムに使用できますか？', fitmentQuestion: '注文前に適合を確認するには？', customQuestion: 'OEM / ODMやカスタム包装に対応していますか？',
    oemAnswer: (oem) => `このページに掲載している参照番号：${oem}。ご注文前に車種、アクスル、左右、取付寸法をご確認ください。`, applicationAnswer: (application) => `適合情報：${application}。車両仕様やアクスルが不明な場合は、車両プレート、旧品写真、寸法をお送りください。`, noApplication: '確認済みの車両適合情報はまだ掲載されていません。車種、アクスル、旧品写真をお知らせください。', fitmentAnswer: 'OEM / OE番号、車種と年式、アクスル、左右、穴間隔、スプラインなどを確認してください。OEM番号は照合用の参考情報です。', customAnswer: 'HONGSHENGはOEM / ODM、製品マーキング、カスタム包装に対応しています。数量、仕向け市場、図面またはサンプルをお知らせください。',
  },
  ko: {
    oemQuestion: '이 제품의 OEM / OE 번호는 무엇인가요?', applicationQuestion: '어떤 차량 또는 스티어링 시스템에 사용되나요?', fitmentQuestion: '주문 전에 호환성을 어떻게 확인하나요?', customQuestion: 'OEM / ODM 및 맞춤 포장을 지원하나요?',
    oemAnswer: (oem) => `이 페이지에 기재된 참조 번호: ${oem}. 주문 전에 차량, 차축, 좌우 방향 및 장착 치수를 확인하십시오.`, applicationAnswer: (application) => `적용 정보: ${application}. 차량 사양이나 차축이 불확실하면 차량 명판, 기존 부품 사진 및 치수를 보내 주세요.`, noApplication: '확인된 차량 적용 정보가 아직 없습니다. 차량 모델, 차축 종류 및 기존 부품 사진을 보내 주세요.', fitmentAnswer: 'OEM / OE 번호, 차량 모델과 연식, 차축 종류, 좌우 방향, 홀 간격 및 스플라인을 확인하십시오. OEM 번호는 참고용입니다.', customAnswer: 'HONGSHENG은 OEM / ODM 문의, 제품 표시 및 맞춤 포장을 지원합니다. 수량, 대상 시장, 도면 또는 샘플을 보내 주세요.',
  },
  de: {
    oemQuestion: 'Auf welche OEM- / OE-Nummern bezieht sich dieses Produkt?', applicationQuestion: 'Für welches Fahrzeug oder Lenksystem ist es geeignet?', fitmentQuestion: 'Wie prüfe ich die Passform vor der Bestellung?', customQuestion: 'Unterstützen Sie OEM / ODM und kundenspezifische Verpackung?',
    oemAnswer: (oem) => `Auf dieser Seite aufgeführte Referenznummern: ${oem}. Prüfen Sie vor der Bestellung Fahrzeug, Achse, Seite und Befestigungsmaße.`, applicationAnswer: (application) => `Anwendung: ${application}. Wenn Fahrzeugkonfiguration oder Achstyp unklar sind, senden Sie Fahrzeugdaten, Fotos des Altteils und Maße.`, noApplication: 'Es ist noch keine bestätigte Fahrzeuganwendung angegeben. Senden Sie Fahrzeugmodell, Achstyp und Fotos des Altteils zur Prüfung.', fitmentAnswer: 'Prüfen Sie OEM- / OE-Nummer, Fahrzeugmodell und Baujahr, Achstyp, Einbauseite, Lochabstände und Verzahnung. Die OEM-Nummer dient nur als Referenz.', customAnswer: 'HONGSHENG unterstützt OEM / ODM-Anfragen, Produktkennzeichnung und kundenspezifische Verpackung. Bitte Menge, Zielmarkt, Zeichnungen oder Muster angeben.',
  },
  ru: {
    oemQuestion: 'Какие номера OEM / OE относятся к этой детали?', applicationQuestion: 'Для какого автомобиля или рулевой системы предназначена деталь?', fitmentQuestion: 'Как проверить совместимость перед заказом?', customQuestion: 'Поддерживаете ли вы OEM / ODM и индивидуальную упаковку?',
    oemAnswer: (oem) => `Указанные на странице номера: ${oem}. Перед заказом проверьте автомобиль, мост, сторону установки и размеры крепления.`, applicationAnswer: (application) => `Применение: ${application}. Если конфигурация автомобиля или тип моста неизвестны, отправьте данные автомобиля, фото старой детали и размеры.`, noApplication: 'Подтверждённое применение автомобиля пока не указано. Отправьте модель автомобиля, тип моста и фото старой детали.', fitmentAnswer: 'Проверьте номер OEM / OE, модель и год автомобиля, тип моста, сторону установки, межосевые расстояния отверстий и шлицы. OEM-номер является справочным.', customAnswer: 'HONGSHENG принимает запросы OEM / ODM, выполняет маркировку изделий и индивидуальную упаковку. Укажите количество, рынок, чертежи или образцы.',
  },
  ar: {
    oemQuestion: 'ما أرقام OEM / OE المرتبطة بهذا المنتج؟', applicationQuestion: 'لأي مركبة أو نظام توجيه يُستخدم هذا المنتج؟', fitmentQuestion: 'كيف أتحقق من التوافق قبل الطلب؟', customQuestion: 'هل تدعمون OEM / ODM والتغليف المخصص؟',
    oemAnswer: (oem) => `أرقام المرجع المذكورة في الصفحة: ${oem}. تحقق من المركبة والمحور والجهة وأبعاد التثبيت قبل الطلب.`, applicationAnswer: (application) => `الاستخدام: ${application}. إذا كانت مواصفات المركبة أو نوع المحور غير واضحة، أرسل بيانات المركبة وصور القطعة القديمة والأبعاد.`, noApplication: 'لا توجد حالياً معلومات مؤكدة عن المركبة. أرسل الطراز ونوع المحور وصور القطعة القديمة للتأكد.', fitmentAnswer: 'تحقق من رقم OEM / OE وطراز المركبة وسنتها ونوع المحور والجهة والمسافات بين الثقوب والتخديدات. الرقم مرجع للمطابقة فقط.', customAnswer: 'تدعم HONGSHENG طلبات OEM / ODM ووضع العلامات والتغليف المخصص. أرسل الكمية والسوق المستهدف والرسومات أو العينات.',
  },
  es: {
    oemQuestion: '¿Qué referencias OEM / OE corresponden a este producto?', applicationQuestion: '¿Para qué vehículo o sistema de dirección sirve?', fitmentQuestion: '¿Cómo confirmo la compatibilidad antes de pedir?', customQuestion: '¿Admiten OEM / ODM y embalaje personalizado?',
    oemAnswer: (oem) => `Referencias indicadas en esta página: ${oem}. Confirme el vehículo, el eje, el lado y las dimensiones de montaje antes de pedir.`, applicationAnswer: (application) => `Aplicación: ${application}. Si no está clara la configuración del vehículo o el eje, envíe los datos del vehículo, fotos de la pieza antigua y medidas.`, noApplication: 'Todavía no hay una aplicación de vehículo confirmada. Envíe el modelo, el tipo de eje y fotos de la pieza antigua.', fitmentAnswer: 'Compruebe la referencia OEM / OE, modelo y año, tipo de eje, lado de montaje, distancia entre agujeros y estrías. La referencia OEM es solo una guía.', customAnswer: 'HONGSHENG admite consultas OEM / ODM, marcado de productos y embalaje personalizado. Incluya cantidad, mercado, planos o muestras.',
  },
  pt: {
    oemQuestion: 'Quais números OEM / OE correspondem a este produto?', applicationQuestion: 'Para qual veículo ou sistema de direção ele serve?', fitmentQuestion: 'Como confirmar a compatibilidade antes do pedido?', customQuestion: 'Vocês oferecem OEM / ODM e embalagem personalizada?',
    oemAnswer: (oem) => `Referências indicadas nesta página: ${oem}. Confirme o veículo, eixo, lado e dimensões de montagem antes do pedido.`, applicationAnswer: (application) => `Aplicação: ${application}. Se a configuração do veículo ou eixo não estiver clara, envie os dados do veículo, fotos da peça antiga e medidas.`, noApplication: 'Ainda não há uma aplicação de veículo confirmada. Envie modelo, tipo de eixo e fotos da peça antiga.', fitmentAnswer: 'Verifique a referência OEM / OE, modelo e ano, tipo de eixo, lado de montagem, distância entre furos e estrias. A referência OEM é apenas para conferência.', customAnswer: 'A HONGSHENG atende consultas OEM / ODM, marcação de produtos e embalagem personalizada. Informe quantidade, mercado, desenhos ou amostras.',
  },
  fr: {
    oemQuestion: 'Quelles références OEM / OE correspondent à ce produit ?', applicationQuestion: 'Pour quel véhicule ou système de direction est-il prévu ?', fitmentQuestion: 'Comment confirmer la compatibilité avant la commande ?', customQuestion: 'Proposez-vous l’OEM / ODM et un emballage personnalisé ?',
    oemAnswer: (oem) => `Références indiquées sur cette page : ${oem}. Vérifiez le véhicule, le pont, le côté et les dimensions de montage avant la commande.`, applicationAnswer: (application) => `Application : ${application}. Si la configuration du véhicule ou du pont est incertaine, envoyez les données du véhicule, des photos de l’ancienne pièce et les dimensions.`, noApplication: 'Aucune application véhicule confirmée n’est encore indiquée. Envoyez le modèle, le type de pont et des photos de l’ancienne pièce.', fitmentAnswer: 'Vérifiez la référence OEM / OE, le modèle et l’année, le type de pont, le côté, l’entraxe des trous et les cannelures. La référence OEM reste indicative.', customAnswer: 'HONGSHENG traite les demandes OEM / ODM, le marquage des produits et l’emballage personnalisé. Indiquez la quantité, le marché, les plans ou les échantillons.',
  },
  it: {
    oemQuestion: 'Quali riferimenti OEM / OE corrispondono a questo prodotto?', applicationQuestion: 'Per quale veicolo o sistema di sterzo è adatto?', fitmentQuestion: 'Come verificare la compatibilità prima dell’ordine?', customQuestion: 'Sono disponibili OEM / ODM e imballaggi personalizzati?',
    oemAnswer: (oem) => `Riferimenti indicati nella pagina: ${oem}. Verificare veicolo, assale, lato e dimensioni di montaggio prima dell’ordine.`, applicationAnswer: (application) => `Applicazione: ${application}. Se la configurazione non è chiara, inviare dati del veicolo, foto del vecchio pezzo e misure.`, noApplication: 'Non è ancora indicata un’applicazione veicolo verificata. Inviare modello, tipo di assale e foto del vecchio pezzo.', fitmentAnswer: 'Controllare riferimento OEM / OE, modello e anno, assale, lato, interassi dei fori e scanalature. Il codice OEM è solo un riferimento.', customAnswer: 'HONGSHENG supporta richieste OEM / ODM, marcatura e imballaggio personalizzato. Indicare quantità, mercato, disegni o campioni.',
  },
  nl: {
    oemQuestion: 'Welke OEM / OE-nummers horen bij dit product?', applicationQuestion: 'Voor welk voertuig of stuursysteem is dit geschikt?', fitmentQuestion: 'Hoe controleer ik de pasvorm vóór bestelling?', customQuestion: 'Bieden jullie OEM / ODM en maatwerkverpakking?',
    oemAnswer: (oem) => `Referenties op deze pagina: ${oem}. Controleer voertuig, as, zijde en montageafmetingen vóór bestelling.`, applicationAnswer: (application) => `Toepassing: ${application}. Stuur voertuiggegevens, foto’s van het oude onderdeel en maten als de configuratie onduidelijk is.`, noApplication: 'Er is nog geen bevestigde voertuigtoepassing vermeld. Stuur model, astype en foto’s van het oude onderdeel.', fitmentAnswer: 'Controleer OEM / OE-nummer, model en bouwjaar, astype, montagezijde, gatafstand en vertanding. Het OEM-nummer is alleen een referentie.', customAnswer: 'HONGSHENG ondersteunt OEM / ODM, productmarkering en maatwerkverpakking. Vermeld hoeveelheid, markt, tekeningen of monsters.',
  },
  tr: {
    oemQuestion: 'Bu ürün hangi OEM / OE numaralarıyla eşleşir?', applicationQuestion: 'Hangi araç veya direksiyon sistemi için uygundur?', fitmentQuestion: 'Siparişten önce uyumluluk nasıl doğrulanır?', customQuestion: 'OEM / ODM ve özel ambalaj destekliyor musunuz?',
    oemAnswer: (oem) => `Sayfada belirtilen referanslar: ${oem}. Siparişten önce araç, aks, taraf ve montaj ölçülerini kontrol edin.`, applicationAnswer: (application) => `Uygulama: ${application}. Araç veya aks konfigürasyonu net değilse araç bilgilerini, eski parçanın fotoğraflarını ve ölçüleri gönderin.`, noApplication: 'Henüz doğrulanmış bir araç uygulaması belirtilmemiştir. Modeli, aks tipini ve eski parça fotoğraflarını gönderin.', fitmentAnswer: 'OEM / OE numarasını, araç model ve yılını, aks tipini, montaj tarafını, delik aralığını ve kamaları kontrol edin. OEM numarası yalnızca referanstır.', customAnswer: 'HONGSHENG OEM / ODM taleplerini, ürün işaretlemesini ve özel ambalajı destekler. Miktar, hedef pazar, çizim veya numune gönderin.',
  },
  pl: {
    oemQuestion: 'Jakie numery OEM / OE dotyczą tego produktu?', applicationQuestion: 'Do jakiego pojazdu lub układu kierowniczego jest przeznaczony?', fitmentQuestion: 'Jak potwierdzić dopasowanie przed zamówieniem?', customQuestion: 'Czy oferujecie OEM / ODM i opakowania niestandardowe?',
    oemAnswer: (oem) => `Numery referencyjne podane na stronie: ${oem}. Przed zamówieniem sprawdź pojazd, oś, stronę i wymiary mocowania.`, applicationAnswer: (application) => `Zastosowanie: ${application}. Jeśli konfiguracja pojazdu lub osi jest niepewna, prześlij dane pojazdu, zdjęcia starej części i wymiary.`, noApplication: 'Nie podano jeszcze potwierdzonego zastosowania. Prześlij model, typ osi i zdjęcia starej części.', fitmentAnswer: 'Sprawdź numer OEM / OE, model i rok, typ osi, stronę montażu, rozstaw otworów i wielowypust. Numer OEM jest tylko wskazówką.', customAnswer: 'HONGSHENG obsługuje zapytania OEM / ODM, oznakowanie produktów i opakowania niestandardowe. Podaj ilość, rynek, rysunki lub próbki.',
  },
  id: {
    oemQuestion: 'Nomor OEM / OE apa yang sesuai dengan produk ini?', applicationQuestion: 'Untuk kendaraan atau sistem kemudi apa produk ini digunakan?', fitmentQuestion: 'Bagaimana cara memastikan kecocokan sebelum memesan?', customQuestion: 'Apakah mendukung OEM / ODM dan kemasan khusus?',
    oemAnswer: (oem) => `Referensi yang tercantum di halaman ini: ${oem}. Periksa kendaraan, gandar, sisi pemasangan, dan ukuran pemasangan sebelum memesan.`, applicationAnswer: (application) => `Aplikasi: ${application}. Jika konfigurasi kendaraan atau gandar belum jelas, kirim data kendaraan, foto komponen lama, dan ukurannya.`, noApplication: 'Aplikasi kendaraan yang terverifikasi belum tercantum. Kirim model kendaraan, jenis gandar, dan foto komponen lama.', fitmentAnswer: 'Periksa nomor OEM / OE, model dan tahun kendaraan, jenis gandar, sisi pemasangan, jarak lubang, dan spline. Nomor OEM hanya merupakan referensi.', customAnswer: 'HONGSHENG mendukung permintaan OEM / ODM, penandaan produk, dan kemasan khusus. Sertakan jumlah, pasar tujuan, gambar, atau sampel.',
  },
};

function getProductFaq(product: NonNullable<ReturnType<typeof getLocalizedProduct>>, lang: Language): ProductFaqItem[] {
  const isChinese = lang === 'zh';
  const oemNumbers = product.displayOemNumbers;
  const application = product.displayVehicleApplication || product.applications.join(isChinese || lang === 'ja' ? '、' : ', ');
  const noVerifiedOem: Record<Language, string> = {
    en: 'No verified OEM number is currently listed', zh: '暂无已核实的 OEM 号', ru: 'Проверенный номер OEM пока не указан', ar: 'لا يوجد حالياً رقم OEM مؤكد', es: 'Todavía no hay un número OEM verificado', pt: 'Ainda não há um número OEM verificado', fr: 'Aucun numéro OEM vérifié n’est encore indiqué', ja: '確認済みのOEM番号はまだ掲載されていません', ko: '확인된 OEM 번호가 아직 기재되지 않았습니다', de: 'Es ist noch keine bestätigte OEM-Nummer angegeben', it: 'Non è ancora indicato un riferimento OEM verificato', nl: 'Er is nog geen bevestigd OEM-nummer vermeld', tr: 'Henüz doğrulanmış bir OEM numarası belirtilmemiştir', pl: 'Nie podano jeszcze potwierdzonego numeru OEM', id: 'Nomor OEM yang terverifikasi belum tercantum',
  };
  const oemText = oemNumbers.length ? oemNumbers.join(isChinese ? '、' : ', ') : noVerifiedOem[lang];
  const localized = localizedProductFaq[lang];
  if (localized) {
    return [
      { question: localized.oemQuestion, answer: localized.oemAnswer(oemText) },
      { question: localized.applicationQuestion, answer: application ? localized.applicationAnswer(application) : localized.noApplication },
      { question: localized.fitmentQuestion, answer: localized.fitmentAnswer },
      { question: localized.customQuestion, answer: localized.customAnswer },
    ];
  }
  return isChinese
    ? [
      { question: '这个产品对应哪些 OEM / OE 号？', answer: `当前页面列出的参考号：${oemText}。下单前请同时核对车型、桥型、左右侧和安装尺寸。` },
      { question: '这个产品适用于哪些车型或系统？', answer: application ? `适配信息：${application}。如果车辆配置或桥型不确定，请提交车型铭牌、旧件照片和尺寸给销售确认。` : '页面暂未列出确定的车型适配信息，请提供车型、桥型和旧件照片给销售确认。' },
      { question: '如何确认这个配件是否匹配？', answer: '请同时核对 OEM / OE 号、车型和年份、桥型或轴型、左右位置、孔距及花键等关键尺寸；OEM 号仅作为匹配参考，不替代装车确认。' },
      { question: '可以做 OEM / ODM 或定制包装吗？', answer: 'HONGSHENG 支持 OEM / ODM 询价、产品标识和定制包装。请在询价时提供数量、目的市场、图纸或样件信息。' },
    ]
    : [
      { question: 'Which OEM / OE numbers does this product reference?', answer: `The reference numbers listed on this page are: ${oemText}. Confirm the vehicle, axle, side and mounting dimensions before ordering.` },
      { question: 'What vehicle or steering system is it for?', answer: application ? `Listed application: ${application}. If the vehicle configuration or axle type is uncertain, send the vehicle plate, old-part photos and dimensions for fitment confirmation.` : 'The page does not list a verified vehicle application yet. Send the vehicle model, axle type and old-part photos for confirmation.' },
      { question: 'How should I confirm fitment before ordering?', answer: 'Check the OEM / OE number together with vehicle model and year, axle or bridge type, left/right position, hole spacing and spline details. An OEM number is a reference for matching and does not replace fitment verification.' },
      { question: 'Do you support OEM / ODM and custom packaging?', answer: 'HONGSHENG supports OEM / ODM inquiries, product marking and custom packaging. Include quantity, destination market, drawings or samples in the inquiry.' },
    ];
}

function productUrl(slug: string, lang?: Language) {
  return languageUrl(SITE_URL, `/product/${encodeURIComponent(slug)}`, lang ?? 'en');
}

function compactMetaText(text: string, maxLength: number) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;
  const shortened = clean.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, lastSpace > maxLength * 0.7 ? lastSpace : maxLength - 1).replace(/[.,;:!?\s]+$/, '')}…`;
}

function seoTitle(title: string, lang: Language) {
  const suffix = translations[lang]['product.seoSuffix'] ?? translations.en['product.seoSuffix'];
  // Keep the model and OEM suffix visible in search results whenever possible.
  return `${compactMetaText(title, 78 - suffix.length)}${suffix}`;
}

const oemMetaLabels: Partial<Record<Language, string>> = {
  zh: 'OEM号', ja: 'OEM番号', ko: 'OEM 번호', de: 'OEM-Nummern', it: 'Numeri OEM', nl: 'OEM-nummers', tr: 'OEM numaraları', pl: 'Numery OEM', id: 'Nomor OEM',
};

export function generateStaticParams() {
  return allProductCards.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params, searchParams }: ProductPageProps): Promise<Metadata> {
  const lang = getLanguage(searchParams?.lang ?? searchParams?.language);
  const product = getLocalizedProduct(params.slug, lang);

  if (!product) {
    return {
      title: lang === 'zh' ? '产品未找到 | HONGSHENG Auto Parts' : 'Product Not Found | HONGSHENG Auto Parts',
      robots: { index: false, follow: false },
    };
  }

  const title = seoTitle(product.title, lang);
  const rawDescription = product.description || (lang === 'zh'
    ? `了解 ${product.title}，获取 HONGSHENG Auto Parts 的产品规格、应用和询价支持。`
    : `${product.title}: specifications, applications, and inquiry support from HONGSHENG Auto Parts.`);
  const copy = translations[lang];
  const description = compactMetaText(
    `${rawDescription} ${product.displayOemNumbers.length ? `${oemMetaLabels[lang] ?? 'OEM numbers'}: ${product.displayOemNumbers.join(', ')}.` : ''} ${lang === 'zh' ? '支持OEM/ODM定制，欢迎获取规格与报价。' : copy['product.requestQuote']}`,
    155
  );
  const url = productUrl(params.slug, lang);
  const path = `/product/${encodeURIComponent(params.slug)}`;
  const images = product.images.map(absoluteUrl);

  return {
    title: { absolute: title },
    description,
    keywords: [product.title, product.categoryLabel, ...product.displayOemNumbers, product.displayVehicleApplication, `${product.categoryLabel} manufacturer`, 'HONGSHENG Auto Parts', 'OEM truck parts'].filter(Boolean),
    alternates: {
      canonical: url,
      languages: languageAlternates(SITE_URL, path),
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'HONGSHENG Auto Parts',
      locale: ({ en: 'en_US', zh: 'zh_CN', ru: 'ru_RU', ar: 'ar_SA', es: 'es_ES', pt: 'pt_BR', fr: 'fr_FR', ja: 'ja_JP', ko: 'ko_KR', de: 'de_DE', it: 'it_IT', nl: 'nl_NL', tr: 'tr_TR', pl: 'pl_PL', id: 'id_ID' } as Record<Language, string>)[lang],
      alternateLocale: Object.entries({ en: 'en_US', zh: 'zh_CN', ru: 'ru_RU', ar: 'ar_SA', es: 'es_ES', pt: 'pt_BR', fr: 'fr_FR', ja: 'ja_JP', ko: 'ko_KR', de: 'de_DE', it: 'it_IT', nl: 'nl_NL', tr: 'tr_TR', pl: 'pl_PL', id: 'id_ID' } as Record<Language, string>)
        .filter(([code]) => code !== lang)
        .map(([, locale]) => locale),
      images: images.map((url) => ({ url, alt: product.title })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}

function StructuredData({ product, slug, lang }: { product: NonNullable<ReturnType<typeof getLocalizedProduct>>; slug: string; lang: Language }) {
  const url = productUrl(slug, lang);
  const images = product.images.map(absoluteUrl);
  const imageObjects = images.map((image, index) => ({
    '@type': 'ImageObject',
    '@id': `${image}#image`,
    url: image,
    contentUrl: image,
    name: product.title,
    caption: product.title,
    representativeOfPage: index === 0,
    encodingFormat: 'image/webp',
    width: 1200,
    height: 1200,
  }));
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: product.title,
    description: product.description,
    primaryImageOfPage: imageObjects[0],
    image: imageObjects,
    url,
    about: {
      '@type': 'Thing',
      name: product.title,
      image: imageObjects,
      identifier: product.displayOemNumbers[0] ?? product.card.id,
      category: product.categoryLabel,
    },
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
    inLanguage: ({ en: 'en', zh: 'zh-CN', ru: 'ru', ar: 'ar', es: 'es', pt: 'pt', fr: 'fr', ja: 'ja', ko: 'ko', de: 'de', it: 'it', nl: 'nl', tr: 'tr', pl: 'pl', id: 'id' } as Record<Language, string>)[lang],
    additionalProperty: product.specs.map((spec) => ({
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value,
    })).concat(product.displayOemNumbers.length ? [{
      '@type': 'PropertyValue',
      name: 'OEM / OE reference numbers',
      value: product.displayOemNumbers.join(', '),
    }] : []).concat(product.displayVehicleApplication ? [{
      '@type': 'PropertyValue',
      name: 'Vehicle application',
      value: product.displayVehicleApplication,
    }] : []),
  };
  const faqItems = getProductFaq(product, lang);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: '+86 177 5109 7209',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86 177 5109 7209',
      contactType: 'sales',
        availableLanguage: ['English', 'Chinese', 'Russian', 'Arabic', 'Spanish', 'Portuguese', 'French', 'Japanese', 'Korean', 'German', 'Italian', 'Dutch', 'Turkish', 'Polish', 'Indonesian'],
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: ({ en: 'Home', zh: '首页', ru: 'Главная', ar: 'الرئيسية', es: 'Inicio', pt: 'Início', fr: 'Accueil', ja: 'ホーム', ko: '홈', de: 'Startseite', it: 'Pagina iniziale', nl: 'Startpagina', tr: 'Ana sayfa', pl: 'Strona główna', id: 'Beranda' } as Record<Language, string>)[lang],
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: ({ en: 'Products', zh: '产品', ru: 'Продукция', ar: 'المنتجات', es: 'Productos', pt: 'Produtos', fr: 'Produits', ja: '製品', ko: '제품', de: 'Produkte', it: 'Prodotti', nl: 'Producten', tr: 'Ürünler', pl: 'Produkty', id: 'Produk' } as Record<Language, string>)[lang],
        item: `${SITE_URL}/#products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export default function ProductPage({ params, searchParams }: ProductPageProps) {
  const lang = getLanguage(searchParams?.lang ?? searchParams?.language);
  const product = getLocalizedProduct(params.slug, lang);

  if (!product) notFound();

  const copy = translations[lang];
  const labels = {
    back: copy['product.back'],
    specifications: copy['product.specifications'],
    applications: copy['product.applications'],
    oem: copy['product.oem'],
    requestQuote: copy['product.requestQuote'],
    whatsapp: copy['product.whatsapp'],
    inquiryNote: copy['product.inquiryNote'],
    zoomHint: copy['product.zoomHint'],
    language: copy['product.language'],
  };
  const breadcrumbLabels: Record<Language, { home: string; products: string }> = {
    en: { home: 'Home', products: 'Products' },
    zh: { home: '首页', products: '产品' },
    ru: { home: 'Главная', products: 'Продукция' },
    ar: { home: 'الرئيسية', products: 'المنتجات' },
    es: { home: 'Inicio', products: 'Productos' },
    pt: { home: 'Início', products: 'Produtos' },
    fr: { home: 'Accueil', products: 'Produits' },
    ja: { home: 'ホーム', products: '製品' },
    ko: { home: '홈', products: '제품' },
    de: { home: 'Startseite', products: 'Produkte' },
    it: { home: 'Pagina iniziale', products: 'Prodotti' },
    nl: { home: 'Startpagina', products: 'Producten' },
    tr: { home: 'Ana sayfa', products: 'Ürünler' },
    pl: { home: 'Strona główna', products: 'Produkty' },
    id: { home: 'Beranda', products: 'Produk' },
  };

  const inquiryUrl = `/?product=${encodeURIComponent(product.title)}#contact`;
  const languageUrl = lang === 'zh'
    ? productUrl(params.slug, 'en')
    : ['ja', 'ko', 'de', 'it', 'nl', 'tr', 'pl', 'id'].includes(lang)
      ? productUrl(params.slug, 'en')
      : productUrl(params.slug, 'zh');
  const homeUrl = lang === 'en' ? '/' : `/?lang=${lang}`;
  const productsUrl = lang === 'en' ? '/#products' : `/?lang=${lang}#products`;
  const faqItems = getProductFaq(product, lang);

  return (
    <main className="product-detail-page">
      <StructuredData product={product} slug={params.slug} lang={lang} />
      <header className="product-detail-nav">
          <a href={homeUrl} className="nav-logo" aria-label="HONGSHENG Auto Parts">
          HONG<span>SHENG</span>
        </a>
        <div className="product-detail-nav-actions">
          <a href={languageUrl} className="product-detail-language">{labels.language}</a>
          <a href={productsUrl} className="product-detail-back">{labels.back}</a>
        </div>
      </header>

      <div className="container">
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <a href={homeUrl}>{(breadcrumbLabels[lang] ?? breadcrumbLabels.en).home}</a>
          <span aria-hidden="true">/</span>
          <a href={productsUrl}>{(breadcrumbLabels[lang] ?? breadcrumbLabels.en).products}</a>
          <span aria-hidden="true">/</span>
          <span>{product.title}</span>
        </nav>

        <section className="product-detail-layout">
          <div className={`product-detail-media${product.images.length > 1 ? ' product-detail-media--gallery' : ''}`}>
            <ProductGallery images={product.images} alt={product.title} hint={labels.zoomHint} />
          </div>
          <div className="product-detail-content">
            <div className="section-label">{product.categoryLabel}</div>
            <h1>{product.title}</h1>
            <p className="product-detail-description">{product.description}</p>

            {product.specs.length > 0 && (
              <div className="product-detail-section">
                <h2>{labels.specifications}</h2>
                <dl className="product-detail-specs">
                  {product.specs.map((spec) => (
                    <div key={`${spec.label}-${spec.value}`} className="product-detail-spec">
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {product.applications.length > 0 && (
              <div className="product-detail-section">
                <h2>{labels.applications}</h2>
                <ul className="product-detail-applications">
                  {product.applications.map((application) => <li key={application}>{application}</li>)}
                </ul>
              </div>
            )}

            {product.displayOemNumbers.length ? (
              <div className="product-detail-section product-detail-oem">
                <h2>{labels.oem}</h2>
                <ul className="product-detail-oem-list">
                  {product.displayOemNumbers.map((number, index) => (
                    <li key={number}>
                      <a href={`/oem/${encodeURIComponent(product.oem?.oemNumbers[index] ?? number)}${lang === 'en' ? '' : `?lang=${lang}`}`}>{number}</a>
                    </li>
                  ))}
                </ul>
                {product.displayVehicleApplication && <p className="product-detail-oem-application">{product.displayVehicleApplication}</p>}
                <p className="product-detail-oem-note">{copy['product.oemNote']}</p>
              </div>
            ) : null}

            <section className="product-detail-section product-detail-faq" aria-labelledby="product-faq-title">
              <h2 id="product-faq-title">{({ en: 'Product and fitment FAQ', zh: '产品与适配常见问题', ru: 'Вопросы о продукции и совместимости', ar: 'أسئلة المنتج والتوافق', es: 'Preguntas sobre producto y compatibilidad', pt: 'Perguntas sobre produto e compatibilidade', fr: 'FAQ produit et compatibilité', ja: '製品と適合に関するFAQ', ko: '제품 및 호환성 FAQ', de: 'FAQ zu Produkt und Kompatibilität', it: 'FAQ su prodotto e compatibilità', nl: 'FAQ over product en compatibiliteit', tr: 'Ürün ve uyumluluk SSS', pl: 'FAQ produktu i dopasowania', id: 'FAQ produk dan kecocokan' } as Record<Language, string>)[lang]}</h2>
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </section>

            <div className="product-detail-cta">
              <a href={inquiryUrl} className="btn btn-primary">{labels.requestQuote}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{labels.whatsapp}</a>
            </div>
            <p className="product-detail-inquiry-note">{labels.inquiryNote}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
