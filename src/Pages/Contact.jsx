import { useState } from "react";
import { MessageCircleQuestionMark, Microscope, HandCoins } from "lucide-react";

import Form from "../Components/ContactForm";
import MessageBox from "../Components/MessageBox";
import Container from "../Components/Container";
import PageMeta from "../Components/PageMeta";
import Map from "../Components/Map";

const contactInfo = [
  {
    infoType: "General Enquiries",
    infoText:
      "For information about our programs, initiatives, or institutional partnerships.",
    infoIcon: <MessageCircleQuestionMark className="size-8" aria-hidden="true" />,
    animate: "motion-safe:animate-fadeInLeft",
    mailRoute: "info@raissat.org",
  },
  {
    infoType: "Research Projects & Collaborations",
    infoText:
      "Interested in partnering on applied research or sustainability-focused innovation?",
    infoIcon: <Microscope className="size-8" aria-hidden="true" />,
    animate: "motion-safe:animate-fadeInBottom",
    mailRoute: "info@raissat.org",
  },
  {
    infoType: "Donations & Support",
    infoText:
      "Support our mission to bridge science, agriculture, and technology for a sustainable future.",
    infoIcon: <HandCoins className="size-8" aria-hidden="true" />,
    animate: "motion-safe:animate-fadeInRight",
    mailRoute: "info@raissat.org",
  },
];

const locations = [
  {
    key: "headquarters",
    title: "Nigeria Headquarters",
    text: "Research Applied Institute for Sustainability in Science, Agriculture & Technology (RAISSAT), 117A Shasha Road, Akowonjo, Lagos, Nigeria.",
  },
  {
    key: "uk",
    title: "United Kingdom Office",
    text: "RAISSAT Global Hub, Cambridge Innovation Park, Cambridge, United Kingdom.",
  },
];

const Contact = () => {
  const [address, setAddress] = useState("headquarters");
  const [mailData, setMailData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <Container>
      <PageMeta
        title="Contact"
        description="Get in touch with RAISSAT for general enquiries, research collaborations, or donations. Offices in Lagos, Nigeria and Cambridge, United Kingdom."
      />
      <div className="pt-16">
        <h1 className="h1 mb-4 text-midnight-green">Contact Us</h1>
        <p className="p font-bold">Let’s Build Sustainable Futures, Together</p>
        <p className="p mt-4 max-w-[70ch]">
          At RAISSAT, collaboration drives transformation. Whether you’re an
          individual, organization, or institution seeking to partner, support,
          or learn from our work, we’d love to hear from you. Our team of
          experts is ready to connect, collaborate, and co-create solutions that
          bridge research and real-world impact.
        </p>
      </div>

      <div className="py-8">
        <h2 className="font-inter font-bold my-6 text-2xl text-midnight-green">
          Reach out to the right Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={info.infoType}
              className={`${
                index === 1 ? "bg-midnight-green" : "bg-rich-black"
              } ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""} rounded-lg text-white font-inter p-6 flex flex-col gap-5 ${
                info.animate
              }`}
            >
              <span className="mx-auto text-indian-yellow">{info.infoIcon}</span>
              <h3 className="text-xl">{info.infoType}</h3>
              <p className="grow">{info.infoText}</p>
              <button
                type="button"
                onClick={() => setMailData(info)}
                className="btn text-indian-yellow border-indian-yellow border hover:bg-indian-yellow hover:text-white"
              >
                Contact Us
              </button>
            </div>
          ))}
        </div>

        {mailData && (
          <Form
            mailData={mailData}
            onClose={() => setMailData(null)}
            onSuccess={(msg) => {
              setMailData(null);
              setSuccessMessage(msg || "Message sent");
            }}
          />
        )}
        {successMessage && (
          <MessageBox message={successMessage} onClose={() => setSuccessMessage("")} />
        )}
      </div>

      <hr className="bg-rich-black h-px border-0 sm:mt-6" />

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="h1 text-midnight-green mb-6">Our Locations</h2>
          <div className="flex flex-col gap-6">
            {locations.map((loc) => (
              <div key={loc.key}>
                <button
                  type="button"
                  onClick={() => setAddress(loc.key)}
                  aria-pressed={address === loc.key}
                  className={`font-semibold font-inter text-xl py-2 mb-1 cursor-pointer text-left hover:text-indian-yellow ${
                    address === loc.key ? "text-midnight-green underline underline-offset-4" : ""
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
          <Map currentView={address} />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
