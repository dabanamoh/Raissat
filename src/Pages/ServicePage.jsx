import { useParams, useNavigate } from "react-router";
import { SwiperSlide } from "swiper/react";

import Container from "../Components/Container";
import Carousel from "../Components/Carousel";
// import { services } from "../constants";
import { whatWeDo } from "../constants";
import { global } from "../assets";

const ServicePage = () => {
  const { iconBack } = global;
  const { serviceId } = useParams();
  const navigate = useNavigate();
  // const service = services.find((service) => service.id === serviceId);

  const service = whatWeDo.find((service) => service.id === serviceId);
  // console.log(service);

  const handleNavigate = (route) => {
    navigate(route);
  };

  if (!service) {
    return <div>Page not found</div>;
  }

  return (
    <Container>
      <section className="min-h-screen flex flex-col py-8">
        <div className="py-20 flex flex-col md:flex-row gap-10 justify-center">
          <div className="w-full md:w-[50%] h-80  overflow-hidden">
            <Carousel>
              {service.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="h-full w-full object-cover"
                    src={image}
                    alt="service-image"
                    loading="eager"
                  />
                </SwiperSlide>
              ))}
            </Carousel>
            {/* <img
              className="h-full w-full object-cover"
              src={service.images[0]}
              alt="service-image"
              loading="eager"
            /> */}
          </div>
          <div className="font-inter w-full md:w-[50%]">
            <h1 className="font-semibold text-2xl mb-4">{service.title}</h1>
            <p className="font-bold p leading-7 mt-4">{service.subTitle}</p>
            <p className="font-normal p leading-7">
              {service.detailedDescription}
            </p>
            <p className="font-normal p leading-7 mt-4 italic">Focus Areas:</p>
            <ul className="mb-4">
              {service.focusAreas.map((area, index) => (
                <li key={index} className="p mt-2 list-disc list-inside">
                  {area}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleNavigate("/contact")}
              className="btn bg-midnight-green hover:bg-rich-black mt-4"
            >
              {service.cta}
            </button>
          </div>
        </div>
        <span className="mx-auto font-inter flex flex-col gap-2 items-center cursor-pointer md:mt-6">
          <p className="text-lg">What we Do</p>
          <img
            onClick={() => handleNavigate("/services")}
            className="size-10 "
            src={iconBack}
            alt="Go back button"
          />
        </span>
      </section>
    </Container>
  );
};

export default ServicePage;
