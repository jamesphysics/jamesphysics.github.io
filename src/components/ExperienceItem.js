import React from 'react';

const ExperienceItem = ({ title, company, duration, location, skills, description, projects, logo }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        {logo && <img src={logo} alt={`${company} logo`} className="company-logo" />}
        <div>
          <h3 className="job-title">{title}</h3>
          <p className="company">{company}</p>
          <p className="duration"><em>{duration}</em></p>
          <p className="location">{location}</p>
        </div>
      </div>
      {skills && <p className="skills">{skills}</p>}
      {description && <p className="description">{description}</p>}
      {projects && projects.map((project, index) => <p key={index} className="projects">{project}</p>)}
    </div>
  );
};

export default ExperienceItem;