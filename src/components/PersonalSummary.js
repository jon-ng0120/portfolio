import React from 'react';
import classes from './PersonalSummary.module.scss';
import { HashLink } from 'react-router-hash-link';

const PersonalSummary = () => {
  return (
    <div className={classes.personalSummary}>
      <h1 className={classes.name}>
        <span className={classes.accent}>Jon</span>athan Ng
      </h1>
      <h2 className={classes.title}>Web Developer</h2>
      <p className={classes.summary}>
        I specialize in understanding business needs and finding solutions
        through technology
      </p>
      <HashLink smooth to="/#about-me">
        <div className={classes.arrow} />
      </HashLink>
    </div>
  );
};

export default PersonalSummary;
