import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import Username from '../../components/authorizationComponents/username';
import Birthdate from '../../components/authorizationComponents/birthdate';
import Email from '../../components/authorizationComponents/email';
import Password from '../../components/authorizationComponents/password';
import {
  showRegistrationActionCreator,
  userNameActionCreator,
  userBirthdateActionCreator,
  userEmailActionCreator,
  userPasswordActionCreator, usersArrayActionCreator,
} from '../../actionCreators';

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

const Button = styled.input`
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

const Registration = () => {
  const dispatch = useDispatch();
  const userName = useSelector(createSelector((state) => state.authorisation.userName, (data) => data));
  const userBirthdate = useSelector(createSelector((state) => state.authorisation.userBirthdate, (data) => data));
  const userEmail = useSelector(createSelector((state) => state.authorisation.userEmail, (data) => data));
  const userPassword = useSelector(createSelector((state) => state.authorisation.userPassword, (data) => data));

  const addUser = (event) => {
    event.preventDefault();

    console.log(Object.fromEntries(new FormData(event.target).entries()));

    dispatch(usersArrayActionCreator([{
      name: userName,
      birthdate: userBirthdate,
      email: userEmail,
      password: userPassword,
    }]));
    dispatch(showRegistrationActionCreator(false));
  };

  return (
    <RegistrationSection>
      <Form onSubmit={addUser}>
        <Close onClick={() => dispatch(showRegistrationActionCreator(false))} />
        <H2>Welcome to Fox Library</H2>
        <Username value={userName} onChange={(event) => dispatch(userNameActionCreator(event.target.value))} />
        <Birthdate value={userBirthdate} onChange={(event) => dispatch(userBirthdateActionCreator(event.target.value))} />
        <Email value={userEmail} onChange={(event) => dispatch(userEmailActionCreator(event.target.value))} />
        <Password value={userPassword} onChange={(event) => dispatch(userPasswordActionCreator(event.target.value))} />
        <Button type="submit" value="Sign up" />
      </Form>
    </RegistrationSection>
  );
};

export default Registration;
