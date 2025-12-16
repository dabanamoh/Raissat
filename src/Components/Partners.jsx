import React from "react";
import Container from "./Container";

import { partners } from "../constants";

const Marquee = ({ children }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex flex-row justify-evenly gap-4 animate-marquee px-4 py-2">{children}</div>
    </div>
  );
};

const Partners = () => {
  return (
    <section className="bg-bright-gray pb-5">
      <Container>
        <Marquee>
          {partners.map((partner, idx) => (
            <img key={idx} className="size-12 md:size-30" src={partner} alt="partners-logo" />
          ))}
        </Marquee>
      </Container>
    </section>
  );
};

export default Partners;
