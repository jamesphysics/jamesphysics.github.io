import React from 'react';
import Section from '../Section';
import ExperienceItem from '../ExperienceItem';

const ExperienceSection = () => {
  return (
    <Section id="experience" title="Experience">
      <ExperienceItem
        title="Quantum Software Engineer"
        company="Strangeworks · Full-time"
        duration="Dec 2022 - Present · 1 yr 10 mos"
        location="Austin, Texas, United States · Remote"
        skills="Skills: Python · Cloud Computing · Quantum Computing · Quality Assurance · Software Documentation · Software Development · Optimization · Research · Research Consulting · Google Cloud Platform (GCP) · React.js"
        description="Strangeworks is a platform that brings together the best computational tools and workflows. Its purpose is to make advanced computing accessible and provide a space..."
      />
      <ExperienceItem
        title="Senior Quantum Software Analyst"
        company="Accenture · Full-time"
        duration="Dec 2020 - Nov 2022 · 2 yrs"
        location="United Kingdom · Remote"
        description="Delivering innovative technology applications, mathematical optimization, and quantum computing research in chemistry, energy, and financial services"
        skills="Skills: Qiskit · Cirq · Cloud Computing · Python · React.js · Quantum Computing · Software Development · Amazon Web Services (AWS) · Computational Chemistry · Optimization · Simulation · Modeling · Open-Source Software · Research · Research Consulting"
        projects={["Implement Bravyi-Kitaev for InteractionOperator", "Quantum PFAS Chemicals Remediation (QPFAS) toolkit"]}
      />
      <ExperienceItem
        title="Data Analyst"
        company="Accenture UK · Full-time"
        duration="Jun 2019 - Nov 2020 · 1 yr 6 mos"
        location="London, England, United Kingdom · Hybrid"
        skills="Skills: SQL · Oracle Database · Data Analysis · Alteryx · Java · Microsoft Excel · Extract, Transform, Load (ETL) · PL/SQL · Telecommunications · Modeling · Reporting · Oracle Application Express"
      />
      <ExperienceItem
        title="Research Intern"
        company="UK Research and Innovation · Internship"
        duration="Jul 2017 - Sep 2017 · 3 mos"
        location="Oxford, England, United Kingdom"
        description="Researching and developing algorithms and software to process materials science imaging data"
        skills="Skills: C++ · Data Analysis · Data Science · Computational Physics · Solid State Physics · Python · Algorithms · Image Processing · Simulation · Modeling · Research Consulting"
        projects={["mantidproject/mantid"]}
      />
    </Section>
  );
};

export default ExperienceSection;
