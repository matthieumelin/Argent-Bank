import React from 'react'

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from './pages/HomePage';
import Error404Page from './pages/Error404Page';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// utils
import { GlobalStyle } from './utils/style/GlobalStyle';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
