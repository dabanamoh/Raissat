import { useNavigate } from "react-router";

import Container from "./Container";
import { home } from "../content";

const IconCard = ({ icon, title, text }) => (
  <div className="card">
    <img src={icon} alt="" />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const Services = () => {
  const navigate = useNavigate();
  const s = home.services;

  return (
    <section className="bg-rich-black py-16 text-center">
      <Container>
        <div className="flex flex-col gap-5 mb-12">
          <h2 className="text-[30px] md:text-[36px] text-white font-medium font-inter">
            {s.title}
          </h2>
          <p className="text-white font-inter leading-7 max-w-[70ch] mx-auto">{s.intro}</p>
        </div>
        <h3 className="text-[25px] md:text-[28px] mb-8 text-indian-yellow font-medium font-inter">
          {s.coreTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {s.coreServices.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>

        <div className="flex flex-col gap-5 my-12">
          <h2 className="text-[30px] md:text-[36px] text-white font-medium font-inter">
            {s.impactTitle}
          </h2>
          <p className="text-white font-inter leading-7 max-w-[70ch] mx-auto">{s.impactIntro}</p>
        </div>
        <h3 className="text-[28px] mb-8 text-indian-yellow font-medium font-inter">
          {s.approachTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.approach.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => navigate(s.buttonRoute)}
          className="btn bg-indian-yellow mt-14"
        >
          {s.buttonLabel}
        </button>
      </Container>
    </section>
  );
};

export default Services;
