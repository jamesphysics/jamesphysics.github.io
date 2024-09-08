import React from 'react';
import { Link } from 'react-scroll';
import Profile from './Profile';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <ul>
        <li><Link to="home" smooth={true} duration={500} spy={true} activeClass="active">About</Link></li>
        <li><Link to="skills" smooth={true} duration={500} spy={true} activeClass="active">Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={500} spy={true} activeClass="active">Experience</Link></li>
        <li><Link to="education" smooth={true} duration={500} spy={true} activeClass="active">Education</Link></li>
        <li><Link to="interests" smooth={true} duration={500} spy={true} activeClass="active">Interests</Link></li>
        <li><Link to="awards" smooth={true} duration={500} spy={true} activeClass="active">Awards</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;