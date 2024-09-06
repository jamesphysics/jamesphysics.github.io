import React from 'react';

const EducationItem = ({ institution, degree, duration, grade, activities, majors, thesis, skills }) => {
  return (
    <div className="education-item">
      <h3>{institution}</h3>
      <p className="degree">{degree}</p>
      <p className="duration">{duration}</p>
      {grade && <p className="grade">Grade: {grade}</p>}
      {activities && <p className="activities">Activities and societies: {activities}</p>}
      {majors && <p className="majors">Majors: {majors}</p>}
      {thesis && <p className="thesis">Thesis: {thesis}</p>}
      {skills && <p className="skills">Skills: {skills}</p>}
    </div>
  );
};

export default EducationItem;