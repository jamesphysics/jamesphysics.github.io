import React from 'react';
import Section from '../Section';
import EducationItem from '../EducationItem';

const EducationSection = () => {
  return (
    <Section id="education" title="Education">
      <EducationItem
        institution="University of Oxford"
        degree="Master of Physics - MPhys, Physics"
        duration="Oct 2014 - Jun 2018"
        grade="2:1"
        activities="Oxford University Gymnastics Club (Men's A Team 16-17, Treasurer 16-17, IT Officer 15-16)"
        majors="Theoretical Physics and Quantum Information Processing"
        thesis="Anyons and Topological Quantum Computing"
        skills="Matlab · Mathematica"
      />
      <EducationItem
        institution="Bristol Grammar School"
        degree="A Level, Maths, Further Maths, Physics, Chemistry, Computing"
        duration="Sep 2012 - Jun 2014"
        grade="A*A*AA (A level), A (AS level)"
        skills="Python · Visual Basic"
      />
      <EducationItem
        institution="MIT xPRO"
        degree="Quantum Computing Realities"
        duration="Sep 2021 - Dec 2021"
        grade="4.5 Continuing Education Units"
        description="Practical Realities of Quantum Computation and Quantum Communication Requirements for Large-Scale Universal Quantum Computation"
      />
    </Section>
  );
};

export default EducationSection;
