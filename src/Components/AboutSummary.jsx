import { useNavigate } from "react-router";

import Container from "./Container";
import { handleCtaClick } from "../utils";

const AboutSummary = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <section className="font-inter flex flex-col justify-center items-center gap-8 py-12 sm:p-12">
        <h2 className="text-[30px] sm:text-[36px] text-midnight-green font-medium">
          Who We Are
        </h2>
        <p className="text-center p max-w-[70ch]">
          RAISSAT (Research Applied Institute for Sustainability in Science
          Agriculture and Technology) is a global think-and-do alliance
          transforming evidence into action. We unite scientists, policymakers,
          innovators, and communities to create lasting change at the
          intersection of research and real-world impact.
        </p>

        <h3 className="text-[25px] sm:text-[28px] text-midnight-green font-medium">
          Our Mission
        </h3>
        <p className="text-center p max-w-[70ch]">
          To turn knowledge into impact by transforming research into real-world
          solutions, building human capacity, and advancing policy across
          science, agriculture, and technology.
        </p>

        <h3 className="text-[25px] sm:text-[28px] text-midnight-green font-medium">
          Our Vision
        </h3>
        <p className="text-center p max-w-[70ch]">
          A world where science, technology, and integrity unite to secure
          prosperity, nourish communities, and safeguard the planet for
          generations to come.
        </p>
        <button
          type="button"
          onClick={() => handleCtaClick(navigate, "/about")}
          className="btn bg-indian-yellow mt-8"
        >
          Learn More
        </button>
      </section>
    </Container>
  );
};

export default AboutSummary;
