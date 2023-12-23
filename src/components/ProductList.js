import React from 'react'
import Products from './Products'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductList = () => {
    return (
        <Container>
            <h3 style={{marginLeft:'50%'}}>Music</h3>
            <Row>
                <Col><Products image='cloud' label='cloud'/></Col>
                <Col> <Products image='cloud2' label='coloring cloud' /></Col>
            </Row>
            <Row>
                <Col> <Products image='cup' label='cup' /> </Col>
                <Col> <Products image='smoke' label='smoke'/></Col>
            </Row>
            <h3 style={{marginLeft:'50%'}}>Merch</h3>
            <Row>
                <Col> <Products image='cup' label='cup' /> </Col>
                <Col> <Products image='smoke' label='smoke' /></Col>
            </Row>
        </Container>
    );
}

export default ProductList

