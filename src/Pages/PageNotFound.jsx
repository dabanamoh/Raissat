import React from "react";
import { useNavigate } from "react-router";
import { handleCtaClick } from "../utils";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center h-screen bg-bright-gray flex flex-col items-center">
      {/* <span className="w-full p-12">
        <img
          className="max-sm:size-8"
          src="/public/assets/iconBack.svg"
          alt=""
        />
      </span> */}
      <div className="mt-[28%]">
        <h1 className="text-red-600 text-6xl font-inter font-bold ">404</h1>
        <p className="text-2xl font-inter text-gray-500">Page not found 🥲</p>
        <button onClick={() => handleCtaClick(navigate, '/')} className="mt-4 bg-midnight-green hover:bg-rich-black text-white py-1 px-3 rounded-xl cursor-pointer btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
