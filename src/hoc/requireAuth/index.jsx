import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const RequireAuth = ({ children }) => {
  const authorizationFlag = useSelector(createSelector((state) => state.authorisation.authorizationFlag, (data) => data));

  if (!authorizationFlag) {
    return <Navigate to="/authorization" />;
  }

  return children;
};

export default RequireAuth;
