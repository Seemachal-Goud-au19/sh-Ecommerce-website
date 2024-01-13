import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';

 const Products = ({item}) => {
const {id,title,price,imageUrl,quantity} = item;

  const cartCtx = useContext(CartContext)
  const addAmountNumberandler = ()=>{
       cartCtx.addItem({
          id,
          title,
          price,
          imageUrl,
          quantity
       })
  }
  return (
    <>
    <h3>{title}</h3>
    <Link to='/product-details/:1'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
    
   <Card.Body>
    <p>${price}</p>
   <Button variant="info" onClick={addAmountNumberandler} >ADD TO CART</Button>
    </Card.Body>
  </Card>
  </Link>
  </>
  )
}

export default Products;


