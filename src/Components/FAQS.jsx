import React, { useState } from "react";

import { faqs } from "../constants";
import Accordion from "./Accordion";
import Container from "./Container";

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <Container>

    <section className="py-15 px-8 sm:px-12 flex flex-col sm:flex-row gap-8 w-full sm:h-[70vh]">
      <div className="sm:w-[40%] flex flex-col gap-4 text-center sm:text-left mx-auto">
        <h1 className="font-base text-3xl sm:text-4xl md:text-5xl font-inter text-midnight-green">
          FAQs
        </h1>
        <p className="font-inter text-sm">
          Discover answers to your questions about RAISSAT and how we can assist
          you.
        </p>
        <button className="btn w-32 bg-midnight-green mx-auto sm:mx-0">More</button>
      </div>
      <div className="sm:w-[60%] mx-auto overflow-auto">
        {faqs.slice(0, 8).map((faq, index) => (
          <Accordion
          key={index}
            data={faq}
            index={index}
            handleToggle={handleToggle}
            isOpen={activeIndex === index}
          />
        ))}
      </div>
    </section>
    </Container>
  );
};

export default FAQS;
