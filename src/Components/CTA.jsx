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
        <div className="py-10 sm:p-10 flex flex-col justify-center items-center gap-6">
          <img className="size-22" src={whiteLogoRound} alt="" />
          <h2 className="h1 text-indian-yellow font-medium text-center">
            Why RAISSAT Matters
          </h2>
          <p className="p text-white text-center max-w-[65ch]">
            We exist to close the global gap between discovery and deployment.
            Every project we lead, every partnership we form, and every policy
            we shape is grounded in a single belief:
          </p>
          <p className="p text-indian-yellow text-center font-bold">
            Research should change lives
          </p>
          <button
            type="button"
            onClick={() => handleCtaClick(navigate, "contact")}
            className="btn bg-indian-yellow"
          >
            Partner With Us
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
