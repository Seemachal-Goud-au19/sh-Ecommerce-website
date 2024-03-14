import React from 'react'
import Products from './Products'

import './ProductList.css'

const cartElements = [

    {
        id: 'm1',
        title: 'Gray T-Shirt',

        price: 280,

        imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/i/b/g/s-half-triangel-black-one-nb-nicky-boy-original-imagmhzyv6b64vfb.jpeg?q=70&crop=false',

        quantity: 1,

    },

    {
        id: 'm2',
        title: 'Orange T-Shirt',

        price: 299,

        imageUrl: 'https://rukminim2.flixcart.com/image/832/832/l0e6kcw0/t-shirt/a/i/y/xl-half-triangel-black-one-nb-nicky-boy-original-imagc749hhwtxfuj.jpeg?q=70&crop=false',

        quantity: 1,

    },

    {
        id: 'm3',
        title: 'Black T-Shirt',

        price: 289,

        imageUrl: 'https://rukminim2.flixcart.com/image/832/832/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg?q=70&crop=false',

        quantity: 1,

    },
    {
        id: 'm4',
        title: 'Blue T-Shirt',

        price: 256,

        imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/8/h/p/xl-half-triangel-black-one-nb-nicky-boy-original-imagm9gxgyhz4k63.jpeg?q=70&crop=false',

        quantity: 1,

    },

]

const ProductList = () => {
    return (
        <>
        <section id="music" class="container">
            <h2>T-Shirts</h2>
          <div className='content'>
        {cartElements.map((item)=> <Products key={item.id} item={item} />)}
        </div>
        </section>
        
     </>    
    );
}

export default ProductList



