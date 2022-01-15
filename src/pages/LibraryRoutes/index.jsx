import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RequireAuthLogin from '../../hoc/RequareAufLogin';
import Authorization from '../Authorization';
import LogIn from '../LogIn';
import Registration from '../Registration';
import RequireAuth from '../../hoc/RequireAuth';
import MainUserAccountInterface from '../MainUserAccountInterface';
import AllBooks from '../../components/MainUserAccountInterfaceComponents/AllBooks';
import BookPreview from '../../components/MainUserAccountInterfaceComponents/BookPreview';
import YourOrders from '../../components/MainUserAccountInterfaceComponents/YourOrders';
import Settings from '../Settings';

const LibraryRoutes = () => (
  <>
    <Routes>
      <Route
        path="/authorization"
        element={(
          <RequireAuthLogin>
            <Authorization />
          </RequireAuthLogin>
        )}
      >
        <Route path="/authorization/log-in" element={<LogIn />} />
        <Route path="/authorization/sign-up" element={<Registration />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<MainUserAccountInterface />}>
          <Route index element={<AllBooks />} />
          <Route path="/book/:bookId" element={<BookPreview />} />
          <Route path="/your-orders" element={<YourOrders />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  </>
);

export default LibraryRoutes;
