import React, {useState} from "react";

import Container from "../Components/Container";

import { faqs } from "../constants";
import Accordion from "../Components/Accordion";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
    function handleToggle(index) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  return (
    <Container>
      <section className="pt-16">
        <h1 className="h1 text-midnight-green mb-6">
          Frequently Asked Questions
        </h1>
        <div className="p-4">
          {faqs.map((faq, index) => (
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

export default FAQs;
