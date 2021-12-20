import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  width: 500px;
  height: 48px;
  border: 2px solid ${(props) => props.theme.generalRed};
  border-radius: 8px;
  padding-left: 16px;
  display: table-cell;
  vertical-align: center;
  font-size: 16px;
  line-height: 22px;
  &::-webkit-input-placeholder{
    color: ${(props) => props.theme.secondaryGrey};
  }
`;

const Search = () => (
  <>
    <Input placeholder="&#128269;  Search by author, title, name" />
  </>
);

export default Search;
