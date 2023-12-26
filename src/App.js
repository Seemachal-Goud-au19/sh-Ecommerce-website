import React, { useState } from 'react';
import Header from './components/Header'
import Home from './routes/Home/Home';
import { Button } from 'react-bootstrap';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
  <Home />
    </CartProvider>
  );
}

export default App;
