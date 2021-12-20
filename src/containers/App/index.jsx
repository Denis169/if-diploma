import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { colorsTheme } from '../../constants/style.varible';
import Authorization from '../authorization';
import MainUserAccountInterface from '../mainUserAccountInterface';
import Footer from '../footer';

function App() {
  return (
    <ThemeProvider theme={colorsTheme}>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Authorization />
            </>
          )}
        />
        <Route
          path="/"
          element={(
            <>
              <MainUserAccountInterface />
              <Footer />
            </>
          )}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
