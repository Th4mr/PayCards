import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../config';
import { stripVerify } from './articles';

export type ArticleEn = CollectionEntry<'articlesEn'>;

const CATEGORIES = {
  guides: 'Guides',
  'use-cases': 'Use cases',
  comparisons: 'Comparisons',
  troubleshooting: 'Fixes',
} as const;

export async function getArticles(): Promise<ArticleEn[]> {
  const all = await getCollection('articlesEn', ({ data }) => !data.draft);
  return all.sort(
    (a, b) =>
      +(b.data.updatedDate ?? b.data.pubDate) - +(a.data.updatedDate ?? a.data.pubDate) || a.data.order - b.data.order,
  );
}

export function wordCount(body = ''): number {
  return body
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*|>`\-\[\]()]/g, ' ')
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export function readingMinutes(body = ''): number {
  return Math.max(1, Math.round(wordCount(body) / 200));
}

export function readingLabel(min: number): string {
  return min === 1 ? '1 min read' : `${min} min read`;
}

export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }).format(d);
}

export function categoryLabel(key: keyof typeof CATEGORIES): string {
  return CATEGORIES[key];
}

export function articleUrl(a: ArticleEn): string {
  return `/en/articles/${a.id}`;
}

export async function relatedArticles(a: ArticleEn, all: ArticleEn[], n = 3): Promise<ArticleEn[]> {
  const others = all.filter((x) => x.id !== a.id);
  const picked = a.data.related.map((s) => others.find((x) => x.id === s)).filter(Boolean) as ArticleEn[];
  for (const x of others) {
    if (picked.length >= n) break;
    if (!picked.includes(x) && x.data.category === a.data.category) picked.push(x);
  }
  return picked.slice(0, n);
}

export function howToSchema(name: string, description: string, steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    inLanguage: 'en',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: stripVerify(s.text),
    })),
  };
}

export function articleSchema(a: ArticleEn) {
  const url = new URL(articleUrl(a), SITE.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.data.h1 ?? a.data.title,
    description: a.data.description,
    inLanguage: 'en',
    mainEntityOfPage: url,
    url,
    image: `${SITE.url}/og/en-${a.id}.png`,
    datePublished: a.data.pubDate.toISOString(),
    dateModified: (a.data.updatedDate ?? a.data.pubDate).toISOString(),
    keywords: a.data.keyword,
    author: { '@type': 'Organization', name: 'PayCards team', url: `${SITE.url}/en/about` },
    publisher: { '@id': `${SITE.url}/#org`, '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/apple-touch-icon.png` } },
  };
}

export function webPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    inLanguage: 'en',
    url: new URL(path, SITE.url).href,
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#org` },
  };
}
