import React from 'react';

const HonorItem = ({ title, issuer, date, association, description, badge }) => {
  return (
    <div className="honor-item">
      <h3>{title}</h3>
      <p className="issuer">{issuer}</p>
      <p className="date">{date}</p>
      {association && <p className="association">{association}</p>}
      {badge && <img src={badge} alt={`${title} badge`} className="badge" />}
      {description && <p className="description">{description}</p>}
    </div>
  );
};

export default HonorItem;