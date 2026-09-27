# RAISSAT website

The public website of the Research Applied Institute for Sustainability in Science, Agriculture and Technology, at [raissat.org](https://raissat.org).

- **Stack:** React 19, Vite 7, Tailwind CSS 4, React Router 7
- **Content:** JSON files in `src/content`, edited through the built-in content manager at `/admin`
- **Hosting:** Vercel (static site plus two small functions for CMS login)
- **Forms:** Web3Forms
- **Map:** Leaflet with OpenStreetMap tiles

## Editing the website (for the RAISSAT team)

Go to **https://raissat.org/admin/** and sign in with GitHub. You need to be a collaborator on the `dabanamoh/Raissat` repository.

What you can edit:

| Section | What it controls |
|---|---|
| Articles | Everything in the Media Center. Create new articles, news or resources, upload cover images, mark drafts. |
| Team | People on the Who We Are page: photo, role, summary, full biography, order. |
| What We Do | The five service areas and their pages: photos, focus areas, button text. |
| Pages | The fixed text on Home, Who We Are, What We Do, Media Center, Contact and FAQs. |
| Site settings | Logo, navigation, social links, contact email, SDG badges, the site-wide call to action, and the event banner. |

How publishing works:

1. Make your change and press **Save**. It goes to the *Drafts* column of the Workflow screen.
2. Move it to **In review** if someone else should check it, or straight to **Ready**.
3. Press **Publish**. The change is committed to GitHub and the site rebuilds automatically. It is live in about two minutes.

Image guidance:

- Article covers: landscape, at least 1280×720 pixels.
- Team photos: portrait, at least 800×1000 pixels.
- Keep files under 1 MB. JPEG or WebP for photos, SVG or PNG for icons and logos.
- Uploaded images are stored in `public/uploads`.

Writing text: the larger text boxes accept simple formatting. Use the toolbar for **bold**, lists and links, or type Markdown directly.

## Local development

```bash
npm install
cp .env.example .env      # then fill in the keys
npm run dev               # site at http://localhost:5173
```

To use the content manager locally without GitHub login, run the local backend in a second terminal:

```bash
npm run cms
```

then open http://localhost:5173/admin/. Saves write straight to the files in `src/content`.

Other scripts:

| Command | Purpose |
|---|---|
| `npm run build` | Production build into `dist/`, then writes `dist/sitemap.xml` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run images` | Convert any JPEG/PNG under `public/assets` and `public/uploads` to capped-width WebP |

## Deploying

### Vercel (recommended)

1. Import the GitHub repository into Vercel. Framework preset: Vite. Build command `npm run build`, output `dist`.
2. Add the environment variables from `.env.example`.
3. Create a GitHub OAuth App at <https://github.com/settings/developers>:
   - Homepage URL: `https://raissat.org`
   - Authorization callback URL: `https://raissat.org/api/callback`
   - Copy the Client ID and Client Secret into Vercel as `OAUTH_GITHUB_CLIENT_ID` and `OAUTH_GITHUB_CLIENT_SECRET`.
4. If the site runs on a different domain, change `base_url`, `site_url` and `display_url` in `public/admin/config.yml`, the `siteUrl` in Site settings, and the sitemap line in `public/robots.txt`.

Every push to `main` deploys. Every CMS publish is a push to `main`.

### cPanel

`.cpanel.yml` copies `dist/` into `public_html` on push. The content manager's login needs the two functions in `api/`, which cPanel cannot run, so on cPanel the `/admin` page will only work with the local backend described above. Deploy on Vercel if the team should edit content in the browser.

## Project layout

```
api/                 Vercel functions: GitHub login for the CMS
public/admin/        The content manager (Decap CMS) and its field definitions
public/assets/       Images and icons shipped with the site
public/uploads/      Images uploaded through the CMS
scripts/             Image conversion and sitemap generation
src/content/         All editable content (JSON)
src/Components/      Shared UI
src/Pages/           One file per route
```

Content is bundled at build time, so a change to `src/content` always needs a rebuild to appear on the live site. Vercel does this on every push.
