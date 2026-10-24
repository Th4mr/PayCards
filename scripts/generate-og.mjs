/**
 * صور مشاركة 1200×630. resvg يشكّل العربية، لكنه يعكس ترتيب الكلمات
 * حين يختلط النص اللاتيني بالعربي داخل عنصر text واحد.
 * نحل مستويات الاتجاه بـ bidi-js، ثم نرسم كل مقطع باتجاهه في موضعه.
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import bidiFactory from 'bidi-js';

const bidi = bidiFactory();
const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'public/og');
const FONT_BOLD = join(ROOT, 'assets/fonts/IBMPlexSansArabic-Bold.ttf');
const FONT_REG = join(ROOT, 'assets/fonts/IBMPlexSansArabic-Regular.ttf');
const FONT = {
  font: {
    fontFiles: [FONT_BOLD, FONT_REG],
    loadSystemFonts: false,
    defaultFontFamily: 'IBM Plex Sans Arabic',
  },
  background: 'rgba(0,0,0,0)',
};

function field(fm, key) {
  const quoted = fm.match(new RegExp(`^${key}:\\s*"(.*)"\\s*$`, 'm'));
  if (quoted) return quoted[1].replace(/\\"/g, '"');
  const plain = fm.match(new RegExp(`^${key}:\\s*(.+)\\s*$`, 'm'));
  return plain ? plain[1].replace(/^['"]|['"]$/g, '') : '';
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function charLength(text) {
  return [...text].length;
}

function wrap(text, max) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (charLength(next) > max && cur) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines;
}

/** If the text needs more lines than fit, end the last visible line on a word and add an ellipsis. */
function fitLines(text, max, maxLines) {
  const lines = wrap(text, max);
  if (lines.length <= maxLines) return lines;
  const ellipsis = '…';
  const budget = max - charLength(ellipsis);
  let last = lines[maxLines - 1] ?? '';
  const parts = last.split(/\s+/).filter(Boolean);
  while (parts.length > 1 && charLength(parts.join(' ')) > budget) parts.pop();
  last = parts.join(' ');
  if (charLength(last) > budget) {
    const earlier = lines[maxLines - 2];
    if (earlier) {
      lines[maxLines - 2] = `${earlier.replace(/[\s,،;:؛.!?؟\-–—/|]+$/u, '')}${ellipsis}`;
      return lines.slice(0, maxLines - 1);
    }
    last = [...last].slice(0, Math.max(0, budget)).join('').trimEnd();
  }
  last = last.replace(/[\s,،;:؛\-–—/|]+$/u, '');
  const marks = [...last.matchAll(/[,،;؛.!?؟]/g)];
  const lastMark = marks.length ? marks[marks.length - 1] : null;
  if (lastMark && lastMark.index >= 12) {
    const phrase = last.slice(0, lastMark.index).replace(/[\s\-–—/|]+$/u, '');
    if (charLength(phrase) >= 12 && charLength(phrase) <= budget) last = phrase;
  }
  lines[maxLines - 1] = `${last}${ellipsis}`;
  return lines.slice(0, maxLines);
}

