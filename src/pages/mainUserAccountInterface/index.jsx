import React from 'react';
import styled from '@emotion/styled';

import { Outlet } from 'react-router-dom';
import Header from '../header';
import { Container } from '../../constants/style.varible';

import Footer from '../footer';

const Background = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 0 0 80px;
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
