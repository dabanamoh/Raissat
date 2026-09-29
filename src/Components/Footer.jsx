import { Link } from "react-router";
import { useContent } from "../content/live";
import { fill } from "../utils";

const SOCIAL_ICONS = {
  instagram: "/assets/instagram.svg",
  linkedin: "/assets/linkdin.svg",
  x: "/assets/X.svg",
};

const Footer = () => {
  const { site } = useContent();
  return (
    <footer className="bg-rich-black font-inter text-white py-12 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-10">
        <div className="flex flex-col gap-2 sm:w-1/2">
          <img className="w-[200px] h-auto" src={site.logoWhite} alt={site.siteName} />
          <p className="text-sm">{site.tagline}</p>
          <ul className="flex gap-2 mt-4 list-none m-0 p-0">
            {site.socials.map((s) => (
              <li key={s.network}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={s.url}
                  aria-label={s.label}
                  className="inline-flex p-2 -ml-2 rounded hover:bg-white/10"
                >
                  <img className="size-5" src={SOCIAL_ICONS[s.network]} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-12 sm:justify-end sm:w-1/2">
          <nav aria-label="Footer">
            <h2 className="font-semibold mb-3">{site.footerLearnHeading}</h2>
            <ul className="text-sm flex flex-col footer list-none m-0 p-0">
              {site.nav.map((item) => (
                <li key={item.route}>
                  <Link className="inline-block py-1.5" to={item.route}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-semibold mb-3">{site.footerSupportHeading}</h2>
            <ul className="text-sm flex flex-col footer list-none m-0 p-0">
              {site.footerSupportLinks.map((item) => (
                <li key={item.route}>
                  <Link className="inline-block py-1.5" to={item.route}>
                    {item.text}
                  </Link>
                </li>
              ))}
              <li>
                <a className="inline-block py-1.5" href={`mailto:${site.contactEmail}`}>
                  {site.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {site.copyright && (
        <p className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/15 text-xs text-white/70">
          {fill(site.copyright, { year: new Date().getFullYear() })}
        </p>
      )}
    </footer>
  );
};

export default Footer;
