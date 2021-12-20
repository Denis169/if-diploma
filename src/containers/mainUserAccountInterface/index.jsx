import React from 'react';
import styled from '@emotion/styled';

import Header from '../header';
import { Container } from '../../constants/style.varible';
import WaitingFor from '../../components/mainUserAccountInterfaceComponents/waitingFor';
import ListYourBook from '../../components/mainUserAccountInterfaceComponents/listYourBook';
import AllBooks from '../../components/mainUserAccountInterfaceComponents/allBooks';
import Settings from '../settings';

const Background = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 0 0 80px;
`;

const MainUserAccountInterface = () => (
  <Background>
    <Container>
      <Header />
      <AllBooks />
      {false && <WaitingFor />}
      {false && <ListYourBook />}
      {false && <Settings />}
    </Container>
  </Background>
);

export default MainUserAccountInterface;
