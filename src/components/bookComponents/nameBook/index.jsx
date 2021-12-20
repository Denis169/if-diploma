import React from 'react';
import styled from '@emotion/styled';

const H3 = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => props.theme.black};
  min-height: 38px;
`;

const NameBook = () => (
  <H3>Digital Gold </H3>
);

export default NameBook;
