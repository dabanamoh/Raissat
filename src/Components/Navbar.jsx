import React, { useLayoutEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";

import { handleCtaClick } from "../utils";

import { global } from "../assets";

import { navItems } from "../constants";

const Navbar = () => {
  const { logo, logoMd, hamburger, close } = global;
  const [toggleNav, setToggleNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [toggleDropDown, setToggleDropDown] = useState(false);

  const navigate = useNavigate();

  // check mobile screen size
  useLayoutEffect(() => {
    const isMediumScreen = window.matchMedia("(max-width: 639px)");

    const handleScreenSizeChange = (e) => {
      setIsMobile(e.matches);
    };

    // init screen size state
    handleScreenSizeChange(isMediumScreen);

    isMediumScreen.addEventListener("change", handleScreenSizeChange);

    return () =>
      isMediumScreen.removeEventListener("change", handleScreenSizeChange);
  }, []);

  function handleToggleNav() {
    setToggleNav((prev) => !prev);
  }

  // function handleToggleDropdown() {
  //   setToggleDropDown((prev) => !prev);
  // }

  return (
    <nav className="nav flex justify-between items-center bg-bright-gray text-midnight-green font-inter z-9999">
      <Link to="/">
        <img className="hidden min-[990px]:block" src={logo} alt="Logo" />
        <img className="hidden max-[990px]:block" src={logoMd} alt="Logo" />
      </Link>
      {/* {toggleNav && ( */}
      <ul
        className={`flex flex-col gap-5 sm:gap-2 sm:flex-row items-center md:justify-evenly md:w-[80%] lg:w-[60%] z-10 mobile-menu ${
          isMobile && (toggleNav ? "block" : "hidden")
        }`}
      >
        {/* Nav toggler close btn */}
        <img
          onClick={handleToggleNav}
          className="absolute top-7 right-5 sm:hidden"
          src={close}
          alt="cose-btn"
        />

        {navItems.map((item, idx) => (
          <li
            key={idx}
            className={`${
              idx === navItems.length - 1 ? "hidden max-[639px]:block" : ""
            }`}
          >
            <NavLink
              onClick={handleToggleNav}
              className={"text-[1rem] md:text-[1.1rem] text-base"}
              to={item.route}
            >
              {item.text}
            </NavLink>
          </li>
        ))}

        <li className=" hidden min-[639px]:block">
          {/* Education btn */}
          <button
            onClick={() => handleCtaClick(navigate, "contact")}
            className="bg-midnight-green hover:bg-rich-black text-white py-2 px-4 rounded-2xl cursor-pointer"
          >
            Get Involved
          </button>
        </li>
        {/* dropdown link to education route */}
        {/* <li className="hidden max-sm:block">
          <NavLink to="education">Education</NavLink>
        </li> */}
      </ul>

      {/* Education btn */}
      {/* <button
        onClick={handleToggleDropdown}
        className="btn w-32 bg-midnight-green hidden max-[990px]:block max-sm:hidden"
      >
        Education
      </button> */}
      <img
        onClick={handleToggleNav}
        className={`size-8 block sm:hidden ${toggleNav ? "hidden" : ""}`}
        src={hamburger}
        alt="hamburger"
      />
      {/* Dropdown education menu */}
      {/* {toggleDropDown && (
        <ul className="flex flex-col justify-center text-base gap-8 p-6 bg-slate-gray-transparent text-bright-gray absolute max-[1025px]:right-8 lg:right-30 top-17 w-[250px] h-[300px] animate-moveInBottom">
          <li>
            <Link>School of Science</Link>
          </li>
          <li>
            <Link>School of Agriculture</Link>
          </li>
          <li>
            <Link>School of Technology</Link>
          </li>
          <li>
            <Link>Interdisciplinary Studies</Link>
          </li>
        </ul>
      )} */}
    </nav>
  );
};

export default Navbar;
