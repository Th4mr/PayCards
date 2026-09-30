// يعرض كل علامات {{تحقق}} في المشروع قبل الإطلاق:  npm run verify
// يبحث عن:  <V n="..." />  و  {{تحقق: ...}}
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = 'src';
const exts = ['.astro', '.md', '.mdx', '.ts'];
const patterns = [/<V\s+n="([^"]+)"[^>]*\/>/g, /\{\{تحقق(?::\s*([^}]*))?\}\}/g];
const skip = ['src/lib/verify.ts', 'src/components/V.astro', 'src/lib/articles.ts', 'src/components/FAQ.astro'];

const rows = [];
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (exts.some((x) => e.name.endsWith(x)) && !skip.includes(p)) {
      const lines = (await readFile(p, 'utf8')).split('\n');
      lines.forEach((line, i) => {
        for (const re of patterns) {
          for (const m of line.matchAll(re)) rows.push({ file: relative('.', p), line: i + 1, note: (m[1] || '').trim() || '(بدون تعليق)' });
        }
      });
    }
  }
}
await walk(ROOT);

let current = '';
for (const r of rows) {
  if (r.file !== current) {
    current = r.file;
    console.log(`\n📄 ${r.file}`);
  }
  console.log(`  ${String(r.line).padStart(4)}  ${r.note}`);
}
const unique = new Set(rows.map((r) => r.note)).size;
console.log(`\nالمجموع: ${rows.length} علامة تحقق (${unique} بند مختلف).`);
