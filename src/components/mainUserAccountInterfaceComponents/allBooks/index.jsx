import React from 'react';
import styled from '@emotion/styled';
import BookCard from '../../../containers/BookCard';

const Section = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 26px 32px;
  border-radius: 8px;
  margin-top: 40px;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
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
  margin: 40px auto 0;
  
`;

const AllBooks = () => (
  <Section>
    <H3>All books</H3>
    <BookCard />
    <Button>Show more</Button>
  </Section>
);

export default AllBooks;
