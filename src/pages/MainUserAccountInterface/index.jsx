import React from 'react';
import styled from '@emotion/styled';

import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Container } from '../../assets/style.varible';

import Footer from '../Footer';

const Background = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainUserAccountInterface = () => (
  <Background>
    <Container>
      <Header />
      <Outlet />
    </Container>
    <Footer />
  </Background>
);

export default MainUserAccountInterface;
