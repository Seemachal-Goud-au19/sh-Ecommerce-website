import React, { useContext, useState } from 'react';
import { Routes, Route, Navigate, Redirect } from 'react-router-dom';
import Store from './routes/Store/Store';
import About from './routes/About/About';
import Home from './routes/Home/Home';
import Footer from './components/Footer';
import Header from './components/Header';

import FetchAPI from './routes/FetchAPI';
import Contact from './routes/Contact/Contact';
import ProductDetail from './routes/Product/ProductDetail';
import AuthForm from './routes/Auth/AuthForm';
import ProfilePage from './routes/profilePage/ProfilePage';
import CartContext from './store/cart-context';

function App() {
  const [isShowCart, setIsShowCart] = useState(false)
  const cartCtx = useContext(CartContext)

  return (
    <>
      <Header setIsShowCart={setIsShowCart} />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/store"
          element={cartCtx.isLoggedIn ? <Store isShowCart={isShowCart} setIsShowCart={setIsShowCart} /> : <Navigate to='/login' />}
        />
        <Route
          path="/store/:productID"
          element={cartCtx.isLoggedIn ? <ProductDetail /> : <Navigate to='/login' />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />

        {!cartCtx.isLoggedIn && <Route
          path="/login"
          element={<AuthForm />}
        />}

        {/* <Route
          path="/profile"
          element={cartCtx.isLoggedIn ? <ProfilePage /> : <Navigate to='/login' />}
        /> */}
        {/* <Route
          path="/api"
          element={<FetchAPI />}
        /> */}
        <Route
          path="*"
          element={<Navigate to='/' />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
