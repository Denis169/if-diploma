import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  width: 132px;
  height: 22px;
  background-color: ${(props) => props.theme.secondaryGrey};
  border-radius: 8px;
  margin: 16px auto 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.white};;
`;

const ChangeAvatarButton = () => (
  <Button>Change photo</Button>
);

export default ChangeAvatarButton;
