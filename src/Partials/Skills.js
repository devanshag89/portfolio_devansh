import React from "react";
import SkillCard from "./SkillCard";

function Skills({ skills }) {
  return (
    <div className="mt-20">
      <h1 className="mt-8 text-2xl md:text-5xl text-center gradient-heading pb-6 font-bold">My Skills</h1>
      <div className="flex flex-wrap justify-center max-w-5xl mx-auto mt-8">
        {skills.slice(0, 5).map((skill, index) => (
          <SkillCard 
            key={index}
            skillName={skill.skillName} 
            skillIcon={skill.skillIcon} 
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;