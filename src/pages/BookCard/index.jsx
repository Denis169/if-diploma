import React from 'react';
import styled from '@emotion/styled';
import ImageBook from '../../components/BookComponents/ImageBook';
import AvailableButton from '../../components/BookComponents/AvailableButton';
import BookHolder from '../../components/BookComponents/BookHolder';
import NameBook from '../../components/BookComponents/NameBook';
import AuthorBook from '../../components/BookComponents/AuthorBook';
import BookRate from '../../components/BookComponents/BookRate';
import TakenButton from '../../components/BookComponents/TakenButton';
import SmallButton from '../../components/BookComponents/SmallButton';

const Section = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: flex-start;
  min-width: 255px;
  max-width: 256px;
  width: 25%;
  min-height: 185px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 122px;
  margin-left: 12px;
`;

const BookCard = ({ image, author, name, rate, taken, bookHolder, button, id }) => (
  <Section>
    <ImageBook image={image} id={id} />
    <Information>
      {taken && <AvailableButton />}
      {!taken && <TakenButton />}
      {bookHolder && <BookHolder name={bookHolder} />}
      <NameBook name={name} />
      <AuthorBook author={author} />
      <BookRate rate={rate} />
      <SmallButton value={button ? 'Order' : 'Return'} id={id} />
    </Information>
  </Section>
);

export default BookCard;
