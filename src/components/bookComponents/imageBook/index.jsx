import React from 'react';
import styled from '@emotion/styled';

const Image = styled.div`
  // background-image: url(${(props) => props.img});
  background-color: aqua;
  width: 122px;
  height: 185px;
  border-radius: 8px;
  //background-repeat: no-repeat;
  //background-size: 122px 185px;
`;

const ImageBook = () => (
  <Image />
);

export default ImageBook;
