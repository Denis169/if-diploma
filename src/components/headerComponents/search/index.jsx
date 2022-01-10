import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import FindBook from '../findBook';

const Section = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 500px;
  height: 48px;
  border: 2px solid ${(props) => props.theme.generalRed};
  border-radius: 8px;
  padding-left: 16px;
  display: table-cell;
  vertical-align: center;
  font-size: 16px;
  line-height: 22px;
  &::-webkit-input-placeholder{
    color: ${(props) => props.theme.secondaryGrey};
  }
`;

const SectionSearch = styled.div`
  position: absolute;
  top: 3rem;
  width: 100%;
  z-index: 2;
`;

const Search = () => {
  const [search, setSearch] = useState('');
  const dataAllBooks = useSelector(createSelector((state) => state.allBooks.dataAllBooks, (data) => data));
  const [searchArrayBook, setSearchArrayBook] = useState([]);
  const [focused, setFocused] = React.useState(false);

  const searchChange = (event) => {
    setSearch(event.target.value);
    setSearchArrayBook(dataAllBooks.filter(
      (item) => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      || item.author.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    ));
  };

  return (
    <Section>
      <Input
        placeholder="&#128269;  Search by author, title, name"
        value={search}
        onChange={searchChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 100)}
      />
      {focused && (
      <SectionSearch>
        {searchArrayBook.map((book) => (
          <FindBook
            image={book.imageUrl}
            id={book.id}
            author={book.author}
            name={book.name}
            key={book.id}
          />
        ))}
      </SectionSearch>
      )}
    </Section>
  );
};

export default Search;
