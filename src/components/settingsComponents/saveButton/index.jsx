import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  width: 122px;
  height: 32px;
  background-color: ${(props) => props.theme.generalRed};
  border-radius: 8px;
  margin: 20px auto 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.white};;
`;

const SaveButton = () => (
  <Button>Save</Button>
);

export default SaveButton;
