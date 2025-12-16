import React from "react";

import { Check } from "lucide-react";

const MessageBox = ({ message, handleToggleMsg }) => {
  return (
    <div className="fixed inset-0 z-5000 flex justify-center items-center bg-black/30 backdrop-blur-sm wrapper">
      <div
        className="
      w-[fit-content] 
      max-w-lg sm:max-w-2xl md:max-w-4xl
      mx-4
      p-4 sm:p-8
      bg-white/60 backdrop-blur-3xl
      rounded-xl
      flex flex-col justify-center items-center
      gap-6
      opacity-0 scale-95 
      animate-[fadeInScale_0.25s_ease-out_forwards] "
      >
        <Check className="size-18 border-2 text-midnight-green border-midnight-green rounded-full p-1" />
        <h1 className="h1 font-normal text-midnight-green">{message}</h1>
        <p className="p leading-7 text-center w-[70%]">
          Thank you for reaching out to us. We have received your message and
          will get back to you shortly.
        </p>
        <button onClick={handleToggleMsg} className="btn px-5 bg-midnight-green text-white border-midnight-green transition-all duration-200 hover:scale-101 active:scale-90  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100">
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
