import React from 'react';
import headshot from '../assets/headshot.jpg';
import classes from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={classes.aboutMe} id="about-me">
      <div className={classes.aboutMeDetails}>
        <h1>01. Who am I?</h1>
        <p>
          Hi, I'm Jon, and I'm a front-end developer based in Vancouver, Canada.
          My background is in business analysis and product management, but I've
          always been actively interested in web techologies.
        </p>
        <p>
          As a business analyst and product manager, I was never satisfied with
          just learning the what and why of a customer's problem, but I also
          wanted to create the solutions to address these problems. This led me
          to transitioning over to development. Thanks to my background, I'm
          able to understand the business problem and effectively provide a
          solution.
        </p>
      </div>
      <img className={classes.headshot} src={headshot} />
    </div>
  );
};

export default AboutMe;
