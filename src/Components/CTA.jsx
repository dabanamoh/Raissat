import { useNavigate } from "react-router";

import Container from "./Container";
import { site } from "../content";

const CTA = () => {
  const navigate = useNavigate();
  const { cta } = site;

  return (
    <section className="bg-rich-black">
      <Container>
        <div className="py-10 sm:p-10 flex flex-col justify-center items-center gap-6">
          <img className="size-22" src={site.logoWhiteRound} alt="" />
          <h2 className="h1 text-indian-yellow font-medium text-center">{cta.title}</h2>
          <p className="p text-white text-center max-w-[65ch]">{cta.text}</p>
          <p className="p text-indian-yellow text-center font-bold">{cta.tagline}</p>
          <button
            type="button"
            onClick={() => navigate(cta.buttonRoute)}
            className="btn bg-indian-yellow"
          >
            {cta.buttonLabel}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
