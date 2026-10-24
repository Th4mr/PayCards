/**
 * Ping IndexNow with the URLs in the built sitemap.
 * Runs only when INDEXNOW=1 or VERCEL_ENV=production, so a preview build
 * does not submit production URLs before those pages exist.
 * A failed ping does not fail the build: the key file has to be live
 * before IndexNow will accept the host, which is the deploy after this one.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const KEY = '601085126bed3c4e052a11e5e8e5f6d3';
const HOST = 'www.paycards.io';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const enabled = process.env.INDEXNOW === '1' || process.env.VERCEL_ENV === 'production';
if (!enabled) {
  console.log('indexnow: skipped (set INDEXNOW=1 or VERCEL_ENV=production)');
  process.exit(0);
}

function urlsFromDist() {
  const dist = join(process.cwd(), 'dist');
  const files = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, name.name);
      if (name.isDirectory()) walk(p);
      else if (name.name.startsWith('sitemap') && name.name.endsWith('.xml')) files.push(p);
    }
  };
  walk(dist);
  const found = new Set();
  for (const file of files) {
    const xml = readFileSync(file, 'utf8');
    for (const loc of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const url = loc[1].trim();
      if (!url.startsWith(`https://${HOST}`)) continue;
      if (url.includes('/go/')) continue;
      found.add(url);
    }
  }
  return [...found];
}

const urlList = urlsFromDist();
if (urlList.length === 0) {
  console.warn('indexnow: no sitemap URLs in dist, nothing submitted');
  process.exit(0);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});
const text = await res.text();
console.log(`indexnow: ${res.status} ${urlList.length} urls ${text.slice(0, 200)}`);
if (res.status !== 200 && res.status !== 202) {
  console.warn('indexnow: ping was not accepted. The key file must be live on the host before a later production build can succeed.');
}
