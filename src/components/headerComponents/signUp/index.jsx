import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { showRegistrationActionCreator } from '../../../actionCreators';

const P = styled.p`
  width: 73px;
  height: 27px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${(props) => props.theme.gray};
  cursor: pointer;
  margin-left: 50px;
`;

const SignUp = () => {
  const dispatch = useDispatch();

  const showRegistration = () => dispatch(showRegistrationActionCreator(true));

  return (
    <>
      <P onClick={showRegistration}>Sign up</P>
    </>
  );
};

export default SignUp;
