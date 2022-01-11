import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: ${(props) => props.theme.generalRed};
  padding-top: 12px;
`;

const AuthorBookDescription = ({ author }) => (
  <P>
    {author}
  </P>
);

export default AuthorBookDescription;
