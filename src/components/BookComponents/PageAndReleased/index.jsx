import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.secondaryGrey};
  padding-top: 24px;
`;

const PageAndReleased = ({ pages, released }) => (
  <P>
    {pages}
    {' '}
    pages, released in
    {' '}
    {released}
  </P>
);

export default PageAndReleased;
