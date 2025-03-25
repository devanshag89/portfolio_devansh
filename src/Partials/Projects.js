import React, { useState } from 'react';
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Determine which projects to display based on showAllProjects state
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div className="p-10">
      <h1 className="mt-8 text-2xl md:text-5xl text-center gradient-heading pb-6 font-bold">My projects</h1>
      <div className="flex flex-col lg:flex-row align-center sm:items-center md:items-center justify-center max-w-8xl mx-auto mt-8 gap-10 pb-10">
        {displayedProjects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {showAllProjects && displayedProjects.length > 3 && (
        <div className="flex flex-col lg:flex-row align-center sm:items-center md:items-center justify-center max-w-8xl mx-auto mt-8 gap-10 pb-10">
          {displayedProjects.slice(3).map((project, index) => (
            <ProjectCard key={index + 3} project={project} />
          ))}
        </div>
      )}

      {projects.length > 3 && (
        <div className="flex justify-center">
          <button 
            onClick={toggleProjectsView}
            className="transition-all duration-700 hover:scale-110 bg-gradient-to-t from-orange-600 to-yellow-600 hover:bg-emerald-30 text-lg font-semibold py-2 px-4 rounded-md text-white"
          >
            {showAllProjects ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;