import { useState } from "react";
import { useForm } from "react-hook-form";

import Spinner from "./Spinner";
import MessageBox from "./MessageBox";

import { X } from "lucide-react";
import { useEvent } from "../utils";

const accessKey = import.meta.env.VITE_HOOKFORM_ACCESS_KEY;

const Form = ({ mailData, handleToggleForm, handleToggleMsg }) => {
  useEvent(handleToggleForm);

  const { inquiryType, mailRoute } = mailData;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const [status, setStatus] = useState(null);

  const handleFormSubmit = async (data) => {
    const formData = new FormData();
    formData.append("access_key", accessKey);

    // Routing based on inquiry type
    // formData.append("email", mailRoute);
    formData.append("subject", `New ${inquiryType.split(' ')[0]} Inquiry from Raissat Website`);

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    
    const result = await res.json();
   
    if(result.success){
      setStatus("success");
      reset();
      handleToggleForm();
      handleToggleMsg(result.message);
    } else{
      setStatus("error");
      throw new Error(result.message || "Submission failed");
    }
  };

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
    "
      >
        {/* Close Button */}
        <button onClick={handleToggleForm} className="absolute -top-2 -right-2 bg-midnight-green text-white rounded-full p-2 sm:p-3 shadow-lg cursor-pointer transition-all duration-200 hover:scale-110 active:scale-90">
          <X className="size-5 sm:size-6" />
        </button>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
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
                  className={`input ${
                    errors.firstName ? "focus:ring-red-500 border-red-500" : ""
                  }`}
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                <p className="text-red-500 font-inter mt-1">
                  {errors.firstName?.message}
                </p>
              </div>
              <div>
                <label className="font-inter font-semibold">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  className={`input ${
                    errors.lastName ? "focus:ring-red-500 border-red-500" : ""
                  }`}
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                <p className="text-red-500 font-inter mt-1">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 ">
              <div>
                <label className="font-inter font-semibold">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  className={`input ${
                    errors.email ? "focus:ring-red-500 border-red-500" : ""
                  }`}
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                <p className="text-red-500 font-inter mt-1">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label className="font-inter font-semibold">Phone Number</label>
                <input
                  className={`input ${
                    errors.phoneNumber
                      ? "focus:ring-red-500 border-red-500"
                      : ""
                  }`}
                  type="text"
                  {...register("phoneNumber", {
                    minLength: {
                      value: 7,
                      message: "Phone number must be at least 8 digits",
                    },
                    pattern: {
                      value: /^[0-9()+-\s]*$/,
                      message: "Invalid phone number format",
                    },
                  })}
                />
                <p className="text-red-500 font-inter mt-1">
                  {errors.phoneNumber?.message}
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="font-inter font-semibold">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  className={`input w-full ${
                    errors.message ? "focus:ring-red-500 border-red-500" : ""
                  }`}
                  rows="3"
                  cols="70"
                  name=""
                  id=""
                  {...register("message", {
                    required: "Please ask all your questions here",
                  })}
                />
                <p className="text-red-500 font-inter mt-1">
                  {errors.message?.message}
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="btn w-full bg-midnight-green text-white border-midnight-green transition-all duration-200 hover:scale-101 active:scale-90  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
