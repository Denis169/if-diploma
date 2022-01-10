import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { colorsTheme } from '../../constants/style.varible';
import Authorization from '../authorization';
import MainUserAccountInterface from '../mainUserAccountInterface';
import AllBooks from '../../components/mainUserAccountInterfaceComponents/allBooks';
import WaitingFor from '../../components/mainUserAccountInterfaceComponents/waitingFor';
import ListYourBook from '../../components/mainUserAccountInterfaceComponents/listYourBook';
import Settings from '../settings';
import LogIn from '../logIn';
import Registration from '../registration';
import BookPreview from '../../components/mainUserAccountInterfaceComponents/bookPreview';
import { AuthProvider } from '../../hoc/authAuthorization';
import RequireAuth from '../../hoc/requireAuth';
import RequireAuthLogin from '../../hoc/requareAufLogin';

function App() {
  const navigate = useNavigate();
  const authorizationFlag = useSelector(createSelector((state) => state.authorisation.authorizationFlag, (data) => data));

  useEffect(() => {
    if (!authorizationFlag) {
      navigate('/authorization', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [authorizationFlag]);

  return (
    <ThemeProvider theme={colorsTheme}>
      <AuthProvider>
        <Routes>
          <Route
            path="/authorization"
            element={(
              <RequireAuthLogin>
                <Authorization />
              </RequireAuthLogin>
            )}
          >
            <Route path="/authorization/logIn" element={<LogIn />} />
            <Route path="/authorization/signUp" element={<Registration />} />
          </Route>
          <Route path="/" element={<MainUserAccountInterface />}>
            <Route
              index
              element={(
                <RequireAuth>
                  <AllBooks />
                </RequireAuth>
            )}
            />
            <Route path="/book/:bookId" element={<BookPreview />} />
            <Route
              path="/yourOrders"
              element={(
                <>
                  <WaitingFor />
                  <ListYourBook />
                </>
              )}
            />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
