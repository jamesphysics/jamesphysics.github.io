import React from 'react';

const SkillsList = ({ title, skills, skillLogos }) => {
  return (
    <div className="skills-item">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skillLogos[skill] && <img src={skillLogos[skill]} alt={skill} className="skill-logo" />}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;