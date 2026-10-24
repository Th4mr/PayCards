import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { SITE, REFERRAL } from './src/config';

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
        const r = (vercel.redirects || []).find((x: { source?: string }) => x.source === REFERRAL.goPath);
        if (!r || r.destination !== REFERRAL.url) {
          throw new Error(
            `رابط الإحالة في vercel.json (${r?.destination ?? 'غير موجود'}) لا يطابق src/config.ts (${REFERRAL.url}). حدّث الملفين بالرابط نفسه.`,
          );
        }
        logger.info(`vercel.json: ${REFERRAL.goPath} → ${r.destination}`);
      },
      'astro:build:done': async ({ logger }) => {
        try {
          const out = execSync('node scripts/list-verify.mjs', { encoding: 'utf8' }).trim().split('\n').pop();
          logger.warn(`${out} شغّل "npm run verify" لعرض القائمة قبل الإطلاق.`);
        } catch {}
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
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        if (page.includes('/404') || page.includes('/go/')) return false;
        const m = page.match(/\/articles\/category\/([\w-]+)/);
        return !m || usedCategories.has(m[1]);
      },
      changefreq: 'weekly',
    }),
    paycardsBuild(),
  ],
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
