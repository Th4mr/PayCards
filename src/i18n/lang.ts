export type Lang = 'ar' | 'en' | 'fr' | 'es' | 'pt';

export function text<T>(lang: Lang, copy: Record<Lang, T>): T {
  return copy[lang];
}

export function isLtr(lang: Lang): boolean {
  return lang !== 'ar';
}
