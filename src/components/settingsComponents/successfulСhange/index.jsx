import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  margin-top: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${(props) => props.theme.generalRed};
`;

const SuccessfulChange = () => (
  <>
    <P>Changes are saved</P>
  </>
);

export default SuccessfulChange;
