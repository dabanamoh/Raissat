// Step 1 of the CMS login: send the editor to GitHub to approve access.
// Runs as a Vercel serverless function at /api/auth.
import { randomBytes } from "node:crypto";

export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send("OAUTH_GITHUB_CLIENT_ID is not configured.");
    return;
  }

  const state = randomBytes(16).toString("hex");
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const proto = req.headers["x-forwarded-proto"] || "https";
  const redirectUri = `${proto}://${host}/api/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo,user:email",
    state,
  });

  res.setHeader(
    "Set-Cookie",
    `cms_oauth_state=${state}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );
  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
