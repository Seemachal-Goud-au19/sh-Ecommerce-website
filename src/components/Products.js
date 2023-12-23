import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 const Products = ({image,label}) => {
  return (
    <>
    <h3>{label}</h3>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`/assets/${image}.jpg`} />
    
   <Card.Body>
    <p>$234</p>
   <Button variant="info">ADD TO CART</Button>
    </Card.Body>
  </Card>
  </>
  )
}

export default Products;

