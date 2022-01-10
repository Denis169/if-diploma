import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  flex-basis: 17%;
  margin-top: 8px;
`;

const NameAndAuthor = ({ name, author }) => {
  const newName = name.indexOf(':') > -1 ? name.slice(0, name.indexOf(':')) : name;

  return (
    <P>
      {newName}
      {' '}
      by
      {' '}
      {author}
    </P>
  );
};

export default NameAndAuthor;
