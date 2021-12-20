import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { Container } from '../../constants/style.varible';
import Header from '../header';
import LetSStart from "../../components/authorizationComponents/let'sStart";
import PictureSVG from '../../components/authorizationComponents/pictureSvg';
import Registration from '../registration';
import LogIn from '../logIn';

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

const Authorization = () => {
  const showRegistration = useSelector(createSelector((state) => state.authorisation.showRegistration, (data) => data));

  return (
    <AythorizationSection>
      {false && <LogIn />}
      {showRegistration && <Registration />}
      <Container>
        <Header />
        <BuildYourLibrary>
          <LetSStart />
          <PictureSVG />
        </BuildYourLibrary>
      </Container>
    </AythorizationSection>
  );
};

export default Authorization;
