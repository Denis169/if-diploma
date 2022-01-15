import React from 'react';
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import Logo from '../../components/HeaderComponents/Logo';
import Search from '../../components/HeaderComponents/Search';
import ProFile from '../../components/HeaderComponents/ProFileSvg';
import ArrowSvg from '../../components/HeaderComponents/ArrowSvg';
import UserMenu from '../../components/HeaderComponents/UserMenu';
import CustomLink from '../../components/CustomLink';

const HeaderComponent = styled.div`
  position: relative;
  display: flex;
  padding: 30px 0 0 10px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    margin: 10px;
  }
`;

const LogoSearch = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const PersonalData = styled.div`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
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
        {!authorizationFlag && <CustomLink to="/authorization/log-in" child="Log in" />}
        {!authorizationFlag && <CustomLink to="/authorization/sign-up" child="Sign up" />}
        {authorizationFlag && <CustomLink to="/" child="All books" />}
        {authorizationFlag && <CustomLink to="/your-orders" child="Your orders" />}
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
