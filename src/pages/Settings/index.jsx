import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import styled from '@emotion/styled';

import AvatarSVG from '../../components/SettingsComponents/AvatarSvg';
import ChangeAvatarButton from '../../components/SettingsComponents/ChangeAvatarButton';
import Username from '../../components/AuthorizationComponents/UserName';
import Email from '../../components/AuthorizationComponents/Email';
import Password from '../../components/AuthorizationComponents/Password';
import NewPassword from '../../components/SettingsComponents/NewPassvord';
import SaveButton from '../../components/SettingsComponents/SaveButton';
import Birthdate from '../../components/AuthorizationComponents/Birthdate';
import SuccessfulChange from '../../components/SettingsComponents/SuccessfulСhange';

import {
  currentUserActionCreator,
  successfulChangeActionCreator,
  usersArrayActionCreator,
} from '../../actionCreators';

const SettingsSection = styled.div`
  background-color: ${(props) => props.theme.white};
  max-width: 394px;
  display: block;
  margin: 80px auto 40px;
  padding: 26px 37px 21px;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: ${(props) => props.theme.black};
  display: block;
  text-align: center;
`;

const Settings = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [newBirthdate, setNewBirthdate] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const usersArray = useSelector(createSelector((state) => state.authorisation.usersArray, (data) => data));
  const currentUser = useSelector(createSelector((state) => state.authorisation.currentUser, (data) => data));
  const successfulChange = useSelector(createSelector((state) => state.settings.successfulChange, (data) => data));

  const changeUserData = () => {
    if (currentUser.password === password) {
      dispatch(usersArrayActionCreator(usersArray.map((item) => (item.name === currentUser.name
        ? ({
          ...item,
          name: userName,
          birthdate: newBirthdate,
          email: newEmail,
          password: newPassword,
        })
        : item))));
    }
    dispatch(currentUserActionCreator({
      ...currentUser,
      name: userName,
      birthdate: newBirthdate,
      email: newEmail,
      password: newPassword,
    }));
    dispatch(successfulChangeActionCreator(true));
  };

  const changeUsername = (event) => {
    setUserName(event.target.value);
    successfulChange && dispatch(successfulChangeActionCreator(false));
  };

  const changeBirthdate = (event) => {
    setNewBirthdate(event.target.value);
    successfulChange && dispatch(successfulChangeActionCreator(false));
  };

  const changeEmail = (event) => {
    setNewEmail(event.target.value);
    successfulChange && dispatch(successfulChangeActionCreator(false));
  };

  const changePassword = (event) => {
    setNewPassword(event.target.value);
    successfulChange && dispatch(successfulChangeActionCreator(false));
  };

  return (
    <SettingsSection>
      <H3>Settings</H3>
      <AvatarSVG />
      <ChangeAvatarButton />
      <Username value={userName} onChange={changeUsername} />
      <Birthdate value={newBirthdate} onChange={changeBirthdate} />
      <Email value={newEmail} onChange={changeEmail} />
      <Password value={password} onChange={(event) => setPassword(event.target.value)} />
      <NewPassword value={newPassword} onChange={changePassword} />
      <SaveButton changeUserData={changeUserData} />
      {successfulChange && <SuccessfulChange />}
    </SettingsSection>
  );
};

export default Settings;
