// يولّد أيقونات PNG وصورة OG الافتراضية من SVG. شغّله عند تغيير الهوية:  node scripts/generate-images.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const fav = await readFile('public/favicon.svg');
// نسخة بزوايا حادة لأيقونات الهواتف (الأنظمة تقصّ الزوايا بنفسها)
const square = Buffer.from(fav.toString().replace('rx="8" fill="url(#bg)"', 'fill="url(#bg)"'));
await sharp(fav, { density: 512 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(fav, { density: 512 }).resize(48, 48).png().toFile('public/favicon-48.png');
await sharp(fav, { density: 1024 }).resize(96, 96).png().toFile('public/favicon-96.png');

// favicon.ico (16 + 32 + 48) — المسار الذي يبحث عنه Google ومتصفحات كثيرة افتراضياً
const icoSizes = [16, 32, 48];
const pngs = await Promise.all(icoSizes.map((n) => sharp(fav, { density: 512 }).resize(n, n).png().toBuffer()));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(pngs.length, 4);
let offset = 6 + 16 * pngs.length;
const entries = pngs.map((buf, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(icoSizes[i], 0); e.writeUInt8(icoSizes[i], 1);
  e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
  e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(offset, 12);
  offset += buf.length;
  return e;
});
const { writeFile } = await import('node:fs/promises');
await writeFile('public/favicon.ico', Buffer.concat([header, ...entries, ...pngs]));
await sharp(square, { density: 1024 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(square, { density: 2048 }).resize(192, 192).png().toFile('public/icon-192.png');
await sharp(square, { density: 2048 }).resize(512, 512).png().toFile('public/icon-512.png');

// صورة OG (1200×630). النص لاتيني فقط لضمان الرسم الصحيح بدون خطوط عربية على الخادم.
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
 <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#070c18"/><stop offset="1" stop-color="#101a36"/></linearGradient>
 <radialGradient id="o1" cx=".85" cy=".1" r=".7"><stop offset="0" stop-color="#2ee6a8" stop-opacity=".45"/><stop offset="1" stop-color="#2ee6a8" stop-opacity="0"/></radialGradient>
 <radialGradient id="o2" cx=".05" cy=".9" r=".6"><stop offset="0" stop-color="#4c6ef5" stop-opacity=".35"/><stop offset="1" stop-color="#4c6ef5" stop-opacity="0"/></radialGradient>
 <linearGradient id="card" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f2a3f"/><stop offset=".55" stop-color="#0b1a33"/><stop offset="1" stop-color="#1a1447"/></linearGradient>
 <linearGradient id="acc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2ee6a8"/><stop offset="1" stop-color="#4c6ef5"/></linearGradient>
</defs>
<rect width="1200" height="630" fill="url(#bg)"/><rect width="1200" height="630" fill="url(#o1)"/><rect width="1200" height="630" fill="url(#o2)"/>
<g stroke="#fff" stroke-opacity=".035">${Array.from({length:28},(_,i)=>`<path d="M${i*44} 0v630"/>`).join('')}${Array.from({length:15},(_,i)=>`<path d="M0 ${i*44}h1200"/>`).join('')}</g>
<g transform="translate(640 150) rotate(-8)">
 <rect width="470" height="296" rx="28" fill="url(#card)" stroke="#ffffff" stroke-opacity=".12"/>
 <text x="36" y="68" font-family="DejaVu Sans, Arial, sans-serif" font-size="34" font-weight="700" fill="#fff">Pay<tspan fill="#2ee6a8">Cards</tspan></text>
 <rect x="36" y="110" width="64" height="48" rx="8" fill="#d9c27a"/>
 <text x="36" y="222" font-family="DejaVu Sans Mono, monospace" font-size="24" fill="#fff" fill-opacity=".85" letter-spacing="4">•••• •••• •••• 2026</text>
 <circle cx="380" cy="252" r="22" fill="#2ee6a8"/><circle cx="410" cy="252" r="22" fill="#4c6ef5" fill-opacity=".85"/>
</g>
<text x="80" y="250" font-family="DejaVu Sans, Arial, sans-serif" font-size="84" font-weight="700" fill="#fff">Pay<tspan fill="#2ee6a8">Cards</tspan></text>
<text x="84" y="315" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#9aa8c2">Spend your crypto, everywhere.</text>
<rect x="84" y="370" width="300" height="62" rx="14" fill="url(#acc)"/>
<text x="234" y="411" font-family="DejaVu Sans, Arial, sans-serif" font-size="26" font-weight="700" fill="#04120d" text-anchor="middle">paycards.io</text>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-default.png');
console.log('images generated');
