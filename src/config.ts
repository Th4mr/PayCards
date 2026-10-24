/**
 * ملف الإعدادات المركزي لموقع PayCards
 * ------------------------------------------------------------
 * غيّر رابط الإحالة أو المكافأة من هنا، ووافق الوجهة نفسها في vercel.json.
 * البناء يتوقف إذا اختلف الملفان.
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
  /** تاريخ آخر مراجعة لصفحات السياسات، ويُعرض في الإفصاح والخصوصية والشروط */
  lastReviewed: '2026-10-24',
} as const;

export const REFERRAL = {
  /** رابط دعوة RedotPay المباشر — لا يُكتب في الصفحات؛ يجب أن يطابقه vercel.json */
  url: 'https://wap.redotpay.com/ar/invite/?referralId=yj8cq',
  /** المسار الداخلي الذي تشير إليه كل الأزرار */
  goPath: '/go/redotpay',
  /** يُعرض مع زر النسخ. مضمّن في رابط الدعوة أعلاه */
  code: 'yj8cq',
  /** نص المكافأة المختصر. ضع null لإخفائها من كل الموقع */
  bonus: '5 دولار' as string | null,
  /** شروط المكافأة كما نشرتها RedotPay. تختفي إذا كانت bonus تساوي null */
  bonusTerms: 'رصيد إنفاق لمدة 30 يوماً من استلامه، ولا يُستخدم لرسوم إصدار البطاقة' as string | null,
  /** قيمة rel لكل روابط الإحالة */
  rel: 'nofollow sponsored noopener',
} as const;

/**
 * علامات {{تحقق}} داخلية للمراجعة فقط (npm run verify).
 * false → لا تظهر للزائر. خلية لا تحوي سوى العلامة تُعرض بعبارة محايدة من V.astro.
 */
export const SHOW_VERIFY_MARKERS = false;

export const ANALYTICS = {
  /** نقرات روابط /go/redotpay. المعامل placement هو موضع الزر. */
  eventName: 'referral_click',
  codeCopyEvent: 'referral_code_copy',
  /**
   * سكربت Google Analytics لا يُحمَّل إلا بعد موافقة محفوظة.
   * الزائر الجديد لا يُرسل أي طلب إلى Google إلى أن يضغط «موافقة».
   */
  headHtml: `<script>
  try {
    if (localStorage.getItem('pc-consent') === 'granted') {
      window.__pcGa = 1;
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-XW4F5GBPLM');
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XW4F5GBPLM';
      document.head.appendChild(s);
    }
  } catch (e) {}
</script>`,
} as const;

export const NAV = [
  { href: '/articles', label: 'المقالات' },
  { href: '/#how', label: 'كيف تعمل؟' },
  { href: '/#faq', label: 'الأسئلة الشائعة' },
] as const;

export const CATEGORIES = {
  guides: { label: 'أدلة', description: 'شروحات عملية خطوة بخطوة لشراء العملات الرقمية وتحويلها وحمايتها والدفع بها.' },
  'use-cases': { label: 'استخدامات', description: 'كيف تدفع بالعملات الرقمية في التسوق والاشتراكات والسفر والإعلانات والعمل الحر.' },
  comparisons: { label: 'مقارنات', description: 'مقارنات صريحة بين البطاقات والمحافظ وطرق الدفع المختلفة لتختار الأنسب لك.' },
  troubleshooting: { label: 'حلول مشاكل', description: 'حلول عملية لمشاكل رفض الدفع وتوثيق الهوية والتحويلات الخاطئة.' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
