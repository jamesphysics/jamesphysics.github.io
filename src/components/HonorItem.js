import React from 'react';

const HonorItem = ({ title, issuer, date, skills, association, description }) => {
  return (
    <div className="honor-item">
      <h3>{title}</h3>
      <p className="issuer">{issuer}</p>
      <p className="date">{date}</p>
      {skills && <p className="skills">{skills}</p>}
      {association && <p className="association">Associated with {association}</p>}
      {description && <p className="description">{description}</p>}
    </div>
  );
};

export default HonorItem;