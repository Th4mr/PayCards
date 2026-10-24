/** أزواج الصفحات. المسار الغائب عن الزوج بلا بديل لهذه اللغة. */

import type { Lang } from './lang';

export type Locale = Lang;

export type Pair = { ar?: string; en?: string; fr?: string; es?: string; pt?: string };

export const PAIRS: ReadonlyArray<Pair> = [
  { ar: '/', en: '/en', fr: '/fr', es: '/es', pt: '/pt' },
  { ar: '/articles', en: '/en/articles', fr: '/fr/articles', es: '/es/articles', pt: '/pt/articles' },
  { ar: '/articles/category/guides', en: '/en/articles/category/guides', fr: '/fr/articles/category/guides', es: '/es/articles/category/guides', pt: '/pt/articles/category/guides' },
  { ar: '/articles/category/use-cases', en: '/en/articles/category/use-cases', fr: '/fr/articles/category/use-cases', es: '/es/articles/category/use-cases', pt: '/pt/articles/category/use-cases' },
  { ar: '/articles/category/comparisons', en: '/en/articles/category/comparisons', fr: '/fr/articles/category/comparisons', es: '/es/articles/category/comparisons', pt: '/pt/articles/category/comparisons' },
  { ar: '/articles/category/troubleshooting', en: '/en/articles/category/troubleshooting', fr: '/fr/articles/category/troubleshooting', es: '/es/articles/category/troubleshooting', pt: '/pt/articles/category/troubleshooting' },
  { ar: '/articles/what-is-redotpay', en: '/en/articles/redotpay-review', fr: '/fr/articles/avis-redotpay', es: '/es/articles/opiniones-redotpay', pt: '/pt/articles/opinioes-redotpay' },
  { ar: '/articles/redotpay-fees', en: '/en/articles/redotpay-fees', fr: '/fr/articles/frais-redotpay', es: '/es/articles/comisiones-redotpay', pt: '/pt/articles/taxas-redotpay' },
  { ar: '/articles/redotpay-signup-kyc', en: '/en/articles/redotpay-referral-code', fr: '/fr/articles/code-parrainage-redotpay', es: '/es/articles/codigo-referido-redotpay', pt: '/pt/articles/codigo-indicacao-redotpay' },
  { ar: '/articles/redotpay-supported-countries', en: '/en/articles/redotpay-supported-countries', fr: '/fr/articles/pays-redotpay', es: '/es/articles/paises-redotpay', pt: '/pt/articles/paises-redotpay' },
  { ar: '/articles/redotpay-top-up-usdt', en: '/en/articles/how-to-top-up-redotpay', fr: '/fr/articles/recharger-redotpay', es: '/es/articles/recargar-redotpay', pt: '/pt/articles/recarregar-redotpay' },
  { ar: '/articles/redotpay-atm-withdrawal', en: '/en/articles/redotpay-atm-withdrawal', fr: '/fr/articles/retrait-dab-redotpay', es: '/es/articles/cajero-redotpay', pt: '/pt/articles/caixa-redotpay' },
  { ar: '/articles/redotpay-vs-other-crypto-cards', en: '/en/articles/redotpay-vs-other-crypto-cards', fr: '/fr/articles/redotpay-vs-autres-cartes', es: '/es/articles/redotpay-vs-otras-tarjetas', pt: '/pt/articles/redotpay-vs-outros-cartoes' },
  { ar: '/articles/redotpay-apple-pay-google-pay', en: '/en/articles/redotpay-apple-pay-google-pay', fr: '/fr/articles/apple-pay-redotpay', es: '/es/articles/apple-pay-redotpay', pt: '/pt/articles/apple-pay-redotpay' },
  { ar: '/articles/redotpay-card-declined', en: '/en/articles/redotpay-card-declined', fr: '/fr/articles/carte-redotpay-refusee', es: '/es/articles/tarjeta-redotpay-rechazada', pt: '/pt/articles/cartao-redotpay-recusado' },
  { ar: '/articles/redotpay-netflix-chatgpt', en: '/en/articles/redotpay-netflix-chatgpt', fr: '/fr/articles/redotpay-netflix-chatgpt', es: '/es/articles/redotpay-netflix-chatgpt', pt: '/pt/articles/redotpay-netflix-chatgpt' },
  { ar: '/articles/redotpay-limits', en: '/en/articles/redotpay-limits', fr: '/fr/articles/plafonds-redotpay', es: '/es/articles/limites-redotpay', pt: '/pt/articles/limites-redotpay' },
  { ar: '/articles/redotpay-physical-card-delivery', en: '/en/articles/redotpay-physical-card-delivery', fr: '/fr/articles/livraison-carte-redotpay', es: '/es/articles/envio-tarjeta-redotpay', pt: '/pt/articles/envio-cartao-redotpay' },
  { ar: '/articles/redotpay-withdraw-bank-paypal', en: '/en/articles/redotpay-withdraw-bank-paypal', fr: '/fr/articles/retrait-redotpay-banque', es: '/es/articles/retiro-redotpay-banco', pt: '/pt/articles/saque-redotpay-banco' },
  { ar: '/articles/redotpay-vs-bybit', en: '/en/articles/redotpay-vs-bybit', fr: '/fr/articles/redotpay-vs-bybit', es: '/es/articles/redotpay-vs-bybit', pt: '/pt/articles/redotpay-vs-bybit' },
  { ar: '/articles/best-crypto-card', en: '/en/articles/best-crypto-card', fr: '/fr/articles/meilleure-carte-crypto', es: '/es/articles/mejor-tarjeta-crypto', pt: '/pt/articles/melhor-cartao-crypto' },
  { ar: '/articles/virtual-card-online-payments', en: '/en/articles/virtual-card-online-payments', fr: '/fr/articles/carte-virtuelle-paiement-en-ligne', es: '/es/articles/tarjeta-virtual-pagos-online', pt: '/pt/articles/cartao-virtual-pagamentos-online' },
  { ar: '/articles/how-to-spend-usdt', en: '/en/articles/how-to-spend-usdt', fr: '/fr/articles/depenser-usdt', es: '/es/articles/gastar-usdt', pt: '/pt/articles/gastar-usdt' },
  { ar: '/articles/prepaid-visa-card-online', en: '/en/articles/prepaid-visa-card-online', fr: '/fr/articles/carte-visa-prepayee', es: '/es/articles/tarjeta-visa-prepago', pt: '/pt/articles/cartao-visa-pre-pago' },
  { ar: '/articles/crypto-card-no-kyc', en: '/en/articles/crypto-card-no-kyc', fr: '/fr/articles/carte-crypto-sans-kyc', es: '/es/articles/tarjeta-crypto-sin-kyc', pt: '/pt/articles/cartao-crypto-sem-kyc' },
  { ar: '/articles/convert-usdt-to-cash', en: '/en/articles/convert-usdt-to-cash', fr: '/fr/articles/convertir-usdt-en-especes', es: '/es/articles/convertir-usdt-a-efectivo', pt: '/pt/articles/converter-usdt-em-dinheiro' },
  { en: '/en/articles/is-redotpay-safe', fr: '/fr/articles/redotpay-fiable', es: '/es/articles/redotpay-es-seguro', pt: '/pt/articles/redotpay-e-confiavel' },
  { ar: '/privacy', en: '/en/privacy', fr: '/fr/privacy', es: '/es/privacy', pt: '/pt/privacy' },
  { ar: '/terms', en: '/en/terms', fr: '/fr/terms', es: '/es/terms', pt: '/pt/terms' },
  { ar: '/disclosure', en: '/en/disclosure', fr: '/fr/disclosure', es: '/es/disclosure', pt: '/pt/disclosure' },
  { ar: '/about', en: '/en/about', fr: '/fr/about', es: '/es/about', pt: '/pt/about' },
  { ar: '/contact', en: '/en/contact', fr: '/fr/contact', es: '/es/contact', pt: '/pt/contact' },
];

