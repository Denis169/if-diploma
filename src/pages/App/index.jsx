import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { colorsTheme } from '../../assets/style.varible';
import { AuthProvider } from '../../hoc/AuthAuthorization';

import LibraryRoutes from '../LibraryRoutes';

function App() {
  return (
    <ThemeProvider theme={colorsTheme}>
      <AuthProvider>
        <LibraryRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
