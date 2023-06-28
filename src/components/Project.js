import React from 'react';
import classes from './Project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Project = ({
  index,
  title,
  description,
  image,
  tags,
  liveDemoLink,
  gitHubLink,
  demoVideoLink,
}) => {
  return (
    <div
      className={`${classes.project} ${
        index % 2 === 0 ? classes.evenRow : classes.oddRow
      }`}
    >
      <div className={classes.projectDetails}>
        <div>
          <h2>{title}</h2>
          <p className={classes.description}>{description}</p>
        </div>

        <ul className={classes.tags}>
          {tags.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>

        <div className={classes.actions}>
          <a href={gitHubLink} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: '#203647' }}
            />
          </a>

          <a href={demoVideoLink} target="_blank">
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              style={{ color: '#203647' }}
            />
          </a>

          <a href={liveDemoLink} target="_blank">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="xl"
              style={{ color: '#203647' }}
            />
          </a>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img src={image} className={classes.image} />
      </div>
    </div>
  );
};

export default Project;
