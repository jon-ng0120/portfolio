import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  background: #12232e;
`;

const Nav = styled.div`
  padding: 1rem;

  & a {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;

    &:hover {
      color: #4da8da;
      border-bottom: 1px solid white;
    }
  }
`;

const Header = () => {
  return (
    <Div>
      <div>Jonathan Ng</div>
      <Nav>
        <HashLink smooth to="/#about-me">
          About
        </HashLink>
        <a>Work</a>
        <a>Contact</a>
      </Nav>
    </Div>
  );
};

export default Header;
