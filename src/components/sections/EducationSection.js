import React from 'react';
import Section from '../Section';
import EducationItem from '../EducationItem';
import oxfordLogo from '../../assets/logos/oxford.jpg';
import bristolLogo from '../../assets/logos/bgs.png';

const EducationSection = () => {
  return (
    <Section id="education" title="Education">
      <EducationItem
        institution="University of Oxford"
        duration="Oct 2014 - Jun 2018"
        grade="2:1"
        majors={[
          "Theoretical Physics",
          "Quantum Information Processing"
        ]}
        thesis="Anyons and Topological Quantum Computing"
        activities="Oxford University Gymnastics Club (Men's A Team 16-17, Treasurer 16-17, IT Officer 15-16)"
        logo={oxfordLogo}
      />
      <EducationItem
        institution="Bristol Grammar School"
        duration="Sep 2012 - Jun 2014"
        aLevels={[
          { subject: "Mathematics", grade: "A*" },
          { subject: "Further Mathematics", grade: "A*" },
          { subject: "Physics", grade: "A" },
          { subject: "Chemistry", grade: "A" }
        ]}
        asLevels={[
          { subject: "Computing", grade: "A" }
        ]}
        logo={bristolLogo}
      />
    </Section>
  );
};

export default EducationSection;
