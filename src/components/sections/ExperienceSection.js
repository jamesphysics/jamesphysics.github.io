import React from 'react';
import Section from '../Section';
import ExperienceItem from '../ExperienceItem';
import strangeworksLogo from '../../assets/logos/strangeworks.png';
import accentureLogo from '../../assets/logos/accenture.png';
import ukriLogo from '../../assets/logos/ukri.png';

const ExperienceSection = () => {
  return (
    <Section id="experience" title="Experience">
      <ExperienceItem
        title="Quantum Software Engineer"
        company="Strangeworks"
        duration="Dec 2022 - Present"
        location="Austin, Texas, United States"
        projects={[
          <a href='https://docs.strangeworks.com' target='_blank' rel='noopener noreferrer'>Strangeworks Documentation</a>
        ]}
        logo={strangeworksLogo}
      />
      <ExperienceItem
        title="Senior Quantum Software Analyst"
        company="Accenture Labs"
        duration="Dec 2020 - Nov 2022 · 2 yrs"
        location="London, England, United Kingdom"
        description="Delivering innovative technology applications, mathematical optimization, and quantum computing research in chemistry, energy, and financial services"
        projects={[
          <a href="https://github.com/quantumlib/OpenFermion/pull/753" target="_blank" rel="noopener noreferrer">Implement Bravyi-Kitaev for InteractionOperator</a>,
          <a href="https://github.com/ICHEC/QPFAS" target="_blank" rel="noopener noreferrer">Quantum PFAS Chemicals Remediation (QPFAS) toolkit</a>
        ]}
        logo={accentureLogo}
      />
      <ExperienceItem
        title="Data Analyst"
        company="Accenture"
        duration="Jun 2019 - Nov 2020 · 1 yr 6 mos"
        location="London, England, United Kingdom"
        logo={accentureLogo}
      />
      <ExperienceItem
        title="Research Intern"
        company="UK Research and Innovation"
        duration="Jul 2017 - Sep 2017 · 3 mos"
        location="Oxford, England, United Kingdom"
        description="Researching and developing algorithms and software to process materials science imaging data"
        projects={[<a href="https://mantidproject.org/" target="_blank" rel="noopener noreferrer">Mantid</a>]}
        logo={ukriLogo}
      />
    </Section>
  );
};

export default ExperienceSection;
