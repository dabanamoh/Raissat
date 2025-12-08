import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { X } from "lucide-react";

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
  },

  {
    infoType: "Research Projects & Collaborations",
    infoText:
      "Interested in partnering on applied research or sustainability-focused innovation?",
    infoIcon: <Microscope className="size-8" />,
    animate: "animate-fadeInBottom",
  },

  {
    infoType: "Donations & Support",
    infoText:
      "Support our mission to bridge science, agriculture, and technology for a sustainable future",
    infoIcon: <HandCoins className="size-8" />,
    animate: "animate-fadeInRight",
  },
];

const Form = ({ inquiryType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className="fixed inset-0 z-5000 flex justify-center items-center bg-black/30 backdrop-blur-sm wrapper">
      {/* Backdrop Fade In */}
      <div
        className="
      w-full 
      max-w-lg sm:max-w-2xl md:max-w-4xl
      mx-4
      p-4 sm:p-8
      bg-white/60 backdrop-blur-3xl
      rounded-xl
      flex flex-col sm:flex-row
      gap-6
      relative
      opacity-0 scale-95 
      animate-[fadeInScale_0.25s_ease-out_forwards]
      mt-[10%]
    "
      >
        {/* Close Button */}
        <button className="absolute -top-2 -right-2 bg-midnight-green text-white rounded-full p-2 sm:p-3 shadow-lg cursor-pointer transition-all duration-200 hover:scale-110 active:scale-90">
          <X className="size-5 sm:size-6" />
        </button>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="w-full"
        >
          <h1 className="my-8 text-midnight-green text-center h1">
            Contact Us
          </h1>
          <div className="flex flex-col justify-center items-center gap-4 w-[80%] mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <label className="font-inter font-semibold">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  // placeholder="First name"
                />
              </div>
              <div>
                <label className="font-inter font-semibold">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  // placeholder="Last name"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 ">
              <div>
                <label className="font-inter font-semibold">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  // placeholder="First name"
                />
              </div>
              <div>
                <label className="font-inter font-semibold">
                  Phone Number
                </label>
                <input
                  className="input"
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  // placeholder="Last name"
                />
              </div>
            </div>
            <div>

            <div className="flex flex-col">
              <label className="font-inter font-semibold">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea className="input w-full resize-none" rows="3" cols="70" name="" id=""></textarea>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  const [address, setAddress] = useState("headquarters");

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
              <button className="btn text-indian-yellow border-indian-yellow border-1 hover:bg-indian-yellow hover:text-white">
                Contact Us
              </button>
            </div>
          ))}
          <Form />
        </div>
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
