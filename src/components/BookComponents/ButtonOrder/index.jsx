import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  width: 100%;
  height: 32px;
  background-color: ${(props) => props.theme.secondaryGrey};
  border-radius: 8px;
  margin-top: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.white};
`;

const ButtonOrder = () => (
  <Button>Order</Button>
);

export default ButtonOrder;
