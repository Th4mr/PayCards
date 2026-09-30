/**
 * ملف الإعدادات المركزي لموقع PayCards
 * ------------------------------------------------------------
 * غيّر رابط الإحالة أو المكافأة من هنا فقط.
 * ملف `_redirects` يُولَّد تلقائياً من هذه القيم عند كل بناء
 * (انظر astro.config.ts)، فلا حاجة لتعديله يدوياً.
 */

export const SITE = {
  name: 'PayCards',
  nameAr: 'باي كاردز',
  url: 'https://www.paycards.io',
  domain: 'paycards.io',
  tagline: 'دليلك العربي للدفع بالعملات الرقمية في الحياة اليومية',
  description:
    'PayCards دليل عربي مستقل يشرح كيف تدفع بعملاتك الرقمية في المتاجر والاشتراكات والسفر عبر بطاقة RedotPay، بخطوات واضحة ومزايا وعيوب بصراحة.',
  email: 'hello@paycards.io',
  locale: 'ar_AR',
  /** رمز التحقق من Google Search Console */
  googleVerification: 'DbT6Rpij9Dgk_rT1RNENvi9AZY5ZTfEFEWNltgzcvxc',
  /** تاريخ آخر مراجعة للمحتوى، يُعرض في صفحات الإفصاح والخصوصية والشروط */
  lastReviewed: '2026-09-30',
} as const;

export const REFERRAL = {
  /** الرابط الأصلي للإحالة — لا يُكتب في أي صفحة، يُستخدم فقط في _redirects */
  url: 'https://url.hk/i/ar/yj8cq',
  /** المسار الداخلي الذي تشير إليه كل الأزرار */
  goPath: '/go/redotpay',
  /** نص المكافأة كما يُعرض للزائر. ضع null لإخفائها من كل الموقع */
  bonus: '5 دولار' as string | null,
  /** كود حالة إعادة التوجيه في Cloudflare Pages */
  redirectStatus: 302,
  /** قيمة rel لكل روابط الإحالة */
  rel: 'nofollow sponsored noopener',
} as const;

/**
 * التتبع: كل زر إحالة يرسل حدثاً باسم `referral_click`
 * ويحمل: page (اسم الصفحة) و position (hero/inline/sticky/end/header/topbar).
 * يُرسَل تلقائياً إلى أي أداة موجودة: gtag (GA4) أو plausible أو umami أو dataLayer (GTM).
 * لإضافة أداة إحصائيات، ضع وسم السكربت في `analytics.headHtml`.
 */
/**
 * علامات {{تحقق}}:
 * false (الافتراضي للنشر) → تختفي العلامات الصفراء، وتظهر خلايا الجداول الفارغة بعبارة "حسب التطبيق".
 * true → تظهر العلامات الصفراء في كل الصفحات لمراجعتها قبل الإطلاق.
 * القائمة الكاملة دائماً عبر: npm run verify
 */
export const SHOW_VERIFY_MARKERS = false;

export const ANALYTICS = {
  eventName: 'referral_click',
  /** مثال Plausible:
   * '<script defer data-domain="paycards.io" src="https://plausible.io/js/script.js"></script>'
   */
  headHtml: '',
} as const;

export const NAV = [
  { href: '/articles', label: 'المقالات' },
  { href: '/#how', label: 'كيف تعمل؟' },
  { href: '/#faq', label: 'الأسئلة الشائعة' },
] as const;

export const CATEGORIES = {
  guides: { label: 'أدلة', description: 'شروحات أساسية خطوة بخطوة للبدء واستخدام البطاقة.' },
  'use-cases': { label: 'استخدامات', description: 'كيف تستخدم البطاقة في التسوق والاشتراكات والسفر.' },
  comparisons: { label: 'مقارنات', description: 'مقارنات صريحة بين RedotPay والبدائل المتاحة.' },
  troubleshooting: { label: 'حلول مشاكل', description: 'حلول للمشاكل الشائعة مثل رفض الدفع ومشاكل التوثيق.' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
