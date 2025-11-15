import {useNavigate} from "react-router";

import { services, impact } from "../constants";
import Container from "./Container";
// import {truncateText} from "../utils";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-rich-black py-16 sm:p-16 text-center">
      <Container>
        <div className="flex flex-col gap-5 mb-12">
          <h1 className="text-[30px] md:text-[36px] text-white font-medium font-inter">
            What We Do
          </h1>
          {/* <h1 className="h1 text-indian-yellow">
          Comprehensive Solutions for <br /> Sustainable Development
        </h1> */}
          <p className="text-white font-inter leading-7">
            We deliver evidence-based, multidisciplinary solutions that tackle
            the world’s most pressing challenges—climate resilience, food
            security, and technological equity.
          </p>
        </div>
        <h1 className="text-[25px] md:text-[28px] mb-8 text-indian-yellow font-medium font-inter">
          Our Core Services Include
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className="card">
              <img src={service.icon} alt="icon" />
              <h2>{service.title}</h2>
              {/* <p>{truncateText(service.text, 25)}</p> */}
              <p>{service.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 my-12">
          <h1 className="text-[30px] md:text-[36px] text-white font-medium font-inter">
            How We Create Impact
          </h1>
          {/* <h1 className="h1 text-indian-yellow">
          Comprehensive Solutions for <br /> Sustainable Development
        </h1> */}
          <p className="text-white font-inter leading-7">
            We operate through a unique Integrated Translational Pipeline,
            ensuring that every insight moves seamlessly from research to
            implementation to measurable impact.
          </p>
        </div>
        <h1 className="text-[28px] mb-8 text-indian-yellow font-medium font-inter">
          Our approach emphasizes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impact.slice(0, 4).map((service, index) => (
            <div key={index} className="card">
              <img src={service.icon} alt="icon" />
              <h2>{service.title}</h2>
              {/* <p>{truncateText(service.text, 25)}</p> */}
              <p>{service.text}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("contact")}
          className="btn bg-indian-yellow mt-15"
        >
          Partner With Us
        </button>
      </Container>
    </section>
  );
};

export default Services;
