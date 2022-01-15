import React from 'react';
import styled from '@emotion/styled';
import ImageBook from '../../components/BookComponents/ImageBook';
import BookRate from '../../components/BookComponents/BookRate';
import NameAndAuthor from '../../components/BookComponents/NameAndAuthor';
import SmallButton from '../../components/BookComponents/SmallButton';

const Section = styled.div`
  margin: 48px 32px 26px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 122px;
  min-height: 300px;
`;

const SectionImage = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  min-height: 185px;
`;

const BookCardYourOrders = ({ image, author, name, rate, value, id }) => (
  <Section>
    <SectionImage>
      <ImageBook image={image} id={id} />
    </SectionImage>
    <NameAndAuthor name={name} author={author} />
    <BookRate rate={rate} />
    <SmallButton value={value} id={id} />
  </Section>
);

export default BookCardYourOrders;
