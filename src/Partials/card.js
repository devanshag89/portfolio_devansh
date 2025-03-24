import React from "react";
import icon3 from "../images/icon3.png";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, social: { github, dribbble, LinkedIn, email } }) {
  return (
    <div className="w-full bg-transparent h-auto p-20">
  <div className="flex flex-col md:flex-row justify-center items-center max-w-screen mx-auto h-full">
    <div className="md:w-2/3 flex flex-col items-start md:items-left text-center md:text-left mt-[-10%] md:mt-[-15%] md:mr-8 px-4">
      <p className="text-3xl sm:text-5xl font-semibold text-white mt-40">
        Hello!<span className="wave">👋</span> It's me,
      </p>
      <p className="animate-pulse text-3xl sm:text-8xl font-mono font-semibold gradient-name pb-6 flex items-center">
        {name}
      </p>
      <p className="text-xl sm:text-5xl gradient-hello font-semibold pb-4 w-auto inline-block border-b-2">
        {title}
      </p>
      <div className="flex justify-center md:justify-start mt-4">
        <a
          className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-gray-200 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href={github}
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href={LinkedIn}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
          href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
          aria-label="Email"
        >
          <FaRegEnvelope />
        </a>
      </div>
    </div>
    <div className="md:w-1/3 flex justify-center md:justify-center items-center mt-10 md:mt-0">
      <img className="w-auto" src={icon3} alt="Profile" />
    </div>
  </div>
</div>

  );
}

export default Card;
