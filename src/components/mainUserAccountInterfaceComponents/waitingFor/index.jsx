import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 26px 32px;
  border-radius: 8px;
  margin-top: 80px;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;

const WaitingFor = () => (
  <Section>
    <H3>Waiting for</H3>
  </Section>
);

export default WaitingFor;
