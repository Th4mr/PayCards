/** أزواج الصفحات العربية والإنجليزية. المسارات التي لا تظهر هنا بلا بديل لغوي. */

export type Locale = 'ar' | 'en';

export const PAIRS: ReadonlyArray<{ ar: string; en: string }> = [
  { ar: '/', en: '/en' },
  { ar: '/articles', en: '/en/articles' },
  { ar: '/articles/what-is-redotpay', en: '/en/articles/redotpay-review' },
  { ar: '/articles/redotpay-fees', en: '/en/articles/redotpay-fees' },
  { ar: '/articles/redotpay-signup-kyc', en: '/en/articles/redotpay-referral-code' },
  { ar: '/articles/redotpay-supported-countries', en: '/en/articles/redotpay-supported-countries' },
  { ar: '/articles/redotpay-top-up-usdt', en: '/en/articles/how-to-top-up-redotpay' },
  { ar: '/articles/redotpay-atm-withdrawal', en: '/en/articles/redotpay-atm-withdrawal' },
  { ar: '/articles/redotpay-vs-other-crypto-cards', en: '/en/articles/redotpay-vs-other-crypto-cards' },
  { ar: '/articles/redotpay-apple-pay-google-pay', en: '/en/articles/redotpay-apple-pay-google-pay' },
  { ar: '/privacy', en: '/en/privacy' },
  { ar: '/terms', en: '/en/terms' },
  { ar: '/disclosure', en: '/en/disclosure' },
  { ar: '/about', en: '/en/about' },
  { ar: '/contact', en: '/en/contact' },
];

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

export function pairFor(pathname: string): { ar: string; en: string } | null {
  const path = normalizePath(pathname);
  return PAIRS.find((pair) => pair.ar === path || pair.en === path) ?? null;
}

/** صفحة اللغة الأخرى، أو الرئيسية الإنجليزية/العربية إن لم يوجد زوج. */
export function counterpart(pathname: string): string {
  const path = normalizePath(pathname);
  const pair = pairFor(path);
  if (pair) return pair.ar === path ? pair.en : pair.ar;
  return path.startsWith('/en') ? '/' : '/en';
}
