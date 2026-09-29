import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Serve public/admin/index.html at /admin and /admin/ in dev and preview.
// (Vite only resolves directory index files from the project root, not public/.)
const adminIndex = () => {
  const rewrite = (req, _res, next) => {
    if (req.url === "/admin" || req.url === "/admin/") req.url = "/admin/index.html";
    next();
  };
  return {
    name: "admin-index",
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
};

// `virtual:site-assets` lists every file under public/assets, so live content
// can tell which images the site already serves itself.
const siteAssets = () => {
  const id = "virtual:site-assets";
  const resolved = "\0" + id;
  return {
    name: "site-assets",
    resolveId(source) {
      if (source === id) return resolved;
      return null;
    },
    load(source) {
      if (source !== resolved) return null;
      const root = path.resolve("public/assets");
      const files = [];
      const walk = (dir) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) walk(full);
          else files.push("/assets/" + path.relative(root, full).split(path.sep).join("/"));
        }
      };
      if (fs.existsSync(root)) walk(root);
      return `export default ${JSON.stringify(files)};`;
    },
  };
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ""), ...process.env };
  return {
    plugins: [react(), tailwindcss(), adminIndex(), siteAssets()],
    define: {
      // Read-only Tina Cloud credentials for live content. Same values the
      // build uses; the token can only read the (public) repository content.
      __TINA_CLIENT_ID__: JSON.stringify(env.TINA_PUBLIC_CLIENT_ID || ""),
      __TINA_TOKEN__: JSON.stringify(env.TINA_TOKEN || ""),
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.split("node_modules/")[1].split("/")[0];
            }
          },
        },
      },
    },
  };
});
