/**
 * حقائق RedotPay التي راجعناها من صفحاتها الرسمية فقط.
 * أي رقم هنا يجب أن يبقى مربوطاً بمصدره. ما لم يُنشر برقم ثابت لا يُخترع.
 * تاريخ مراجعتنا: 25 أكتوبر 2026.
 */

export const REVIEWED_ON = '2026-10-25';
export const REVIEWED_LABEL = '25 أكتوبر 2026';

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
  location: {
    id: 'location',
    title: 'قيود الوصول حسب الموقع',
    url: 'https://helpcenter.redotpay.com/en/articles/14252906-location-based-access-restrictions',
    pageDate: '28 أغسطس 2026',
  },
  issuanceBlock: {
    id: 'issuanceBlock',
    title: 'قيود إصدار البطاقة',
    url: 'https://helpcenter.redotpay.com/en/articles/14254838-card-issuance-restrictions',
    pageDate: '28 أغسطس 2026',
  },
  depositHow: {
    id: 'depositHow',
    title: 'كيف أودع العملات في RedotPay؟',
    url: 'https://helpcenter.redotpay.com/en/articles/10339284-how-do-i-deposit-crypto-to-my-redotpay-account',
    pageDate: '28 يوليو 2026',
  },
  limits: {
    id: 'limits',
    title: 'قيود بطاقة RedotPay ورسومها',
    url: 'https://helpcenter.redotpay.com/en/articles/10339271-redotpay-card-limitations-fees',
    pageDate: '24 يوليو 2026',
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

/** نسب 1% و1.2% في القسم 2 «Transactions» من جدول القيود والرسوم: رسوم معاملات عامة، لا رسوم صراف فقط. */
export const FX_SCOPE_NOTE =
  'نسبتا 1% لتحويل العملات الرقمية و1.2% للمعاملة بعملة غير عملة البطاقة واردتان في القسم 2 «Transactions» من جدول قيود البطاقة ورسومها (تحديث الصفحة 24 يوليو 2026). هما رسوم معاملات عامة، لا بنداً خاصاً بالصراف. قارن المبلغ المخصوم في التطبيق.';

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
    value: 'البريد العادي: معفى في الجدول؛ DHL عند الدفع',
    detail: 'مقال الطلب (30 يوليو 2026) يذكر 100 دولار ولا يضع بند بريد. جدول الرسوم في صفحة القيود والرسوم (تحديث الصفحة 24 يوليو 2026) يكتب Standard Mail: Waived، وDHL Express يختلف حسب البلد ويُحسب عند الدفع، وهذا جدول الرسوم هو الموسوم بسارٍ من 1 ديسمبر 2025. جدول القيود في الصفحة نفسها بلا تاريخ خاص به. مقال المدة (22 يوليو 2026): DHL عادة 3–10 أيام، والبريد العادي عادة 5–30 يوماً. المبلغ على شاشة الدفع هو الذي يُحصَّل.',
    sourceId: 'limits',
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
    sourceId: 'limits',
    compact: true,
  },
  {
    item: 'تحويل العملات الرقمية',
    value: '1%',
    detail: FX_SCOPE_NOTE,
    sourceId: 'limits',
    compact: true,
  },
  {
    item: 'معاملة صغيرة',
    value: '0.2 دولار بعد 5 مجانية',
    detail:
      'في جدول الرسوم على صفحة القيود (الصورة موسومة بسارية من 1 ديسمبر 2025): تُعفى أول 5 عمليات لكل بطاقة في الشهر بمبلغ 1.00 دولار أو أقل، ثم 0.2 دولار. هذا تفويض صغير لا رسم رفض.',
    sourceId: 'limits',
  },
  {
    item: 'عملية مرفوضة',
    value: '0.5 دولار بعد 3 مجانية',
    detail:
      'الجدول نفسه يعفي أول 3 عمليات مرفوضة لكل بطاقة في الشهر، ثم 0.5 دولار. الأمثلة: رصيد غير كافٍ، بطاقة مجمّدة، بطاقة مفقودة، بيانات غير صحيحة، والقائمة غير حصرية. صفحة أخرى تقول إن مبلغ الشراء المرفوض نفسه لا يُخصم، وإن الحجز المعلّق يُرد عادة خلال 2 إلى 5 أيام.',
    sourceId: 'limits',
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
    value: '100,000 دولار للعملية، و1,000,000 دولار يومياً',
    detail: 'الرقمان في عمودي جدول القيود. جدول القيود بلا تاريخ خاص به، وصفحة الجدول حُدّثت في 24 يوليو 2026. سطر «سارٍ من 1 ديسمبر 2025» يخص جدول الرسوم لا هذه السقوف. سقف الصراف منفصل: 3,750 دولار أو 23,000 دولار هونغ كونغ يومياً، و50,000 دولار أو 75,000 دولار هونغ كونغ شهرياً، مع ملاحظة أن بعض بطاقات الدولار حدها 3,000 يومياً و10,000 شهرياً. عدد السحوبات 3 في اليوم و30 في الشهر. حدّك داخل التطبيق قد يكون أضيق.',
    sourceId: 'limits',
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

/** قائمة صفحة الخدمات بتاريخ 24 يوليو 2026. العملات الأحدث لها مقالاتها ولا تُنسب إلى هذه الصفحة. */
export const ASSETS = ['USDT', 'USDC', 'BTC', 'ETH', 'BNB', 'SOL', 'TRX', 'XRP', 'SUI', 'S'] as const;

/**
 * جدول الحد الأدنى كما في صورة مقال الشبكات (21 يوليو 2026).
 * حد USDT وUSDC هو لكل شبكة مذكورة. الشبكات غير المذكورة هنا لا تُخترع.
 * الصورة ما زالت تسمّي TON. إعلان 27 يوليو 2026 يقول إن TON تحوّلت إلى GRAM،
 * ولا حد منشور لـ GRAM أو RLUSD أو BCH أو LTC في هذه الصورة.
 */
export const DEPOSIT_MINIMUMS: ReadonlyArray<{ asset: string; networks: string; minimum: string }> = [
  { asset: 'USDT', networks: 'ERC-20, BEP-20, opBNB, TRC20, Solana, TON, Arbitrum One', minimum: '1.00 USDT' },
  { asset: 'USDC', networks: 'ERC-20, BEP-20, Polygon, Solana, Sonic, Base, Arbitrum One, SUI', minimum: '1.00 USDC' },
  { asset: 'BTC', networks: '', minimum: '0.0001 BTC' },
  { asset: 'ETH', networks: 'ERC-20, BEP-20', minimum: '0.001 ETH' },
  { asset: 'SOL', networks: '', minimum: '0.01 SOL' },
  { asset: 'S', networks: '', minimum: '1 S' },
  { asset: 'TRX', networks: '', minimum: '1 TRX' },
  { asset: 'TON', networks: '', minimum: '0.1 TON' },
  { asset: 'XRP', networks: '', minimum: '0.1 XRP' },
  { asset: 'BNB', networks: '', minimum: '0.001 BNB' },
  { asset: 'SUI', networks: '', minimum: '0.1 SUI' },
];

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

/** من هو موجود في هذه الأماكن لا يفتح التطبيق. الأسماء كما في الصفحة الإنجليزية. */
export const LOCATION_COUNTRIES = [
  'Afghanistan',
  'Belarus',
  'Bosnia and Herzegovina',
  'Burkina Faso',
  'Burundi',
  'Central African Republic',
  'Congo (Democratic Republic of the)',
  'Croatia',
  'Cuba',
  'Eritrea',
  'Ethiopia',
  'Guinea-Bissau',
  'Haiti',
  'Iran',
  'Iraq',
  'Lebanon',
  'Liberia',
  'Libya',
  'Mainland China',
  'Mali',
  'Montenegro',
  'Myanmar',
  'Nicaragua',
  'North Korea',
  'North Macedonia',
  'Russia',
  'Serbia',
  'Slovenia',
  'Somalia',
  'South Sudan',
  'Sudan',
  'Syria',
  'Tanzania',
  'Ukraine',
  'United States',
  'Venezuela',
  'Yemen',
  'Zimbabwe',
] as const;

/** المقيمون في هذه المناطق لا تُصدر لهم بطاقة افتراضية ولا مادية، ولا تُسجَّل عنوان فوترة. */
export const CARD_ISSUANCE_COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Belarus',
  'Bosnia and Herzegovina',
  'Bouvet Island',
  'Burkina Faso',
  'Burundi',
  'Central African Republic',
  'Congo (Democratic Republic of the)',
  'Croatia',
  'Cuba',
  'Eritrea',
  'Ethiopia',
  'Guinea-Bissau',
  'Haiti',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Kosovo',
  'Lebanon',
  'Liberia',
  'Libya',
  'Mainland China',
  'Mali',
  'Montenegro',
  'Morocco',
  'Myanmar',
  'Nepal',
  'Netherlands Antilles',
  'Nicaragua',
  'North Korea',
  'North Macedonia',
  'Russia',
  'Serbia',
  'Singapore',
  'Slovenia',
  'Somalia',
  'South Sudan',
  'Sudan',
  'Syria',
  'Turkey',
  'Ukraine',
  'United States',
  'Venezuela',
  'Yemen',
  'Zimbabwe',
] as const;

const EXTRA_AR: Record<string, string> = {
  Tanzania: 'تنزانيا',
  Singapore: 'سنغافورة',
};

export function countryPair(en: string): readonly [string, string] {
  const known = [...UNSUPPORTED_COUNTRIES, ...DELIVERY_COUNTRIES].find(([, name]) => name === en);
  return [known?.[0] ?? EXTRA_AR[en] ?? en, en];
}

const unsupportedEn = new Set(UNSUPPORTED_COUNTRIES.map(([, en]) => en));

/** دول يمنع شحن البطاقة المادية إليها دون أن تكون في قائمة منع التسجيل. */
export const DELIVERY_ONLY_COUNTRIES = DELIVERY_COUNTRIES.filter(([, en]) => !unsupportedEn.has(en));
