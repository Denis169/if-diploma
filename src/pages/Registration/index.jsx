import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { createSelector } from 'reselect';
import Username from '../../components/AuthorizationComponents/UserName';
import Birthdate from '../../components/AuthorizationComponents/Birthdate';
import Email from '../../components/AuthorizationComponents/Email';
import Password from '../../components/AuthorizationComponents/Password';
import {
  showLogInActionCreator,
  showRegistrationActionCreator, usersArrayActionCreator,
} from '../../actionCreators';

const RegistrationSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(181, 181, 181, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  position: absolute;
  top: 90px;
  width: 384px;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 40px 32px 40px 32px;
`;

const Close = styled(Link)`
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
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userBirthdate, setUserBirthdate] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const usersArray = useSelector(createSelector((state) => state.authorisation.usersArray, (data) => data));

  const addUser = (event) => {
    event.preventDefault();
    /* eslint-disable */
    const re = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;
    if (re.test(userEmail) && userName && userBirthdate && userPassword) {
      dispatch(usersArrayActionCreator([ ...usersArray, {
        name: userName,
        birthdate: userBirthdate,
        email: userEmail,
        password: userPassword,
        books: [],
      }]))
      dispatch(showRegistrationActionCreator(false));
      dispatch(showLogInActionCreator(true));
      navigate("/Authorization/LogIn");
    } else {
      alert('check your data');
    }
  };

  return (
    <RegistrationSection>
      <Form onSubmit={addUser}>
        <Close to="/authorization" />
        <H2>Welcome to Fox Library</H2>
        <Username value={userName} onChange={(event) => setUserName(event.target.value)} />
        <Birthdate value={userBirthdate} onChange={(event) => setUserBirthdate(event.target.value)} />
        <Email value={userEmail} onChange={(event) => setUserEmail(event.target.value)} />
        <Password value={userPassword} onChange={(event) => setUserPassword(event.target.value)} />
        <Button type="submit" value="Sign up" />
      </Form>
    </RegistrationSection>
  );
};

export default Registration;
