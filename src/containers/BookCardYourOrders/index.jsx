import React from 'react';
import styled from '@emotion/styled';
import ImageBook from '../../components/bookComponents/imageBook';
import BookRate from '../../components/bookComponents/bookRate';
import NameAndAuthor from '../../components/bookComponents/nameAndAuthor';
import SmallButton from '../../components/bookComponents/smallButton';

const Section = styled.div`
  margin: 48px 32px 26px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 12.5%;
  max-width: 122px;
  height: 300px;
`;

const BookCardYourOrders = ({ image, author, name, rate, value, id }) => (
  <Section>
    <ImageBook image={image} />
    <NameAndAuthor name={name} author={author} />
    <BookRate rate={rate} />
    <SmallButton value={value} id={id} />
  </Section>
);

export default BookCardYourOrders;
