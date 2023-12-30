import React, { useState } from 'react'
import ProductList from '../../components/ProductList';

import Button from 'react-bootstrap/Button';
import Cart from '../../components/Cart';


const Store = ({isShowCart,setIsShowCart}) => {
   
    return (
        <div>
           <ProductList />
            {isShowCart && <Cart setIsShowCart={setIsShowCart} />}
            <Button variant="info">See The Cart</Button>
        </div>
    )
}

export default Store