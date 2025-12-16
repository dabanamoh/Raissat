import React, { useState } from "react";
import Form from "../Components/ContactForm";
import MessageBox from "../Components/MessageBox";

import { MessageCircleQuestionMark, Microscope, HandCoins } from "lucide-react";
import Container from "../Components/Container";
import Map from "../Components/Map";

const contactInfo = [
  {
    infoType: "General Enquiries",
    infoText:
      "For information about our programs, initiatives, or institutional partnerships.",
    infoIcon: <MessageCircleQuestionMark className="size-8" />,
    animate: "animate-fadeInLeft",
    mailRoute: "infoi@raissat.org",
  },

  {
    infoType: "Research Projects & Collaborations",
    infoText:
      "Interested in partnering on applied research or sustainability-focused innovation?",
    infoIcon: <Microscope className="size-8" />,
    animate: "animate-fadeInBottom",
    // mailRoute: "research@raissat.org",
    mailRoute: "info@raissat.org",
  },

  {
    infoType: "Donations & Support",
    infoText:
      "Support our mission to bridge science, agriculture, and technology for a sustainable future",
    infoIcon: <HandCoins className="size-8" />,
    animate: "animate-fadeInRight",
    // mailRoute: "finance@raissat.org",
    mailRoute: "info@raissat.org",
  },
];

const Contact = () => {
  const [address, setAddress] = useState("headquarters");
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState({
    isVisible: false,
    content: "",
  });
  const [mailData, setMailData] = useState({
    inquiryType: "",
    mailRoute: "",
  });

  const handleToggleForm = (data) => {
    if (data) {
      setMailData((prevData) => ({
        ...prevData,
        inquiryType: data.infoType,
        mailRoute: data.mailRoute,
      }));
    }
    setShowForm(prev => !prev);
  };

  const handleToggleMsg = (msg) => {
    setMessage((prevMsg) => ({
      ...prevMsg,
      isVisible: !prevMsg.isVisible,
      content: msg ? msg : '',
    }))
  }

  return (
    <Container>
      <div className="pt-16">
        <h1 className="h1 mb-4 text-midnight-green">Contact Us</h1>
        <p className="p font-bold">Let’s Build Sustainable Futures, Together</p>
        <p className="p mt-4 leading-7">
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
              key={index}
              className={`${
                index === 1 ? "bg-midnight-green" : "bg-rich-black"
              } rounded-lg text-white font-inter p-4 flex flex-col gap-5 py-8 ${
                info.animate
              }`}
            >
              {/* <img src={info.infoIcon} alt="" /> */}
              <p className="mx-auto text-indian-yellow ">{info.infoIcon}</p>
              <h3 className="text-xl">{info.infoType}</h3>
              <p>{info.infoText}</p>
              <button
                onClick={() => handleToggleForm(info)}
                className="btn text-indian-yellow border-indian-yellow border-1 hover:bg-indian-yellow hover:text-white"
              >
                Contact Us
              </button>
            </div>
          ))}
        </div>
        {showForm && (
          <Form mailData={mailData} handleToggleForm={handleToggleForm} handleToggleMsg={handleToggleMsg} />
        )}
        {message.isVisible && (
          <MessageBox message={message.content} handleToggleMsg={handleToggleMsg} />
        )}
      </div>

      <hr className="bg-rich-black h-[1px] border-0 sm:mt-6" />
      <div className=" py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="h1 text-midnight-green mb-6">Our Locations</h1>
          <span>
            <p
              onClick={() => setAddress("headquarters")}
              className="font-semibold font-inter text-xl mb-2 cursor-pointer hover:text-indian-yellow"
            >
              Nigeria Headquarters
            </p>
            <p className="p leading-7 mb-8">
              Research Applied Institute for Sustainability in Science,
              Agriculture & Technology (RAISSAT) 25 Raymond Njoku Street, Ikoyi,
              Lagos, Nigeria.
            </p>
          </span>
          <span>
            <p
              onClick={() => setAddress("uk")}
              className="font-semibold font-inter text-xl mb-2 cursor-pointer hover:text-indian-yellow"
            >
              United Kingdom Office
            </p>
            <p className="p leading-7 mb-8">
              RAISSAT Global Hub Cambridge Innovation Park, Cambridge, United
              Kingdom.
            </p>
          </span>
        </div>
        <div className="">
          <Map currentView={address} />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
