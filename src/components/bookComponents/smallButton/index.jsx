import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { currentUserActionCreator } from '../../../actionCreators';

const Button = styled.button`
  width: 100%;
  height: 32px;
  background-color: ${(props) => props.theme.secondaryGrey};
  border-radius: 8px;
  margin-top: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.white};
  :active{
    opacity: 0.7;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`;

const SmallButton = ({ value, id }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(createSelector((state) => state.authorisation.currentUser, (data) => data));

  const getReturnBook = () => {
    if (value === 'Order') {
      dispatch(currentUserActionCreator({ ...currentUser, books: [...currentUser.books, { id, time: Date.now() }] }));
    } else if (value === 'Return') {
      dispatch(currentUserActionCreator({ ...currentUser, books: [...currentUser.books.filter((item) => item.id !== id)] }));
    }
  };

  return (
    <Button onClick={getReturnBook}>{value}</Button>
  );
};

export default SmallButton;
