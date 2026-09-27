import { useNavigate } from "react-router";

import { services, impact } from "../constants";
import Container from "./Container";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-rich-black py-16 text-center">
      <Container>
        <div className="flex flex-col gap-5 mb-12">
          <h2 className="text-[30px] md:text-[36px] text-white font-medium font-inter">
            What We Do
          </h2>
          <p className="text-white font-inter leading-7 max-w-[70ch] mx-auto">
            We deliver evidence-based, multidisciplinary solutions that tackle
            the world’s most pressing challenges: climate resilience, food
            security, and technological equity.
          </p>
        </div>
        <h3 className="text-[25px] md:text-[28px] mb-8 text-indian-yellow font-medium font-inter">
          Our Core Services Include
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 4).map((service) => (
            <div key={service.id} className="card">
              <img src={service.icon} alt="" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 my-12">
          <h2 className="text-[30px] md:text-[36px] text-white font-medium font-inter">
            How We Create Impact
          </h2>
          <p className="text-white font-inter leading-7 max-w-[70ch] mx-auto">
            We operate through a unique Integrated Translational Pipeline,
            ensuring that every insight moves seamlessly from research to
            implementation to measurable impact.
          </p>
        </div>
        <h3 className="text-[28px] mb-8 text-indian-yellow font-medium font-inter">
          Our approach emphasizes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impact.map((item) => (
            <div key={item.id} className="card">
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => navigate("/contact")}
          className="btn bg-indian-yellow mt-14"
        >
          Partner With Us
        </button>
      </Container>
    </section>
  );
};

export default Services;
