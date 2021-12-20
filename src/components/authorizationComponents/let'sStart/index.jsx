import React from 'react';
import styled from '@emotion/styled';

const H3 = styled.h3`
  font-size: 38px;
  line-height: 52px;
`;

const P = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: ${(props) => props.theme.black};
  max-width: 314px;
  margin-top: 40px;
`;

const Button = styled.button`
  width: 185px;
  height: 48px;
  background-color: ${(props) => props.theme.generalRed};
  border-radius: 8px;
  margin-top: 40px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${(props) => props.theme.white};;
`;

const LetStart = styled.div`
  margin: 100px 100px 100px 80px;
`;

const LetSStart = () => (
  <LetStart>
    <H3>Build your library</H3>
    <P>Over 400.000 books from fiction to the business literature</P>
    <Button>Let&acute;s Start</Button>
  </LetStart>
);

export default LetSStart;
