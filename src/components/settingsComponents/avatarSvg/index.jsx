import React from 'react';
import styled from '@emotion/styled';

const ImageAuthorization = styled.svg`
  display: block;
  width: 81px;
  height: 81px;
  margin: 40px auto 0;
  border-radius: 50%;
  background-color: ${(props) => props.theme.background};
  fill: ${(props) => props.theme.secondaryGrey};
`;

const AvatarSVG = () => (
  <ImageAuthorization>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M 8 2 C 6.347656 2 5 3.347656 5 5 C 5 6.652344 6.347656 8 8 8 C 9.652344 8 11 6.652344 11 5 C 11 3.347656 9.652344 2 8 2 Z M 8 8 C 5.246094 8 3 10.246094 3 13 L 4 13 C 4 10.785156 5.785156 9 8 9 C 10.214844 9 12 10.785156 12 13 L 13 13 C 13 10.246094 10.753906 8 8 8 Z M 8 3 C 9.109375 3 10 3.890625 10 5 C 10 6.109375 9.109375 7 8 7 C 6.890625 7 6 6.109375 6 5 C 6 3.890625 6.890625 3 8 3 Z" />
    </svg>
  </ImageAuthorization>
);

export default AvatarSVG;
