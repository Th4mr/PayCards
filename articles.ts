import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE, CATEGORIES } from '../config';

export type Article = CollectionEntry<'articles'>;

export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles', ({ data }) => !data.draft);
  return all.sort(
    (a, b) =>
      +(b.data.updatedDate ?? b.data.pubDate) - +(a.data.updatedDate ?? a.data.pubDate) || a.data.order - b.data.order,
  );
}

/** عدد الكلمات في نص المقال بعد إزالة وسوم المكوّنات والرموز */
export function wordCount(body = ''): number {
  const text = body
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*|>`\-\[\]()]/g, ' ');
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** وقت القراءة بالدقائق (قارئ عربي ≈ 180 كلمة/دقيقة) */
export function readingMinutes(body = ''): number {
  return Math.max(1, Math.round(wordCount(body) / 180));
}

export function readingLabel(min: number): string {
  if (min === 1) return 'دقيقة واحدة';
  if (min === 2) return 'دقيقتان';
  if (min <= 10) return `${min} دقائق`;
  return `${min} دقيقة`;
}

export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('ar', { year: 'numeric', month: 'long', day: 'numeric', numberingSystem: 'latn' }).format(d);
}

export function categoryLabel(key: keyof typeof CATEGORIES): string {
  return CATEGORIES[key].label;
}

export function articleUrl(a: Article): string {
  return `/articles/${a.id}`;
}

export async function relatedArticles(a: Article, all: Article[], n = 3): Promise<Article[]> {
  const others = all.filter((x) => x.id !== a.id);
  const picked = a.data.related.map((s) => others.find((x) => x.id === s)).filter(Boolean) as Article[];
  for (const x of others) {
    if (picked.length >= n) break;
    if (!picked.includes(x) && x.data.category === a.data.category) picked.push(x);
  }
  for (const x of others) {
    if (picked.length >= n) break;
    if (!picked.includes(x)) picked.push(x);
  }
  return picked.slice(0, n);
}

/* ---------------- Schema.org ---------------- */

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#org`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/apple-touch-icon.png`,
  email: SITE.email,
  description: SITE.description,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'ar',
  publisher: { '@id': `${SITE.url}/#org` },
};

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: stripVerify(i.a) },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.url, SITE.url).href,
    })),
  };
}

export function articleSchema(a: Article) {
  const url = new URL(articleUrl(a), SITE.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.data.title,
    description: a.data.description,
    inLanguage: 'ar',
    mainEntityOfPage: url,
    url,
    image: `${SITE.url}/og-default.png`,
    datePublished: a.data.pubDate.toISOString(),
    dateModified: (a.data.updatedDate ?? a.data.pubDate).toISOString(),
    keywords: a.data.keyword,
    author: { '@type': 'Organization', name: 'فريق PayCards', url: `${SITE.url}/about` },
    publisher: { '@id': `${SITE.url}/#org`, '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/apple-touch-icon.png` } },
  };
}

/** يحوّل {{تحقق: ...}} في نصوص الأسئلة الشائعة إلى نص مقروء في الـ Schema */
export function stripVerify(s: string): string {
  return s
    .replace(/\s*\{\{تحقق(?::[^}]*)?\}\}/g, '');
}
