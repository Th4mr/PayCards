/**
 * يولّد صور مشاركة 1200×630 لكل مقال وللصفحة الرئيسية وقت البناء.
 * النص العربي يُشكَّل عبر resvg (HarfBuzz) وخط IBM Plex Sans Arabic.
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'public/og');
const FONT_BOLD = join(ROOT, 'assets/fonts/IBMPlexSansArabic-Bold.ttf');
const FONT_REG = join(ROOT, 'assets/fonts/IBMPlexSansArabic-Regular.ttf');

function field(fm, key) {
  const quoted = fm.match(new RegExp(`^${key}:\\s*"(.*)"\\s*$`, 'm'));
  if (quoted) return quoted[1].replace(/\\"/g, '"');
  const plain = fm.match(new RegExp(`^${key}:\\s*(.+)\\s*$`, 'm'));
  return plain ? plain[1].replace(/^['"]|['"]$/g, '') : '';
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function wrap(text, max) {
  const words = text.trim().split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if ([...next].length > max && cur) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 4);
}

function svg({ kicker, title, description }) {
  const titleLines = wrap(title, 28);
  const descLines = wrap(description, 42).slice(0, 2);
  const titleStart = 210;
  const titleSvg = titleLines
    .map((line, i) => `<text x="1080" y="${titleStart + i * 78}" text-anchor="end" direction="rtl" font-family="IBM Plex Sans Arabic" font-weight="700" font-size="60" fill="#f4f7fb">${esc(line)}</text>`)
    .join('');
  const descStart = titleStart + titleLines.length * 78 + 16;
  const descSvg = descLines
    .map((line, i) => `<text x="1080" y="${descStart + i * 40}" text-anchor="end" direction="rtl" font-family="IBM Plex Sans Arabic" font-weight="400" font-size="28" fill="#b7c3d6">${esc(line)}</text>`)
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#07111f"/>
      <stop offset="1" stop-color="#10261f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="14" height="630" fill="#2ee6a8"/>
  <circle cx="180" cy="520" r="180" fill="#2ee6a8" fill-opacity="0.08"/>
  <text x="1080" y="110" text-anchor="end" direction="rtl" font-family="IBM Plex Sans Arabic" font-weight="700" font-size="28" fill="#2ee6a8">${esc(kicker)}</text>
  ${titleSvg}
  ${descSvg}
  <text x="1080" y="580" text-anchor="end" direction="ltr" font-family="IBM Plex Sans Arabic" font-weight="400" font-size="24" fill="#8ea0b8">paycards.io</text>
</svg>`;
}

function png(markup) {
  const resvg = new Resvg(markup, {
    font: {
      fontFiles: [FONT_BOLD, FONT_REG],
      loadSystemFonts: false,
      defaultFontFamily: 'IBM Plex Sans Arabic',
    },
  });
  return resvg.render().asPng();
}

mkdirSync(OUT, { recursive: true });

const pages = [
  {
    file: 'home.png',
    kicker: 'دليل عربي مستقل',
    title: 'ادفع بعملاتك الرقمية في أي مكان',
    description: 'شرح بطاقة RedotPay: التسجيل والرسوم والشحن، بلا أرقام غير موثّقة.',
  },
  {
    file: 'site.png',
    kicker: 'PayCards',
    title: 'دليلك العربي للدفع بالعملات الرقمية',
    description: 'أدلة عملية عن بطاقة RedotPay والحياة اليومية.',
  },
];

for (const name of readdirSync(join(ROOT, 'src/content/articles'))) {
  if (!/\.mdx?$/.test(name)) continue;
  const raw = readFileSync(join(ROOT, 'src/content/articles', name), 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const id = name.replace(/\.mdx?$/, '');
  pages.push({
    file: `${id}.png`,
    kicker: 'مقال · PayCards',
    title: field(fm, 'h1') || field(fm, 'title') || id,
    description: field(fm, 'description'),
  });
}

for (const page of pages) {
  writeFileSync(join(OUT, page.file), png(svg(page)));
}
console.log(`og: ${pages.length} images → public/og`);
