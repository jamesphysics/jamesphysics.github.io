import React from 'react';

const Section = ({ id, title, children, image }) => {
  return (
    <div id={id} className="section">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} className="section-image" />}
      {children}
    </div>
  );
};

export default Section;