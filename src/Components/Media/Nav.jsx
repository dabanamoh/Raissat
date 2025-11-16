import React from "react";
import { NavLink, Link } from "react-router";

import Container from "../Container";

const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <Container className="py-12">
      <nav className="md:w-4/5 mx-auto py-4 px-3 md:px-12 rounded-3xl bg-midnight-green">
        <ul className="flex justify-between">
          {[
            "All",
            "Articles",
            "Media",
          ].map((link) => (
            <li onClick={() => setActiveTab(link)}
              className={`font-inter font-medium text-sm md:text-md lg:text-lg ${
                activeTab === link ? "text-indian-yellow" : "text-white"
              }`}
              key={link}
            >
              <Link className="">{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
