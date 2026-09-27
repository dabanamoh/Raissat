import { useParams, useNavigate, Link } from "react-router";
import { SwiperSlide } from "swiper/react";

import Container from "../Components/Container";
import Carousel from "../Components/Carousel";
import PageMeta from "../Components/PageMeta";
import PageNotFound from "./PageNotFound";
import { whatWeDo } from "../constants";

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = whatWeDo.find((s) => s.id === serviceId);
  if (!service) return <PageNotFound />;

  const others = whatWeDo.filter((s) => s.id !== serviceId);

  return (
    <Container className="py-16">
      <PageMeta title={service.title} description={service.description} />

      <nav aria-label="Breadcrumb" className="font-inter text-sm text-slate-600 mb-8">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link to="/services" className="inline-block py-2 hover:text-indian-yellow underline underline-offset-2">
              What We Do
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-rich-black font-medium" aria-current="page">
            {service.title}
          </li>
        </ol>
      </nav>

      <section className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden self-start">
          <Carousel>
            {service.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt={`${service.title}, photo ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>

        <div className="font-inter w-full md:w-1/2">
          <h1 className="h1 mb-3">{service.title}</h1>
          <p className="font-bold p">{service.subTitle}</p>
          <p className="p mt-3">{service.detailedDescription}</p>

          <h2 className="font-semibold p mt-6 mb-2">Focus areas</h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-6">
            {service.focusAreas.map((area) => (
              <li
                key={area}
                className="bg-white rounded-lg px-4 py-3 text-sm md:text-base border-l-4 border-indian-yellow"
              >
                {area}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="btn bg-midnight-green hover:bg-rich-black"
          >
            {service.cta}
          </button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-semibold font-inter text-xl text-rich-black mb-6">
          Other things we do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {others.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <img
                className="w-full aspect-[16/10] object-cover"
                src={s.images[0]}
                alt=""
                loading="lazy"
              />
              <span className="p-4 font-inter font-semibold text-rich-black group-hover:text-midnight-green">
                {s.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ServicePage;
