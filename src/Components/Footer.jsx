import { Link } from "react-router";

import { global } from "../assets";
import { navItems } from "../constants";

const socials = [
  {
    label: "RAISSAT on Instagram",
    href: "https://www.instagram.com/official_raissat",
    icon: "instagram",
  },
  {
    label: "RAISSAT on LinkedIn",
    href: "https://www.linkedin.com/company/raissat",
    icon: "linkdin",
  },
  { label: "RAISSAT on X", href: "https://x.com/officialraissat", icon: "x" },
];

const Footer = () => {
  const { whiteLogo } = global;

  return (
    <footer className="bg-rich-black font-inter text-white py-12 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-10">
        <div className="flex flex-col gap-2 sm:w-1/2">
          <img className="w-[200px] h-auto" src={whiteLogo} alt="RAISSAT" />
          <p className="text-sm">
            Research Applied Institute for Sustainability in Science, Agriculture
            and Technology
          </p>
          <ul className="flex gap-2 mt-4 list-none m-0 p-0">
            {socials.map((s) => (
              <li key={s.icon}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex p-2 -ml-2 rounded hover:bg-white/10"
                >
                  <img className="size-5" src={global[s.icon]} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-12 sm:justify-end sm:w-1/2">
          <nav aria-label="Footer">
            <h2 className="font-semibold mb-3">Learn more</h2>
            <ul className="text-sm flex flex-col footer list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.route}>
                  <Link className="inline-block py-1.5" to={item.route}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-semibold mb-3">Support</h2>
            <ul className="text-sm flex flex-col footer list-none m-0 p-0">
              <li>
                <Link className="inline-block py-1.5" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="inline-block py-1.5" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li>
                <a className="inline-block py-1.5" href="mailto:info@raissat.org">
                  info@raissat.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
