import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  border: 2px solid ${(props) => props.theme.generalBlue};
  width: 100px;
  height: 26px;
  background-color: ${(props) => props.theme.white};
  border-radius: 24px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;

const AvailableButton = () => (
  <Button>Available</Button>
);

export default AvailableButton;
