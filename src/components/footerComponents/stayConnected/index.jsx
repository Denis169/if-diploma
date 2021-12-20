import React from 'react';
import styled from '@emotion/styled';
import InstagramSvg from '../instagramSvg';
import FacebookSvg from '../facebookSvg';

const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px;
  width: 185px;
`;

const ReferenceSocialNetwork = styled.p`
  display: flex;
`;

const StayConnected = () => (
  <>
    <H3>Stay connected</H3>
    <ReferenceSocialNetwork>
      <InstagramSvg />
      <FacebookSvg />
    </ReferenceSocialNetwork>
  </>
);

export default StayConnected;
