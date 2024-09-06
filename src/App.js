import React from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomeSection from './components/sections/HomeSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import SkillsSection from './components/sections/SkillsSection';
import InterestsSection from './components/sections/InterestsSection';
import AwardsSection from './components/sections/AwardsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <HomeSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <InterestsSection />
        <AwardsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;