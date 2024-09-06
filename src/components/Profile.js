import React from 'react';
import { Link } from 'react-scroll';
import profileImage from '../assets/me.jpeg';

const Profile = () => {
  return (
    <div className="profile-container">
      <Link to="home" smooth={true} duration={500} spy={true} activeClass="active">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </Link>
    </div>
  );
};

export default Profile;