import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  width: 122px;
  color: ${(props) => props.theme.gray};
`;

const AuthorBook = ({ author }) => (
  <P>
    by
    {' '}
    {author}
  </P>
);

export default AuthorBook;
