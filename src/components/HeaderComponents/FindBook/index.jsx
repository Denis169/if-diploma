import React from 'react';
import styled from '@emotion/styled';

import ImageBook from '../../BookComponents/ImageBook';
import NameAndAuthor from '../../BookComponents/NameAndAuthor';

const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 60px;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
`;

const SectionImage = styled.div`
  width: 10%;
  height: 60px;
  display: flex;
`;

const SectionNameAndAuthor = styled.div`
  width: 90%;
  display: block;
  top: 100%;
  transform: translate(10%, 20%);
`;

const FindBook = ({ image, id, name, author }) => (
  <Section>
    <SectionImage>
      <ImageBook image={image} id={id} />
    </SectionImage>
    <SectionNameAndAuthor>
      <NameAndAuthor name={name} author={author} />
    </SectionNameAndAuthor>
  </Section>
);

export default FindBook;
