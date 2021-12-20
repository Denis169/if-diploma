import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  position: absolute;
  right: 0;
  top: 80px;
  width: 169px;
  height: 200px;
  background: ${(props) => props.theme.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 20px;
`;

const Name = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.black};
  margin-bottom: 26px;
`;

const Settings = styled.p`
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.gray};
  margin-bottom: 23px;
  &:after{
    content: '';
    position: absolute;
    display: block;
    width: 129px;
    height: 1px;
    top: 33px;
    background-color: ${(props) => props.theme.gray};
  }
`;

const MyOrders = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.gray};
  margin-bottom: 27px;
`;

const Button = styled.button`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.generalRed};
  background-color: ${(props) => props.theme.white};
  margin: 0 auto;
`;

const UserMenu = () => (
  <Section>
    <Name>jamie</Name>
    <Settings>Settings</Settings>
    <MyOrders>My orders</MyOrders>
    <Button>Log out</Button>
  </Section>
);

export default UserMenu;
