import React from 'react';

const EducationItem = ({ institution, title, duration, grade, majors, thesis, activities, aLevels, asLevels, logo }) => {
  return (
    <div className="education-item">
      <div className="education-header">
        <div>
          <h3>{institution}</h3>
          <img src={logo} alt={`${institution} logo`} className="education-logo" />
          <p className="duration"><em>{duration}</em></p>
          <p className="title">{title}</p>
        </div>
      </div>
      {grade && <p className="grade">{grade}</p>}
      {majors && (
        <div className="levels">
          <h4>Master of Physics (MPhys)</h4>
          <ul className="levels-list">
            {majors.map((major, index) => (
              <li key={index}>{major}</li>
            ))}
          </ul>
        </div>
      )}
      {thesis && (
        <div className="levels">
          <h4>Master's Thesis</h4>
          <p>{thesis}</p>
        </div>
      )}
      {activities && activities.length > 0 && (
        <div className="levels">
          <h4>Activities</h4>
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              {activity.logo && <img src={activity.logo} alt={`${activity.name} logo`} className="activity-logo" />}
              <h5>{activity.name}</h5>
              <div className="activity-content">
                <ul>
                  {activity.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
      {aLevels && (
        <div className="levels">
          <h4>A Levels</h4>
          <ul className="levels-list">
            {aLevels.map((level, index) => (
              <li key={index}>
                <span className="subject">{level.subject}</span> <span className="grade">{level.grade}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {asLevels && (
        <div className="levels">
          <h4>AS Levels</h4>
          <ul className="levels-list">
            {asLevels.map((level, index) => (
              <li key={index}>
                <span className="subject">{level.subject}</span> <span className="grade">{level.grade}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EducationItem;