import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Image = styled(NavLink)`
  text-decoration: none;
  background-image: url(${(props) => props.img});
  width: 100%;
  max-height: 455px;
  min-height: 25px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

const ImageBook = ({ image, id }) => (
  <Image to={`/book/${id}`} img={image} />
);

export default ImageBook;
