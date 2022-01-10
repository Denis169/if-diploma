import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import BookCardYourOrders from '../../../pages/BookCardYourOrders';

const Section = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.white};
  padding: 26px 32px;
  border-radius: 8px;
  margin-top: 80px;
  min-height: 401px;
`;

const H3 = styled.h3`
  position: absolute;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;

const P = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: ${(props) => props.theme.secondaryGrey};
  text-align: center;
`;

const WaitingFor = () => {
  const [areThereAnyBooks, setAreThereAnyBooks] = useState(true);
  const dataAllBooks = useSelector(createSelector((state) => state.allBooks.dataAllBooks, (data) => data));
  const currentUser = useSelector(createSelector((state) => state.authorisation.currentUser, (data) => data));
  const usersArray = useSelector(createSelector((state) => state.authorisation.usersArray, (data) => data));

  const bookInspection = (book) => {
    const usersArrayWithBook = usersArray.filter((item) => item.books.findIndex((one) => one.id === book.id) !== -1);
    let userBook = {};
    if (currentUser.books.findIndex((item) => item.id === book.id) > -1) {
      userBook = { ...currentUser.books.find((item) => item.id === book.id) };
    }
    if (usersArrayWithBook.findIndex((item) => item.books.findIndex((one) => one.id === book.id && one.time < userBook.time) !== -1) !== -1) {
      if (areThereAnyBooks) setAreThereAnyBooks(false);
      return true;
    }
    return false;
  };

  return (
    <Section>
      <H3>Waiting for</H3>
      {dataAllBooks.map((book) => (
        currentUser.books.findIndex((item) => item.id === book.id) > -1
          && bookInspection(book)
          && (
            <BookCardYourOrders
              rate={book.rate}
              image={book.imageUrl}
              author={book.author}
              name={book.name}
              key={book.id}
              id={book.id}
              value="Check status"
            />
          )
      ))}
      {areThereAnyBooks && <P>Oops! You are not waiting for any book</P>}
    </Section>
  );
};

export default WaitingFor;
