import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from '@emotion/styled';

const A = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  width: 73px;
  height: 27px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.gray};
  cursor: pointer;
  &:active{
    color: ${(props) => props.theme.generalRed};
  }
`;

const CustomLink = ({ child, to }) => {
  const match = useMatch(to);

  return (
    <A
      to={to}
      style={{
        color: match ? '#FF5D4F' : '#000000',
      }}
    >
      {child}
    </A>
  );
};

export default CustomLink;
