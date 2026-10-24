import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { SITE, REFERRAL, REFERRAL_EN, REFERRAL_FR } from './src/config';
import { pairFor } from './src/i18n/routes';

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
        for (const ref of [REFERRAL, REFERRAL_EN, REFERRAL_FR]) {
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
    locales: ['ar', 'en', 'fr'],
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
        if (!pair) return item;
        const links: { lang: string; url: string }[] = [];
        if (pair.ar) links.push({ lang: 'ar', url: new URL(pair.ar, SITE.url).href });
        if (pair.en) links.push({ lang: 'en', url: new URL(pair.en, SITE.url).href });
        if (pair.fr) links.push({ lang: 'fr', url: new URL(pair.fr, SITE.url).href });
        if (pair.ar) links.push({ lang: 'x-default', url: new URL(pair.ar, SITE.url).href });
        else if (pair.en && pair.fr) links.push({ lang: 'x-default', url: new URL(pair.en, SITE.url).href });
        if (links.length < 2) return item;
        return { ...item, links };
      },
    }),
    paycardsBuild(),
  ],
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
