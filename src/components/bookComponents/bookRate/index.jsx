import React from 'react';
import styled from '@emotion/styled';
import StarOnSvg from '../starOnSvg';
import StarOffSvg from '../StarOffSvg';

const Rate = styled.div`
  display: flex;
    justify-content: space-between;
  width: 122px;
`;

const BookRate = () => (
  <Rate>
    <StarOnSvg />
    <StarOnSvg />
    <StarOnSvg />
    <StarOffSvg />
    <StarOffSvg />
  </Rate>
);

export default BookRate;
