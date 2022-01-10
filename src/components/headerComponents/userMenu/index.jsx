import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { NavLink, useNavigate } from 'react-router-dom';

import useAuth from '../../../hook/useAuth';

import { authorizationFlagActionCreator, toggleMenuActionCreator } from '../../../actionCreators';

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
  z-index: 2;
`;

const Name = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.black};
  margin-bottom: 26px;
`;

const Settings = styled(NavLink)`
  text-decoration: none;
  display: block;
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
  cursor: pointer;
  :active{
    opacity: 0.7;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`;

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(createSelector((state) => state.authorisation.currentUser, (data) => data));
  const { signOut } = useAuth();

  const logOut = () => {
    dispatch(authorizationFlagActionCreator(false));
    dispatch(toggleMenuActionCreator(false));
    signOut(null, () => navigate('/authorization', { replace: true }));
  };

  const setActive = ({ isActive }) => ({ color: isActive ? '#FF5D4F' : '' });

  return (
    <Section>
      <Name>{currentUser.name}</Name>
      <Settings to="/settings" style={setActive}>Settings</Settings>
      <MyOrders>My orders</MyOrders>
      <Button onClick={logOut}>Log out</Button>
    </Section>
  );
};

export default UserMenu;
