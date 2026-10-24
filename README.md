# PayCards — paycards.io

موقع عربي مستقل (Astro + Tailwind) يشرح الدفع بالعملات الرقمية عبر بطاقة RedotPay، مبني كموقع ثابت ويُنشر على Vercel.

## التشغيل

```bash
npm install
npm run dev       # معاينة محلية على http://localhost:4321
npm run build     # بناء الموقع في مجلد dist
npm run preview   # معاينة نسخة البناء
npm run verify    # عرض كل علامات {{تحقق}} المتبقية قبل الإطلاق
```

يتطلب Node.js 24، وهو الإصدار الذي يستخدمه مشروع Vercel (`engines` و`.nvmrc`).

## النشر على Vercel

اربط مستودع GitHub. يقرأ Vercel ملف `vercel.json`:

- تحويل `/go/redotpay` إلى رابط الإحالة.
- الروابط النظيفة دون `.html`.
- رؤوس الأمان والتخزين المؤقت.

**عند تغيير رابط الإحالة** غيّره في `src/config.ts` وفي `vercel.json` معاً. إذا اختلف الرابطان يتوقف البناء. مسار `/go/redotpay` تحويل على Vercel وليس صفحة في `npm run dev`.

## تغيير رابط الإحالة أو المكافأة

كل شيء في ملف واحد: **`src/config.ts`**

```ts
export const REFERRAL = {
  url: 'https://wap.redotpay.com/ar/invite/?referralId=yj8cq', // يجب أن يطابقه vercel.json
  code: 'yj8cq',                     // يُعرض مع زر النسخ، ولا يغيّر وجهة /go/
  bonus: '5 دولار',                  // ضع null لإخفاء المكافأة من كل الموقع
  ...
};
```

كل الأزرار تشير إلى `/go/redotpay` وتحمل `rel="nofollow sponsored noopener"`.

## علامات {{تحقق}}

الأرقام التي لم تُراجع بعد تُعلَّم داخلياً ولا تظهر للزائر ما دام `SHOW_VERIFY_MARKERS` يساوي `false`. للمراجعة:

- داخل المقالات (MDX): `<V n="رسوم إصدار البطاقة الافتراضية" />`
- داخل ملفات البيانات والـ frontmatter: `{{تحقق: رسوم إصدار البطاقة الافتراضية}}`

شغّل `npm run verify` لقائمة كاملة بالملف ورقم السطر والتعليق. بعد التحقق من المصدر الرسمي، احذف العلامة واكتب القيمة الصحيحة، ثم حدّث `SITE.lastReviewed` في `src/config.ts` (يظهر كتاريخ "آخر تحديث" تحت جدول الرسوم).

أهم الملفات التي تحتوي علامات: `src/data/home.ts` (جدول الرسوم والأسئلة الشائعة في الرئيسية) ثم المقالات.

## إضافة مقال جديد

أنشئ ملفاً في `src/content/articles/` باسم الـ slug، مثلاً `redotpay-atm-withdrawal.mdx`:

```mdx
---
title: "عنوان SEO حتى 60 حرفاً"
description: "وصف حتى 155 حرفاً"
slug: "redotpay-atm-withdrawal"
keyword: "الكلمة المفتاحية"
category: "guides"            # guides | use-cases | comparisons | troubleshooting
pubDate: 2026-10-15
updatedDate: 2026-10-20        # اختياري
summary: "الإجابة المختصرة التي تظهر في صندوق الملخص أعلى المقال."
cover: { icon: "card", hue: 160 }   # card | signup | topup | shopping | subscriptions | wallet | fees | compare
related: ["redotpay-fees"]           # اختياري
faq:
  - q: "سؤال؟"
    a: "جواب. يمكن استخدام {{تحقق: تعليق}} هنا."
---

نص المقال بالـ Markdown...

<CTABox />
```

المكوّنات المتاحة داخل أي مقال دون استيراد:

| المكوّن | الاستخدام |
|---|---|
| `<CTABox />` | صندوق دعوة في منتصف المقال (صندوق النهاية يُضاف تلقائياً) |
| `<V n="..." />` | علامة تحقق |
| `<CTAButton position="inline" label="ابدأ التسجيل" />` | زر إحالة منفرد |

الطول والوصف يُتحقق منهما تلقائياً عند البناء: إذا تجاوز العنوان 60 حرفاً أو الوصف 155 سيفشل البناء برسالة واضحة. تصنيف "حلول مشاكل" فارغ حالياً، فصفحته `noindex` وخارج خريطة الموقع إلى أن تضيف له مقالاً.

## الإحصائيات وتتبع الأزرار

كل زر إحالة يرسل حدث `referral_click` يحمل `page` و`placement` (موضع الزر). نسخ رمز الإحالة يرسل `referral_code_copy`.

Google Analytics 4 يعمل مع Consent Mode: `analytics_storage` مرفوض إلى أن يوافق الزائر. الحدث يُرسل أيضاً إلى `dataLayer`، وإلى Plausible أو Umami إن وُجدا.

## بنية المشروع

```
src/
  config.ts              ← الرابط والمكافأة والبريد وإظهار علامات التحقق (مصدر واحد)
  data/home.ts           ← محتوى الرئيسية: المزايا، الخطوات، الرسوم، المزايا/العيوب، FAQ
  content/articles/      ← المقالات (MDX)
  components/            ← CTABox، CTAButton، Card3D، FAQ، StickyCTA، TopBar ...
  layouts/               ← BaseLayout (SEO، OG، الوضع الداكن، التتبع) و PageLayout
  pages/                 ← الرئيسية، المقالات، التصنيفات، الصفحات الثابتة، 404
  lib/site.ts            ← كل JavaScript الموقع (التتبع، النسخ، الوضع الداكن، الزر الثابت)
public/
  robots.txt, favicon.svg, og-default.png ...
scripts/
  generate-images.mjs    ← يعيد توليد الأيقونات وصورة OG
  list-verify.mjs        ← npm run verify
```

## قبل الإطلاق

- [ ] `npm run verify` وحلّ كل علامات التحقق من المصدر الرسمي
- [ ] تأكد أن البريد `hello@paycards.io` يعمل أو غيّره في `SITE.email`
- [ ] أضف أداة الإحصائيات وحدّث صفحة الخصوصية
- [ ] جرّب `/go/redotpay` بعد النشر وتأكد أنه يفتح صفحة التسجيل الصحيحة
- [ ] أضف الموقع إلى Google Search Console وأرسل `https://www.paycards.io/sitemap-index.xml`
