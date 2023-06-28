import React from 'react';
import classes from './Header.module.scss';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className={classes.header}>
      <div>Jonathan Ng</div>
      <nav>
        <HashLink smooth to="/#about-me">
          About
        </HashLink>
        <a>Work</a>
        <a>Contact</a>
      </nav>
    </div>
  );
};

export default Header;
