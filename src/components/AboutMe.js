import React from 'react';
import headshot from '../assets/headshot.jpg';
import classes from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={classes.aboutMe} id="about-me">
      <div className={classes.header}>
        <h1>About Me</h1>
      </div>

      <div className={classes.aboutMeDetails}>
        <div>
          <p>
            Hi, I'm Jonathan, or just Jon for short. I'm a web developer based
            in Vancouver, Canada. My background is in business and systems
            analysis, and product management, but I've always been actively
            interested and engaged in the software development side of things as
            well.
          </p>
          <p>
            As an analyst and product manager, I was never satisfied with only
            learning what the problem was, but I also wanted to understand the
            technical details surrounding the solutions to address these
            problems. Because of this, I often found myself performing more
            hands-on technical work such as writing automation scripts for
            repetitive tasks, SQL queries to analyze and modify data, and
            developing small feature changes.
          </p>
          <p>
            All this has led me to transitioning fully to becoming a web
            developer. Additionally, thanks to my background, I have a unique
            perspective that allows me to better understand business problems,
            and provide more effective solutions that provide immediate business
            value.
          </p>
        </div>
        <img className={classes.headshot} src={headshot} />
      </div>
    </div>
  );
};

export default AboutMe;
