// Converts JPEG/PNG photos under public/ to capped-width WebP and removes the
// originals. Safe to re-run: files that are already .webp are left alone.
// Usage: node scripts/optimize-images.mjs [dir]   (default: public/assets and public/uploads)
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const KEEP = /marker-icon|marker-shadow/;
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function walk(dir) {
  let out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(await walk(full));
    else out.push(full);
  }
  return out;
}

async function convert(file) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext) || KEEP.test(file)) return null;
  const target = file.slice(0, -ext.length) + ".webp";
  const before = (await fs.stat(file)).size;
  await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(target);
  await fs.unlink(file);
  const after = (await fs.stat(target)).size;
  return { file: path.relative(process.cwd(), target), before, after };
}

const dirs = process.argv.slice(2);
const roots = dirs.length ? dirs : ["public/assets", "public/uploads"];
let totalBefore = 0;
let totalAfter = 0;
for (const root of roots) {
  try {
    await fs.access(root);
  } catch {
    continue;
  }
  for (const file of await walk(root)) {
    const r = await convert(file);
    if (!r) continue;
    totalBefore += r.before;
    totalAfter += r.after;
    console.log(`${r.file}  ${(r.before / 1024).toFixed(0)}K -> ${(r.after / 1024).toFixed(0)}K`);
  }
}
console.log(`total ${(totalBefore / 1024).toFixed(0)}K -> ${(totalAfter / 1024).toFixed(0)}K`);
