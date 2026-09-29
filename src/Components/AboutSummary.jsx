import { useNavigate } from "react-router";

import Container from "./Container";
import { useContent } from "../content/live";

const AboutSummary = () => {
  const { home } = useContent();
  const navigate = useNavigate();
  const { who } = home;

  return (
    <Container>
      <section className="font-inter flex flex-col justify-center items-center gap-8 py-12 sm:p-12">
        <h2 className="text-[30px] sm:text-[36px] text-midnight-green font-medium">
          {who.title}
        </h2>
        <p className="text-center p max-w-[70ch]">{who.text}</p>

        <h3 className="text-[25px] sm:text-[28px] text-midnight-green font-medium">
          {who.missionTitle}
        </h3>
        <p className="text-center p max-w-[70ch]">{who.missionText}</p>

        <h3 className="text-[25px] sm:text-[28px] text-midnight-green font-medium">
          {who.visionTitle}
        </h3>
        <p className="text-center p max-w-[70ch]">{who.visionText}</p>

        <button
          type="button"
          onClick={() => navigate(who.buttonRoute)}
          className="btn bg-indian-yellow mt-8"
        >
          {who.buttonLabel}
        </button>
      </section>
    </Container>
  );
};

export default AboutSummary;
