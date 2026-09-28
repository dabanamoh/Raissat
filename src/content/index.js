// Single entry point for all site content. Everything here is edited through
// the content manager at /admin (or directly in src/content) and bundled at
// build time. Markdown documents carry YAML frontmatter; their body is markdown.

import YAML from "yaml";

import site from "./settings/site.json";
import banner from "./settings/banner.json";
import home from "./pages/home.json";
import servicesPage from "./pages/services.json";
import contact from "./pages/contact.json";
import mediaPage from "./pages/media.json";
import faqsPage from "./pages/faqs.json";
import notFound from "./pages/not-found.json";

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

const parseDoc = (raw) => {
  const m = raw.match(FRONTMATTER);
  if (!m) return { body: raw.trim() };
  return { ...(YAML.parse(m[1]) || {}), body: m[2].trim() };
};

const slugOf = (path) => path.split("/").pop().replace(/\.md$/, "");

const collect = (modules, sortBy) =>
  Object.entries(modules)
    .map(([path, raw]) => ({ id: slugOf(path), ...parseDoc(raw) }))
    .sort(sortBy);

const byOrder = (a, b) => (a.order ?? 999) - (b.order ?? 999);
const byDateDesc = (a, b) => new Date(b.date) - new Date(a.date);
// Vite requires literal glob patterns and inline options, hence the repetition.
export const team = collect(
  import.meta.glob("./team/*.md", { query: "?raw", import: "default", eager: true }),
  byOrder
);
export const services = collect(
  import.meta.glob("./services/*.md", { query: "?raw", import: "default", eager: true }),
  byOrder
);
export const faqs = collect(
  import.meta.glob("./faqs/*.md", { query: "?raw", import: "default", eager: true }),
  byOrder
);
export const articles = collect(
  import.meta.glob("./articles/*.md", { query: "?raw", import: "default", eager: true }),
  byDateDesc
).filter((a) => !a.draft);

export const about = collect(
  import.meta.glob("./pages/about.md", { query: "?raw", import: "default", eager: true }),
  byOrder
)[0];

export { site, banner, home, servicesPage, contact, mediaPage, faqsPage, notFound };
