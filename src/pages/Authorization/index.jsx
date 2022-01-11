import React from 'react';
import styled from '@emotion/styled';

import { Outlet } from 'react-router-dom';
import { Container } from '../../assets/style.varible';
import Header from '../Header';
import LetSStart from '../../components/AuthorizationComponents/LetSStart';
import PictureSVG from '../../components/AuthorizationComponents/PictureSvg';

const AythorizationSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BuildYourLibrary = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondaryBlue};
  display: flex;
  margin-top: 65px;
  @media (max-width: 900px) {
    margin-top: 10px;
    flex-direction: column-reverse;
  }
`;

const Authorization = () => (
  <AythorizationSection>
    <Outlet />
    <Container>
      <Header />
      <BuildYourLibrary>
        <LetSStart />
        <PictureSVG />
      </BuildYourLibrary>
    </Container>
  </AythorizationSection>
);

export default Authorization;
