import React from 'react';
import styled from '@emotion/styled';

import Logo from '../../components/headerComponents/logo';
import Search from '../../components/headerComponents/search';
import LogIn from '../../components/headerComponents/logIn';
import SignUp from '../../components/headerComponents/signUp';
import AllBooks from '../../components/headerComponents/allBooks';
import YourOrders from '../../components/headerComponents/yourOrders';
import ProFile from '../../components/headerComponents/proFileSvg';
import ArrowSvg from '../../components/headerComponents/arrowSvg';
import UserMenu from '../../components/headerComponents/userMenu';

const HeaderComponent = styled.div`
  position: relative;
  display: flex;
  padding: 30px 0 0 0;
  align-items: center;
  justify-content: space-between;
`;

const LogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

const PersonalData = styled.div`
  display: flex;
  align-items: center;
  
`;

const Header = () => (
  <HeaderComponent>
    <LogoSearch>
      <Logo />
      <Search />
    </LogoSearch>
    <PersonalData>
      <LogIn />
      <SignUp />
      {false && <AllBooks />}
      {false && <YourOrders />}
      {false && <ProFile />}
      {false && <ArrowSvg />}
      {false && <UserMenu />}
    </PersonalData>
  </HeaderComponent>
);

export default Header;
