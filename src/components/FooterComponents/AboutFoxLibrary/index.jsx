import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 185px;
  margin-right: 5vw;
  @media (max-width: 900px) {
    align-items: center;
    padding: 10px 0;
  }
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px;
  
`;

const Reference = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.black};
  cursor: pointer;
  margin-bottom: 8px;
`;

const AboutFoxLibrary = () => (
  <Section>
    <H3>About Fox Library</H3>
    <Reference>About us</Reference>
    <Reference>Privacy&Security</Reference>
    <Reference>Contact us</Reference>
  </Section>
);

export default AboutFoxLibrary;
