import React, { useState } from 'react'
import ProductList from '../../components/ProductList';

import Button from 'react-bootstrap/Button';
import Cart from '../../components/Cart';


const Home = ({isShowCart,setIsShowCart}) => {
   
    return (
        <div>
            <div style={{ backgroundColor: 'gray', height: '100px' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>The Generics</h1>
            </div>
            <ProductList />
            {isShowCart && <Cart setIsShowCart={setIsShowCart} />}
            <Button variant="info">See The Cart</Button>
        </div>
    )
}

export default Home