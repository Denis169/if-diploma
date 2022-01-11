import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useParams } from 'react-router-dom';
import ImageBook from '../../BookComponents/ImageBook';
import BookRate from '../../BookComponents/BookRate';
import AuthorBookDescription from '../../BookComponents/AuthorBookDescription';
import PageAndReleased from '../../BookComponents/PageAndReleased';
import SmallButton from '../../BookComponents/SmallButton';

const Section = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.white};
  padding: 32px;
  border-radius: 8px;
  margin-top: 40px;
  min-height: 401px;
  @media (max-width: 600px ) {
    flex-direction: column;
  }
`;

const SectionImage = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  min-height: 401px;
`;

const BookDescription = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  padding: 0 32px;
  border-radius: 8px;
  min-height: 401px;
  @media (max-width: 600px ) {
    padding: 32px 0 0;
  }
`;

const H3 = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: ${(props) => props.theme.black};
  padding-top: 60px;
`;

const NameBook = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  color: ${(props) => props.theme.black};
  padding-top: 24px;
`;

const AboutBook = styled.div`
  overflow: hidden;
  height: ${(props) => props.height}px;
  & p{
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.theme.black};
    padding-top: 16px;
  }
`;

const Button = styled.button`
  margin-top: 16px;
  display: block;
  width: 122px;
  height: 32px;
  background-color: ${(props) => props.theme.secondaryGrey};
  border-radius: 8px;
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

const BookPreview = () => {
  const params = useParams();
  const ref = useRef();
  const dataAllBooks = useSelector(createSelector((state) => state.allBooks.dataAllBooks, (data) => data));
  const currentUser = useSelector(createSelector((state) => state.authorisation.currentUser, (data) => data));
  const [height, setHeight] = useState();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (ref.current.children.length > 3) {
      setHeight(ref.current.childNodes[0].clientHeight
        + ref.current.childNodes[1].clientHeight
        + ref.current.childNodes[2].clientHeight);
      setShowButton(true);
    } else {
      setHeight(ref.current.clientHeight);
    }
  }, []);

  const findBook = (bookID) => dataAllBooks.find((item) => item.id === `${bookID}`);

  const checkBookFromUser = () => currentUser.books.findIndex((item) => item.id === params.bookId) === -1;

  const heightAboutBook = () => {
    setHeight(ref.current.children.clientHeight);
    setShowButton(false);
  };

  return (
    <Section>
      <SectionImage>
        <ImageBook image={findBook(params.bookId).imageUrl} id={params.bookId} />
      </SectionImage>
      <BookDescription>
        <BookRate rate={findBook(params.bookId).rate} />
        <NameBook>{findBook(params.bookId).name}</NameBook>
        <AuthorBookDescription author={findBook(params.bookId).author} />
        <PageAndReleased pages={findBook(params.bookId).length} released={findBook(params.bookId).released} />
        <SmallButton value={checkBookFromUser() ? 'Order' : 'Return'} id={params.bookId} />
        <H3 onClick={heightAboutBook}>About book</H3>
        <AboutBook height={height} ref={ref} dangerouslySetInnerHTML={{ __html: findBook(params.bookId).description }} />
        {showButton && <Button onClick={heightAboutBook}>Show more</Button>}
      </BookDescription>
    </Section>
  );
};

export default BookPreview;
