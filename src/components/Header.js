import { useState, useEffect } from 'react';
import classes from './Header.module.scss';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const showNavbarHandler = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowNavbar(false);
      } else {
        // if scroll up show the navbar
        setShowNavbar(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', showNavbarHandler);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', showNavbarHandler);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`${classes.header} ${
        showNavbar ? classes.active : classes.hidden
      }`}
    >
      <nav>
        <HashLink smooth to="/#about-me">
          About
        </HashLink>
        <HashLink smooth to="/#projects">
          Projects
        </HashLink>

        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </nav>
    </div>
  );
};

export default Header;
