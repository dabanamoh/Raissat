import { useLocation } from "react-router";
import { site } from "../content";

// React 19 hoists <title> and <meta> rendered anywhere in the tree into <head>.
const PageMeta = ({ title, description = site.description, image = site.ogImage }) => {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} · ${site.siteName}` : site.siteName;
  const base = site.siteUrl.replace(/\/$/, "");
  const url = `${base}${pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${base}${image}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
};

export default PageMeta;
