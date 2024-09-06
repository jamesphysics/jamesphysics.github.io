import React from 'react';

const ExperienceItem = ({ title, company, duration, location, skills, description, projects }) => {
  return (
    <div className="experience-item">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="duration">{duration}</p>
      <p className="location">{location}</p>
      {skills && <p className="skills">{skills}</p>}
      {description && <p className="description">{description}</p>}
      {projects && projects.map((project, index) => <p key={index} className="projects">{project}</p>)}
    </div>
  );
};

export default ExperienceItem;