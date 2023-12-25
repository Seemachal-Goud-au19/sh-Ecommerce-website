import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 const Products = ({imageUrl,label}) => {
  return (
    <>
    <h3>{label}</h3>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
    
   <Card.Body>
    <p>$234</p>
   <Button variant="info">ADD TO CART</Button>
    </Card.Body>
  </Card>
  </>
  )
}

export default Products;

