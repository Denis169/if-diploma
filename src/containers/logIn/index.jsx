import React from 'react';
import styled from '@emotion/styled';

import Username from '../../components/authorizationComponents/username';
import Password from '../../components/authorizationComponents/password';

const RegistrationSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: -30px;
  background-color: rgba(181, 181, 181, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  position: relative;
  width: 384px;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 40px 32px 40px 32px;
`;

const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
  opacity: 1;
  }
  &:before,
  &:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: #333;
  }
  &:before {
  transform: rotate(45deg);
  }
  &:after {
  transform: rotate(-45deg);
  }
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: ${(props) => props.theme.black};
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  background-color: ${(props) => props.theme.generalRed};
  border-radius: 8px;
  margin-top: 40px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.white};;
`;

const LogIn = () => (
  <RegistrationSection>
    <Form>
      <Close />
      <H2>Log In to Fox Library</H2>
      <Username />
      <Password />
      <Button>Log in</Button>
    </Form>
  </RegistrationSection>
);

export default LogIn;
