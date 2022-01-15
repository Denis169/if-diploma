import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  width: 100%;
  height: 44px;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.secondaryGrey};
  font-size: 18px;
  line-height: 20px;
  color: ${(props) => props.theme.black};
  padding-left: 16px;
`;

const P = styled.p`
  color: ${(props) => props.theme.gray};
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-top: 16px;
`;

const Password = ({ value, onChange }) => (
  <>
    <P>Password</P>
    <Input type="password" value={value} onChange={onChange} />
  </>
);

export default Password;
