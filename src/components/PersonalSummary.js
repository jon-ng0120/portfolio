import React from 'react';
import styled from 'styled-components';

const ParentDiv = styled.div`
  margin-bottom: 15rem;
  /* width: 100vw; */
  height: 100vh;
  background: #12232e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* line-height: 2; */
  text-align: center;

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background: inherit;
    top: 0;
    transform-origin: top right;
    transform: skewY(-4deg);
    z-index: -1;
  }
`;

const Name = styled.h2`
  font-weight: 800;
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Accent = styled.span`
  text-decoration: underline;
  text-decoration-color: #007cc7;
`;

const Title = styled.h3`
  font-weight: 600;
  color: #e55b1a;
  font-size: 2rem;
  margin: 1rem 0;
`;

const Summary = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 7rem;
  border-style: solid;
  border-color: white;
  border-width: 0 0.2rem 0.2rem 0;
  transform: rotate(45deg);
  width: 1.5rem;
  height: 1.5rem;
  animation: slidedown 2s infinite;
  cursor: pointer;

  @keyframes slidedown {
    0% {
      bottom: 7rem;
      opacity: 1;
    }
    100% {
      bottom: 6rem;
      opacity: 0;
    }
  }
`;

const PersonalSummary = () => {
  return (
    <ParentDiv>
      <Name>
        <Accent>Jon</Accent>athan Ng
      </Name>
      <Title>Front-End Developer</Title>
      <Summary>
        I specialize in understanding business needs and finding solutions
        through technology
      </Summary>
      <Arrow />
    </ParentDiv>
  );
};

export default PersonalSummary;
