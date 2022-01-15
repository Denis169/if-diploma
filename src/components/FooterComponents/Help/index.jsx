import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { usersArrayActionCreator } from '../../../actionCreators';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 185px;
  margin-right: 5vw;
  @media (max-width: 900px) {
    align-items: center;
    padding: 10px 0;
  }
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px;
`;

const Reference = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.black};
  cursor: pointer;
  margin-bottom: 8px;
`;

const Help = () => {
  const dispatch = useDispatch();
  const dataAllBooks = useSelector(createSelector((state) => state.allBooks.dataAllBooks, (data) => data));
  const usersArray = useSelector(createSelector((state) => state.authorisation.usersArray, (data) => data));

  const randomBook = () => {
    dispatch(usersArrayActionCreator(usersArray.map((item) => ({
      ...item,
      books: dataAllBooks.reduce((accum, book) => {
        if (Math.random() < 0.5) {
          accum.push({
            id: book.id,
            time: Date.now() - (Math.random() * 1000),
          });
        }
        return accum;
      }, []),
    }))));
  };

  return (
    <Section>
      <H3>Help</H3>
      <Reference onClick={randomBook}>Help center</Reference>
      <Reference>FAQs</Reference>
    </Section>
  );
};

export default Help;