/** مسافة أو علامة محايدة. إلصاقها بمقطع عربي يجعل بدايتها المنطقية على يسار الرسم. */
function isSeparator(ch) {
  return /[\s\u00a0\u2026:·،؛,.!;?؟«»"'()[\]{}<>\-–—/\\|@#%&*+=~^]/.test(ch);
}

/**
 * مقاطع مرتبة من اليسار إلى اليمين، ونص كل مقطع بالترتيب المنطقي حتى يشكّله الخط صح.
 * المسافات وعلامات الترقيم مقاطع مستقلة في موضعها البصري، حتى لا تُبتلع داخل المقطع العربي.
 */
function visualRuns(text) {
  const embedding = bidi.getEmbeddingLevels(text, 'rtl');
  const indices = bidi.getReorderedIndices(text, embedding);
  const mirrored = bidi.getMirroredCharactersMap(text, embedding.levels);
  const runs = [];
  for (const i of indices) {
    const ch = mirrored.get(i) ?? text[i];
    const dir = embedding.levels[i] % 2 === 1 ? 'rtl' : 'ltr';
    const sep = isSeparator(text[i]);
    const prev = runs[runs.length - 1];
    const adjacent = prev && (prev.end + 1 === i || prev.start - 1 === i);
    if (prev && !sep && !prev.sep && prev.dir === dir && adjacent) {
      if (prev.end + 1 === i) {
        prev.text += ch;
        prev.end = i;
      } else {
        prev.text = ch + prev.text;
        prev.start = i;
      }
    } else runs.push({ dir, text: ch, start: i, end: i, sep });
  }
  return runs;
}

const inkCache = new Map();

function renderTextPng(text, size, weight, dir) {
  const width = 2400;
  const height = size + 80;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <text x="8" y="${size + 16}" text-anchor="start" direction="${dir}" font-family="IBM Plex Sans Arabic" font-weight="${weight}" font-size="${size}" fill="#ffffff">${esc(text)}</text>
</svg>`;
  return new Resvg(svg, FONT).render().asPng();
}

async function inkSpan(text, size, weight, dir) {
  const key = `${size}|${weight}|${dir}|${text}`;
  if (inkCache.has(key)) return inkCache.get(key);
  const png = renderTextPng(text, size, weight, dir);
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let minX = info.width;
  let maxX = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > 8) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }
  const span = { width: maxX >= minX ? maxX - minX + 1 : 0, minX: maxX >= minX ? minX : 8 };
  inkCache.set(key, span);
  return span;
}

const spaceCache = new Map();
async function spaceWidth(size, weight) {
  const key = `${size}|${weight}`;
  if (spaceCache.has(key)) return spaceCache.get(key);
  const tight = await inkSpan('مم', size, weight, 'rtl');
  const spaced = await inkSpan('م م', size, weight, 'rtl');
  const w = Math.max(size * 0.2, spaced.width - tight.width);
  spaceCache.set(key, w);
  return w;
}

async function measureRun(run, size, weight) {
  const sp = await spaceWidth(size, weight);
  if (/^\s+$/.test(run.text)) {
    return { core: '', advance: [...run.text].length * sp, lead: 0, trail: 0, ink: 0, bearing: 0 };
  }
  let lead = run.text.match(/^\s*/)?.[0].length ?? 0;
  let trail = run.text.match(/\s*$/)?.[0].length ?? 0;
  /* بداية المقطع العربي المنطقية هي يمينه البصري، فمسافته الطرفية تُرسم على ذلك الجانب. */
  if (run.dir === 'rtl') [lead, trail] = [trail, lead];
  const core = run.text.trim();
  if (!core) return { core: '', advance: (lead + trail) * sp, lead, trail, ink: 0, bearing: 0 };
  const span = await inkSpan(core, size, weight, run.dir);
  return { core, advance: lead * sp + span.width + trail * sp, lead, trail, ink: span.width, bearing: span.minX - 8 };
}

async function lineMarkup(text, y, size, weight, fill, right) {
  const sp = await spaceWidth(size, weight);
  const measured = [];
  for (const run of visualRuns(text)) measured.push({ run, ...(await measureRun(run, size, weight)) });
  const total = measured.reduce((sum, m) => sum + m.advance, 0);
  let cursor = right - total;
  const parts = [];
  for (const m of measured) {
    if (m.core) {
      const x = cursor + m.lead * sp - m.bearing;
      parts.push(
        `<text x="${x.toFixed(1)}" y="${y}" text-anchor="start" direction="${m.run.dir}" font-family="IBM Plex Sans Arabic" font-weight="${weight}" font-size="${size}" fill="${fill}">${esc(m.core)}</text>`,
      );
    }
    cursor += m.advance;
  }
  return parts.join('');
}

async function svg({ kicker, title, description }) {
  const titleLines = fitLines(title, 28, 4);
  const descLines = fitLines(description, 42, 2);
  const titleStart = 210;
  let body = await lineMarkup(kicker, 110, 28, 700, '#2ee6a8', 1080);
  for (let i = 0; i < titleLines.length; i++) {
    body += await lineMarkup(titleLines[i], titleStart + i * 78, 60, 700, '#f4f7fb', 1080);
  }
  const descStart = titleStart + titleLines.length * 78 + 16;
  for (let i = 0; i < descLines.length; i++) {
    body += await lineMarkup(descLines[i], descStart + i * 40, 28, 400, '#b7c3d6', 1080);
  }
  body += `<text x="1080" y="580" text-anchor="end" direction="ltr" font-family="IBM Plex Sans Arabic" font-weight="400" font-size="24" fill="#8ea0b8">paycards.io</text>`;
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
  ${body}
</svg>`;
}

function png(markup) {
  return new Resvg(markup, {
    font: FONT.font,
    background: '#07111f',
  }).render().asPng();
}

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

function svgLtr({ kicker, title, description, path }) {
  const titleLines = fitLines(title, 34, 4);
  const descLines = fitLines(description, 58, 3);
  const titleStart = 210;
  let body = `<text x="72" y="110" text-anchor="start" direction="ltr" font-family="IBM Plex Sans Arabic" font-weight="700" font-size="28" fill="#2ee6a8">${esc(kicker)}</text>`;
  for (let i = 0; i < titleLines.length; i++) {
    body += `<text x="72" y="${titleStart + i * 68}" text-anchor="start" direction="ltr" font-family="IBM Plex Sans Arabic" font-weight="700" font-size="48" fill="#f4f7fb">${esc(titleLines[i])}</text>`;
  }
  const descStart = titleStart + titleLines.length * 68 + 12;
  for (let i = 0; i < descLines.length; i++) {
    body += `<text x="72" y="${descStart + i * 36}" text-anchor="start" direction="ltr" font-family="IBM Plex Sans Arabic" font-weight="400" font-size="26" fill="#b7c3d6">${esc(descLines[i])}</text>`;
  }
  body += `<text x="72" y="580" text-anchor="start" direction="ltr" font-family="IBM Plex Sans Arabic" font-weight="400" font-size="24" fill="#8ea0b8">${esc(path)}</text>`;
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
  <circle cx="1040" cy="520" r="180" fill="#2ee6a8" fill-opacity="0.08"/>
  ${body}
</svg>`;
}

const enDir = join(ROOT, 'src/content/en');
const english = [
  {
    file: 'en-home.png',
    kicker: 'Independent guide',
    title: 'RedotPay review, fees, and countries',
    description: 'Published figures only. Referral code yj8cq during signup.',
  },
  {
    file: 'en-site.png',
    kicker: 'PayCards',
    title: 'An independent RedotPay guide',
    description: 'Fees, supported countries, top-ups, and ATM withdrawals.',
  },
];
try {
  for (const name of readdirSync(enDir)) {
    if (!/\.mdx?$/.test(name)) continue;
    const raw = readFileSync(join(enDir, name), 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const id = name.replace(/\.mdx?$/, '');
    english.push({
      file: `en-${id}.png`,
      kicker: 'Guide · PayCards',
      title: field(fm, 'h1') || field(fm, 'title') || id,
      description: field(fm, 'description'),
    });
  }
} catch {
  /* English collection is optional during a partial checkout */
}

mkdirSync(OUT, { recursive: true });
for (const page of pages) {
  writeFileSync(join(OUT, page.file), png(await svg(page)));
}
for (const page of english) {
  writeFileSync(join(OUT, page.file), png(svgLtr({ ...page, path: 'paycards.io/en' })));
}

const frDir = join(ROOT, 'src/content/fr');
const french = [
  {
    file: 'fr-home.png',
    kicker: 'Guide indépendant',
    title: 'Avis RedotPay, frais et pays',
    description: 'Chiffres publiés seulement. Code parrainage yj8cq à l’inscription.',
  },
  {
    file: 'fr-site.png',
    kicker: 'PayCards',
    title: 'Guide indépendant de la carte RedotPay',
    description: 'Frais, pays, recharge et retraits au DAB.',
  },
];
try {
  for (const name of readdirSync(frDir)) {
    if (!/\.mdx?$/.test(name)) continue;
    const raw = readFileSync(join(frDir, name), 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const id = name.replace(/\.mdx?$/, '');
    french.push({
      file: `fr-${id}.png`,
      kicker: 'Guide · PayCards',
      title: field(fm, 'h1') || field(fm, 'title') || id,
      description: field(fm, 'description'),
    });
  }
} catch {
  /* French collection is optional during a partial checkout */
}
for (const page of french) {
  writeFileSync(join(OUT, page.file), png(svgLtr({ ...page, path: 'paycards.io/fr' })));
}

const esDir = join(ROOT, 'src/content/es');
const spanish = [
  {
    file: 'es-home.png',
    kicker: 'Guía independiente',
    title: 'Opiniones RedotPay, comisiones y países',
    description: 'Cifras publicadas. Código de referido yj8cq al registrarte.',
  },
  {
    file: 'es-site.png',
    kicker: 'PayCards',
    title: 'Guía independiente de la tarjeta RedotPay',
    description: 'Comisiones, países, recarga y retiros en cajero.',
  },
];
try {
  for (const name of readdirSync(esDir)) {
    if (!/\.mdx?$/.test(name)) continue;
    const raw = readFileSync(join(esDir, name), 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const id = name.replace(/\.mdx?$/, '');
    spanish.push({
      file: `es-${id}.png`,
      kicker: 'Guía · PayCards',
      title: field(fm, 'h1') || field(fm, 'title') || id,
      description: field(fm, 'description'),
    });
  }
} catch {
  /* Spanish collection is optional during a partial checkout */
}
for (const page of spanish) {
  writeFileSync(join(OUT, page.file), png(svgLtr({ ...page, path: 'paycards.io/es' })));
}

const ptDir = join(ROOT, 'src/content/pt');
const portuguese = [
  {
    file: 'pt-home.png',
    kicker: 'Guia independente',
    title: 'Opiniões RedotPay, taxas e países',
    description: 'Números publicados. Código de indicação yj8cq no cadastro.',
  },
  {
    file: 'pt-site.png',
    kicker: 'PayCards',
    title: 'Guia independente do cartão RedotPay',
    description: 'Taxas, países, recarga e saques no caixa.',
  },
];
try {
  for (const name of readdirSync(ptDir)) {
    if (!/\.mdx?$/.test(name)) continue;
    const raw = readFileSync(join(ptDir, name), 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const id = name.replace(/\.mdx?$/, '');
    portuguese.push({
      file: `pt-${id}.png`,
      kicker: 'Guia · PayCards',
      title: field(fm, 'h1') || field(fm, 'title') || id,
      description: field(fm, 'description'),
    });
  }
} catch {
  /* Portuguese collection is optional during a partial checkout */
}
for (const page of portuguese) {
  writeFileSync(join(OUT, page.file), png(svgLtr({ ...page, path: 'paycards.io/pt' })));
}
console.log(`og: ${pages.length + english.length + french.length + spanish.length + portuguese.length} images → public/og`);
