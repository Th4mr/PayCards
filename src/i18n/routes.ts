/** أزواج الصفحات. المسار الغائب عن الزوج بلا بديل لهذه اللغة. */

import type { Lang } from './lang';

export type Locale = Lang;

export type Pair = { ar?: string; en?: string; fr?: string };

export const PAIRS: ReadonlyArray<Pair> = [
  { ar: '/', en: '/en', fr: '/fr' },
  { ar: '/articles', en: '/en/articles', fr: '/fr/articles' },
  { ar: '/articles/what-is-redotpay', en: '/en/articles/redotpay-review', fr: '/fr/articles/avis-redotpay' },
  { ar: '/articles/redotpay-fees', en: '/en/articles/redotpay-fees', fr: '/fr/articles/frais-redotpay' },
  { ar: '/articles/redotpay-signup-kyc', en: '/en/articles/redotpay-referral-code', fr: '/fr/articles/code-parrainage-redotpay' },
  { ar: '/articles/redotpay-supported-countries', en: '/en/articles/redotpay-supported-countries', fr: '/fr/articles/pays-redotpay' },
  { ar: '/articles/redotpay-top-up-usdt', en: '/en/articles/how-to-top-up-redotpay', fr: '/fr/articles/recharger-redotpay' },
  { ar: '/articles/redotpay-atm-withdrawal', en: '/en/articles/redotpay-atm-withdrawal', fr: '/fr/articles/retrait-dab-redotpay' },
  { ar: '/articles/redotpay-vs-other-crypto-cards', en: '/en/articles/redotpay-vs-other-crypto-cards', fr: '/fr/articles/redotpay-vs-autres-cartes' },
  { ar: '/articles/redotpay-apple-pay-google-pay', en: '/en/articles/redotpay-apple-pay-google-pay', fr: '/fr/articles/apple-pay-redotpay' },
  { ar: '/articles/redotpay-card-declined', en: '/en/articles/redotpay-card-declined', fr: '/fr/articles/carte-redotpay-refusee' },
  { ar: '/articles/redotpay-netflix-chatgpt', en: '/en/articles/redotpay-netflix-chatgpt', fr: '/fr/articles/redotpay-netflix-chatgpt' },
  { ar: '/articles/redotpay-limits', en: '/en/articles/redotpay-limits', fr: '/fr/articles/plafonds-redotpay' },
  { ar: '/articles/redotpay-physical-card-delivery', en: '/en/articles/redotpay-physical-card-delivery', fr: '/fr/articles/livraison-carte-redotpay' },
  { ar: '/articles/redotpay-withdraw-bank-paypal', en: '/en/articles/redotpay-withdraw-bank-paypal', fr: '/fr/articles/retrait-redotpay-banque' },
  { ar: '/articles/redotpay-vs-bybit', en: '/en/articles/redotpay-vs-bybit', fr: '/fr/articles/redotpay-vs-bybit' },
  { en: '/en/articles/is-redotpay-safe', fr: '/fr/articles/redotpay-fiable' },
  { ar: '/privacy', en: '/en/privacy', fr: '/fr/privacy' },
  { ar: '/terms', en: '/en/terms', fr: '/fr/terms' },
  { ar: '/disclosure', en: '/en/disclosure', fr: '/fr/disclosure' },
  { ar: '/about', en: '/en/about', fr: '/fr/about' },
  { ar: '/contact', en: '/en/contact', fr: '/fr/contact' },
];

const HOME: Record<Locale, string> = { ar: '/', en: '/en', fr: '/fr' };

export const LOCALE_SHORT: Record<Locale, string> = { ar: 'عربي', en: 'EN', fr: 'FR' };
export const LOCALE_LABEL: Record<Locale, string> = { ar: 'العربية', en: 'English', fr: 'Français' };

export function normalizePath(input: string): string {
  let path = input.split('?')[0]?.split('#')[0] ?? '/';
  try {
    path = decodeURI(path);
  } catch {
    /* keep the raw path */
  }
  path = path.replace(/(\/index)?\.html$/, '');
  if (path.length > 1) path = path.replace(/\/$/, '');
  return path || '/';
}

export function localeOf(pathname: string): Locale {
  const path = normalizePath(pathname);
  if (path === '/fr' || path.startsWith('/fr/')) return 'fr';
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  return 'ar';
}

export function pairFor(pathname: string): Pair | null {
  const path = normalizePath(pathname);
  return PAIRS.find((pair) => pair.ar === path || pair.en === path || pair.fr === path) ?? null;
}

/** رابط اللغة المطلوبة: التوأم إن وُجد، وإلا رئيسية تلك اللغة. */
export function hrefFor(pathname: string, locale: Locale): string {
  return pairFor(pathname)?.[locale] ?? HOME[locale];
}

export function switchLocales(pathname: string, current: Locale = localeOf(pathname)): Array<{ lang: Locale; href: string; short: string; label: string }> {
  return (['ar', 'en', 'fr'] as const)
    .filter((lang) => lang !== current)
    .map((lang) => ({ lang, href: hrefFor(pathname, lang), short: LOCALE_SHORT[lang], label: LOCALE_LABEL[lang] }));
}
