import React from 'react';
import Section from '../Section';
import SocialIcons from '../SocialIcons';

const HomeSection = () => {
  return (
    <Section id="home" title="">
      <div className="home-content">
        <h1><span className="name">JAMES</span> <span className="surname">TRICKER</span></h1>
        <p className="contact-info">
          Quantum Software Engineer · <span className="email"><a href="mailto:james@jamesquantum.com">james@jamesquantum.com</a></span>
        </p>
        <p className="description">
          As a specialist in quantum computing, high-performance computing (HPC), and scientific computing, I develop cutting-edge research applications across diverse sectors, including energy, finance, telecommunications, pharmaceuticals, and government.
        </p>
        <SocialIcons />
      </div>
    </Section>
  );
};

export default HomeSection;
