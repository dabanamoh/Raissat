import { Link } from "react-router";

import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import { whatWeDo } from "../constants";

const Card = ({ title, subTitle, description, image, to }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16">
      <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-80 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="h1 font-bold">{title}</h2>
        <p className="font-bold p mt-4">{subTitle}</p>
        <p className="p mt-2 mb-8">{description}</p>
        <Link to={to} className="link">
          Read More
        </Link>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <Container>
      <PageMeta
        title="What We Do"
        description="RAISSAT's services: research project management, policy engagement, consultancy, capacity building, and youth mentorship."
      />
      <section className="py-20">
        <div className="mb-8 flex flex-col gap-3">
          <h1 className="h1 text-midnight-green">What We Do</h1>
          <p className="p font-semibold">Turning Knowledge Into Impact</p>
          <p className="p mt-4 max-w-[70ch]">
            At RAISSAT, we translate research into real-world solutions. We
            believe research should do more than inform, it should transform.
            Through evidence-based innovation, capacity building, and strategic
            partnerships, we help bridge the gap between knowledge and
            real-world application. Our multidisciplinary approach ensures every
            project we undertake delivers measurable impact in science,
            agriculture, and technology.
          </p>
        </div>
        {whatWeDo.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            image={item.images[0]}
            to={`/services/${item.id}`}
          />
        ))}
      </section>
    </Container>
  );
};

export default WhatWeDo;
