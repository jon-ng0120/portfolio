import React from 'react';
import classes from './PersonalSummary.module.scss';
import { HashLink } from 'react-router-hash-link';

const PersonalSummary = () => {
  return (
    <div className={classes.personalSummary}>
      <h2 className={classes.name}>
        <span className={classes.accent}>Jon</span>athan Ng
      </h2>
      <h3 className={classes.title}>Web Developer</h3>
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
