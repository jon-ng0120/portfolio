import React from 'react';
import classes from './Skills.module.scss';
import htmlIcon from '../assets/html5.png';
import cssIcon from '../assets/css3.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import sassIcon from '../assets/sass.png';
import nodeJsIcon from '../assets/nodejs.png';
import expressIcon from '../assets/express.png';
import mongoDbIcon from '../assets/mongodb.png';
import firebaseIcon from '../assets/firebase.png';
import gitIcon from '../assets/git.png';

const Skills = () => {
  return (
    <div className={classes.skills}>
      <div className={classes.header}>
        <h1>Skills</h1>
      </div>

      <div className={classes.skillsContainer}>
        <img src={htmlIcon} alt="HTML5" />
        <img src={cssIcon} alt="CSS3" />
        <img src={jsIcon} alt="JavaScript" />
        <img src={reactIcon} alt="React" />
        <img src={sassIcon} alt="Sass" />
        <img src={nodeJsIcon} alt="Node.js" />
        <img src={expressIcon} alt="Express" />
        <img src={mongoDbIcon} alt="MongoDB" />
        <img src={firebaseIcon} alt="Firebase" />
        <img src={gitIcon} alt="Git" />
      </div>
    </div>
  );
};

export default Skills;
