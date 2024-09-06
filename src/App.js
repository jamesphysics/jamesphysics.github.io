import React from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Section id="home" title="">
          <div className="home-content">
            <h1><span className="name">JAMES</span> <span className="surname">TRICKER</span></h1>
            <p className="contact-info">
              Quantum Software Engineer · <span className="email"><a href="mailto:james@jamesquantum.com">james@jamesquantum.com</a></span>
            </p>
            <p className="description">
            As a specialist in quantum computing, high-performance computing (HPC), and scientific computing, I develop cutting-edge research applications across diverse sectors, including energy, finance, telecommunications, pharmaceuticals, and government.
            </p>
            <div className="social-icons">
              {/* <a href="#"><i className="fab fa-facebook"></i></a> */}
              {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
              <a href="https://github.com/jamesquantum" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/james-tricker/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </Section>
        <Section id="experience" title="Experience">
          <div className="experience-item">
            <h3>Quantum Software Engineer</h3>
            <p className="company">Strangeworks · Full-time</p>
            <p className="duration">Dec 2022 - Present · 1 yr 10 mos</p>
            <p className="location">Austin, Texas, United States · Remote</p>
            <p className="skills">Skills: Python · Cloud Computing · Quantum Computing · Quality Assurance · Software Documentation · Software Development · Optimization · Research · Research Consulting · Google Cloud Platform (GCP) · React.js</p>
            <p className="description">Strangeworks is a platform that brings together the best computational tools and workflows. Its purpose is to make advanced computing accessible and provide a space...</p>
          </div>
          <div className="experience-item">
            <h3>Senior Quantum Software Analyst</h3>
            <p className="company">Accenture · Full-time</p>
            <p className="duration">Dec 2020 - Nov 2022 · 2 yrs</p>
            <p className="location">United Kingdom · Remote</p>
            <p className="description">Delivering innovative technology applications, mathematical optimization, and quantum computing research in chemistry, energy, and financial services</p>
            <p className="skills">Skills: Qiskit · Cirq · Cloud Computing · Python · React.js · Quantum Computing · Software Development · Amazon Web Services (AWS) · Computational Chemistry · Optimization · Simulation · Modeling · Open-Source Software · Research · Research Consulting</p>
            <p className="projects">Implement Bravyi-Kitaev for InteractionOperator</p>
            <p className="projects">Quantum PFAS Chemicals Remediation (QPFAS) toolkit</p>
          </div>
          <div className="experience-item">
            <h3>Data Analyst</h3>
            <p className="company">Accenture UK · Full-time</p>
            <p className="duration">Jun 2019 - Nov 2020 · 1 yr 6 mos</p>
            <p className="location">London, England, United Kingdom · Hybrid</p>
            <p className="skills">Skills: SQL · Oracle Database · Data Analysis · Alteryx · Java · Microsoft Excel · Extract, Transform, Load (ETL) · PL/SQL · Telecommunications · Modeling · Reporting · Oracle Application Express</p>
          </div>
          <div className="experience-item">
            <h3>Research Intern</h3>
            <p className="company">UK Research and Innovation · Internship</p>
            <p className="duration">Jul 2017 - Sep 2017 · 3 mos</p>
            <p className="location">Oxford, England, United Kingdom</p>
            <p className="description">Researching and developing algorithms and software to process materials science imaging data</p>
            <p className="skills">Skills: C++ · Data Analysis · Data Science · Computational Physics · Solid State Physics · Python · Algorithms · Image Processing · Simulation · Modeling · Research Consulting</p>
            <p className="projects">mantidproject/mantid</p>
          </div>
        </Section>
        <Section id="education" title="Education">
          <div className="education-item">
            <h3>University of Oxford</h3>
            <p className="degree">Master of Physics - MPhys, Physics</p>
            <p className="duration">Oct 2014 - Jun 2018</p>
            <p className="grade">Grade: 2:1</p>
            <p className="activities">Activities and societies: Oxford University Gymnastics Club (Men's A Team 16-17, Treasurer 16-17, IT Officer 15-16)</p>
            <p className="majors">Majors: Theoretical Physics and Quantum Information Processing</p>
            <p className="thesis">Thesis: Anyons and Topological Quantum Computing</p>
            <p className="skills">Skills: Matlab · Mathematica</p>
          </div>
          <div className="education-item">
            <h3>Bristol Grammar School</h3>
            <p className="degree">A Level, Maths, Further Maths, Physics, Chemistry, Computing</p>
            <p className="duration">Sep 2012 - Jun 2014</p>
            <p className="grade">Grade: A*A*AA (A level), A (AS level)</p>
            <p className="skills">Skills: Python �� Visual Basic</p>
          </div>
          <div className="education-item">
            <h3>MIT xPRO</h3>
            <p className="degree">Quantum Computing Realities</p>
            <p className="duration">Sep 2021 - Dec 2021</p>
            <p className="grade">Grade: 4.5 Continuing Education Units</p>
            <p className="description">Practical Realities of Quantum Computation and Quantum Communication Requirements for Large-Scale Universal Quantum Computation</p>
          </div>
        </Section>
        <Section id="skills" title="Skills">
          <div className="skills-item">
            <h3>Technical Skills</h3>
            <ul>
              <li>Python</li>
              <li>Cloud Computing</li>
              <li>Quantum Computing</li>
              <li>Quality Assurance</li>
              <li>Software Documentation</li>
              <li>Software Development</li>
              <li>Optimization</li>
              <li>Research</li>
              <li>Research Consulting</li>
              <li>Google Cloud Platform (GCP)</li>
              <li>React.js</li>
              <li>Multiple Cloud Platforms</li>
              <li>Multiple Programming Languages</li>
              <li>Sample Notebooks</li>
              <li>Onboarding Protocol</li>
              <li>Problem Solving</li>
              <li>Developer Relations</li>
              <li>QA</li>
              <li>Qiskit</li>
              <li>Cirq</li>
              <li>Amazon Web Services (AWS)</li>
              <li>Computational Chemistry</li>
              <li>Simulation</li>
            </ul>
          </div>
          <div className="skills-item">
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem-solving</li>
              <li>Collaboration</li>
              <li>Research</li>
              <li>Communication</li>
              <li>Analytical thinking</li>
            </ul>
          </div>
        </Section>
        <Section id="interests" title="Interests">
          <p>Alongside writing software, I love sports like gymnastics and triathlon.
            I enjoy works of fiction like Avatar the Last Airbender and am an avid Pokemon collector.
            </p>
        </Section>
        <Section id="awards" title="Awards">
          <div className="honor-item">
            <h3>Qiskit Advocate</h3>
            <p className="issuer">IBM</p>
            <p className="date">Issued Sep 2021</p>
            <p className="skills">Python and Qiskit</p>
          </div>
          <div className="honor-item">
            <h3>IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X</h3>
            <p className="issuer">IBM</p>
            <p className="date">Issued Jul 2021</p>
            <p className="skills">Python and Qiskit</p>
          </div>
          <div className="honor-item">
            <h3>TechStar Program</h3>
            <p className="issuer">Issued by Accenture · Dec 2021</p>
            <p className="association">Associated with Accenture</p>
            <p className="description">Top 1% of talent at career level globally</p>
          </div>
          <div className="honor-item">
            <h3>Prize for Special Merit in Science</h3>
            <p className="issuer">Issued by Bristol Grammar School · Sep 2014</p>
            <p className="association">Associated with Bristol Grammar School</p>
            <p className="description">Awarded The Old Bristolians' Prize for Special Merit in the Upper Sixth For Science</p>
          </div>
          <div className="honor-item">
            <h3>Gold Certificate, UK Senior Mathematical Challenge</h3>
            <p className="issuer">Issued by United Kingdom Mathematics Trust · Dec 2013</p>
            <p className="association">Associated with Bristol Grammar School</p>
          </div>
          <div className="honor-item">
            <h3>Commendation, BPhO Round 1</h3>
            <p className="issuer">Issued by British Physics Olympiad · Nov 2013</p>
            <p className="association">Associated with Bristol Grammar School</p>
          </div>
          <div className="honor-item">
            <h3>Silver, Cambridge Chemistry Challenge</h3>
            <p className="issuer">Issued by University of Cambridge · Jan 2013</p>
            <p className="association">Associated with Bristol Grammar School</p>
          </div>
          <div className="honor-item">
            <h3>Computing Subject Scholar</h3>
            <p className="issuer">Issued by Bristol Grammar School · Sep 2012</p>
            <p className="association">Associated with Bristol Grammar School</p>
            <p className="description">Selected as a subject scholar in Computing</p>
          </div>
          <div className="honor-item">
            <h3>Physics Honors</h3>
            <p className="issuer">Issued by Ogden Trust · Sep 2012</p>
            <p className="association">Associated with Bristol Grammar School</p>
            <p className="description">Awarded the prestigious Pople Physics Scholarship and appointed as a subject scholar</p>
          </div>
        </Section>
        <Footer />
      </div>
    </div>
  );
}

export default App;