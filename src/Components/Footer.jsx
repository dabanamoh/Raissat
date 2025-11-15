import React from "react";
import { Link } from "react-router";

// import { whiteLogo } from "../../public/assets/assets";
// import { x } from "../../public/assets/assets";
// import { instagram } from "../../public/assets/assets";
import { global } from "../assets";


import Container from "./Container";

const Footer = () => {
  const { linkdin, whiteLogo, instagram, x } = global;
  return (
    <footer className="bg-rich-black font-inter flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10 sm:gap-0 py-12 px-4 sm:px-12">
      {/* <Container className="flex flex-col sm:flex-row items-center justify-center"> */}
      <div className="flex flex-col gap-1 w-full sm:w-[50%] self-end">
        <img className="w-[200px]" src={whiteLogo} alt="Brand Logo" />
        <p className="text-white text-sm ">
          Research Applied Institute for Sustainability in Science, Agriculture
          and Technology
        </p>
        <span className="flex gap-4 mt-6">
          <a
            target="_blank"
            href="https://www.instagram.com/official_raissat?igsh=dXZkbTJvOTJuYjk3&utm_source=qr"
          >
            <img className="size-5" src={instagram} alt="Social icon" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/raissat">
            <img className="size-5" src={linkdin} alt="Social icon" />
          </a>
          <a target="_blank" href="https://x.com/officialraissat">
            <img className="size-5" src={x} alt="Social icon" />
          </a>
        </span>
      </div>
      <div className="flex justify-between self-end sm:justify-end gap-12 mt-12 text-white w-full sm:w-[50%]">
        <span>
          <h2 className="font-semibold mb-5">Learn more</h2>
          <ul className="text-sm flex flex-col gap-2 footer">
            <Link to={"/"}>Home</Link>
            <Link to={"about"}>Who we are</Link>
            <Link to={"services"}>What we Do</Link>
            <Link to={"media"}>Media Center</Link>
            <Link to={"contact"}>Get Involved</Link>
            {/* <li>
              <a href="">Education</a>
            </li> */}
          </ul>
        </span>
        <span>
          <h2 className="font-semibold mb-6">Support</h2>
          <ul className="text-sm flex flex-col gap-2 footer">
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Legal</a>
            </li>
          </ul>
        </span>
      </div>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
