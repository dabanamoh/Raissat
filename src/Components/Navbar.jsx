import { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router";

import { useContent } from "../content/live";

const HAMBURGER = "/assets/hamburger.svg";
const CLOSE = "/assets/close.svg";

const Navbar = () => {
  const { site } = useContent();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Close the drawer on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className="nav h-16 flex justify-between items-center bg-bright-gray text-midnight-green font-inter"
      aria-label="Main"
    >
      <Link to="/" aria-label={`${site.siteName} home`} className="shrink-0">
        <img className="hidden min-[990px]:block h-10 w-auto" src={site.logo} alt={site.siteName} />
        <img className="block min-[990px]:hidden h-10 w-auto" src={site.logoCompact} alt={site.siteName} />
      </Link>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <ul
        id="site-menu"
        className={`flex flex-row items-center gap-2 md:justify-evenly md:w-[80%] lg:w-[60%]
          max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-dvh max-sm:w-[min(80%,320px)]
          max-sm:flex-col max-sm:items-start max-sm:justify-start max-sm:gap-7
          max-sm:pt-24 max-sm:px-8 max-sm:bg-midnight-green max-sm:text-bright-gray max-sm:shadow-2xl
          motion-safe:max-sm:animate-moveInTop ${open ? "" : "max-sm:hidden"}`}
      >
        <li className="sm:hidden absolute top-4 right-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 cursor-pointer"
          >
            <img className="size-6" src={CLOSE} alt="" />
          </button>
        </li>

        {site.nav.map((item, idx) => (
          <li
            key={item.route}
            className={idx === site.nav.length - 1 ? "sm:hidden" : ""}
          >
            <NavLink
              className="inline-block py-2 px-1 text-[1rem] md:text-[1.1rem]"
              to={item.route}
              end={item.route === "/"}
            >
              {item.text}
            </NavLink>
          </li>
        ))}

        <li className="hidden sm:block">
          <button
            type="button"
            onClick={() => navigate(site.navButton.route)}
            className="bg-midnight-green hover:bg-rich-black text-white py-2 px-4 rounded-2xl cursor-pointer"
          >
            {site.navButton.label}
          </button>
        </li>
      </ul>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label="Open menu"
        className={`sm:hidden p-2 -mr-2 cursor-pointer ${open ? "invisible" : ""}`}
      >
        <img className="w-8 h-auto" src={HAMBURGER} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
