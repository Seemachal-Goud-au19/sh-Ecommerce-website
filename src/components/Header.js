import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerInsideExample() {
    return (
        <Navbar expand="lg" className="" style={{ backgroundColor: 'black' }}>
            <Container>
                <Navbar.Brand href="#" style={{ color: 'white' }}>HOME</Navbar.Brand>
                <Navbar.Brand href="#" style={{ color: 'white' }}>STORE</Navbar.Brand>
                <Navbar.Brand href="#" style={{ color: 'white' }}>ABOUT</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default ContainerInsideExample;