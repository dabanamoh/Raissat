import { useState } from "react";

import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import Accordion from "../Components/Accordion";
import { useContent } from "../content/live";

const FAQs = () => {
  const { faqs, faqsPage } = useContent();
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <Container>
      <PageMeta title={faqsPage.metaTitle || faqsPage.title} description={faqsPage.metaDescription} />
      <section className="py-16">
        <h1 className="h1 text-midnight-green mb-6">{faqsPage.title}</h1>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
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

export default FAQs;
