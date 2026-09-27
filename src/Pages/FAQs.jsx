import { useState } from "react";

import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import Accordion from "../Components/Accordion";
import { faqs } from "../constants";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <Container>
      <PageMeta
        title="FAQs"
        description="Answers to common questions about RAISSAT: who we are, what we do, where we work, and how to partner with us."
      />
      <section className="py-16">
        <h1 className="h1 text-midnight-green mb-6">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-3">
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
