import React from 'react'

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
