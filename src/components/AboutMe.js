import React from 'react';
import styled from 'styled-components';
import headshot from '../assets/headshot.jpg';

const Div = styled.div`
  display: flex;
  color: #203647;
  width: 90%;
  margin: auto;
  gap: 3rem;
  line-height: 2;
  align-items: center;

  & h2 {
    font-weight: 800;
    font-size: 2rem;
    text-decoration: underline;
    text-decoration-color: #e55b1a;
  }

  & p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1200px) {
    max-width: 70rem;
  }
`;

const Headshot = styled.img`
  width: 32rem;
  height: 22rem;
  border-radius: 5px;
`;

const AboutMe = () => {
  return (
    <Div id="about-me">
      <div>
        <h2>Who am I?</h2>
        <p>
          Hi, my name is Jonathan, or Jon for short, and I'm a front-end
          developer based in Vancouver, Canada. My background is in business
          analysis and product management, but I've always been actively
          interested in web techologies.
        </p>
        <p>
          As a business analysis and product manager, I was never satisfied with
          just learning the what and why of a customer's problem, but I also
          wanted to create the solutions to address these problems. This led me
          to transitioning over to development. Thanks to my background, I'm
          able to understand the business problem and effectively provide a
          solution.
        </p>
      </div>
      <Headshot src={headshot} />
    </Div>
  );
};

export default AboutMe;
