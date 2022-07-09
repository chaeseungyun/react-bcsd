import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavibarSignIn() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>로그인</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Link to='/'><span style={{ color: 'white', marginRight: '10px' }}>Sign In</span></Link>
                        <Link to='/SignUpPage'><span style={{ color: 'white' }}>Sign Up</span></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavibarSignIn;