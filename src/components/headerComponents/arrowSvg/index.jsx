import React from 'react';
import styled from '@emotion/styled';

const Icon = styled.svg`
  display: block;
  width: 16px;
  height: 10px;
  margin-left: 17px;
  cursor: pointer;
`;

const ArrowSvg = () => (
  <Icon>
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.12 0L8 6.10667L1.88 0L0 1.88L8 9.88L16 1.88L14.12 0Z" fill="#616161" />
    </svg>
  </Icon>
);

export default ArrowSvg;
