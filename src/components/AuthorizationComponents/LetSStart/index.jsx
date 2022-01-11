import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const H3 = styled.h3`
  font-size: 38px;
  line-height: 52px;
  @media (max-width: 900px) {
    font-size: 25px;
    line-height: 40px;
  }
`;

const P = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: ${(props) => props.theme.black};
  max-width: 314px;
  margin: 40px 0;
  @media (max-width: 900px) {
    font-size: 15px;
    line-height: 27px;
    margin: 10px 0;
  }
`;

const Button = styled(NavLink)`
  text-decoration: none;
  background-size: 25px 50px;
  background-color: ${(props) => props.theme.generalRed};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  padding: 10px 45px;
  line-height: 27px;
  color: ${(props) => props.theme.white};;
  @media (max-width: 900px) {
    padding: 2px 10px;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
  }
`;

const LetStart = styled.div`
  margin: 100px 100px 100px 80px;
  @media (max-width: 900px) {
    margin: 20px 20px 20px 10px;
  }
`;

const LetSStart = () => (
  <LetStart>
    <H3>Build your library</H3>
    <P>Over 400.000 books from fiction to the business literature</P>
    <Button to="/authorization/signUp">Let&acute;s Start</Button>
  </LetStart>
);

export default LetSStart;
