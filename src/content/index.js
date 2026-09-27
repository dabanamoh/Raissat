// Single entry point for all site content. Everything here is edited through
// the CMS at /admin (or directly in src/content) and bundled at build time.

import site from "./settings/site.json";
import banner from "./settings/banner.json";
import home from "./pages/home.json";
import about from "./pages/about.json";
import servicesPage from "./pages/services.json";
import contact from "./pages/contact.json";
import mediaPage from "./pages/media.json";
import faqsFile from "./faqs.json";

const slugOf = (path) => path.split("/").pop().replace(/\.json$/, "");

const collect = (modules, sortBy) =>
  Object.entries(modules)
    .map(([path, data]) => ({ id: slugOf(path), ...data }))
    .sort(sortBy);

const byOrder = (a, b) => (a.order ?? 999) - (b.order ?? 999);
const byDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

export const team = collect(
  import.meta.glob("./team/*.json", { eager: true, import: "default" }),
  byOrder
);

export const services = collect(
  import.meta.glob("./services/*.json", { eager: true, import: "default" }),
  byOrder
);

export const articles = collect(
  import.meta.glob("./articles/*.json", { eager: true, import: "default" }),
  byDateDesc
).filter((a) => !a.draft);

export const faqs = faqsFile.items;
export const faqsPage = faqsFile;

export { site, banner, home, about, servicesPage, contact, mediaPage };
