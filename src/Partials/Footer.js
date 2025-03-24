import React from 'react';
import { FaGithub, FaDribbble, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

function Footer({onSubmit, name, social: { LinkedIn, github, dribbble, email, phone, add } }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = e.target;
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbykM_e-INcDD5kycGgardp70jwy9HB0N1DjhQOSxI4zFB2hnHIp1a2K8h0bz8Hv0hS_BQ/exec", {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        console.log("Form submitted successfully:", data);
        onSubmit();
        formEle.reset();
      })
      .catch((error) => {
        console.error("Error submitting form:", error.message);
      });
  };

  return (
    <div className="text-center w-full border-t-2 border-gray-300">
      <footer className="bg-transparent text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold gradient-heading mb-4">Contact Me</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xl mb-2 font-semibold">Name</label>
                <input type="text" name="Name" id="name" className="w-full px-3 py-2 text-white font-semibold text-lg bg-transparent border-2 border-border-blue rounded-md focus:outline-none transition duration-300 hover:shadow-2xl cursor-pointer transition-all duration-700 hover:scale-110" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xl mb-2 font-semibold">Email</label>
                <input type="email" name="Email" id="email" className="w-full px-3 py-2 text-white font-semibold text-lg bg-transparent border-2 border-border-blue rounded-md focus:outline-none transition duration-300 hover:shadow-2xl cursor-pointer transition-all duration-700 hover:scale-110 " />
              </div>
              <div>
                <label htmlFor="message" className="block text-xl mb-2 font-semibold">Message</label>
                <textarea name="Message" id="message" className="w-full px-3 py-2 text-white font-semibold text-lg bg-transparent border-2 border-border-blue rounded-md focus:outline-none transition duration-300 hover:shadow-2xl cursor-pointer transition-all duration-700 hover:scale-110" rows="4"></textarea>
              </div>
              <button type="submit" className="transition-all duration-700 hover:scale-110 bg-gradient-to-t from-orange-600 to-yellow-600 hover:bg-emerald-30 text-lg font-semibold py-2 px-4 rounded-md">Submit</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-center md:pl-20 pt-10">
            <h2 className="text-4xl gradient-heading font-bold mb-4">Contact Details</h2>
            <ul className="space-y-2 text-xl font-semibold text-white">
              <li>
                <span className="font-semibold">Name:</span> {name}
              </li>
              <li>
                <span className="font-semibold">Phone:</span> {phone}
              </li>
              <li>
                <span className="font-semibold">Email:</span> {email}
              </li>
              <li>
                <span className="font-semibold">Address:</span> {add}
              </li>
              <li>
                <span className="font-semibold">LinkedIn:</span> <a href={LinkedIn} className="text-orange-500 hover:text-orange-600">{LinkedIn}</a>
              </li>
            </ul>
            <div className="flex mt-4">
              <a className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-gray-200 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href={github}>
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
              <a className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href={LinkedIn}>
                <FaLinkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300" href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}>
                <FaRegEnvelope />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
