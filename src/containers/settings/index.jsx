import React from 'react';
import styled from '@emotion/styled';
import AvatarSVG from '../../components/settingsComponents/avatarSvg';
import ChangeAvatarButton from '../../components/settingsComponents/changeAvatarButton';
import Username from '../../components/authorizationComponents/username';
import Birhdate from '../../components/authorizationComponents/birthdate';
import Email from '../../components/authorizationComponents/email';
import Password from '../../components/authorizationComponents/password';
import NewPassword from '../../components/settingsComponents/newPassvord';
import SaveButton from '../../components/settingsComponents/saveButton';

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

const Settings = () => (
  <SettingsSection>
    <H3>Settings</H3>
    <AvatarSVG />
    <ChangeAvatarButton />
    <Username />
    <Birhdate />
    <Email />
    <Password />
    <NewPassword />
    <SaveButton />
  </SettingsSection>
);

export default Settings;
