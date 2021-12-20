import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  white-space: nowrap;
  width: 94px;
  height: 27px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => props.theme.gray};
  cursor: pointer;
  margin-left: 32px;
`;

const YourOrders = () => (
  <>
    <P>Your orders</P>
  </>
);

export default YourOrders;
