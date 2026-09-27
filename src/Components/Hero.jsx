import { useNavigate } from "react-router";

import Container from "./Container";
import { home } from "../content";

const Hero = () => {
  const navigate = useNavigate();
  const { hero } = home;

  return (
    <section
      style={{ backgroundImage: `url(${hero.image})` }}
      className="w-full min-h-[calc(100svh-4rem)] bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center relative py-16"
    >
      <div className="absolute inset-0 bg-rich-black/40" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 sm:gap-8 text-center sm:p-3">
          <h1 className="font-extrabold motion-safe:animate-fadeInLeft text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Albert-sans text-white text-balance">
            {hero.title}
          </h1>
          <p className="text-base md:text-xl text-white font-inter sm:w-[70%] mx-auto motion-safe:animate-fadeInRight">
            {hero.text}
          </p>
          <span className="w-full flex justify-center flex-col sm:flex-row gap-4 motion-safe:animate-fadeInBottom">
            <button
              type="button"
              onClick={() => navigate(hero.primaryRoute)}
              className="btn bg-indian-yellow hover:bg-indian-yellow/90 max-sm:w-[70%] max-sm:mx-auto"
            >
              {hero.primaryLabel}
            </button>
            <button
              type="button"
              onClick={() => navigate(hero.secondaryRoute)}
              className="btn border-3 border-indian-yellow hover:bg-indian-yellow/90 max-sm:w-[70%] max-sm:mx-auto"
            >
              {hero.secondaryLabel}
            </button>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
