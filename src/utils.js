export const truncateText = (str, maxlength) => {
  return str.length > maxlength
    ? str.split(" ").slice(0, maxlength).join(" ") + "…"
    : str;
};

export const handleCtaClick = (navigate, route) => {
  navigate(route);
};

export const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

// Fills {placeholders} in editable text, e.g. fill("Published {date}", { date }).
export const fill = (template, values) =>
  String(template ?? "").replace(/\{(\w+)\}/g, (_, key) => (values[key] ?? ""));

// Turns a YouTube or Vimeo page link into an embeddable player URL, or null.
export const videoEmbed = (url) => {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\.|^m\./, "");
    if (host === "youtu.be") return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`;
    if (host.endsWith("youtube.com")) {
      const id = u.searchParams.get("v") || (u.pathname.match(/\/(?:embed|shorts|live)\/([^/?]+)/) || [])[1];
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (host.endsWith("vimeo.com")) {
      const id = (u.pathname.match(/(\d+)/) || [])[1];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    /* not a URL */
  }
  return null;
};
