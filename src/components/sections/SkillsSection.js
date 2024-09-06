import React from 'react';
import Section from '../Section';
import SkillsList from '../SkillsList';
import pythonLogo from '../../assets/logos/python.png'; // Add paths to your logos
import reactLogo from '../../assets/logos/react.png';
import awsLogo from '../../assets/logos/aws.png';
import sqlLogo from '../../assets/logos/sql.png';
import matlabLogo from '../../assets/logos/matlab.png';
import gcpLogo from '../../assets/logos/gcp.png';
import qiskitLogo from '../../assets/logos/qiskit.png';
import cirqLogo from '../../assets/logos/cirq.png';
import jupyterLogo from '../../assets/logos/jupyter.png';

const skillLogos = {
  "Python": pythonLogo,
  "React.js": reactLogo,
  "Amazon Web Services (AWS)": awsLogo,
  "SQL": sqlLogo,
  "Matlab": matlabLogo,
  "Google Cloud Platform (GCP)": gcpLogo,
  "Qiskit": qiskitLogo,
  "Cirq": cirqLogo,
  "Jupyter": jupyterLogo

};

const SkillsSection = () => {
  return (
    <Section id="skills" title="Skills">
      <SkillsList
        title="Technical Skills"
        skills={[
            "Python",
            "Amazon Web Services (AWS)",
            "Google Cloud Platform (GCP)",
            "React.js",
            "SQL",
            "Jupyter",
            "Qiskit",
            "Cirq",
            "Matlab"
          
        ]}
        skillLogos={skillLogos}
      />
      <SkillsList
        title="Software Development"
        skills={[
            "Documentation",
            "Quality Assurance",
            "Product Onboarding",
            "Developer Relations"
        ]}
        skillLogos={{}} // No logos for soft skills
      />
        <SkillsList
        title="Scientific Research"
        skills={[
            "Quantum Information Processing",
            "Mathematical Optimization",
            "Computational Chemistry",
            "Simulation",
        ]}
        skillLogos={{}} // No logos for soft skills
      />
    </Section>
  );
};

export default SkillsSection;