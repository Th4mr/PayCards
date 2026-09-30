import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { writeFile } from 'node:fs/promises';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { SITE, REFERRAL } from './src/config';

/**
 * يولّد ملف _redirects لـ Cloudflare Pages من src/config.ts
 * ويطبع عدد علامات {{تحقق}} المتبقية في الموقع بعد البناء.
 */
function paycardsBuild() {
  return {
    name: 'paycards-build',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const lines = [
          '# يُولَّد تلقائياً من src/config.ts — لا تعدّله يدوياً',
          `${REFERRAL.goPath} ${REFERRAL.url} ${REFERRAL.redirectStatus}`,
          `${REFERRAL.goPath}/ ${REFERRAL.url} ${REFERRAL.redirectStatus}`,
          '',
        ];
        await writeFile(join(out, '_redirects'), lines.join('\n'), 'utf8');
        logger.info(`_redirects: ${REFERRAL.goPath} → ${REFERRAL.url} (${REFERRAL.redirectStatus})`);

        // تذكير بعدد بنود التحقق المتبقية (ظاهرة أو مخفية)
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
