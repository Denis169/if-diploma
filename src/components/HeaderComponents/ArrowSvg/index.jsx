import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { toggleMenuActionCreator } from '../../../actionCreators';

const Icon = styled.svg`
  display: block;
  width: 16px;
  height: 10px;
  cursor: pointer;
  margin: auto;
  transform: rotate(${(props) => props.rotation});
  transition: 0.5s;
`;

const ArrowSvg = () => {
  const dispatch = useDispatch();
  const toggleSettingsFlag = useSelector(createSelector((state) => state.settings.toggleMenu, (data) => data));

  const toggleSettingsMenu = () => {
    toggleSettingsFlag ? dispatch(toggleMenuActionCreator(false)) : dispatch(toggleMenuActionCreator(true));
  };

  return (
    <Icon onClick={toggleSettingsMenu} rotation={toggleSettingsFlag ? '180deg' : '0deg'}>
      <svg viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.12 0L8 6.10667L1.88 0L0 1.88L8 9.88L16 1.88L14.12 0Z" fill="#616161" />
      </svg>
    </Icon>
  );
};

export default ArrowSvg;
