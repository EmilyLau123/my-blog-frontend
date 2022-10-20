import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import customTheme from './theme/customTheme';
import { BrowserRouter, Outlet } from 'react-router-dom';
import Browser from './Browser';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Browser />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
