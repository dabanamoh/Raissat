import { Link } from "react-router";

import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import { services, servicesPage } from "../content";

const Card = ({ service }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16">
      <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-80 overflow-hidden rounded-xl">
        <img
          src={service.images[0]}
          alt={service.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="h1 font-bold">{service.title}</h2>
        <p className="font-bold p mt-4">{service.subtitle}</p>
        <p className="p mt-2 mb-8">{service.description}</p>
        <Link to={`/services/${service.id}`} className="link">
          {servicesPage.readMoreLabel}
        </Link>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <Container>
      <PageMeta title={servicesPage.title} description={servicesPage.metaDescription} />
      <section className="py-20">
        <div className="mb-8 flex flex-col gap-3">
          <h1 className="h1 text-midnight-green">{servicesPage.title}</h1>
          <p className="p font-semibold">{servicesPage.subtitle}</p>
          <p className="p mt-4 max-w-[70ch]">{servicesPage.intro}</p>
        </div>
        {services.map((service) => (
          <Card key={service.id} service={service} />
        ))}
      </section>
    </Container>
  );
};

export default WhatWeDo;
