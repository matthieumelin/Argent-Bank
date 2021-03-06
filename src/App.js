import React from 'react'

// react helmet
import { HelmetProvider } from 'react-helmet-async';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import Error404Page from './pages/Error404Page';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// utils
import { GlobalStyle } from './utils/style/GlobalStyle';

export default function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/user' element={<UserPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route index path="/" element={<HomePage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  )
}
