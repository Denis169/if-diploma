import React from 'react';
import styled from '@emotion/styled';
import StarOnSvg from '../starOnSvg';
import StarOffSvg from '../StarOffSvg';

const Rate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 122px;
`;

const BookRate = ({ rate }) => (
  <Rate>
    { [...Array(rate)].map((item, index) => <StarOnSvg key={index.toString()} />) }
    { [...Array(5 - rate)].map((item, index) => <StarOffSvg key={index.toString()} />) }
  </Rate>
);

export default BookRate;