const HOME: Record<Locale, string> = { ar: '/', en: '/en', fr: '/fr', es: '/es', pt: '/pt' };

export const LOCALE_SHORT: Record<Locale, string> = { ar: 'عربي', en: 'EN', fr: 'FR', es: 'ES', pt: 'PT' };
export const LOCALE_LABEL: Record<Locale, string> = { ar: 'العربية', en: 'English', fr: 'Français', es: 'Español', pt: 'Português' };

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
  if (path === '/pt' || path.startsWith('/pt/')) return 'pt';
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  if (path === '/fr' || path.startsWith('/fr/')) return 'fr';
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  return 'ar';
}

export function pairFor(pathname: string): Pair | null {
  const path = normalizePath(pathname);
  return PAIRS.find((pair) => pair.ar === path || pair.en === path || pair.fr === path || pair.es === path || pair.pt === path) ?? null;
}

/** رابط اللغة المطلوبة: التوأم إن وُجد، وإلا رئيسية تلك اللغة. */
export function hrefFor(pathname: string, locale: Locale): string {
  return pairFor(pathname)?.[locale] ?? HOME[locale];
}

export function switchLocales(pathname: string, current: Locale = localeOf(pathname)): Array<{ lang: Locale; href: string; short: string; label: string }> {
  return (['ar', 'en', 'fr', 'es', 'pt'] as const)
    .filter((lang) => lang !== current)
    .map((lang) => ({ lang, href: hrefFor(pathname, lang), short: LOCALE_SHORT[lang], label: LOCALE_LABEL[lang] }));
}
