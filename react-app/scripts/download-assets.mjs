import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const manifestPath = path.join(rootDir, 'ASSETS_MANIFEST.json');

async function collectEntries(obj, list = []) {
  if (!obj || typeof obj !== 'object') return list;
  if (typeof obj.sourceUrl === 'string' && typeof obj.localPath === 'string') {
    list.push(obj);
    return list;
  }
  for (const val of Object.values(obj)) {
    await collectEntries(val, list);
  }
  return list;
}

async function main() {
  const raw = await fs.readFile(manifestPath, 'utf-8');
  const manifest = JSON.parse(raw);
  const entries = await collectEntries(manifest);

  console.log(`Downloading ${entries.length} media assets into public/assets/...`);
  for (const { sourceUrl, localPath } of entries) {
    const targetFile = path.join(rootDir, 'public', localPath.replace(/^\/+/, ''));
    await fs.mkdir(path.dirname(targetFile), { recursive: true });
    process.stdout.write(`  -> ${localPath} ... `);
    try {
      const res = await fetch(sourceUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(targetFile, buf);
      console.log(`OK (${(buf.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.log(`FAILED (${err.message})`);
    }
  }
  console.log('\nAll assets downloaded into public/assets/! You can now set ALLOW_REMOTE_FALLBACK = false in src/data/assets.js.');
}

main();
