import { defineConfig } from "vite";
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), adminIndex()],
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
});
