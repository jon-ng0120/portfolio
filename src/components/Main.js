import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  /* width: 90%;
  margin: auto;
  */
  @media (min-width: 1200px) {
    /* background: blue; */
    /* max-width: 70rem; */
  }
`;

const Main = (props) => {
  return <Div>{props.children}</Div>;
};

export default Main;
