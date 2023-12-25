import React, { useState} from 'react'
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/Button';
import Cart from '../../components/Cart';
import Header from '../../components/Header'

const Home = () => {
const [isShowCart, setIsShowCart] = useState(false)
    return (
        <div>
            <Header setIsShowCart={setIsShowCart}/>
            <div style={{ backgroundColor: 'gray', height: '100px' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>The Generics</h1>
            </div>
            <ProductList />
            {isShowCart && <Cart setIsShowCart={setIsShowCart}/>}
            <Button variant="info">See The Cart</Button>
            <Footer />
        </div>
    )
}

export default Home