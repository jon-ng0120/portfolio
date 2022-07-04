import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const Header = () => {
  return (
    <Div>
      <div>Jonathan Ng</div>
      <nav>
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </nav>
    </Div>
  );
};

export default Header;
