import React from 'react';
import styled from '@emotion/styled';
import InstagramSvg from '../InstagramSvg';
import FacebookSvg from '../FacebookSvg';

const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  @media (max-width: 900px) {
    padding: 10px 0;
  }
`;

const ReferenceSocialNetwork = styled.div`
  display: flex;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const StayConnected = () => (
  <Section>
    <H3>Stay connected</H3>
    <ReferenceSocialNetwork>
      <InstagramSvg />
      <FacebookSvg />
    </ReferenceSocialNetwork>
  </Section>
);

export default StayConnected;
