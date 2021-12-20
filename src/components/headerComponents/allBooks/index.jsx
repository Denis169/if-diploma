import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
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
`;

const AllBooks = () => (
  <>
    <P>All books</P>
  </>
);

export default AllBooks;
