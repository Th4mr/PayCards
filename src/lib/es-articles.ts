import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../config';
import { stripVerify } from './articles';

export type ArticleEs = CollectionEntry<'articlesEs'>;

const CATEGORIES = {
  guides: 'Guías',
  'use-cases': 'Usos',
  comparisons: 'Comparativas',
  troubleshooting: 'Solución de problemas',
} as const;

export async function getArticles(): Promise<ArticleEs[]> {
  const all = await getCollection('articlesEs', ({ data }) => !data.draft);
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
  return min === 1 ? '1 min de lectura' : `${min} min de lectura`;
}

export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }).format(d);
}

export function categoryLabel(key: keyof typeof CATEGORIES): string {
  return CATEGORIES[key];
}

export function articleUrl(a: ArticleEs): string {
  return `/es/articles/${a.id}`;
}

export async function relatedArticles(a: ArticleEs, all: ArticleEs[], n = 3): Promise<ArticleEs[]> {
  const others = all.filter((x) => x.id !== a.id);
  const picked = a.data.related.map((s) => others.find((x) => x.id === s)).filter(Boolean) as ArticleEs[];
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
    inLanguage: 'es',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: stripVerify(s.text),
    })),
  };
}

export function articleSchema(a: ArticleEs) {
  const url = new URL(articleUrl(a), SITE.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.data.h1 ?? a.data.title,
    description: a.data.description,
    inLanguage: 'es',
    mainEntityOfPage: url,
    url,
    image: `${SITE.url}/og/es-${a.id}.png`,
    datePublished: a.data.pubDate.toISOString(),
    dateModified: (a.data.updatedDate ?? a.data.pubDate).toISOString(),
    keywords: a.data.keyword,
    author: { '@type': 'Organization', name: 'equipo PayCards', url: `${SITE.url}/es/about` },
    publisher: { '@id': `${SITE.url}/#org`, '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/apple-touch-icon.png` } },
  };
}

export function webPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    inLanguage: 'es',
    url: new URL(path, SITE.url).href,
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#org` },
  };
}
