import React from "react";
import Container from "./Container";

import { partners } from "../constants";

const SDG = ({ children }) => {
  return (
    // <div className="overflow-hidden whitespace-nowrap">
    //   <div className="flex flex-col md:flex-row justify-evenly gap-4 px-4 py-2">{children}</div>
    // </div>
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mx-auto overflow-hidden">
      {children}
    </div>
  );
};

const Partners = () => {
  return (
    <section className="bg-bright-gray py-5">
      <Container>
        <h1 className="h1 text-center p-8 text-midnight-green">
          Our SDG Goals
        </h1>
        <SDG>
          {partners.map((partner, idx) => (
            <img
              key={idx}
              className="w-full md:size-30"
              src={partner}
              alt="partners-logo"
            />
          ))}
        </SDG>
      </Container>
    </section>
  );
};

export default Partners;
