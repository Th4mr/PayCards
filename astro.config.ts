import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { SITE, REFERRAL, REFERRAL_EN, REFERRAL_FR, REFERRAL_ES, REFERRAL_PT } from './src/config';
import { alternateLinks, pairFor } from './src/i18n/routes';

/**
 * يتحقق أن تحويل vercel.json يطابق رابط الإحالة في src/config.ts،
 * ويطبع عدد علامات {{تحقق}} المتبقية بعد البناء.
 */
function paycardsBuild() {
  return {
    name: 'paycards-build',
    hooks: {
      'astro:config:setup': ({ logger }) => {
        let vercel;
        try {
          vercel = JSON.parse(readFileSync('./vercel.json', 'utf8'));
        } catch {
          return;
        }
        for (const ref of [REFERRAL, REFERRAL_EN, REFERRAL_FR, REFERRAL_ES, REFERRAL_PT]) {
          const r = (vercel.redirects || []).find((x: { source?: string }) => x.source === ref.goPath);
          if (!r || r.destination !== ref.url) {
            throw new Error(
              `رابط الإحالة في vercel.json (${r?.destination ?? 'غير موجود'}) لا يطابق src/config.ts (${ref.url}). حدّث الملفين بالرابط نفسه.`,
            );
          }
          logger.info(`vercel.json: ${ref.goPath} → ${r.destination}`);
        }
      },
      'astro:build:done': async ({ logger }) => {
        try {
          const out = execSync('node scripts/list-verify.mjs', { encoding: 'utf8' }).trim().split('\n').pop();
          logger.warn(`${out} شغّل "npm run verify" لعرض القائمة قبل الإطلاق.`);
        } catch {}
        if (process.env.INDEXNOW === '1' || process.env.VERCEL_ENV === 'production') {
          try {
            const out = execSync('node scripts/indexnow.mjs', { encoding: 'utf8' }).trim();
            logger.info(out);
          } catch (error) {
            logger.warn(`IndexNow لم يُرسل: ${error instanceof Error ? error.message : error}`);
          }
        }
      },
    },
  };
}

function articleDates(): Map<string, string> {
  const map = new Map<string, string>();
  const groups: Array<[string, string]> = [
    ['src/content/articles', ''],
    ['src/content/en', '/en'],
    ['src/content/fr', '/fr'],
    ['src/content/es', '/es'],
    ['src/content/pt', '/pt'],
  ];
  for (const [dir, prefix] of groups) {
    for (const file of readdirSync(dir)) {
      if (!file.endsWith('.mdx')) continue;
      const fm = readFileSync(join(dir, file), 'utf8').split('---')[1] ?? '';
      const slug = fm.match(/^slug:\s*"([^"]+)"/m)?.[1] ?? file.replace(/\.mdx$/, '');
      const date = fm.match(/^updatedDate:\s*([0-9-]+)/m)?.[1] || fm.match(/^pubDate:\s*([0-9-]+)/m)?.[1];
      const cat = fm.match(/^category:\s*"?([\w-]+)"?/m)?.[1];
      if (!date) continue;
      map.set(`${prefix}/articles/${slug}`, date);
      if (cat) {
        const key = `${prefix}/articles/category/${cat}`;
        const prev = map.get(key);
        if (!prev || prev < date) map.set(key, date);
      }
    }
  }
  const touched = '2026-11-06';
  for (const path of ['/', '/en', '/fr', '/es', '/pt', '/articles', '/en/articles', '/fr/articles', '/es/articles', '/pt/articles', '/en/privacy', '/en/terms', '/fr/privacy', '/fr/disclosure', '/es/about', '/es/contact']) {
    map.set(path, touched);
  }
  return map;
}

const ARTICLE_DATES = articleDates();

function withLastmod<T extends { url: string }>(item: T): T & { lastmod?: string } {
  const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
  const lastmod = ARTICLE_DATES.get(path);
  return lastmod ? { ...item, lastmod } : item;
}

// التصنيفات التي تحتوي مقالات فعلاً (التصنيف الفارغ لا يدخل في sitemap لأنه noindex)
const usedCategories = new Set(
  readdirSync('./src/content/articles')
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => readFileSync(`./src/content/articles/${f}`, 'utf8').match(/^category:\s*"?([\w-]+)"?/m)?.[1])
    .filter(Boolean),
);

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en', 'fr', 'es', 'pt'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        if (page.includes('/404') || page.includes('/go/')) return false;
        const m = page.match(/\/articles\/category\/([\w-]+)/);
        return !m || usedCategories.has(m[1]);
      },
      changefreq: 'weekly',
      serialize(item) {
        const path = new URL(item.url).pathname;
        const pair = pairFor(path);
        const alternates = pair ? alternateLinks(pair) : [];
        const dated = withLastmod(item);
        if (alternates.length < 2) return dated;
        return { ...dated, links: alternates.map((link) => ({ lang: link.lang, url: new URL(link.path, SITE.url).href })) };
      },
    }),
    paycardsBuild(),
  ],
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
