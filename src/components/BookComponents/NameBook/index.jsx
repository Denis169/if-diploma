import React from 'react';
import styled from '@emotion/styled';

const H3 = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => props.theme.black};
  min-height: 38px;
`;

const NameBook = ({ name }) => {
  const newName = name.indexOf(':') > -1 ? name.slice(0, name.indexOf(':')) : name;

  return (
    <H3>{newName}</H3>
  );
};

export default NameBook;
