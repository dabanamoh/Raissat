import { useLocation } from "react-router";
import { useContent } from "../content/live";

// React 19 hoists <title> and <meta> rendered anywhere in the tree into <head>.
const PageMeta = ({ title, description, image }) => {
  const { site } = useContent();
  const { pathname } = useLocation();
  const desc = description || site.description;
  const img = image || site.ogImage;
  const fullTitle = title ? `${title} · ${site.siteName}` : site.siteName;
  const base = site.siteUrl.replace(/\/$/, "");
  const url = `${base}${pathname}`;
  const imageUrl = img.startsWith("http") ? img : `${base}${img}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
};

export default PageMeta;
