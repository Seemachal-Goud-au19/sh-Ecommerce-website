import React from 'react'
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'gray', height: '100px' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>The Generics</h1>
            </div>
            <ProductList />
            <Button variant="info">See The Cart</Button>
            <Footer />
        </div>
    )
}

export default Home