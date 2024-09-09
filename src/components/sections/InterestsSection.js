import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Section from '../Section';
import cycleImage from '../../assets/interests/cycle.JPG';
import swimImage from '../../assets/interests/swim.JPG';
import runImage from '../../assets/interests/run.JPG';

const InterestsSection = () => {
  return (
    <Section id="interests" title="Interests">
      <p>Alongside writing software, I love sports like gymnastics and triathlon.
        I enjoy works of fiction like Avatar the Last Airbender and am an avid Pokemon collector.
      </p>

      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
        <div>
          <img className="carousel-image-landscape" src={swimImage} alt="Swimming" />
        </div>
        <div>
          <iframe
            className="carousel-iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/za1S2Cfwbz4?si=NylApP7HJXzzpmU5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <img className="carousel-image-portrait" src={cycleImage} alt="Cycling" />
        </div>
        <div>
          <img className="carousel-image-portrait" src={runImage} alt="Running" />
        </div>
      </Carousel>
    </Section>
  );
};

export default InterestsSection;