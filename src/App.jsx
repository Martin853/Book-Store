import React from 'react';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Books } from './pages/Books';
import { Cart } from './pages/Cart';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
