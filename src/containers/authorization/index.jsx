import React from 'react';
import styled from '@emotion/styled';

import { Outlet } from 'react-router-dom';
import { Container } from '../../constants/style.varible';
import Header from '../header';
import LetSStart from "../../components/authorizationComponents/let'sStart";
import PictureSVG from '../../components/authorizationComponents/pictureSvg';

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
