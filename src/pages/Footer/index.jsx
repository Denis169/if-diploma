import React from 'react';
import styled from '@emotion/styled';
import AboutFoxLibrary from '../../components/FooterComponents/AboutFoxLibrary';
import Help from '../../components/FooterComponents/Help';
import MyAccount from '../../components/FooterComponents/MyAccount';
import StayConnected from '../../components/FooterComponents/StayConnected';

const Background = styled.div`
  background-color: ${(props) => props.theme.secondaryBlue};
`;

const FooterContainer = styled.div`
  max-width: 1232px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 1vw;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 20px 1vw;
    justify-content: space-around;
  }
`;

const Reference = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: space-around;
  }
`;

const SocialNetworks = styled.div`
  @media (max-width: 900px) {
    align-items: center;
  }
`;

const Footer = () => (
  <Background>
    <FooterContainer>
      <Reference>
        <AboutFoxLibrary />
        <Help />
        <MyAccount />
      </Reference>
      <SocialNetworks>
        <StayConnected />
      </SocialNetworks>
    </FooterContainer>
  </Background>
);

export default Footer;
