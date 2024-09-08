import React from 'react';
import Section from '../Section';
import HonorItem from '../HonorItem';
import qiskitAdvBadge from '../../assets/badges/qiskit-adv.png';
import qiskitDevBadge from '../../assets/badges/qiskit-dev.png';

const AwardsSection = () => {
  return (
    <Section id="awards" title="Awards">
      <HonorItem
        title="IBM Qiskit Advocate"
        date="Sep 2021"
        badge={qiskitAdvBadge}
      />
      <HonorItem
        title="IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X"
        date="Jul 2021"
        badge={qiskitDevBadge}
      />
      <HonorItem
        title="TechStar Program"
        issuer="Accenture"
        date="Dec 2021"
        description="Top 1% of talent at career level globally"
      />
      <HonorItem
        title="Prize for Special Merit in Science"
        issuer="Bristol Grammar School"
        date="Sep 2014"
        description="Awarded The Old Bristolians' Prize for Special Merit in the Upper Sixth For Science"
      />
      <HonorItem
        title="Gold Certificate, UK Senior Mathematical Challenge"
        issuer="United Kingdom Mathematics Trust"
        date="Dec 2013"
        association="Bristol Grammar School"
      />
      <HonorItem
        title="Commendation, BPhO Round 1"
        issuer="British Physics Olympiad"
        date="Nov 2013"
        association="Bristol Grammar School"
      />
      <HonorItem
        title="Silver, Cambridge Chemistry Challenge"
        issuer="University of Cambridge"
        date="Jan 2013"
        association="Bristol Grammar School"
      />
      <HonorItem
        title="Computing Subject Scholar"
        issuer="Bristol Grammar School"
        date="Sep 2012"
        association="Bristol Grammar School"
        description="Selected as a subject scholar in Computing"
      />
      <HonorItem
        title="Physics Honors"
        issuer="Ogden Trust"
        date="Sep 2012"
        association="Bristol Grammar School"
        description="Awarded the prestigious Pople Physics Scholarship and appointed as a subject scholar"
      />
    </Section>
  );
};

export default AwardsSection;