import React from 'react';
import styled from '@emotion/styled';
import ImageBook from '../../components/bookComponents/imageBook';
import AvailableButton from '../../components/bookComponents/availableButton';
import BookHolder from '../../components/bookComponents/bookHolder';
import NameBook from '../../components/bookComponents/nameBook';
import AuthorBook from '../../components/bookComponents/authorBook';
import BookRate from '../../components/bookComponents/bookRate';
import TakenButton from '../../components/bookComponents/takenButton';
import SmallButton from '../../components/bookComponents/smallButton';

const Section = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: flex-start;
  max-width: 256px;
  width: 25%;
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
    <ImageBook image={image} />
    <Information>
      {taken && <AvailableButton />}
      {!taken && <TakenButton />}
      {bookHolder && <BookHolder name={bookHolder} />}
      <NameBook name={name} />
      <AuthorBook author={author} />
      <BookRate rate={rate} />
      {!button && <SmallButton value="Order" id={id} />}
      {button && <SmallButton value="Return" id={id} />}
    </Information>
  </Section>
);

export default BookCard;
