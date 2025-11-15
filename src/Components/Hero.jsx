import React from "react";
import { useNavigate } from "react-router";

import { handleCtaClick } from "../utils";
import Container from "./Container";
import { global } from "../assets";

const { hero } = global;

const Hero = () => {
  const navigate = useNavigate();

  return (
    // <Container></Container>
    <section
      style={{ backgroundImage: `url(${hero}` }}
      className="w-full h-lvh bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center relative"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-rich-black/40" />

      <Container className="z-999">
        <div className="z-10 flex flex-col gap-6 sm:gap-8 text-center sm:p-3 ">
          <h1 className="font-extrabold animate-fadeInLeft text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-Albert-sans text-white">
            From Evidence to Impact: Translating Research Into Action for a
            Sustainable Future
          </h1>
          <p className="text-md md:text-xl text-white font-inter sm:w-[70%] mx-auto animate-fadeInRight">
            At RAISSAT, we bridge the worlds of science, agriculture, and
            technology to turn knowledge into real-world transformation. Through
            research, policy innovation, and capacity building, we empower
            people and systems to thrive sustainably.
          </p>
          <span className="w-full flex justify-center flex-col sm:flex-row gap-4 animate-fadeInBottom">
            <button
              onClick={() => handleCtaClick(navigate, "services")}
              className="btn bg-indian-yellow hover:bg-indian-yellow/90 max-sm:w-[70%] max-sm:mx-auto"
            >
              Explore Our Impact
            </button>
            <button
              onClick={() => handleCtaClick(navigate, "contact")}
              className="btn border-3 border-indian-yellow hover:bg-indian-yellow/90 max-sm:w-[70%] max-sm:mx-auto"
            >
              Partner With Us
            </button>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
