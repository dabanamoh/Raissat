/* eslint-disable react-refresh/only-export-components */
/* global __TINA_CLIENT_ID__, __TINA_TOKEN__ */
// Live content: the site ships with the content it was built with (./index.js)
// and, once loaded in the browser, asks Tina Cloud for the latest saved
// version so edits appear without waiting for a rebuild. If the request
// fails, the built-in content stays in place.

import { createContext, useContext, useEffect, useRef, useState } from "react";
import * as built from "./index.js";
import knownAssets from "virtual:site-assets";

const CLIENT_ID = __TINA_CLIENT_ID__;
const TOKEN = __TINA_TOKEN__;
const BRANCH = "main";
const API = CLIENT_ID ? `https://content.tinajs.io/1.5/content/${CLIENT_ID}/github/${BRANCH}` : "";
const CDN = `https://assets.tina.io/${CLIENT_ID}/`;
const REFRESH_AFTER_MS = 60 * 1000;

const known = new Set(knownAssets);

const QUERY = `{
  site(relativePath: "site.json") { _values }
  banner(relativePath: "banner.json") { _values }
  home(relativePath: "home.json") { _values }
  about(relativePath: "about.md") { _values }
  servicesPage(relativePath: "services.json") { _values }
  mediaPage(relativePath: "media.json") { _values }
  contact(relativePath: "contact.json") { _values }
  faqsPage(relativePath: "faqs.json") { _values }
  notFoundPage(relativePath: "not-found.json") { _values }
  articleConnection(first: 100) { edges { node { _sys { filename } _values } } }
  eventConnection(first: 100) { edges { node { _sys { filename } _values } } }
  teamConnection(first: 100) { edges { node { _sys { filename } _values } } }
  serviceConnection(first: 100) { edges { node { _sys { filename } _values } } }
  faqConnection(first: 100) { edges { node { _sys { filename } _values } } }
}`;

// Tina Cloud rewrites image paths to its own CDN. Images the site already has
// are served from the site itself; brand-new uploads stay on the CDN until the
// next build copies them in.
const fixMedia = (value) => {
  if (typeof value === "string") {
    if (value.startsWith(CDN)) {
      const local = `/assets/${value.slice(CDN.length)}`;
      return known.has(local) ? local : value;
    }
    return value;
  }
  if (Array.isArray(value)) return value.map(fixMedia);
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, v] of Object.entries(value)) {
      if (key === "_collection" || key === "_template") continue;
      out[key] = fixMedia(v);
    }
    return out;
  }
  return value;
};

const byOrder = (a, b) => (a.order ?? 999) - (b.order ?? 999);
const byDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

const single = (doc, fallback) => (doc?._values ? { ...fallback, ...fixMedia(doc._values) } : fallback);
const list = (conn, sort) =>
  conn?.edges
    ? conn.edges
        .filter((e) => e?.node?._sys)
        .map((e) => ({ id: e.node._sys.filename, ...fixMedia(e.node._values) }))
        .sort(sort)
    : null;

const staticContent = {
  site: built.site,
  banner: built.banner,
  home: built.home,
  about: built.about,
  servicesPage: built.servicesPage,
  mediaPage: built.mediaPage,
  contact: built.contact,
  faqsPage: built.faqsPage,
  notFound: built.notFound,
  team: built.team,
  services: built.services,
  faqs: built.faqs,
  articles: built.articles,
  events: built.events,
};

const toContent = (data) => ({
  site: single(data.site, built.site),
  banner: single(data.banner, built.banner),
  home: single(data.home, built.home),
  about: single(data.about, built.about),
  servicesPage: single(data.servicesPage, built.servicesPage),
  mediaPage: single(data.mediaPage, built.mediaPage),
  contact: single(data.contact, built.contact),
  faqsPage: single(data.faqsPage, built.faqsPage),
  notFound: single(data.notFoundPage, built.notFound),
  team: (list(data.teamConnection, byOrder) ?? built.team).filter((m) => !m.hidden),
  services: list(data.serviceConnection, byOrder) ?? built.services,
  faqs: list(data.faqConnection, byOrder) ?? built.faqs,
  articles: (list(data.articleConnection, byDateDesc) ?? built.articles).filter((a) => !a.draft),
  events: (list(data.eventConnection, byDateDesc) ?? built.events).filter((e) => !e.draft),
});

export const fetchLiveContent = async () => {
  if (!API || !TOKEN) return null;
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-KEY": TOKEN },
    body: JSON.stringify({ query: QUERY }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Content API ${res.status}`);
  const json = await res.json();
  if (!json.data) throw new Error(json.errors?.[0]?.message || "No content returned");
  return toContent(json.data);
};

const ContentContext = createContext(staticContent);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(staticContent);
  const lastLoad = useRef(0);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      lastLoad.current = Date.now();
      try {
        const live = await fetchLiveContent();
        if (live && !cancelled) setContent(live);
      } catch (err) {
        console.warn("Live content unavailable, showing the built-in copy.", err);
      }
    };
    const onVisible = () => {
      if (document.visibilityState === "visible" && Date.now() - lastLoad.current > REFRESH_AFTER_MS) load();
    };
    load();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
};

export const useContent = () => useContext(ContentContext);
