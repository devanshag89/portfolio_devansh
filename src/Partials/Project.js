import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import background from "../images/background.webp";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import SuccessModal from "./SuccessModal";

function Project({ data }) {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  const handleFormSubmit = () => {
    setIsSuccessModalOpen(true);
  };
  
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
      <div data-aos="fade-down" data-aos-duration="800">
        <Header navbar={data.navbar} />
        <h1 className="mt-8 text-2xl md:text-4xl text-center gradient-heading pb-2 font-bold">My projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 px-4 pb-10">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      
      <div data-aos="fade-up" data-aos-duration="800">
        <Footer onSubmit={handleFormSubmit} name={data.name} social={data.social} />
      </div>
      
      <SuccessModal
        show={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </div>
  );
}

export default Project;