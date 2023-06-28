import React from 'react';
import classes from './Projects.module.scss';
import Project from './Project';

import homeOS01 from '../assets/HomeOS-01.png';
import chattr01 from '../assets/chattr-01.png';
import aquagreen01 from '../assets/aquagreen-01.png';

const projects = [
  {
    title: 'HomeOS',
    description: `A feature-rich homepage dashboard application. Has basic features such as being able to view your current location's date, time, and weather, but also additional features such as retrieving trending news from around the world using the NewsAPI. Using Google's OAuth 2.0, users are also able to retrieve and view upcoming Google Calender events. Users can also have  customizable and saved bookmarked websites that are stored in MongoDB and reloaded to the frontend on each visit.`,
    image: homeOS01,
    tags: [
      'React',
      'SCSS',
      'Node.js',
      'Express',
      'MongoDB',
      'OAuth 2.0',
      'API',
    ],
    liveDemoLink: 'https://jon-ng0120.github.io/startpage/',
    gitHubLink: 'https://github.com/jon-ng0120/startpage',
    demoVideoLink: 'https://www.youtube.com/watch?v=N5rTqg1EPRs',
  },
  {
    title: 'Chattr',
    description: `Chattr is a mobile responsive, web based multi-room chat application that is built using React and Firebase. With Firebase as the backend, users can authenticate and login to Chattr using their Google Accounts. Additionally, using Firebase's Cloud Firestore service, users are able to have multiple conversations in real-time in different chat rooms with different users.`,
    image: chattr01,
    tags: [
      'React',
      'CSS',
      'Firebase',
      'Styled Components',
      'React Context API',
    ],
    liveDemoLink: 'https://chattr-7f98c.web.app/',
    gitHubLink: 'https://github.com/jon-ng0120/chattr',
    demoVideoLink: 'https://www.youtube.com/watch?v=N5rTqg1EPRs',
  },
  {
    title: 'AquaGreen',
    description: `A responsive, mobile first designed ecommerce website for the selling of aquatic plants for aquarium aquascaping. Created as a way to practice using styled components, React Router, and various React hooks such as useEffect, useReducer and useContext.`,
    image: aquagreen01,
    tags: ['React', 'CSS', 'Styled Components', 'React Router', 'React Hooks'],
    liveDemoLink: 'https://jon-ng0120.github.io/aquagreen/',
    gitHubLink: 'https://github.com/jon-ng0120/aquagreen',
    demoVideoLink: 'https://www.youtube.com/watch?v=N5rTqg1EPRs',
  },
];

const Projects = () => {
  return (
    <div className={classes.projects}>
      <div className={classes.projectsContainer}>
        <h1>03. Featured Projects</h1>
        <div className={classes.projects}>
          {projects.map((project, index) => {
            return (
              <Project
                key={project.title}
                index={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveDemoLink={project.liveDemoLink}
                gitHubLink={project.gitHubLink}
                demoVideoLink={project.demoVideoLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
