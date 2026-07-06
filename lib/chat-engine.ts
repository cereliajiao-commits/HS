import faqData from '@/data/chat/faq.json';
import { productCards } from '@/data/products';
import { productContent } from '@/data/productContent';
import type { ProductLocale } from '@/data/productContent';

export type ChatLanguage = 'en' | 'zh' | 'es' | 'fr' | 'ar' | 'ru' | 'pt';
export type ChatIntent =
  | 'greeting'
  | 'product'
  | 'quote'
  | 'custom'
  | 'moq'
  | 'lead_time'
  | 'stock'
  | 'sample'
  | 'packing'
  | 'payment'
  | 'shipping'
  | 'export'
  | 'after_sales'
  | 'catalog'
  | 'factory'
  | 'language'
  | 'complaint'
  | 'other';

export interface ChatResponse {
  language: ChatLanguage;
  intent: ChatIntent;
  riskLevel: 'low' | 'medium' | 'high';
  reply: string;
  action: 'auto_reply' | 'draft_for_human' | 'handoff';
  needsHuman: boolean;
  matchedFaqId?: string;
  productMatches?: Array<{ id: string; title: string; category: string }>;
}

const languageHints: Array<{ lang: ChatLanguage; markers: string[] }> = [
  { lang: 'zh', markers: ['你', '吗', '请', '多少', '价格', '起订量', '交期', '样品', '定制', '现货'] },
  { lang: 'es', markers: ['qué', 'cuál', 'precio', 'moq', 'muestra', 'entrega', 'fabricante', 'hola'] },
  { lang: 'fr', markers: ['bonjour', 'prix', 'délai', 'échantillon', 'fabricant', 'devis'] },
  { lang: 'ar', markers: ['مرحبا', 'سعر', 'عينة', 'موعد', 'مصنع', 'عرض'] },
  { lang: 'ru', markers: ['цена', 'образец', 'завод', 'срок', 'могу', 'здравствуйте'] },
  { lang: 'pt', markers: ['preço', 'amostra', 'fábrica', 'prazo', 'cotação', 'olá'] },
];

const intentRules: Array<{ intent: ChatIntent; patterns: RegExp[] }> = [
  { intent: 'complaint', patterns: [/complaint/i, /claim/i, /refund/i, /compensation/i, /dispute/i, /赔付/, /投诉/, /争议/, /索赔/, /退款/, /赔偿/] },
  { intent: 'quote', patterns: [/quote/i, /price/i, /cost/i, /报价/, /价格/, /quotation/i] },
  { intent: 'custom', patterns: [/custom/i, /oem/i, /drawing/i, /sample/i, /定制/, /OEM/, /图纸/] },
  { intent: 'moq', patterns: [/moq/i, /minimum order/i, /起订量/, /最小起订量/] },
  { intent: 'lead_time', patterns: [/lead time/i, /delivery/i, /delivery time/i, /交期/, /多久/, /发货时间/] },
  { intent: 'stock', patterns: [/in stock/i, /stock/i, /现货/, /有货/] },
  { intent: 'sample', patterns: [/sample/i, /样品/] },
  { intent: 'packing', patterns: [/pack/i, /packing/i, /包装/] },
  { intent: 'payment', patterns: [/payment/i, /t\/t/i, /付款/] },
  { intent: 'shipping', patterns: [/shipping/i, /ship/i, /sea freight/i, /air freight/i, /快递/, /海运/, /空运/] },
  { intent: 'export', patterns: [/export/i, /countries/i, /exported/i, /出口/] },
  { intent: 'after_sales', patterns: [/quality issue/i, /after-sales/i, /after sales/i, /quality problem/i, /质量/, /售后/] },
  { intent: 'catalog', patterns: [/catalog/i, /brochure/i, /目录/] },
  { intent: 'factory', patterns: [/factory/i, /manufacturer/i, /factory or trading/i, /工厂/] },
  { intent: 'language', patterns: [/language/i, /communicate/i, /语言/] },
];

function detectLanguage(text: string): ChatLanguage {
  const normalized = text.toLowerCase();
  if (/[\u4e00-\u9fff]/.test(text)) return 'zh';
  if (/[\u0600-\u06ff]/.test(text)) return 'ar';

  let best: ChatLanguage = 'en';
  let score = 0;
  for (const hint of languageHints) {
    const current = hint.markers.reduce((sum, marker) => sum + (normalized.includes(marker) ? 1 : 0), 0);
    if (current > score) {
      score = current;
      best = hint.lang;
    }
  }
  return best;
}

function detectIntent(text: string): ChatIntent {
  for (const rule of intentRules) {
    if (rule.patterns.some((pattern) => pattern.test(text))) return rule.intent;
  }
  return 'other';
}

function detectRisk(text: string): 'low' | 'medium' | 'high' {
  const lower = text.toLowerCase();
  if (faqData.riskKeywords.some((keyword) => lower.includes(keyword.toLowerCase()))) return 'high';
  return 'low';
}

function getFaqAnswer(intent: ChatIntent, lang: ChatLanguage) {
  const match = faqData.faq.find((item) => item.intent === intent);
  if (!match) return null;
  const answer = match.answer[lang as 'en' | 'zh'] || match.answer.en;
  return { id: match.id, answer, needsHuman: match.needsHuman };
}

