import { defineConfig } from "tinacms";
import { PhotoField, MAX_BYTES } from "./photo-field";

// Content schema for the RAISSAT content manager (TinaCMS).
// The site reads the same files at build time via src/content/index.js.

const slugify = (text) =>
  (text || "")
    .toLowerCase()
    .replace(/[’'"“”?]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

const single = { allowedActions: { create: false, delete: false } };

const imageField = (name, label, extra = {}) => ({ type: "image", name, label, ...extra });
const text = (name, label, extra = {}) => ({ type: "string", name, label, ...extra });
const textarea = (name, label, extra = {}) => ({
  type: "string",
  name,
  label,
  ui: { component: "textarea" },
  ...extra,
});
const body = (label = "Body") => ({ type: "rich-text", name: "body", label, isBody: true });
const link = (name, label) => text(name, label, { description: "A path on this site, e.g. /contact" });

const articles = {
  name: "article",
  label: "Media Center",
  path: "src/content/articles",
  format: "md",
  ui: {
    filename: { readonly: true, slugify: (v) => slugify(v?.title) },
    defaultItem: () => ({ date: new Date().toISOString(), category: "Article", draft: false, author: "" }),
  },
  fields: [
    text("title", "Title", { isTitle: true, required: true }),
    { type: "datetime", name: "date", label: "Publish date", ui: { dateFormat: "D MMM YYYY" }, required: true },
    text("category", "Type", { options: ["Article", "News", "Resource"] }),
    { type: "boolean", name: "draft", label: "Draft (hide from the site)" },
    { type: "boolean", name: "featured", label: "Feature on the home page", description: "Used when no articles are picked under Home page > Featured articles section." },
    text("author", "Author", { required: true }),
    imageField("authorImage", "Author photo", { description: "Optional. A square photo works best." }),
    imageField("thumbnail", "Cover image", { description: "Landscape, at least 1280×720. Shown on cards and at the top of the article." }),
    textarea("excerpt", "Short summary", { description: "One or two sentences shown on the card and in search and social previews." }),
    text("publisher", "Publisher / journal"),
    text("reference", "Link to the paper (DOI or URL)"),
    body("Article"),
  ],
};

const events = {
  name: "event",
  label: "Media Center: Events",
  path: "src/content/events",
  format: "md",
  ui: {
    filename: { readonly: true, slugify: (v) => slugify(v?.title) },
    defaultItem: () => ({ date: new Date().toISOString(), draft: false, photos: [], videos: [] }),
  },
  fields: [
    text("title", "Event name", { isTitle: true, required: true }),
    { type: "datetime", name: "date", label: "Event date", ui: { dateFormat: "D MMM YYYY" }, required: true },
    text("location", "Location", { description: "City and country, e.g. Lagos, Nigeria" }),
    { type: "boolean", name: "draft", label: "Draft (hide from the site)" },
    textarea("summary", "Short description", { description: "One or two sentences shown on the event card." }),
    { type: "image", name: "cover", label: "Cover photo", description: "Landscape photo shown on the Media Center page. Up to 5 MB.", ui: { component: PhotoField } },
    {
      type: "object", name: "photos", label: "Photos", list: true,
      description: "JPEG, PNG or WebP, up to 5 MB each. The width and height are shown under each photo.",
      ui: { itemProps: (item) => ({ label: item?.caption || (item?.image ? item.image.split("/").pop() : "Photo") }) },
      fields: [
        { type: "image", name: "image", label: "Photo", ui: { component: PhotoField } },
        text("caption", "Caption"),
      ],
    },
    {
      type: "object", name: "videos", label: "Videos", list: true,
      description: "Paste links to videos on YouTube or Vimeo. Videos are not uploaded here.",
      ui: { itemProps: (item) => ({ label: item?.title || item?.url || "Video" }) },
      fields: [
        text("title", "Title"),
        text("url", "Video link", {
          description: "A YouTube or Vimeo page address.",
          ui: { validate: (v) => (v && !/(youtube\.com|youtu\.be|vimeo\.com)/i.test(v) ? "Use a YouTube or Vimeo link." : undefined) },
        }),
      ],
    },
    body("About the event"),
  ],
};

const team = {
  name: "team",
  label: "Team",
  path: "src/content/team",
  format: "md",
  ui: {
    filename: { readonly: true, slugify: (v) => slugify(v?.name) },
    defaultItem: () => ({ order: 99, hidden: false }),
  },
  fields: [
    { type: "number", name: "order", label: "Display order", description: "1 appears first.", required: true },
    { type: "boolean", name: "hidden", label: "Hide from the site", description: "Keeps the profile but removes it from the team page." },
    text("name", "Full name", { isTitle: true, required: true }),
    text("role", "Role / title", { required: true }),
    imageField("image", "Photo", { description: "Portrait orientation, at least 800×1000." }),
    text("email", "Email"),
    textarea("summary", "Short summary", { description: "Shown on the card. Two to four sentences." }),
    body("Full biography"),
  ],
};

const services = {
  name: "service",
  label: "What We Do",
  path: "src/content/services",
  format: "md",
  ui: { filename: { readonly: true, slugify: (v) => slugify(v?.title) } },
  fields: [
    { type: "number", name: "order", label: "Display order", required: true },
    text("title", "Title", { isTitle: true, required: true }),
    text("subtitle", "Subtitle"),
    textarea("description", "Summary", { description: "Shown on the What We Do listing." }),
    { type: "image", name: "images", label: "Photos", list: true, description: "The first photo is used on the listing; all photos rotate on the service page." },
    { type: "string", name: "focusAreas", label: "Focus areas", list: true },
    text("cta", "Button label"), link("ctaRoute", "Button link"),
    body("Full description"),
  ],
};

const faqs = {
  name: "faq",
  label: "FAQs",
  path: "src/content/faqs",
  format: "md",
  ui: { filename: { readonly: true, slugify: (v) => slugify(v?.question) } },
  fields: [
    { type: "number", name: "order", label: "Display order", required: true },
    text("question", "Question", { isTitle: true, required: true }),
    body("Answer"),
  ],
};

const pageCollection = (name, label, include, fields, format = "json") => ({
  name,
  label,
  path: "src/content/pages",
  format,
  match: { include },
  ui: single,
  fields,
});

const homePage = pageCollection("home", "Home page", "home", [
  {
    type: "object", name: "hero", label: "Hero",
    fields: [
      imageField("image", "Background image", { description: "Wide photo, at least 1920×1080." }),
      text("title", "Headline"),
      textarea("text", "Text"),
      text("primaryLabel", "Primary button label"), link("primaryRoute", "Primary button link"),
      text("secondaryLabel", "Secondary button label"), link("secondaryRoute", "Secondary button link"),
    ],
  },
  {
    type: "object", name: "who", label: "Who We Are section",
    fields: [
      text("title", "Heading"), textarea("text", "Text"),
      text("missionTitle", "Mission heading"), textarea("missionText", "Mission text"),
      text("visionTitle", "Vision heading"), textarea("visionText", "Vision text"),
      text("buttonLabel", "Button label"), link("buttonRoute", "Button link"),
    ],
  },
  {
    type: "object", name: "services", label: "What We Do section",
    fields: [
      text("title", "Heading"), textarea("intro", "Intro"),
      text("coreTitle", "Core services heading"),
      {
        type: "object", name: "coreServices", label: "Core services", list: true,
        ui: { itemProps: (item) => ({ label: item?.title || "Service" }) },
        fields: [imageField("icon", "Icon", { description: "SVG or PNG, shown at 40px." }), text("title", "Title"), textarea("text", "Text")],
      },
      text("impactTitle", "Impact heading"), textarea("impactIntro", "Impact intro"),
      text("approachTitle", "Approach heading"),
      {
        type: "object", name: "approach", label: "Approach items", list: true,
        ui: { itemProps: (item) => ({ label: item?.title || "Item" }) },
        fields: [imageField("icon", "Icon"), text("title", "Title"), textarea("text", "Text")],
      },
      text("buttonLabel", "Button label"), link("buttonRoute", "Button link"),
    ],
  },
  {
    type: "object", name: "featured", label: "Featured articles section",
    fields: [
      text("title", "Heading"), textarea("text", "Text"),
      text("buttonLabel", "Button label"), link("buttonRoute", "Button link"),
      { type: "number", name: "count", label: "How many articles to show" },
      {
        type: "object", name: "articles", label: "Articles to show", list: true,
        description: "Pick the articles in the order they should appear. If this list is empty, articles marked 'Feature on the home page' are shown instead.",
        ui: { itemProps: (item) => ({ label: item?.article ? item.article.split("/").pop().replace(/\.md$/, "") : "Choose an article" }) },
        fields: [{ type: "reference", name: "article", label: "Article", collections: ["article"] }],
      },
    ],
  },
  {
    type: "object", name: "faqs", label: "FAQ section",
    fields: [
      text("title", "Heading"), textarea("text", "Text"),
      text("buttonLabel", "Button label"), link("buttonRoute", "Button link"),
      { type: "number", name: "count", label: "How many questions to show" },
    ],
  },
]);

const aboutPage = pageCollection("about", "About page (Who We Are)", "about", [
  text("title", "Page title"),
  text("metaTitle", "Browser tab title", { description: "Optional. Falls back to the page title." }),
  textarea("metaDescription", "Search description"),
  {
    type: "object", name: "philosophy", label: "Impact philosophy",
    fields: [
      text("title", "Heading"),
      textarea("text", "Text"),
      text("pillarsIntro", "Pillars intro"),
      {
        type: "object", name: "pillars", label: "Pillars", list: true,
        ui: { itemProps: (item) => ({ label: item?.title || "Pillar" }) },
        fields: [text("title", "Title"), text("text", "Text")],
      },
    ],
  },
  {
    type: "object", name: "team", label: "Team section",
    fields: [text("heading", "Heading"), text("philosophyTitle", "Philosophy title"), textarea("philosophyText", "Philosophy text"), text("readMoreLabel", "Profile link label")],
  },
  body("Introduction"),
], "md");

const servicesPage = pageCollection("servicesPage", "What We Do page", "services", [
  text("title", "Page title"), text("subtitle", "Subtitle"),
  textarea("metaDescription", "Search description"), textarea("intro", "Introduction"),
  text("readMoreLabel", "Read more button label"), text("focusAreasLabel", "Focus areas label"),
  text("othersHeading", "Other services heading"),
]);

const mediaPage = pageCollection("mediaPage", "Media Center page", "media", [
  text("title", "Page title"), text("heading", "Heading"),
  textarea("metaDescription", "Search description"),
  text("allLabel", "All tab label"),
  { type: "string", name: "categories", label: "Categories", list: true, description: "Must match the Type options on articles." },
  text("readLabel", "Read article label"), text("relatedHeading", "Related articles heading"), text("backLabel", "Back link label"),
  text("emptyText", "Empty state text", { description: "Shown when a category has no articles." }),
  text("bylineFormat", "Article byline", { description: "Use {date} and {author} where they should appear." }),
  imageField("defaultThumbnail", "Fallback cover image", { description: "Used when an article has no cover image." }),
  imageField("defaultAvatar", "Fallback author photo"),
  text("eventsHeading", "Events heading"), textarea("eventsIntro", "Events intro"),
  text("viewEventLabel", "View event label"), text("photosLabel", "Photos heading"), text("videosLabel", "Videos heading"),
  text("photoCountFormat", "Photo count", { description: "Use {count} for the number." }), text("photoCountOne", "Photo count (single)"),
  text("videoCountFormat", "Video count", { description: "Use {count} for the number." }), text("videoCountOne", "Video count (single)"),
  text("eventBackLabel", "Back link label on an event"),
]);

const contactPage = pageCollection("contact", "Contact page", "contact", [
  text("title", "Page title"),
  text("metaTitle", "Browser tab title", { description: "Optional. Falls back to the page title." }),
  text("subtitle", "Subtitle"),
  textarea("metaDescription", "Search description"), textarea("intro", "Introduction"),
  text("cardsHeading", "Cards heading"),
  {
    type: "object", name: "cards", label: "Contact cards", list: true,
    ui: { itemProps: (item) => ({ label: item?.type || "Card" }) },
    fields: [
      text("type", "Inquiry type"), textarea("text", "Text"),
      text("icon", "Icon", { options: ["question", "microscope", "coins", "mail"] }),
      text("email", "Email for this inquiry"), text("buttonLabel", "Button label"),
    ],
  },
  text("locationsHeading", "Locations heading"),
  {
    type: "object", name: "locations", label: "Locations", list: true,
    ui: { itemProps: (item) => ({ label: item?.title || "Location" }) },
    fields: [
      text("title", "Name"), textarea("text", "Address"), text("popup", "Map popup text"),
      { type: "number", name: "lat", label: "Latitude" }, { type: "number", name: "lng", label: "Longitude" },
    ],
  },
  {
    type: "object", name: "form", label: "Contact form",
    fields: [
      text("heading", "Form heading"),
      text("firstNameLabel", "First name label"), text("firstNameError", "First name missing message"),
      text("lastNameLabel", "Last name label"), text("lastNameError", "Last name missing message"),
      text("emailLabel", "Email label"), text("emailError", "Email missing message"), text("emailInvalidError", "Email invalid message"),
      text("phoneLabel", "Phone label"), text("phoneError", "Phone too short message"), text("phoneInvalidError", "Phone invalid message"),
      text("messageLabel", "Message label"), text("messageError", "Message missing message"),
      text("submitLabel", "Submit button label"),
      textarea("sendFailed", "Sending failed message", { description: "Use {email} where the contact email should appear." }),
      text("subject", "Email subject line", { description: "Subject of the email you receive. Use {type} for the inquiry type and {site} for the site name." }),
    ],
  },
  {
    type: "object", name: "success", label: "Thank-you message",
    fields: [text("heading", "Heading"), textarea("text", "Text"), text("closeLabel", "Close button label")],
  },
]);

const faqsPage = pageCollection("faqsPage", "FAQs page", "faqs", [
  text("title", "Page title"),
  text("metaTitle", "Browser tab title", { description: "Optional. Falls back to the page title." }),
  textarea("metaDescription", "Search description"),
]);

const notFoundPage = pageCollection("notFoundPage", "Page not found (404)", "not-found", [
  text("title", "Browser tab title"), text("code", "Big code", { description: "Usually 404." }),
  text("heading", "Heading"), textarea("text", "Text"),
  text("buttonLabel", "Button label"), link("buttonRoute", "Button link"),
]);

const siteSettings = {
  name: "site",
  label: "Site settings",
  path: "src/content/settings",
  format: "json",
  match: { include: "site" },
  ui: single,
  fields: [
    text("siteName", "Site name"),
    text("siteUrl", "Site URL", { description: "Used for links in search results and social previews." }),
    text("tagline", "Tagline (footer)"),
    textarea("description", "Default search description"),
    imageField("ogImage", "Default social preview image"),
    imageField("logo", "Logo"), imageField("logoCompact", "Compact logo (tablet and phone)"),
    imageField("logoWhite", "White logo (footer)"), imageField("logoWhiteRound", "White round logo"),
    {
      type: "object", name: "nav", label: "Navigation", list: true,
      ui: { itemProps: (item) => ({ label: item?.text || "Link" }) },
      fields: [text("text", "Label"), link("route", "Link")],
    },
    { type: "object", name: "navButton", label: "Navigation button", fields: [text("label", "Label"), link("route", "Link")] },
    {
      type: "object", name: "socials", label: "Social links", list: true,
      ui: { itemProps: (item) => ({ label: item?.network || "Network" }) },
      fields: [text("network", "Network", { options: ["instagram", "linkedin", "x"] }), text("label", "Accessible label"), text("url", "URL")],
    },
    text("contactEmail", "Contact email"),
    {
      type: "object", name: "footerSupportLinks", label: "Footer support links", list: true,
      ui: { itemProps: (item) => ({ label: item?.text || "Link" }) },
      fields: [text("text", "Label"), link("route", "Link")],
    },
    text("footerLearnHeading", "Footer heading: site links"),
    text("footerSupportHeading", "Footer heading: support links"),
    text("copyright", "Copyright line", { description: "Use {year} for the current year. Leave empty to hide." }),
    text("sdgHeading", "SDG section heading"),
    {
      type: "object", name: "sdgs", label: "SDG badges", list: true,
      ui: { itemProps: (item) => ({ label: item?.label || "Badge" }) },
      fields: [text("label", "Name"), imageField("image", "Badge image")],
    },
    {
      type: "object", name: "cta", label: "Site-wide call to action",
      fields: [text("title", "Heading"), textarea("text", "Text"), text("tagline", "Tagline"), text("buttonLabel", "Button label"), link("buttonRoute", "Button link")],
    },
  ],
};

const banner = {
  name: "banner",
  label: "Event banner",
  path: "src/content/settings",
  format: "json",
  match: { include: "banner" },
  ui: single,
  fields: [
    { type: "boolean", name: "enabled", label: "Show the banner", description: "Master switch. The dates below decide when it is visible while switched on." },
    text("link", "Link"),
    text("alt", "Image description"),
    imageField("imageDesktop", "Desktop image"),
    imageField("imageTablet", "Tablet image"),
    imageField("imageMobile", "Phone image"),
    { type: "datetime", name: "starts", label: "Show from (date and time)", description: "Leave empty to show as soon as the banner is switched on.", ui: { dateFormat: "D MMM YYYY", timeFormat: "HH:mm" } },
    { type: "datetime", name: "expires", label: "Hide after (date and time)", description: "Usually when the event ends. Leave empty to keep the banner up until you switch it off.", ui: { dateFormat: "D MMM YYYY", timeFormat: "HH:mm" } },
  ],
};

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  client: { skip: true },
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "assets", publicFolder: "public" } },
  // The media manager only takes images, and refuses uploads above MAX_BYTES.
  cmsCallback: (cms) => {
    if (cms.media?.store) {
      cms.media.store.maxSize = MAX_BYTES;
      cms.media.store.accept = "image/jpeg,image/png,image/webp,image/gif,image/svg+xml";
    }
    return cms;
  },
  schema: {
    collections: [articles, events, team, services, faqs, homePage, aboutPage, servicesPage, mediaPage, contactPage, faqsPage, notFoundPage, siteSettings, banner],
  },
});
