import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { colorsTheme } from '../../assets/style.varible';
import Authorization from '../Authorization';
import MainUserAccountInterface from '../MainUserAccountInterface';
import AllBooks from '../../components/MainUserAccountInterfaceComponents/AllBooks';
import Settings from '../Settings';
import LogIn from '../LogIn';
import Registration from '../Registration';
import BookPreview from '../../components/MainUserAccountInterfaceComponents/BookPreview';
import { AuthProvider } from '../../hoc/AuthAuthorization';
import RequireAuth from '../../hoc/RequireAuth';
import RequireAuthLogin from '../../hoc/RequareAufLogin';
import YourOrders from '../../components/MainUserAccountInterfaceComponents/YourOrders';

function App() {
  const navigate = useNavigate();
  const authorizationFlag = useSelector(createSelector((state) => state.authorisation.authorizationFlag, (data) => data));

  useEffect(() => {
    if (!authorizationFlag) {
      navigate('/Authorization', { replace: true });
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
          <Route element={<RequireAuth />}>
            <Route path="/" element={<MainUserAccountInterface />}>
              <Route index element={<AllBooks />} />
              <Route path="/book/:bookId" element={<BookPreview />} />
              <Route path="/yourOrders" element={<YourOrders />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
