import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Header from './components/Header';
import Footer from './components/Footer';
import CartProvider from './store/CartProvider';

function App() {
  const [isShowCart, setIsShowCart] = useState(false)
  return (
    <CartProvider>
      <Header setIsShowCart={setIsShowCart}/>
      <Routes>
       <Route
          path="/"
          element={ <Home isShowCart={isShowCart} setIsShowCart={setIsShowCart}/>}
        />
        <Route
          path="/about"
          element={ <About />}
        />
  </Routes>
  <Footer/>
    </CartProvider>
  );
}

export default App;
