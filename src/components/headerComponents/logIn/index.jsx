import React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  width: 60px;
  height: 27px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${(props) => props.theme.gray};
  margin-left: 200px;
  cursor: pointer;
`;

const LogIn = () => (
  <>
    <P>Log in</P>
  </>
);

export default LogIn;
