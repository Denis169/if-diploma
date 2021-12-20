import React from 'react';
import styled from '@emotion/styled';
import AboutFoxLibrary from '../../components/footerComponents/aboutFoxLibrary';
import Help from '../../components/footerComponents/help';
import MyAccount from '../../components/footerComponents/myAccount';
import StayConnected from '../../components/footerComponents/stayConnected';

const Background = styled.div`
  background-color: ${(props) => props.theme.secondaryBlue};
`;

const FooterContainer = styled.div`
  max-width: 1232px;
  margin: 0 auto;
  display: flex;
  padding: 40px 0;
  justify-content: space-between;
`;

const Reference = styled.div`
  display: flex;
`;

const SocialNetworks = styled.div`
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
