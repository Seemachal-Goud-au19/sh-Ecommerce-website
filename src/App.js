import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Store from './routes/Store/Store';
import About from './routes/About/About';
import Home from './routes/Home/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import CartProvider from './store/CartProvider';

function App() {
  const [isShowCart, setIsShowCart] = useState(false)
  return (
    <CartProvider>
      <Header setIsShowCart={setIsShowCart}/>

      <Routes>
      <Route
          path="/"
          element={ <Home />}
        />
       <Route
          path="/store"
          element={ <Store isShowCart={isShowCart} setIsShowCart={setIsShowCart}/>}
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
