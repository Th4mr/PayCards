# PayCards — paycards.io

موقع عربي مستقل (Astro + Tailwind) يشرح الدفع بالعملات الرقمية عبر بطاقة RedotPay، مبني كموقع ثابت بالكامل وجاهز للنشر على Cloudflare Pages.

## التشغيل

```bash
npm install
npm run dev       # معاينة محلية على http://localhost:4321
npm run build     # بناء الموقع في مجلد dist
npm run preview   # معاينة نسخة البناء
npm run verify    # عرض كل علامات {{تحقق}} المتبقية قبل الإطلاق
```

يتطلب Node.js 22 أو أحدث.

## النشر على Cloudflare Pages

1. ارفع المشروع إلى مستودع GitHub أو GitLab.
2. في Cloudflare: **Workers & Pages ← Create ← Pages ← Connect to Git**.
3. الإعدادات:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - متغير بيئة: `NODE_VERSION = 22`
4. اربط الدومين `paycards.io` من تبويب **Custom domains**.

بديل سريع دون Git: `npm run build` ثم `npx wrangler pages deploy dist`.

> مسار `/go/redotpay` يعمل على Cloudflare فقط (عبر ملف `_redirects`)، ولن يعمل في `npm run dev`. لتجربته محلياً: `npx wrangler pages dev dist`.

## النشر على Vercel

المشروع يعمل على Vercel دون إعداد إضافي: اربط مستودع GitHub، وسيقرأ Vercel ملف `vercel.json` تلقائياً. هذا الملف مسؤول عن:

- تحويل `/go/redotpay` إلى رابط الإحالة (على Vercel لا يعمل ملف `_redirects` الخاص بـ Cloudflare).
- الروابط النظيفة دون `.html` مثل `/articles/redotpay-fees`.
- رؤوس الأمان والتخزين المؤقت.

**عند تغيير رابط الإحالة** غيّره في `src/config.ts` وفي `vercel.json` معاً. إذا اختلف الرابطان يتوقف البناء برسالة واضحة، حتى لا يُنشر الموقع برابط خاطئ.

## تغيير رابط الإحالة أو المكافأة

كل شيء في ملف واحد: **`src/config.ts`**

```ts
export const REFERRAL = {
  url: 'https://url.hk/i/ar/yj8cq', // الرابط الأصلي — لا يظهر في أي صفحة
  bonus: '5 دولار',                  // ضع null لإخفاء المكافأة من كل الموقع
  ...
};
```

ملف `_redirects` يُولَّد تلقائياً من هذه القيم عند كل بناء، فلا تعدّله يدوياً. كل الأزرار تشير إلى `/go/redotpay` وتحمل `rel="nofollow sponsored noopener"`.

## علامات {{تحقق}}

كل رقم أو تفصيل قابل للتغيّر (رسوم، حدود، دول، شبكات، مكافآت) مكتوب كعلامة تحقق صفراء تظهر في الصفحة حتى لا تنساها:

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

كل زر إحالة يرسل حدث `referral_click` يحمل `page` (اسم الصفحة) و`position` (hero / inline / sticky / end / header / topbar / summary / sidebar / steps / mobile-menu).

الحدث يُرسل تلقائياً إلى أي أداة موجودة في الصفحة: Google Analytics 4 (gtag)، أو GTM (dataLayer)، أو Plausible، أو Umami. لإضافة الأداة ضع وسمها في `ANALYTICS.headHtml` في `src/config.ts`، ثم حدّث صفحة الخصوصية `src/pages/privacy.astro` باسمها.

ملاحظة: Cloudflare Web Analytics المجاني لا يدعم الأحداث المخصصة؛ لتتبع النقرات استخدم إحدى الأدوات أعلاه.

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
  _headers, robots.txt, favicon.svg, og-default.png ...
scripts/
  generate-images.mjs    ← يعيد توليد الأيقونات وصورة OG
  list-verify.mjs        ← npm run verify
```

## قبل الإطلاق

- [ ] `npm run verify` وحلّ كل علامات التحقق من المصدر الرسمي
- [ ] تأكد أن البريد `hello@paycards.io` يعمل أو غيّره في `SITE.email`
- [ ] أضف أداة الإحصائيات وحدّث صفحة الخصوصية
- [ ] جرّب `/go/redotpay` بعد النشر وتأكد أنه يفتح صفحة التسجيل الصحيحة
- [ ] أضف الموقع إلى Google Search Console وأرسل `https://paycards.io/sitemap-index.xml`
