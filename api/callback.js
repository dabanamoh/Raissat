// Step 2 of the CMS login: GitHub sends the editor back here with a code.
// We swap it for a token and hand the token to the CMS window that opened us.
// Runs as a Vercel serverless function at /api/callback.

const page = (provider, status, payload) => `<!doctype html>
<html><head><meta charset="utf-8"><title>Signing in…</title></head>
<body style="font-family:system-ui;padding:2rem">
<p>${status === "success" ? "Signed in. You can close this window." : "Sign-in failed."}</p>
<script>
(function () {
  var message = "authorization:${provider}:${status}:" + ${JSON.stringify(JSON.stringify(payload))};
  function receive(e) {
    window.opener.postMessage(message, e.origin);
    window.removeEventListener("message", receive, false);
  }
  window.addEventListener("message", receive, false);
  window.opener.postMessage("authorizing:${provider}", "*");
})();
</script>
</body></html>`;

export default async function handler(req, res) {
  const { code, state } = req.query;
  const cookies = Object.fromEntries(
    (req.headers.cookie || "")
      .split(";")
      .map((c) => c.trim().split("="))
      .filter(([k]) => k)
  );

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Set-Cookie", "cms_oauth_state=; Path=/api; Max-Age=0");

  if (!code || !state || cookies.cms_oauth_state !== state) {
    res.status(400).send(page("github", "error", { message: "Invalid login state. Please try again." }));
    return;
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
        client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    const data = await tokenRes.json();
    if (!data.access_token) throw new Error(data.error_description || "No token returned");
    res.status(200).send(page("github", "success", { token: data.access_token, provider: "github" }));
  } catch (err) {
    res.status(500).send(page("github", "error", { message: err.message }));
  }
}
