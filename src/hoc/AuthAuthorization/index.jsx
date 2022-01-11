import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [thisUser, setThisUser] = useState(null);

  const signIn = (newUser, cb) => {
    setThisUser(newUser);
    cb();
  };

  const signOut = (newUser, cb) => {
    setThisUser(null);
    cb();
  };

  const value = { thisUser, signIn, signOut };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
