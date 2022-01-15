import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const RequireAuthLogin = ({ children }) => {
  const location = useLocation();
  const authorizationFlag = useSelector(createSelector((state) => state.authorisation.authorizationFlag, (data) => data));

  if (authorizationFlag) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuthLogin;
