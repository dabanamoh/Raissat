// Writes dist/sitemap.xml from the content folder after `vite build`.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), "utf8"));

// Minimal frontmatter reader: enough for `date:` and `draft:` scalars.
const frontmatter = (file) => {
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const out = {};
  if (m) {
    for (const line of m[1].split(/\r?\n/)) {
      const kv = line.match(/^(\w+):\s*(.*)$/);
      if (kv) out[kv[1]] = kv[2].replace(/^['"]|['"]$/g, "");
    }
  }
  return out;
};

const docs = (dir) =>
  fs
    .readdirSync(path.join(root, dir))
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, ""), ...frontmatter(path.join(root, dir, f)) }));

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
  ...docs("src/content/services").map((s) => ({ loc: `/services/${s.slug}`, priority: "0.7" })),
  ...docs("src/content/articles")
    .filter((a) => a.draft !== "true")
    .map((a) => ({ loc: `/articles/${a.slug}`, priority: "0.6", lastmod: (a.date || today).slice(0, 10) })),
  ...docs("src/content/events")
    .filter((e) => e.draft !== "true")
    .map((e) => ({ loc: `/events/${e.slug}`, priority: "0.5", lastmod: (e.date || today).slice(0, 10) })),
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

fs.writeFileSync(path.join(root, "dist", "sitemap.xml"), xml);
console.log(`sitemap: ${urls.length} URLs -> dist/sitemap.xml`);
