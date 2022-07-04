import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: #fff;
  color: #203647;
`;

const AboutMe = () => {
  return (
    <Div>
      <p>
        Hi, my name is Jonathan, or Jon for short, and I'm a front-end developer
        based in Vancouver, Canada. My background is in business analysis and
        product management, but I've always been actively interested in web
        techologies.
      </p>
      <p>
        As a business analysis and product manager, I was never satisfied with
        just learning the what and why of a customer's problem, but I also
        wanted to create the solutions to address these problems. This led me to
        transitioning over to development. Thanks to my background, I'm able to
        understand the business problem at large and create solutions that
        addresses issues and provide value.
      </p>
    </Div>
  );
};

export default AboutMe;
