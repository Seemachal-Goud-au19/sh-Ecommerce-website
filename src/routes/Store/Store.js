import React, { useState } from 'react'
import ProductList from '../../components/ProductList';

import Button from 'react-bootstrap/Button';
import Cart from '../../components/Cart';

import "./Store.css"

const Store = ({isShowCart,setIsShowCart}) => {
   
    return (
        <div>
           <ProductList />
            {isShowCart && <Cart setIsShowCart={setIsShowCart} />}
           {/* <Cart setIsShowCart={setIsShowCart} /> */}
            <button className='cart-btn-bottom'>See The Cart</button>
        </div>
    )
}

export default Store