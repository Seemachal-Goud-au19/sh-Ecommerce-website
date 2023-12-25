import React from 'react'
import Products from './Products'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cartElements = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

]

const ProductList = () => {
    return (
        <Container>
            <h3 style={{ marginLeft: '50%' }}>Music</h3>
            <Row>
        {cartElements.map((item)=> <Products imageUrl={item.imageUrl} label={item.title} />)}
           
                
            </Row>
        
        </Container>
    );
}

export default ProductList

