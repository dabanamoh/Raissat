// Production build. Builds the content manager only when TinaCloud
// credentials are present, so a missing key never breaks the website build.
import { spawnSync } from "node:child_process";

const run = (cmd) => {
  console.log(`\n> ${cmd}`);
  const r = spawnSync(cmd, { stdio: "inherit", shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

if (process.env.TINA_PUBLIC_CLIENT_ID && process.env.TINA_TOKEN) {
  run("tinacms build");
} else {
  console.warn(
    "\nTINA_PUBLIC_CLIENT_ID / TINA_TOKEN not set: skipping the content manager build. " +
      "The site still builds; /admin will not be available on this deployment."
  );
}

run("vite build");
run("node scripts/generate-sitemap.mjs");
