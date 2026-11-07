import { oemReferences } from './oemReference.generated';
import type { Language } from '@/components/LanguageProvider';

/** Keep reliable OEM/OE identifiers in visible product names. */
export function withOemTitle(title: string, productId: string, lang: Language = 'en') {
  const numbers = oemReferences[productId]?.oemNumbers ?? [];
  if (!numbers.length) return title;

  // Keep the title readable and put the full OEM set in one predictable suffix,
  // even when an older catalog title already contained one of the numbers.
  const baseTitle = numbers.reduce((value, number) => value.replaceAll(number, ''), title)
    .replace(/\s{2,}/g, ' ')
    .replace(/\s*[-|｜:：]\s*$/, '')
    .trim();

  const suffix = lang === 'zh'
    ? `｜OEM号：${numbers.join('、')}`
    : ` | OEM ${numbers.join(' / ')}`;
  return `${baseTitle}${suffix}`;
}

