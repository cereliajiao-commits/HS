import { oemReferences } from './oemReference.generated';
import type { Language } from '@/components/LanguageProvider';

/** Keep English UI labels free of Chinese side markers embedded in OEM strings. */
export function displayOemNumber(number: string, lang: Language = 'en') {
  if (lang !== 'en') return number;
  return number
    .replaceAll('左', 'Left')
    .replaceAll('右', 'Right')
    .replace(/[\u3400-\u9fff]/g, '')
    .replace(/[（]/g, '(')
    .replace(/[）]/g, ')')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export function getDisplayOemNumbers(productId: string, lang: Language = 'en') {
  return (oemReferences[productId]?.oemNumbers ?? []).map((number) => displayOemNumber(number, lang));
}

/** Keep reliable OEM/OE identifiers in visible product names. */
export function withOemTitle(title: string, productId: string, lang: Language = 'en') {
  const rawNumbers = oemReferences[productId]?.oemNumbers ?? [];
  if (!rawNumbers.length) return title;
  const numbers = rawNumbers.map((number) => displayOemNumber(number, lang));

  // Keep the title readable and put the full OEM set in one predictable suffix,
  // even when an older catalog title already contained one of the numbers.
  const baseTitle = rawNumbers.reduce((value, number) => value.replaceAll(number, ''), title)
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+-\s+Model\b/gi, '')
    .replace(/\s*[-|｜:：]\s*$/, '')
    .trim();

  const suffix = lang === 'zh'
    ? `｜OEM号：${numbers.join('、')}`
    : ` | OEM ${numbers.join(' / ')}`;
  return `${baseTitle}${suffix}`;
}