function getProductMatches(text: string) {
  const lower = text.toLowerCase();
  return productCards
    .filter((product) => {
      const localized = productContent[product.id]?.en;
      const haystack = `${product.title} ${product.description} ${localized?.title ?? ''} ${localized?.description ?? ''} ${product.brand} ${product.category}`.toLowerCase();
      return lower.split(/\s+/).some((term) => term.length > 1 && haystack.includes(term));
    })
    .slice(0, 3)
    .map((product) => ({
      id: product.id,
      title: product.title,
      category: product.category,
    }));
}

function buildFallbackReply(lang: ChatLanguage, hasProducts: boolean, productMatches: ChatResponse['productMatches']) {
  if (hasProducts && productMatches?.length) {
    if (lang === 'zh') {
      return `我找到了相关产品：${productMatches.map((item) => item.title).join('、')}。如果您需要报价，请发送型号、数量和收货国家。`;
    }
    if (lang === 'es') return `Encontré productos relacionados: ${productMatches.map((item) => item.title).join(', ')}. Si necesita una cotización, envíe modelo, cantidad y país de destino.`;
    if (lang === 'fr') return `J’ai trouvé des produits correspondants : ${productMatches.map((item) => item.title).join(', ')}. Pour un devis, envoyez le modèle, la quantité et le pays de destination.`;
    if (lang === 'ar') return `وجدت منتجات ذات صلة: ${productMatches.map((item) => item.title).join('، ')}. إذا كنت تحتاج عرض سعر، يرجى إرسال الموديل والكمية وبلد الوصول.`;
    if (lang === 'ru') return `Я нашёл подходящие товары: ${productMatches.map((item) => item.title).join(', ')}. Если нужен расчёт, отправьте модель, количество и страну назначения.`;
    if (lang === 'pt') return `Encontrei produtos relacionados: ${productMatches.map((item) => item.title).join(', ')}. Se precisar de cotação, envie modelo, quantidade e país de destino.`;
    return `I found related products: ${productMatches.map((item) => item.title).join(', ')}. If you need a quote, please send the model, quantity, and destination country.`;
  }
  if (lang === 'zh') {
    return '感谢您的咨询。请告诉我们产品型号、数量或图片，我们会尽快为您确认。';
  }
  if (lang === 'es') return 'Gracias por su consulta. Por favor envíenos el modelo, la cantidad o una foto, y le confirmaremos pronto.';
  if (lang === 'fr') return 'Merci pour votre message. Veuillez nous envoyer le modèle, la quantité ou une photo, et nous vous confirmerons rapidement.';
  if (lang === 'ar') return 'شكرًا لاستفسارك. يرجى إرسال الموديل أو الكمية أو صورة، وسنؤكد لك التفاصيل قريبًا.';
  if (lang === 'ru') return 'Спасибо за ваш запрос. Пожалуйста, отправьте модель, количество или фото, и мы быстро подтвердим детали.';
  if (lang === 'pt') return 'Obrigado pela sua mensagem. Envie o modelo, a quantidade ou uma foto, e confirmaremos em breve.';
  return 'Thanks for your message. Please send the model, quantity, or a photo, and we will confirm the details soon.';
}

function buildHandoffReply(lang: ChatLanguage) {
  if (lang === 'zh') return '这个问题需要人工确认，我们的销售同事会尽快联系您。';
  if (lang === 'es') return 'Gracias, esto requiere revisión humana. Nuestro equipo comercial le responderá pronto.';
  if (lang === 'fr') return 'Merci, cela nécessite une vérification humaine. Notre équipe commerciale vous répondra bientôt.';
  if (lang === 'ar') return 'شكراً، هذا الموضوع يحتاج إلى مراجعة من فريقنا. سيتواصل معك قسم المبيعات قريباً.';
  if (lang === 'ru') return 'Спасибо, этот вопрос требует проверки менеджером. Наш отдел продаж свяжется с вами в ближайшее время.';
  if (lang === 'pt') return 'Obrigado, este assunto precisa de revisão humana. Nossa equipe comercial entrará em contato em breve.';
  return 'Thanks, this needs a human review. Our sales team will follow up shortly.';
}

export function generateChatReply(input: string): ChatResponse {
  const language = detectLanguage(input);
  const intent = detectIntent(input);
  const riskLevel = detectRisk(input);
  const productMatches = getProductMatches(input);
  const productMatchHint = productMatches.length ? productMatches.map((item) => item.title).join(', ') : '';

  if (riskLevel === 'high' || intent === 'complaint') {
    return {
      language,
      intent: 'complaint',
      riskLevel: 'high',
      reply: buildHandoffReply(language),
      action: 'handoff',
      needsHuman: true,
      productMatches,
    };
  }

  const faq = getFaqAnswer(intent, language);
  if (faq) {
    return {
      language,
      intent,
      riskLevel,
      reply: faq.answer,
      action: faq.needsHuman ? 'draft_for_human' : 'auto_reply',
      needsHuman: faq.needsHuman,
      matchedFaqId: faq.id,
      productMatches,
    };
  }

  const reply = buildFallbackReply(language, productMatches.length > 0, productMatches);
  return {
    language,
    intent,
    riskLevel,
    reply,
    action: productMatches.length > 0 ? 'draft_for_human' : 'auto_reply',
    needsHuman: false,
    productMatches: productMatchHint ? productMatches : productMatches,
  };
}

export function getProductContext(productId: string, lang: ProductLocale = 'en') {
  const content = productContent[productId]?.[lang] ?? productContent[productId]?.en;
  return content ?? null;
}
