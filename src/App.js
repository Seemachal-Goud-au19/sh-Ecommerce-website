import React, { useState } from 'react';
import Header from './components/Header'
import Home from './routes/Home/Home';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
