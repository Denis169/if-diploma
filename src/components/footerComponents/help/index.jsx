import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 185px;
  margin-right: 24px;
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

const Help = () => (
  <Section>
    <H3>Help</H3>
    <Reference>Help center</Reference>
    <Reference>FAQs</Reference>
  </Section>
);

export default Help;
