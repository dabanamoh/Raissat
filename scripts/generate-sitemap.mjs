// Writes dist/sitemap.xml from the content folder after `vite build`.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), "utf8"));
const list = (dir) =>
  fs
    .readdirSync(path.join(root, dir))
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ slug: f.replace(/\.json$/, ""), ...read(`${dir}/${f}`) }));

const site = read("src/content/settings/site.json");
const base = site.siteUrl.replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: "/", priority: "1.0" },
  { loc: "/about", priority: "0.8" },
  { loc: "/services", priority: "0.8" },
  { loc: "/media", priority: "0.7" },
  { loc: "/contact", priority: "0.6" },
  { loc: "/faqs", priority: "0.5" },
  ...list("src/content/services").map((s) => ({ loc: `/services/${s.slug}`, priority: "0.7" })),
  ...list("src/content/articles")
    .filter((a) => !a.draft)
    .map((a) => ({ loc: `/articles/${a.slug}`, priority: "0.6", lastmod: a.date })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${base}${u.loc}</loc>
    <lastmod>${u.lastmod || today}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const out = path.join(root, "dist", "sitemap.xml");
fs.writeFileSync(out, xml);
console.log(`sitemap: ${urls.length} URLs -> dist/sitemap.xml`);
