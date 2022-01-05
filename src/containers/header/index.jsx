import React from 'react';
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import Logo from '../../components/headerComponents/logo';
import Search from '../../components/headerComponents/search';
import ProFile from '../../components/headerComponents/proFileSvg';
import ArrowSvg from '../../components/headerComponents/arrowSvg';
import UserMenu from '../../components/headerComponents/userMenu';
import CustomLink from '../../components/customLink';

const HeaderComponent = styled.div`
  position: relative;
  display: flex;
  padding: 30px 0 0 80px;
  align-items: center;
  justify-content: space-between;
`;

const LogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

const PersonalData = styled.div`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserAvatar = styled.div`
  display: flex;
`;

const Header = () => {
  const authorizationFlag = useSelector(createSelector((state) => state.authorisation.authorizationFlag, (data) => data));
  const toggleSettingsFlag = useSelector(createSelector((state) => state.settings.toggleMenu, (data) => data));

  return (
    <HeaderComponent>
      <LogoSearch>
        <Logo />
        {authorizationFlag && <Search />}
      </LogoSearch>
      <PersonalData width={authorizationFlag ? '25%' : '15%'}>
        {!authorizationFlag && <CustomLink to="/authorization/logIn" child="Log in" />}
        {!authorizationFlag && <CustomLink to="/authorization/signUp" child="Sign up" />}
        {authorizationFlag && <CustomLink to="/" child="All books" />}
        {authorizationFlag && <CustomLink to="/yourOrders" child="Your orders" />}
        {authorizationFlag && (
          <UserAvatar>
            <ProFile />
            <ArrowSvg />
          </UserAvatar>
        )}
        {toggleSettingsFlag && <UserMenu />}
      </PersonalData>
    </HeaderComponent>
  );
};

export default Header;
