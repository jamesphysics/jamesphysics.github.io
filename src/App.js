import React from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomeSection from './components/sections/HomeSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import InterestsSection from './components/sections/InterestsSection';
import AwardsSection from './components/sections/AwardsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <HomeSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <InterestsSection />
        <AwardsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;