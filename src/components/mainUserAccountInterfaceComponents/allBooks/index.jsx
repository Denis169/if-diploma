import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import BookCard from '../../../containers/BookCard';
import { usersArrayActionCreator } from '../../../actionCreators';

const Section = styled.div`
  overflow: hidden;
  height: ${(props) => props.height}px;
  transition-duration: 1s;
  background-color: ${(props) => props.theme.white};
  padding: 26px 32px;
  border-radius: 8px;
  margin-top: 40px;
  position: relative;
`;

const Books = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;

const ButtonSection = styled.div`
  width: 100%;
  height: 100px;
  position: sticky;
  bottom:-26px;
  background-color: ${(props) => props.theme.white};
`;

const Button = styled.button`
  display: block;
  width: 185px;
  height: 48px;
  background-color: ${(props) => props.theme.generalRed};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${(props) => props.theme.white};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  :active{
    opacity: 0.7;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`;

const AllBooks = () => {
  const dispatch = useDispatch();
  const dataAllBooks = useSelector(createSelector((state) => state.allBooks.dataAllBooks, (data) => data));
  const usersArray = useSelector(createSelector((state) => state.authorisation.usersArray, (data) => data));
  const [heightSection, setHeightSection] = useState(390);
  const currentUser = useSelector(createSelector((state) => state.authorisation.currentUser, (data) => data));

  // const randomBook = () => dataAllBooks.map((item) => ({
  //   ...item,
  //   users: usersArray.reduce((accum, user) => {
  //     if (Math.random() < 0.5) {
  //       accum.push({
  //         name: user.name,
  //         time: new Date(),
  //       });
  //     }
  //     return accum;
  //   }, []),
  // }));

  useEffect(() => {
    dispatch(usersArrayActionCreator(usersArray.map((user) => (user.name === currentUser.name ? currentUser : user))));
  }, [currentUser]);

  const showMore = () => {
    if (dataAllBooks % 4 === 0 && heightSection < ((dataAllBooks.length / 4 - 1) * 251 + 390)) {
      setHeightSection(heightSection + 251);
    } else if (dataAllBooks % 4 !== 0 && heightSection < ((Math.trunc(dataAllBooks.length / 4) - 1) * 251 + 390)) {
      setHeightSection(heightSection + 251);
    }
  };

  return (
    <Section height={heightSection}>
      <H3>All books</H3>
      <Books>
        {dataAllBooks.map((book) => (
          <BookCard
            button={currentUser.books.findIndex((item) => item.id === book.id) !== -1}
            bookHolder="ddd"
            taken
            rate={book.rate}
            image={book.imageUrl}
            author={book.author}
            name={book.name}
            key={book.id}
            id={book.id}
          />
        ))}
      </Books>
      <ButtonSection>
        <Button onClick={showMore}>Show more</Button>
      </ButtonSection>
    </Section>
  );
};

export default AllBooks;
