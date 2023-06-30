import React from 'react';
import classes from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.contactContainer}>
        <div className={classes.header}>
          <h1>CONTACT</h1>
        </div>
        <h2>Let's get in touch!</h2>
        <p>I'm always open to discuss any opportunities to work together</p>
        <p>
          Please feel free to reach out to me using any of the platforms below
        </p>
        <div className={classes.contactPlatforms}>
          <a href="mailto:jonathanng15@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              style={{ color: '#e6e6e6' }}
            />
            <p>jonathanng15@gmail.com</p>
          </a>

          <a href="https://github.com/jon-ng0120" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: '#e6e6e6' }}
            />
            <p>jon-ng0120</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jonathan-ng-a6a083168/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: '#ededed' }}
            />
            <p>Jonathan Ng</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
