// One-off migration: JSON entries with markdown strings -> Markdown documents
// with YAML frontmatter, which is the shape TinaCMS's rich-text editor works on.
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const root = path.join(process.cwd(), "src", "content");
const read = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const jsonFiles = (dir) =>
  fs.readdirSync(dir).filter((f) => f.endsWith(".json")).map((f) => path.join(dir, f));

function writeDoc(file, frontmatter, body) {
  const yaml = YAML.stringify(frontmatter, { lineWidth: 0 }).trimEnd();
  fs.writeFileSync(file, `---\n${yaml}\n---\n\n${(body || "").trim()}\n`);
}

// Articles: body + figures + caption + conclusion become one document.
for (const file of jsonFiles(path.join(root, "articles"))) {
  const a = read(file);
  const parts = [a.body];
  if (a.images?.length) {
    parts.push(a.images.map((src) => `![${a.imageCaption || ""}](${src})`).join("\n\n"));
    if (a.imageCaption) parts.push(`*${a.imageCaption}*`);
  }
  if (a.conclusion) parts.push(a.conclusion);
  writeDoc(
    file.replace(/\.json$/, ".md"),
    {
      title: a.title,
      date: a.date,
      category: a.category || "Article",
      draft: !!a.draft,
      author: a.author,
      authorImage: a.authorImage || "",
      thumbnail: a.thumbnail || "",
      excerpt: a.excerpt || "",
      publisher: a.publisher || "",
      reference: a.reference || "",
    },
    parts.join("\n\n")
  );
  fs.unlinkSync(file);
}

// Team: bio becomes the body.
for (const file of jsonFiles(path.join(root, "team"))) {
  const t = read(file);
  writeDoc(
    file.replace(/\.json$/, ".md"),
    { order: t.order, name: t.name, role: t.role, image: t.image, email: t.email || "", summary: t.summary },
    t.bio
  );
  fs.unlinkSync(file);
}

// Services: detailedDescription becomes the body.
for (const file of jsonFiles(path.join(root, "services"))) {
  const s = read(file);
  writeDoc(
    file.replace(/\.json$/, ".md"),
    {
      order: s.order,
      title: s.title,
      subtitle: s.subtitle,
      description: s.description,
      images: s.images,
      focusAreas: s.focusAreas,
      cta: s.cta,
    },
    s.detailedDescription
  );
  fs.unlinkSync(file);
}

// FAQs: one document per question; page copy moves to pages/faqs.json.
const faqsFile = path.join(root, "faqs.json");
if (fs.existsSync(faqsFile)) {
  const f = read(faqsFile);
  const dir = path.join(root, "faqs");
  fs.mkdirSync(dir, { recursive: true });
  f.items.forEach((item, i) => {
    const slug = item.question
      .toLowerCase()
      .replace(/[’'"“”?]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60);
    writeDoc(path.join(dir, `${slug}.md`), { order: i + 1, question: item.question }, item.answer);
  });
  fs.writeFileSync(
    path.join(root, "pages", "faqs.json"),
    JSON.stringify({ title: f.title, metaDescription: f.metaDescription }, null, 2) + "\n"
  );
  fs.unlinkSync(faqsFile);
}

// About page: intro becomes the body.
const aboutFile = path.join(root, "pages", "about.json");
if (fs.existsSync(aboutFile)) {
  const a = read(aboutFile);
  writeDoc(
    path.join(root, "pages", "about.md"),
    { title: a.title, metaDescription: a.metaDescription, philosophy: a.philosophy, team: a.team },
    a.intro
  );
  fs.unlinkSync(aboutFile);
}

console.log("migrated:", fs.readdirSync(root, { recursive: true }).filter((f) => f.endsWith(".md")).length, "markdown documents");
