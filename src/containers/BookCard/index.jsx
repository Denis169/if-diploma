import React from 'react';
import styled from '@emotion/styled';
import ImageBook from '../../components/bookComponents/imageBook';
import AvailableButton from '../../components/bookComponents/availableButton';
import BookHolder from '../../components/bookComponents/bookHolder';
import NameBook from '../../components/bookComponents/nameBook';
import AuthorBook from '../../components/bookComponents/authorBook';
import BookRate from '../../components/bookComponents/bookRate';
import ButtonOrder from '../../components/bookComponents/buttonOrder';

const Section = styled.div`
  display: flex;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 122px;
  margin-left: 12px;
`;

const BookCard = () => (
  <Section>
    <ImageBook />
    <Information>
      <AvailableButton />
      <BookHolder />
      <NameBook />
      <AuthorBook />
      <BookRate />
      <ButtonOrder />
    </Information>
  </Section>
);

export default BookCard;
