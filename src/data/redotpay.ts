/**
 * حقائق RedotPay التي راجعناها من صفحاتها الرسمية فقط.
 * أي رقم هنا يجب أن يبقى مربوطاً بمصدره. ما لم يُنشر برقم ثابت لا يُخترع.
 * تاريخ مراجعتنا: 24 أكتوبر 2026.
 */

export const REVIEWED_ON = '2026-10-24';
export const REVIEWED_LABEL = '24 أكتوبر 2026';

export type Source = {
  id: string;
  title: string;
  url: string;
  /** تاريخ ظهور الصفحة كما عُرض في مركز المساعدة عند المراجعة */
  pageDate: string;
};

export const SOURCES = {
  issuance: {
    id: 'issuance',
    title: 'هل توجد رسوم لإصدار البطاقة؟',
    url: 'https://helpcenter.redotpay.com/en/articles/10566200-are-there-any-fees-for-getting-a-card',
    pageDate: '27 يوليو 2026',
  },
  physical: {
    id: 'physical',
    title: 'كيف أحصل على البطاقة المادية؟',
    url: 'https://helpcenter.redotpay.com/en/articles/10721338-how-do-i-get-a-physical-card',
    pageDate: '30 يوليو 2026',
  },
  inactivity: {
    id: 'inactivity',
    title: 'هل توجد رسوم إذا لم أستخدم البطاقة لشهر؟',
    url: 'https://helpcenter.redotpay.com/en/articles/10566233-are-there-any-fees-if-i-don-t-use-my-redotpay-card-for-a-month',
    pageDate: '28 يوليو 2026',
  },
  atm: {
    id: 'atm',
    title: 'هل يمكن السحب من الصراف وما الرسوم؟',
    url: 'https://helpcenter.redotpay.com/en/articles/10622095-can-i-withdraw-cash-from-an-atm-and-are-there-any-fees',
    pageDate: '27 يوليو 2026',
  },
  merchants: {
    id: 'merchants',
    title: 'أي المشتريات عليها رسم عملية؟',
    url: 'https://helpcenter.redotpay.com/en/articles/10339275-which-purchases-have-a-transaction-fee',
    pageDate: '3 سبتمبر 2026',
  },
  replaceVirtual: {
    id: 'replaceVirtual',
    title: 'استبدال البطاقة الافتراضية',
    url: 'https://helpcenter.redotpay.com/en/articles/10339267-how-to-replace-your-virtual-card',
    pageDate: '24 يوليو 2026',
  },
  reward: {
    id: 'reward',
    title: 'كيف أستخدم مكافأة التسجيل 5 دولارات؟',
    url: 'https://helpcenter.redotpay.com/en/articles/10339297-how-do-i-use-my-5-usds-sign-up-reward',
    pageDate: '26 يوليو 2026',
  },
  referral: {
    id: 'referral',
    title: 'كيف أستخدم رمز الإحالة؟',
    url: 'https://helpcenter.redotpay.com/en/articles/10521800-how-do-i-use-a-referral-code',
    pageDate: '26 يوليو 2026',
  },
  pro: {
    id: 'pro',
    title: 'البدء مع RedotPay Pro',
    url: 'https://helpcenter.redotpay.com/en/articles/14686020-getting-started-with-redotpay-pro',
    pageDate: '4 سبتمبر 2026',
  },
  where: {
    id: 'where',
    title: 'أين أستخدم بطاقة RedotPay؟',
    url: 'https://helpcenter.redotpay.com/en/articles/11027583-where-can-i-use-my-redotpay-card',
    pageDate: '4 سبتمبر 2026',
  },
  terms: {
    id: 'terms',
    title: 'شروط بطاقة RedotPay',
    url: 'https://www.redotpay.com/terms/redotpay-card',
    pageDate: 'نص الشروط المنشور',
  },
  services: {
    id: 'services',
    title: 'خدمات RedotPay والعملات المدعومة',
    url: 'https://helpcenter.redotpay.com/en/articles/11070044-redotpay-services-and-features',
    pageDate: '24 يوليو 2026',
  },
  deposits: {
    id: 'deposits',
    title: 'العملات والشبكات والحد الأدنى للإيداع',
    url: 'https://helpcenter.redotpay.com/en/articles/10693364-supported-cryptocurrencies-networks-minimum-deposits',
    pageDate: '21 يوليو 2026',
  },
  payments: {
    id: 'payments',
    title: 'كيف أدفع ببطاقة RedotPay؟',
    url: 'https://helpcenter.redotpay.com/en/articles/11027588-how-do-i-use-my-redotpay-card-for-payments',
    pageDate: 'صفحة المساعدة',
  },
  unsupported: {
    id: 'unsupported',
    title: 'الدول والمناطق غير المدعومة',
    url: 'https://helpcenter.redotpay.com/en/articles/10339263-unsupported-countries-regions',
    pageDate: '28 أغسطس 2026',
  },
  delivery: {
    id: 'delivery',
    title: 'قيود توصيل البطاقة',
    url: 'https://helpcenter.redotpay.com/en/articles/14255319-card-delivery-restrictions',
    pageDate: '21 يوليو 2026',
  },
  sg: {
    id: 'sg',
    title: 'صفحة برنامج سنغافورة',
    url: 'https://www.redotpay.com/sg',
    pageDate: 'صفحة المنتج',
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;

export type FeeRow = {
  item: string;
  value: string;
  detail: string;
  sourceId: SourceId | null;
  compact?: boolean;
};

/** نسب 1% و1.2% منشورة داخل صفحة السحب، والصفحة لا تصرّح إن كانت لكل الإنفاق أم للسحب فقط. */
export const FX_SCOPE_NOTE =
  'نسبتا 1% لتحويل العملات الرقمية و1.2% للمعاملة بعملة غير عملة البطاقة منشورتان في صفحة السحب من الصراف. الصفحة لا تقول صراحة إنهما تشملان كل عملية شراء أم السحب فقط، لذلك ننقلهما كما نُشرا وننصح بمقارنة المبلغ المخصوم في التطبيق.';

export const feeRows: FeeRow[] = [
  {
    item: 'إصدار البطاقة الافتراضية',
    value: '10 دولارات أمريكية، مرة واحدة',
    detail: 'تُخصم من الرصيد عند الإصدار. مكافأة الـ 5 دولارات لا تغطي هذا الرسم.',
    sourceId: 'issuance',
    compact: true,
  },
  {
    item: 'إصدار البطاقة المادية',
    value: '100 دولار أمريكي، مرة واحدة',
    detail: 'زر الطلب في التطبيق يعرض «Apply for card • 100 USD». الدفع يؤكد الطلب ولا يُلغى حسب صفحة الطلب.',
    sourceId: 'physical',
    compact: true,
  },
  {
    item: 'شحن البطاقة المادية',
    value: 'لا رسم شحن منفصل في الخطوات المنشورة',
    detail: 'صفحة الطلب تذكر رسم الإصدار 100 دولار ولا تذكر رسوم بريد مستقلة. راجع المبلغ الظاهر قبل الدفع.',
    sourceId: 'physical',
  },
  {
    item: 'رسوم شهرية أو سنوية للبطاقة العادية',
    value: 'لا توجد',
    detail: 'RedotPay تقول إنها لا تفرض رسوم إدارة أو رسوماً شهرية أو سنوية. اشتراك Pro اختياري ومنفصل.',
    sourceId: 'inactivity',
    compact: true,
  },
  {
    item: 'معاملة بعملة البطاقة',
    value: 'بلا رسم',
    detail: 'كما في جدول صفحة السحب من الصراف.',
    sourceId: 'atm',
    compact: true,
  },
  {
    item: 'معاملة بعملة أخرى',
    value: '1.2%',
    detail: FX_SCOPE_NOTE,
    sourceId: 'atm',
    compact: true,
  },
  {
    item: 'تحويل العملات الرقمية',
    value: '1%',
    detail: FX_SCOPE_NOTE,
    sourceId: 'atm',
    compact: true,
  },
  {
    item: 'سحب الصراف — بطاقة بالدولار',
    value: '2% حتى 10,000 دولار شهرياً، ثم 3%',
    detail: 'النسبة الأعلى تُحسب على المبلغ الذي يتجاوز 10,000 دولار في الشهر. رسم مشغّل الصراف منفصل.',
    sourceId: 'atm',
    compact: true,
  },
  {
    item: 'سحب الصراف — بطاقة بهونغ كونغ دولار',
    value: '2%',
    detail: 'رسم RedotPay على السحب. قد يضيف مشغّل الجهاز رسماً يظهر على شاشته.',
    sourceId: 'atm',
  },
  {
    item: 'تجار محددون',
    value: '1.5% بحد أدنى 0.50 دولار',
    detail:
      'تُعفى أول 3 عمليات مؤهلة لكل بطاقة في كل شهر تقويمي، ويُصفَّر العداد في اليوم الأول عند 00:00 بالتوقيت العالمي. القائمة الحالية: Gulf Health Counsel، Free Fire، PUBG Mobile، Brawl Stars، eFootball، Facebook Ads، Discord.',
    sourceId: 'merchants',
  },
  {
    item: 'استبدال البطاقة الافتراضية',
    value: '5 دولارات أول مرة، ثم 10 دولارات',
    detail: 'بين كل استبدالين 31 يوماً على الأقل. المكافآت لا تدفع هذا الرسم، ورقم البطاقة يبقى ويتغير CVV وتاريخ الانتهاء.',
    sourceId: 'replaceVirtual',
  },
  {
    item: 'استبدال البطاقة المادية',
    value: 'لا رقم في صفحة الاستبدال التي راجعناها',
    detail: 'صفحة الاستبدال المنشورة تخص البطاقة الافتراضية. راجع العرض داخل التطبيق قبل التأكيد.',
    sourceId: null,
  },
  {
    item: 'حدود الإنفاق والسحب العامة',
    value: 'لا رقم واحد منشور للجميع',
    detail: 'لم تعرض صفحات المساعدة التي راجعناها سقفاً يومياً أو شهرياً ثابتاً لكل الحسابات. الحد الظاهر في التطبيق هو المرجع.',
    sourceId: null,
  },
  {
    item: 'مكافأة التسجيل',
    value: '5 دولارات للإنفاق',
    detail: 'صالحة 30 يوماً من استلامها. تُستخدم للشراء بعد تفعيل البطاقة، ولا تدفع رسوم الإصدار أو الاستبدال.',
    sourceId: 'reward',
    compact: true,
  },
  {
    item: 'RedotPay Pro الشهري (اختياري)',
    value: '12.90 دولار كل شهر',
    detail: 'غير مسترد. يعفي مرة واحدة من رسم البطاقة الافتراضية (10 دولارات)، واسترداد 3% على مشتريات Apple Pay وGoogle Pay حتى 18 دولاراً شهرياً.',
    sourceId: 'pro',
  },
  {
    item: 'RedotPay Pro السنوي (اختياري)',
    value: '129 دولاراً في السنة',
    detail:
      'غير مسترد. يعفي مرة واحدة من رسم البطاقة المادية (100 دولار)، والاسترداد نفسه حتى 18 دولاراً، وإعفاء رسوم صراف RedotPay حتى 1,000 دولار شهرياً. رسوم مشغّل الصراف غير مشمولة.',
    sourceId: 'pro',
  },
];

export const NETWORK_COPY =
  'شروط البطاقة تسمّي برنامجي هونغ كونغ وسنغافورة برنامجي Visa، وصفحة برنامج سنغافورة تقول إن البطاقة تُصدر بترخيص من Visa. مركز المساعدة الأحدث يصف القبول لدى من يقبل «شبكات البطاقات الرئيسية»، لدى أكثر من 130 مليون تاجر، والبرنامج يُحدَّد حسب بلد الإقامة. لا نسمي الشبكة ماستركارد لأن مصادر RedotPay التي راجعناها لا تقول ذلك.';

export const ASSETS = ['USDT', 'USDC', 'BTC', 'ETH', 'BNB', 'SOL', 'TRX', 'XRP', 'SUI', 'S'] as const;

export const MERCHANT_FEE_NAMES = [
  'Gulf Health Counsel',
  'Free Fire',
  'PUBG Mobile',
  'Brawl Stars',
  'eFootball',
  'Facebook Ads',
  'Discord',
] as const;

/** [الاسم العربي, الاسم كما في الصفحة الرسمية] */
export const UNSUPPORTED_COUNTRIES: ReadonlyArray<readonly [string, string]> = [
  ['أفغانستان', 'Afghanistan'],
  ['ألبانيا', 'Albania'],
  ['بيلاروس', 'Belarus'],
  ['البوسنة والهرسك', 'Bosnia and Herzegovina'],
  ['جزيرة بوفيه', 'Bouvet Island'],
  ['بوركينا فاسو', 'Burkina Faso'],
  ['بوروندي', 'Burundi'],
  ['جمهورية أفريقيا الوسطى', 'Central African Republic'],
  ['جمهورية الكونغو الديمقراطية', 'Congo (Democratic Republic of the)'],
  ['كرواتيا', 'Croatia'],
  ['كوبا', 'Cuba'],
  ['إريتريا', 'Eritrea'],
  ['إثيوبيا', 'Ethiopia'],
  ['غينيا بيساو', 'Guinea-Bissau'],
  ['هايتي', 'Haiti'],
  ['إيران', 'Iran'],
  ['العراق', 'Iraq'],
  ['كوسوفو', 'Kosovo'],
  ['لبنان', 'Lebanon'],
  ['ليبيريا', 'Liberia'],
  ['ليبيا', 'Libya'],
  ['برّ الصين الرئيسي', 'Mainland China'],
  ['مالي', 'Mali'],
  ['الجبل الأسود', 'Montenegro'],
  ['ميانمار', 'Myanmar'],
  ['جزر الأنتيل الهولندية', 'Netherlands Antilles'],
  ['نيكاراغوا', 'Nicaragua'],
  ['كوريا الشمالية', 'North Korea'],
  ['مقدونيا الشمالية', 'North Macedonia'],
  ['روسيا', 'Russia'],
  ['صربيا', 'Serbia'],
  ['سلوفينيا', 'Slovenia'],
  ['الصومال', 'Somalia'],
  ['جنوب السودان', 'South Sudan'],
  ['السودان', 'Sudan'],
  ['سوريا', 'Syria'],
  ['أوكرانيا', 'Ukraine'],
  ['الولايات المتحدة', 'United States'],
  ['فنزويلا', 'Venezuela'],
  ['اليمن', 'Yemen'],
  ['زيمبابوي', 'Zimbabwe'],
];

export const DELIVERY_COUNTRIES: ReadonlyArray<readonly [string, string]> = [
  ['أفغانستان', 'Afghanistan'],
  ['ألبانيا', 'Albania'],
  ['بيلاروس', 'Belarus'],
  ['البوسنة والهرسك', 'Bosnia and Herzegovina'],
  ['جزيرة بوفيه', 'Bouvet Island'],
  ['بوركينا فاسو', 'Burkina Faso'],
  ['بوروندي', 'Burundi'],
  ['جمهورية أفريقيا الوسطى', 'Central African Republic'],
  ['جمهورية الكونغو الديمقراطية', 'Congo (Democratic Republic of the)'],
  ['كرواتيا', 'Croatia'],
  ['كوبا', 'Cuba'],
  ['مصر', 'Egypt'],
  ['إريتريا', 'Eritrea'],
  ['إثيوبيا', 'Ethiopia'],
  ['غينيا بيساو', 'Guinea-Bissau'],
  ['هايتي', 'Haiti'],
  ['الهند', 'India'],
  ['إندونيسيا', 'Indonesia'],
  ['إيران', 'Iran'],
  ['العراق', 'Iraq'],
  ['كوسوفو', 'Kosovo'],
  ['لبنان', 'Lebanon'],
  ['ليبيريا', 'Liberia'],
  ['ليبيا', 'Libya'],
  ['برّ الصين الرئيسي', 'Mainland China'],
  ['مالي', 'Mali'],
  ['الجبل الأسود', 'Montenegro'],
  ['المغرب', 'Morocco'],
  ['ميانمار', 'Myanmar'],
  ['نيبال', 'Nepal'],
  ['جزر الأنتيل الهولندية', 'Netherlands Antilles'],
  ['نيكاراغوا', 'Nicaragua'],
  ['كوريا الشمالية', 'North Korea'],
  ['فلسطين', 'Palestine'],
  ['روسيا', 'Russia'],
  ['صربيا', 'Serbia'],
  ['سلوفينيا', 'Slovenia'],
  ['الصومال', 'Somalia'],
  ['جنوب السودان', 'South Sudan'],
  ['السودان', 'Sudan'],
  ['سوريا', 'Syria'],
  ['تونس', 'Tunisia'],
  ['تركيا', 'Turkey'],
  ['أوكرانيا', 'Ukraine'],
  ['الولايات المتحدة', 'United States'],
  ['فنزويلا', 'Venezuela'],
  ['اليمن', 'Yemen'],
];

const unsupportedEn = new Set(UNSUPPORTED_COUNTRIES.map(([, en]) => en));

/** دول يمنع شحن البطاقة المادية إليها دون أن تكون في قائمة منع التسجيل. */
export const DELIVERY_ONLY_COUNTRIES = DELIVERY_COUNTRIES.filter(([, en]) => !unsupportedEn.has(en));
