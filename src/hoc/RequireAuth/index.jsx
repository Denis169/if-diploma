import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const RequireAuth = () => {
  const authorizationFlag = useSelector(createSelector((state) => state.authorisation.authorizationFlag, (data) => data));

  if (!authorizationFlag) {
    return <Navigate to="/authorization" />;
  }

  return <Outlet />;
};

export default RequireAuth;
