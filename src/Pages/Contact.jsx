import { useState } from "react";
import { MessageCircleQuestionMark, Microscope, HandCoins, Mail } from "lucide-react";

import Form from "../Components/ContactForm";
import MessageBox from "../Components/MessageBox";
import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import Map from "../Components/Map";
import { contact } from "../content";

const ICONS = {
  question: MessageCircleQuestionMark,
  microscope: Microscope,
  coins: HandCoins,
  mail: Mail,
};

const ANIMATIONS = [
  "motion-safe:animate-fadeInLeft",
  "motion-safe:animate-fadeInBottom",
  "motion-safe:animate-fadeInRight",
];

const Contact = () => {
  const [locationIndex, setLocationIndex] = useState(0);
  const [inquiry, setInquiry] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const cards = contact.cards || [];
  const locations = contact.locations || [];

  return (
    <Container>
      <PageMeta title={contact.metaTitle || contact.title} description={contact.metaDescription} />
      <div className="pt-16">
        <h1 className="h1 mb-4 text-midnight-green">{contact.title}</h1>
        <p className="p font-bold">{contact.subtitle}</p>
        <p className="p mt-4 max-w-[70ch]">{contact.intro}</p>
      </div>

      <div className="py-8">
        <h2 className="font-inter font-bold my-6 text-2xl text-midnight-green">
          {contact.cardsHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = ICONS[card.icon] || Mail;
            const isLastOdd = index === cards.length - 1 && cards.length % 2 === 1;
            return (
              <div
                key={card.type}
                className={`${index % 2 === 1 ? "bg-midnight-green" : "bg-rich-black"} ${
                  isLastOdd ? "md:col-span-2 lg:col-span-1" : ""
                } rounded-lg text-white font-inter p-6 flex flex-col gap-5 ${
                  ANIMATIONS[index % ANIMATIONS.length]
                }`}
              >
                <span className="mx-auto text-indian-yellow">
                  <Icon className="size-8" aria-hidden="true" />
                </span>
                <h3 className="text-xl">{card.type}</h3>
                <p className="grow">{card.text}</p>
                {card.email && (
                  <a
                    href={`mailto:${card.email}`}
                    className="text-sm text-bright-gray/80 underline underline-offset-2 hover:text-indian-yellow"
                  >
                    {card.email}
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setInquiry(card)}
                  className="btn text-indian-yellow border-indian-yellow border hover:bg-indian-yellow hover:text-white"
                >
                  {card.buttonLabel || contact.form?.heading}
                </button>
              </div>
            );
          })}
        </div>

        {inquiry && (
          <Form
            inquiry={inquiry}
            onClose={() => setInquiry(null)}
            onSuccess={() => {
              setInquiry(null);
              setShowSuccess(true);
            }}
          />
        )}
        {showSuccess && <MessageBox onClose={() => setShowSuccess(false)} />}
      </div>

      {locations.length > 0 && (
        <>
          <hr className="bg-rich-black h-px border-0 sm:mt-6" />
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="h1 text-midnight-green mb-6">{contact.locationsHeading}</h2>
              <div className="flex flex-col gap-6">
                {locations.map((loc, index) => (
                  <div key={loc.title}>
                    <button
                      type="button"
                      onClick={() => setLocationIndex(index)}
                      aria-pressed={locationIndex === index}
                      className={`font-semibold font-inter text-xl py-2 mb-1 cursor-pointer text-left hover:text-indian-yellow ${
                        locationIndex === index
                          ? "text-midnight-green underline underline-offset-4"
                          : ""
                      }`}
                    >
                      {loc.title}
                    </button>
                    <p className="p">{loc.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Map location={locations[locationIndex]} />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Contact;
