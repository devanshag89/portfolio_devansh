import React, { useState } from "react";

const ProjectCard = ({ project: { title, image, description, tags, link } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="w-80 h-auto my-4 transition-all duration-700 hover:scale-110">
        <div className="bg-transparent shadow-lg shadow-border-blue hover:shadow-2xl border-4 border-border-blue rounded-lg dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col justify-between">
          <a href={link}>
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={image}
              alt=""
            />
          </a>
          <div className="p-5 flex flex-col flex-grow">
            <a href={link}>
              <h5 className="text-white font-bold text-xl tracking-tight mb-2 dark:text-white">
                {title}
              </h5>
            </a>
            <div className="flex-grow">
              <div className="mt-2 mb-4 flex flex-wrap justify-center items-center gap-1">
                {tags.map((tag, index) => (
                  <div key={index} className="px-1 py-1 border-2 border-gray-100 text-white rounded-full dark:border-black">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={openModal}
              className="transition-all duration-700 hover:scale-110 bg-gradient-to-t from-orange-600 to-yellow-600 hover:bg-emerald-30 text-lg text-white font-semibold py-2 px-4 rounded-md"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <img
              className="w-full h-48 object-cover rounded mb-4"
              src={image}
              alt={title}
            />
            <p className="text-gray-200 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-700 text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={link}
                className="transition-all duration-700 hover:scale-110 bg-gradient-to-t from-orange-600 to-yellow-600 hover:bg-emerald-30 text-lg text-white font-semibold py-2 px-4 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;