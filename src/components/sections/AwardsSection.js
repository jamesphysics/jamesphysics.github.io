import React from 'react';
import Section from '../Section';
import HonorItem from '../HonorItem';

const AwardsSection = () => {
  return (
    <Section id="awards" title="Awards">
      <HonorItem
        title="Qiskit Advocate"
        issuer="IBM"
        date="Issued Sep 2021"
        skills="Python and Qiskit"
      />
      <HonorItem
        title="IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X"
        issuer="IBM"
        date="Issued Jul 2021"
        skills="Python and Qiskit"
      />
      <HonorItem
        title="TechStar Program"
        issuer="Issued by Accenture · Dec 2021"
        association="Associated with Accenture"
        description="Top 1% of talent at career level globally"
      />
      <HonorItem
        title="Prize for Special Merit in Science"
        issuer="Issued by Bristol Grammar School · Sep 2014"
        association="Associated with Bristol Grammar School"
        description="Awarded The Old Bristolians' Prize for Special Merit in the Upper Sixth For Science"
      />
      <HonorItem
        title="Gold Certificate, UK Senior Mathematical Challenge"
        issuer="Issued by United Kingdom Mathematics Trust · Dec 2013"
        association="Associated with Bristol Grammar School"
      />
      <HonorItem
        title="Commendation, BPhO Round 1"
        issuer="Issued by British Physics Olympiad · Nov 2013"
        association="Associated with Bristol Grammar School"
      />
      <HonorItem
        title="Silver, Cambridge Chemistry Challenge"
        issuer="Issued by University of Cambridge · Jan 2013"
        association="Associated with Bristol Grammar School"
      />
      <HonorItem
        title="Computing Subject Scholar"
        issuer="Issued by Bristol Grammar School · Sep 2012"
        association="Associated with Bristol Grammar School"
        description="Selected as a subject scholar in Computing"
      />
      <HonorItem
        title="Physics Honors"
        issuer="Issued by Ogden Trust · Sep 2012"
        association="Associated with Bristol Grammar School"
        description="Awarded the prestigious Pople Physics Scholarship and appointed as a subject scholar"
      />
    </Section>
  );
};

export default AwardsSection;