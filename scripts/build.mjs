// Production build. Builds the content manager only when TinaCloud
// credentials are present, so a missing key never breaks the website build.
import { spawnSync } from "node:child_process";

const run = (cmd, { allowFail = false } = {}) => {
  console.log(`\n> ${cmd}`);
  const r = spawnSync(cmd, { stdio: "inherit", shell: true });
  if (r.status !== 0 && !allowFail) process.exit(r.status ?? 1);
  return r.status === 0;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

if (process.env.TINA_PUBLIC_CLIENT_ID && process.env.TINA_TOKEN) {
  // Tina Cloud indexes the schema from the pushed commit while Vercel is
  // already building; if the check runs before indexing finishes it fails
  // with "schema doesn't match". Give it a few tries before giving up.
  let ok = false;
  for (let attempt = 1; attempt <= 4 && !ok; attempt++) {
    ok = run("tinacms build", { allowFail: true });
    if (!ok && attempt < 4) {
      console.warn(`\nContent manager build failed (attempt ${attempt}); retrying in 30s...`);
      await sleep(30_000);
    }
  }
  if (!ok) process.exit(1);
} else {
  console.warn(
    "\nTINA_PUBLIC_CLIENT_ID / TINA_TOKEN not set: skipping the content manager build. " +
      "The site still builds; /admin will not be available on this deployment."
  );
}

run("vite build");
run("node scripts/generate-sitemap.mjs");
