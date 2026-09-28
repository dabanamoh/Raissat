import { useState } from "react";
import { useNavigate } from "react-router";

import Accordion from "./Accordion";
import Container from "./Container";
import { home, faqs } from "../content";

const FAQS = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const section = home.faqs;

  function handleToggle(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <Container>
      <section className="py-16 flex flex-col sm:flex-row gap-8 w-full">
        <div className="sm:w-[40%] flex flex-col gap-4 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter text-midnight-green">
            {section.title}
          </h2>
          <p className="p">{section.text}</p>
          <button
            type="button"
            onClick={() => navigate(section.buttonRoute || "/faqs")}
            className="btn w-32 bg-midnight-green mx-auto sm:mx-0"
          >
            {section.buttonLabel}
          </button>
        </div>
        <div className="sm:w-[60%] flex flex-col gap-3">
          {faqs.slice(0, section.count || 6).map((faq, index) => (
            <Accordion
              key={faq.question}
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
