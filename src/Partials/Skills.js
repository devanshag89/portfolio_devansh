import React, { useState } from 'react';
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Determine which skills to display based on showAllSkills state
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 5);

  const toggleSkillsView = () => {
    setShowAllSkills(!showAllSkills);
  };

  return (
    <div className="mt-20">
      <h1 className="mt-8 text-2xl md:text-5xl text-center gradient-heading pb-6 font-bold">
        My Skills
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mt-8">
        {displayedSkills.map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.skillName}
            skillIcon={skill.skillIcon}
          />
        ))}
      </div>

      {skills.length > 5 && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={toggleSkillsView}
            className="transition-all duration-700 hover:scale-110 bg-gradient-to-t from-orange-600 to-yellow-600 hover:bg-emerald-30 text-lg font-semibold py-2 px-4 rounded-md text-white"
          >
            {showAllSkills ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Skills;