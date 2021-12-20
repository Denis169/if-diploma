import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: ${(props) => props.theme.gray};
`;

const BookHolder = () => (
  <P>Bookholder: cris11</P>
);

export default BookHolder;
