import { useNavigate } from "react-router";
import { handleCtaClick } from "../utils";

import { global } from "../assets";

import Container from "./Container";

const CTA = () => {
  const { whiteLogoRound } = global;
  const navigate = useNavigate();

  return (
    <section className="bg-rich-black">
      <Container>
        <div className="p-10 flex flex-col justify-center items-center gap-6">
          <img className="size-22" src={whiteLogoRound} alt="Brand-logo" />
          <h1 className="h1 text-indian-yellow font-medium text-center">
            Why RAISSAT Matters
          </h1>
          <p className="p text-white text-center">
            We exist to close the global gap between discovery and deployment.
            Every project we lead, every partnership we form, and every policy
            we shape is grounded in a single belief:
          </p>
          <h1 className="p text-indian-yellow text-center font-bold">
            Research should change lives
          </h1>
          <button
            onClick={() => handleCtaClick(navigate, "contact")}
            className="btn text-xs md:text-sm bg-indian-yellow"
          >
            Partner With Us
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
