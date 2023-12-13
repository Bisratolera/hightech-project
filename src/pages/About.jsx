import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 h-screen">
      <div className="image-container overflow-hidden w-1/2 rounded-md shadow-md">
        <Fade direction="right" cascade triggerOnce>
          <img className='profile h-60 w-60' src="./public/images/profile@2x.png" alt="Image Description" />
        </Fade>
      </div>
      <div className="text-container flex-1">
        <Fade direction="left" cascade triggerOnce>
          <p className="paragraph justify-center text-center">
            This project is created by hightech student{' '}
            <span className="text-primary font-bold">Leul</span> and other teams.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
