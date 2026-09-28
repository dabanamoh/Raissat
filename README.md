# RAISSAT website

The public website of the Research Applied Institute for Sustainability in Science, Agriculture and Technology, at [raissat.org](https://raissat.org).

- **Stack:** React 19, Vite 7, Tailwind CSS 4, React Router 7
- **Content:** Markdown and JSON files in `src/content`, edited through the content manager at `/admin` (TinaCMS)
- **Hosting:** Vercel, deploying automatically from the `main` branch
- **Forms:** Web3Forms
- **Map:** Leaflet with OpenStreetMap tiles

## Editing the website (for the RAISSAT team)

Go to **https://www.raissat.org/admin/** and sign in with the email address you were invited with. No GitHub account is needed.

What you can edit:

| Section | What it controls |
|---|---|
| Articles | Everything in the Media Center. Create new articles, news or resources, upload cover images and figures, mark drafts. |
| Team | People on the Who We Are page: photo, role, summary, full biography, order. |
| What We Do | The five service areas and their pages: photos, focus areas, button text. |
| FAQs | Each question and its answer, and the order they appear in. |
| Pages | The fixed text on Home, Who We Are, What We Do, Media Center, Contact and FAQs. |
| Site settings | Logo, navigation, social links, contact email, SDG badges, the site-wide call to action. |
| Event banner | The promotional banner shown under every page, with an automatic end date. |

How publishing works: make your change and press **Save**. The change is committed to the website's repository and the site rebuilds automatically. It is live in about two minutes.

Writing text: the large editor boxes are rich-text editors. Use the toolbar for headings, bold, lists, links and images, or type Markdown directly. Images placed inside an article appear at that point in the text; an italic line under an image works well as a caption.

Image guidance:

- Article covers: landscape, at least 1280×720 pixels.
- Team photos: portrait, at least 800×1000 pixels.
- Keep files under 1 MB. JPEG or WebP for photos, SVG or PNG for icons and logos.
- Images uploaded through the content manager are stored under `public/assets`, alongside the existing site images.

## Local development

```bash
npm install
cp .env.example .env      # optional: fill in the keys you have
npm run dev               # site at http://localhost:5173, editor at http://localhost:5173/admin/
```

`npm run dev` starts the site together with a local content backend, so the editor works without signing in and saves straight to the files in `src/content`. Use `npm run dev:site` to run the site alone.

Other scripts:

| Command | Purpose |
|---|---|
| `npm run build` | Builds the editor (when TinaCloud keys are set), then the site into `dist/`, then `dist/sitemap.xml` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run images` | Convert any JPEG/PNG under `public/assets` and `public/uploads` to capped-width WebP |

## Deploying

The site is a Vercel project linked to this repository. Every push to `main` deploys; every save in the content manager is a push to `main`.

Setting up the content manager's cloud login, once:

1. Create a free account at <https://app.tina.io> and a project connected to this GitHub repository (branch `main`).
2. In the TinaCloud project, copy the **Client ID** (Overview) and create a **Content (read only) token** (Tokens).
3. In Vercel → Project → Settings → Environment Variables, add `TINA_PUBLIC_CLIENT_ID` and `TINA_TOKEN`, then redeploy.
4. In TinaCloud → Project → Site URLs, add the site's domain so the editor is allowed to run there.
5. Invite editors by email under TinaCloud → Project → Collaborators.

Without those two variables the website still builds and deploys; only `/admin` is missing.

The website's address is `https://www.raissat.org`; the bare `raissat.org` stays on the cPanel server for email and forwards web visitors to www. If that ever changes, add that domain to the TinaCloud site URLs and update `siteUrl` in Site settings (`src/content/settings/site.json`). The sitemap and canonical links follow `siteUrl`.

## Project layout

```
public/assets/       Images and icons shipped with the site
public/assets/       Site images, including uploads from the content manager
scripts/             Build wrapper, image conversion, sitemap generation
src/content/         All editable content (Markdown with frontmatter, and JSON)
src/Components/      Shared UI
src/Pages/           One file per route
tina/config.js       Content manager schema: which fields each section has
```

Content is bundled at build time, so a change to `src/content` always needs a rebuild to appear on the live site. Vercel does this on every push.

## Who may change what

Editors invited on the Tina Cloud Collaborators page can open every section of the
content manager, but a GitHub Action (`.github/workflows/content-guard.yml`) undoes
any save by a non-owner outside these areas:

- `src/content/articles/` (Articles: create, edit, delete, mark as draft)
- `src/content/team/` (Team: create, edit, delete, hide)
- new image uploads under `public/assets/` (existing images cannot be changed or deleted)

When that happens the site is restored within a couple of minutes and an issue is
opened on the repository so the owner is emailed. Owner emails are listed in
`CONTENT_OWNERS` in the workflow file; a person listed there may change anything.
