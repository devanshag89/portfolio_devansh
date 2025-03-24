import React from "react";
import profile from "../images/profile.jpg";

function Background({ title, description }) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between max-w-screen mx-auto bg-transparent">
        <div className="md:w-1/3 flex justify-center items-center mt-10 md:mt-20">
          <img
            className="w-60 md:w-80 rounded-xl shadow-lg"
            src={profile}
            alt="Profile face"
          />
        </div>
        <div className="md:w-2/3 flex flex-col mt-10 md:mt-16 m-5 md:m-10">
          <p className="text-2xl md:text-5xl font-bold gradient-heading text-center md:text-left pb-6">
            {title}
          </p>
          <p className="text-lg md:text-2xl text-center md:text-left text-white font-semibold leading-relaxed mt-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Background;
