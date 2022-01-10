import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Link, useNavigate } from 'react-router-dom';

import Username from '../../components/authorizationComponents/username';
import Password from '../../components/authorizationComponents/password';
import CheckLogAndPas from '../../components/headerComponents/checkLogAndPas';
import useAuth from '../../hook/useAuth';

import {
  authorizationFlagActionCreator,
  checkLogAndPassActionCreator,
  showLogInActionCreator,
  currentUserActionCreator, requestBookActionCreator,
} from '../../actionCreators';
import urlAllBooks from '../../constants/urlAllBooks';

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

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const usersArray = useSelector(createSelector((state) => state.authorisation.usersArray, (data) => data));
  const checkLogAndPass = useSelector(createSelector((state) => state.authorisation.checkLogAndPass, (data) => data));
  const { signIn } = useAuth();

  const verification = (event) => {
    event.preventDefault();
    try {
      const user = usersArray.find((item) => item.name === userName);
      dispatch(currentUserActionCreator(user));
      if (user.password === userPassword) {
        signIn(user, () => navigate('/', { replace: true }));
        dispatch(showLogInActionCreator(false));
        dispatch(authorizationFlagActionCreator(true));
        dispatch(requestBookActionCreator(urlAllBooks));
      } else {
        dispatch(checkLogAndPassActionCreator(true));
      }
    } catch (error) {
      dispatch(checkLogAndPassActionCreator(true));
    }
  };

  const changeUsername = (event) => {
    setUserName(event.target.value);
    dispatch(checkLogAndPassActionCreator(false));
  };

  const changePassword = (event) => {
    setUserPassword(event.target.value);
    dispatch(checkLogAndPassActionCreator(false));
  };

  return (
    <RegistrationSection>
      <Form onSubmit={verification}>
        <Close to="/authorization" />
        <H2>Log In to Fox Library</H2>
        <Username value={userName} onChange={changeUsername} />
        <Password value={userPassword} onChange={changePassword} />
        {checkLogAndPass && <CheckLogAndPas />}
        <Button type="submit" value="Log in" />
      </Form>
    </RegistrationSection>
  );
};

export default LogIn;
